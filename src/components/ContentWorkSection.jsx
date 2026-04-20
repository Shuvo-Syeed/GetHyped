import React, { useState } from 'react';

const ContentWorkSection = () => {
  const [hoveredId, setHoveredId] = useState(null);

  // ১. এখানে প্রতিটি কার্ডের জন্য আলাদা videoSrc যোগ করুন
  const workCards = [
    {
      id: 1,
      title: "Van nul naar vol, binnen 3 weken",
      client: "Bullit",
      borderColor: "#fa5423", 
      initialRot: "-2.5deg",
      videoSrc: "/a.mp4", // public ফোল্ডার থেকে
    },
    {
      id: 2,
      title: "Zacht in smaak, sterk in beeld",
      client: "Roasta",
      borderColor: "#3182ff", 
      initialRot: "2.5deg",
      videoSrc: "/b.mp4", // ২য় ভিডিও
    },
    {
      id: 3,
      title: "Content die écht smaakt (en raakt)",
      client: "Loco",
      borderColor: "#4ade80", 
      initialRot: "-1.5deg",
      videoSrc: "/c.mp4", // ৩য় ভিডিও
    }
  ];

  const styles = {
    // ... আপনার আগের স্টাইলগুলো এখানে থাকবে
    section: { backgroundColor: '#f9f7f2', padding: '120px 6%', fontFamily: 'sans-serif', position: 'relative' },
    title: { fontSize: 'clamp(4rem, 12vw, 9.5rem)', fontWeight: '800', lineHeight: '0.85', letterSpacing: '-5px', margin: '0 0 40px 0', color: '#000' },
    flexHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '80px', flexWrap: 'wrap', gap: '40px' },
    desc: { maxWidth: '480px', fontSize: '1.5rem', lineHeight: '1.4', fontWeight: '600', color: '#1a1a1a', marginBottom: '35px' },
    btn: { background: 'transparent', border: '1.5px solid #000', padding: '10px 10px 10px 25px', borderRadius: '20px', fontSize: '1.1rem', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '15px', cursor: 'pointer', transition: '0.3s' },
    circle: { background: '#000', color: '#fff', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' },
    grid: { display: 'flex', justifyContent: 'center', gap: '35px', flexWrap: 'wrap', marginTop: '20px' },
    card: (color, rot, isHovered) => ({
      flex: '1 1 340px',
      maxWidth: '380px',
      height: '520px',
      border: `7px solid ${color}`,
      borderRadius: '45px',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#000',
      transform: isHovered ? 'rotate(0deg) scale(1.02)' : `rotate(${rot})`,
      transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      cursor: 'pointer',
    }),
    overlay: (color) => ({
      position: 'absolute', bottom: '12px', left: '12px', right: '12px', backgroundColor: color, padding: '22px', borderRadius: '30px', color: '#fff', transform: 'skewY(-4.5deg)', transformOrigin: 'bottom left',
    }),
    innerContent: { transform: 'skewY(4.5deg)', position: 'relative' },
    arrowBtn: { position: 'absolute', top: '-15px', right: '15px', backgroundColor: '#fff', color: '#000', width: '38px', height: '38px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }
  };

  return (
    <section style={styles.section}>
      <div style={styles.flexHeader}>
        <div style={{ flex: '1 1 600px' }}>
          <h1 style={styles.title}>Content <br /> dat scoort.</h1>
          <p style={styles.desc}>
            Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep. 
          </p>
          <button style={styles.btn}>
            Bekijk al ons werk <span style={styles.circle}>→</span>
          </button>
        </div>
      </div>

      <div style={styles.grid}>
        {workCards.map((card) => (
          <div 
            key={card.id}
            style={styles.card(card.borderColor, card.initialRot, hoveredId === card.id)}
            onMouseEnter={() => setHoveredId(card.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* ২. ভিডিও ট্যাগ এখানে ডাইনামিক src ব্যবহার করবে */}
            <video 
              src={card.videoSrc} 
              autoPlay muted loop playsInline 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />

            <div style={styles.overlay(card.borderColor)}>
              <span style={styles.arrowBtn}>↗</span>
              <div style={styles.innerContent}>
                <h3 style={{ margin: 0, fontSize: '1.4rem', fontWeight: '800', lineHeight: '1.2' }}>
                  {card.title}
                </h3>
                <div style={{ marginTop: '12px', fontSize: '0.85rem', fontWeight: '700', backgroundColor: 'rgba(255,255,255,0.2)', display: 'inline-block', padding: '4px 12px', borderRadius: '8px' }}>
                  {card.client}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentWorkSection;