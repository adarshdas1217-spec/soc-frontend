import React, { useEffect, useState } from "react";
import api from "../services/api";
import socket from "../services/socket";

function Dashboard() {

   const [stats, setStats] = useState({});
   const [alerts, setAlerts] = useState([]);
   const [popup, setPopup] = useState(null);

   const token = localStorage.getItem("token");

   useEffect(() => {
      fetchDashboard();
      fetchAlerts();
   }, []);

   useEffect(() => {
      socket.on("newAlert", (data) => {
         setPopup(data);
         fetchDashboard();
         fetchAlerts();
         setTimeout(() => setPopup(null), 4000);
      });

      return () => socket.off("newAlert");
   }, []);

   const fetchDashboard = async () => {
      const res = await api.get("/alerts/dashboard", {
         headers: { Authorization: `Bearer ${token}` }
      });
      setStats(res.data);
   };

   const fetchAlerts = async () => {
      const res = await api.get("/alerts", {
         headers: { Authorization: `Bearer ${token}` }
      });
      setAlerts(res.data);
   };

   const getSeverityColor = (severity) => {
      if (severity === "CRITICAL") return "#ff3b3b";
      if (severity === "HIGH") return "#ff9800";
      if (severity === "MEDIUM") return "#2196f3";
      return "#4caf50";
   };

   const getStatusColor = (status) => {
      if (status === "OPEN") return "#ff3b3b";
      if (status === "IN_PROGRESS") return "#ff9800";
      return "#4caf50";
   };

   return (
      <div style={{
         background: "#0f172a",
         minHeight: "100vh",
         color: "#e2e8f0",
         padding: 40,
         fontFamily: "Segoe UI"
      }}>

         <h1 style={{
            marginBottom: 30,
            color: "#38bdf8"
         }}>
            🛡️ SOC360 Dashboard
         </h1>

         {popup && (
            <div style={{
               background: "#7f1d1d",
               padding: 15,
               borderRadius: 8,
               marginBottom: 25,
               boxShadow: "0 0 15px rgba(255,0,0,0.5)"
            }}>
               🚨 NEW ALERT: {popup.title} ({popup.sourceIP})
            </div>
         )}

         {/* STAT CARDS */}
         <div style={{
            display: "flex",
            gap: 20,
            marginBottom: 40
         }}>
            <StatCard title="Total Alerts" value={stats.totalAlerts} />
            <StatCard title="Open" value={stats.openAlerts} color="#ff3b3b" />
            <StatCard title="In Progress" value={stats.inProgressAlerts} color="#ff9800" />
            <StatCard title="Closed" value={stats.closedAlerts} color="#4caf50" />
         </div>

         <h2 style={{ marginBottom: 20, color: "#38bdf8" }}>
            Recent Alerts
         </h2>

         <table style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "#1e293b",
            borderRadius: 8,
            overflow: "hidden"
         }}>
            <thead>
               <tr style={{ background: "#334155" }}>
                  <th style={thStyle}>Title</th>
                  <th style={thStyle}>Severity</th>
                  <th style={thStyle}>Status</th>
                  <th style={thStyle}>IP</th>
               </tr>
            </thead>
            <tbody>
               {alerts.map(alert => (
                  <tr key={alert._id} style={{ borderBottom: "1px solid #334155" }}>
                     <td style={tdStyle}>{alert.title}</td>

                     <td style={{
                        ...tdStyle,
                        color: getSeverityColor(alert.severity),
                        fontWeight: "bold"
                     }}>
                        {alert.severity}
                     </td>

                     <td style={{
                        ...tdStyle,
                        color: getStatusColor(alert.status),
                        fontWeight: "bold"
                     }}>
                        {alert.status}
                     </td>

                     <td style={tdStyle}>{alert.sourceIP}</td>
                  </tr>
               ))}
            </tbody>
         </table>

      </div>
   );
}

/* STAT CARD */
function StatCard({ title, value, color = "#38bdf8" }) {
   return (
      <div style={{
         flex: 1,
         padding: 25,
         background: "#1e293b",
         borderRadius: 10,
         textAlign: "center",
         boxShadow: "0 0 10px rgba(0,0,0,0.5)"
      }}>
         <h3 style={{ marginBottom: 10 }}>{title}</h3>
         <h2 style={{
            color,
            fontSize: 28
         }}>
            {value || 0}
         </h2>
      </div>
   );
}

const thStyle = {
   padding: 15,
   textAlign: "left",
   color: "#94a3b8"
};

const tdStyle = {
   padding: 15
};

export default Dashboard;
