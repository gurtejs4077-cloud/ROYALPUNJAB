
export const metadata = {
  title: 'CityRides | Royal Punjab Ride',
};

export default function CityRidesPage() {
  return (
    <main dangerouslySetInnerHTML={{ __html: `<section className="services-section" style="padding-top: 120px; min-height: 80vh;">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">City Rides</span>
            <h2 className="section-title">Reliable Local Taxis in Punjab</h2>
            <p className="section-subtitle">Quick, comfortable, and air-conditioned city rides in Amritsar, Ludhiana, Chandigarh, and more.</p>
          </div>
          <div style="text-align: center; margin-top: 40px;">
            <p>Our city ride service ensures you never have to wait. We provide 24/7 availability with transparent pricing and no surge charges. Whether you're heading to the market, office, or visiting relatives, Royal Punjab Ride has you covered.</p>
            <br>
            <a href="index.html#booking" className="btn-primary" style="display: inline-block; padding: 15px 30px; font-size: 1.2rem;">Book a City Ride Now</a>
          </div>
        </div>
      </section>
    <!-- ===== CONTACT / FOOTER ===== -->` }} />
  );
}
