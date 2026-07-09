'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar cinematic-nav" id="navbar">
      <div className="nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="nav-left">
          <Link href="/" className="nav-logo-center" style={{ textAlign: 'left' }}>
            <span className="logo-text">ROYAL PUNJAB RIDE</span>
          </Link>
        </div>
        
        {/* Desktop Links */}
        <ul className="nav-links-desktop desktop-only">
          <li><Link href="/" className="nav-link">Home</Link></li>
          <li><Link href="/#booking" className="nav-link">Book Now</Link></li>
          <li><Link href="/#services" className="nav-link">Services</Link></li>
          <li><Link href="/our-fleet" className="nav-link">Our Fleet</Link></li>
          <li><Link href="/about-us" className="nav-link">About</Link></li>
        </ul>

        <div className="nav-right">
          <a href="tel:+911800785622" className="nav-phone-minimal desktop-only" style={{ marginRight: '20px' }}>1800-PUNJAB</a>
          <button className="menu-btn-minimal mobile-only" id="hamburger" onClick={toggleMenu}>
            <span className={`menu-lines ${menuOpen ? 'active' : ''}`}>
              <i></i><i></i><i></i>
            </span>
          </button>
        </div>
      </div>

      {/* Hidden mobile menu links */}
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`} id="navLinks">
        <li><Link href="/" className="nav-link active" onClick={toggleMenu}>Home</Link></li>
        <li><Link href="/#booking" className="nav-link" onClick={toggleMenu}>Book Now</Link></li>
        <li><Link href="/#services" className="nav-link" onClick={toggleMenu}>Services</Link></li>
        <li><Link href="/our-fleet" className="nav-link" onClick={toggleMenu}>Our Fleet</Link></li>
        <li><Link href="/about-us" className="nav-link" onClick={toggleMenu}>About</Link></li>
        <li><Link href="/#contact" className="nav-link" onClick={toggleMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
}
