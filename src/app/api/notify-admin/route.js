import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const data = await req.json();
    
    const host = req.headers.get("host") || "punjabride.com";
    const protocol = host.includes("localhost") ? "http" : "https";
    const adminLink = `${protocol}://${host}/admin-dashboard-secret?pin=ROYAL2025`;
    
    // --- 1. SEND EMAIL NOTIFICATION ---
    let emailStatus = 'skipped';
    try {
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        const transporter = nodemailer.createTransport({
          service: 'gmail', // Assumes you are using Gmail.
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: 'royalaps@yahoo.co.in',
          subject: `🚨 New Taxi Booking: ${data.passengerName}`,
          text: `
New Taxi Booking Received!

Name: ${data.passengerName || 'N/A'}
Phone: ${data.passengerPhone || 'N/A'}
Trip Type: ${data.tripType || 'N/A'}
Pickup: ${data.pickupLocation || 'N/A'}
Drop-off: ${data.dropLocation || 'N/A'}
Date: ${data.bookingDate || 'N/A'}
Time: ${data.bookingTime || 'N/A'}
Cab Type: ${data.cabType || 'N/A'}

Please log in to your admin dashboard to view this booking.
          `,
          html: `
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f3f4f6; padding: 40px 20px; text-align: center;">
              <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05);">
                
                <!-- Header -->
                <div style="background-color: #0d1b3e; color: #ffffff; padding: 30px 20px;">
                  <h1 style="margin: 0; font-size: 28px; font-weight: 800; letter-spacing: 1px;">ROYAL PUNJAB<span style="color: #facc15;">|</span>RIDE</h1>
                  <p style="margin: 10px 0 0 0; font-size: 18px; color: #facc15; font-weight: 600;">New Taxi Booking Received! 🚖</p>
                </div>

                <!-- Body -->
                <div style="padding: 35px 30px; text-align: left; color: #1f2937;">
                  
                  <div style="margin-bottom: 30px;">
                    <p style="font-size: 18px; color: #6b7280; margin: 0 0 5px 0; text-transform: uppercase; font-weight: 700; letter-spacing: 1px;">Passenger Details</p>
                    <p style="font-size: 24px; margin: 0 0 8px 0; font-weight: bold; color: #111827;">${data.passengerName || 'N/A'}</p>
                    <p style="font-size: 26px; margin: 0; color: #2563eb; font-weight: 800;">📞 ${data.passengerPhone || 'N/A'}</p>
                  </div>
                  
                  <div style="margin-bottom: 30px;">
                    <p style="font-size: 18px; color: #6b7280; margin: 0 0 15px 0; text-transform: uppercase; font-weight: 700; letter-spacing: 1px;">Trip Info</p>
                    <table style="width: 100%; font-size: 18px; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #4b5563;"><strong>Trip Type:</strong></td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; text-align: right; color: #0d1b3e; font-weight: bold; text-transform: uppercase;">${data.tripType || 'N/A'}</td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #4b5563;"><strong>Cab:</strong></td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; text-align: right; color: #0d1b3e; font-weight: bold;">${data.cabType || 'N/A'}</td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #4b5563;"><strong>Date:</strong></td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; text-align: right; color: #0d1b3e; font-weight: bold; font-size: 20px;">${data.bookingDate || 'N/A'}</td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #4b5563;"><strong>Time:</strong></td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; text-align: right; color: #ea580c; font-weight: 900; font-size: 22px;">${data.bookingTime || 'N/A'}</td>
                      </tr>
                    </table>
                  </div>

                  <div style="background-color: #f8fafc; border-left: 5px solid #2563eb; padding: 20px; margin-bottom: 15px; border-radius: 0 8px 8px 0;">
                    <p style="margin: 0 0 8px 0; font-size: 15px; color: #6b7280; font-weight: bold; text-transform: uppercase;">📍 Pickup Location</p>
                    <p style="margin: 0; font-size: 20px; font-weight: 600; color: #111827;">${data.pickupLocation || 'N/A'}</p>
                  </div>

                  <div style="background-color: #fdf2f8; border-left: 5px solid #db2777; padding: 20px; border-radius: 0 8px 8px 0;">
                    <p style="margin: 0 0 8px 0; font-size: 15px; color: #6b7280; font-weight: bold; text-transform: uppercase;">🏁 Drop Location</p>
                    <p style="margin: 0; font-size: 20px; font-weight: 600; color: #111827;">${data.dropLocation || 'N/A'}</p>
                  </div>
                  
                </div>

                <!-- Footer -->
                <div style="background-color: #f9fafb; padding: 30px; font-size: 15px; color: #6b7280; border-top: 1px solid #e5e7eb; text-align: center;">
                  <a href="${adminLink}" style="display: inline-block; background-color: #2563eb; color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: bold; font-size: 16px; margin-bottom: 15px; box-shadow: 0 4px 6px rgba(37, 99, 235, 0.2);">View in Admin Dashboard &rarr;</a>
                  <p style="margin: 0; font-size: 13px;">Clicking the button above will automatically log you in.</p>
                </div>

              </div>
            </div>
          `
        };

        await transporter.sendMail(mailOptions);
        emailStatus = 'sent';
      } else {
        console.warn("EMAIL_USER or EMAIL_PASS not set in environment variables. Skipping email.");
      }
    } catch (emailErr) {
      console.error("Failed to send email via Nodemailer:", emailErr);
      emailStatus = 'failed';
    }

    return NextResponse.json({ success: true, message: "Email processed!", emailStatus });
  } catch (error) {
    console.error('Error in notify-admin:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
