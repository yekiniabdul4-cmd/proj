import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Sparkles, Terminal, Shield, ArrowUpRight } from "lucide-react";

interface Message {
  role: "user" | "model";
  content: string;
}

interface ChatbotWidgetProps {
  onOpenBooking: () => void;
}

export default function ChatbotWidget({ onOpenBooking }: ChatbotWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      content: "Welcome! I am your Hamido Teck AI Project Strategist. Looking to build a high-performance web experience that converts traffic into high-value sales? Ask me about my premium tech stack, typical pricing, previous works, or how to instantly secure a project calendar spot!",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    "What is your custom pricing?",
    "Show me your tech stack",
    "How fast are your web designs?",
    "How can I book a project?",
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading, isOpen]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: textToSend };
    const updatedMessages = [...messages, userMessage];
    
    setMessages(updatedMessages);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/gemini/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!response.ok) {
        throw new Error("Failed to communicate with the strategic advisor.");
      }

      const data = await response.json();
      
      setMessages((prev) => [
        ...prev,
        { role: "model", content: data.text || "I am processing. Let us schedule a direct call." },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { 
          role: "model", 
          content: "Apologies, my system neural link is slightly congested. Please use the Contact or Booking portal, or email me directly at yekiniabdul4@gmail.com!" 
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans" id="chatbot-widget-container">
      {/* Trigger floating button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-14 w-14 items-center justify-center rounded-sm bg-cyan-500 text-black shadow-2xl hover:bg-cyan-400 focus:outline-none transition-all duration-300 relative group cursor-pointer"
        id="toggle-chatbot-button"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <X className="h-6 w-6" key="close-icon" />
          ) : (
            <div className="relative" key="message-icon">
              <MessageSquare className="h-6 w-6" />
              <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-cyan-500"></span>
              </span>
            </div>
          )}
        </AnimatePresence>
        {/* Hover label */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 bg-[#050505] border border-cyan-500/20 text-cyan-400 text-[10px] tracking-wider uppercase font-semibold px-3 py-1.5 rounded-sm whitespace-nowrap transition-all duration-300 origin-right">
          Interactive AI Consultation
        </span>
      </motion.button>

      {/* Chat window container drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="absolute bottom-18 right-0 flex h-[500px] w-[350px] flex-col rounded-xl border border-cyan-500/20 bg-[#050505] shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:w-[400px]"
            id="chatbot-window"
          >
            {/* AI Custom Header header */}
            <div className="flex items-center justify-between border-b border-cyan-500/10 bg-cyan-950/10 px-5 py-4">
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-950/40">
                  <Sparkles className="h-4 w-4 text-cyan-400 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold text-white tracking-wide">Hamido Teck Strategist</h4>
                  <div className="flex items-center space-x-1.5 font-mono text-[9px] uppercase tracking-wider text-cyan-400 font-bold">
                    <span className="h-1.2 w-1.2 rounded-full bg-cyan-400 animate-ping" />
                    <span>Real-Time Consultation</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
                id="chatbot-close"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Conversation list viewport */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-5 space-y-4"
              id="chatbot-messages-viewport"
            >
              {messages.map((msg, idx) => (
                <div 
                  key={idx}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div 
                    className={`max-w-[85%] rounded-sm px-4 py-3 text-xs leading-relaxed ${
                      msg.role === "user"
                        ? "bg-cyan-500 text-black font-bold"
                        : "bg-cyan-950/15 border border-cyan-500/10 text-zinc-200"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex space-x-1.5 rounded-sm border border-cyan-500/10 bg-cyan-950/5 px-4 py-3 items-center">
                    <span className="font-mono text-[9.5px] uppercase tracking-wider text-cyan-400/50 font-semibold mr-1">Advisor drafting response</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
            </div>

            {/* Micro Quick Prompts buttons */}
            {messages.length === 1 && (
              <div className="px-5 pb-3">
                <p className="font-mono text-[8px] tracking-wider text-zinc-500 uppercase font-black mb-1.5">Suggested conversations</p>
                <div className="flex flex-wrap gap-1.5">
                  {quickPrompts.map((p, i) => (
                    <button
                      key={i}
                      onClick={() => handleSendMessage(p)}
                      className="rounded-sm border border-white/10 bg-white/[0.02] px-2.5 py-1 text-[10.5px] font-bold text-zinc-350 hover:bg-cyan-500 hover:text-black hover:border-cyan-500 transition-all duration-200 outline-none cursor-pointer"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Booking Portal quick jump trigger */}
            <div className="px-5 py-2.5 bg-cyan-950/5 border-t border-b border-cyan-500/10 flex items-center justify-between">
              <span className="text-[10.5px] text-zinc-400 font-medium">Ready to reserve a calendar spot?</span>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center space-x-1 text-[10.5px] font-bold text-cyan-400 hover:text-cyan-300 uppercase tracking-wide group cursor-pointer"
              >
                <span>Booking Board</span>
                <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Input keyboard actions Form panel */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="flex items-center space-x-2 border-t border-cyan-500/10 p-4 bg-[#050505]"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your project overview..."
                className="flex-1 rounded-sm border border-white/10 bg-white/[0.02] px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-cyan-400 focus:outline-none transition-all focus:bg-cyan-950/10"
                id="chatbot-input-field"
              />
              <button
                type="submit"
                className="flex h-9 w-9 items-center justify-center rounded-sm bg-cyan-500 text-black hover:bg-cyan-400 transition-all focus:outline-none active:scale-95 disabled:opacity-50 cursor-pointer"
                disabled={!inputValue.trim() || isLoading}
                id="chatbot-submit"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
