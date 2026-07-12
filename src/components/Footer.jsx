import Link from 'next/link';

export default function Footer() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="footer-logo">
              <span className="logo-text">Royal Punjab <span className="logo-accent">Ride</span></span>
            </div>
            <p className="footer-tagline">ਪੰਜਾਬ ਦੀ ਸਭ ਤੋਂ ਭਰੋਸੇਮੰਦ ਟੈਕਸੀ ਸੇਵਾ<br />Punjab's most trusted taxi service.</p>
            <div className="contact-items">
              <div className="contact-item">
                <div>
                  <strong>24/7 Helpline</strong>
                  <a href="tel:+919815316271">+91 98153 16271</a>
                </div>
              </div>
              <div className="contact-item">
                <div>
                  <strong>WhatsApp</strong>
                  <a href="https://wa.me/919815316271">+91 98153 16271</a>
                </div>
              </div>
              <div className="contact-item">
                <div>
                  <strong>Email</strong>
                  <a href="mailto:royalaps@yahoo.com">royalaps@yahoo.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div>
                  <strong>Office</strong>
                  <span>Hall Bazaar, Amritsar, Punjab – 143001</span>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-quick-links">
            <h4>Services</h4>
            <ul>
              <li><Link href="/city-rides">City Rides</Link></li>
              <li><Link href="/intercity-travel">Intercity Travel</Link></li>
              <li><Link href="/airport-transfers">Airport Transfers</Link></li>
              <li><Link href="/pilgrimage-tours">Pilgrimage Tours</Link></li>
              <li><Link href="/wedding-fleet">Wedding Fleet</Link></li>
              <li><Link href="/hourly-rentals">Hourly Rentals</Link></li>
            </ul>
          </div>
          <div className="contact-quick-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/our-fleet">Our Fleet</Link></li>
              <li><Link href="/driver-registration">Driver Registration</Link></li>
              <li><Link href="/corporate-tie-up">Corporate Tie-up</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div className="contact-social">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://wa.me/919815316271" target="_blank" className="social-btn wa" style={{ color: '#25D366' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12.01 2.012c-5.506 0-9.974 4.465-9.974 9.97 0 1.761.458 3.483 1.332 5.002L2.012 22l5.166-1.353c1.457.805 3.109 1.229 4.832 1.229 5.507 0 9.975-4.464 9.975-9.97 0-5.505-4.468-9.97-9.975-9.97" fill="#25D366"/>
                  <path d="M16.48 13.52c-.22-.11-1.312-.647-1.516-.721-.203-.075-.353-.11-.5.11-.15.22-.572.72-.7.868-.13.148-.26.166-.48.055-.22-.11-1.026-.379-1.954-1.207-.723-.644-1.21-1.442-1.352-1.662-.14-.22-.015-.339.096-.449.1-.1.22-.258.33-.388.11-.13.146-.22.22-.367.074-.148.037-.277-.018-.387-.055-.11-.5-1.207-.685-1.654-.18-.435-.363-.377-.5-.383-.13-.006-.279-.006-.427-.006-.148 0-.39.055-.595.276-.204.22-.782.766-.782 1.868s.8 2.164.912 2.31c.11.148 1.576 2.408 3.818 3.376.533.232.95.37 1.275.474.536.171 1.023.146 1.408.089.432-.065 1.312-.536 1.497-1.054.185-.518.185-.96.13-1.054-.055-.094-.204-.15-.424-.26z" fill="#FFF"/>
                </svg>
                WhatsApp
              </a>
              <a href="https://instagram.com/punjabride" target="_blank" className="social-btn ig" style={{ color: '#E1306C' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="ig" x1="0" x2="1" y1="1" y2="0">
                      <stop offset="0%" stopColor="#f09433"/>
                      <stop offset="25%" stopColor="#e6683c"/>
                      <stop offset="50%" stopColor="#dc2743"/>
                      <stop offset="75%" stopColor="#cc2366"/>
                      <stop offset="100%" stopColor="#bc1888"/>
                    </linearGradient>
                  </defs>
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.22.41.56.22.96.48 1.36.88.4.4.66.8.88 1.36.16.42.36 1.05.41 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.22-.22.56-.48.96-.88 1.36-.4.4-.8.66-1.36.88-.42.16-1.05.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.22-.41-.56-.22-.96-.48-1.36-.88-.4-.4-.66-.8-.88-1.36-.16-.42-.36-1.05-.41-2.22C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.22.22-.56.48-.96.88-1.36.4-.4.8-.66 1.36-.88.42-.16 1.05-.36 2.22-.41C8.42 2.17 8.8 2.16 12 2.16zm0-2.16C8.74 0 8.33.01 7.05.07 5.77.13 4.9.33 4.14.63c-.8.3-1.47.73-2.14 1.4-.67.67-1.1 1.34-1.4 2.14-.3.76-.5 1.63-.56 2.91C0 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.3.8.73 1.47 1.4 2.14.67.67 1.34 1.1 2.14 1.4.76.3 1.63.5 2.91.56C8.33 24 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56.8-.3 1.47-.73 2.14-1.4.67-.67 1.1-1.34 1.4-2.14.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91-.3-.8-.73-1.47-1.4-2.14-.67-.67-1.34-1.1-2.14-1.4-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm3.8-10.22a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" fill="url(#ig)"/>
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© 2025 Royal Punjab Ride. All rights reserved. | Serving Punjab with pride 🧡</p>
        </div>
      </div>
    </section>
  );
}
