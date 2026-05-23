import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  TrendingUp, Activity, Cpu, Database, Search, 
  ArrowUpRight, ArrowDownRight, RefreshCw, FileSpreadsheet, Play 
} from "lucide-react";

interface SeedStartup {
  company: string;
  category: string;
  growth: number;
  mrr: string;
  valuation: string;
  burnRate: string;
  runway: string;
  health: "High" | "Warning" | "Critical";
}

const STARTUPS: SeedStartup[] = [
  { company: "Vortex AI Co", category: "AI & ML", growth: 142.5, mrr: "$42,500", valuation: "$4,250,000", burnRate: "$22,000", runway: "16 Mo", health: "High" },
  { company: "Lumen Energy", category: "ClimateTech", growth: 88.0, mrr: "$19,000", valuation: "$2,800,000", burnRate: "$14,000", runway: "22 Mo", health: "High" },
  { company: "Apex Ledger", category: "FinTech", growth: -12.4, mrr: "$54,000", valuation: "$7,500,000", burnRate: "$65,000", runway: "4 Mo", health: "Warning" },
  { company: "Aegis Security", category: "SaaS & Cyber", growth: 215.8, mrr: "$11,200", valuation: "$1,850,550", burnRate: "$8,000", runway: "11 Mo", health: "High" },
  { company: "Helix BioLink", category: "BioTech", growth: 5.2, mrr: "$3,100", valuation: "$1,200,000", burnRate: "$25,000", runway: "2.5 Mo", health: "Critical" }
];

// Mock historical graph datasets
interface ChartPoint { label: string; mrr: number; cost: number; latency: number }
const CHART_DATA: Record<string, ChartPoint[]> = {
  "Q1": [
    { label: "Jan", mrr: 120, cost: 42, latency: 45 },
    { label: "Feb", mrr: 154, cost: 41, latency: 42 },
    { label: "Mar", mrr: 198, cost: 45, latency: 49 },
    { label: "Apr", mrr: 210, cost: 48, latency: 38 }
  ],
  "Q2": [
    { label: "May", mrr: 240, cost: 50, latency: 32 },
    { label: "Jun", mrr: 295, cost: 52, latency: 28 },
    { label: "Jul", mrr: 340, cost: 44, latency: 25 },
    { label: "Aug", mrr: 412, cost: 40, latency: 22 }
  ]
};

