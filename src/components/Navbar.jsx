import React, { useState } from 'react';

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle state

  const styles = {
    header: {
      
      top: 0,
      left: 0,
      width: '100%',
      height: '100px',
      backgroundColor: '#faf4ec',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 5%',
      boxSizing: 'border-box',
      zIndex: 3000, // Z-index bariye dilam
      borderBottom: 'none',
      boxShadow: 'none',
    },
    logoWrapper: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
    },
    logoText: {
      fontFamily: 'Impact, sans-serif',
      textTransform: 'uppercase',
      letterSpacing: '-1px',
      display: 'inline-block',
      transform: 'rotate(-8deg)',
      cursor: 'pointer',
      lineHeight: '0.9',
    },
    getPart: {
      fontSize: '2.8rem',
      color: '#000',
      marginRight: '1px',
    },
    hypedPart: {
      fontSize: '2.8rem',
      color: '#fff',
      WebkitTextStroke: '1.8px #000',
    },
    navPill: {
      display: 'flex',
      backgroundColor: '#fff', 
      padding: '6px 10px',
      borderRadius: '12px',
      gap: '4px',
    },
    navLink: (isHovered) => ({
      padding: '10px 22px',
      borderRadius: '10px',
      textDecoration: 'none',
      color: isHovered ? '#fff' : '#1a1a1a', 
      fontWeight: '700',
      fontSize: '0.95rem',
      backgroundColor: isHovered ? '#000' : 'transparent',
      transition: '0.2s ease-in-out',
    }),
    resultsBtn: {
      backgroundColor: '#f0abfc',
      padding: '8px 8px 8px 24px',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      border: 'none',
      cursor: 'pointer',
      fontWeight: '800',
      fontSize: '1rem',
      color: '#000',
    },
    fireIconCircle: {
      backgroundColor: '#fff',
      borderRadius: '50%',
      width: '38px',
      height: '38px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.1rem',
    },
    // HAMBURGER STYLING
    hamburgerBtn: {
      display: 'none', // Default hide on desktop
      backgroundColor: '#f0abfc', // Exact Pink
      border: 'none',
      width: '50px',
      height: '50px',
      borderRadius: '12px',
      cursor: 'pointer',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '5px',
    },
    line: {
      width: '25px',
      height: '3px',
      backgroundColor: '#000',
      borderRadius: '2px',
    },
    // MOBILE MENU OVERLAY
    mobileOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      backgroundColor: '#f0abfc',
      display: isMenuOpen ? 'flex' : 'none',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 4000,
      gap: '20px',
    }
  };

  return (
    <>
      <header style={styles.header}>
        <div style={styles.logoWrapper}>
          <div style={styles.logoText}>
            <span style={styles.getPart}>GET</span>
            <span style={styles.hypedPart}>HYPED</span>
          </div>
        </div>

        <nav className="desktop-nav">
          <div style={styles.navPill}>
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
        </nav>

        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          {/* Main Desktop Button */}
          <button className="results-desktop-btn" style={styles.resultsBtn}>
            Get Results
            <div style={styles.fireIconCircle}>🔥</div>
          </button>

          {/* Mobile Hamburger Button */}
          <button 
            className="hb-button" 
            style={styles.hamburgerBtn} 
            onClick={() => setIsMenuOpen(true)}
          >
            <div style={styles.line}></div>
            <div style={styles.line}></div>
          </button>
        </div>
      </header>

      {/* Full Screen Menu on Click */}
      <div style={styles.mobileOverlay}>
        <button 
          onClick={() => setIsMenuOpen(false)}
          style={{ position: 'absolute', top: '30px', right: '5%', fontSize: '2.5rem', background: 'none', border: 'none', fontWeight: 'bold' }}
        >
          ✕
        </button>
        {['Expertises', 'Work', 'About', 'Contact'].map((link) => (
          <a 
            key={link} 
            href={`#${link.toLowerCase()}`} 
            style={{ 
              fontSize: '2.5rem', fontWeight: '900', color: '#000', textDecoration: 'none', 
              backgroundColor: '#fff', padding: '10px 40px', borderRadius: '15px', width: '250px', textAlign: 'center' 
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            {link}
          </a>
        ))}
      </div>

      <style>{`
        @media (max-width: 950px) {
          .desktop-nav { display: none !important; }
          .results-desktop-btn { display: none !important; } /* Get Results vanish hobe */
          .hb-button { display: flex !important; } /* Hamburger ashbe */
        }
      `}</style>
    </>
  );
};

export default Navbar;