
export const metadata = {
  title: 'TermsAndConditions | Royal Punjab Ride',
};

export default function TermsAndConditionsPage() {
  return (
    <main dangerouslySetInnerHTML={{ __html: `<section className="services-section" style="padding-top: 120px; min-height: 80vh;">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Terms and Conditions</h2>
          </div>
          <div style="max-width: 800px; margin: 0 auto; line-height: 1.8; color: #555; text-align: left;">
            <p>By booking a cab with Royal Punjab Ride, you agree to the following terms and conditions:</p>
            <h3>1. Booking & Fares</h3>
            <p>The estimated fare shown at the time of booking is indicative. Final fare may vary based on actual distance traveled, waiting time, and applicable toll/state taxes.</p>
            <h3>2. Cancellations</h3>
            <p>Bookings can be cancelled free of charge up to 2 hours before the scheduled pickup time. Late cancellations may incur a nominal fee.</p>
            <h3>3. Passenger Conduct</h3>
            <p>Passengers are requested to maintain the cleanliness of the vehicle. Smoking and consumption of alcohol inside the cab are strictly prohibited.</p>
          </div>
        </div>
      </section>
    <!-- ===== CONTACT / FOOTER ===== -->` }} />
  );
}
