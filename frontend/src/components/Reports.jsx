import React, { useState } from 'react';

export default function Reports({ alerts }) {
  const [selectedCase, setSelectedCase] = useState(null);
  const [sliderVal, setSliderVal] = useState(50); // 0 to 100

  // Hardcode coordinate mapping for visual representation in mock terrain
  const mockCases = [
    { id: 1, title: 'Sector 4-X', date: '3:40 PM', type: 'Detected Deforestation', status: 'critical', confidence: 98, area: 2.5 },
    { id: 2, title: 'Sector 7-G', date: '3:30 PM', type: 'Detected Deforestation', status: 'critical', confidence: 89, area: 1.8 },
    { id: 3, title: 'Sector 2-A', date: '2:10 PM', type: 'Pending Review', status: 'pending', confidence: 75, area: 3.2 },
    { id: 4, title: 'Sector 9-H', date: '11:45 AM', type: 'Detected Deforestation', status: 'high', confidence: 91, area: 4.1 },
    { id: 5, title: 'Sector 1-B', date: '3:30 AM', type: 'Detected Deforestation', status: 'high', confidence: 95, area: 2.9 },
    { id: 6, title: 'Sector 5-C', date: '3:53 AM', type: 'Pending Review', status: 'pending', confidence: 64, area: 1.5 }
  ];

  return (
    <div className="pb-24 pt-4 px-4 max-w-md mx-auto min-h-screen flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[rgba(0,240,255,0.15)] pb-3 mb-4">
        <div>
          <h1 className="text-xl font-bold font-cyber text-cyan-400 tracking-wider glow-text-cyan flex items-center">
            VAULT
          </h1>
          <p className="text-[10px] font-mono text-gray-500 mt-1 uppercase">Evidence & Investigation Archive</p>
        </div>
        <div className="cyber-panel-cyan px-2 py-0.5 rounded border border-cyan-500/30 flex items-center">
          <span className="w-2 h-2 rounded-full bg-cyan-400 mr-1.5 animate-pulse"></span>
          <span className="text-[9px] font-mono text-cyan-300">SECURE VAULT</span>
        </div>
      </div>

      {/* Grid of Case Files (Folders) */}
      <div className="grid grid-cols-2 gap-4 mb-4 overflow-y-auto max-h-[70vh] pr-1">
        {mockCases.map((c) => (
          <button
            key={c.id}
            onClick={() => { setSelectedCase(c); setSliderVal(50); }}
            className="flex flex-col text-left cyber-panel-cyan p-3 rounded-lg border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 relative group overflow-hidden"
          >
            {/* Top folder flap tab style */}
            <div className="absolute top-0 left-3 -translate-y-[1px] h-[3px] w-12 bg-cyan-500/40 rounded-t" />
            
            {/* Folder Header Metadata */}
            <div className="flex items-center justify-between text-[8px] font-mono text-gray-400 mb-2">
              <span>{c.date}</span>
              <span className={`px-1 rounded font-bold uppercase text-[7px] ${
                c.status === 'critical' ? 'bg-red-950 text-red-400 border border-red-500/20' : 
                c.status === 'high' ? 'bg-amber-950/80 text-amber-400 border border-amber-500/20' : 
                'bg-slate-900 text-slate-400 border border-slate-700'
              }`}>
                {c.status}
              </span>
            </div>

            {/* Folder body */}
            <div className="flex-1">
              <h4 className="text-xs font-bold font-cyber text-cyan-300 group-hover:text-cyan-200">{c.title}</h4>
              <p className="text-[9px] font-mono text-gray-400 mt-1">{c.type}</p>
            </div>

            {/* Micro thumbnail */}
            <div className="mt-3 w-full h-14 bg-slate-900/60 rounded border border-cyan-500/10 overflow-hidden relative">
              {/* Simulated Forest Image */}
              <div className="absolute inset-0 bg-emerald-950/60 flex items-center justify-center opacity-80">
                <svg className="w-6 h-6 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              {/* Red overlay indicating deforestation area */}
              <div className="absolute top-4 left-6 w-5 h-5 rounded-full bg-red-500/30 blur" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.05)_1px,transparent_1px)] bg-[size:10px_10px]"></div>
            </div>
          </button>
        ))}
      </div>

      {/* CASE FILE EXPANDED MODAL (View 2) */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 bg-[#020506]/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-sm cyber-panel-cyan border-cyan-400/40 rounded-xl p-4 relative flex flex-col justify-between shadow-[0_0_30px_rgba(0,240,255,0.15)]">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2.5 mb-3">
              <h3 className="text-sm font-bold font-cyber text-cyan-300 flex items-center">
                <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
                CASE FILE: {selectedCase.title} (EXPANDED)
              </h3>
              <button 
                onClick={() => setSelectedCase(null)} 
                className="text-gray-400 hover:text-red-400 p-1 font-cyber text-sm transition-all"
              >
                ✕
              </button>
            </div>

            {/* 3D Holographic Terrain Graphic */}
            <div className="relative w-full h-36 bg-slate-950/80 rounded-lg border border-cyan-500/20 overflow-hidden mb-3 flex items-center justify-center">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.02)_1px,transparent_1px)] bg-[size:15px_15px]"></div>
              
              {/* Animated 3D Wireframe */}
              <div className="w-10/12 h-10/12 flex items-center justify-center" style={{ transform: 'perspective(400px) rotateX(60deg) rotateZ(-30deg)' }}>
                <svg className="w-full h-full text-cyan-500/30" viewBox="0 0 100 100" stroke="currentColor" strokeWidth="0.5" fill="none">
                  {/* Grid Lines representing hills */}
                  <path d="M 0,20 Q 50,5 100,20 M 0,40 Q 50,25 100,40 M 0,60 Q 50,45 100,60 M 0,80 Q 50,65 100,80" />
                  <path d="M 20,0 Q 5,50 20,100 M 40,0 Q 25,50 40,100 M 60,0 Q 45,50 60,100 M 80,0 Q 65,50 80,100" />
                  
                  {/* Glowing Deforestation breach hotspots */}
                  <g fill="rgba(255,50,50,0.4)" stroke="#ff3344" strokeWidth="0.8">
                    <ellipse cx="50" cy="40" rx="10" ry="7" className="animate-pulse" />
                    <ellipse cx="65" cy="55" rx="8" ry="5" />
                  </g>
                </svg>
              </div>
              <span className="absolute top-2 left-2 text-[8px] font-mono text-cyan-400">3D TERRAIN SIMULATION</span>
            </div>

            {/* Before vs After Satellite Slider */}
            <div className="mb-3">
              <div className="flex items-center justify-between text-[9px] font-cyber text-cyan-400 mb-1">
                <span>BEFORE VS AFTER SATELLITE SLIDER</span>
                <span className="text-gray-400 font-mono">SPLIT: {sliderVal}%</span>
              </div>
              
              {/* Slider View Box */}
              <div className="relative w-full h-28 bg-slate-900 rounded-lg overflow-hidden border border-cyan-500/20">
                {/* BEFORE IMAGE (Healthy Green Forest) */}
                <div 
                  className="absolute inset-0 bg-emerald-950 flex items-center justify-center"
                  style={{ backgroundImage: `radial-gradient(circle, #064e3b 25%, #022c22 80%)` }}
                >
                  {/* Simulated Dense Tree Patterns */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#059669_2px,transparent_2px)] bg-[size:10px_10px] opacity-80" />
                  <span className="absolute bottom-2 left-2 text-[8px] font-mono bg-emerald-900/80 text-emerald-300 px-1 rounded">BEFORE (HEALTHY)</span>
                </div>
                
                {/* AFTER IMAGE (Deforested/Cut Land) with clip-path based on slider value */}
                <div 
                  className="absolute inset-0 bg-[#3f3126] flex items-center justify-center transition-all duration-75"
                  style={{ 
                    clipPath: `inset(0 0 0 ${sliderVal}%)`,
                    backgroundImage: `radial-gradient(circle, #5c4434 25%, #2c1a0e 80%)`
                  }}
                >
                  {/* Deforested dirt pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#854d0e_3px,transparent_3px)] bg-[size:15px_15px] opacity-75" />
                  {/* Overlay indicating cleared coordinates */}
                  <div className="absolute inset-0 border-l border-red-500/40 bg-red-950/20" />
                  <span className="absolute bottom-2 right-2 text-[8px] font-mono bg-amber-900/80 text-amber-300 px-1 rounded">AFTER (DEFORESTED)</span>
                </div>
              </div>

              {/* HTML Range Input Slider */}
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={sliderVal} 
                onChange={(e) => setSliderVal(e.target.value)} 
                className="w-full h-1 mt-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            {/* Case Metrics & Details */}
            <div className="grid grid-cols-2 gap-3 mb-2 text-left">
              {/* Confidence Widget */}
              <div className="cyber-panel-cyan p-2.5 rounded border border-cyan-500/15 flex flex-col justify-between">
                <span className="text-[8px] font-cyber text-cyan-400">CONFIDENCE SCORE</span>
                <div className="flex items-center mt-1">
                  {/* Progress ring/circle */}
                  <div className="relative w-10 h-10 mr-2 flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 36 36">
                      <path className="text-slate-800" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path className="text-emerald-400" strokeDasharray={`${selectedCase.confidence}, 100`} strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                    <span className="text-[10px] font-bold font-mono text-emerald-400">{selectedCase.confidence}%</span>
                  </div>
                  <div className="text-[8px] font-mono text-gray-400 leading-tight">
                    HIGH CONFIDENCE:<br />ILLEGAL LOGGING
                  </div>
                </div>
              </div>

              {/* Legal Verification Widget */}
              <div className="cyber-panel-cyan p-2.5 rounded border border-cyan-500/15 flex flex-col justify-between font-mono text-[8px]">
                <span className="text-[8px] font-cyber text-cyan-400 mb-1">LEGAL VERIFICATION</span>
                <div className="space-y-1">
                  <div className="flex items-center text-emerald-400">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    PROTECTED AREA CONFIRMED
                  </div>
                  <div className="flex items-center text-emerald-400">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    NO VALID PERMITS FOUND
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions inside Modal */}
            <div className="mt-2 text-right">
              <button 
                onClick={() => setSelectedCase(null)} 
                className="px-4 py-1.5 bg-cyan-950 border border-cyan-500/30 rounded text-[10px] font-cyber text-cyan-300 hover:border-cyan-400"
              >
                CLOSE DOSSIER
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
