import React, { useState, useEffect } from 'react';

export default function Alerts() {
  const [pulsePhase, setPulsePhase] = useState(0);

  // Animate the system health wave charts to make them look real-time!
  useEffect(() => {
    const interval = setInterval(() => {
      setPulsePhase(prev => (prev + 1) % 360);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  // Generate a dynamic sine wave for system health graphs
  const getWavePath = (frequency, amplitude, phase, offset) => {
    let points = [];
    for (let x = 0; x <= 100; x += 5) {
      const y = offset + amplitude * Math.sin((x * frequency + phase) * Math.PI / 180);
      points.push(`${x},${y}`);
    }
    return `M ${points.join(' L ')}`;
  };

  return (
    <div className="pb-24 pt-4 px-4 max-w-md mx-auto min-h-screen flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[rgba(0,240,255,0.15)] pb-3 mb-4">
        <div>
          <h1 className="text-xl font-bold font-cyber text-cyan-400 tracking-wider glow-text-cyan">
            FLEET
          </h1>
          <p className="text-[10px] font-mono text-gray-500 mt-1 uppercase">Autonomous Fleet & Sensor Status</p>
        </div>
        <div className="text-right font-mono text-[9px] text-gray-500">
          <p className="text-cyan-300">22:45 UTC - CYCLE 7</p>
          <p className="text-emerald-400">SYS STABLE</p>
        </div>
      </div>

      {/* Radar Scan & Globe Panel (View 4) */}
      <div className="relative w-full h-64 rounded-xl border border-cyan-500/25 bg-slate-950/80 mb-4 flex flex-col items-center justify-center overflow-hidden">
        {/* Holographic grid backing */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.02)_1px,transparent_1px)] bg-[size:15px_15px]"></div>
        
        {/* Globe Scanner UI */}
        <div className="relative w-40 h-40 flex items-center justify-center">
          {/* Radar circle border */}
          <div className="absolute inset-0 rounded-full border border-cyan-500/20 shadow-[0_0_15px_rgba(0,240,255,0.05)]" />
          <div className="absolute inset-4 rounded-full border border-cyan-500/10" />
          <div className="absolute inset-8 rounded-full border border-cyan-500/5" />
          
          {/* Scanning Sweep line */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/0 via-cyan-500/0 to-cyan-400/20 animate-radar pointer-events-none" style={{ transformOrigin: 'center' }}></div>

          {/* Wireframe Globe Icon */}
          <svg className="w-24 h-24 text-cyan-500/40 relative z-10" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="50" cy="50" r="45" />
            <ellipse cx="50" cy="50" rx="45" ry="15" />
            <ellipse cx="50" cy="50" rx="15" ry="45" />
            <line x1="5" y1="50" x2="95" y2="50" />
            <line x1="50" y1="5" x2="50" y2="95" />
          </svg>
          
          <span className="absolute text-[8px] font-cyber text-cyan-400 mt-28 animate-pulse uppercase tracking-wider">Scanning...</span>
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-4 font-mono text-[8px] text-gray-500 text-left">
          <p>LONGITUDE: 24.29°</p>
          <p>LATITUDE: 38.29°</p>
        </div>
        <div className="absolute bottom-3 right-4 font-mono text-[8px] text-emerald-400">
          COVERAGE AREA: 94%
        </div>
      </div>

      {/* Data Nodes status bars */}
      <div className="cyber-panel-cyan p-3 rounded-xl border border-cyan-500/20 mb-4 text-left">
        <h4 className="text-[10px] font-cyber text-cyan-300 border-b border-cyan-500/10 pb-1 mb-2">DATA NODES ONLINE: 12/15</h4>
        
        <div className="space-y-2.5">
          {/* Node 1 */}
          <div>
            <div className="flex justify-between text-[8px] font-mono text-gray-400 mb-0.5">
              <span className="text-cyan-200">SENTINEL-2 CONSTELLATION</span>
              <span className="text-emerald-400">OPTIMAL - LATENCY: 1.2s</span>
            </div>
            <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-cyan-500/10">
              <div className="bg-gradient-to-r from-cyan-500 to-emerald-400 h-full w-[90%]"></div>
            </div>
          </div>

          {/* Node 2 */}
          <div>
            <div className="flex justify-between text-[8px] font-mono text-gray-400 mb-0.5">
              <span className="text-cyan-200">REGIONAL GLAD SENSORS</span>
              <span className="text-emerald-400">ACTIVE - COVERAGE: 88%</span>
            </div>
            <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-cyan-500/10">
              <div className="bg-gradient-to-r from-cyan-500 to-emerald-400 h-full w-[88%]"></div>
            </div>
          </div>

          {/* Node 3 */}
          <div>
            <div className="flex justify-between text-[8px] font-mono text-gray-400 mb-0.5">
              <span className="text-cyan-200">AUTONOMOUS DRONE SQUADRON ALPHA</span>
              <span className="text-emerald-400">IN FLIGHT - BATT: 75%</span>
            </div>
            <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-cyan-500/10">
              <div className="bg-gradient-to-r from-cyan-500 to-emerald-400 h-full w-[75%]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* System Health Monitoring wave graphs */}
      <div className="cyber-panel-cyan p-3 rounded-xl border border-cyan-500/20 text-left">
        <h4 className="text-[10px] font-cyber text-cyan-300 border-b border-cyan-500/10 pb-1.5 mb-2.5">SYSTEM HEALTH MONITORING</h4>
        
        <div className="grid grid-cols-3 gap-2">
          {/* Latency Graph */}
          <div className="bg-slate-950/60 border border-cyan-500/10 p-2 rounded flex flex-col justify-between h-20">
            <span className="text-[7px] font-cyber text-gray-500">LATENCY</span>
            <div className="h-8 w-full">
              <svg className="w-full h-full text-emerald-400" viewBox="0 0 100 30" fill="none" stroke="currentColor" strokeWidth="1">
                <path d={getWavePath(5, 5, pulsePhase * 2, 15)} />
              </svg>
            </div>
            <div className="text-[8px] font-mono text-emerald-400">34 MS (AVG)</div>
          </div>

          {/* AI Load Graph */}
          <div className="bg-slate-950/60 border border-cyan-500/10 p-2 rounded flex flex-col justify-between h-20">
            <span className="text-[7px] font-cyber text-gray-500">AI MODEL LOAD</span>
            <div className="h-8 w-full">
              <svg className="w-full h-full text-cyan-400" viewBox="0 0 100 30" fill="none" stroke="currentColor" strokeWidth="1">
                <path d={getWavePath(4, 7, pulsePhase, 15)} />
              </svg>
            </div>
            <div className="text-[8px] font-mono text-cyan-400">68% (PROC)</div>
          </div>

          {/* Memory Utilization Graph */}
          <div className="bg-slate-950/60 border border-cyan-500/10 p-2 rounded flex flex-col justify-between h-20">
            <span className="text-[7px] font-cyber text-gray-500">MEM UTILIZATION</span>
            <div className="h-8 w-full">
              <svg className="w-full h-full text-cyan-400" viewBox="0 0 100 30" fill="none" stroke="currentColor" strokeWidth="1">
                <path d={getWavePath(6, 4, pulsePhase * 1.5, 15)} />
              </svg>
            </div>
            <div className="text-[8px] font-mono text-cyan-400">82% (AVAIL)</div>
          </div>
        </div>
      </div>

      {/* Bottom Bar Status */}
      <div className="mt-2.5 font-mono text-[8px] text-gray-500 uppercase text-center tracking-widest">
        SYSTEM STABLE. LAST UPDATE: 2 SEC AGO
      </div>
    </div>
  );
}
