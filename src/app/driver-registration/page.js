
export const metadata = {
  title: 'DriverRegistration | Royal Punjab Ride',
};

export default function DriverRegistrationPage() {
  return (
    <main dangerouslySetInnerHTML={{ __html: `<section className="services-section" style="padding-top: 120px; min-height: 80vh;">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Join the Team</span>
            <h2 className="section-title">Attach Your Taxi with Royal Punjab Ride</h2>
          </div>
          <div style="max-width: 600px; margin: 40px auto; text-align: center;">
            <p>Are you a professional driver with a commercial vehicle? Join Royal Punjab Ride and increase your daily earnings with steady bookings.</p>
            <form onsubmit="event.preventDefault(); showToast('Application submitted successfully! We will contact you soon.');" style="display: flex; flex-direction: column; gap: 15px; margin-top: 30px;">
              <input type="text" placeholder="Full Name" required style="padding: 12px; border-radius: 5px; border: 1px solid #ccc;">
              <input type="tel" placeholder="Phone Number" required style="padding: 12px; border-radius: 5px; border: 1px solid #ccc;">
              <input type="text" placeholder="Vehicle Model (e.g. Innova)" required style="padding: 12px; border-radius: 5px; border: 1px solid #ccc;">
              <button type="submit" className="btn-primary" style="padding: 15px;">Submit Application</button>
            </form>
          </div>
        </div>
      </section>
    <!-- ===== CONTACT / FOOTER ===== -->` }} />
  );
}
