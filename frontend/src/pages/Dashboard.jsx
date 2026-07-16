import React, { useState, useEffect } from 'react';

export default function Dashboard() {
  const [task1Progress, setTask1Progress] = useState(68);
  const [task2Progress, setTask2Progress] = useState(45);
  const [task3Progress, setTask3Progress] = useState(12);

  // Live progress simulation to make the UI feel alive!
  useEffect(() => {
    const timer = setInterval(() => {
      setTask1Progress(prev => (prev < 100 ? prev + 1 : 68));
      setTask2Progress(prev => (prev < 100 ? prev + 1 : 45));
      setTask3Progress(prev => (prev < 100 ? prev + 1 : 12));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pb-24 pt-4 px-4 max-w-md mx-auto min-h-screen flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[rgba(0,240,255,0.15)] pb-3 mb-4">
        <div>
          <h1 className="text-sm font-bold font-cyber text-cyan-400 tracking-wider glow-text-cyan">
            FORESTGUARD
          </h1>
          <p className="text-[10px] font-mono text-emerald-400 uppercase mt-0.5">AGENTIC AI: TASK EXECUTION & TOOL LOG</p>
        </div>
        <div className="text-right font-mono text-[9px] text-gray-500">
          <p className="text-cyan-300">OCT 26, 2042 | 14:32:15 UTC</p>
          <p className="text-emerald-400">ONLINE | SIGNAL: 5G+ | LATENCY: 12MS</p>
        </div>
      </div>

      {/* Task List (View 1) */}
      <div className="flex-1 space-y-4 overflow-y-auto max-h-[68vh] pr-1 mb-4">
        {/* Task 1 */}
        <div className="cyber-panel-cyan p-3.5 rounded-xl border border-cyan-500/25 flex flex-col">
          <div className="flex items-start justify-between border-b border-cyan-500/10 pb-2 mb-2">
            <div>
              <span className="text-[9px] font-mono text-cyan-400">TASK ID: 0x4F7B2A1E //</span>
              <h3 className="text-xs font-bold font-cyber text-cyan-200 mt-0.5">ANALYZING SENTINEL-2 SPECTRAL DATA</h3>
            </div>
            {/* Progress ring meter */}
            <div className="relative w-11 h-11 flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 36 36">
                <path className="text-slate-900" strokeWidth="2.5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="text-cyan-400" strokeDasharray={`${task1Progress}, 100`} strokeWidth="2.5" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
              <div className="text-center font-mono leading-none">
                <span className="text-[9px] font-bold text-cyan-300">{task1Progress}%</span>
                <span className="block text-[5px] text-gray-500 mt-0.5">ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Reasoning Detail */}
          <div className="text-left font-mono text-[9px] text-gray-400 leading-relaxed bg-[#030809] border border-cyan-500/10 rounded p-2.5">
            <div className="flex items-center text-cyan-400 font-cyber text-[8px] mb-1.5 uppercase">
              <span>REASONING</span>
              <svg className="w-2.5 h-2.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <p><span className="text-cyan-400">→ TRIGGER:</span> DETECTED SPECTRAL ANOMALY IN NIR BAND OVER SECTOR 7G.</p>
            <p><span className="text-cyan-400">→ ACTION:</span> FETCHING L1C IMAGERY FROM ORBITAL NODE 3.</p>
            <p><span className="text-cyan-400">→ PROCESSING:</span> MULTI-TEMPORAL NDVI CALCULATIONS FOR VEGETATION STRESS INDEX.</p>
            <p><span className="text-cyan-400">→ PREDICTION:</span> HIGH PROBABILITY (89%) OF ILLEGAL LOGGING ACTIVITY.</p>
            <p><span className="text-cyan-400">→ NEXT STEP:</span> CORRELATING WITH GROUND SENSOR ARRAY.</p>
          </div>

          {/* Line Chart */}
          <div className="mt-2.5 h-10 w-full bg-slate-950/60 rounded border border-cyan-500/10 flex items-center justify-center p-2">
            {/* SVG mini chart representation */}
            <svg className="w-full h-full text-cyan-500" viewBox="0 0 200 30" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M0,25 L30,23 L60,24 L90,12 L120,5 L150,22 L180,26 L200,25" />
              <circle cx="120" cy="5" r="2.5" fill="#ff3344" className="animate-ping" />
              <circle cx="120" cy="5" r="1.5" fill="#ff3344" />
            </svg>
          </div>
        </div>

        {/* Task 2 */}
        <div className="cyber-panel-cyan p-3.5 rounded-xl border border-cyan-500/25 flex flex-col">
          <div className="flex items-start justify-between border-b border-cyan-500/10 pb-2 mb-2">
            <div>
              <span className="text-[9px] font-mono text-cyan-400">TASK ID: 0x9C1E4D8B //</span>
              <h3 className="text-xs font-bold font-cyber text-cyan-200 mt-0.5">CROSS-REFERENCING LAND OWNERSHIP RECORDS</h3>
            </div>
            {/* Progress ring meter */}
            <div className="relative w-11 h-11 flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 36 36">
                <path className="text-slate-900" strokeWidth="2.5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="text-cyan-400" strokeDasharray={`${task2Progress}, 100`} strokeWidth="2.5" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
              <div className="text-center font-mono leading-none">
                <span className="text-[9px] font-bold text-cyan-300">{task2Progress}%</span>
                <span className="block text-[5px] text-gray-500 mt-0.5">ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Reasoning Detail */}
          <div className="text-left font-mono text-[9px] text-gray-400 leading-relaxed bg-[#030809] border border-cyan-500/10 rounded p-2.5">
            <div className="flex items-center text-cyan-400 font-cyber text-[8px] mb-1.5 uppercase">
              <span>REASONING</span>
              <svg className="w-2.5 h-2.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <p><span className="text-cyan-400">→ CONTEXT:</span> INVESTIGATING OWNERSHIP CHANGE FOR PARCEL #9120-A.</p>
            <p><span className="text-cyan-400">→ SOURCE:</span> QUERYING REGIONAL LAND REGISTRY DATABASE (GD-8).</p>
            <p><span className="text-cyan-400">→ CONSTRAINT:</span> ACCESS RESTRICTED. INITIATING SECURE AUTHENTICATION (2FA).</p>
            <p><span className="text-cyan-400">→ RISK:</span> POTENTIAL FOR FRAUDULENT TITLE TRANSFER.</p>
            <p><span className="text-cyan-400">→ CURRENT OPERATION:</span> PARSING DEED DOCUMENT METADATA.</p>
          </div>
        </div>

        {/* Task 3 */}
        <div className="cyber-panel-cyan p-3.5 rounded-xl border border-cyan-500/25 flex flex-col">
          <div className="flex items-start justify-between border-b border-cyan-500/10 pb-2 mb-2">
            <div>
              <span className="text-[9px] font-mono text-cyan-400">TASK ID: 0xB2F5A3C7 //</span>
              <h3 className="text-xs font-bold font-cyber text-cyan-200 mt-0.5">GENERATING PROBABILISTIC RISK ASSESSMENT.</h3>
            </div>
            {/* Progress ring meter */}
            <div className="relative w-11 h-11 flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 36 36">
                <path className="text-slate-900" strokeWidth="2.5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="text-cyan-400" strokeDasharray={`${task3Progress}, 100`} strokeWidth="2.5" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
              <div className="text-center font-mono leading-none">
                <span className="text-[9px] font-bold text-cyan-300">{task3Progress}%</span>
                <span className="block text-[5px] text-gray-500 mt-0.5">PENDING</span>
              </div>
            </div>
          </div>

          {/* Reasoning Detail */}
          <div className="text-left font-mono text-[9px] text-gray-400 leading-relaxed bg-[#030809] border border-cyan-500/10 rounded p-2.5">
            <div className="flex items-center text-cyan-400 font-cyber text-[8px] mb-1.5 uppercase">
              <span>REASONING</span>
              <svg className="w-2.5 h-2.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <p><span className="text-cyan-400">→ GOAL:</span> EVALUATE FOREST FIRE RISK FOR UPCOMING SEASON.</p>
            <p><span className="text-cyan-400">→ MODEL:</span> INTEGRATING CLIMATE PROJECTIONS, FUEL MOISTURE, AND HISTORICAL FIRE DATA.</p>
            <p><span className="text-cyan-400">→ STATUS:</span> CALIBRATING BAYESIAN NETWORK.</p>
          </div>
          <button className="mt-2 w-full py-1 bg-slate-900 hover:bg-slate-850 text-cyan-400 border border-cyan-500/10 hover:border-cyan-500/25 rounded text-[8px] font-cyber tracking-widest uppercase">
            EXPAND DETAILED LOG
          </button>
        </div>
      </div>

      {/* Live Console Output at the bottom */}
      <div className="w-full bg-[#030708] border border-cyan-500/15 rounded-xl p-3 font-mono text-[9px] text-emerald-400 max-h-28 overflow-y-auto">
        <div className="border-b border-cyan-500/10 pb-1 mb-1.5 text-cyan-400 font-cyber flex items-center justify-between">
          <span>LIVE CONSOLE</span>
          <span className="text-[7px] px-1 bg-cyan-950 text-cyan-300 rounded">CPU LOAD 32% // MEM 4.2GB</span>
        </div>
        <div className="space-y-1">
          <p>[14:23:05] SENTINEL 2 API: GET /data/L1C/TIASNC/20ASTOERTIA2601 200 OK</p>
          <p>[14:22:37] DATABASE: QUERY 'SELECT * FROM land_registry WHERE parcel_id = 9120-A' executed in 45ms</p>
          <p>[14:32:05] AI CORE: PROCESS ANOMALY, DETECTED (Spectral Data) -&gt; { '{anomaly: TRUE, confidence: 0.89}' }</p>
        </div>
      </div>
    </div>
  );
}
