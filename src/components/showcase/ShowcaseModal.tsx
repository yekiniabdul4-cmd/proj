import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, Laptop, Smartphone, Sparkles, AlertCircle, ArrowUpRight, Code2 } from "lucide-react";

import BistroShowcase from "./BistroShowcase";
import BakeryShowcase from "./BakeryShowcase";
import SaaSDashboardShowcase from "./SaaSDashboardShowcase";
import LogisticsShowcase from "./LogisticsShowcase";
import SaaSLandingShowcase from "./SaaSLandingShowcase";
import AgencyShowcase from "./AgencyShowcase";

interface ShowcaseModalProps {
  projectId: string | null;
  onClose: () => void;
}

const PROJECT_META: Record<string, { title: string; category: string; description: string }> = {
  "letoile-bistro": {
    title: "L'Étoile Luxury Bistro",
    category: "Restaurant Website",
    description: "Experience Paris standard table bookings and custom menus."
  },
  "maison-pain": {
    title: "Maison du Pain Bakery",
    category: "Luxury Bakery",
    description: "Calculate bread baskets and simulate mock Stripe checkout flows."
  },
  "aether-saas": {
    title: "Aether Analytics Dashboard",
    category: "SaaS Dashboard",
    description: "Interactive portfolio graphs, startup tables, and CSV exports."
  },
  "swiftlogix-logistics": {
    title: "SwiftLogix Enterprise Portal",
    category: "Logistics Dashboard",
    description: "Track national waybills, fuel levels, and temperatures."
  },
  "prism-ai": {
    title: "Prism AI Conversion Stack",
    category: "SaaS Landing Page",
    description: "Tweak model temperatures, run word-by-word streaming outputs."
  },
  "vellum-studio": {
    title: "Vellum Creative Agency",
    category: "Agency Website",
    description: "Study brutalist layout grids, architectural project sheets."
  }
};

