import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [btnHover, setBtnHover] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    
    handleResize(); // Initial check
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const tags = [
    { text: 'GETHYPED', color: '#ff5a2c', rot: -12, x: -280, y: 40 },
    { text: 'GETHYPED', color: '#3182ff', rot: 10, x: 120, y: -100 },
    { text: 'GETHYPED', color: '#f0abfc', rot: 8, x: 100, y: 180 },
  ];

  return (
    <footer 
      onMouseEnter={() => setIsHovering(true)} 
      onMouseLeave={() => setIsHovering(false)}
      style={{
        backgroundColor: '#faf4ec',
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        fontFamily: '"Inter", sans-serif',
      }}
    >
      {/* ১. টপ হেডলাইন ও বাটন সেকশন */}
      <div style={{ padding: isMobile ? '60px 20px' : '100px 20px', textAlign: 'center', zIndex: 10 }}>
        <h1 style={{ 
          fontSize: 'clamp(40px, 10vw, 110px)', 
          fontWeight: '900', 
          letterSpacing: isMobile ? '-2px' : '-4px', 
          marginBottom: '40px',
          lineHeight: 1
        }}>
          Let's Get Hyped!
        </h1>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            onMouseEnter={()=>setBtnHover('m')} onMouseLeave={()=>setBtnHover(null)}
            style={{ padding: '8px 8px 8px 25px', borderRadius: '40px', border: '1px solid #000', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: btnHover === 'm' ? '#000' : '#fff', color: btnHover === 'm' ? '#fff' : '#000', transition: '0.3s' }}>
            Mail ons direct <div style={{ width: '35px', height: '35px', borderRadius: '50%', backgroundColor: btnHover === 'm' ? '#fff' : '#000', color: btnHover === 'm' ? '#000' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✉</div>
          </button>
          <button 
            onMouseEnter={()=>setBtnHover('r')} onMouseLeave={()=>setBtnHover(null)}
            style={{ padding: '8px 8px 8px 25px', borderRadius: '40px', border: 'none', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: btnHover === 'r' ? '#000' : '#ff5a2c', color: '#fff', transition: '0.3s' }}>
            Get Results <div style={{ width: '35px', height: '35px', borderRadius: '50%', backgroundColor: btnHover === 'r' ? '#fff' : '#ff5a2c', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🔥</div>
          </button>
        </div>
      </div>

      {/* ২. নিচের সেকশন */}
      <div style={{ position: 'relative', marginTop: 'auto', width: '100%' }}>
        
        {/* পিঙ্ক সার্কেল */}
        <div style={{ 
          position: 'absolute', 
          top: isMobile ? '-50px' : '-70px', 
          right: isMobile ? '5%' : '10%', 
          width: isMobile ? '100px' : '140px', 
          height: isMobile ? '100px' : '140px', 
          backgroundColor: '#f0abfc', 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)', 
          zIndex: 30 
        }}>
          <svg viewBox="0 0 100 100" style={{ width: '90%', height: '90%' }}>
            <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
            <text fontSize="8" fontWeight="bold">
              <textPath href="#circlePath">GET HYPED • GET RESULTS • GET NOTICED • </textPath>
            </text>
            <text x="50" y="58" textAnchor="middle" fontSize="22" fontWeight="900">GH</text>
          </svg>
        </div>

        {/* তেরছা গ্রে ব্যাকগ্রাউন্ড */}
        <div style={{ 
          backgroundColor: '#ebe9e3', 
          padding: isMobile ? '80px 20px 40px' : '120px 5% 50px', 
          clipPath: isMobile ? 'polygon(0 15%, 100% 0, 100% 100%, 0% 100%)' : 'polygon(-50% 100%, 100% 0%, 100% 100%, 0% 100%)',
          zIndex: 1,
          marginLeft: isMobile ? '10px' : '30px', 
          marginRight: isMobile ? '10px' : '30px',
        }}>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between', 
            alignItems: isMobile ? 'flex-start' : 'flex-end', 
            gap: isMobile ? '30px' : '40px' 
          }}>
            {/* লোগো */}
            <div style={{ 
              flex: '1 1 auto', 
              transform: isMobile ? 'rotate(-2deg)' : 'rotate(-4deg) translateY(20px)',
              marginBottom: isMobile ? '20px' : '0'
            }}>
              <h2 style={{ fontFamily: 'Impact', fontSize: 'clamp(60px, 12vw, 130px)', margin: 0, lineHeight: 0.8 }}>
                <span style={{ color: '#000', fontWeight: 'bold' }}>GET</span>
                <span style={{ color: '#fff', WebkitTextStroke: isMobile ? '1px #000' : '2px #000' }}>HYPED</span>
              </h2>
            </div>

            {/* মাঝখানের লিংক ও সোশ্যাল */}
            <div style={{ 
              flex: '1 1 auto', 
              textAlign: isMobile ? 'left' : 'center',
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: isMobile ? 'flex-start' : 'center', 
              minWidth: isMobile ? '100%' : '250px' 
            }}>
              <div style={{ 
                display: 'flex', 
                gap: '8px', 
                justifyContent: isMobile ? 'flex-start' : 'center', 
                marginBottom: '30px', 
                flexWrap: 'wrap' 
              }}>
                {['Expertises', 'Work', 'About', 'Contact'].map(item => (
                  <button key={item} style={{ backgroundColor: '#fff', padding: '8px 18px', borderRadius: '20px', fontWeight: '800', fontSize: '13px', border: 'none', cursor: 'pointer' }}>{item}</button>
                ))}
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'flex-start' : 'center', gap: '15px', marginBottom: '20px' }}>
                <span style={{ fontWeight: '900', fontSize: '14px', textTransform: 'uppercase' }}>Follow us</span>
                <div style={{ display: 'flex', gap: '10px' }}>
                    {['in', 'tk', 'ig', 'yt'].map(s => (
                        <div key={s} style={{ width: '35px', height: '35px', borderRadius: '50%', border: '1.5px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}>{s}</div>
                    ))}
                </div>
              </div>
              <div style={{ fontSize: '11px', opacity: 0.6 }}>© 2025 Get Hyped | Design by Dylan</div>
            </div>

            {/* ডান পাশের কন্টাক্ট */}
            <div style={{ 
              flex: '1 1 auto', 
              textAlign: 'left', 
              minWidth: isMobile ? '100%' : '220px', 
              display: isMobile ? 'grid' : 'block',
              gridTemplateColumns: isMobile ? '1fr 1fr' : 'none',
              gap: '20px'
            }}>
              <div style={{ marginBottom: isMobile ? '0' : '20px' }}>
                <p style={{ fontWeight: '900', fontSize: '18px', margin: '0 0 5px 0' }}>Contact</p>
                <p style={{ margin: 0, fontSize: '14px', fontWeight: '500' }}>info@gethyped.nl</p>
                <p style={{ margin: 0, fontSize: '14px', fontWeight: '500' }}>+31 6 1533 7496</p>
              </div>
              <div>
                <p style={{ fontWeight: '900', fontSize: '18px', margin: '0 0 5px 0' }}>Adres</p>
                <p style={{ margin: 0, fontSize: '14px', fontWeight: '500' }}>Beltrumsestraat 6,<br/>7141 AL Groenlo</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements (ডেস্কটপে মাউস হোভার ইফেক্ট) */}
      {!isMobile && isHovering && tags.map((tag, i) => (
        <motion.div key={i} animate={{ x: mousePos.x + tag.x, y: mousePos.y + tag.y }} transition={{ type: 'spring', damping: 25 }} 
          style={{ position: 'fixed', backgroundColor: tag.color, color: '#fff', padding: '8px 22px', borderRadius: '15px', fontFamily: 'Impact', fontSize: '1.6rem', border: '4px solid #000', transform: `rotate(${tag.rot}deg)`, pointerEvents: 'none', zIndex: 100 }}>
          {tag.text}
        </motion.div>
      ))}
    </footer>
  );
};

export default Footer;