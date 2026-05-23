import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, Sparkles, Sliders, Check, Command, ShieldCheck, Heart } from "lucide-react";

interface BakeryProduct {
  id: string;
  name: string;
  desc: string;
  price: number;
  fermentation: string;
  hydration: string;
  image: string;
}

const BAKERY_PRODUCTS: BakeryProduct[] = [
  {
    id: "pain-heritage",
    name: "Pain Hérisson Sourdough",
    desc: "Heritage organic whole-wheat, stone-milled in Lyon. Robust walnut aromas.",
    price: 9.50,
    fermentation: "36 hrs cold retarding",
    hydration: "78% Hydration",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "pain-campagne",
    name: "Campagne Wheat Boule",
    desc: "Blended spelt, rye, and malt flour. Dynamic crisp caramelized ear detail.",
    price: 8.50,
    fermentation: "24 hrs slow proof",
    hydration: "75% Hydration",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "viennoise-choc",
    name: "Gilded Pain au Chocolat",
    desc: "Laminated PDO butter tiers, double-stuffed Venezuelan dark chocolate batons.",
    price: 6.20,
    fermentation: "18 hrs laminate resting",
    hydration: "Multi-layered flaky",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=400" // substitution pattern
  }
];

export default function BakeryShowcase() {
  const [cart, setCart] = useState<Record<string, number>>({
    "pain-heritage": 1
  });
  const [bakingStyle, setBakingStyle] = useState<string>("classic-caramelized");
  const [slicePreference, setSlicePreference] = useState<boolean>(false);
  const [checkoutStep, setCheckoutStep] = useState<"calculator" | "stripe" | "success">("calculator");
  const [stripeDetails, setStripeDetails] = useState({
    cardName: "",
    cardNumber: "4242 •••• •••• 1084",
    cardExpiry: "12/28",
    cardCvc: "822"
  });
  const [isPaying, setIsPaying] = useState(false);

  // Cart operations
  const updateQty = (id: string, delta: number) => {
    setCart((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: next };
    });
  };

  const getSubtotal = () => {
    return Object.entries(cart).reduce((total, [id, qty]) => {
      const prod = BAKERY_PRODUCTS.find((p) => p.id === id);
      return total + (prod ? prod.price * Number(qty) : 0);
    }, 0);
  };

  const getProcessingFees = () => {
    return getSubtotal() > 0 ? 1.50 : 0;
  };

  const getTotalPrice = () => {
    return getSubtotal() + getProcessingFees();
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripeDetails.cardName) return;
    setIsPaying(true);
    setTimeout(() => {
      setIsPaying(false);
      setCheckoutStep("success");
    }, 1800);
  };

  return (
    <div className="space-y-12">
      {/* Aesthetic Top banner */}
      <div className="relative rounded-xl overflow-hidden h-64 sm:h-80 bg-cover bg-center flex flex-col justify-end p-6 sm:p-10 border border-cyan-500/10" style={{ backgroundImage: `linear-gradient(to bottom, rgba(5,5,5,0.2) 0%, rgba(5,5,5,0.95) 100%), url('https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1200')` }}>
        <div className="space-y-2">
          <span className="font-mono text-[9px] text-cyan-400 font-bold uppercase tracking-widest bg-cyan-950/80 border border-cyan-500/20 px-3 py-1 rounded-sm w-max block">
            🌾 Heritage Slow Fermentation
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wide">
            Maison du Pain Artisan Boutique
          </h2>
          <p className="font-sans text-xs text-zinc-300 font-light max-w-lg leading-relaxed">
            Freshly baked pre-order channel using stone-ground wheat, wild levain, and French farm butter pre-ordered hourly to eliminate waste.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Sourdough catalog and custom variables */}
        <div className="lg:col-span-7 space-y-8">
          
          <div className="border-b border-cyan-500/10 pb-4">
            <h3 className="font-display text-base font-bold text-white tracking-wide flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Sourdough Flour Ledger & Pastries
            </h3>
            <p className="font-sans text-[11px] text-zinc-400 font-light mt-1">
              Add products into your custom baked parcel.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {BAKERY_PRODUCTS.map((prod) => {
              const qty = cart[prod.id] || 0;
              return (
                <div 
                  key={prod.id}
                  className="group rounded-xl border border-white/5 bg-white/[0.01] hover:bg-cyan-950/10 hover:border-cyan-500/15 p-4 sm:p-5 flex flex-col sm:flex-row gap-5 items-center justify-between transition-all"
                >
                  <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start text-center sm:text-left">
                    <img 
                      src={prod.image} 
                      alt={prod.name} 
                      className="w-20 h-20 rounded-lg object-cover border border-white/10"
                      referrerPolicy="no-referrer"
                    />
                    <div className="space-y-2">
                      <div className="space-y-0.5">
                        <h4 className="font-display text-sm font-bold text-white tracking-medium group-hover:text-cyan-450 transition-colors">
                          {prod.name}
                        </h4>
                        <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed max-w-sm">
                          {prod.desc}
                        </p>
                      </div>
                      
                      {/* Fermentation tags */}
                      <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start">
                        <span className="font-mono text-[8px] tracking-wider uppercase bg-[#050505] text-zinc-400 border border-white/5 px-2 py-0.5 rounded-sm">
                          {prod.fermentation}
                        </span>
                        <span className="font-mono text-[8px] tracking-wider uppercase bg-cyan-950/45 text-cyan-300 border border-cyan-500/15 px-2 py-0.5 rounded-sm">
                          {prod.hydration}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-1.5">
                    <span className="font-mono text-base font-bold text-cyan-400">
                      €{prod.price.toFixed(2)}
                    </span>
                    
                    {/* Add / Subtract counter */}
                    <div className="flex border border-white/15 bg-[#050505] rounded-sm overflow-hidden h-9 items-center">
                      <button 
                        onClick={() => updateQty(prod.id, -1)}
                        className="px-3 text-zinc-400 hover:bg-white/5 hover:text-white transition-all text-sm font-bold h-full cursor-pointer"
                      >
                        -
                      </button>
                      <span className="px-3.5 font-mono text-xs font-bold text-white border-l border-r border-white/5 min-w-[28px] text-center">
                        {qty}
                      </span>
                      <button 
                        onClick={() => updateQty(prod.id, 1)}
                        className="px-3 text-zinc-400 hover:bg-white/5 hover:text-white transition-all text-sm font-bold h-full cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sourdough preferences adjustment block */}
          <div className="rounded-xl border border-white/5 bg-white/[0.01] p-5 space-y-4">
            <h4 className="font-display text-xs font-bold text-white tracking-wide uppercase flex items-center gap-2">
              <Sliders className="h-4 w-4 text-cyan-400" />
              Custom Crust & Crumb Dialers
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Dial 1 crust option */}
              <div className="space-y-1.5">
                <label className="font-mono text-[8.5px] text-zinc-500 uppercase tracking-widest font-black block">Baking Singe Tone</label>
                <div className="space-y-1.5">
                  {[
                    { id: "gilded-dark", label: "Gilded Extra Dark Crust (High heat, blistered)" },
                    { id: "classic-caramelized", label: "Classic Golden Ear (Caramelized, chewy)" },
                    { id: "blonde-soft", label: "Light Blonde Hearth (Soft, easy bite)" }
                  ].map((style) => (
                    <button
                      key={style.id}
                      onClick={() => setBakingStyle(style.id)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-sm border text-[11px] font-medium transition-all cursor-pointer ${
                        bakingStyle === style.id
                          ? "bg-cyan-950/30 border-cyan-500/40 text-cyan-300"
                          : "border-white/5 bg-[#050505] text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      {style.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slicing toggle */}
              <div className="space-y-1.5 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <label className="font-mono text-[8.5px] text-zinc-500 uppercase tracking-widest font-black block">Slicing Hand-cut</label>
                  <button
                    onClick={() => setSlicePreference(!slicePreference)}
                    className={`w-full text-left p-3.5 rounded-sm border text-[11px] font-medium transition-all cursor-pointer flex justify-between items-center ${
                      slicePreference
                        ? "bg-cyan-950/30 border-cyan-500/40 text-cyan-300"
                        : "border-white/5 bg-[#050505] text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    <span>Pre-sliced (9mm thickness)</span>
                    <span className="font-mono text-[7.5px] bg-[#050505] text-zinc-400 border border-white/10 px-1 py-0.5 rounded-sm uppercase">
                      {slicePreference ? "Active" : "No"}
                    </span>
                  </button>
                </div>

                <div className="rounded-sm border border-cyan-500/10 bg-cyan-950/5 p-3 flex space-x-2.5 items-start">
                  <Heart className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <p className="font-sans text-[10.5px] text-zinc-400 leading-relaxed font-light">
                    Every loaf is fermented for minimum 24 hours to guarantee natural probiotics activation & deep sourdough gluten breakdown.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Calculator & Checkout Module */}
        <div className="lg:col-span-5">
          <div className="rounded-xl border border-cyan-500/15 bg-cyan-950/5 p-6 space-y-6 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-cyan-500/5 blur-3xl rounded-full pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {checkoutStep === "calculator" ? (
                <motion.div
                  key="calculator-step"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 relative z-10"
                >
                  <div className="space-y-1 border-b border-white/5 pb-3">
                    <h3 className="font-display text-xs sm:text-sm font-bold text-white tracking-wide flex items-center gap-2">
                      <ShoppingBag className="h-4 w-4 text-cyan-400" />
                      Baked Bread Basket
                    </h3>
                    <p className="font-sans text-[10px] text-zinc-400 font-light">
                      Hourly slots are locked in sequentially at the Lyon branch ovens.
                    </p>
                  </div>

                  {/* Basket list details */}
                  <div className="space-y-3 max-h-48 overflow-y-auto pr-1">
                    {Object.entries(cart).length === 0 ? (
                      <p className="font-mono text-[11px] text-zinc-500 italic py-6 text-center text-zinc-550">
                        Basket is currently empty.
                      </p>
                    ) : (
                      Object.entries(cart).map(([id, qty]) => {
                        const prod = BAKERY_PRODUCTS.find((p) => p.id === id);
                        if (!prod) return null;
                        return (
                          <div key={id} className="flex justify-between items-center text-[11px]">
                            <div className="flex items-center gap-2">
                              <span className="font-mono font-bold text-cyan-400 bg-cyan-950/60 px-1.5 py-0.5 rounded-sm border border-cyan-500/15 text-[9px]">
                                {qty}x
                              </span>
                              <span className="font-sans text-white font-medium">{prod.name}</span>
                            </div>
                            <span className="font-mono font-bold text-zinc-350">
                              €{(prod.price * Number(qty)).toFixed(2)}
                            </span>
                          </div>
                        );
                      })
                    )}
                  </div>

                  {/* Calculations totals */}
                  <div className="border-t border-white/5 pt-4 space-y-2.5">
                    <div className="flex justify-between text-[11px] font-sans">
                      <span className="text-zinc-400 font-light">Artisan Subtotal:</span>
                      <span className="font-mono text-zinc-350">€{getSubtotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-[11px] font-sans">
                      <span className="text-zinc-400 font-light">Lyon Oven Coordination Fee:</span>
                      <span className="font-mono text-zinc-350">€{getProcessingFees().toFixed(2)}</span>
                    </div>
                    
                    <div className="border-t border-cyan-500/15 pt-3 flex justify-between items-center">
                      <span className="font-display text-xs font-bold text-white tracking-wide">Dynamic Invoice Total:</span>
                      <span className="font-mono text-base font-black text-cyan-450">
                        €{getTotalPrice().toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      if (getSubtotal() > 0) setCheckoutStep("stripe");
                    }}
                    disabled={getSubtotal() === 0}
                    className="w-full py-4 h-13 mt-2 bg-cyan-500 hover:bg-cyan-400 text-black font-display text-[11px] font-black uppercase tracking-wider rounded-sm transition-all shadow-[0_4px_20px_rgba(6,182,212,0.2)] disabled:opacity-35 cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Initiate Pre-Order Checkout</span>
                  </button>
                </motion.div>
              ) : checkoutStep === "stripe" ? (
                <motion.form
                  key="stripe-step"
                  onSubmit={handlePay}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5 relative z-10"
                >
                  <div className="space-y-1.5 border-b border-white/5 pb-3">
                    <h3 className="font-mono text-[9px] font-extrabold text-[#cbd5e1]/40 uppercase tracking-widest flex items-center gap-1">
                      <Command className="h-3.5 w-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
                      Stripe Luxury API Gateway
                    </h3>
                    <div className="flex justify-between items-center">
                      <span className="font-display text-sm font-bold text-white tracking-wide">Secure Checkout Ledger</span>
                      <span className="font-mono text-xs font-bold text-cyan-400">€{getTotalPrice().toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="space-y-3.5">
                    <div className="space-y-1">
                      <label className="font-mono text-[8.5px] text-[#cbd5e1]/40 uppercase tracking-widest font-black block">Cardholder Signature</label>
                      <input
                        type="text"
                        required
                        placeholder="Eléonore de Rothschild"
                        value={stripeDetails.cardName}
                        onChange={(e) => setStripeDetails({ ...stripeDetails, cardName: e.target.value })}
                        className="w-full rounded-sm border border-white/10 bg-[#050505] px-3.5 py-2.5 text-xs text-white placeholder-zinc-655 focus:border-cyan-400 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-mono text-[8.5px] text-[#cbd5e1]/40 uppercase tracking-widest font-black block font-bold">Standard Card coordinates</label>
                      <input
                        type="text"
                        disabled
                        value={stripeDetails.cardNumber}
                        className="w-full rounded-sm border border-white/15 bg-zinc-950/40 text-zinc-400 opacity-70 px-3.5 py-2.5 text-xs font-mono"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="font-mono text-[8.5px] text-[#cbd5e1]/40 uppercase tracking-widest font-black block">Expiry Date</label>
                        <input
                          type="text"
                          disabled
                          value={stripeDetails.cardExpiry}
                          className="w-full rounded-sm border border-white/15 bg-zinc-950/40 text-zinc-400 opacity-70 px-3.5 py-2.5 text-xs font-mono text-center"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="font-mono text-[8.5px] text-[#cbd5e1]/40 uppercase tracking-widest font-black block">Secure CVC</label>
                        <input
                          type="text"
                          disabled
                          value={stripeDetails.cardCvc}
                          className="w-full rounded-sm border border-white/15 bg-zinc-950/40 text-zinc-400 opacity-70 px-3.5 py-2.5 text-xs font-mono text-center"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-sm border border-white/5 bg-[#050505] p-3 text-center text-[10px] font-mono text-zinc-400 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
                    <span>Bank-Grade 256-Bit P2PE Tunnel Protected</span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setCheckoutStep("calculator")}
                      className="px-4 py-3 border border-white/10 hover:border-white/20 hover:text-white rounded-sm text-[10.5px] font-mono uppercase tracking-widest text-zinc-400 transition-all cursor-pointer"
                    >
                      Refind
                    </button>
                    <button
                      type="submit"
                      disabled={isPaying}
                      className="flex-1 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-display text-[10.5px] font-black uppercase tracking-wider rounded-sm transition-all cursor-pointer flex justify-center items-center gap-1.5"
                    >
                      {isPaying ? (
                        <>
                          <span className="h-4 w-4 rounded-full border-2 border-black border-t-transparent animate-spin inline-block" />
                          <span>Withholding Escrow...</span>
                        </>
                      ) : (
                        <span>Transmit Balance</span>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success-step"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-6 flex flex-col items-center justify-center"
                >
                  <div className="h-16 w-16 rounded-full bg-cyan-950/30 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 animate-pulse">
                    <Check className="h-8 w-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-base font-bold text-white tracking-wide">
                      Boutique Pre-Order Logged
                    </h3>
                    <p className="font-sans text-xs text-zinc-300 font-light leading-relaxed max-w-xs">
                      Pristine transaction complete, <strong className="font-bold text-cyan-400">{stripeDetails.cardName}</strong>. Your heritage sourdough batons are earmarked at our ovens.
                    </p>
                  </div>

                  <div className="border border-cyan-500/10 bg-[#050505] p-4 rounded-sm w-full space-y-2 max-w-sm">
                    <div className="flex justify-between items-center text-[10.5px] font-mono">
                      <span className="text-zinc-500 uppercase font-black">Escrow Transit Status:</span>
                      <span className="text-cyan-400 font-bold uppercase tracking-wider">Authorized</span>
                    </div>
                    <div className="flex justify-between items-center text-[10.5px] font-mono text-zinc-350">
                      <span className="text-zinc-500 uppercase font-black">Crust Singe style:</span>
                      <span>Classic Golden Ear</span>
                    </div>
                    <div className="flex justify-between items-center text-[10.5px] font-mono text-zinc-350">
                      <span className="text-zinc-500 uppercase font-black">Slicing setup:</span>
                      <span>{slicePreference ? "9mm Slit" : "Stay Whole"}</span>
                    </div>
                    <div className="flex justify-between items-center text-[10.5px] font-mono">
                      <span className="text-zinc-500 uppercase font-black">Escrow Reference ID:</span>
                      <span className="text-zinc-300 font-bold">ST-PAIN-884-W9</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setCart({ "pain-heritage": 1 });
                      setCheckoutStep("calculator");
                    }}
                    className="font-mono text-[9px] text-[#cbd5e1]/50 hover:text-cyan-400 uppercase tracking-widest font-black transition-colors bg-white/5 px-4 py-2 border border-white/15 rounded-sm cursor-pointer"
                  >
                    Load New Basket
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
