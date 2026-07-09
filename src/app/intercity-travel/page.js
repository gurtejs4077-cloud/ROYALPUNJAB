
export const metadata = {
  title: 'IntercityTravel | Royal Punjab Ride',
};

export default function IntercityTravelPage() {
  return (
    <main dangerouslySetInnerHTML={{ __html: `<section className="services-section" style="padding-top: 120px; min-height: 80vh;">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Intercity Travel</span>
            <h2 className="section-title">Comfortable Long-Distance Rides</h2>
            <p className="section-subtitle">Travel smoothly between cities across Punjab, Delhi, and Himachal Pradesh.</p>
          </div>
          <div style="text-align: center; margin-top: 40px;">
            <p>Book outstation cabs for one-way drops or round trips. Our professional drivers are experienced on highways and ensure a smooth, relaxing journey. Perfect for trips from Amritsar to Delhi, Chandigarh to Ludhiana, and beyond.</p>
            <br>
            <a href="index.html#booking" className="btn-primary" style="display: inline-block; padding: 15px 30px; font-size: 1.2rem;">Book Outstation Cab</a>
          </div>
        </div>
      </section>
    <!-- ===== CONTACT / FOOTER ===== -->` }} />
  );
}
