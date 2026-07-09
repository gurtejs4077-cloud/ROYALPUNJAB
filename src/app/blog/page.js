
export const metadata = {
  title: 'Blog | Royal Punjab Ride',
};

export default function BlogPage() {
  return (
    <main dangerouslySetInnerHTML={{ __html: `<section className="services-section" style="padding-top: 120px; min-height: 80vh;">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Blog</span>
            <h2 className="section-title">Why Choose Royal Punjab Ride Services?</h2>
            <p className="section-subtitle">Discover the benefits of booking your next ride with Punjab's leading taxi service.</p>
          </div>
          <div style="max-width: 900px; margin: 0 auto; line-height: 1.8; color: #555; text-align: left;">
            <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Beautiful Taxi Ride in Punjab" style="width: 100%; border-radius: 15px; margin-bottom: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
            
            <h3 style="color: #222; font-size: 1.8rem; margin-top: 30px; margin-bottom: 15px;">The Ultimate Travel Experience Across Punjab</h3>
            <p style="font-size: 1.1rem; margin-bottom: 20px;">When traveling through the culturally rich and vibrant state of Punjab, having a reliable transportation partner is essential. Whether you are exploring the Golden Temple in Amritsar, attending a business conference in Chandigarh, or visiting family in Ludhiana, <strong>Royal Punjab Ride</strong> guarantees a seamless, premium, and stress-free journey.</p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin: 40px 0;">
              <div style="background: rgba(255,255,255,0.8); padding: 25px; border-radius: 12px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); border-left: 4px solid var(--maroon-accent);">
                <h4 style="color: #222; margin-bottom: 10px; font-size: 1.2rem;">1. Transparent & Affordable Pricing</h4>
                <p>No hidden charges, no unexpected surge pricing. We believe in providing premium services at highly competitive rates. Our price estimates are accurate, and what you see is what you pay.</p>
              </div>
              <div style="background: rgba(255,255,255,0.8); padding: 25px; border-radius: 12px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); border-left: 4px solid var(--maroon-accent);">
                <h4 style="color: #222; margin-bottom: 10px; font-size: 1.2rem;">2. Premium & Well-Maintained Fleet</h4>
                <p>From the compact Swift Dzire for city runs to the spacious Toyota Innova Crysta for outstation trips, every vehicle in our fleet is rigorously sanitized, well-maintained, and air-conditioned.</p>
              </div>
              <div style="background: rgba(255,255,255,0.8); padding: 25px; border-radius: 12px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); border-left: 4px solid var(--maroon-accent);">
                <h4 style="color: #222; margin-bottom: 10px; font-size: 1.2rem;">3. Highly Professional Chauffeurs</h4>
                <p>Our drivers are more than just drivers—they are experienced local guides. They are background-verified, polite, punctual, and highly experienced in navigating Punjab highways safely.</p>
              </div>
              <div style="background: rgba(255,255,255,0.8); padding: 25px; border-radius: 12px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); border-left: 4px solid var(--maroon-accent);">
                <h4 style="color: #222; margin-bottom: 10px; font-size: 1.2rem;">4. 24/7 Availability & Support</h4>
                <p>Flight landing at 3 AM? Need an urgent ride to Delhi? Our dispatch system and customer support run round the clock, ensuring you are never stranded, no matter the hour.</p>
              </div>
            </div>

            <h3 style="color: #222; font-size: 1.6rem; margin-top: 40px; margin-bottom: 15px;">Safety Always Comes First</h3>
            <p style="font-size: 1.1rem; margin-bottom: 20px;">We understand that safety is the biggest concern when traveling with family or late at night. Every Royal Punjab Ride cab is equipped with GPS tracking, and our dispatch center monitors trips in real time. We strictly adhere to speed limits and mandate regular rest breaks for our drivers on long routes.</p>
            
            <div style="text-align: center; margin-top: 50px;">
              <h3 style="color: #222; font-size: 1.5rem; margin-bottom: 20px;">Ready to experience the best cab service in Punjab?</h3>
              <a href="index.html#booking" className="btn-primary" style="display: inline-block; padding: 15px 35px; font-size: 1.2rem; border-radius: 30px;">Book Your Ride Today</a>
            </div>
          </div>
        </div>
      </section>
    <!-- ===== CONTACT / FOOTER ===== -->` }} />
  );
}
