import React, { useState, useEffect, useRef } from 'react';
import { apiService } from '../services/api';

export default function Home({ alerts, setAlerts, onNavigate }) {
  const [terminalLogs, setTerminalLogs] = useState([
    'Initializing ForestGuard Satellite link...',
    '[OK] Connection established with Sentinel-2.',
    'Retrieving GFW integrated alerts...',
    '[ALERT] Deforestation anomaly detected at coord (-3.5204, -62.1750).',
    'Analyzing vegetation coverage using NIR band...'
  ]);
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const terminalEndRef = useRef(null);

  // Auto-scrolling terminal logs effect
  useEffect(() => {
    const extraLogs = [
      '> Running NDVI analysis on Sentinel-2 imagery...',
      '> NDVI Drop: -0.27 (significant loss verified).',
      '> Cross-referencing protected area database (WDPA)...',
      '> [VERIFIED] Anomaly lies inside Amazon Wildlife Reserve boundary.',
      '> Querying regional land registries for valid permits...',
      '> [NO PERMIT FOUND] Logging activity is unauthorized.',
      '> Compiling spatial cluster density (1km radius)...',
      '> Active cluster detected with 6 neighboring alerts.',
      '> LLM Reasoning: Grading risk level as CRITICAL.',
      '> Dispatching preliminary notification to local office...',
      '> Ready for user authorization.'
    ];

    let logIndex = 0;
    const interval = setInterval(() => {
      if (logIndex < extraLogs.length) {
        setTerminalLogs(prev => [...prev, extraLogs[logIndex]]);
        logIndex++;
      } else {
        clearInterval(interval);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalLogs]);

  // Fingerprint intervention auth handler
  const handleAuthStart = () => {
    if (scanComplete) return;
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
      setTerminalLogs(prev => [
        ...prev,
        '>>> USER AUTHENTICATED VIA BIOMETRICS <<<',
        '>>> INTERVENTION PROTOCOL INITIATED <<<',
        '> Drone Squadron Alpha deployed for active visual patrol.',
        '> Notification dispatched to Ministry of Environment.'
      ]);
    }, 2000);
  };

  return (
    <div className="pb-24 pt-4 px-4 max-w-md mx-auto min-h-screen flex flex-col justify-between">
      {/* Header Status */}
      <div className="flex items-center justify-between border-b border-[rgba(0,240,255,0.15)] pb-3 mb-4">
        <div>
          <h1 className="text-xl font-bold font-cyber text-cyan-400 tracking-wider glow-text-cyan flex items-center">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 mr-2 animate-ping"></span>
            FORESTGUARD
          </h1>
          <p className="text-[10px] font-mono text-gray-500 mt-1 uppercase">Cyber-Surveillance // UTC Active</p>
        </div>
        <div className="text-right font-mono">
          <p className="text-xs text-cyan-300">20:45:12 UTC</p>
          <p className="text-[9px] text-emerald-400">SIGNAL: 5G+ // 93%</p>
        </div>
      </div>

      {/* Critical Alert Header Banner */}
      <div className="cyber-panel-red border border-red-500/40 p-3 rounded-lg flex items-center mb-4 animate-pulse-alert">
        <div className="bg-red-950/60 p-2.5 rounded-md border border-red-500/30 text-red-500 mr-3">
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div>
          <h4 className="text-xs font-bold font-cyber text-red-500 tracking-wide">CRITICAL ALERT</h4>
          <p className="text-[11px] text-red-300 font-mono mt-0.5">UNAUTHORIZED LOGGING DETECTED IN SECTOR 4-X</p>
        </div>
      </div>

      {/* Holographic 3D Map Container (View 3) */}
      <div className="relative w-full h-80 rounded-xl overflow-hidden border border-cyan-500/25 bg-slate-950/80 mb-4 flex items-center justify-center">
        {/* Futuristic Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
        
        {/* Mock Topographic Wireframe SVG Map */}
        <svg className="w-11/12 h-11/12 opacity-75 text-emerald-500" viewBox="0 0 300 200">
          <g fill="none" stroke="currentColor" strokeWidth="0.5">
            {/* Contour Lines */}
            <path d="M 10 100 Q 80 50 150 100 T 290 100" opacity="0.3" />
            <path d="M 10 120 Q 80 70 150 120 T 290 120" opacity="0.4" />
            <path d="M 20 140 Q 90 90 160 140 T 280 140" opacity="0.5" />
            <path d="M 30 160 Q 100 110 170 160 T 270 160" opacity="0.6" />
            <path d="M 50 175 Q 110 125 180 175 T 250 175" opacity="0.7" />
            {/* Deforestation Sector Outline */}
            <polygon points="120,60 180,50 200,90 140,110" stroke="#ff3344" strokeWidth="1.5" strokeDasharray="3,3" />
            <polygon points="60,110 110,95 130,130 80,140" stroke="#00f0ff" strokeWidth="1" strokeDasharray="2,2" />
          </g>
          {/* Breach Nodes */}
          <g fill="#ff3344">
            <circle cx="150" cy="75" r="4.5" className="animate-ping" />
            <circle cx="150" cy="75" r="2.5" />
            
            <circle cx="168" cy="85" r="3.5" />
            <circle cx="135" cy="95" r="3.5" />
            <circle cx="180" cy="65" r="3.5" />
          </g>
          {/* Scanner Line Effect */}
          <line x1="0" y1="0" x2="300" y2="0" stroke="rgba(0, 240, 255, 0.4)" strokeWidth="2" className="animate-[scanline_4s_linear_infinite]" />
        </svg>

        {/* Breach Labels */}
        <div className="absolute top-24 left-[110px] text-[8px] font-mono bg-red-950/90 text-red-400 border border-red-500/30 px-1 rounded">ACTIVE BREACH</div>
        <div className="absolute top-36 left-[180px] text-[8px] font-mono bg-red-950/90 text-red-400 border border-red-500/30 px-1 rounded">ACTIVE BREACH</div>

        {/* Floating Widgets */}
        {/* Widget: Agent State */}
        <div className="absolute top-3 right-3 cyber-panel-cyan p-2.5 rounded border border-cyan-500/30 w-32 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[8px] font-cyber text-cyan-400">AGENT STATE:</span>
            <span className="text-[8px] text-emerald-400 font-bold uppercase animate-pulse">Reasoning</span>
          </div>
          <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-cyan-500/20">
            <div className="bg-gradient-to-r from-cyan-500 to-emerald-500 h-full w-[80%] rounded-full animate-[pulse_1.5s_infinite]"></div>
          </div>
        </div>

        {/* Widget: Confidence */}
        <div className="absolute bottom-3 right-3 cyber-panel-cyan p-2 rounded border border-cyan-500/30 w-32">
          <div className="flex items-center justify-between mb-0.5">
            <span className="text-[8px] font-cyber text-cyan-400">CONFIDENCE:</span>
            <span className="text-[10px] text-emerald-400 font-bold">98%</span>
          </div>
          <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full w-[98%]"></div>
          </div>
        </div>
      </div>

      {/* Terminal Log Console */}
      <div className="flex-1 w-full bg-[#030708] border border-cyan-500/20 rounded-xl p-3 mb-4 font-mono text-[10px] text-emerald-400 overflow-y-auto max-h-48 flex flex-col shadow-[inset_0_0_10px_rgba(0,255,100,0.05)]">
        <div className="border-b border-cyan-500/10 pb-1.5 mb-2 text-cyan-400 font-cyber flex items-center justify-between">
          <span>LIVE CONSOLE & LOGS</span>
          <span className="text-[8px] px-1 bg-cyan-950 text-cyan-300 rounded uppercase">SYS-LOG</span>
        </div>
        <div className="flex-1 space-y-1.5 select-none">
          {terminalLogs.map((log, index) => (
            <p key={index} className="leading-relaxed">
              {log}
            </p>
          ))}
          <div ref={terminalEndRef} />
        </div>
      </div>

      {/* Fingerprint Authorize button */}
      <div className="w-full flex flex-col items-center">
        <button
          onMouseDown={handleAuthStart}
          onTouchStart={handleAuthStart}
          className={`relative w-full py-4 rounded-xl flex flex-col items-center justify-center border font-cyber font-bold uppercase transition-all duration-300 select-none overflow-hidden ${
            scanComplete 
              ? 'bg-emerald-950/60 border-emerald-500 text-emerald-400 shadow-[0_0_15px_rgba(0,255,100,0.2)]'
              : isScanning
                ? 'bg-cyan-950/70 border-cyan-400 text-cyan-300'
                : 'bg-gradient-to-r from-cyan-950/80 to-slate-950 border-cyan-500/40 text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,240,255,0.1)]'
          }`}
        >
          {/* Scanner glow line effect when active */}
          {isScanning && (
            <div className="absolute inset-x-0 top-0 h-0.5 bg-cyan-400 shadow-[0_0_10px_rgba(0,240,255,1)] animate-[scanline_2s_linear_infinite]" />
          )}

          <div className="flex items-center">
            {/* Fingerprint SVG Icon */}
            <svg className={`w-7 h-7 mr-3 ${isScanning ? 'animate-pulse text-cyan-400' : 'text-cyan-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0-3.517-1.009-6.799-2.753-9.571m-3.44 2.04l.054-.09A13.916 13.916 0 009 11a13.917 13.917 0 002.753 9.571m-3.44-2.04A13.916 13.916 0 009 11c0 2.22-.519 4.317-1.44 6.182m-3.44-2.04A13.916 13.916 0 005 11c0-.468-.023-.93-.069-1.388m.069 1.388a11.954 11.954 0 00-2.618 4.016A11.954 11.954 0 006 20.38m-3.44-2.04A13.916 13.916 0 003 11c0-1.8 1.03-3.36 2.536-4.148m12.448 4.148a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-left">
              <span className="block text-[13px] tracking-wide">
                {scanComplete ? 'Intervention Dispatched' : isScanning ? 'Biometric Scanning...' : 'Authorize Intervention'}
              </span>
              <span className="block text-[8px] font-mono font-normal text-gray-400 normal-case mt-0.5">
                {scanComplete ? 'Notification & patrol dispatched' : 'Hold to verify biometrics and trigger protocols'}
              </span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
