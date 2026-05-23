import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client Lazily to prevent crash on startup if key is missing
function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.trim() === "") {
    return null;
  }
  return new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// Global data stores (in-memory)
const contactSubmissions: any[] = [];
const bookingSubmissions: any[] = [];

// API: Health probe
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date() });
});

// API: Contact Submission
app.post("/api/contact", (req, res) => {
  const { name, email, subject, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email and message are required." });
  }

  const newContact = {
    id: `contact_${Date.now()}`,
    name,
    email,
    subject: subject || "No Subject",
    message,
    date: new Date()
  };

  contactSubmissions.push(newContact);
  console.log("Contact submission received:", newContact);

  return res.json({
    success: true,
    message: "Thank you for reaching out, Hamido Teck has received your message and will reply to yekiniabdul4@gmail.com within 2 hours.",
    data: newContact
  });
});

// API: Booking Submission
app.post("/api/book", (req, res) => {
  const { name, email, serviceId, budget, timeline, description } = req.body;

  if (!name || !email || !serviceId || !budget || !timeline) {
    return res.status(400).json({ error: "All profile fields are required." });
  }

  const newBooking = {
    id: `book_${Date.now()}`,
    name,
    email,
    serviceId,
    budget,
    timeline,
    description: description || "No detailed description provided.",
    status: "pending",
    date: new Date()
  };

  bookingSubmissions.push(newBooking);
  console.log("Booking request received:", newBooking);

  return res.json({
    success: true,
    message: "Your project reservation has been received. Hamido Teck is mapping your conversion strategy and will contact you shortly to schedule an introductory video call.",
    data: newBooking
  });
});

// API: Gemini Consultation Chatbot
app.post("/api/gemini/chat", async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid messages payload." });
  }

  const ai = getGeminiClient();

  if (!ai) {
    // Elegant fallback response if GEMINI_API_KEY is not configured
    const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || "";
    let mockResponse = "Hello! I am Hamido's AI Studio Agent. ";
    
    if (lastMessage.includes("price") || lastMessage.includes("cost") || lastMessage.includes("budget")) {
      mockResponse += "Typical projects range from $1,800 for high-converting landing pages, up to $15,000+ for full-scale SaaS platforms. You can select your budget and book an official consultation in the Booking page!";
    } else if (lastMessage.includes("tech") || lastMessage.includes("stack") || lastMessage.includes("react")) {
      mockResponse += "Hamido's premium stack includes React, TypeScript, Express, Vite, Tailwind CSS, Motion, and state-of-the-art interactive APIs configured to achieve modern 100/100 Core Web Vitals rankings.";
    } else if (lastMessage.includes("book") || lastMessage.includes("work") || lastMessage.includes("hire")) {
      mockResponse += "To hire Hamido Teck, head directly to the Booking Tab above and submit your details! We'll follow up with a bespoke project outline and roadmap within 24 hours.";
    } else {
      mockResponse += "I'm currently running in preview mode. To unlock my advanced, live intelligence, please configure your `GEMINI_API_KEY` in the AI Studio Settings under Secrets. In the meantime, I can tell you that Hamido Teck builds bespoke, luxury web experiences that turn normal traffic into loyal customers! Try asking about pricing, technology stack, or how to book a project.";
    }

    return res.json({
      text: mockResponse,
      keyMissing: true
    });
  }

  try {
    const formattedHistory = messages.slice(0, -1).map((m: any) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.content }]
    }));

    const lastMsgText = messages[messages.length - 1]?.content || "Hello";

    const systemInstruction = `You are the Elite AI Studio Strategist representing 'Hamido Teck', an ultra-premium, high-ticket freelance Full Stack Web Development brand.
    Your mission is to welcome potential business clients, analyze their web software needs, inspire trust, and convert them into hiring Hamido Teck.
    
    Keep responses clear, professional, elite, conversion-focused, and under 150 words.
    Never display coding jargon unless asked. Focus on business value, sub-second velocities, exquisite layout design, and revenue growth.
    
    HAMIDO TECK VITAL DETAILS:
    - Primary Brand Focus: Luxury Web Experiences For Modern Businesses.
    - Owner/Developer: Hamido, Senior Lead Engineer & Creative Director.
    - Contact email: yekiniabdul4@gmail.com
    - Base Prices:
      * Landing Pages: $1,800 - $3,500
      * Premium Custom Web App: $5,000 - $15,000
      * High-End SaaS Platform: $6,000 - $20,000
    - Top technology: React, Vite, Node/Express, Tailwind CSS, Framer Motion, optimized APIs, robust responsive containers.
    - Core Projects:
      * L'Étoile Luxury Bistro (+142% reservation rate)
      * Maison du Pain Bakery online preorder boutique
      * SwiftLogix Logistics real-time tracker portals
      * Aether Analytics dashboard ($120k monthly server cost saved)
      * Prism AI high-performance landing experience
      * Vellum Creative Studio (60FPS architecture portfolios)
      
    If clients ask to book, tell them to use the interactive 'Booking Portal' section on the website or fill out our Contact form. Be helpful, classy, and extremely polite. Ensure you communicate in a friendly, conversational tone.`;

    // Perform generation content query as instructed by gemini-api SKILL
    const chatClient = ai.chats.create({
      model: "gemini-3.5-flash",
      config: {
        systemInstruction,
        temperature: 0.75,
      },
      history: formattedHistory
    });

    const response = await chatClient.sendMessage({ message: lastMsgText });
    
    // Access response.text as a property directly, not as a method function call!
    const replyText = response.text || "I am available to assist you. Let's schedule a strategic consultation call to elevate your digital presence.";

    return res.json({
      text: replyText,
      keyMissing: false
    });
  } catch (error: any) {
    console.error("Gemini API consultation chat error:", error);
    return res.status(500).json({ 
      error: "Our custom AI assistant is momentarily thinking. Please submit your request via the Contact Form or schedule an immediate booking." 
    });
  }
});

// Serve static assets and Vite hot reload middleware setup
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Hamido Teck Server] running on http://localhost:${PORT} under NODE_ENV=${process.env.NODE_ENV}`);
  });
}

startServer();
