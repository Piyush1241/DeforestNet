const BASE_URL = '/api';

// Fallback Mock Data matching the mockups (for offline/simulation robustness)
const MOCK_STATS = {
  metrics: {
    total_alerts: 15,
    verified_area_lost_ha: 142.50,
    critical_risk_alerts: 4,
    high_risk_alerts: 5,
    pending_review: 3,
    resolved_reports: 8
  },
  by_status: {
    Pending: 3,
    Verified: 4,
    "False Positive": 2,
    Reported: 6
  },
  by_risk: {
    Critical: 4,
    High: 5,
    Medium: 4,
    Low: 2
  }
};

const MOCK_ALERTS = [
  {
    id: 1,
    region_id: 1,
    detected_at: "2026-07-16T12:00:00Z",
    latitude: -3.52035,
    longitude: -62.17495,
    area_ha: 2.50,
    ndvi_before_mean: 0.72,
    ndvi_after_mean: 0.45,
    ndvi_diff_mean: -0.27,
    is_protected: true,
    protected_area_name: "Amazon Wildlife Reserve",
    protected_area_category: "Strict Nature Reserve",
    is_active_cluster: true,
    neighboring_alerts_30d: 6,
    risk_level: "Critical",
    status: "Verified",
    narrative_summary: "CRITICAL ALERT: Deforestation of 2.5 hectares detected inside Amazon Wildlife Reserve. This location is part of an active deforestation cluster with 6 other alerts detected within 1km over the last 30 days, suggesting organized, expanding logging roads.",
    recommended_action: "Dispatch an enforcement patrol immediately. Secure coordinates, initiate ground checks, and deploy aerial drones to locate active logging crews or machinery."
  },
  {
    id: 2,
    region_id: 1,
    detected_at: "2026-07-15T09:30:00Z",
    latitude: -3.42500,
    longitude: -62.25000,
    area_ha: 1.80,
    ndvi_before_mean: 0.68,
    ndvi_after_mean: 0.50,
    ndvi_diff_mean: -0.18,
    is_protected: true,
    protected_area_name: "Amazon Wildlife Reserve",
    protected_area_category: "Strict Nature Reserve",
    is_active_cluster: false,
    neighboring_alerts_30d: 0,
    risk_level: "High",
    status: "Pending",
    narrative_summary: "HIGH ALERT: Forest loss of 1.8 hectares confirmed inside Amazon Wildlife Reserve (NDVI drop of -0.18). No other alerts have been logged in the immediate vicinity recently, indicating a potentially isolated clearing.",
    recommended_action: "Notify the local range officers for Amazon Wildlife Reserve. Schedule a field inspection to verify if this is an unpermitted clearing or natural tree fall (windthrow/landslide)."
  },
  {
    id: 3,
    region_id: 1,
    detected_at: "2026-07-14T15:20:00Z",
    latitude: -3.55000,
    longitude: -62.05000,
    area_ha: 5.20,
    ndvi_before_mean: 0.70,
    ndvi_after_mean: 0.52,
    ndvi_diff_mean: -0.18,
    is_protected: false,
    protected_area_name: "N/A",
    protected_area_category: "N/A",
    is_active_cluster: true,
    neighboring_alerts_30d: 4,
    risk_level: "Medium",
    status: "Reported",
    narrative_summary: "MEDIUM ALERT: Deforestation of 5.2 hectares confirmed outside protected boundaries. However, this is part of an active cluster with 4 nearby alerts in the past month, indicating potential unpermitted agricultural or logging encroachment.",
    recommended_action: "Query local land registry and logging permit databases to verify if this clearance is legally authorized. If unauthorized, issue a stop-work notice."
  }
];

