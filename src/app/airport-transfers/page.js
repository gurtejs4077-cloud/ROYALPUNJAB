
export const metadata = {
  title: 'AirportTransfers | Royal Punjab Ride',
};

export default function AirportTransfersPage() {
  return (
    <main dangerouslySetInnerHTML={{ __html: `<section className="services-section" style="padding-top: 120px; min-height: 80vh;">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Airport Transfers</span>
            <h2 className="section-title">Punctual Airport Pickups & Drops</h2>
            <p className="section-subtitle">Serving Amritsar (ATQ), Chandigarh (IXC), and Delhi (DEL) Airports.</p>
          </div>
          <div style="text-align: center; margin-top: 40px;">
            <p>Never miss a flight. We track your flights in real-time to ensure your driver is waiting for you exactly when you land. Enjoy 45 minutes of free waiting time and baggage assistance.</p>
            <br>
            <a href="index.html#booking" className="btn-primary" style="display: inline-block; padding: 15px 30px; font-size: 1.2rem;">Book Airport Transfer</a>
          </div>
        </div>
      </section>
    <!-- ===== CONTACT / FOOTER ===== -->` }} />
  );
}
