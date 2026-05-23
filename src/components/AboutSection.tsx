import { motion } from "motion/react";
import { Award, Compass, HeartHandshake, Eye, Rocket, CheckCircle2 } from "lucide-react";
import { PROFILE_IMAGE } from "../assets/profile";

export default function AboutSection() {
  const philosophies = [
    {
      title: "Commercial-Centric Software",
      desc: "Web code is a marketing system, not an abstract canvas. Every layout block, form position, and title size is designed to remove conversion friction.",
      icon: Eye
    },
    {
      title: "Client-First Mindset",
      desc: "Transparent boundaries, rapid response schedules, and strict milestone timelines. I coordinate closely with business founders to handle constraints.",
      icon: HeartHandshake
    },
    {
      title: "Absolute Technical Crafts",
      desc: "No bloated page builders/templates. I write lightweight raw TypeScript, reliable Express APIs, and modern styling configurations built for speed.",
      icon: Compass
    }
  ];

  const developmentSteps = [
    {
      phase: "Phase 01",
      title: "Strategic Blueprinting",
      duration: "Days 1 - 3",
      desc: "Deconstructing your commercial aims, identifying client profiles, mapping navigation architecture, and aligning timelines. We define strict KPIs early."
    },
    {
      phase: "Phase 02",
      title: "Premium Visual Prototypes",
      duration: "Days 4 - 8",
      desc: "Forging high-fidelity, expensive visual designs in Figma. We finalize typographic pairs, margins, layouts, and smooth animations before writing a single line of code."
    },
    {
      phase: "Phase 03",
      title: "Elite Custom Engineering",
      duration: "Days 9 - 18",
      desc: "Pixel-perfect translation of raw assets into optimized modular React + TypeScript. We construct fast server integrations, database schemas, and robust form workflows."
    },
    {
      phase: "Phase 04",
      title: "Google Core Vitals Verification",
      duration: "Days 19 - 21",
      desc: "Strictly auditing Cumulative Layout Shifts, optimizing asset weights, testing API response latencies, and configuring structured metadata rules for immediate search index crawls."
    },
    {
      phase: "Phase 05",
      title: "Smooth Flight Deployment",
      duration: "Day 22",
      desc: "Seamless server dispatches on modern Cloud containers, followed by a detailed digital walkthrough and up to 30 days of proactive, elite system support."
    }
  ];

  const skillBadges = [
    "React 19 / Next.js", "TypeScript (Strict)", "Express / Node.js Router", "Taylor-made API Synthesis", 
    "Vite Optimization", "Core Web Vitals Blueprinting", "Tailwind CSS v4 & v5", "Framer Motion Scripts", 
    "Supabase Schema Design", "Google Search schema mappings", "Responsive Mobile UX Architecture", 
    "Stripe Gateway Handlers", "Analytical telemetry integrations", "AI Consultation Chatbots"
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="about-section">
      {/* Decorative floating grids */}
      <div className="absolute left-0 top-1/3 pointer-events-none w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Core Biography and Journey grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-4/5 w-full max-w-sm mx-auto rounded-xl border border-cyan-500/20 bg-[#050505] p-3 overflow-hidden shadow-2xl group">
              {/* Profile Image container */}
              <div className="relative w-full h-56 rounded-lg overflow-hidden border border-white/[0.04] bg-zinc-950 flex items-center justify-center">
                <img
                  src={PROFILE_IMAGE}
                  alt="Hamido Teck profile"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:20px_20px] opacity-25" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent pointer-events-none" />
              </div>

              <div className="pt-6 relative text-center space-y-1">
                <h3 className="font-display font-black text-xl text-white tracking-wide">HAMIDO <span className="text-cyan-400">TECK</span></h3>
                <p className="font-mono text-[9.5px] uppercase tracking-wider text-cyan-400 font-bold">Founding Arch Engineer</p>
                <div className="mt-4 pt-3 border-t border-cyan-500/15 w-full text-center space-y-2">
                  <p className="font-sans text-[11px] text-zinc-400 font-light leading-relaxed">
                    “Aesthetics is the ultimate validation of robust, correct back-end structure.”
                  </p>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-cyan-400">yekiniabdul4@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8" id="about-bio-text">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-1.5 rounded-full border border-cyan-500/20 bg-cyan-950/20 px-3.5 py-1 text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-bold">
                💡 Founding Core Values
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                The Architect Behind <br />
                <span className="silver-gradient-text">High-Margin Digital Boutiques.</span>
              </h2>
            </div>

            <div className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed space-y-4">
              <p>
                Hello, I am Hamido, an independent Full Stack Developer, Creative Director, and UI/UX Architect based on modern 2026 guidelines. I turn raw ideas into world-class high-performing software configurations that instantly build authority for my clients.
              </p>
              <p>
                I am highly selective of the companies I coordinate with. I only accept projects where I can implement extreme performance transformations to directly impact conversion metrics. Whether setting up complex logistic portal registries, artisan bakery stores, gourmet reservation channels, or AI SaaS systems, my absolute focus is pixel-grade visual luxury coupled with server dependability.
              </p>
            </div>

            {/* Micro Skill Badges list */}
            <div className="space-y-3 pt-4 border-t border-white/[0.04]">
              <h4 className="font-mono text-[8.5px] tracking-wider text-zinc-500 uppercase font-black">Expertise Matrix</h4>
              <div className="flex flex-wrap gap-1.5">
                {skillBadges.map((badge, i) => (
                  <span
                    key={i}
                    className="rounded-sm bg-cyan-950/25 border border-cyan-500/10 px-3.5 py-1 font-mono text-[9.5px] text-cyan-350 font-bold"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Core Pillars */}
        <div className="border-t border-white/[0.04] pt-16">
          <div className="mx-auto max-w-3xl text-center mb-16 space-y-3">
            <h3 className="font-display text-2xl font-bold text-white tracking-wide">Elite Engineering Philosophy</h3>
            <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light max-w-xl mx-auto">
              How Hamido Teck rejects industry standards to deliver extreme product values.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophies.map((philo, i) => (
              <div
                key={i}
                className="glass-panel rounded-xl p-6 sm:p-8 space-y-4 border-cyan-500/10 hover:border-cyan-500/30"
                id={`philosophy-${i}`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-950/35 border border-cyan-500/20 text-cyan-400">
                  <philo.icon className="h-5 w-5" />
                </div>
                <h4 className="font-display text-base font-bold text-white tracking-wide">{philo.title}</h4>
                <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
                  {philo.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Development Timeline Section */}
        <div className="border-t border-white/[0.04] pt-16" id="timeline">
          <div className="mx-auto max-w-3xl text-center mb-16 space-y-3">
            <div className="inline-flex items-center space-x-1.5 rounded-full border border-cyan-500/25 bg-cyan-950/20 px-3 py-1 text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-black">
              📋 Operational Roadmap
            </div>
            <h3 className="font-display text-2xl font-bold text-white tracking-wide">My Comprehensive 5-Phase Process</h3>
            <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light max-w-xl mx-auto">
              Transparent, rapid, and pixel-precise dispatches designed for quick business scaling.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {developmentSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden border-cyan-500/10 hover:border-cyan-500/30"
                id={`process-phase-${idx}`}
              >
                {/* Visual side accent */}
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-cyan-400" />

                <div className="space-y-2 sm:max-w-xl">
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-[10.5px] font-bold text-cyan-400 uppercase bg-cyan-950/40 border border-cyan-500/25 px-2 py-0.5 rounded-sm">
                      {step.phase}
                    </span>
                    <span className="font-mono text-[9.5px] text-cyan-300/60 uppercase font-semibold">{step.duration}</span>
                  </div>
                  <h4 className="font-display text-base font-bold text-white tracking-wide">{step.title}</h4>
                  <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                
                <div className="flex items-center space-x-2 text-cyan-400 font-mono text-[9.5px] font-bold uppercase tracking-wider bg-cyan-950/20 border border-cyan-500/10 rounded-lg px-3 py-1.5">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                  <span>Verified Blueprint</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
