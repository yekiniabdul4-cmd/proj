import { motion } from "motion/react";
import { Cpu, Layers, Target, AppWindow, ShoppingBag, Compass, Zap, Link2 } from "lucide-react";
import { Service } from "../types";
import { SERVICES } from "../data";

interface ServicesSectionProps {
  key?: string;
  onSelectService: (serviceId: string) => void;
}

// Icon mapper for dynamic Lucide mapping securely
const iconMap: Record<string, any> = {
  Cpu,
  Layers,
  Target,
  AppWindow,
  ShoppingBag,
  Compass,
  Zap,
  Link2
};

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section className="py-20 bg-zinc-950/20 relative" id="services-section">
      {/* Decorative side accent background glow */}
      <div className="absolute right-0 bottom-1/4 pointer-events-none w-96 h-96 rounded-full bg-zinc-900/10 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 rounded-full border border-cyan-500/20 bg-cyan-950/20 px-3.5 py-1 text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-bold">
            ⚡ Bespoke High-Ticket Offerings
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Elite Digital Engineering <br />
            <span className="silver-gradient-text">Designed to Elevate Business Performance.</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light max-w-xl mx-auto">
            I build custom software solutions based on consumer neuroscience, responsive algorithms, and reliable state engines that capture rich market share.
          </p>
        </div>

        {/* Services Grid list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((serv, index) => {
            const IconComponent = iconMap[serv.iconName] || Cpu;
            return (
              <motion.div
                key={serv.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-panel glass-panel-hover rounded-xl p-6 sm:p-8 flex flex-col justify-between border-cyan-500/10 hover:border-cyan-500/30"
                id={`service-card-${serv.id}`}
              >
                {/* Core content block */}
                <div className="space-y-6">
                  {/* Icon & Metrics header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-950/25 text-cyan-400">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <span className="text-cyan-400 text-xs font-mono font-bold tracking-widest">0{index + 1}</span>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 font-bold">Base Investment</p>
                      <p className="font-display text-sm font-semibold text-cyan-300 tracking-tight">{serv.priceRange}</p>
                    </div>
                  </div>

                  {/* Descriptions block */}
                  <div className="space-y-2">
                    <h3 className="font-display text-base font-bold text-white tracking-wide">{serv.title}</h3>
                    <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed h-[60px] overflow-hidden">
                      {serv.description}
                    </p>
                  </div>

                  {/* Bullet benefits */}
                  <div className="border-t border-white/[0.04] pt-4 space-y-2">
                    <p className="font-mono text-[8px] tracking-wider text-zinc-500 uppercase font-black">Included Deliverables</p>
                    <ul className="space-y-1.5" id={`deliverables-${serv.id}`}>
                      {serv.benefits.map((bullet, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-[11px] text-zinc-350 font-light">
                          <span className="h-1 w-1 rounded-full bg-cyan-400 animate-pulse" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card footer CTA details */}
                <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-mono text-[8px] uppercase tracking-wider text-zinc-500 font-bold">Delivery Timeline</span>
                    <span className="font-sans text-[11px] text-zinc-300 font-medium">{serv.deliveryTime}</span>
                  </div>
                  
                  <button
                    onClick={() => onSelectService(serv.id)}
                    className="h-10 px-4 bg-cyan-500 text-black font-bold uppercase text-[9px] tracking-widest rounded-sm hover:bg-cyan-400 transition-all duration-300 cursor-pointer"
                    id={`book-service-${serv.id}`}
                  >
                    Select Option
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
