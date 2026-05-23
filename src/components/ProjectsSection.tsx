import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Github, ExternalLink, Filter, TrendingUp, Sparkles } from "lucide-react";
import { Project } from "../types";
import { PROJECTS } from "../data";

interface ProjectsSectionProps {
  key?: string;
  onOpenShowcase?: (projectId: string) => void;
}

export default function ProjectsSection({ onOpenShowcase }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Restaurant Website", "Luxury Bakery", "SaaS Dashboard", "Logistics Dashboard", "Agency Website", "SaaS Landing Page"];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeFilter === "All") return true;
    return proj.category === activeFilter;
  });

  return (
    <section className="py-20 relative bg-zinc-950/40" id="projects-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-white/[0.04]">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center space-x-1.5 rounded-full border border-cyan-500/20 bg-cyan-950/20 px-3 py-1 text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-black">
              ⭐ Selected Dispatches
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Engineered Client Success. <br />
              <span className="silver-gradient-text">Case Studies & Live Portals.</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
              Explore concrete software modules engineered to accelerate commercial velocity, streamline backend operations, and load instantaneously.
            </p>
          </div>

          {/* Filtering Controller (Desktop slide) */}
          <div className="flex flex-wrap gap-1.5 max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`rounded-sm px-4 py-2 border font-sans text-[10.5px] font-bold tracking-wider transition-all uppercase cursor-pointer ${
                  activeFilter === cat
                    ? "bg-cyan-500 text-black border-cyan-500"
                    : "border-white/10 bg-white/[0.02] text-zinc-400 hover:text-white hover:border-white/30"
                }`}
                id={`filter-btn-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {cat === "All" ? "All Dispatches" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Animate Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="projects-grid-list"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={proj.id}
                className="glass-panel group overflow-hidden rounded-xl flex flex-col justify-between border-cyan-500/10 hover:border-cyan-500/30"
                id={`project-card-${proj.id}`}
              >
                {/* Media thumbnail Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-900 border-b border-white/5">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category tag bubble Overlay */}
                  <span className="absolute top-4 left-4 rounded-sm bg-cyan-950/85 border border-cyan-500/20 backdrop-blur-md px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-cyan-300 font-bold shadow-lg">
                    {proj.category}
                  </span>
                </div>

                {/* Core project metrics metadata and specs */}
                <div className="p-6 md:p-8 space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-cyan-400 transition-colors tracking-wide">
                      {proj.name}
                    </h3>
                    <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  {/* High Value Metrics Result Tag block */}
                  <div className="bg-[#050505]/80 border border-cyan-500/10 rounded-lg p-4 space-y-2">
                    <div className="flex items-center space-x-1.5 text-cyan-400 font-mono text-[8.5px] uppercase tracking-widest font-bold">
                      <TrendingUp className="h-3 w-3 text-cyan-400" />
                      <span>Verified Business Scorecard</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      {proj.results.map((res, i) => (
                        <div key={i} className="flex items-center space-x-2 text-[11px] text-zinc-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                          <span className="font-medium font-sans">{res}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technological badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-sm bg-cyan-950/20 border border-cyan-500/10 px-2 py-1 font-mono text-[9px] text-cyan-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interaction Actions Bar */}
                <div className="px-6 md:px-8 pb-6 md:pb-8 flex items-center justify-between border-t border-cyan-500/10 pt-4">
                  <div className="flex items-center space-x-1.5 font-mono text-[8.5px] text-cyan-400 font-bold uppercase">
                    <Sparkles className="h-3 w-3 animate-pulse text-cyan-400" />
                    <span>Interactive Simulator Ready</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/10 bg-cyan-950/20 text-cyan-400 hover:text-white hover:border-cyan-400 hover:bg-cyan-950/40 transition-all outline-none cursor-pointer"
                      title="GitHub Staging Repository"
                      id={`project-github-link-${proj.id}`}
                      onClick={() => alert(`Sovereign sandbox source code synced to staging repo: client-serv-${proj.id}.git`)}
                    >
                      <Github className="h-4 w-4" />
                    </button>
                    <button
                      className="flex h-10 px-4 items-center gap-1.5 rounded-sm bg-cyan-400 text-black font-display text-[9.5px] font-black uppercase tracking-widest hover:bg-cyan-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.35)] transition-all outline-none cursor-pointer"
                      title="Launch Active Showcase Portfolio Simulator"
                      id={`project-demo-link-${proj.id}`}
                      onClick={() => onOpenShowcase?.(proj.id)}
                    >
                      <span>Play Simulator</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
