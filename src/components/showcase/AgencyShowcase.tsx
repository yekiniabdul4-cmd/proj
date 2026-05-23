import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LayoutGrid, Eye, Compass, ShieldAlert, Sparkles, X, ChevronRight } from "lucide-react";

interface AgencyProject {
  id: string;
  title: string;
  category: "Residential" | "Commercial" | "Concepts";
  location: string;
  scale: string;
  year: string;
  image: string;
}

const AGENCY_PROJECTS: AgencyProject[] = [
  { id: "p-01", title: "Atrium of Glass Monoliths", category: "Residential", location: "Saint-Germain, Paris", scale: "420 m²", year: "2025", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" },
  { id: "p-02", title: "Basalt Monolithic Columns Office", category: "Commercial", location: "Austin Tech-Belt, USA", scale: "1,850 m²", year: "2026", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
  { id: "p-03", title: "Heated Greenhouse Pavilion", category: "Residential", location: "Lyon Hills, FR", scale: "280 m²", year: "2025", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800" },
  { id: "p-04", title: "Kyoto Bamboo Spatial Installation", category: "Concepts", location: "Kyoto Forest Ring, JP", scale: "120 m²", year: "2026", image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=800" }
];

export default function AgencyShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [showBlueprints, setShowBlueprints] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<AgencyProject | null>(null);

  const filteredProjects = AGENCY_PROJECTS.filter((p) => {
    if (activeCategory === "All") return true;
    return p.category === activeCategory;
  });

  return (
    <div className="space-y-10">
      {/* Intro brutalist header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/5 pb-6">
        <div className="space-y-2 max-w-xl">
          <span className="font-mono text-[9px] text-cyan-400 font-bold uppercase tracking-widest bg-cyan-950/80 border border-cyan-500/20 px-3 py-1 rounded-sm w-max block">
            📐 Editorial Spatial Grids
          </span>
          <h2 className="font-display text-2xl font-black text-white uppercase tracking-tight leading-none sm:text-3xl">
            Vellum Architecture Gallery
          </h2>
          <p className="font-sans text-[11px] text-zinc-400 font-light leading-relaxed">
            A minimalist brut-gothic grid structure displaying spatial case sheets, and custom alignment blueprints designed to showcase structural integrity.
          </p>
        </div>

        {/* Categories filters */}
        <div className="flex flex-wrap gap-1.5 self-end">
          {["All", "Residential", "Commercial", "Concepts"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-sm px-3.5 py-1.5 border font-mono text-[9px] font-bold tracking-widest uppercase transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-cyan-500 text-black border-cyan-500"
                  : "border-white/10 bg-white/[0.01] text-zinc-450 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Control Switcher for blueprint alignment shift visual lines */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-cyan-950/5 border border-cyan-500/10 p-4 rounded-xl">
        <div className="space-y-0.5">
          <h4 className="font-display text-[12px] font-bold text-white tracking-wide uppercase flex items-center gap-2">
            <Compass className="h-4 w-4 text-cyan-400 animate-spin" style={{ animationDuration: '10s' }} />
            Layout Inspector Blueprint Switch
          </h4>
          <p className="font-sans text-[10.5px] font-light text-zinc-400">
            Activate blueprints mode to overlay structural math gridlines & pre-allocated alignment bounds.
          </p>
        </div>

        <button
          onClick={() => setShowBlueprints(!showBlueprints)}
          className={`rounded-sm px-4.5 py-2.5 font-mono text-[9.5px] font-black uppercase tracking-widest border transition-all cursor-pointer ${
            showBlueprints
              ? "bg-cyan-500 text-black border-cyan-500 font-black shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              : "border-white/10 bg-white/[0.01] hover:border-cyan-500/30 text-zinc-300"
          }`}
        >
          {showBlueprints ? "Sovereign Blueprint ACTIVE" : "Overlay Blueprints Metrics"}
        </button>
      </div>

      {/* Grid List with simulated blueprints */}
      <div className="relative">
        {/* Absolute structural blueprints background guidelines grid overlay */}
        <AnimatePresence>
          {showBlueprints && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="absolute inset-x-0 top-0 h-full grid grid-cols-4 gap-8 pointer-events-none z-10"
            >
              <div className="border-l border-r border-[#00ea8b]/20 h-full relative">
                <span className="absolute top-2 left-2 font-mono text-[8.5px] text-[#00ea8b] uppercase font-bold bg-black/95 px-1 rounded-sm border border-[#00ea8b]/10">col_1: x=0</span>
                <div className="absolute inset-y-0 left-1/2 border-l border-dashed border-[#00ea8b]/10 h-full" />
              </div>
              <div className="border-l border-r border-[#00ea8b]/20 h-full relative">
                <span className="absolute top-2 left-2 font-mono text-[8.5px] text-[#00ea8b] uppercase font-bold bg-black/95 px-1 rounded-sm border border-[#00ea8b]/10">col_2: x=25%</span>
              </div>
              <div className="border-l border-r border-[#00ea8b]/20 h-full relative">
                <span className="absolute top-2 left-2 font-mono text-[8.5px] text-[#00ea8b] uppercase font-bold bg-black/95 px-1 rounded-sm border border-[#00ea8b]/10">col_3: x=50%</span>
              </div>
              <div className="border-l border-r border-[#00ea8b]/20 h-full relative">
                <span className="absolute top-2 left-2 font-mono text-[8.5px] text-[#00ea8b] uppercase font-bold bg-black/95 px-1 rounded-sm border border-[#00ea8b]/10">col_4: x=75%</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-20">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                key={proj.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                onClick={() => setSelectedProject(proj)}
                className={`group border rounded-sm overflow-hidden bg-[#050505] cursor-pointer transition-all ${
                  showBlueprints 
                    ? "border-[#00ea8b]/30 p-2.5 shadow-[0_0_12px_rgba(0,234,139,0.06)]" 
                    : "border-white/5 hover:border-cyan-500/30"
                }`}
              >
                {/* Media frame */}
                <div className="relative aspect-[3/2] overflow-hidden bg-zinc-950">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-104"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Absolute blueprints labels */}
                  {showBlueprints && (
                    <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px] flex flex-col justify-between p-3 font-mono text-[8px] text-[#00ea8b]">
                      <div className="flex justify-between">
                        <span>ASPECT: 3/2 (1.50)</span>
                        <span>COORDINATE_ID: {proj.id}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>IMG_SOURCE: UNSPLASH</span>
                        <span>SCALE_METRIC: {proj.scale}</span>
                      </div>
                    </div>
                  )}

                  <span className="absolute bottom-3 left-3 rounded-sm bg-black/85 border border-white/10 px-2.5 py-0.5 font-mono text-[8px] uppercase tracking-widest text-[#cbd5e1]/50 font-bold block">
                    {proj.category}
                  </span>
                </div>

                {/* Info summary */}
                <div className="p-4 sm:p-5 space-y-3">
                  <div className="flex justify-between items-baseline gap-4">
                    <h3 className="font-display text-sm font-black uppercase tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                      {proj.title}
                    </h3>
                    <span className="font-mono text-[10.5px] text-zinc-500 whitespace-nowrap">
                      {proj.year}
                    </span>
                  </div>

                  <div className="flex justify-between text-[11px] font-mono border-t border-white/[0.03] pt-3 text-zinc-400">
                    <span className="font-sans text-zinc-500">Location Node:</span>
                    <span>{proj.location}</span>
                  </div>
                  <div className="flex justify-between text-[11px] font-mono text-zinc-450 text-zinc-400">
                    <span className="font-sans text-zinc-500">Volumetric parameters:</span>
                    <span>{proj.scale}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project details overlay dialog */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 bg-black/85 z-55 flex items-center justify-center p-4 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl bg-[#050505] border border-cyan-500/20 p-6 sm:p-8 rounded-xl space-y-6 relative overflow-hidden"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-4">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full aspect-video object-cover rounded-md border border-white/10"
                  referrerPolicy="no-referrer"
                />

                <div className="space-y-2">
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <span className="font-mono text-[9px] bg-cyan-950/60 border border-cyan-500/20 px-2.5 py-0.5 rounded-sm text-cyan-300 uppercase tracking-widest font-bold">
                      {selectedProject.category} Case Sheet
                    </span>
                    <span className="font-mono text-xs text-zinc-450 text-zinc-400">ARCH-_ID: {selectedProject.id} • Year {selectedProject.year}</span>
                  </div>
                  <h3 className="font-display text-lg font-black uppercase text-white tracking-tight">{selectedProject.title}</h3>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-4 font-mono text-xs">
                  <div className="space-y-1">
                    <span className="text-zinc-500 text-[9.5px] uppercase font-bold block">Sovereign Location</span>
                    <p className="text-zinc-350">{selectedProject.location}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-zinc-500 text-[9.5px] uppercase font-bold block">Consolidated Scope scale</span>
                    <p className="text-zinc-350">{selectedProject.scale}</p>
                  </div>
                </div>

                <p className="font-sans text-xs text-zinc-400 leading-relaxed font-light">
                  This state-of-the-art layout uses local thermal grids, passive aerodynamic light extraction shafts, and raw basalt columns to support extreme architectural weight metrics while establishing an absolute spatial sensory envelope.
                </p>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full py-3 mt-2 border border-[#cbd5e1]/10 hover:border-[#cbd5e1]/20 rounded-sm text-center font-mono text-[9px] uppercase tracking-widest text-[#cbd5e1]/50 hover:text-cyan-400 hover:border-cyan-500/20 transition-all cursor-pointer"
                >
                  Dismiss Spatial Blueprint
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
