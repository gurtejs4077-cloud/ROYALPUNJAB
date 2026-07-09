
export const metadata = {
  title: 'HourlyRentals | Royal Punjab Ride',
};

export default function HourlyRentalsPage() {
  return (
    <main dangerouslySetInnerHTML={{ __html: `<section className="services-section" style="padding-top: 120px; min-height: 80vh;">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Hourly Rentals</span>
            <h2 className="section-title">Rent a Cab by the Hour</h2>
            <p className="section-subtitle">Flexible packages starting from 2 hours / 20 km.</p>
          </div>
          <div style="text-align: center; margin-top: 40px;">
            <p>Need a car for multiple stops? Going shopping or attending multiple business meetings? Rent a cab with a driver by the hour and travel without the hassle of booking multiple rides.</p>
            <br>
            <a href="index.html#booking" className="btn-primary" style="display: inline-block; padding: 15px 30px; font-size: 1.2rem;">Book Hourly Rental</a>
          </div>
        </div>
      </section>
    <!-- ===== CONTACT / FOOTER ===== -->` }} />
  );
}
