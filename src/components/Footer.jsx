import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [btnHover, setBtnHover] = useState(null);

  useEffect(() => {
    const handleMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const tags = [
    { text: 'GETHYPED', color: '#ff5a2c', rot: -12, x: -280, y: 40 },
    { text: 'GETHYPED', color: '#3182ff', rot: 10, x: 120, y: -100 },
    { text: 'GETHYPED', color: '#f0abfc', rot: 8, x: 100, y: 180 },
  ];

  const styles = {
    footer: {
      backgroundColor: '#faf4ec', // Cream base
      minHeight: '100vh',
      width: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      fontFamily: '"Inter", sans-serif',
    },
    // The curved gray section
    bottomShade: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: '480px',
      backgroundColor: '#ebe9e3', 
      clipPath: 'polygon(0 35%, 100% 0, 100% 100%, 0% 100%)',
      borderRadius: '150px 0 0 0', 
      zIndex: 1,
    },
    // Floating Tags with Outline
    floatTag: (color, rot) => ({
      position: 'fixed',
      backgroundColor: color,
      color: '#fff',
      padding: '10px 22px',
      borderRadius: '16px',
      fontFamily: 'Impact, sans-serif',
      fontSize: '1.8rem',
      border: '4px solid #000', 
      transform: `rotate(${rot}deg)`,
      pointerEvents: 'none',
      zIndex: 100,
    }),
    // Bottom Layout Grid
    bottomLayout: {
      position: 'absolute',
      bottom: '50px',
      width: '90%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      zIndex: 10,
    },
    socialIcon: {
      width: '35px',
      height: '35px',
      borderRadius: '50%',
      backgroundColor: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '10px',
      fontSize: '1rem',
      cursor: 'pointer',
    },
    linkBtn: {
      backgroundColor: '#fff',
      padding: '8px 18px',
      borderRadius: '20px',
      fontWeight: '700',
      fontSize: '0.9rem',
      border: 'none',
      marginRight: '10px',
      cursor: 'pointer',
    }
  };

  return (
    <footer style={styles.footer} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      
      <div style={styles.bottomShade} />

      {/* Floating Elements */}
      {isHovering && tags.map((tag, i) => (
        <motion.div key={i} animate={{ x: mousePos.x + tag.x, y: mousePos.y + tag.y }} transition={{ type: 'spring', damping: 25 }} style={styles.floatTag(tag.color, tag.rot)}>
          {tag.text}
        </motion.div>
      ))}

      {/* Main Title & Buttons */}
      <div style={{zIndex: 10, textAlign: 'center', transform: 'translateY(-50px)'}}>
        <h1 style={{fontSize: 'clamp(4rem, 12vw, 8.5rem)', fontWeight: '900', letterSpacing: '-5px', marginBottom: '40px'}}>Let's Get Hyped!</h1>
        <div style={{display: 'flex', gap: '12px', justifyContent: 'center'}}>
          <button onMouseEnter={()=>setBtnHover('m')} onMouseLeave={()=>setBtnHover(null)} style={{padding: '6px 6px 6px 24px', borderRadius: '40px', border: 'none', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: btnHover === 'm' ? '#000' : '#fff', color: btnHover === 'm' ? '#fff' : '#000', transition: '0.3s'}}>
            Mail ons direct <div style={{width: '35px', height: '35px', borderRadius: '50%', backgroundColor: btnHover === 'm' ? '#fff' : '#000', color: btnHover === 'm' ? '#000' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>✉</div>
          </button>
          <button onMouseEnter={()=>setBtnHover('r')} onMouseLeave={()=>setBtnHover(null)} style={{padding: '6px 6px 6px 24px', borderRadius: '40px', border: 'none', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: btnHover === 'r' ? '#000' : '#ff5a2c', color: '#fff', transition: '0.3s'}}>
            Get Results <div style={{width: '35px', height: '35px', borderRadius: '50%', backgroundColor: btnHover === 'r' ? '#fff' : '#ff5a2c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>🔥</div>
          </button>
        </div>
      </div>

      {/* Tilted Logo */}
      <div style={{position: 'absolute', bottom: '30px', left: '40px', fontFamily: 'Impact', fontSize: '6rem', color: '#fff', WebkitTextStroke: '3px #000', transform: 'rotate(-4deg)', zIndex: 10}}>GETHYPED</div>

      {/* Footer Bottom Content */}
      <div style={styles.bottomLayout}>
        <div style={{flex: 1}}></div> {/* Spacer */}

        <div style={{flex: 1, textAlign: 'center'}}>
          {/* Horizontal Buttons */}
          <div style={{marginBottom: '20px'}}>
            {['Expertises', 'Work', 'About', 'Contact'].map(item => (
              <button key={item} style={styles.linkBtn}>{item}</button>
            ))}
          </div>
          {/* Social Logos */}
          <div>
            <span style={{fontWeight: '700', marginRight: '15px'}}>Follow us</span>
            {['in', 't', 'ig', 'y'].map(s => <div key={s} style={styles.socialIcon}>{s}</div>)}
          </div>
          <div style={{marginTop: '20px', fontSize: '0.8rem', opacity: 0.6}}>© 2025 Get Hyped | Design by Dylan</div>
        </div>

        {/* Right Side Address */}
        <div style={{flex: 1, textAlign: 'left', fontSize: '0.9rem', fontWeight: '600', paddingLeft: '50px'}}>
          <p><strong>Contact</strong><br/>info@gethyped.nl<br/>+31 6 1533 7496</p>
          <p><strong>Adres</strong><br/>Beltrumsestraat 6, 7141 AL Groenlo</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;