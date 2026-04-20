
import React from 'react';


const AboutSection = () => {
  const colors = {
    background: '#faf4ec', // Theme cream background
    text: '#1a1a1a', 
    pink: '#f0abfc', // "Raakt" color
    border: '#000',
  };

  const styles = {
    section: {
      backgroundColor: colors.background,
      fontFamily: 'Helvetica, Arial, sans-serif',
      padding: '100px 6%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
    },
    titleWrapper: {
      maxWidth: '1300px',
      width: '100%',
      marginBottom: '60px',
    },
    title: {
      fontSize: 'clamp(2.5rem, 8vw, 6.5rem)', // Huge tight typography
      fontWeight: '900',
      lineHeight: '0.9',
      letterSpacing: '-3px',
      margin: 0,
      color: colors.text,
    },
    highlight: {
      color: colors.pink,
    },
    contentGrid: {
      display: 'flex',
      gap: '50px',
      maxWidth: '1300px',
      width: '100%',
      marginTop: '40px',
      flexWrap: 'wrap', // Mobile responsive
    },
    imageContainer: {
      flex: '1 1 400px',
      maxWidth: '300px',
      height: '400px',
      backgroundColor: '#ddd', // Placeholder color
      borderRadius: '40px',
      overflow: 'hidden',
      border: '6px solid #fff', // White border matching Gethyped
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      transform: 'rotate(-3deg)', // Signature hanging tilt
      transition: '0.4s ease',
      cursor: 'pointer',
    },
    // --- ERROR FIXED HERE (No Space in Key) ---
    textSide: {
      flex: '1 1 500px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '30px',
    },
    description: {
      fontSize: '1.5rem',
      lineHeight: '1.4',
      fontWeight: '600',
      color: '#333',
      maxWidth: '550px',
    },
    button: {
      alignSelf: 'flex-start',
      backgroundColor: 'transparent',
      border: '1.5px solid #000',
      padding: '10px 10px 10px 25px',
      borderRadius: '30px',
      fontSize: '1.1rem',
      fontWeight: '700',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '20px',
      cursor: 'pointer',
      transition: '0.3s',
    },
    circle: {
      backgroundColor: '#000',
      color: '#fff',
      width: '35px',
      height: '35px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  };

  return (
    <section style={styles.section}>
      {/* Upper Big Title */}
      <div style={styles.titleWrapper}>
        <h1 style={styles.title}>
        Wij maken content die.<br />
          Die blijft hangen. Die jouw 
          doelgroepRaakten jouw merk 
          in beweging brengt.
        </h1>
      </div>

      {/* Main Content Area */}
      <div style={styles.contentGrid}>
        {/* Left Side: Image Placeholder */}
        <div 
          style={styles.imageContainer}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(-3deg) scale(1)'}
        >
          {/* Tumi ekhane tumar image boshabe */}
          <div style={{ width: '100%', height: '100%', background: '#ccc' }}><img src="/img1.webp" alt="About Us" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> </div>
        </div>

        {/* Right Side: Text & Button */}
        <div style={styles.textSide}>
          <p style={styles.description}>
            We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar. 
            Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie. 
            Nooit meer content zonder resultaat.
          </p>
          
          <button 
            style={styles.button}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#000';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#000';
            }}
          >
            Leer ons kennen
            <span style={styles.circle}>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;