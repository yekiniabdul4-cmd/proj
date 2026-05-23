import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Users, Clock, MapPin, Sparkles, Check, CheckCircle2 } from "lucide-react";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  badge?: string;
}

const MENU_COURSES: Record<string, MenuItem[]> = {
  "Hors d'œuvres": [
    { name: "Siberian Caviar Atrium", description: "Infused with cold-pressed pine essence & golden leek dust", price: "€140", badge: "Signature" },
    { name: "Fjord Turbot Crudo", description: "Aromatic verbena oil, shaved winter truffle, blood orange emulsion", price: "€95" },
    { name: "Heirloom Beet Velouté", description: "Aged goat curd mousse, caramelized walnut crunch, wild sorrel", price: "€75" }
  ],
  "Plats Principaux": [
    { name: "Line-Caught Atlantic Halibut", description: "Glazed in brown butter with sea lettuce broth and sweet parsnip puree", price: "€165" },
    { name: "Dry-Aged Wagyu Filet (Grade A5)", description: "Smoked marrow reduction, wild chanterelles, baby fondant potatoes", price: "€240", badge: "Elite Choice" },
    { name: "Roasted Bresse Poularde", description: "Foie gras ravioli, sunchoke cream, roasted chicory glaze", price: "€180" }
  ],
  "Desserts & Fromages": [
    { name: "Gilded Grand Marnier Soufflé", description: "Madagascan vanilla bean center, 24-karat gold leaf wrap", price: "€85" },
    { name: "Artisanal French Cellar Cheeses", description: "Selection of six raw-milk cheeses curated by Meilleurs Ouvriers de France", price: "€95" },
    { name: "Textures of Venezuelan Cocoa", description: "Bitter chocolate ganache, fleur de sel crisp, dark cherry smoke", price: "€78" }
  ]
};

const SECTIONS = [
  { id: "atrium", name: "Imperial Glass Atrium", desc: "Under stars and cascading green creepers & acoustic waterfalls.", extra: "+€50 Cover" },
  { id: "greenhouse", name: "Heated Botanical Greenhouse", desc: "Scented jasmines, citrus groves, ambient warm hearths.", extra: "" },
  { id: "counter", name: "Chef's Counter Live Experience", desc: "Pristine basalt slab matching views of high-heat charcoal ovens.", extra: "+€100 Pre-Authorize" }
];

const SEATS = [
  { id: "T1", label: "Table 1 (Atrium Window)", reserved: false },
  { id: "T2", label: "Table 2 (Inner Ring)", reserved: true },
  { id: "T3", label: "Table 3 (Atrium Window)", reserved: false },
  { id: "T4", label: "Table 4 (Alcove)", reserved: false },
  { id: "T5", label: "Table 5 (Chef View)", reserved: false },
  { id: "T6", label: "Table 6 (Corner Booth)", reserved: true },
  { id: "T7", label: "Table 7 (Riverside Gazebo)", reserved: false },
  { id: "T8", label: "Table 8 (Hearth View)", reserved: true }
];

