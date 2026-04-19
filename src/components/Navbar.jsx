import React, { useState } from 'react';

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

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
  zIndex: 2000,
  borderBottom: 'none', // Line remove korar jonno
  boxShadow: 'none',    // Shade remove korar jonno
},
    logoWrapper: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
    },
    // LOGO: Mixed size and style
    logoText: {
      fontFamily: 'Impact, sans-serif',
      textTransform: 'uppercase',
      letterSpacing: '-1px',
      display: 'inline-block',
      transform: 'rotate(-8deg)', // Specific tilt
      cursor: 'pointer',
      lineHeight: '0.9',
    },
    getPart: {
      fontSize: '2.8rem', // "GET" ta choto thakbe
      color: '#000',
      marginRight: '1px',
    },
    hypedPart: {
      fontSize: '2.8rem', // "HYPED" ta boro
      color: '#fff',
      WebkitTextStroke: '1.8px #000', // Black outline
    },
    navPill: {
      display: 'flex',
      backgroundColor: '#fff', 
      padding: '6px 10px',
      borderRadius: '12px', // Rounding komano holo pic-er moto
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
      backgroundColor: '#f0abfc', // Exact Pink
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
    }
  };

  return (
    <header style={styles.header}>
      {/* Logo: GET (choto) ar HYPED (boro + baka) */}
      <div style={styles.logoWrapper}>
        <div style={styles.logoText}>
          <span style={styles.getPart}>GET</span>
          <span style={styles.hypedPart}>HYPED</span>
        </div>
      </div>

      {/* Navigation: Less rounded pill */}
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

      {/* Button: Exact pink styling */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <button style={styles.resultsBtn}>
          Get Results
          <div style={styles.fireIconCircle}>🔥</div>
        </button>
      </div>

      <style>{`
        @media (max-width: 950px) {
          .desktop-nav { display: none; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;