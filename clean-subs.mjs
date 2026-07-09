import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA5-zdP8_tVcaonrGnrFCTqldDx8Io18dA",
  authDomain: "taxiapp-34557.firebaseapp.com",
  projectId: "taxiapp-34557",
  storageBucket: "taxiapp-34557.firebasestorage.app",
  messagingSenderId: "484485119790",
  appId: "1:484485119790:web:ff33278dda46e9721904bf",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function clean() {
  const snapshot = await getDocs(collection(db, 'admin_subscriptions'));
  for (let d of snapshot.docs) {
    await deleteDoc(doc(db, 'admin_subscriptions', d.id));
    console.log("Deleted", d.id);
  }
}
clean();
