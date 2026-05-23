import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CASE_STUDIES } from "../data";
import { ShieldCheck, ArrowRight, Zap, TrendingUp, Cpu, Smartphone } from "lucide-react";

export default function CaseStudiesSection() {
  const [activeStudyIdx, setActiveStudyIdx] = useState(0);

  const currentStudy = CASE_STUDIES[activeStudyIdx];

  const improvements = [
    { title: "Mobile Fluidity Setup", desc: "A custom viewport structure with touch targets scaled up to 48px to prevent drop-off rates.", icon: Smartphone },
    { title: "Sub-Second Optimization", desc: "Pre-rendered static hydration, asset pruning, and layout checks resulting in near-instant load speeds.", icon: Zap },
    { title: "Smart Schema Integration", desc: "Complete JSON-LD structured mappings submitted to search indexes to rank bookings organically.", icon: Cpu },
  ];

  return (
    <section className="py-20 bg-zinc-950/20" id="case-studies-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 rounded-full border border-cyan-500/20 bg-cyan-950/20 px-3.5 py-1 text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-black">
            📊 Quantified Returns
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Commercial Redevelopment <br />
            <span className="silver-gradient-text">That Multiplies Revenue.</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light max-w-xl mx-auto">
            Review the structural and interactive improvements executed behind our major project dispatches.
          </p>
        </div>

        {/* Tab Selection buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CASE_STUDIES.map((study, idx) => (
            <button
              key={study.id}
              onClick={() => setActiveStudyIdx(idx)}
              className={`rounded-sm px-5 py-2.5 border font-sans text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeStudyIdx === idx
                  ? "bg-cyan-500 text-black border-cyan-500"
                  : "border-white/10 bg-white/[0.02] text-zinc-400 hover:text-white hover:border-white/30"
              }`}
            >
              Case Study: {study.client}
            </button>
          ))}
        </div>

        {/* Selected Case Study Presentation Grid */}
        <div className="glass-panel rounded-xl p-8 lg:p-12 border-cyan-500/10 hover:border-cyan-500/30" id="case-study-showcase">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Story & Progress Details Column */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="space-y-2">
                <span className="font-mono text-[9px] font-bold text-cyan-400 uppercase tracking-widest block">
                  {currentStudy.industry} • {currentStudy.timeline}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-black text-white tracking-wide">
                  {currentStudy.title}
                </h3>
              </div>

              {/* Challenge vs Solution layout block */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/[0.04]">
                <div className="space-y-2.5">
                  <h4 className="font-mono text-[9px] uppercase tracking-wider text-red-400 font-black flex items-center space-x-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-ping" />
                    <span>The Commercial Friction</span>
                  </h4>
                  <p className="font-sans text-xs sm:text-[13px] text-zinc-400 font-light leading-relaxed">
                    {currentStudy.challenge}
                  </p>
                </div>

                <div className="space-y-2.5">
                  <h4 className="font-mono text-[9px] uppercase tracking-wider text-cyan-400 font-black flex items-center space-x-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <span>The Custom Solution</span>
                  </h4>
                  <p className="font-sans text-xs sm:text-[13px] text-zinc-400 font-light leading-relaxed">
                    {currentStudy.solution}
                  </p>
                </div>
              </div>

              {/* Improvements Metrics list */}
              <div className="space-y-4 pt-4 border-t border-white/[0.04]">
                <h4 className="font-mono text-[9px] tracking-wider text-zinc-500 uppercase font-black">Applied UX/UI Optimization layers</h4>
                <div className="space-y-3">
                  {improvements.map((imp, i) => (
                    <div key={i} className="flex space-x-4 items-start bg-cyan-950/10 border border-cyan-500/10 rounded-lg p-4">
                      <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-950/40 text-cyan-400">
                        <imp.icon className="h-4 w-4" />
                      </div>
                      <div className="space-y-1">
                        <h5 className="font-display text-xs font-bold text-white tracking-wide">{imp.title}</h5>
                        <p className="font-sans text-[11px] text-zinc-400 font-light leading-relaxed">{imp.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Simulated Animated Chart Metric Metrics Column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              
              <div className="rounded-xl border border-cyan-500/10 bg-cyan-950/5 p-6 flex-1 flex flex-col justify-between space-y-8">
                <div>
                  <h4 className="font-mono text-[9px] tracking-widest text-[#cbd5e1] uppercase font-bold mb-4">
                     Quantified Performance Index
                  </h4>
                  
                  {/* Generated simulated chart statistics */}
                  <div className="space-y-5">
                    {currentStudy.results.map((stat, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex justify-between text-xs font-mono text-cyan-400">
                          <span>{stat.label}</span>
                          <span className="font-bold text-cyan-300 uppercase tracking-wider">{stat.value}</span>
                        </div>
                        {/* Custom visual progress bar gauge */}
                        <div className="relative h-2 w-full rounded-sm bg-cyan-950/40 border border-cyan-500/10 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "95%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: idx * 0.1 }}
                            className="absolute top-0 bottom-0 left-0 bg-cyan-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Verification check footer row */}
                <div className="flex items-center space-x-3 border-t border-cyan-500/10 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-950/45 border border-cyan-500/20 text-cyan-400 animate-pulse">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="font-display text-xs font-semibold text-white tracking-wide">Quality Assured Auditing</h5>
                    <p className="font-mono text-[9px] text-[#cbd5e1]/40 uppercase font-black">Lighthouse Scorecard Verified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
