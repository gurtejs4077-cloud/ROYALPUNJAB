
export const metadata = {
  title: 'OurFleet | Royal Punjab Ride',
};

export default function OurFleetPage() {
  return (
    <main dangerouslySetInnerHTML={{ __html: `<section className="fleet-section" style="padding-top: 120px; min-height: 80vh;">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Fleet</span>
            <h2 className="section-title">Explore Our Premium Vehicles</h2>
          </div>
          <div style="text-align: center; margin-top: 40px;">
            <p style="color: #444; margin-bottom: 20px; font-size: 1.1rem;">We offer a wide range of vehicles to suit your needs:</p>
            <ul style="color: #555; list-style: none; padding: 0; line-height: 2; font-size: 1.1rem;">
              <li><strong>5 Seater Economy:</strong> Swift Dzire, Toyota Etios (Ideal for 1-4 passengers)</li>
              <li><strong>7 Seater SUV:</strong> Toyota Innova Crysta, Maruti Ertiga (Ideal for family and group travel)</li>
              <li><strong>Luxury Segment:</strong> Mercedes, BMW, Audi (For special events and executive travel)</li>
            </ul>
            <br>
            <a href="index.html#fleet" className="btn-primary" style="display: inline-block; padding: 15px 30px; font-size: 1.2rem;">View Pricing</a>
          </div>
        </div>
      </section>
    <!-- ===== CONTACT / FOOTER ===== -->` }} />
  );
}
