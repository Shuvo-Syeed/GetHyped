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

  return (
    <footer 
      onMouseEnter={() => setIsHovering(true)} 
      onMouseLeave={() => setIsHovering(false)}
      style={{
        backgroundColor: '#faf4ec', // ক্রিম ব্যাকগ্রাউন্ড
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
      <div style={{ padding: '100px 20px', textAlign: 'center', zIndex: 10 }}>
        <h1 style={{ fontSize: 'clamp(40px, 10vw, 110px)', fontWeight: '900', letterSpacing: '-4px', marginBottom: '40px' }}>
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

      {/* ২. নিচের সেকশন (যেকানে কালার স্প্লিট এবং লোগো আছে) */}
      <div style={{ position: 'relative', marginTop: 'auto', width: '100%' }}>
        
        {/* পিঙ্ক সার্কেল (একদম ফুল রাউন্ড এবং কাটা পড়বে না) */}
        <div style={{ 
          position: 'absolute', 
          top: '-70px', // পজিশন ঠিক করা হয়েছে যাতে পুরোটা দেখা যায়
          right: '10%', 
          width: 'clamp(110px, 15vw, 140px)', 
          height: 'clamp(110px, 15vw, 140px)', 
          backgroundColor: '#f0abfc', 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)', 
          zIndex: 30 // সবচেয়ে উপরে রাখার জন্য
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
          padding: '120px 5% 50px ', 
          clipPath: 'polygon(-50% 100%, 100% 0%, 100% 100%, 0% 100%)',
          zIndex: 1,
          marginLeft: '30px', 
          marginRight: '30px',
      
           // একটু বাম দিকে সরিয়ে দেওয়া হয়েছে যাতে পুরোটা দেখা যায়
        }}>
          
          <div style={{ 
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '40px' 
          }}>
            {/* লোগো (GET - ব্ল্যাক, HYPED - আউটলাইন) */}
            <div style={{ flex: '1 1 300px', transform: 'rotate(-4deg) translateY(20px)' }}>
              <h2 style={{ fontFamily: 'Impact', fontSize: 'clamp(60px, 10vw, 130px)', margin: 0, lineHeight: 0.8 }}>
                <span style={{ color: '#000', fontWeight: 'bold' }}>GET</span>
                <span style={{ color: '#fff', WebkitTextStroke: '2px #000' }}>HYPED</span>
              </h2>
            </div>

            {/* মাঝখানের লিংক ও সোশ্যাল */}
            <div style={{ flex: '1 1 300px', textAlign: 'center',justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '250px' }}>
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '30px', flexWrap: 'wrap' }}>
                {['Expertises', 'Work', 'About', 'Contact'].map(item => (
                  <button key={item} style={{ backgroundColor: '#fff', padding: '8px 18px', borderRadius: '20px', fontWeight: '800', fontSize: '13px', border: 'none', cursor: 'pointer' }}>{item}</button>
                ))}
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginBottom: '20px' }}>
                <span style={{ fontWeight: '900', fontSize: '14px', textTransform: 'uppercase' }}>Follow us</span>
                {['in', 'tk', 'ig', 'yt'].map(s => (
                  <div key={s} style={{ width: '35px', height: '35px', borderRadius: '50%', border: '1.5px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer', backgroundColor: 'transparent' }}>{s}</div>
                ))}
              </div>
              <div style={{ fontSize: '11px', opacity: 0.6 }}>© 2025 Get Hyped | Design by Dylan | Privacyvoorwaarden</div>
            </div>

            {/* ডান পাশের কন্টাক্ট */}
            <div style={{ flex: '1 1 200px', textAlign: 'left', minWidth: '220px', paddingBottom: '10px' }}>
              <div style={{ marginBottom: '20px' }}>
                <p style={{ fontWeight: '900', fontSize: '18px', margin: '0 0 5px 0' }}>Contact</p>
                <p style={{ margin: 0, fontSize: '15px', fontWeight: '500' }}>info@gethyped.nl</p>
                <p style={{ margin: 0, fontSize: '15px', fontWeight: '500' }}>+31 6 1533 7496</p>
              </div>
              <div>
                <p style={{ fontWeight: '900', fontSize: '18px', margin: '0 0 5px 0' }}>Adres</p>
                <p style={{ margin: 0, fontSize: '15px', fontWeight: '500' }}>Beltrumsestraat 6,<br/>7141 AL Groenlo</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements (ডেস্কটপ মাউস হোভার ইফেক্ট) */}
      {isHovering && window.innerWidth > 768 && tags.map((tag, i) => (
        <motion.div key={i} animate={{ x: mousePos.x + tag.x, y: mousePos.y + tag.y }} transition={{ type: 'spring', damping: 25 }} 
          style={{ position: 'fixed', backgroundColor: tag.color, color: '#fff', padding: '8px 22px', borderRadius: '15px', fontFamily: 'Impact', fontSize: '1.6rem', border: '4px solid #000', transform: `rotate(${tag.rot}deg)`, pointerEvents: 'none', zIndex: 100 }}>
          {tag.text}
        </motion.div>
      ))}

    </footer>
  );
};

export default Footer;