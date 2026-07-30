import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const API = "https://desh-transport-backend.onrender.com/api/trips";
  const DRIVER_API = "https://desh-transport-backend.onrender.com/api/drivers";

  // Core Functional States
  const [trips, setTrips] = useState([]);
  const [history, setHistory] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [applications, setApplications] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);
  
  // UI Interaction States
  const [showDrivers, setShowDrivers] = useState(false);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const emptyForm = {
    from: "",
    to: "",
    cargoDetails: "",
    requiredVehicleBody: "covered",
    requiredCapacity: "",
    fixedPrice: "",
    pickupTime: ""
  };

  const [inputForm, setInputForm] = useState(emptyForm);

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "7px 0",
    boxSizing: "border-box",
    borderRadius: "6px",
    border: "1px solid #4b5563",
    background: "#1f2937",
    color: "white"
  };

  // Wrapped in useCallback to preserve reference across re-renders
  const loadData = useCallback(async () => {
    setIsLoading(true);
    try {
      const [activeRes, historyRes, driversRes] = await Promise.all([
        axios.get(`${API}/active`),
        axios.get(`${API}/history/last-7-days`),
        axios.get(`${DRIVER_API}/all`)
      ]);

      setTrips(activeRes.data || []);
      setHistory(historyRes.data || []);
      setDrivers(driversRes.data || []);
    } catch (err) {
      console.error("Error loading dashboard metrics:", err);
      alert("সার্ভার থেকে ডাটা লোড করতে সমস্যা হয়েছে।");
    } finally {
      setIsLoading(false);
    }
  }, [API, DRIVER_API]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const addTrip = async () => {
    if (!inputForm.from || !inputForm.to || !inputForm.fixedPrice) {
      alert("সব তথ্য পূরণ করুন");
      return;
    }

    try {
      await axios.post(`${API}/add`, {
        ...inputForm,
        requiredCapacity: Number(inputForm.requiredCapacity) || 0,
        fixedPrice: Number(inputForm.fixedPrice) || 0
      });

      alert("ট্রিপ সফলভাবে যুক্ত হয়েছে");
      setInputForm(emptyForm);
      loadData();
    } catch (err) {
      console.error(err);
      alert("সমস্যা হয়েছে, আবার চেষ্টা করুন");
    }
  };

  const deleteTrip = async (id) => {
    if (!window.confirm("আপনি কি নিশ্চিতভাবে এই ট্রিপটি মুছে ফেলতে চান?")) return;
    try {
      await axios.delete(`${API}/${id}`);
      loadData();
    } catch (err) {
      console.error(err);
      alert("মুছে ফেলা সম্ভব হয়নি।");
    }
  };

  const viewDrivers = async (trip) => {
    try {
      const res = await axios.get(`${API}/applications/${trip._id}`);
      setApplications(res.data || []);
      setSelectedTrip(trip);
    } catch (err) {
      console.error(err);
      alert("ড্রাইভারের তালিকা পাওয়া যায়নি");
    }
  };

  const confirmDriver = async (driverId) => {
    try {
      await axios.post(`${API}/confirm-driver`, {
        tripId: selectedTrip._id,
        driverId
      });

      alert("ড্রাইভার কনফার্ম হয়েছে");
      setSelectedTrip(null);
      setApplications([]);
      loadData();
    } catch (err) {
      console.error(err);
      alert("ড্রাইভার নিশ্চিতকরণে সমস্যা হয়েছে");
    }
  };

  const deleteDriver = async (id) => {
    if (!window.confirm("ড্রাইভার মুছে ফেলবেন?")) return;

    try {
      await axios.delete(`${DRIVER_API}/${id}`);
      alert("ড্রাইভার মুছে ফেলা হয়েছে");
      loadData();
    } catch (err) {
      console.error(err);
      alert("Delete করা যায়নি");
    }
  };

  const handleCloseModal = () => {
    setSelectedTrip(null);
    setApplications([]);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#111827", color: "white", fontFamily: "sans-serif" }}>
      
      {/* LEFT MENU */}
      <div style={{ width: "300px", background: "#1f2937", padding: "20px", boxSizing: "border-box" }}>
        <h2>🚚 এডমিন প্যানেল</h2>
        
        <button
          onClick={() => navigate("/")}
          style={{
            background: "#14b8a6",
            color: "white",
            padding: "10px",
            width: "100%",
            border: "none",
            borderRadius: "6px",
            marginBottom: "20px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          🏠 হোম পেজে ফিরুন
        </button>

        <h3>নতুন ট্রিপ অ্যাড করুন</h3>
        
        <input
          style={inputStyle}
          placeholder="কোথা থেকে যাবে"
          value={inputForm.from}
          onChange={(e) => setInputForm({ ...inputForm, from: e.target.value })}
        />

        <input
          style={inputStyle}
          placeholder="কোথায় যাবে"
          value={inputForm.to}
          onChange={(e) => setInputForm({ ...inputForm, to: e.target.value })}
        />

        <input
          style={inputStyle}
          placeholder="মালামালের বিবরণ"
          value={inputForm.cargoDetails}
          onChange={(e) => setInputForm({ ...inputForm, cargoDetails: e.target.value })}
        />

        <select
          style={inputStyle}
          value={inputForm.requiredVehicleBody}
          onChange={(e) => setInputForm({ ...inputForm, requiredVehicleBody: e.target.value })}
        >
          <option value="covered">কভার্ড ভ্যান</option>
          <option value="open">খোলা ট্রাক</option>
        </select>

        <input
          style={inputStyle}
          type="number"
          placeholder="কত টনের গাড়ি লাগবে"
          value={inputForm.requiredCapacity}
          onChange={(e) => setInputForm({ ...inputForm, requiredCapacity: e.target.value })}
        />

        <input
          style={inputStyle}
          type="number"
          placeholder="ভাড়া নির্ধারণ করুন"
          value={inputForm.fixedPrice}
          onChange={(e) => setInputForm({ ...inputForm, fixedPrice: e.target.value })}
        />

        <input
          style={inputStyle}
          type="time"
          value={inputForm.pickupTime}
          onChange={(e) => setInputForm({ ...inputForm, pickupTime: e.target.value })}
        />

        <button
          onClick={addTrip}
          style={{
            background: "green",
            color: "white",
            padding: "12px",
            width: "100%",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginTop: "10px",
            fontWeight: "bold"
          }}
        >
          ঠিক আছে অ্যাড করুন
        </button>

        <button
          onClick={() => setShowDrivers(!showDrivers)}
          style={{
            marginTop: "15px",
            background: "#2563eb",
            color: "white",
            padding: "12px",
            width: "100%",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          {showDrivers ? "📊 ট্রিপ প্যানেল দেখুন" : "👨‍✈️ ড্রাইভারদের তালিকা"}
        </button>
      </div>

      {/* MAIN SCREEN DISPLAY AREA */}
      <div style={{ flex: 1, padding: "30px", background: "#0f172a", boxSizing: "border-box" }}>
        {isLoading && <p style={{ color: "#14b8a6" }}>লোড হচ্ছে...</p>}
        
        {!showDrivers ? (
          <>
            <h1>আজকের এড করা ট্রিপগুলো ({trips.length})</h1>
            {trips.length === 0 && !isLoading && <p style={{ color: "#94a3b8" }}>কোনো সক্রিয় ট্রিপ পাওয়া যায়নি।</p>}
            
            {trips.map((t) => (
              <div key={t._id} style={{ background: "#334155", padding: "25px", margin: "20px 0", borderRadius: "12px" }}>
                <h2>{t.from} ➜ {t.to}</h2>
                <p>📦 {t.cargoDetails || "বিবরণ নেই"}</p>
                <p>💰 {t.fixedPrice} টাকা</p>
                
                <button
                  onClick={() => viewDrivers(t)}
                  style={{ padding: "8px 12px", border: "none", borderRadius: "6px", cursor: "pointer", background: "#f59e0b", color: "#0f172a", fontWeight: "bold" }}
                >
                  ড্রাইভারদের প্রতিক্রিয়া দেখুন
                </button>
                <button
                  onClick={() => deleteTrip(t._id)}
                  style={{ background: "#ef4444", color: "white", marginLeft: "10px", padding: "8px 12px", border: "none", borderRadius: "6px", cursor: "pointer" }}
                >
                  মুছে ফেলুন
                </button>
              </div>
            ))}

            <h1 style={{ marginTop: "40px" }}>✅ সফল ট্রিপ (শেষ ৭ দিন)</h1>
            {history.length === 0 && !isLoading && <p style={{ color: "#94a3b8" }}>গত ৭ দিনে কোনো সম্পন্ন ট্রিপ নেই।</p>}
            
            {history.map((h) => (
              <div key={h._id} style={{ background: "#064e3b", padding: "15px", margin: "10px 0", borderRadius: "8px" }}>
                <strong>{h.tripDetails?.from || "অজানা"} ➜ {h.tripDetails?.to || "অজানা"}</strong>
                <br />
                <span style={{ fontSize: "14px", color: "#a7f3d0" }}>ড্রাইভার: {h.acceptedDriver?.driverName || "নাম পাওয়া যায়নি"}</span>
              </div>
            ))}
          </>
        ) : (
          <>
            <h1>👨‍✈️ ড্রাইভারদের তালিকা ({drivers.length})</h1>
            <input
              placeholder="নাম অথবা ফোন দিয়ে খুঁজুন..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                marginBottom: "20px",
                border: "1px solid #475569",
                background: "#1e293b",
                color: "white"
              }}
            />

            {drivers
              .filter((d) => {
                const name = (d.driverName || "").toLowerCase();
                const phone = String(d.phone || "");
                const keyword = search.toLowerCase();
                return name.includes(keyword) || phone.includes(keyword);
              })
              .map((driver) => (
                <div key={driver._id} style={{ background: "#1e293b", padding: "18px", marginBottom: "15px", borderRadius: "10px" }}>
                  <h3>👤 {driver.driverName || "নাম নেই"}</h3>
                  <p>📞 {driver.phone || "ফোন নেই"}</p>
                  <p>🚚 ধরণ: {driver.truckType || "-"}</p>
                  <p>汇 বডি: {driver.vehicleBody === "covered" ? "কভার্ড ভ্যান" : "খোলা ট্রাক"}</p>
                  <p>⚖️ ক্ষমতা: {driver.truckCapacity || 0} টন</p>
                  <p>📅 নিবন্ধিত: {driver.createdAt ? new Date(driver.createdAt).toLocaleDateString() : "-"}</p>
                  
                  <button
                    onClick={() => deleteDriver(driver._id)}
                    style={{ background: "#ef4444", color: "white", padding: "10px", border: "none", borderRadius: "6px", cursor: "pointer", marginTop: "10px" }}
                  >
                    ❌ ড্রাইভার মুছে ফেলুন
                  </button>
                </div>
              ))}
          </>
        )}
      </div>

      {/* DRIVER RESPONSE POPUP MODAL */}
      {selectedTrip && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999
          }}
        >
          <div style={{ background: "#1f2937", width: "500px", maxHeight: "80vh", overflowY: "auto", padding: "25px", borderRadius: "12px" }}>
            <h2 style={{ marginBottom: "20px" }}>👨‍✈️ আগ্রহী ড্রাইভার তালিকা</h2>
            <p style={{ color: "#14b8a6", marginBottom: "15px" }}>রুট: {selectedTrip.from} থেকে {selectedTrip.to}</p>

            {applications.length === 0 ? (
              <p style={{ textAlign: "center", margin: "20px 0", color: "#94a3b8" }}>এখনো কোনো ড্রাইভার আবেদন করেনি</p>
            ) : (
              applications.map((d) => (
                <div key={d._id} style={{ background: "#374151", padding: "15px", borderRadius: "10px", marginBottom: "15px" }}>
                  <p>👤 {d.driverName}</p>
                  <p>📞 {d.phone}</p>
                  <p>🚚 {d.truckType}</p>
                  <p>⚖️ {d.truckCapacity} টন</p>
                  <p>📍 {d.currentLocation ? `${d.currentLocation.lat}, ${d.currentLocation.lng}` : "লোকেশন পাওয়া যায়নি"}</p>
                  
                  <button
                    onClick={() => confirmDriver(d.driverId)}
                    style={{
                      background: "#16a34a",
                      color: "white",
                      border: "none",
                      padding: "10px",
                      width: "100%",
                      borderRadius: "8px",
                      cursor: "pointer",
                      marginTop: "10px",
                      fontWeight: "bold"
                    }}
                  >
                    ✅ এই ড্রাইভারকে কনফার্ম করুন
                  </button>
                </div>
              ))
            )}

            <button
              onClick={handleCloseModal}
              style={{
                background: "#ef4444",
                color: "white",
                border: "none",
                padding: "10px",
                width: "100%",
                borderRadius: "8px",
                cursor: "pointer",
                marginTop: "10px"
              }}
            >
              বন্ধ করুন
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;