export default function BistroShowcase() {
  const [activeTab, setActiveTab] = useState<string>("Hors d'œuvres");
  const [reservation, setReservation] = useState({
    date: new Date().toISOString().split("T")[0],
    guests: "2 Guests",
    time: "20:30",
    section: "atrium",
    table: "T1",
    name: "",
    email: ""
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reservation.name || !reservation.email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setBookingConfirmed(true);
    }, 1500);
  };

  return (
    <div className="space-y-12">
      {/* Cinematic Hero Header */}
      <div className="relative rounded-xl overflow-hidden h-64 sm:h-80 bg-cover bg-center flex flex-col justify-end p-6 sm:p-10 border border-cyan-500/10" style={{ backgroundImage: `linear-gradient(to bottom, rgba(5,5,5,0.2) 0%, rgba(5,5,5,0.95) 100%), url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1200')` }}>
        <div className="space-y-2">
          <span className="font-mono text-[9px] text-cyan-400 font-bold uppercase tracking-widest bg-cyan-950/80 border border-cyan-500/20 px-3 py-1 rounded-sm w-max block">
            ⭐ Michelin Gastronomy
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wide">
            L'Étoile Fine Dining Paris
          </h2>
          <p className="font-sans text-xs text-zinc-300 font-light max-w-lg leading-relaxed">
            Where old-world architectural charm coordinates seamlessly with high-concept culinary science to engineer absolute sensory indulgence.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Interactive Menu Columns */}
        <div className="lg:col-span-7 space-y-6">
          <div className="border-b border-cyan-500/10 pb-4">
            <h3 className="font-display text-base font-bold text-white tracking-wide flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              The Gastronomic Almanac
            </h3>
            <p className="font-sans text-[11px] text-zinc-400 font-light mt-1">
              Select an heirloom course category to review tonight's current seasonal curation.
            </p>
          </div>

          {/* Menus Categories Buttons */}
          <div className="flex gap-2 flex-wrap">
            {Object.keys(MENU_COURSES).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-sm px-4 py-2 text-[10.5px] font-mono tracking-wider uppercase border transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-cyan-500 text-black border-cyan-500 font-bold"
                    : "border-white/10 bg-white/[0.01] text-zinc-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Active Menu items */}
          <div className="grid grid-cols-1 gap-4 pt-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {MENU_COURSES[activeTab].map((item, idx) => (
                  <div
                    key={idx}
                    className="group border border-white/5 bg-white/[0.01] hover:bg-cyan-950/10 hover:border-cyan-500/15 rounded-md p-4 flex justify-between gap-4 transition-all"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-display text-xs sm:text-sm font-bold text-white tracking-wide group-hover:text-cyan-400 transition-colors">
                          {item.name}
                        </h4>
                        {item.badge && (
                          <span className="font-mono text-[8px] bg-cyan-950/60 border border-cyan-500/20 px-1.5 py-0.5 rounded-sm text-cyan-300 uppercase font-black tracking-widest">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="font-sans text-[11px] text-zinc-400 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <span className="font-mono text-xs sm:text-sm font-bold text-cyan-400 whitespace-nowrap pt-0.5">
                      {item.price}
                    </span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dynamic Reservation Module */}
        <div className="lg:col-span-15-none lg:col-span-5">
          <div className="rounded-xl border border-cyan-500/15 bg-cyan-950/5 p-6 space-y-6 relative overflow-hidden">
            <div className="absolute top-1/2 right-1/2 w-48 h-48 bg-cyan-500/5 blur-3xl rounded-full pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {!bookingConfirmed ? (
                <motion.form
                  key="booking-form"
                  onSubmit={handleSubmit}
                  className="space-y-5 relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="space-y-1.5 border-b border-white/5 pb-3">
                    <h3 className="font-display text-xs sm:text-sm font-bold text-white tracking-wide flex items-center gap-1.5">
                      <Sparkles className="h-4 w-4 text-cyan-400" />
                      Secure Reservation Portal
                    </h3>
                    <p className="font-sans text-[10px] text-zinc-400 font-light leading-snug">
                      Each reservation is live-validated with our digital floor desk.
                    </p>
                  </div>

                  {/* Standard date & capacity selectors */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="font-mono text-[9px] text-[#cbd5e1]/50 uppercase tracking-widest font-bold">Dinner Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-cyan-400" />
                        <input
                          type="date"
                          value={reservation.date}
                          onChange={(e) => setReservation({ ...reservation, date: e.target.value })}
                          className="w-full rounded-sm border border-white/10 bg-white/[0.02] pl-9 pr-3 py-2 text-[11px] text-white focus:border-cyan-400 focus:outline-none focus:bg-cyan-950/15"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="font-mono text-[9px] text-[#cbd5e1]/50 uppercase tracking-widest font-bold">Party Size</label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-cyan-400" />
                        <select
                          value={reservation.guests}
                          onChange={(e) => setReservation({ ...reservation, guests: e.target.value })}
                          className="w-full rounded-sm border border-white/10 bg-[#050505] pl-9 pr-3 py-2 text-[11px] text-white focus:border-cyan-400 focus:outline-none"
                        >
                          {["1 Guest", "2 Guests", "4 Guests", "6 Guests", "8 Guests"].map((g) => (
                            <option key={g} value={g}>{g}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Dining Room Zone selectors */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-[9px] text-[#cbd5e1]/50 uppercase tracking-widest font-bold block">Imperial Zones</label>
                    <div className="space-y-2">
                      {SECTIONS.map((sec) => (
                        <button
                          key={sec.id}
                          type="button"
                          onClick={() => setReservation({ ...reservation, section: sec.id })}
                          className={`w-full text-left p-3 rounded-sm border flex justify-between items-start transition-all cursor-pointer ${
                            reservation.section === sec.id
                              ? "bg-cyan-950/30 border-cyan-500/40 text-white"
                              : "border-white/5 bg-[#050505] text-zinc-400 hover:border-white/20 hover:text-white"
                          }`}
                        >
                          <div className="space-y-0.5">
                            <span className="font-display text-[11px] font-bold block">{sec.name}</span>
                            <span className="font-sans text-[9px] font-light leading-snug text-zinc-400 block">{sec.desc}</span>
                          </div>
                          {sec.extra && (
                            <span className="font-mono text-[8px] uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-1.5 py-0.5 rounded-sm border border-cyan-500/20">
                              {sec.extra}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Micro Table maps Selector */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-[9px] text-[#cbd5e1]/50 uppercase tracking-widest font-bold block">Digital Seat Blueprint</label>
                    <div className="grid grid-cols-4 gap-2">
                      {SEATS.map((seat) => (
                        <button
                          key={seat.id}
                          type="button"
                          disabled={seat.reserved}
                          onClick={() => setReservation({ ...reservation, table: seat.id })}
                          className={`p-2 font-mono text-[9px] font-bold rounded-sm border transition-all text-center ${
                            seat.reserved
                              ? "opacity-35 cursor-not-allowed bg-red-950/20 border-red-500/10 text-red-400"
                              : reservation.table === seat.id
                              ? "bg-cyan-500 text-black border-cyan-500 cursor-pointer"
                              : "border-white/10 bg-white/[0.01] hover:border-cyan-500/20 text-zinc-300 hover:text-white cursor-pointer"
                          }`}
                        >
                          {seat.id}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Form input details */}
                  <div className="space-y-3 pt-2">
                    <div className="space-y-1">
                      <label className="font-mono text-[9px] text-[#cbd5e1]/50 uppercase tracking-widest font-bold block">Contact Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Jean-Luc Dubois"
                        value={reservation.name}
                        onChange={(e) => setReservation({ ...reservation, name: e.target.value })}
                        className="w-full rounded-sm border border-white/10 bg-white/[0.02] px-3.5 py-2.5 text-xs text-white placeholder-zinc-650 focus:border-cyan-400 focus:outline-none focus:bg-cyan-950/15"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-mono text-[9px] text-[#cbd5e1]/50 uppercase tracking-widest font-bold block">Direct VIP Email</label>
                      <input
                        type="email"
                        required
                        placeholder="jean-luc@noble.fr"
                        value={reservation.email}
                        onChange={(e) => setReservation({ ...reservation, email: e.target.value })}
                        className="w-full rounded-sm border border-white/10 bg-white/[0.02] px-3.5 py-2.5 text-xs text-white placeholder-zinc-650 focus:border-cyan-400 focus:outline-none focus:bg-cyan-950/15"
                      />
                    </div>
                  </div>

                  {/* Submit trigger */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 h-13 mt-3 bg-cyan-500 hover:bg-cyan-400 text-black font-display text-[11px] font-black uppercase tracking-wider rounded-sm transition-all shadow-[0_4px_20px_rgba(6,182,212,0.2)] disabled:opacity-50 cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 rounded-full border-2 border-black border-t-transparent animate-spin inline-block" />
                        <span>Confirming Seat Coordinates...</span>
                      </>
                    ) : (
                      <span>Lock In Reservation table</span>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="confirmation-pane"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-6 flex flex-col items-center justify-center h-full relative z-10"
                >
                  <div className="h-16 w-16 rounded-full bg-cyan-950/40 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 animate-pulse">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-display text-base font-bold text-white tracking-wide">
                      Reservation Secured
                    </h3>
                    <p className="font-sans text-xs text-zinc-300 font-light leading-relaxed max-w-xs">
                      Excellent, <strong className="font-bold text-cyan-400">{reservation.name}</strong>. Table <strong className="font-bold text-cyan-400">{reservation.table}</strong> within the <strong className="font-bold text-cyan-400">{SECTIONS.find(s => s.id === reservation.section)?.name}</strong> is pre-authorized.
                    </p>
                  </div>

                  {/* Micro coordinates details */}
                  <div className="border border-cyan-500/10 bg-[#050505] p-4 rounded-sm w-full space-y-2.5 max-w-sm">
                    <div className="flex justify-between items-center text-[10.5px] font-mono">
                      <span className="text-zinc-500 uppercase font-black">Calendar Node:</span>
                      <span className="text-zinc-300">{reservation.date}</span>
                    </div>
                    <div className="flex justify-between items-center text-[10.5px] font-mono">
                      <span className="text-zinc-500 uppercase font-black">Authorized Time:</span>
                      <span className="text-zinc-300">{reservation.time}</span>
                    </div>
                    <div className="flex justify-between items-center text-[10.5px] font-mono">
                      <span className="text-zinc-500 uppercase font-black">Secured Table ID:</span>
                      <span className="text-cyan-400 font-bold">{reservation.table}</span>
                    </div>
                    <div className="flex justify-between items-center text-[10.5px] font-mono">
                      <span className="text-zinc-500 uppercase font-black">Access Code:</span>
                      <span className="text-zinc-300 tracking-widest font-bold font-mono">X-ETOILE-882</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setBookingConfirmed(false);
                      setReservation({
                        ...reservation,
                        name: "",
                        email: ""
                      });
                    }}
                    className="font-mono text-[9px] text-[#cbd5e1]/50 hover:text-cyan-400 uppercase tracking-widest font-black transition-colors bg-white/5 px-4 py-2 border border-white/15 rounded-sm cursor-pointer"
                  >
                    Reset Booking Desk
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