const MOCK_REPORTS = [
  {
    id: 1,
    alert_id: 1,
    generated_at: "2026-07-16T12:05:00Z",
    recipient_email: "amazon-alerts@conservation.org",
    status: "Sent",
    file_path: "storage/reports/FG_REPORT_1_20260716_120500.pdf",
    evidence_notes: "Acoustic sensor data detected chainsaw signatures. Sentinel-2 cloudless imagery confirm canopy reduction."
  },
  {
    id: 2,
    alert_id: 3,
    generated_at: "2026-07-14T15:30:00Z",
    recipient_email: "compliance@environmental-agency.gov",
    status: "Sent",
    file_path: "storage/reports/FG_REPORT_3_20260714_153000.pdf",
    evidence_notes: "Visual evidence compiles multi-temporal NDVI mapping demonstrating sustained, progressive deforestation."
  }
];

export const apiService = {
  async getStats() {
    try {
      const response = await fetch(`${BASE_URL}/dashboard/stats`);
      if (!response.ok) throw new Error('Network error');
      return await response.json();
    } catch (err) {
      console.warn("API Error, using fallback mock stats:", err);
      return MOCK_STATS;
    }
  },

  async getRecentActivity() {
    try {
      const response = await fetch(`${BASE_URL}/dashboard/recent-activity`);
      if (!response.ok) throw new Error('Network error');
      return await response.json();
    } catch (err) {
      console.warn("API Error, using fallback mock activity:");
      return [
        {
          id: "event_alert_1",
          type: "alert_detected",
          message: "Deforestation alert (2.5 ha) detected at coordinate (-3.5204, -62.1750).",
          timestamp: new Date().toISOString(),
          status: "Verified",
          severity: "Critical"
        },
        {
          id: "event_report_1",
          type: "report_dispatched",
          message: "Evidence report successfully compiled and sent to amazon-alerts@conservation.org.",
          timestamp: new Date(Date.now() - 300000).toISOString(),
          status: "Sent",
          severity: "Info"
        }
      ];
    }
  },

  async getAlerts() {
    try {
      const response = await fetch(`${BASE_URL}/alerts/`);
      if (!response.ok) throw new Error('Network error');
      const data = await response.json();
      return data.length ? data : MOCK_ALERTS;
    } catch (err) {
      console.warn("API Error, using fallback mock alerts:", err);
      return MOCK_ALERTS;
    }
  },

  async getAlertDetail(alertId) {
    try {
      const response = await fetch(`${BASE_URL}/alerts/${alertId}`);
      if (!response.ok) throw new Error('Network error');
      return await response.json();
    } catch (err) {
      console.warn(`API Error, using fallback mock alert detail for ID ${alertId}:`, err);
      return MOCK_ALERTS.find(a => a.id === Number(alertId)) || MOCK_ALERTS[0];
    }
  },

  async updateAlertStatus(alertId, status, riskLevel = null) {
    try {
      const response = await fetch(`${BASE_URL}/alerts/${alertId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status, risk_level: riskLevel })
      });
      if (!response.ok) throw new Error('Network error');
      return await response.json();
    } catch (err) {
      console.warn("API Error in updateAlertStatus:", err);
      return { id: alertId, status, risk_level: riskLevel };
    }
  },

  async getReports() {
    try {
      const response = await fetch(`${BASE_URL}/reports/`);
      if (!response.ok) throw new Error('Network error');
      const data = await response.json();
      return data.length ? data : MOCK_REPORTS;
    } catch (err) {
      console.warn("API Error, using fallback mock reports:", err);
      return MOCK_REPORTS;
    }
  },

  async triggerCheck(regionName = "Amazon Wildlife Reserve") {
    try {
      const response = await fetch(`${BASE_URL}/alerts/trigger-check?region_name=${encodeURIComponent(regionName)}`, {
        method: 'POST'
      });
      if (!response.ok) throw new Error('Network error');
      return await response.json();
    } catch (err) {
      console.warn("API Error in triggerCheck:", err);
      return {
        status: "Success (Simulated)",
        region: regionName,
        raw_alerts_received: 10,
        new_alerts_processed: 2,
        verified_deforestation_events: 1,
        evidence_reports_dispatched: 1
      };
    }
  },

  getReportDownloadUrl(reportId) {
    return `${BASE_URL}/reports/${reportId}/download`;
  }
};
