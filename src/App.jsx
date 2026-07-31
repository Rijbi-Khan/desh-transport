import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import AuthPage from "./AuthPage";
import TripList from "./TripList";
import DriverDashboard from "./DriverDashboard";
import AdminDashboard from "./AdminDashboard";
import AdminLogin from "./AdminLogin";

function PageLoader({ visible }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
        background: "#0f2957",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity .4s ease",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none"
      }}
    >
      <div
        style={{
          width: "46px",
          height: "46px",
          borderRadius: "50%",
          border: "4px solid rgba(255,255,255,.25)",
          borderTopColor: "#14b8a6",
          animation: "app-spin .8s linear infinite"
        }}
      />
      <style>{`
        @keyframes app-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Keep the loader up for a short minimum time (avoids an ugly flash on
    // fast connections) and clear it once the window has fully loaded.
    const minTime = new Promise((resolve) => setTimeout(resolve, 500));
    const windowLoaded = new Promise((resolve) => {
      if (document.readyState === "complete") {
        resolve();
      } else {
        window.addEventListener("load", resolve, { once: true });
      }
    });

    Promise.all([minTime, windowLoaded]).then(() => setLoading(false));
  }, []);

  return (
    <>
      <PageLoader visible={loading} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/trips" element={<TripList />} />
        <Route path="/driver" element={<DriverDashboard />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default App;
