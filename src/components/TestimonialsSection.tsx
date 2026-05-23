import { motion } from "motion/react";
import { Star, Quote, ShieldAlert, Award } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function TestimonialsSection() {
  return (
    <section className="py-20 relative overflow-hidden" id="testimonials">
      {/* Background radial soft light grid overlay */}
      <div className="absolute top-1/2 left-1/4 pointer-events-none w-80 h-80 rounded-full bg-zinc-900/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 rounded-full border border-cyan-500/20 bg-cyan-950/20 px-3.5 py-1 text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-black">
            ⭐ Client Testimonies
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Acclaimed By International <br />
            <span className="silver-gradient-text">Brand & Tech Founders.</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light max-w-xl mx-auto">
             Honest, verified reviews provided by client partners who experienced dramatic digital scaling.
          </p>
        </div>

        {/* Testimonials List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-8 relative border-cyan-500/10 hover:border-cyan-500/30"
              id={`testimonial-card-${test.id}`}
            >
              {/* Decorative Luxury Quote icon */}
              <div className="absolute top-6 right-6 text-cyan-500/5">
                <Quote className="h-10 w-10 rotate-180" />
              </div>

              {/* Feed Content block */}
              <div className="space-y-4">
                {/* Rating Stars block */}
                <div className="flex items-center space-x-1" id={`rating-stars-${test.id}`}>
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-cyan-400 text-cyan-400 border-none" />
                  ))}
                </div>

                <p className="font-sans text-xs sm:text-[13px] text-zinc-300 font-light leading-relaxed italic">
                  “{test.feedback}”
                </p>
              </div>

              {/* Individual Profile information footer */}
              <div className="flex items-center space-x-4 border-t border-white/[0.04] pt-5">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="h-10 w-10 rounded-full object-cover border border-cyan-500/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display text-xs font-bold text-white tracking-wide">{test.name}</h4>
                  <p className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider mt-0.5">
                    {test.role} • <span className="text-cyan-400 font-medium">{test.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
