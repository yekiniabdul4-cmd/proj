import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, Terminal, Sliders, Play, CornerDownLeft, 
  RefreshCw, CheckCircle2, ShieldAlert, Cpu 
} from "lucide-react";

interface MockResponse {
  id: string;
  trigger: string;
  response: string;
}

const STREAM_RESPONSES: Record<string, string> = {
  "code-audit": `[PRISM-AI-v4] INBOUND ANALYSIS INITIATED:
------------------------------------------
Executing diagnostic evaluation of structural security nodes...
- Vulnerability [CRITICAL] identified in module /auth/jwt: Line 42 uses static key coordinates.
- Suggestion: Mount lazy environmental variable: process.env.JWT_SECRET_KEY.
- Performance optimization: Pre-allocate aspect size bounds inside tailwind stylesheets, reducing Cumulative Layout Shifts (CLS) to 0.00s.

STATUS: AUDIT_COMPLETE. SECURITY_SCORE: 98% ✔️`,
  "summarize": `[PRISM-AI-v4] INBOUND SUMMARY SYNCHRONIZED:
-------------------------------------------
Siphoned 142 daily workspace threads... High-ticket focus parameters:
1. Restaurant Booking Portal: Secured reservation table maps synced to database with 0.3s hydration latency.
2. Sourdough Pre-Check: Pre-allocated organic wheat loaves pre-sold directly via Stripe API.
3. Fleet Telemetry: Synchronized GPS telemetry coords reducing dispatch latency by -18%.

STRATEGIC BRIEF READY FOR EXECUTIVE BOARD. 🚀`,
  "translate": `[PRISM-AI-v4] TRANSLATION COHORT SYNTHESIZED:
---------------------------------------------
Transcribing input string ... Correcting regional syntactic alignment:
- Input: "Luxury custom web software engineered to command highest-ticket returns."
- German Synthesis: "Luxuriöse, maßgeschneiderte Websoftware, die so konzipiert ist, dass sie die höchsten Umsätze erzielt."
- French Synthesis: "Logiciels web sur mesure de prestige, conçus pour générer des rendements d'élite exceptionnels."

TRANSCRIPTION COMPLETELY VALIDATED. ✨`
};

