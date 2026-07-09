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
  const [isSubscribed, setIsSubscribed] = useState(false);

  const SECRET_PIN = "ROYAL2025";

  const subscribeToPush = async () => {
    if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
      alert("Push notifications are not supported by your browser.");
      return;
    }
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') {
        alert("Permission not granted for notifications");
        return;
      }
      const urlBase64ToUint8Array = (base64String) => {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);
        for (let i = 0; i < rawData.length; ++i) {
          outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
      };

      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY)
      });
      // Save subscription to Firestore using a hashed endpoint to avoid duplicates
      const { setDoc, doc } = await import("firebase/firestore");
      const subObj = JSON.parse(JSON.stringify(subscription));
      const docId = btoa(subObj.endpoint).replace(/[^a-zA-Z0-9]/g, '').substring(0, 50);
      await setDoc(doc(db, "admin_subscriptions", docId), subObj);
      
      setIsSubscribed(true);
      alert("Successfully subscribed to notifications!");
    } catch (err) {
      console.error("Failed to subscribe:", err);
      alert("Failed to subscribe to notifications: " + err.message);
    }
  };

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

  const testPush = async () => {
    try {
      const res = await fetch('/api/notify-admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passengerName: 'Test Admin', pickupLocation: 'Local', dropLocation: 'Test' })
      });
      const data = await res.json();
      if (data.success) {
        showToast("Push trigger sent successfully! Check your PC notifications.");
      } else {
        alert("Failed to send push: " + data.error);
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  const showToast = (msg) => {
    const t = document.createElement("div");
    t.textContent = msg;
    t.style.cssText = "position:fixed;bottom:20px;right:20px;background:#25D366;color:white;padding:12px 24px;border-radius:8px;z-index:9999;";
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 3000);
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
          <div style={{ display: "flex", gap: "12px" }}>
            <button onClick={subscribeToPush} disabled={isSubscribed} style={{ background: isSubscribed ? "rgba(37, 211, 102, 0.2)" : "rgba(244, 67, 145, 0.2)", border: `1px solid ${isSubscribed ? "#25D366" : "#F44391"}`, padding: "10px 20px", borderRadius: "8px", color: isSubscribed ? "#25D366" : "#F44391", cursor: isSubscribed ? "default" : "pointer", fontWeight: "600" }}>
              {isSubscribed ? "✅ Notifications Enabled" : "🔔 Enable Notifications"}
            </button>
            <button onClick={testPush} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", padding: "10px 20px", borderRadius: "8px", color: "white", cursor: "pointer" }}>
              🧪 Test Push
            </button>
            <button onClick={() => fetchBookings()} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", padding: "10px 20px", borderRadius: "8px", color: "white", cursor: "pointer" }}>
              Refresh Data
            </button>
          </div>
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
                    <th style={{ padding: "16px", color: "rgba(255,255,255,0.5)", fontWeight: "500", fontSize: "13px", textTransform: "uppercase" }}>Contact</th>
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
                      <td style={{ padding: "16px" }}>
                        <a 
                          href={`https://wa.me/91${b.passengerPhone?.replace(/[^0-9]/g, '')}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{
                            background: "rgba(37, 211, 102, 0.1)",
                            color: "#25D366",
                            border: "1px solid currentColor",
                            padding: "8px 16px",
                            borderRadius: "100px",
                            fontSize: "13px",
                            fontWeight: "600",
                            textDecoration: "none",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            transition: "opacity 0.2s"
                          }}
                          onMouseOver={e => e.currentTarget.style.opacity = 0.8}
                          onMouseOut={e => e.currentTarget.style.opacity = 1}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M12.01 2.012c-5.506 0-9.974 4.465-9.974 9.97 0 1.761.458 3.483 1.332 5.002L2.012 22l5.166-1.353c1.457.805 3.109 1.229 4.832 1.229 5.507 0 9.975-4.464 9.975-9.97 0-5.505-4.468-9.97-9.975-9.97" fill="#25D366"/>
                            <path d="M16.48 13.52c-.22-.11-1.312-.647-1.516-.721-.203-.075-.353-.11-.5.11-.15.22-.572.72-.7.868-.13.148-.26.166-.48.055-.22-.11-1.026-.379-1.954-1.207-.723-.644-1.21-1.442-1.352-1.662-.14-.22-.015-.339.096-.449.1-.1.22-.258.33-.388.11-.13.146-.22.22-.367.074-.148.037-.277-.018-.387-.055-.11-.5-1.207-.685-1.654-.18-.435-.363-.377-.5-.383-.13-.006-.279-.006-.427-.006-.148 0-.39.055-.595.276-.204.22-.782.766-.782 1.868s.8 2.164.912 2.31c.11.148 1.576 2.408 3.818 3.376.533.232.95.37 1.275.474.536.171 1.023.146 1.408.089.432-.065 1.312-.536 1.497-1.054.185-.518.185-.96.13-1.054-.055-.094-.204-.15-.424-.26z" fill="#FFF"/>
                          </svg>
                          WhatsApp
                        </a>
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
