
export const metadata = {
  title: 'AboutUs | Royal Punjab Ride',
};

export default function AboutUsPage() {
  return (
    <main dangerouslySetInnerHTML={{ __html: `<section class="services-section" style="padding-top: 120px; padding-bottom: 60px; min-height: 80vh;">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">About Royal Punjab Ride</span>
            <h2 class="section-title">Punjab's Most Trusted Taxi Service</h2>
          </div>
          <div style="max-width: 800px; margin: 0 auto; line-height: 1.8; color: #555; padding: 0 15px; font-size: 1.1rem;">
            <p style="margin-bottom: 15px;">Founded with a vision to revolutionize transportation in Punjab, <strong>Royal Punjab Ride</strong> is committed to providing safe, reliable, and premium taxi services at affordable rates.</p>
            <p style="margin-bottom: 15px;">Our fleet consists of well-maintained hatchbacks, sedans, SUVs, and luxury vehicles, driven by professional, background-verified chauffeurs. We pride ourselves on punctuality, transparency, and customer satisfaction.</p>
            <p>Whether you need a quick ride across town or a comfortable long-distance journey, Royal Punjab Ride is your perfect travel partner.</p>
          </div>
        </div>
      </section>
    <!-- ===== CONTACT / FOOTER ===== -->` }} />
  );
}
