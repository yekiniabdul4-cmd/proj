import { motion } from "motion/react";
import { Terminal, Shield, Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onOpenConsultation: () => void;
}

export default function Header({ currentPage, setCurrentPage, onOpenConsultation }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigations = [
    { id: "home", label: "Studio" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Work" },
    { id: "case-studies", label: "Case Studies" },
    { id: "blog", label: "Insights" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#050505]/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Brand Identity Branding Logo */}
        <div 
          onClick={() => setCurrentPage("home")} 
          className="group flex cursor-pointer items-center space-x-2.5 font-display text-xl font-bold tracking-tight text-white focus:outline-none"
          id="brand-logo"
        >
          <div className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-950/20 transition-all group-hover:border-cyan-400/40">
            <span className="font-mono text-sm group-hover:text-cyan-400 text-cyan-500 font-black">H</span>
            <div className="absolute inset-0 rounded-lg bg-cyan-400/5 opacity-0 transition-opacity blur shadow-[0_0_12px_rgba(34,211,238,0.25)] group-hover:opacity-100" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tighter text-white uppercase sm:text-base">HAMIDO<span className="text-cyan-400">TECK</span></span>
            <span className="hidden font-mono text-[9px] tracking-widest text-zinc-500 uppercase sm:inline-block">Luxury Studio</span>
          </div>
        </div>

        {/* Global Desktop Navigations Bar */}
        <nav className="hidden md:flex items-center space-x-1.5 rounded-full border border-white/[0.04] bg-white/[0.02] p-1">
          {navigations.map((nav) => {
            const isActive = currentPage === nav.id;
            return (
              <button
                key={nav.id}
                onClick={() => setCurrentPage(nav.id)}
                className={`relative rounded-full px-4 py-1.5 font-sans text-xs font-semibold tracking-wide transition-all outline-none focus:outline-none ${
                  isActive ? "text-black" : "text-zinc-400 hover:text-white"
                }`}
                id={`nav-${nav.id}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 rounded-full bg-white"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{nav.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Studio CTAs & Live Availability Banner */}
        <div className="hidden lg:flex items-center space-x-5">
          <div className="flex items-center space-x-2.5 rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[10px] text-zinc-400 uppercase">Available for Q3/Q4 2026 Projects</span>
          </div>

          <button
            onClick={() => setCurrentPage("booking")}
            className="group relative flex items-center space-x-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-display text-xs font-semibold text-white transition-all hover:bg-white hover:text-black hover:border-white"
            id="book-project-header-cta"
          >
            <span>Book A Project</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile menu toggle controls */}
        <div className="flex items-center space-x-3 md:hidden">
          <button
            onClick={() => setCurrentPage("booking")}
            className="rounded-full bg-zinc-900 border border-zinc-800 px-3 py-1.5 text-[10px] font-bold text-white uppercase"
            id="header-mobile-book-cta"
          >
            Hire Me
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg border border-white/5 bg-white/5 p-2 text-zinc-400 hover:text-white focus:outline-none"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation side menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="border-b border-white/10 bg-[#050505] md:hidden"
        >
          <div className="space-y-1 px-4 pt-2 pb-6">
            {navigations.map((nav) => {
              const isActive = currentPage === nav.id;
              return (
                <button
                  key={nav.id}
                  onClick={() => {
                    setCurrentPage(nav.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full rounded-lg px-4 py-2 text-left font-display text-sm font-medium ${
                    isActive ? "bg-white/5 text-white" : "text-zinc-400 hover:text-white"
                  }`}
                  id={`nav-mobile-${nav.id}`}
                >
                  {nav.label}
                </button>
              );
            })}
            <div className="pt-4 border-t border-zinc-900 space-y-3">
              <div className="flex items-center space-x-2 px-4 py-1.5 text-xs text-zinc-500 font-mono">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>ACTIVE BOOKINGS OPEN</span>
              </div>
              <button
                onClick={() => {
                  setCurrentPage("booking");
                  setMobileMenuOpen(false);
                }}
                className="flex w-full items-center justify-center rounded-lg bg-white px-4 py-2.5 text-center text-xs font-bold text-black"
                id="header-mobile-booking-panel-cta"
              >
                Schedule Consultation Call
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
