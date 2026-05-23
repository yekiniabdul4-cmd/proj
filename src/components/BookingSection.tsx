import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { SERVICES } from "../data";
import { Sparkles, Check, Send, Calendar, Clock, Landmark } from "lucide-react";

interface BookingSectionProps {
  key?: string;
  preselectedServiceId?: string;
}

export default function BookingSection({ preselectedServiceId }: BookingSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceId: preselectedServiceId || "fullstack-dev",
    budget: "$5,000 - $15,000",
    timeline: "3 - 5 weeks",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const budgetOptions = [
    "$1,800 - $3,500",
    "$3,500 - $8,000",
    "$8,000 - $15,000",
    "$15,000+"
  ];

  const timelineOptions = [
    "1 - 2 weeks (Rush)",
    "3 - 5 weeks (Standard)",
    "6 - 8 weeks",
    "Flexible / Long-term"
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMessage("Please complete your profile details.");
      return;
    }

    setLoading(true);
    setErrorMessage(null);
    setStatusMessage(null);

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "A system reservation block occurred.");
      }

      setStatusMessage(data.message);
      // Reset form on success
      setFormData({
        name: "",
        email: "",
        serviceId: "fullstack-dev",
        budget: "$5,000 - $15,000",
        timeline: "3 - 5 weeks",
        description: "",
      });
    } catch (err: any) {
      setErrorMessage(err.message || "Something went wrong. Please email directly at yekiniabdul4@gmail.com.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden" id="booking-section">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl animated-glow" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 rounded-full border border-cyan-500/20 bg-cyan-950/20 px-3.5 py-1 text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-black">
             📅 Direct Boarding
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
             Schedule Your Strategic <br />
            <span className="silver-gradient-text">Project Consultation Call.</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light max-w-xl mx-auto">
             Enter your desired specs, budget, and targets. Hamido Teck will analyze your business position and follow up with a bespoke PDF proposal.
          </p>
        </div>

        {/* Form Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Information & Value Pillar Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-xl border border-cyan-500/10 bg-cyan-950/5 p-6 space-y-6">
              <h4 className="font-display text-sm font-bold text-white tracking-wide">Elite Coordination Protocol</h4>
              
              <div className="space-y-4">
                <div className="flex space-x-3 items-start">
                  <Clock className="h-4 w-4 text-cyan-400 mt-1" />
                  <div>
                    <h5 className="font-display text-xs font-semibold text-white tracking-wide">Rapid Walkthrough</h5>
                    <p className="font-sans text-[11px] text-zinc-400 font-light leading-relaxed">Proposal mapping dispatched to your email within 24 working hours.</p>
                  </div>
                </div>

                <div className="flex space-x-3 items-start">
                  <Landmark className="h-4 w-4 text-cyan-400 mt-1" />
                  <div>
                    <h5 className="font-display text-xs font-semibold text-white tracking-wide">Guaranteed Privacy</h5>
                    <p className="font-sans text-[11px] text-zinc-400 font-light leading-relaxed">Every discussion is fully protected by comprehensive NDA coverage options.</p>
                  </div>
                </div>

                <div className="flex space-x-3 items-start">
                  <Calendar className="h-4 w-4 text-cyan-400 mt-1" />
                  <div>
                    <h5 className="font-display text-xs font-semibold text-white tracking-wide">Live Consultation</h5>
                    <p className="font-sans text-[11px] text-zinc-400 font-light leading-relaxed">Complete interactive feedback video calls scheduled directly via Google Meet.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="rounded-xl border border-cyan-500/10 bg-cyan-950/20 p-6 text-center">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse inline-block mr-2" />
              <span className="font-mono text-[9px] font-bold tracking-widest text-cyan-400 uppercase">
                Active Slot Calendar Open
              </span>
            </div>
          </div>

          {/* Core Interactive Booking Form Panel Column */}
          <div className="lg:col-span-8 glass-panel rounded-xl p-6 sm:p-10 border-cyan-500/10 hover:border-cyan-500/20 bg-cyan-950/5">
            <h4 className="font-display text-base font-bold text-white mb-6 border-b border-white/5 pb-4 tracking-wide">
              Bespoke Project Spec Request
            </h4>

            {statusMessage && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 rounded-xl border border-cyan-500/20 bg-cyan-950/40 p-4 text-xs text-cyan-300 leading-relaxed font-light"
              >
                 {statusMessage}
              </motion.div>
            )}

            {errorMessage && (
              <div className="mb-6 rounded-xl border border-red-500/25 bg-red-500/5 p-4 text-xs text-red-300 leading-relaxed font-light">
                 {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" id="booking-custom-form">
              {/* Profile Details (Grid double column) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 font-bold" htmlFor="client-name">Your Full Name</label>
                  <input
                    id="client-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Marcus Vance"
                    className="w-full rounded-sm border border-white/10 bg-white/[0.02] px-4 py-3 text-xs text-white placeholder-zinc-655 focus:border-cyan-400 focus:outline-none transition-all focus:bg-cyan-950/10"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 font-bold" htmlFor="client-email">Business Email Address</label>
                  <input
                    id="client-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="marcus@aether.ai"
                    className="w-full rounded-sm border border-white/10 bg-white/[0.02] px-4 py-3 text-xs text-white placeholder-zinc-655 focus:border-cyan-400 focus:outline-none transition-all focus:bg-cyan-950/10"
                  />
                </div>
              </div>

              {/* Target service select */}
              <div className="space-y-1.5">
                <label className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 font-bold" htmlFor="target-service">Target Business Service Offering</label>
                <select
                  id="target-service"
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full rounded-sm border border-white/10 bg-[#050505] px-4 py-3 text-xs text-zinc-300 focus:border-cyan-400 focus:outline-none transition-all"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title} ({s.priceRange})
                    </option>
                  ))}
                </select>
              </div>

              {/* Investment range & timelines Selection layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 font-bold">Planned Investment Capacity</label>
                  <div className="flex flex-col gap-1.5">
                    {budgetOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: opt })}
                        className={`w-full text-left rounded-sm px-4 py-2.5 text-xs border transition-all cursor-pointer ${
                          formData.budget === opt
                            ? "bg-cyan-500 text-black border-cyan-500 font-bold"
                            : "border-white/10 bg-white/[0.01] text-zinc-400 hover:text-white hover:border-white/30"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 font-bold">Launch Timeline Target</label>
                  <div className="flex flex-col gap-1.5">
                    {timelineOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormData({ ...formData, timeline: opt })}
                        className={`w-full text-left rounded-sm px-4 py-2.5 text-xs border transition-all cursor-pointer ${
                          formData.timeline === opt
                            ? "bg-cyan-500 text-black border-cyan-500 font-bold"
                            : "border-white/10 bg-white/[0.01] text-zinc-400 hover:text-white hover:border-white/30"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Description message box */}
              <div className="space-y-1.5">
                <label className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 font-bold" htmlFor="project-description">Detailed Project Objectives</label>
                <textarea
                  id="project-description"
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Highlight key features, performance bottlenecks, or business aims..."
                  className="w-full rounded-sm border border-white/10 bg-white/[0.02] px-4 py-3 text-xs text-white placeholder-zinc-650 focus:border-cyan-400 focus:outline-none transition-all resize-none focus:bg-cyan-950/10"
                />
              </div>

              {/* Form trigger submission */}
              <button
                type="submit"
                disabled={loading}
                className="w-full group mt-4 h-14 flex items-center justify-center space-x-2 rounded-sm bg-cyan-500 px-7 py-4 font-display text-xs font-bold text-black hover:bg-cyan-400 transition-all duration-300 shadow-[0_4px_24px_rgba(6,182,212,0.25)] outline-none disabled:opacity-50 cursor-pointer"
                id="booking-submit-button"
              >
                <span>{loading ? "Locking in spec reservation..." : "Launch Consultation"}</span>
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
