import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Reports from './components/Reports';
import Dashboard from './pages/Dashboard';
import Alerts from './components/Alerts';
import Report from './pages/Report';
import { apiService } from './services/api';

export default function App() {
  const [activeTab, setActiveTab] = useState('map');
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch initial alerts on mount
  useEffect(() => {
    async function loadData() {
      try {
        const data = await apiService.getAlerts();
        setAlerts(data);
      } catch (err) {
        console.error("Failed to load alerts:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // View router based on active tab
  const renderView = () => {
    switch (activeTab) {
      case 'map':
        return <Home alerts={alerts} setAlerts={setAlerts} onNavigate={setActiveTab} />;
      case 'vault':
        return <Reports alerts={alerts} />;
      case 'logs':
        return <Dashboard />;
      case 'fleet':
        return <Alerts />;
      case 'portal':
        return <Report />;
      default:
        return <Home alerts={alerts} setAlerts={setAlerts} onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#050b0c] text-white flex flex-col justify-between selection:bg-cyan-500/35 selection:text-white">
      {/* Scrollable Container */}
      <main className="flex-1 w-full relative">
        {renderView()}
      </main>

      {/* Cyber Bottom Navigation Bar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
