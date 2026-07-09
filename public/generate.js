const fs = require('fs');
const path = require('path');

const indexContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

// Extract Header & Navbar
const headerSplit = '<!-- ===== CINEMATIC HERO SECTION ===== -->';
const footerSplit = '<!-- ===== CONTACT / FOOTER ===== -->';

const header = indexContent.split(headerSplit)[0];
const footerRaw = indexContent.split(footerSplit)[1];
const footer = footerSplit + '\n' + footerRaw;

const pages = [
  { 
    id: 'city-rides', 
    title: 'City Rides in Punjab', 
    content: `
      <section class="services-section" style="padding-top: 120px; min-height: 80vh;">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">City Rides</span>
            <h2 class="section-title">Reliable Local Taxis in Punjab</h2>
            <p class="section-subtitle">Quick, comfortable, and air-conditioned city rides in Amritsar, Ludhiana, Chandigarh, and more.</p>
          </div>
          <div style="text-align: center; margin-top: 40px;">
            <p>Our city ride service ensures you never have to wait. We provide 24/7 availability with transparent pricing and no surge charges. Whether you're heading to the market, office, or visiting relatives, Royal Punjab Ride has you covered.</p>
            <br>
            <a href="index.html#booking" class="btn-primary" style="display: inline-block; padding: 15px 30px; font-size: 1.2rem;">Book a City Ride Now</a>
          </div>
        </div>
      </section>
    `
  },
  { 
    id: 'intercity-travel', 
    title: 'Intercity Travel', 
    content: `
      <section class="services-section" style="padding-top: 120px; min-height: 80vh;">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">Intercity Travel</span>
            <h2 class="section-title">Comfortable Long-Distance Rides</h2>
            <p class="section-subtitle">Travel smoothly between cities across Punjab, Delhi, and Himachal Pradesh.</p>
          </div>
          <div style="text-align: center; margin-top: 40px;">
            <p>Book outstation cabs for one-way drops or round trips. Our professional drivers are experienced on highways and ensure a smooth, relaxing journey. Perfect for trips from Amritsar to Delhi, Chandigarh to Ludhiana, and beyond.</p>
            <br>
            <a href="index.html#booking" class="btn-primary" style="display: inline-block; padding: 15px 30px; font-size: 1.2rem;">Book Outstation Cab</a>
          </div>
        </div>
      </section>
    `
  },
  { 
    id: 'airport-transfers', 
    title: 'Airport Transfers', 
    content: `
      <section class="services-section" style="padding-top: 120px; min-height: 80vh;">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">Airport Transfers</span>
            <h2 class="section-title">Punctual Airport Pickups & Drops</h2>
            <p class="section-subtitle">Serving Amritsar (ATQ), Chandigarh (IXC), and Delhi (DEL) Airports.</p>
          </div>
          <div style="text-align: center; margin-top: 40px;">
            <p>Never miss a flight. We track your flights in real-time to ensure your driver is waiting for you exactly when you land. Enjoy 45 minutes of free waiting time and baggage assistance.</p>
            <br>
            <a href="index.html#booking" class="btn-primary" style="display: inline-block; padding: 15px 30px; font-size: 1.2rem;">Book Airport Transfer</a>
          </div>
        </div>
      </section>
    `
  },
  { 
    id: 'pilgrimage-tours', 
    title: 'Pilgrimage Tours', 
    content: `
      <section class="services-section" style="padding-top: 120px; min-height: 80vh;">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">Pilgrimage Tours</span>
            <h2 class="section-title">Spiritual Journeys Across Punjab</h2>
            <p class="section-subtitle">Dedicated cabs for the Golden Temple, Anandpur Sahib, and more.</p>
          </div>
          <div style="text-align: center; margin-top: 40px;">
            <p>We provide respectful, knowledgeable drivers for your religious tours. Book multi-day packages to visit historic Gurudwaras and temples across the state with your family in absolute comfort.</p>
            <br>
            <a href="index.html#booking" class="btn-primary" style="display: inline-block; padding: 15px 30px; font-size: 1.2rem;">Book a Tour</a>
          </div>
        </div>
      </section>
    `
  },
  { 
    id: 'wedding-fleet', 
    title: 'Wedding Fleet', 
    content: `
      <section class="services-section" style="padding-top: 120px; min-height: 80vh;">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">Wedding Fleet</span>
            <h2 class="section-title">Luxury Cars for Your Special Day</h2>
            <p class="section-subtitle">Premium vehicles for the Bride, Groom, and Baraat.</p>
          </div>
          <div style="text-align: center; margin-top: 40px;">
            <p>Make a grand entrance with our luxury fleet. We offer beautifully maintained luxury sedans and SUVs, with optional floral decoration services. We also manage bulk transportation for your wedding guests.</p>
            <br>
            <a href="index.html#contact" class="btn-primary" style="display: inline-block; padding: 15px 30px; font-size: 1.2rem;">Contact for Wedding Booking</a>
          </div>
        </div>
      </section>
    `
  },
  { 
    id: 'hourly-rentals', 
    title: 'Hourly Rentals', 
    content: `
      <section class="services-section" style="padding-top: 120px; min-height: 80vh;">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">Hourly Rentals</span>
            <h2 class="section-title">Rent a Cab by the Hour</h2>
            <p class="section-subtitle">Flexible packages starting from 2 hours / 20 km.</p>
          </div>
          <div style="text-align: center; margin-top: 40px;">
            <p>Need a car for multiple stops? Going shopping or attending multiple business meetings? Rent a cab with a driver by the hour and travel without the hassle of booking multiple rides.</p>
            <br>
            <a href="index.html#booking" class="btn-primary" style="display: inline-block; padding: 15px 30px; font-size: 1.2rem;">Book Hourly Rental</a>
          </div>
        </div>
      </section>
    `
  },
  { 
    id: 'about-us', 
    title: 'About Us', 
    content: `
      <section class="services-section" style="padding-top: 120px; min-height: 80vh;">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">About Royal Punjab Ride</span>
            <h2 class="section-title">Punjab's Most Trusted Taxi Service</h2>
          </div>
          <div style="max-width: 800px; margin: 0 auto; line-height: 1.8; color: #555;">
            <p>Founded with a vision to revolutionize transportation in Punjab, <strong>Royal Punjab Ride</strong> is committed to providing safe, reliable, and premium taxi services at affordable rates.</p>
            <p>Our fleet consists of well-maintained hatchbacks, sedans, SUVs, and luxury vehicles, driven by professional, background-verified chauffeurs. We pride ourselves on punctuality, transparency, and customer satisfaction.</p>
            <p>Whether you need a quick ride across town or a comfortable long-distance journey, Royal Punjab Ride is your perfect travel partner.</p>
          </div>
        </div>
      </section>
    `
  },
  { 
    id: 'our-fleet', 
    title: 'Our Fleet', 
    content: `
      <section class="fleet-section" style="padding-top: 120px; min-height: 80vh;">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">Our Fleet</span>
            <h2 class="section-title">Explore Our Premium Vehicles</h2>
          </div>
          <div style="text-align: center; margin-top: 40px;">
            <p style="color: #444; margin-bottom: 20px; font-size: 1.1rem;">We offer a wide range of vehicles to suit your needs:</p>
            <ul style="color: #555; list-style: none; padding: 0; line-height: 2; font-size: 1.1rem;">
              <li><strong>5 Seater Economy:</strong> Swift Dzire, Toyota Etios (Ideal for 1-4 passengers)</li>
              <li><strong>7 Seater SUV:</strong> Toyota Innova Crysta, Maruti Ertiga (Ideal for family and group travel)</li>
              <li><strong>Luxury Segment:</strong> Mercedes, BMW, Audi (For special events and executive travel)</li>
            </ul>
            <br>
            <a href="index.html#fleet" class="btn-primary" style="display: inline-block; padding: 15px 30px; font-size: 1.2rem;">View Pricing</a>
          </div>
        </div>
      </section>
    `
  },
  { 
    id: 'driver-registration', 
    title: 'Driver Registration', 
    content: `
      <section class="services-section" style="padding-top: 120px; min-height: 80vh;">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">Join the Team</span>
            <h2 class="section-title">Attach Your Taxi with Royal Punjab Ride</h2>
          </div>
          <div style="max-width: 600px; margin: 40px auto; text-align: center;">
            <p>Are you a professional driver with a commercial vehicle? Join Royal Punjab Ride and increase your daily earnings with steady bookings.</p>
            <form onsubmit="event.preventDefault(); showToast('Application submitted successfully! We will contact you soon.');" style="display: flex; flex-direction: column; gap: 15px; margin-top: 30px;">
              <input type="text" placeholder="Full Name" required style="padding: 12px; border-radius: 5px; border: 1px solid #ccc;">
              <input type="tel" placeholder="Phone Number" required style="padding: 12px; border-radius: 5px; border: 1px solid #ccc;">
              <input type="text" placeholder="Vehicle Model (e.g. Innova)" required style="padding: 12px; border-radius: 5px; border: 1px solid #ccc;">
              <button type="submit" class="btn-primary" style="padding: 15px;">Submit Application</button>
            </form>
          </div>
        </div>
      </section>
    `
  },
  { 
    id: 'corporate-tie-up', 
    title: 'Corporate Tie-up', 
    content: `
      <section class="services-section" style="padding-top: 120px; min-height: 80vh;">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">B2B Solutions</span>
            <h2 class="section-title">Corporate Taxi Services</h2>
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
            <a href="mailto:royalaps@yahoo.com" class="btn-primary" style="display: inline-block; padding: 15px 30px; font-size: 1.2rem;">Email Us for Tie-ups</a>
          </div>
        </div>
      </section>
    `
  },
  { 
    id: 'privacy-policy', 
    title: 'Privacy Policy', 
    content: `
      <section class="services-section" style="padding-top: 120px; min-height: 80vh;">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Privacy Policy</h2>
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
    `
  },
  { 
    id: 'terms-and-conditions', 
    title: 'Terms & Conditions', 
    content: `
      <section class="services-section" style="padding-top: 120px; min-height: 80vh;">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Terms and Conditions</h2>
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
    `
  },
  {
    id: 'blog',
    title: 'Blog & Articles - Why Choose Royal Punjab Ride',
    content: `
      <section class="services-section" style="padding-top: 120px; min-height: 80vh;">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">Our Blog</span>
            <h2 class="section-title">Why Choose Royal Punjab Ride Services?</h2>
            <p class="section-subtitle">Discover the benefits of booking your next ride with Punjab's leading taxi service.</p>
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
              <a href="index.html#booking" class="btn-primary" style="display: inline-block; padding: 15px 35px; font-size: 1.2rem; border-radius: 30px;">Book Your Ride Today</a>
            </div>
          </div>
        </div>
      </section>
    `
  }
];