export default function ShowcaseModal({ projectId, onClose }: ShowcaseModalProps) {
  const [viewportMode, setViewportMode] = useState<"desktop" | "mobile">("desktop");

  // Prevent scroll when modal is active
  useEffect(() => {
    if (projectId) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [projectId]);

  if (!projectId) return null;

  const meta = PROJECT_META[projectId] || {
    title: "Interactive Portal Preview",
    category: "Web Application Core",
    description: "Explore realistic, high-fidelity mock integrations."
  };

  const renderActiveShowcase = () => {
    switch (projectId) {
      case "letoile-bistro":
        return <BistroShowcase />;
      case "maison-pain":
        return <BakeryShowcase />;
      case "aether-saas":
        return <SaaSDashboardShowcase />;
      case "swiftlogix-logistics":
        return <LogisticsShowcase />;
      case "prism-ai":
        return <SaaSLandingShowcase />;
      case "vellum-studio":
        return <AgencyShowcase />;
      default:
        return (
          <div className="py-20 text-center space-y-4">
            <AlertCircle className="h-10 w-10 text-cyan-400 mx-auto animate-pulse" />
            <p className="font-mono text-xs text-zinc-400">
              MODULE_PREVIEW_UNAVAILABLE: No interactive simulator coordinates are bound to this selector ID yet.
            </p>
          </div>
        );
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-0 sm:p-4 overflow-hidden">
        
        {/* Entrance motion container */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.98 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 24 }}
          className="w-full h-full max-w-7xl bg-[#030303] border border-cyan-500/15 flex flex-col justify-between overflow-hidden shadow-[0_30px_70px_rgba(6,182,212,0.15)] sm:rounded-xl"
        >
          {/* Top controller header navigation */}
          <div className="flex justify-between items-center px-4 sm:px-6 py-4 border-b border-cyan-500/10 bg-[#050505] shrink-0">
            <div className="flex gap-3 items-center">
              {/* Monogram tag */}
              <div className="h-7 w-7 rounded-sm border border-cyan-500/20 bg-cyan-950/40 text-cyan-400 flex items-center justify-center font-mono text-[10px] font-black">H</div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-mono text-[8px] bg-cyan-950/60 border border-cyan-500/25 px-2 py-0.5 rounded-sm font-black text-cyan-300 uppercase tracking-widest">
                    {meta.category} Simulator
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
                </div>
                <h3 className="font-display text-sm font-bold text-white tracking-wide leading-none">{meta.title}</h3>
              </div>
            </div>

            {/* Viewport simulation and close triggers */}
            <div className="flex items-center space-x-4">
              {/* Responsive simulation switcher (Desktop only toggler layout) */}
              <div className="hidden sm:flex rounded-sm overflow-hidden p-0.5 border border-white/10 bg-zinc-950 h-8 self-center">
                <button
                  onClick={() => setViewportMode("desktop")}
                  className={`px-3 block text-[9px] font-mono font-bold tracking-widest uppercase cursor-pointer ${
                    viewportMode === "desktop"
                      ? "bg-cyan-500 text-black rounded-sm"
                      : "text-zinc-400 hover:text-white"
                  }`}
                  title="Force Canvas Desktop Frame"
                >
                  <Laptop className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => setViewportMode("mobile")}
                  className={`px-3 block text-[9px] font-mono font-bold tracking-widest uppercase cursor-pointer ${
                    viewportMode === "mobile"
                      ? "bg-cyan-500 text-black rounded-sm"
                      : "text-zinc-400 hover:text-white"
                  }`}
                  title="Force Canvas Mobile Portrait Frame"
                >
                  <Smartphone className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="h-8 w-8 rounded-sm bg-cyan-950/30 border border-cyan-500/20 hover:border-cyan-500 hover:bg-cyan-500 hover:text-black flex items-center justify-center text-cyan-400 transition-all cursor-pointer outline-none"
                id="close-showcase-simulator"
                title="Exit Showcase Simulator"
              >
                <X className="h-4.5 w-4.5 font-bold" />
              </button>
            </div>
          </div>

          {/* Core Interactive Sandbox Viewport canvas frame */}
          <div className="flex-1 overflow-y-auto bg-luxury-bg p-4 sm:p-8 flex justify-center items-start relative">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-zinc-950 via-cyan-400 to-zinc-950" />
            
            {/* Viewport Frame simulator shell containers */}
            <motion.div
              layout
              transition={{ duration: 0.4, type: "spring", stiffness: 180, damping: 20 }}
              className={`w-full transition-all border border-white/[0.04] bg-[#050505]/60 hover:border-cyan-500/10 p-4 sm:p-8 rounded-xl shadow-2xl relative ${
                viewportMode === "mobile" 
                  ? "max-w-md border-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.1)] mb-12" 
                  : "max-w-full"
              }`}
            >
              {/* Mobile Phone speaker ear indicator overlay */}
              {viewportMode === "mobile" && (
                <div className="absolute top-2 left-1/2 -translate-x-1/2 h-1 w-12 bg-zinc-800 rounded-full" />
              )}
              
              {/* Dynamic Showcase View Renders */}
              {renderActiveShowcase()}
            </motion.div>
          </div>

          {/* Bottom simulated terminal drawer feedback bar */}
          <div className="px-4 sm:px-6 py-3 border-t border-cyan-500/10 bg-[#050505] flex flex-col sm:flex-row justify-between items-center gap-2 shrink-0">
            <div className="flex items-center space-x-2 text-[10px] text-zinc-500 font-mono">
              <Code2 className="h-3.5 w-3.5 text-cyan-500/60" />
              <span>LOG: ACTIVE_SIMULATOR_PROCESS_OK</span>
            </div>

            <span className="font-sans text-[10px] text-cyan-500/70 font-bold tracking-wide uppercase flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
              All components optimized for sub-second hydration scores
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