export default function SaaSLandingShowcase() {
  const [activeTask, setActiveTask] = useState<string>("code-audit");
  const [temperature, setTemperature] = useState<number>(0.2);
  const [maxLength, setMaxLength] = useState<number>(512);
  const [userPrompt, setUserPrompt] = useState<string>("Analyze recent portfolio vulnerabilities...");
  
  const [streamOutput, setStreamOutput] = useState<string>("");
  const [isStreaming, setIsStreaming] = useState<boolean>(false);
  const [streamProgress, setStreamProgress] = useState<number>(0);

  const startStreaming = () => {
    if (isStreaming) return;
    setIsStreaming(true);
    setStreamOutput("");
    setStreamProgress(0);

    const fullText = STREAM_RESPONSES[activeTask] || "Aegis security clearance initialized...";
    const words = fullText.split(" ");
    let curWordIdx = 0;
    
    const interval = setInterval(() => {
      if (curWordIdx < words.length) {
        setStreamOutput((prev) => prev + (curWordIdx === 0 ? "" : " ") + words[curWordIdx]);
        setStreamProgress(Math.floor(((curWordIdx + 1) / words.length) * 100));
        curWordIdx++;
      } else {
        clearInterval(interval);
        setIsStreaming(false);
      }
    }, 45); // Typing velocity
  };

  const handleTaskChange = (taskId: string) => {
    setActiveTask(taskId);
    if (taskId === "code-audit") {
      setUserPrompt("Analyze structural security nodes & Cumulative Layout Shifts...");
    } else if (taskId === "summarize") {
      setUserPrompt("Summarize all corporate milestones recorded during current cycle...");
    } else if (taskId === "translate") {
      setUserPrompt("Translate key branding tagline statement to French with high-ticket vocabulary...");
    }
  };

  return (
    <div className="space-y-8">
      {/* Intro section hero */}
      <div className="relative rounded-xl overflow-hidden h-64 sm:h-80 bg-cover bg-center flex flex-col justify-end p-6 sm:p-10 border border-cyan-500/10" style={{ backgroundImage: `linear-gradient(to bottom, rgba(5,5,5,0.2) 0%, rgba(5,5,5,0.95) 100%), url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200')` }}>
        <div className="space-y-2">
          <span className="font-mono text-[9px] text-cyan-400 font-bold uppercase tracking-widest bg-cyan-950/80 border border-cyan-500/20 px-3 py-1 rounded-sm w-max block">
            ⚡ AI Cognitive Marketing
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wide">
            Prism AI Onboarding Conversion Stack
          </h2>
          <p className="font-sans text-xs text-zinc-300 font-light max-w-lg leading-relaxed">
            The hyper-converting sandbox playground presenting automated cognitive AI models with dynamic dial sliders and genuine text output streams.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Dynamic Model Control dialers */}
        <div className="lg:col-span-5 border border-cyan-500/10 bg-cyan-950/5 rounded-xl p-5 sm:p-6 space-y-6">
          <div className="space-y-1 pb-3 border-b border-white/5">
            <h3 className="font-display text-xs sm:text-sm font-bold text-white tracking-wide flex items-center gap-1.5">
              <Sliders className="h-4 w-4 text-cyan-400" />
              Cognitive Parameter Dialers
            </h3>
            <p className="font-sans text-[10px] text-zinc-400 font-light leading-snug">
              Modify the temperature parameters and target tasks in real-time.
            </p>
          </div>

          {/* Task selectors dials */}
          <div className="space-y-2">
            <label className="font-mono text-[8.5px] text-[#cbd5e1]/40 uppercase tracking-widest font-black block">Structured Task Target</label>
            <div className="space-y-2">
              {[
                { id: "code-audit", label: "Structural Security Diagnostics" },
                { id: "summarize", label: "Executive Workspace Synthesis" },
                { id: "translate", label: "Elite Tagline Translocation" }
              ].map((task) => (
                <button
                  key={task.id}
                  onClick={() => handleTaskChange(task.id)}
                  className={`w-full text-left p-3 rounded-sm border text-[11px] font-medium transition-all cursor-pointer flex justify-between items-center ${
                    activeTask === task.id
                      ? "bg-cyan-950/35 border-cyan-500/40 text-cyan-300"
                      : "border-white/5 bg-[#050505] text-zinc-400 hover:text-white"
                  }`}
                >
                  <span>{task.label}</span>
                  <span className="font-mono text-[7px] bg-[#050505] border border-white/5 px-1.5 py-0.5 rounded-sm uppercase font-bold text-zinc-500">
                    {task.id}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Temperature dials slider */}
          <div className="space-y-2.5 pt-2">
            <div className="flex justify-between items-center text-[10px] font-mono">
              <span className="text-zinc-450 text-[#cbd5e1]/40 uppercase tracking-widest font-bold">Temperature Bias</span>
              <span className="text-cyan-400 font-bold">{temperature.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.10"
              max="1.00"
              step="0.05"
              value={temperature}
              onChange={(e) => setTemperature(parseFloat(e.target.value))}
              className="w-full h-1 bg-white/5 rounded-full appearance-none cursor-pointer focus:outline-none accent-cyan-500 border border-white/5"
            />
            <div className="flex justify-between text-[8px] font-mono text-zinc-550 uppercase">
              <span>Deterministic</span>
              <span>Diverse Creative</span>
            </div>
          </div>

          {/* Context tokens slider */}
          <div className="space-y-2.5">
            <div className="flex justify-between items-center text-[10px] font-mono">
              <span className="text-zinc-455 text-[#cbd5e1]/40 uppercase tracking-widest font-bold">Max Tokens Count</span>
              <span className="text-cyan-400 font-bold">{maxLength} TK</span>
            </div>
            <input
              type="range"
              min="64"
              max="1024"
              step="64"
              value={maxLength}
              onChange={(e) => setMaxLength(parseInt(e.target.value))}
              className="w-full h-1 bg-white/5 rounded-full appearance-none cursor-pointer focus:outline-none accent-cyan-500 border border-white/5"
            />
            <div className="flex justify-between text-[8px] font-mono text-zinc-550 uppercase">
              <span>64 tokens</span>
              <span>1024 tokens (Long Form)</span>
            </div>
          </div>
        </div>

        {/* Dynamic Streaming Terminal Column */}
        <div className="lg:col-span-15-none lg:col-span-7 border border-white/5 bg-[#050505] rounded-xl p-5 space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-white/5 pb-3">
              <div className="flex items-center space-x-2">
                <Terminal className="h-4 w-4 text-cyan-400" />
                <span className="font-mono text-[9px] text-cyan-400 font-bold uppercase tracking-widest">
                  Prism AI Streaming Node
                </span>
              </div>

              {/* Progress tag */}
              {isStreaming && (
                <span className="font-mono text-[8.5px] uppercase tracking-wider text-cyan-400 animate-pulse">
                  Streaming {streamProgress}%
                </span>
              )}
            </div>

            {/* Input prompt field mimicking sandbox code typing */}
            <div className="space-y-1.5">
              <label className="font-mono text-[8.5px] text-[#cbd5e1]/40 uppercase tracking-widest font-black block">Transmitted Instructions</label>
              <div className="relative">
                <input
                  type="text"
                  value={userPrompt}
                  onChange={(e) => setUserPrompt(e.target.value)}
                  className="w-full rounded-sm border border-white/10 bg-white/[0.02] pl-3.5 pr-12 py-3 text-xs text-white font-mono placeholder-zinc-550 focus:border-cyan-400 focus:outline-none"
                />
                <button
                  onClick={startStreaming}
                  disabled={isStreaming}
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 rounded-sm bg-cyan-500 hover:bg-cyan-400 text-black flex items-center justify-center cursor-pointer transition-all disabled:opacity-40"
                  title="Fire Stream"
                >
                  <Play className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Simulated output shell code stack */}
            <div className="space-y-2">
              <label className="font-mono text-[8.5px] text-[#cbd5e1]/40 uppercase tracking-widest font-black block">Incremental Response Block</label>
              <div className="font-mono text-xs text-zinc-300 p-4 border border-white/5 bg-zinc-950 rounded-sm h-64 overflow-y-auto whitespace-pre-wrap leading-relaxed relative">
                {streamOutput ? (
                  streamOutput
                ) : (
                  <span className="text-zinc-550 block italic text-zinc-600">
                     SYSTEM_IDLE: Press Play button overlay or change tasks parameters to monitor live stream output.
                  </span>
                )}
                
                {/* Visual cursor flashing */}
                {isStreaming && (
                  <span className="inline-block h-3.5 w-1.5 bg-cyan-400 font-bold animate-ping ml-1" />
                )}
              </div>
            </div>
          </div>

          {/* Secure details assurance */}
          <div className="border-t border-white/5 pt-4 flex flex-col sm:flex-row justify-between items-center gap-3">
            <span className="font-sans text-[10.5px] text-zinc-500 font-light flex items-center gap-1.5 align-middle">
              <Cpu className="h-4 w-4 text-cyan-400" />
              Prism-v4 inference latency: ~14ms/token
            </span>

            <button
              onClick={startStreaming}
              disabled={isStreaming}
              className="py-2.5 px-6 rounded-sm bg-cyan-500 hover:bg-cyan-400 text-black font-display text-[9.5px] font-black uppercase tracking-widest max-w-max self-end transition-all shadow-[0_4px_16px_rgba(6,182,212,0.25)] cursor-pointer disabled:opacity-40 block"
            >
              Verify Realtime stream compile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
