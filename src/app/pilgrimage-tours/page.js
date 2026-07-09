
export const metadata = {
  title: 'PilgrimageTours | Royal Punjab Ride',
};

export default function PilgrimageToursPage() {
  return (
    <main dangerouslySetInnerHTML={{ __html: `<section className="services-section" style="padding-top: 120px; min-height: 80vh;">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Pilgrimage Tours</span>
            <h2 className="section-title">Spiritual Journeys Across Punjab</h2>
            <p className="section-subtitle">Dedicated cabs for the Golden Temple, Anandpur Sahib, and more.</p>
          </div>
          <div style="text-align: center; margin-top: 40px;">
            <p>We provide respectful, knowledgeable drivers for your religious tours. Book multi-day packages to visit historic Gurudwaras and temples across the state with your family in absolute comfort.</p>
            <br>
            <a href="index.html#booking" className="btn-primary" style="display: inline-block; padding: 15px 30px; font-size: 1.2rem;">Book a Tour</a>
          </div>
        </div>
      </section>
    <!-- ===== CONTACT / FOOTER ===== -->` }} />
  );
}
