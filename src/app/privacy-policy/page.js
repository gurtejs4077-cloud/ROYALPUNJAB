
export const metadata = {
  title: 'PrivacyPolicy | Royal Punjab Ride',
};

export default function PrivacyPolicyPage() {
  return (
    <main dangerouslySetInnerHTML={{ __html: `<section className="services-section" style="padding-top: 120px; min-height: 80vh;">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Privacy Policy</h2>
          </div>
          <div style="max-width: 800px; margin: 0 auto; line-height: 1.8; color: #555; text-align: left;">
            <p>At Royal Punjab Ride, we take your privacy seriously. This policy explains how we collect, use, and protect your personal data when you use our website or services.</p>
            <h3>1. Information We Collect</h3>
            <p>We collect your name, phone number, email address, and pickup/drop-off locations when you make a booking.</p>
            <h3>2. How We Use Your Data</h3>
            <p>Your data is strictly used to fulfill your taxi booking, send you notifications (via WhatsApp/SMS), and improve our services.</p>
            <h3>3. Data Protection</h3>
            <p>We do not sell or share your personal information with third parties, except as required to fulfill your booking (e.g., sharing your number with your assigned driver).</p>
          </div>
        </div>
      </section>
    <!-- ===== CONTACT / FOOTER ===== -->` }} />
  );
}
