import { NextResponse } from 'next/server';
import webpush from 'web-push';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

webpush.setVapidDetails(
  process.env.VAPID_SUBJECT || 'mailto:royalaps@yahoo.com',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

export async function POST(req) {
  try {
    const data = await req.json();
    
    // Fetch all admin subscriptions from Firestore
    const subsSnapshot = await getDocs(collection(db, "admin_subscriptions"));
    const subscriptions = subsSnapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }));

    if (subscriptions.length === 0) {
      return NextResponse.json({ success: true, message: "No admins subscribed." });
    }

    const payload = JSON.stringify({
      title: '🚨 New Taxi Booking!',
      body: `Booking from ${data.passengerName} (${data.pickupLocation} to ${data.dropLocation}).`,
      url: '/admin-dashboard-secret'
    });

    const { doc, deleteDoc } = await import('firebase/firestore');

    const sendPromises = subscriptions.map(async (sub) => {
      try {
        await webpush.sendNotification(sub.data, payload);
      } catch (err) {
        console.error("Error sending push to a subscription:", err);
        if (err.statusCode === 410 || err.statusCode === 404) {
          console.log(`Deleting dead subscription ${sub.id}`);
          await deleteDoc(doc(db, "admin_subscriptions", sub.id));
        }
      }
    });

    const results = await Promise.allSettled(sendPromises);
    console.log("Push send results:", results);

    return NextResponse.json({ success: true, message: "Notifications processed!", results });
  } catch (error) {
    console.error('Error in notify-admin:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
