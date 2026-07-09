
export const metadata = {
  title: 'WeddingFleet | Royal Punjab Ride',
};

export default function WeddingFleetPage() {
  return (
    <main dangerouslySetInnerHTML={{ __html: `<section className="services-section" style="padding-top: 120px; min-height: 80vh;">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Wedding Fleet</span>
            <h2 className="section-title">Luxury Cars for Your Special Day</h2>
            <p className="section-subtitle">Premium vehicles for the Bride, Groom, and Baraat.</p>
          </div>
          <div style="text-align: center; margin-top: 40px;">
            <p>Make a grand entrance with our luxury fleet. We offer beautifully maintained luxury sedans and SUVs, with optional floral decoration services. We also manage bulk transportation for your wedding guests.</p>
            <br>
            <a href="index.html#contact" className="btn-primary" style="display: inline-block; padding: 15px 30px; font-size: 1.2rem;">Contact for Wedding Booking</a>
          </div>
        </div>
      </section>
    <!-- ===== CONTACT / FOOTER ===== -->` }} />
  );
}
