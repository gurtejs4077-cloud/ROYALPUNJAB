import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA5-zdP8_tVcaonrGnrFCTqldDx8Io18dA",
  authDomain: "taxiapp-34557.firebaseapp.com",
  projectId: "taxiapp-34557",
  storageBucket: "taxiapp-34557.firebasestorage.app",
  messagingSenderId: "484485119790",
  appId: "1:484485119790:web:ff33278dda46e9721904bf",
  measurementId: "G-SKX51RXJ6F"
};

// Initialize Firebase only if it hasn't been initialized yet
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { db, app };
