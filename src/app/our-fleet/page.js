
export const metadata = {
  title: 'OurFleet | Royal Punjab Ride',
};

export default function OurFleetPage() {
  return (
    <main dangerouslySetInnerHTML={{ __html: `<section class="fleet-section" style="padding-top: 120px; padding-bottom: 60px; min-height: 80vh;">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">Our Fleet</span>
            <h2 class="section-title">Explore Our Premium Vehicles</h2>
          </div>
          <div style="text-align: center; margin-top: 40px; padding: 0 15px;">
            <p style="color: #444; margin-bottom: 20px; font-size: 1.1rem;">We offer a wide range of vehicles to suit your needs:</p>
            <ul style="color: #555; list-style: none; padding: 0; line-height: 2; font-size: 1.1rem; text-align: left; display: inline-block;">
              <li><strong>5 Seater Economy:</strong> Swift Dzire, Toyota Etios and others... (Ideal for 1-4 passengers)</li>
              <li><strong>7 Seater SUV:</strong> Toyota Innova (Regular), Maruti Ertiga, Kia Carens and others... (Ideal for family and group travel)</li>
              <li><strong>Luxury Segment:</strong> Toyota Innova Crysta and others... (For special events and executive travel)</li>
            </ul>
            <br><br>
            <a href="/#fleet" class="btn-primary" style="display: inline-block; padding: 15px 30px; font-size: 1.2rem;">View Pricing</a>
          </div>
        </div>
      </section>
    <!-- ===== CONTACT / FOOTER ===== -->` }} />
  );
}