// Generate pages
const sitemapUrls = [];
pages.forEach(page => {
  // Update the title tag in the header
  let customHeader = header.replace(
    '<title>Royal Punjab Ride – Premium Taxi & Cab Booking in Punjab</title>',
    '<title>' + page.title + ' | Royal Punjab Ride</title>'
  );
  
  // Update Meta Description
  customHeader = customHeader.replace(
    /content="Book premium taxis and cabs across Punjab instantly[^"]+"/g,
    'content="' + page.title + ' services by Royal Punjab Ride. Safe, reliable, and premium taxi booking across Amritsar, Chandigarh, and Punjab."'
  );
  
  // Make sure nav links don't break
  customHeader = customHeader.replace(/href="#/g, 'href="index.html#');
  let customFooter = footer.replace(/href="#/g, 'href="index.html#');
  
  const fullHtml = customHeader + page.content + customFooter;
  
  fs.writeFileSync(path.join(__dirname, page.id + '.html'), fullHtml);
  console.log('Created: ' + page.id + '.html');
  
  sitemapUrls.push('https://punjabride.com/' + page.id + '.html');
});

// Generate sitemap.xml
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://punjabride.com/index.html</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
${sitemapUrls.map(url => `  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemapXml);
console.log('Created: sitemap.xml');

// Generate robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://punjabride.com/sitemap.xml
`;
fs.writeFileSync(path.join(__dirname, 'robots.txt'), robotsTxt);
console.log('Created: robots.txt');

console.log('All pages generated successfully!');