export default function SaaSDashboardShowcase() {
  const [activeQuarter, setActiveQuarter] = useState<"Q1" | "Q2">("Q2");
  const [sectorFilter, setSectorFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [exporting, setExporting] = useState(false);
  const [liveLogCount, setLiveLogCount] = useState<number>(142);
  const [runningSimulation, setRunningSimulation] = useState(false);

  const activePoints = CHART_DATA[activeQuarter];
  const maxMRR = Math.max(...activePoints.map(p => p.mrr));
  const maxCost = Math.max(...activePoints.map(p => p.cost));

  // Startup filtering
  const filteredStartups = STARTUPS.filter((s) => {
    const matchesQuery = s.company.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         s.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSector = sectorFilter === "All" || s.category === sectorFilter;
    return matchesQuery && matchesSector;
  });

  const triggerExport = () => {
    setExporting(true);
    setTimeout(() => {
      setExporting(false);
      alert("Aether VC Sheet Export Complete: Saved aether_portfolio_ledger_2026.csv directly to virtual root.");
    }, 1500);
  };

  const triggerLiveDiagnostics = () => {
    if (runningSimulation) return;
    setRunningSimulation(true);
    const interval = setInterval(() => {
      setLiveLogCount((prev) => prev + Math.floor(Math.random() * 5) + 1);
    }, 400);

    setTimeout(() => {
      clearInterval(interval);
      setRunningSimulation(false);
    }, 3000);
  };

  return (
    <div className="space-y-8">
      {/* Top micro dashboard state lines */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        
        {/* Metric 1 */}
        <div className="border border-cyan-500/10 bg-cyan-950/5 rounded-md p-4 space-y-2 relative overflow-hidden">
          <div className="flex justify-between items-center">
            <span className="font-mono text-[8.5px] uppercase tracking-wider text-zinc-400">Consolidated Fund MRR</span>
            <TrendingUp className="h-4 w-4 text-cyan-400" />
          </div>
          <div className="space-y-0.5">
            <span className="font-mono text-xl font-bold text-white">$412,500</span>
            <div className="flex items-center space-x-1 font-mono text-[9px] text-[#22c55e]">
              <ArrowUpRight className="h-3 w-3" />
              <span>+34.2% Growth</span>
            </div>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="border border-cyan-500/10 bg-cyan-950/5 rounded-md p-4 space-y-2 relative overflow-hidden">
          <div className="flex justify-between items-center">
            <span className="font-mono text-[8.5px] uppercase tracking-wider text-zinc-400">Server Latency Node</span>
            <Activity className="h-4 w-4 text-cyan-400" />
          </div>
          <div className="space-y-0.5">
            <span className="font-mono text-xl font-bold text-white">22 ms</span>
            <div className="flex items-center space-x-1 font-mono text-[9px] text-[#22c55e]">
              <ArrowDownRight className="h-3 w-3" />
              <span>-18.4% Refined</span>
            </div>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="border border-cyan-500/10 bg-cyan-950/5 rounded-md p-4 space-y-2 relative overflow-hidden">
          <div className="flex justify-between items-center">
            <span className="font-mono text-[8.5px] uppercase tracking-wider text-zinc-400">Active API Instances</span>
            <Cpu className="h-4 w-4 text-cyan-400" />
          </div>
          <div className="space-y-0.5">
            <span className="font-mono text-xl font-bold text-white">{liveLogCount} log/s</span>
            <button 
              onClick={triggerLiveDiagnostics}
              className="flex items-center space-x-1 font-mono text-[9.5px] text-cyan-400 hover:underline cursor-pointer"
            >
              <RefreshCw className={`h-3 w-3 ${runningSimulation ? 'animate-spin' : ''}`} />
              <span>{runningSimulation ? "Siphoning..." : "Run Test Probe"}</span>
            </button>
          </div>
        </div>

        {/* Metric 4 */}
        <div className="border border-cyan-500/10 bg-cyan-950/5 rounded-md p-4 space-y-2 relative overflow-hidden">
          <div className="flex justify-between items-center">
            <span className="font-mono text-[8.5px] uppercase tracking-wider text-zinc-400">Server Budget Saved</span>
            <Database className="h-4 w-4 text-cyan-300" />
          </div>
          <div className="space-y-0.5">
            <span className="font-mono text-xl font-bold text-white">$120,400</span>
            <div className="flex items-center space-x-1 font-mono text-[9px] text-cyan-400 font-bold block">
              <span>Optimized (Hydration)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Dynamic Custom Chart View Column */}
        <div className="lg:col-span-8 border border-white/5 bg-[#050505] rounded-xl p-5 space-y-5">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/5 pb-4">
            <div className="space-y-0.5">
              <h4 className="font-display text-sm font-bold text-white tracking-wide">
                Interactive Scaled Performance Metric Curve
              </h4>
              <p className="font-sans text-[11px] text-zinc-450 font-light text-zinc-400">
                Custom SVG plotting representing monthly seed valuation (solid area) & cluster telemetry operations (dashed).
              </p>
            </div>

            {/* Quarter Filter togglers */}
            <div className="flex rounded-sm overflow-hidden border border-white/10 p-0.5 bg-zinc-950 h-8 self-end">
              {["Q1", "Q2"].map((q) => (
                <button
                  key={q}
                  onClick={() => setActiveQuarter(q as "Q1" | "Q2")}
                  className={`px-3 block text-[9.5px] font-mono font-bold tracking-widest uppercase cursor-pointer ${
                    activeQuarter === q
                      ? "bg-cyan-500 text-black rounded-sm"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive SVG area & line chart render */}
          <div className="relative h-64 w-full flex items-end pt-6 border-b border-l border-white/10 px-4">
            {/* Guide Gridlines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-0.5">
              <div className="border-t border-white/[0.03] w-full" />
              <div className="border-t border-white/[0.03] w-full" />
              <div className="border-t border-white/[0.03] w-full" />
              <div className="border-t border-white/[0.03] w-full" />
            </div>

            {/* Solid custom SVG Area rendering */}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.25"/>
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.00"/>
                </linearGradient>
              </defs>
              
              {/* Dynamic Coordinate points calculated inline for Q1 and Q2 */}
              <motion.path
                key={`area-${activeQuarter}`}
                initial={{ d: "M 0 100 L 33 100 L 66 100 L 100 100 Z" }}
                animate={{
                  d: activeQuarter === "Q1" 
                    ? "M 0 100 L 0 76 L 33 69 L 66 58 L 100 52 L 100 100 Z"
                    : "M 0 100 L 0 46 L 33 34 L 66 22 L 100 10 L 100 100 Z"
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                fill="url(#chartGlow)"
              />

              {/* Curve Line vector drawing */}
              <motion.path
                key={`line-${activeQuarter}`}
                initial={{ d: "M 0 100 L 33 100 L 66 100 L 100 100" }}
                animate={{
                  d: activeQuarter === "Q1" 
                    ? "M 0 76 L 33 69 L 66 58 L 100 52"
                    : "M 0 46 L 33 34 L 66 22 L 100 10"
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                fill="none"
                stroke="#06b6d4"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Dotted threshold benchmark */}
              <line x1="0" y1="40" x2="100" y2="40" stroke="#f43f5e" strokeOpacity="0.3" strokeDasharray="2" strokeWidth="0.5" />
            </svg>

            {/* Custom SVG node points for graph and tooltips hover highlights */}
            <div className="w-full h-full flex justify-between items-end relative z-10">
              {activePoints.map((pt, idx) => (
                <div key={idx} className="flex-1 flex flex-col justify-end items-center group h-full relative cursor-default">
                  
                  {/* Floating Telemetry Box on hover */}
                  <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-all pointer-events-none bg-[#050505] border border-cyan-500/25 p-2 rounded-sm text-[9.5px] font-mono space-y-0.5 z-20 text-center">
                    <span className="text-zinc-400 block uppercase font-black text-[7.5px]">{pt.label} Valuation</span>
                    <span className="text-cyan-400 font-bold block">${pt.mrr}k MRR</span>
                    <span className="text-zinc-500 block">Clusters: {pt.latency}ms</span>
                  </div>

                  {/* Dot Indicator */}
                  <div className="h-2 w-2 rounded-full bg-cyan-400 border border-black shadow-[0_0_8px_rgba(6,182,212,0.8)] mb-1 group-hover:scale-130 transition-transform" />
                  
                  {/* Node Title Label */}
                  <span className="font-mono text-[9px] text-zinc-500 font-bold tracking-wider pt-2">
                    {pt.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Analytical Synergies Form */}
        <div className="lg:col-span-4 border border-cyan-500/10 bg-cyan-950/5 rounded-xl p-5 space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <h4 className="font-display text-xs font-bold text-white tracking-widest uppercase flex items-center gap-2">
              <Database className="h-4 w-4 text-cyan-400" />
              Aether Synthesis
            </h4>
            <p className="font-sans text-[11px] font-light leading-relaxed text-zinc-400">
              Trigger a remote diagnostic synthesis of VC startups and server operational cache pipelines. Pre-formatted directly for board meetings.
            </p>

            <div className="border border-white/5 bg-[#050505] p-3.5 rounded-sm space-y-2 font-mono text-[9px] text-zinc-550">
              <div className="flex justify-between">
                <span>DATABASE CLUSTERS:</span>
                <span className="text-cyan-300 font-bold">ONLINE (5 NODES)</span>
              </div>
              <div className="flex justify-between">
                <span>AVERAGE SECTOR BURN:</span>
                <span className="text-zinc-350">$26,600 / mo</span>
              </div>
              <div className="flex justify-between">
                <span>PORTFOLIO SECTORS:</span>
                <span className="text-zinc-350">AIC/Climate/Fin</span>
              </div>
            </div>
          </div>

          <div className="space-y-2.5">
            <button
              onClick={triggerExport}
              disabled={exporting}
              className="w-full py-3 h-11 bg-white hover:bg-zinc-200 text-black font-display text-[9px] font-black uppercase tracking-widest rounded-sm transition-all cursor-pointer flex justify-center items-center gap-1.5"
            >
              {exporting ? (
                <>
                  <span className="h-3 w-3 rounded-full border border-black border-t-transparent animate-spin inline-block" />
                  <span>Siphoning CSV Files...</span>
                </>
              ) : (
                <>
                  <FileSpreadsheet className="h-3.5 w-3.5 text-black" />
                  <span>Sync Consolidated CSV</span>
                </>
              )}
            </button>
            <span className="font-sans text-[9px] text-zinc-500 font-light text-center block">
              Direct telemetry compilation synced via Aether API.
            </span>
          </div>
        </div>
      </div>

      {/* Startup Seed Board directories table */}
      <div className="border border-white/5 bg-[#050505] rounded-xl p-5 space-y-5">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-4">
          <div className="space-y-0.5">
            <h4 className="font-display text-xs font-bold text-white tracking-widest uppercase flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
              Fund Asset Directory Portfolio
            </h4>
            <p className="font-sans text-[11px] text-zinc-455 font-light text-zinc-400">
              Detailed tracking metrics filtered directly via real queries index logs.
            </p>
          </div>

          {/* Filtering controllers */}
          <div className="flex flex-wrap gap-2 items-center">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-550 text-cyan-500" />
              <input
                type="text"
                placeholder="Query Sector..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-sm border border-white/10 bg-white/[0.02] pl-8 pr-3 py-1.5 text-[10.5px] font-mono text-white placeholder-zinc-550 focus:border-cyan-400 focus:outline-none focus:bg-cyan-950/10 w-44"
              />
            </div>

            {/* Quick Filter Select */}
            <select
              value={sectorFilter}
              onChange={(e) => setSectorFilter(e.target.value)}
              className="rounded-sm border border-white/10 bg-[#050505] px-3 py-1.5 text-[10.5px] font-mono text-zinc-400 hover:text-white focus:outline-none"
            >
              {["All", "AI & ML", "ClimateTech", "FinTech", "SaaS & Cyber", "BioTech"].map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Directory Matrix Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 text-zinc-500 font-mono text-[8.5px] uppercase tracking-wider">
                <th className="pb-3 font-black">Startup Asset</th>
                <th className="pb-3 font-black">Category</th>
                <th className="pb-3 text-right font-black">Quarter growth</th>
                <th className="pb-3 text-right font-black">ARR Equivalent</th>
                <th className="pb-3 text-right font-black">Sovereign burn</th>
                <th className="pb-3 text-right font-black">Runway</th>
                <th className="pb-3 text-center font-black">Stability Node</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence mode="popLayout">
                {filteredStartups.map((s) => (
                  <motion.tr
                    key={s.company}
                    layoutId={`startup-row-${s.company}`}
                    className="group border-b border-white/[0.03] hover:bg-cyan-950/5 text-xs text-zinc-300 font-sans cursor-default transition-colors"
                  >
                    <td className="py-4 font-bold text-white font-display text-[12.5px] tracking-wide group-hover:text-cyan-400 transition-colors">
                      {s.company}
                    </td>
                    <td className="py-4 font-mono text-[10px] text-zinc-400 uppercase">
                      {s.category}
                    </td>
                    <td className="py-4 text-right">
                      <span className={`font-mono font-bold ${s.growth >= 0 ? 'text-[#22c55e]' : 'text-red-400'}`}>
                        {s.growth >= 0 ? '+' : ''}{s.growth}%
                      </span>
                    </td>
                    <td className="py-4 text-right font-mono font-medium">
                      {s.mrr}
                    </td>
                    <td className="py-4 text-right font-mono text-zinc-400">
                      {s.burnRate}
                    </td>
                    <td className="py-4 text-right font-mono text-zinc-400">
                      {s.runway}
                    </td>
                    <td className="py-4 text-center">
                      <span className={`inline-block px-2.5 py-0.5 rounded-sm font-mono text-[8.5px] text-center uppercase font-black tracking-widest ${
                        s.health === "High" 
                          ? "bg-green-950/20 border border-green-500/10 text-green-400"
                          : s.health === "Warning"
                          ? "bg-amber-950/20 border border-amber-500/10 text-amber-400"
                          : "bg-red-950/20 border border-red-500/10 text-red-500 animate-pulse"
                      }`}>
                        {s.health}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
          
          {filteredStartups.length === 0 && (
            <div className="text-center py-10 font-mono text-[11px] text-zinc-550 italic">
               No matching startup assets found in current query sector.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
