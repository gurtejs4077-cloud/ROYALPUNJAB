"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy, doc, updateDoc } from "firebase/firestore";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState("");
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const SECRET_PIN = "ROYAL2025";

  const handleLogin = (e) => {
    e.preventDefault();
    if (pin === SECRET_PIN) {
      setIsAuthenticated(true);
      fetchBookings();
    } else {
      setError("Incorrect PIN. Access Denied.");
      setPin("");
    }
  };

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "bookings"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setBookings(data);
    } catch (err) {
      console.error("Error fetching bookings:", err);
      setError("Failed to fetch bookings.");
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, currentStatus, newStatus) => {
    if (currentStatus === newStatus) return;
    try {
      const bookingRef = doc(db, "bookings", id);
      await updateDoc(bookingRef, { status: newStatus });
      setBookings(bookings.map(b => b.id === id ? { ...b, status: newStatus } : b));
    } catch (err) {
      console.error("Error updating status:", err);
      alert("Failed to update status.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0B0C10", color: "white", fontFamily: "sans-serif" }}>
        <div style={{ background: "rgba(255,255,255,0.05)", padding: "40px", borderRadius: "16px", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)", textAlign: "center", maxWidth: "400px", width: "90%" }}>
          <h1 style={{ fontSize: "24px", marginBottom: "8px", fontWeight: "600", color: "#F44391" }}>Restricted Access</h1>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "30px", fontSize: "14px" }}>Enter the secret PIN to access the Royal Punjab Ride Admin Panel.</p>
          <form onSubmit={handleLogin}>
            <input 
              type="password" 
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="Enter PIN"
              style={{ width: "100%", padding: "14px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(0,0,0,0.3)", color: "white", marginBottom: "20px", fontSize: "16px", outline: "none", textAlign: "center", letterSpacing: "4px" }}
              required
            />
            {error && <div style={{ color: "#FF4B4B", marginBottom: "15px", fontSize: "13px" }}>{error}</div>}
            <button type="submit" style={{ width: "100%", padding: "14px", background: "linear-gradient(90deg, #F44391 0%, #FF8C00 100%)", border: "none", borderRadius: "8px", color: "white", fontWeight: "bold", cursor: "pointer", fontSize: "16px", transition: "opacity 0.2s" }} onMouseOver={e => e.target.style.opacity = 0.9} onMouseOut={e => e.target.style.opacity = 1}>
              Access Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#0B0C10", color: "white", fontFamily: "sans-serif", padding: "40px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
          <div>
            <h1 style={{ fontSize: "32px", fontWeight: "bold", background: "linear-gradient(90deg, #F44391 0%, #FF8C00 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Royal Punjab Admin</h1>
            <p style={{ color: "rgba(255,255,255,0.5)", marginTop: "8px" }}>Manage all your taxi bookings in one place.</p>
          </div>
          <button onClick={() => fetchBookings()} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", padding: "10px 20px", borderRadius: "8px", color: "white", cursor: "pointer" }}>
            Refresh Data
          </button>
        </div>

        {loading ? (
          <div style={{ textAlign: "center", padding: "100px", color: "rgba(255,255,255,0.5)" }}>Loading bookings...</div>
        ) : bookings.length === 0 ? (
          <div style={{ textAlign: "center", padding: "100px", background: "rgba(255,255,255,0.02)", borderRadius: "16px", border: "1px dashed rgba(255,255,255,0.1)" }}>
            No bookings found yet.
          </div>
        ) : (
          <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.08)", overflow: "hidden" }}>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                <thead>
                  <tr style={{ background: "rgba(0,0,0,0.4)" }}>
                    <th style={{ padding: "16px", color: "rgba(255,255,255,0.5)", fontWeight: "500", fontSize: "13px", textTransform: "uppercase" }}>Booking ID</th>
                    <th style={{ padding: "16px", color: "rgba(255,255,255,0.5)", fontWeight: "500", fontSize: "13px", textTransform: "uppercase" }}>Passenger</th>
                    <th style={{ padding: "16px", color: "rgba(255,255,255,0.5)", fontWeight: "500", fontSize: "13px", textTransform: "uppercase" }}>Route</th>
                    <th style={{ padding: "16px", color: "rgba(255,255,255,0.5)", fontWeight: "500", fontSize: "13px", textTransform: "uppercase" }}>Date & Time</th>
                    <th style={{ padding: "16px", color: "rgba(255,255,255,0.5)", fontWeight: "500", fontSize: "13px", textTransform: "uppercase" }}>Cab</th>
                    <th style={{ padding: "16px", color: "rgba(255,255,255,0.5)", fontWeight: "500", fontSize: "13px", textTransform: "uppercase" }}>Fare</th>
                    <th style={{ padding: "16px", color: "rgba(255,255,255,0.5)", fontWeight: "500", fontSize: "13px", textTransform: "uppercase" }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((b) => (
                    <tr key={b.id} style={{ borderTop: "1px solid rgba(255,255,255,0.05)", transition: "background 0.2s" }} onMouseOver={e => e.currentTarget.style.background = "rgba(255,255,255,0.03)"} onMouseOut={e => e.currentTarget.style.background = "transparent"}>
                      <td style={{ padding: "16px", fontSize: "14px", fontFamily: "monospace", color: "#FF8C00" }}>{b.bookingId}</td>
                      <td style={{ padding: "16px" }}>
                        <div style={{ fontWeight: "500" }}>{b.passengerName}</div>
                        <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginTop: "4px" }}>{b.passengerPhone}</div>
                      </td>
                      <td style={{ padding: "16px", fontSize: "14px", maxWidth: "200px" }}>
                        <div style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} title={b.pickupLocation}><span style={{ color: "#F44391" }}>From:</span> {b.pickupLocation}</div>
                        <div style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginTop: "4px" }} title={b.dropLocation}><span style={{ color: "#FF4B4B" }}>To:</span> {b.dropLocation}</div>
                      </td>
                      <td style={{ padding: "16px", fontSize: "14px" }}>
                        <div>{b.bookingDate}</div>
                        <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px" }}>{b.bookingTime}</div>
                      </td>
                      <td style={{ padding: "16px", fontSize: "14px" }}>
                        <span style={{ background: "rgba(255,255,255,0.1)", padding: "4px 8px", borderRadius: "4px", fontSize: "12px" }}>{b.cabType}</span>
                        <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", marginTop: "4px", textTransform: "capitalize" }}>{b.tripType}</div>
                      </td>
                      <td style={{ padding: "16px", fontWeight: "600", color: "#25D366" }}>{b.estimatedFare}</td>
                      <td style={{ padding: "16px" }}>
                        <select 
                          value={b.status || "Pending"}
                          onChange={(e) => updateStatus(b.id, b.status, e.target.value)}
                          style={{
                            background: b.status === "Confirmed" ? "rgba(37, 211, 102, 0.1)" : b.status === "Completed" ? "rgba(255, 255, 255, 0.1)" : b.status === "Cancelled" ? "rgba(239, 68, 68, 0.1)" : "rgba(244, 67, 145, 0.1)",
                            color: b.status === "Confirmed" ? "#25D366" : b.status === "Completed" ? "white" : b.status === "Cancelled" ? "#EF4444" : "#F44391",
                            border: "1px solid currentColor",
                            padding: "6px 12px",
                            borderRadius: "100px",
                            fontSize: "13px",
                            fontWeight: "600",
                            outline: "none",
                            cursor: "pointer"
                          }}
                        >
                          <option value="Pending" style={{ background: "#0B0C10", color: "white" }}>⏳ Pending</option>
                          <option value="Confirmed" style={{ background: "#0B0C10", color: "white" }}>✅ Confirmed</option>
                          <option value="Completed" style={{ background: "#0B0C10", color: "white" }}>🏁 Completed</option>
                          <option value="Cancelled" style={{ background: "#0B0C10", color: "white" }}>❌ Cancelled</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
