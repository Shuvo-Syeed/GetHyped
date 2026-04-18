import React, { useState } from 'react';

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const styles = {
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '80px',
      backgroundColor: '#f9f7f2', // Cream background
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 5%',
      boxSizing: 'border-box',
      zIndex: 2000,
    },
    logo: {
      fontWeight: '900',
      fontSize: '1.8rem',
      textTransform: 'uppercase',
      letterSpacing: '-1px',
      fontFamily: 'Impact, sans-serif',
      display: 'flex',
      alignItems: 'center',
      gap: '2px'
    },
    // Middle Pill Navigation
    navPill: {
      display: 'flex',
      backgroundColor: '#fff',
      padding: '6px',
      borderRadius: '50px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
      // Mobile-e hide korar jonno window width check kora jay, 
      // ekhane ami responsive flex property use korchi
    },
    navLink: (isHovered) => ({
      padding: '8px 20px',
      borderRadius: '20px',
      textDecoration: 'none',
      color: '#000',
      fontWeight: '700',
      fontSize: '0.95rem',
      backgroundColor: isHovered ? '#f9f7f2' : 'transparent',
      transition: '0.3s'
    }),
    // Get Results Button
    resultsBtn: {
      backgroundColor: '#f0abfc', // Pink color
      padding: '10px 20px',
      borderRadius: '50px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      border: 'none',
      cursor: 'pointer',
      fontWeight: '800',
      color: '#000'
    },
    fireIcon: {
      backgroundColor: '#fff',
      borderRadius: '50%',
      width: '24px',
      height: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  };

  return (
    <header style={styles.header}>
      {/* Logo Section */}
      <div style={styles.logo}>
        GETHYPED
      </div>

      {/* Desktop Navigation (Hidden on small mobile screens via CSS logic) */}
      <div className="nav-links-desktop" style={styles.navPill}>
        {['Expertises', 'Work', 'About', 'Contact'].map((link, i) => (
          <a 
            key={i} 
            href={`#${link.toLowerCase()}`} 
            style={styles.navLink(hoveredLink === i)}
            onMouseEnter={() => setHoveredLink(i)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {link}
          </a>
        ))}
      </div>

      {/* Action Button */}
      <div style={styles.resultsBtn}>
        Get Results
        <span style={styles.fireIcon}>🔥</span>
      </div>

      {/* Basic Mobile Responsive Styling */}
      <style>{`
        @media (max-width: 850px) {
          .nav-links-desktop {
            display: none !important; /* Mobile-e middle menu hide hobe */
          }
          header {
            padding: 0 20px !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;