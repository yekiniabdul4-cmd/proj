import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Package, Truck, Fuel, Thermometer, Clock, Search, 
  MapPin, Check, AlertTriangle, Shield, User, RefreshCw 
} from "lucide-react";

interface WaybillLog {
  time: string;
  location: string;
  status: string;
  completed: boolean;
}

interface Waybill {
  id: string;
  recipient: string;
  destination: string;
  status: "In Transit" | "Delivered" | "Delayed" | "Customs Hold";
  progress: number; // 0 - 100
  fuelLevel: string;
  cargoTemp: string;
  eta: string;
  shipper: string;
  driverName: string;
  driverAvatar: string;
  logs: WaybillLog[];
}

const PRESET_WAYBILLS: Record<string, Waybill> = {
  "SL-VIP-001": {
    id: "SL-VIP-001",
    recipient: "Rothschild Fine Foods",
    destination: "Paris Atrium 15e, FR",
    status: "In Transit",
    progress: 68,
    fuelLevel: "82% Capacity",
    cargoTemp: "4.2 °C (Chill)",
    eta: "Today 16:45 (In 2h 30m)",
    shipper: "SwiftLogix Cold Express",
    driverName: "Didier Mercier",
    driverAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120",
    logs: [
      { time: "13:20", location: "Ovens Depot Lyon", status: "Cargo pre-chilled & loaded in reefer chamber.", completed: true },
      { time: "14:15", location: "Highway A6 Exit 12", status: "Main cabin driver transfer verified.", completed: true },
      { time: "15:10", location: "Auxerre Service Node", status: "Fuel stops & automated temperature gauges sync.", completed: true },
      { time: "16:45", location: "Paris Destination Hub", status: "Arrival & custom validation queue.", completed: false }
    ]
  },
  "SL-AIR-992": {
    id: "SL-AIR-992",
    recipient: "Aether Analytic Labs",
    destination: "Munich Bio-Cluster, DE",
    status: "Delivered",
    progress: 100,
    fuelLevel: "15% Reserved",
    cargoTemp: "1.8 °C (Cold)",
    eta: "Completed Yesterday",
    shipper: "SwiftLogix Air Priority",
    driverName: "Renate Fischer",
    driverAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120",
    logs: [
      { time: "08:10", location: "Lyon Saint-Exupéry Airport", status: "Airway log loaded in cleanroom cage.", completed: true },
      { time: "09:40", location: "Munich Cargo Terminal", status: "Landed & immediate off-loading completed.", completed: true },
      { time: "11:25", location: "Munich Bio-Cluster Ground Hub", status: "Signed and accepted by lead research analyst.", completed: true }
    ]
  },
  "SL-SEA-235": {
    id: "SL-SEA-235",
    recipient: "Vellum Coastal Labs",
    destination: "Marseille Port Gate 3, FR",
    status: "Customs Hold",
    progress: 42,
    fuelLevel: "95% Full",
    cargoTemp: "18.5 °C (Ambient)",
    eta: "ETA Delayed (Pending Hold)",
    shipper: "SwiftLogix Sea Freight",
    driverName: "Laurent Dupont",
    driverAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
    logs: [
      { time: "May 21, 09:00", location: "Algiers Marine Terminal", status: "Container locked & freight loading finalized.", completed: true },
      { time: "May 22, 14:00", location: "Marseille Waters Anchorage", status: "Sovereign customs manifest inquiry initialized.", completed: true },
      { time: "May 23, 08:30", location: "Marseille Port Customs Office", status: "Cargo hold declared. Pending certificate validation.", completed: true }
    ]
  }
};

