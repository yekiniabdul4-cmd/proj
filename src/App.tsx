import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import BlogSection from "./components/BlogSection";
import BookingSection from "./components/BookingSection";
import ContactSection from "./components/ContactSection";
import ChatbotWidget from "./components/ChatbotWidget";
import ShowcaseModal from "./components/showcase/ShowcaseModal";
import { FAQS } from "./data";
import { ChevronDown, Plus, Minus, ArrowUpRight, Award, Copyright, Mail, ExternalLink } from "lucide-react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [preselectedServiceId, setPreselectedServiceId] = useState<string>("fullstack-dev");
  const [activeFaqIdx, setActiveFaqIdx] = useState<number | null>(null);
  const [activeShowcaseId, setActiveShowcaseId] = useState<string | null>(null);

  // Sync scroll on tab transitions
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // Special bridge when a visitor chooses a service card
  const handleSelectService = (serviceId: string) => {
    setPreselectedServiceId(serviceId);
    setCurrentPage("booking");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="space-y-12"
          >
            <HeroSection 
              onExploreWork={() => setCurrentPage("projects")} 
              onBookProject={() => setCurrentPage("booking")} 
            />
            <ServicesSection onSelectService={handleSelectService} />
            <ProjectsSection onOpenShowcase={setActiveShowcaseId} />
            <AboutSection />
            <CaseStudiesSection />
            
            {/* Trusted Technologies section */}
            <section className="py-12 border-t border-b border-cyan-500/10">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
                <p className="font-mono text-[9px] text-cyan-400 uppercase tracking-widest font-black">
                  🛡️ Certified Modern Engineering Integrations & Toolkits
                </p>
                <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                  <span className="font-sans font-extrabold text-sm sm:text-base text-zinc-300 hover:text-cyan-400 transition-colors tracking-wider cursor-default">REACT 19</span>
                  <span className="font-sans font-extrabold text-sm sm:text-base text-zinc-300 hover:text-cyan-400 transition-colors tracking-wider cursor-default">NEXT.JS CORES</span>
                  <span className="font-sans font-extrabold text-sm sm:text-base text-zinc-300 hover:text-cyan-400 transition-colors tracking-wider cursor-default">EXPRESS DIRECT</span>
                  <span className="font-mono font-bold text-sm sm:text-base text-zinc-300 hover:text-cyan-400 transition-colors tracking-wide cursor-default">TYPESCRIPT v5</span>
                  <span className="font-sans font-black text-sm sm:text-base text-zinc-300 hover:text-cyan-400 transition-colors tracking-widest cursor-default">TAILWIND CSS</span>
                  <span className="font-sans font-bold text-sm sm:text-base text-zinc-300 hover:text-cyan-400 transition-colors tracking-wider cursor-default">VITE HYDRATOR</span>
                </div>
              </div>
            </section>

            {/* Why choose Hamido Teck? / Collaboration */}
            <section className="py-20 bg-[#050505]">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="inline-flex items-center space-x-1.5 rounded-full border border-cyan-500/25 bg-cyan-950/20 px-3 py-1 text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-bold">
                       🏆 Elite Positionings
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                       Why Corporate Founders & Ventures <br />
                      <span className="silver-gradient-text">Co-design with Hamido Teck.</span>
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                       I operate at the precise intersection of mathematical backend stability and custom high-end visuals. I do not hide behind template builders; I engineer responsive layouts, write lightning-fast APIs, and structure your metadata so search engines capture your product catalog on day one.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="glass-panel rounded-xl p-6 space-y-3 border-cyan-500/10 hover:border-cyan-500/30 bg-cyan-500/[0.01]">
                      <h4 className="font-display text-sm font-bold text-white tracking-wide">60FPS Spatial Motion</h4>
                      <p className="font-sans text-xs text-zinc-400 font-light">Custom kinetic micro-gestures optimized for modern mobile and desktop screens.</p>
                    </div>
                    <div className="glass-panel rounded-xl p-6 space-y-3 border-cyan-500/10 hover:border-cyan-500/30 bg-cyan-500/[0.01]">
                      <h4 className="font-display text-sm font-bold text-white tracking-wide">Lighthouse Perfect</h4>
                      <p className="font-sans text-xs text-zinc-400 font-light">Guaranteed sub-second loading scores to drastically minimize bounces.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Collapsible FAQ Section */}
            <section className="py-20 border-t border-cyan-500/10">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="text-center mb-12 space-y-3">
                  <div className="inline-flex items-center space-x-1.5 rounded-full border border-cyan-500/25 bg-cyan-950/20 px-3.5 py-1 text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-black">
                     💬 Resolved Queries
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white tracking-wide">Frequently Answered Parameters</h3>
                  <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light">
                    Get answers about booking budgets, support coverage, and dev operations.
                  </p>
                </div>

                <div className="space-y-4" id="faq-accordions">
                  {FAQS.map((faq, idx) => {
                    const isOpen = activeFaqIdx === idx;
                    return (
                      <div 
                        key={idx}
                        className="glass-panel rounded-xl overflow-hidden border-cyan-500/10 hover:border-cyan-500/20 bg-cyan-950/5 transition-colors"
                        id={`faq-item-${idx}`}
                      >
                        <button
                          onClick={() => setActiveFaqIdx(isOpen ? null : idx)}
                          className="w-full flex items-center justify-between p-6 text-left outline-none cursor-pointer"
                        >
                          <span className="font-display text-sm font-bold text-white tracking-wide">{faq.q}</span>
                          {isOpen ? <Minus className="h-4 w-4 text-cyan-400" /> : <Plus className="h-4 w-4 text-cyan-400" />}
                        </button>
                        
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="border-t border-cyan-500/10 bg-cyan-950/15"
                            >
                              <div className="p-6 font-sans text-xs sm:text-[13px] text-zinc-400 font-light leading-relaxed">
                                {faq.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </motion.div>
        );
      case "about":
        return <AboutSection key="about" />;
      case "services":
        return <ServicesSection key="services" onSelectService={handleSelectService} />;
      case "projects":
        return <ProjectsSection key="projects" onOpenShowcase={setActiveShowcaseId} />;
      case "case-studies":
        return <CaseStudiesSection key="case-studies" />;
      case "blog":
        return <BlogSection key="blog" />;
      case "testimonials":
        return <TestimonialsSection key="testimonials" />;
      case "booking":
        return <BookingSection key="booking" preselectedServiceId={preselectedServiceId} />;
      case "contact":
        return <ContactSection key="contact" />;
      default:
        // Elegant 404 Page Fallback
        return (
          <motion.div
            key="404"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-32 flex flex-col items-center justify-center text-center space-y-6 px-4"
            id="not-found-container"
          >
            <span className="font-mono text-xs text-red-400 bg-red-500/10 px-3 py-1.5 rounded-md border border-red-500/20">
               ⚠️ ROUTE OUT-OF-BOUNDS [ERROR_404]
            </span>
            <div className="space-y-2">
              <h2 className="font-display text-4xl font-extrabold text-white">Digital Horizon Missing</h2>
              <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light max-w-sm">
                The strategic node you are querying is currently offline or undergoing schema optimization.
              </p>
            </div>
            <button
              onClick={() => setCurrentPage("home")}
              className="rounded-full bg-white text-black font-display text-xs font-bold px-7 py-3 hover:bg-zinc-150 transition-all outline-none"
              id="goto-home-404"
            >
              Return To Digital Studio
            </button>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-luxury-bg text-zinc-200 selection:bg-cyan-400 selection:text-black">
      {/* Decorative Top subtle linear beam glow header */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#050505] via-cyan-400 to-[#050505] z-50 animate-pulse" />

      {/* Global Brand Navigation Bar */}
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        onOpenConsultation={() => setCurrentPage("booking")} 
      />

      {/* Core Pages Layout Viewport */}
      <main className="relative z-10 py-8 min-h-[70vh]">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>

      {/* Corporate Luxury Footer block */}
      <footer className="border-t border-cyan-500/10 bg-[#050505] py-16 mt-20 relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            {/* Identity logo */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center space-x-2.5 font-display text-xl font-bold tracking-tight text-white">
                <div className="flex h-8 w-8 items-center justify-center rounded-sm border border-cyan-500/20 bg-cyan-950/40 text-cyan-400 font-mono text-xs font-black">H</div>
                <span className="tracking-wider text-sm sm:text-base uppercase font-black">Hamido <span className="text-cyan-400 font-black">Teck</span></span>
              </div>
              <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed max-w-xs">
                Luxury custom web software, responsive interfaces, secure APIs, and extreme Core Web Vitals optimizations engineered to command highest-ticket returns.
              </p>
            </div>

            {/* Links and Actions grids */}
            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h5 className="font-mono text-[9px] tracking-widest text-[#cbd5e1]/40 uppercase font-black">Studio Nodes</h5>
                <ul className="space-y-2">
                  {["home", "about", "services", "projects"].map((p) => (
                    <li key={p}>
                      <button
                        onClick={() => setCurrentPage(p)}
                        className="font-sans text-xs text-zinc-400 hover:text-cyan-400 capitalize transition-colors cursor-pointer"
                      >
                        {p === "home" ? "Studio" : p === "projects" ? "Work" : p}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h5 className="font-mono text-[9px] tracking-widest text-[#cbd5e1]/40 uppercase font-black">Insights</h5>
                <ul className="space-y-2">
                  {["case-studies", "blog"].map((p) => (
                    <li key={p}>
                      <button
                        onClick={() => setCurrentPage(p)}
                        className="font-sans text-xs text-zinc-400 hover:text-cyan-400 capitalize transition-colors cursor-pointer"
                      >
                        {p === "case-studies" ? "Case Studies" : "Insights Blog"}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 col-span-2 sm:col-span-1">
                <h5 className="font-mono text-[9px] tracking-widest text-[#cbd5e1]/40 uppercase font-black">Secure Line</h5>
                <div className="space-y-3">
                  <span className="font-mono text-[10.5px] text-zinc-300 font-semibold flex items-center space-x-1.5 hover:text-cyan-400 cursor-pointer">
                    <Mail className="h-3.5 w-3.5 text-cyan-550" />
                    <span>yekiniabdul4@gmail.com</span>
                  </span>
                  <button
                    onClick={() => setCurrentPage("booking")}
                    className="flex items-center space-x-1.5 rounded-sm border border-cyan-500/20 bg-cyan-950/20 px-4.5 py-2.5 font-display text-[9.5px] font-bold text-cyan-400 transition-all duration-300 hover:bg-cyan-500 hover:text-black hover:border-cyan-500 uppercase tracking-wider cursor-pointer font-bold"
                  >
                    <span>Reserve Slot</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-cyan-500/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
            {/* Copyright */}
            <div className="flex items-center space-x-1.5 text-zinc-500 font-mono text-[9px] uppercase tracking-wider">
               <Copyright className="h-3.5 w-3.5 text-cyan-500/30" />
              <span>{new Date().getFullYear()} Hamido Teck. All Rights Reserved.</span>
            </div>

            {/* Micro details assurance */}
            <div className="text-cyan-500/30 font-mono text-[8.5px] uppercase tracking-wider uppercase font-black">
               🚀 Engineered for fast mobile-viewport rendering from Cloud containers
             </div>
          </div>
        </div>
      </footer>

      {/* Live AI Consultation System assistant bubble */}
      <ChatbotWidget onOpenBooking={() => setCurrentPage("booking")} />

      {/* Dynamic Interactive Showcases overlay sandboxes */}
      <ShowcaseModal projectId={activeShowcaseId} onClose={() => setActiveShowcaseId(null)} />
    </div>
  );
}
