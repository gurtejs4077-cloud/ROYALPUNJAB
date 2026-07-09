import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA5-zdP8_tVcaonrGnrFCTqldDx8Io18dA",
  authDomain: "taxiapp-34557.firebaseapp.com",
  projectId: "taxiapp-34557",
  storageBucket: "taxiapp-34557.firebasestorage.app",
  messagingSenderId: "484485119790",
  appId: "1:484485119790:web:ff33278dda46e9721904bf",
  measurementId: "G-SKX51RXJ6F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Expose a global function to save bookings to Firestore
window.saveBookingToFirebase = async (bookingData) => {
  try {
    const docRef = await addDoc(collection(db, "bookings"), {
      ...bookingData,
      createdAt: serverTimestamp()
    });
    console.log("Booking saved with ID: ", docRef.id);
    return { success: true };
  } catch (e) {
    console.error("Error adding document: ", e);
    return { success: false, error: e.message || String(e) };
  }
};