export default function LogisticsShowcase() {
  const [activeCode, setActiveCode] = useState<string>("SL-VIP-001");
  const [typedCode, setTypedCode] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const currentWaybill = PRESET_WAYBILLS[activeCode];

  const handleQueryCode = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = typedCode.toUpperCase().trim();
    if (PRESET_WAYBILLS[formatted]) {
      setActiveCode(formatted);
      setErrorMessage("");
    } else {
      setErrorMessage("WAYBILL_NOT_FOUND: Search is case-sensitive (e.g., SL-AIR-992).");
    }
  };

  return (
    <div className="space-y-8">
      {/* Top Waybill Query Selection Header */}
      <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center border-b border-white/5 pb-6">
        <div className="space-y-1">
          <span className="font-mono text-[9px] text-cyan-400 font-bold uppercase tracking-widest bg-cyan-950/80 border border-cyan-500/20 px-3 py-1 rounded-sm block w-max">
            🚛 Fleet Telemetry Channel
          </span>
          <h2 className="font-display text-base font-bold text-white tracking-wide">
            SwiftLogix Logistics Control Desk
          </h2>
          <p className="font-sans text-[11px] text-zinc-400 font-light mt-1">
            Toggle preset cargo codes or search a unique Waybill ID node.
          </p>
        </div>

        {/* Searching input and presets selector list */}
        <div className="flex flex-wrap gap-2.5 items-center w-full md:w-auto">
          {/* Presets List */}
          <div className="flex border border-white/10 rounded-sm overflow-hidden bg-zinc-950 h-9 p-0.5">
            {Object.keys(PRESET_WAYBILLS).map((wayId) => (
              <button
                key={wayId}
                onClick={() => {
                  setActiveCode(wayId);
                  setTypedCode("");
                  setErrorMessage("");
                }}
                className={`px-3 block text-[9.5px] font-mono font-bold tracking-widest uppercase cursor-pointer ${
                  activeCode === wayId
                    ? "bg-cyan-500 text-black rounded-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {wayId}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <form onSubmit={handleQueryCode} className="relative flex rounded-sm border border-white/10 overflow-hidden h-9 bg-zinc-950 flex-1 md:flex-initial">
            <input
              type="text"
              placeholder="Query Node Code..."
              value={typedCode}
              onChange={(e) => setTypedCode(e.target.value)}
              className="px-3 pl-8 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none bg-transparent w-full md:w-36 focus:bg-cyan-950/10"
            />
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-500" />
            <button
              type="submit"
              className="bg-cyan-500 text-black px-4 font-mono text-[9.5px] font-black uppercase cursor-pointer hover:bg-cyan-400 border-l border-white/10"
            >
              Verify
            </button>
          </form>
        </div>
      </div>

      {errorMessage && (
        <span className="text-red-400 font-mono text-[10.5px] block border border-red-500/10 bg-red-500/5 p-3 rounded-sm">
          ⚠️ {errorMessage}
        </span>
      )}

      {currentWaybill && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Large Cargo Progression Timeline Column */}
          <div className="lg:col-span-7 border border-white/5 bg-[#050505] rounded-xl p-6 space-y-6">
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
              <div>
                <h3 className="font-display text-sm font-bold text-white tracking-wide">
                  Transit Progression Ledger
                </h3>
                <p className="font-sans text-[11.5px] text-zinc-400 font-light mt-0.5">
                  Shipment earmarked for <strong className="font-bold text-white">{currentWaybill.recipient}</strong>
                </p>
              </div>

              {/* Status color Tag */}
              <span className={`px-2.5 py-0.5 rounded-sm font-mono text-[8.5px] uppercase font-black tracking-widest border ${
                currentWaybill.status === "In Transit"
                  ? "bg-green-950/20 border-green-500/10 text-green-400"
                  : currentWaybill.status === "Delivered"
                  ? "bg-cyan-950/20 border-cyan-500/10 text-cyan-400"
                  : currentWaybill.status === "Delayed"
                  ? "bg-amber-950/20 border-amber-500/10 text-amber-500"
                  : "bg-red-950/20 border-red-500/10 text-red-400 animate-pulse"
              }`}>
                {currentWaybill.status}
              </span>
            </div>

            {/* Custom progressive visual bar */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[10.5px] font-mono">
                <span className="text-zinc-500 uppercase font-black">Cargo Route Progress</span>
                <span className="text-cyan-400 font-bold">{currentWaybill.progress}% Complete</span>
              </div>
              <div className="h-2 w-full rounded-full bg-white/[0.02] border border-white/5 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${currentWaybill.progress}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.4)]"
                />
              </div>
              <div className="flex justify-between items-center text-[9px] text-zinc-550 font-mono">
                <span>Depart Lyons Depot</span>
                <span>Destination Nodes</span>
              </div>
            </div>

            {/* Steps Timeline Stack */}
            <div className="space-y-6 relative pl-4 before:absolute before:top-1.5 before:bottom-1.5 before:left-1 before:w-[1px] before:bg-white/10">
              {currentWaybill.logs.map((log, idx) => (
                <div key={idx} className="relative space-y-1">
                  {/* Circle locator tag */}
                  <div className={`absolute -left-5 top-1 h-3.5 w-3.5 rounded-full border-4 border-black flex items-center justify-center ${
                    log.completed ? "bg-cyan-500" : "bg-zinc-805 bg-zinc-900 border border-white/10"
                  }`} />
                  
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                    <h4 className={`font-display text-xs font-bold leading-none ${log.completed ? "text-white" : "text-zinc-500"}`}>
                      {log.location}
                    </h4>
                    <span className="font-mono text-[9px] text-[#cbd5e1]/40 uppercase font-bold">
                      {log.time}
                    </span>
                  </div>
                  <p className={`font-sans text-[11px] font-light leading-relaxed ${log.completed ? "text-zinc-300" : "text-zinc-500"}`}>
                    {log.status}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Secure Telemetry & Driver Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Telemetry Panel */}
            <div className="rounded-xl border border-cyan-500/10 bg-cyan-950/5 p-5 space-y-4">
              <h4 className="font-display text-xs font-bold text-white tracking-widest uppercase flex items-center gap-2 border-b border-white/5 pb-3">
                <Shield className="h-4 w-4 text-cyan-400" />
                Sovereign Reefer Gauges
              </h4>

              <div className="grid grid-cols-1 gap-4">
                {/* Gauge 1 */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-[10.5px] font-mono">
                    <span className="text-zinc-400 uppercase font-bold flex items-center gap-1">
                      <Fuel className="h-3.5 w-3.5 text-cyan-400" />
                      Diesel Fuel Cell
                    </span>
                    <span className="text-zinc-300">{currentWaybill.fuelLevel}</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-950 rounded-full border border-white/5 overflow-hidden">
                    <div className="h-full bg-cyan-400" style={{ width: currentWaybill.fuelLevel.includes("82") ? "82%" : currentWaybill.fuelLevel.includes("15") ? "15%" : "95%" }} />
                  </div>
                </div>

                {/* Gauge 2 */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-[10.5px] font-mono">
                    <span className="text-zinc-400 uppercase font-bold flex items-center gap-1">
                      <Thermometer className="h-3.5 w-3.5 text-cyan-400" />
                      Chamber Thermals
                    </span>
                    <span className="text-zinc-300">{currentWaybill.cargoTemp}</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-950 rounded-full border border-white/5 overflow-hidden">
                    <div className="h-full bg-cyan-500" style={{ width: currentWaybill.cargoTemp.includes("4.2") ? "42%" : currentWaybill.cargoTemp.includes("1.8") ? "18%" : "85%" }} />
                  </div>
                </div>

                {/* Logistics Info block */}
                <div className="border border-white/5 bg-[#050505] p-3.5 rounded-sm space-y-2 font-mono text-[9px] text-zinc-550">
                  <div className="flex justify-between">
                    <span>FREIGHT OPERATOR:</span>
                    <span className="text-zinc-400 font-bold">{currentWaybill.shipper}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ETA ARRIVAL SLOTS:</span>
                    <span className="text-cyan-400 font-bold">{currentWaybill.eta}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ROUTE OPTIMIZATIONS:</span>
                    <span className="text-green-400 font-bold uppercase">Active (GPS Node 22)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Active Operator/Driver Profiler */}
            <div className="rounded-xl border border-white/5 bg-white/[0.01] p-5 space-y-4">
              <h4 className="font-display text-xs font-bold text-white tracking-widest uppercase flex items-center gap-2">
                <User className="h-4 w-4 text-cyan-400" />
                Earmarked Operator Node
              </h4>

              <div className="flex gap-4 items-center">
                <img 
                  src={currentWaybill.driverAvatar} 
                  alt={currentWaybill.driverName} 
                  className="h-12 w-12 rounded-full border border-cyan-500/20 bg-cyan-950/40 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="space-y-1 flex-1">
                  <h4 className="font-display text-[12.5px] font-bold text-white tracking-wide leading-none">{currentWaybill.driverName}</h4>
                  <p className="font-mono text-[9px] text-zinc-500 uppercase font-black">SwiftLogix Class-A Heavy Operator</p>
                  <span className="text-[10px] text-cyan-400 font-mono block font-bold leading-none">Security Status: Cleared verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
