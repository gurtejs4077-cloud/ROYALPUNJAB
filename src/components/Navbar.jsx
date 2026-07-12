'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#booking', label: 'Book Now' },
    { href: '/#services', label: 'Services' },
    { href: '/our-fleet', label: 'Our Fleet' },
    { href: '/about-us', label: 'About' },
    { href: '/#contact', label: 'Contact' },
  ];

  const isActive = (href) => {
    const path = href.split('#')[0] || '/';
    return pathname === path;
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
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={`nav-link${isActive(href) ? ' active' : ''}`}>{label}</Link>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <a href="tel:+919815316271" className="nav-phone-minimal desktop-only" style={{ marginRight: '20px' }}>+91 98153 16271</a>
          <button className="menu-btn-minimal mobile-only" id="hamburger" onClick={toggleMenu}>
            <span className={`menu-lines ${menuOpen ? 'active' : ''}`}>
              <i></i><i></i><i></i>
            </span>
          </button>
        </div>
      </div>

      {/* Hidden mobile menu links */}
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`} id="navLinks">
        <button
          onClick={toggleMenu}
          style={{
            position: 'absolute', top: '24px', right: '24px',
            background: 'none', border: 'none', fontSize: '2rem',
            cursor: 'pointer', color: '#111', lineHeight: 1, zIndex: 1000
          }}
          aria-label="Close menu"
        >&times;</button>
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className={`nav-link${isActive(href) ? ' active' : ''}`} onClick={toggleMenu}>{label}</Link>
          </li>
        ))}
        <li style={{ marginTop: '20px' }}>
          <a href="tel:+919815316271" style={{ fontSize: '1.2rem', fontWeight: 700, color: '#111', letterSpacing: '0.05em' }}>📞 +91 98153 16271</a>
        </li>
      </ul>
    </nav>
  );
}
