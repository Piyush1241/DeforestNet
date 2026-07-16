import React, { useState, useEffect } from 'react';
import { apiService } from '../services/api';

export default function Report() {
  const [compileProgress, setCompileProgress] = useState(65);
  const [humanOversight, setHumanOversight] = useState(true);
  const [recipients, setRecipients] = useState([
    { id: 'min_env', name: 'Ministry of Environment', checked: true },
    { id: 'local_enforce', name: 'Local Enforcement Units', checked: true }
  ]);
  const [isAuthorizing, setIsAuthorizing] = useState(false);
  const [authSuccess, setAuthSuccess] = useState(false);

  // Compile progress animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCompileProgress(prev => (prev < 100 ? prev + 1 : 100));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleRecipientToggle = (id) => {
    setRecipients(prev => prev.map(r => r.id === id ? { ...r, checked: !r.checked } : r));
  };

  const handleAuthorizeStart = () => {
    if (authSuccess) return;
    setIsAuthorizing(true);
    setTimeout(() => {
      setIsAuthorizing(false);
      setAuthSuccess(true);
    }, 2000);
  };

  return (
    <div className="pb-24 pt-4 px-4 max-w-md mx-auto min-h-screen flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[rgba(0,240,255,0.15)] pb-3 mb-4">
        <div>
          <h1 className="text-xl font-bold font-cyber text-cyan-400 tracking-wider glow-text-cyan">
            PORTAL
          </h1>
          <p className="text-[10px] font-mono text-gray-500 mt-1 uppercase">Automated Reporting & Authority Portal</p>
        </div>
        <div className="text-right font-mono text-[9px] text-cyan-300">
          <span>14:32 // 5G+ AI-LINK</span>
        </div>
      </div>

      {/* Compiler Progress (View 5) */}
      <div className="cyber-panel-cyan p-3 rounded-xl border border-cyan-500/25 mb-4 text-left">
        <div className="flex justify-between text-[9px] font-cyber text-cyan-400 mb-1">
          <span>COMPILING REPORT: INCIDENT-8092B</span>
          <span className="text-emerald-400 font-mono">{compileProgress}% COMPLETE</span>
        </div>
        <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-cyan-500/10 mb-1">
          <div className="bg-gradient-to-r from-cyan-500 to-emerald-400 h-full transition-all duration-300" style={{ width: `${compileProgress}%` }}></div>
        </div>
        <span className="text-[8px] font-mono text-gray-500 uppercase">AI PROCESSING...</span>
      </div>

      {/* Draft Report Card */}
      <div className="flex-1 cyber-panel-cyan p-4 rounded-xl border border-cyan-500/20 mb-4 flex flex-col overflow-y-auto max-h-[50vh] relative text-left">
        <div className="border-b border-cyan-500/15 pb-2 mb-3 flex items-center justify-between">
          <div>
            <h4 className="text-xs font-bold font-cyber text-cyan-300">INCIDENT REPORT [DRAFT]</h4>
            <span className="text-[8px] font-mono text-gray-500">DATE: 2043.10.24 // AI AGENT: SENTINEL-X</span>
          </div>
          <span className="text-[8px] font-mono bg-amber-950/80 text-amber-400 border border-amber-500/30 px-1.5 rounded">DRAFT</span>
        </div>

        {/* Floating Cards content */}
        <div className="space-y-3">
          {/* Incident Summary Card */}
          <div className="cyber-panel-cyan p-2.5 rounded border border-cyan-500/15 bg-slate-950/40">
            <span className="text-[9px] font-cyber text-cyan-400 block mb-1">INCIDENT SUMMARY</span>
            <ul className="text-[9.5px] font-mono text-gray-400 space-y-1 pl-1">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-1.5">▪</span>
                Detection of Unauthorized Logging Activity.
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-1.5">▪</span>
                Multiple Chainsaw Acoustic Signatures Confirmed.
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-1.5">▪</span>
                Drone Surveillance Imagery Acquired.
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-1.5">▪</span>
                Estimated Area Affected: 2.5 Hectares.
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-1.5">▪</span>
                Heat Signatures of 4 Individuals.
              </li>
            </ul>
          </div>

          {/* Recommended Enforcement Card */}
          <div className="cyber-panel-cyan p-2.5 rounded border border-cyan-500/15 bg-slate-950/40">
            <span className="text-[9px] font-cyber text-cyan-400 block mb-1">RECOMMENDED ENFORCEMENT</span>
            <ul className="text-[9.5px] font-mono text-gray-400 space-y-1 pl-1">
              <li className="flex items-start">
                <span className="text-red-400 mr-1.5">▪</span>
                Deploy Autonomous Response Drones (ARDs) for Containment.
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-1.5">▪</span>
                Alert Local Enforcement Units for Interception.
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-1.5">▪</span>
                Issue Immediate Cease & Desist Warning via Area Broadcast.
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-1.5">▪</span>
                Prepare Digital Evidence Package for Prosecution.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Human Oversight & Recipients controls */}
      <div className="cyber-panel-cyan p-3 rounded-xl border border-cyan-500/20 mb-4 text-left">
        {/* Toggle Switch */}
        <div className="flex items-center justify-between border-b border-cyan-500/10 pb-2.5 mb-2.5">
          <div className="flex items-center">
            <svg className="w-4 h-4 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span className="text-[10px] font-cyber text-cyan-300">HUMAN OVERSIGHT</span>
          </div>
          <button 
            onClick={() => setHumanOversight(!humanOversight)}
            className={`w-10 h-5 rounded-full p-0.5 transition-colors duration-300 focus:outline-none ${humanOversight ? 'bg-emerald-500' : 'bg-slate-800'}`}
          >
            <div className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 ${humanOversight ? 'translate-x-5' : 'translate-x-0'}`} />
          </button>
        </div>

        {/* Recipients checkmarks */}
        <div>
          <span className="text-[8px] font-cyber text-gray-500 uppercase block mb-1.5">RECIPIENTS</span>
          <div className="space-y-1.5">
            {recipients.map((r) => (
              <button
                key={r.id}
                onClick={() => handleRecipientToggle(r.id)}
                className="w-full flex items-center justify-between font-mono text-[9px] text-gray-300 hover:text-cyan-300 py-0.5 text-left"
              >
                <span>{r.name}</span>
                <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center transition-colors ${
                  r.checked 
                    ? 'border-emerald-500 bg-emerald-950 text-emerald-400 shadow-[0_0_5px_rgba(0,255,100,0.2)]' 
                    : 'border-slate-700 bg-slate-900 text-transparent'
                }`}>
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* giant fingerprint authorize notification button */}
      <button
        onMouseDown={handleAuthorizeStart}
        onTouchStart={handleAuthorizeStart}
        className={`w-full py-4 rounded-xl border flex flex-col items-center justify-center font-cyber font-bold uppercase transition-all duration-300 overflow-hidden relative select-none ${
          authSuccess 
            ? 'bg-emerald-950/60 border-emerald-500 text-emerald-400 shadow-[0_0_15px_rgba(0,255,100,0.2)]'
            : isAuthorizing
              ? 'bg-cyan-950/70 border-cyan-400 text-cyan-300'
              : 'bg-gradient-to-r from-cyan-950/80 to-slate-950 border-cyan-500/40 text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,240,255,0.1)]'
        }`}
      >
        {isAuthorizing && (
          <div className="absolute inset-x-0 top-0 h-0.5 bg-cyan-400 shadow-[0_0_10px_rgba(0,240,255,1)] animate-[scanline_2s_linear_infinite]" />
        )}
        <div className="flex items-center">
          <svg className={`w-7 h-7 mr-3 ${isAuthorizing ? 'animate-pulse text-cyan-400' : 'text-cyan-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0-3.517-1.009-6.799-2.753-9.571m-3.44 2.04l.054-.09A13.916 13.916 0 009 11a13.917 13.917 0 002.753 9.571m-3.44-2.04A13.916 13.916 0 009 11c0 2.22-.519 4.317-1.44 6.182m-3.44-2.04A13.916 13.916 0 005 11c0-.468-.023-.93-.069-1.388m.069 1.388a11.954 11.954 0 00-2.618 4.016A11.954 11.954 0 006 20.38m-3.44-2.04A13.916 13.916 0 003 11c0-1.8 1.03-3.36 2.536-4.148m12.448 4.148a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="text-left">
            <span className="block text-[13px] tracking-wide">
              {authSuccess ? 'Notification Dispatched' : isAuthorizing ? 'Authorizing Dispatch...' : 'Authorize Notification'}
            </span>
            <span className="block text-[8px] font-mono font-normal text-gray-400 normal-case mt-0.5">
              {authSuccess ? 'Evidence sent & protocols initiated' : 'Hold to sign evidence package & dispatch reports'}
            </span>
          </div>
        </div>
      </button>
    </div>
  );
}
