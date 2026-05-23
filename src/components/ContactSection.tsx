import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Mail, Calendar, PhoneCall, Send, ArrowUpRight, MessageSquare, MapPin } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please complete all required fields.");
      return;
    }

    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "A secure transmission error occurred.");
      }

      setSuccess(data.message);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please reach out to yekiniabdul4@gmail.com.");
    } finally {
      setLoading(false);
    }
  };

  const socials = [
    { label: "GitHub Hub", href: "#", user: "@HamidoTeck" },
    { label: "LinkedIn Pro", href: "#", user: "Hamido Teck Freelance" },
    { label: "Awwwards Dev", href: "#", user: "HamidoTeckStudio" },
    { label: "Twitter / X", href: "#", user: "@HamidoTeck" }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="contact-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 rounded-full border border-cyan-500/20 bg-cyan-950/20 px-3.5 py-1 text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-black">
            📞 Direct Communication
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
             Let’s Forge Something <br />
            <span className="silver-gradient-text font-black">Truly Exceptional.</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light max-w-xl mx-auto">
             Ready to accelerate your corporate velocity? Reach out via our channels or submit a letter straight to Hamido's digital inbox.
          </p>
        </div>

        {/* Contact Splits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          
          {/* Quick connection pillars Column */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Secure Email channel Card */}
            <div className="rounded-xl border border-cyan-500/10 bg-cyan-950/5 p-6 space-y-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-950/40 text-cyan-400">
                <Mail className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#cbd5e1]/40 font-bold">Inbound Corporate Link</span>
                <p className="font-mono text-xs sm:text-[13px] font-semibold text-white">yekiniabdul4@gmail.com</p>
                <p className="font-sans text-[11px] text-zinc-500 font-light mt-1.5 block">Response window: Less than 2 hours.</p>
              </div>
            </div>

            {/* Instant WhatsApp CTA Card */}
            <a 
              href="https://wa.me/23470000000" /* Custom structured WhatsApp template */
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-cyan-500/10 bg-cyan-950/5 p-6 flex items-center justify-between group hover:border-cyan-500/30 transition-all block cursor-pointer"
              id="whatsapp-cta"
            >
              <div className="flex items-center space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-950/40 text-[#22c55e]">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#cbd5e1]/40 font-bold">Instant Telegram / WhatsApp</span>
                  <h4 className="font-display text-xs font-bold text-white tracking-wide group-hover:underline">Chat With Hamido Teck</h4>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-zinc-500 group-hover:text-white transition-colors" />
            </a>

            {/* Social channels matrix links */}
            <div className="space-y-3 pt-4 border-t border-white/[0.04]">
              <h4 className="font-mono text-[8.5px] tracking-wider text-[#cbd5e1]/40 uppercase font-black">Independent Networks</h4>
              <div className="grid grid-cols-2 gap-3">
                {socials.map((soc, idx) => (
                  <button
                    key={idx}
                    className="group rounded-sm border border-white/10 bg-white/[0.01] hover:bg-cyan-950/10 hover:border-cyan-500/20 p-3 text-left transition-all duration-200 outline-none cursor-pointer"
                    id={`social-link-${idx}`}
                  >
                    <span className="font-mono text-[8.5px] text-[#cbd5e1]/40 uppercase font-bold tracking-wide block">{soc.label}</span>
                    <span className="font-sans text-[11px] text-zinc-350 font-light block mt-0.5 group-hover:text-cyan-400 transition-colors">{soc.user}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Secure Inbound form Column */}
          <div className="lg:col-span-8 glass-panel rounded-xl p-6 sm:p-10 border-cyan-500/10 hover:border-cyan-500/20 bg-cyan-950/5">
            <h4 className="font-display text-base font-bold text-white mb-6 border-b border-white/5 pb-4 tracking-wide">
              Secure Transmission Portal
            </h4>

            {success && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-6 rounded-xl border border-cyan-500/20 bg-cyan-950/40 p-4 text-xs text-cyan-300 leading-relaxed font-light"
              >
                {success}
              </motion.div>
            )}

            {error && (
              <div className="mb-6 rounded-xl border border-red-500/25 bg-red-500/5 p-4 text-xs text-red-300 leading-relaxed font-light">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" id="contact-custom-form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 font-bold" htmlFor="sender-name">Your Full Name</label>
                  <input
                    id="sender-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Eléonore de Rothschild"
                    className="w-full rounded-sm border border-white/10 bg-white/[0.02] px-4 py-3 text-xs text-white placeholder-zinc-655 focus:border-cyan-400 focus:outline-none transition-all focus:bg-cyan-950/10"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 font-bold" htmlFor="sender-email">Your Electronic Address</label>
                  <input
                    id="sender-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="eleonore@letoile-bistro.com"
                    className="w-full rounded-sm border border-white/10 bg-white/[0.02] px-4 py-3 text-xs text-white placeholder-zinc-655 focus:border-cyan-400 focus:outline-none transition-all focus:bg-cyan-950/10"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 font-bold" htmlFor="sender-subject">Subject Portfolio Line</label>
                <input
                  id="sender-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Inquiry regarding restaurant reservation portal remodel..."
                  className="w-full rounded-sm border border-white/10 bg-white/[0.02] px-4 py-3 text-xs text-white placeholder-zinc-655 focus:border-cyan-400 focus:outline-none transition-all focus:bg-cyan-950/10"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 font-bold" htmlFor="sender-message">Message Briefing Detail</label>
                <textarea
                  id="sender-message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detail your parameters, objectives, or timeline boundaries..."
                  className="w-full rounded-sm border border-white/10 bg-white/[0.02] px-4 py-3 text-xs text-white placeholder-zinc-650 focus:border-cyan-400 focus:outline-none transition-all resize-none focus:bg-cyan-950/10"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full group mt-4 h-14 flex items-center justify-center space-x-2 rounded-sm bg-cyan-500 px-7 py-4 font-display text-xs font-bold text-black hover:bg-cyan-400 transition-all duration-300 shadow-[0_4px_24px_rgba(6,182,212,0.25)] outline-none disabled:opacity-50 cursor-pointer uppercase"
                id="contact-submit-button"
              >
                <span>{loading ? "Transmitting wire log..." : "Transmit Broadcast"}</span>
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
