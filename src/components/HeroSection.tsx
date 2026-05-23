import { motion } from "motion/react";
import { ArrowUpRight, CheckCircle, Zap, ShieldCheck, Sparkles } from "lucide-react";
import { PROFILE_IMAGE } from "../assets/profile";

interface HeroSectionProps {
  onExploreWork: () => void;
  onBookProject: () => void;
}

export default function HeroSection({ onExploreWork, onBookProject }: HeroSectionProps) {
  const stats = [
    { label: "Success Rate", value: "99.9%", icon: CheckCircle },
    { label: "Project Dispatches", value: "120+", icon: ShieldCheck },
    { label: "Avg Performance Score", value: "98/100", icon: Zap },
    { label: "Client Velocity Return", value: "18 Days", icon: Sparkles },
  ];

  const floatingBadges = [
    { text: "React 19 / Vite", x: "-18%", y: "-35%" },
    { text: "TypeScript Expert", x: "28%", y: "-18%" },
    { text: "Tailwind CSS v4", x: "-20%", y: "45%" },
    { text: "Express API Route", x: "22%", y: "30%" },
  ];

  return (
    <section className="relative overflow-hidden py-16 lg:py-24" id="hero-section">
      {/* Background Ambient Glows */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Headline and Copy column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Super Header Tagline Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 rounded-full border border-cyan-500/20 bg-cyan-950/20 px-4 py-1.5"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-mono text-[9px] font-bold tracking-widest text-cyan-400 uppercase">
                Artistic Flair Design • Luxury Studio Build
              </span>
            </motion.div>
 
            {/* Core Header Text */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display text-4xl sm:text-6xl md:text-[76px] font-black tracking-tighter text-white leading-[0.85] uppercase text-center lg:text-left"
              >
                I BUILD PREMIUM <br/> 
                <span className="text-transparent text-stroke-white text-gradient-stroke opacity-90 select-none">WEBSITES</span> THAT <br/> 
                <span className="text-cyan-400">CONVERT.</span>
              </motion.h1>
 
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mx-auto lg:mx-0 max-w-xl font-sans text-sm md:text-base leading-relaxed text-zinc-400 font-light"
              >
                Full Stack Developer crafting cinematic, conversion-focused digital experiences for elite startups, logistics networks, luxury fine-dining, and modern brands.
              </motion.p>
            </div>
 
            {/* Dual CTAs actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start items-center gap-6"
            >
              <button
                onClick={onBookProject}
                className="h-14 px-10 bg-cyan-500 text-black font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-cyan-400 transition-all duration-300 shadow-[0_4px_24px_rgba(6,182,212,0.25)] outline-none focus:outline-none"
                id="hero-primary-book-cta"
              >
                Launch Project
              </button>
 
              <button
                onClick={onExploreWork}
                className="h-14 px-8 border border-white/10 bg-white/[0.02] text-white font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 outline-none focus:outline-none"
                id="hero-secondary-work-cta"
              >
                Explore Work
              </button>
            </motion.div>
 
            {/* Quick trust assurances line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest"
            >
              💡 100% SATISFACTION VERIFICATION & COMPLIMENTARY 30-DAY SECURITY SUPPORT
            </motion.p>
          </div>
 
          {/* Portrait showcase and Floating Tech Stacks Badge Column */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-square w-72 sm:w-85 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-2.5 shadow-2xl overflow-visible"
            >
              {/* Internal abstract visual representation container */}
              <div className="relative h-full w-full rounded-xl bg-gradient-to-br from-zinc-950 to-zinc-900 border border-white/5 overflow-hidden flex flex-col items-center justify-center p-6 text-center">
                
                {/* Visual mesh design element */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
 
                {/* Simulated Glow Spotlight behind avatar */}
                <div className="absolute h-40 w-40 rounded-full bg-cyan-500/5 blur-2xl" />
 
                {/* Developer Avatar Silhouette Layout */}
                <div className="relative z-10 w-24 h-24 rounded-full border border-cyan-500/25 bg-cyan-950/20 flex items-center justify-center mb-4 transition-transform hover:scale-105 duration-300 overflow-hidden">
                  <img
                    src={PROFILE_IMAGE}
                    alt="Hamido Teck profile"
                    className="w-full h-full object-cover"
                  />
                </div>
 
                {/* Identity Card Text */}
                <div className="relative z-10 space-y-1">
                  <h3 className="font-display font-bold text-lg text-white tracking-wide">HAMIDO<span className="text-cyan-400">TECK</span></h3>
                  <p className="font-mono text-[10px] uppercase text-zinc-500 tracking-wider">Freelance Lead Architect</p>
                  <p className="font-sans text-[11px] text-zinc-400 font-light mt-1.5 px-4">
                     “Crafting digital codebases designed to elevate corporate velocity.”
                  </p>
                </div>
 
                {/* Simulated Terminal Stats indicator overlay bar */}
                <div className="absolute bottom-5 left-5 right-5 z-10 bg-[#050505]/95 border border-cyan-500/10 rounded-lg px-3 py-2 flex items-center justify-between font-mono text-[9px] uppercase tracking-wider text-cyan-400">
                  <div className="flex items-center space-x-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
                    <span>SYSTEM ONLINE</span>
                  </div>
                  <span className="text-zinc-500">UTC-TIME LIVE</span>
                </div>
              </div>
 
              {/* FLOATING TECH BADGES (animated offsets) */}
              {floatingBadges.map((badge, idx) => (
                <motion.div
                  key={idx}
                  style={{ top: "50%", left: "50%" }}
                  animate={{
                    x: badge.x,
                    y: badge.y,
                  }}
                  whileHover={{ scale: 1.05, borderColor: "rgba(34,211,238,0.4)" }}
                  className="absolute z-20 rounded-lg border border-cyan-500/20 bg-[#050505]/95 px-3 py-1.5 font-mono text-[9.5px] font-semibold text-cyan-300 drop-shadow-xl whitespace-nowrap cursor-default"
                  id={`floating-badge-${idx}`}
                >
                  {badge.text}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
 
        {/* METRICS STATS BAR */}
        <div className="mt-20 border-t border-white/[0.04]" id="metrics">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="space-y-1 text-center md:text-left"
                id={`stat-box-${idx}`}
              >
                <div className="flex items-center justify-center md:justify-start space-x-2 text-zinc-500">
                  <stat.icon className="h-3.5 w-3.5 text-cyan-500" />
                  <span className="font-mono text-[10px] font-bold tracking-wider uppercase">{stat.label}</span>
                </div>
                <h4 className="font-display text-2xl font-black text-white sm:text-3xl silver-gradient-text">
                  {stat.value}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
