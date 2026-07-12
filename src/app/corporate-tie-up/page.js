
export const metadata = {
  title: 'CorporateTieUp | Royal Punjab Ride',
};

export default function CorporateTieUpPage() {
  return (
    <main dangerouslySetInnerHTML={{ __html: `<section className="services-section" style="padding-top: 120px; min-height: 80vh;">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">B2B Solutions</span>
            <h2 className="section-title">Corporate Taxi Services</h2>
          </div>
          <div style="text-align: center; margin-top: 40px; max-width: 800px; margin-left: auto; margin-right: auto;">
            <p>Royal Punjab Ride offers customized transportation solutions for businesses, hotels, and travel agencies. Partner with us for employee transportation, executive airport transfers, and VIP guest travel.</p>
            <p><strong>Benefits of partnering with us:</strong></p>
            <ul style="text-align: left; margin: 20px auto; max-width: 400px; line-height: 1.8;">
              <li>Dedicated Account Manager</li>
              <li>Monthly Post-paid Billing</li>
              <li>Priority Booking & 100% Fulfillment</li>
              <li>GST Invoices</li>
            </ul>
            <a href="mailto:royalaps9815316271@gmail.com" className="btn-primary" style="display: inline-block; padding: 15px 30px; font-size: 1.2rem;">Email Us for Tie-ups</a>
          </div>
        </div>
      </section>
    <!-- ===== CONTACT / FOOTER ===== -->` }} />
  );
}
