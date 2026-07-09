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
    const subscriptions = subsSnapshot.docs.map(doc => doc.data());

    if (subscriptions.length === 0) {
      return NextResponse.json({ success: true, message: "No admins subscribed." });
    }

    const payload = JSON.stringify({
      title: '🚨 New Taxi Booking!',
      body: `Booking from ${data.passengerName} (${data.pickupLocation} to ${data.dropLocation}).`,
      url: '/admin-dashboard-secret'
    });

    // Send push notification to all stored subscriptions
    const sendPromises = subscriptions.map(sub => {
      // The subscription object saved in Firestore must match what web-push expects
      return webpush.sendNotification(sub, payload).catch(err => {
        console.error("Error sending push to a subscription:", err);
        // Here we could delete invalid subscriptions (HTTP 410 Gone) from Firestore in a real app
      });
    });

    await Promise.all(sendPromises);

    return NextResponse.json({ success: true, message: "Notifications sent!" });
  } catch (error) {
    console.error('Error in notify-admin:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
