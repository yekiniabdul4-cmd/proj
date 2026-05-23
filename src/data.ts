import { Project, BlogPost, CaseStudy, Service, Testimonial } from "./types";

export const SERVICES: Service[] = [
  {
    id: "fullstack-dev",
    title: "Full Stack Web Development",
    description: "End-to-end bespoke web architectures engineered for reliability, security, and high performance using React, Node.js, and modern APIs.",
    iconName: "Cpu",
    benefits: [
      "Custom databases & business logic",
      "Seamless secure user authentication",
      "Sub-second latency architecture",
      "Complete deployment pipeline"
    ],
    priceRange: "$5,000 - $15,000",
    deliveryTime: "4 - 8 weeks"
  },
  {
    id: "luxury-business",
    title: "Luxury Business Websites",
    description: "Immersive cinematic digital identities for premium brands, upscale hotels, restaurants, and exclusive agencies matching high-ticket aesthetics.",
    iconName: "Layers",
    benefits: [
      "Ultra-premium typographic layout",
      "Silky-smooth spatial animations",
      "Tailor-made asset integrations",
      "Designed for ultra-rich buyers"
    ],
    priceRange: "$4,000 - $10,000",
    deliveryTime: "3 - 5 weeks"
  },
  {
    id: "landing-page",
    title: "High-Converting Landing Pages",
    description: "Hyper-focused landing experiences using high-end UI design, micro-copy, and cognitive styling principles to turn traffic into paying clients.",
    iconName: "Target",
    benefits: [
      "Persuasive consumer psychology",
      "Blazing fast speed scores",
      "A/B test ready layout structure",
      "Integrated lead sync & tracking"
    ],
    priceRange: "$1,800 - $3,500",
    deliveryTime: "1 - 2 weeks"
  },
  {
    id: "saas-websites",
    title: "SaaS Product Showcase Sites",
    description: "Sleek, futuristic software marketing websites highlighting feature flows, interactive demos, Pricing calculators, and seamless conversion funnels.",
    iconName: "AppWindow",
    benefits: [
      "Interactive product feature grids",
      "Custom responsive pricing toggles",
      "Clean onboarding journey mapping",
      "Lead scoring analytics integrations"
    ],
    priceRange: "$3,500 - $8,000",
    deliveryTime: "3 - 6 weeks"
  },
  {
    id: "ecommerce",
    title: "E-Commerce Development",
    description: "Luxury digital storefronts built with seamless shopping, tailored inventory selectors, custom checkout integrations, and lightning speeds.",
    iconName: "ShoppingBag",
    benefits: [
      "Stripe, PayPal & Apple Pay setups",
      "Extremely fast multi-filter search",
      "Automated stock & order flows",
      "Optimized for core shopping metrics"
    ],
    priceRange: "$6,000 - $20,000",
    deliveryTime: "6 - 10 weeks"
  },
  {
    id: "uiux-design",
    title: "UI/UX Architecture & Prototyping",
    description: "Premium visual design systems, custom wireframes, and interactive clickable prototypes tailored for upscale client reviews.",
    iconName: "Compass",
    benefits: [
      "Aesthetic typography hierarchies",
      "Pixel-perfect interactive UX setups",
      "Figma workspace source handoff",
      "Modern usability testing focus"
    ],
    priceRange: "$2,000 - $5,000",
    deliveryTime: "2 - 4 weeks"
  },
  {
    id: "performance-seo",
    title: "Performance & SEO Blueprint",
    description: "Deep audit and programmatic optimization of slow code, images, caching, and layout shifts to guarantee a 100% Google Lighthouse score.",
    iconName: "Zap",
    benefits: [
      "100/100 Core Web Vitals targets",
      "Structured SEO Schema metadata",
      "Automatic layout shift remediation",
      "Instant server response optimization"
    ],
    priceRange: "$1,500 - $3,000",
    deliveryTime: "1 - 2 weeks"
  },
  {
    id: "api-integrations",
    title: "Custom Third-Party API Integrations",
    description: "Seamless connection of your portal with corporate CRMs, logistics software, reservation schedules, and analytical hubs.",
    iconName: "Link2",
    benefits: [
      "Robust failover connection logic",
      "Webhooks & real-time webhook hubs",
      "Bank-grade API key data security",
      "Custom dashboards for reporting"
    ],
    priceRange: "$2,000 - $6,000",
    deliveryTime: "2 - 4 weeks"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "letoile-bistro",
    name: "L'Étoile Luxury Bistro",
    category: "Restaurant Website",
    description: "An immersive, cinematic dining site for an award-winning Parisian bistro, including custom reservations and stunning scroll interactions.",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "Express", "Tailwind CSS", "Motion", "Google Calendar API"],
    results: ["+142% Table Bookings", "0.3s Cumulative Layout Shift", "99% Mobile UX Rating"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "maison-pain",
    name: "Maison du Pain Bakery",
    category: "Luxury Bakery",
    description: "An ultra-premium visual online boutique and pre-order pipeline for an artisan bakery network specializing in heritage French sourdough.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800",
    tech: ["Vite", "React", "Motion", "Tailwind v4", "Stripe API"],
    results: ["32% Organic SEO Traffic Increase", "240+ Sourdough Orders Daily", "1.2s Ideal Load-time"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "aether-saas",
    name: "Aether Analytics Dashboard",
    category: "SaaS Dashboard",
    description: "A secure analytical hub providing venture capital analysts with real-time portfolio tracking, beautiful custom graphs, and CSV synthesis.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "Recharts", "Express API", "PostgreSQL", "Tailwind CSS"],
    results: ["+45% Analyst Productivity", "$120k Monthly Server Cost Saved", "Sub-50ms Chart Rendering"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "swiftlogix-logistics",
    name: "SwiftLogix Enterprise Portal",
    category: "Logistics Dashboard",
    description: "A tracking application for national supply lines featuring coordinate tracking, route optimizations, and secure client shipping lookups.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "Express", "Vite", "Tailwind CSS", "Mapbox GL"],
    results: ["-18% Fleet Delivery Latency", "99.9% Portal Connection Uptime", "30,000 Tracks Daily"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "prism-ai",
    name: "Prism AI Conversion Stack",
    category: "SaaS Landing Page",
    description: "A high-conversion landing page presenting corporate AI assistants with customized onboarding forms and interactive sandbox tool playgrounds.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "Vite", "Motion", "Tailwind CSS", "SendGrid"],
    results: ["16.4% Form Sign-up Conversion Rate", "100% Mobile Fluidity Score", "0.4s Google FCP Rating"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "vellum-studio",
    name: "Vellum Creative Agency",
    category: "Agency Website",
    description: "An elegant, portfolio showcase layout for an architectural and creative firm utilizing space, typography, and dark-gothic grids.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "Vite", "Motion", "WebGl Shader Integration"],
    results: ["6.8x Case Study Engagement", "Featured in CSS Design Awards", "Ultra-smooth 60FPS UI"],
    demoUrl: "#",
    githubUrl: "#"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Eléonore de Rothschild",
    role: "Brand Director",
    company: "L'Étoile Culinary Group",
    feedback: "Hamido Teck didn't just build a website; they captured the absolute luxury identity of our restaurant. Since the relaunch, our online lunch bookings have grown over 140%. He is an elite visual wizard who understands conversion architecture.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120"
  },
  {
    id: "test-2",
    name: "Marcus Vance",
    role: "Co-Founder & CTO",
    company: "Aether Venture Partners",
    feedback: "The SaaS analytic dashboards built by Hamido Teck have become our standard analysts' workbench. It is blazingly fast and extremely secure. Highly communicative, professional, and easily the most efficient engineer we have worked with.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120"
  },
  {
    id: "test-3",
    name: "Jean-Pierre Durand",
    role: "Director of Logistics",
    company: "Maison du Pain Group & SwiftLogix",
    feedback: "He unified our complex supplier tracking, e-commerce orders, and storefront sites with modern, accessible, and fast web portals. His performance optimizations brought our page load time down to 0.4s, directly driving sales up.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-1",
    title: "142% Reservation Growth for L'Étoile Fine Dining",
    client: "L'Étoile Bistro",
    industry: "Luxury Restaurant System",
    challenge: "The bistro's original reservation landing page was highly clunky, slow, was causing 60% lead drop-offs on mobile, and failed to communicate the expensive luxury feel of the Michelin-starred dining experience.",
    solution: "We engineered a clean dark canvas site with fluid layout scrolls, interactive rich menu cards, streamlined custom 3-step booking modals, and micro-optimization for instant local server validation.",
    results: [
      { label: "Increase in Reservations", value: "+142%" },
      { label: "Form Bounce Reduction", value: "-75%" },
      { label: "Google PageSpeed Score", value: "99/100" },
      { label: "Mobile Reservation Latency", value: "<1.4s" }
    ],
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1200",
    timeline: "25 Days Complete Delivery"
  },
  {
    id: "case-2",
    title: "Unifying Logistics Operations and Tracking speed for SwiftLogix",
    client: "SwiftLogix International",
    industry: "Global Cargo & Relocation Logistics",
    challenge: "Traditional logistics portal tracking required customers to call support directly. The outdated desktop system could not handle mobile layouts, resulting in terrible reviews and high operator overhead.",
    solution: "We built a customized React-native web interface linking live API feeds, automated coordinates mapping, and smooth mobile sliders, allowing drivers to upload cargo receipts instantly on the move.",
    results: [
      { label: "Support Call Volume Saved", value: "-44%" },
      { label: "Client Onboarding Velocity", value: "+80%" },
      { label: "Active Mobile Drivers", value: "3,500+" },
      { label: "Portal Crash Events", value: "0" }
    ],
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=1200",
    timeline: "35 Days From Blueprint to Live"
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: "blog-1",
    title: "The Psychology of Luxury Web Pricing: How Art & Design Command Premium Fees",
    category: "Branding",
    minRead: 6,
    date: "May 18, 2026",
    summary: "Why do luxury brands thrive with minimal words and huge pictures? We dissect how typography weight, empty black margins, and smooth entry animations subconsciously command high trust.",
    content: `Luxury is not about features; it is about status, exclusivity, and supreme confidence. In web development, many businesses clutter their landing pages with endless tables and descriptive text. But elite services and conversion optimization research shows that ultra-high-ticket audiences are attracted to:
    
1. **Pristine Negative Space**: Let your layouts breathe. The more distance between elements, the more expensive each element feels.
2. **Subtle Motion**: Fast, erratic gestures scream cheap. Silky smooth, organic transitions engineered with Framer Motion feel heavy and polished, resembling high-end brand boutique stores.
3. **High Contrasts**: Deep charcoal and soft, silver gradients provide a premium night-mode visual comfort that keeps wealthy buyers longer on the page.

Discover how Hamido Teck applies these 2026 luxury digital design philosophies to increase transactional confidence by up to 2.4x.`,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "blog-2",
    title: "Why Most React Apps Fail Google SEO, and How to Achieve 100/100 Scores",
    category: "SEO Optimization",
    minRead: 8,
    date: "April 29, 2026",
    summary: "Standard React web single page applications often present blank HTML templates to search index crawlers. Learn how semantic schema setup, hydration, and modern servers solve indexing.",
    content: `Standard client-side rendering (CSR) leaves search engine index bots waiting for JavaScript downloads before compiling headers. To construct high-ranking business websites, we must use:

- **Programmatic Route Metadata**: Structured SEO Schema tags enabling Google rich snippets to capture menu schedules and prices.
- **Image Size Constraints**: Pre-allocating aspect ratios prevents Cumulative Layout Shifts (CLS), ensuring search engine algorithms rank pages perfectly.
- **Dynamic Sitemap Synthesis**: Automatic daily crawl reports fed straight into Search Console dashboards.

Learn how our standard stack delivers instantaneous server responses, keeping both your web buyers and search engines highly engaged.`,
    image: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "blog-3",
    title: "The Conversion Stack: Leveraging Speeds & Micro-interactions in Modern SaaS",
    category: "UI/UX & Conversions",
    minRead: 5,
    date: "April 10, 2026",
    summary: "Every 100ms of lag costs up to 7% in landing page checkouts. Let's analyze the exact interactive trigger layouts that turn curious scrollers into booking calls.",
    content: `Conversion is an emotional decision wrapped in logical friction. To successfully overcome client resistance, your interface must feel responsive:

- **Hover Micro-Feedback**: Instant, soft glows behind layout cards suggest touch reliability.
- **Interactive Skeleton Screen Loaders**: Gives the visual impression of speed even with slow third-party API payloads.
- **Inline Error Prevention**: Redundant validation during email typing eliminates frustration at checkout checkout grids.

We integrate these interactive layout layers seamlessly in every SaaS platform we ship, guaranteeing frictionless onboarding.`,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
  }
];

export const FAQS = [
  {
    q: "Why should we hire a luxury-focused developer over standard web agencies?",
    a: "Standard agencies use cookie-cutter templates that make your premium service look generic. As an elite developer, I study consumer psychology, typographies, and animations to build expensive-looking digital studios that uniquely communicate authority and convert wealthy international clients."
  },
  {
    q: "Do you integrate content systems and customized server APIs?",
    a: "Absolutely. I engineer responsive custom dashboards, payment gateways (Stripe subscription tiers, Apple Pay), reservation frameworks, and enterprise tracking interfaces with robust, bank-grade secure backend servers."
  },
  {
    q: "What is your standard project timeline?",
    a: "Landing pages take 1-2 weeks. Highly bespoke restaurant, luxury bakery, and business platforms require 3-5 weeks, while full-scale complex SaaS portals require 6-10 weeks of focused, pixel-perfect engineering."
  },
  {
    q: "What happens after the website goes live?",
    a: "Every project comes with 30 days of complimentary system support, performance monitoring, and search engine console verification. Further luxury hosting support and marketing SEO updates can be secured in flexible retainer options."
  }
];
