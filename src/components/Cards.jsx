import React from 'react';

const Cards = () => {
  const cards = [
    {
      id: 1,
      type: 'metric',
      title: '10M+',
      desc: 'Organische views',
      sub: 'Groei door slimme content',
      bg: '#3182ff',
      rotate: '-6deg',
    },
    {
      id: 2,
      type: 'video',
      rotate: '2deg',
      videosrc: '/m.mp4', // নিশ্চিত করুন m.mp4 আপনার public ফোল্ডারে আছে
    },
    {
      id: 3,
      type: 'metric',
      title: '30+',
      desc: 'Merken geholpen',
      sub: 'Van start-up tot multinational',
      bg: '#4ade80',
      rotate: '-2deg',
    },
    {
      id: 4,
      type: 'video',
      rotate: '5deg',
      videosrc: '/n.mp4', // নিশ্চিত করুন n.mp4 আপনার public ফোল্ডারে আছে
    }
  ];

  const styles = {
    section: {
      backgroundColor: '#faf4ec',
      padding: '100px 5%',
      minHeight: '100vh',
      fontFamily: 'Helvetica, Arial, sans-serif',
      overflow: 'hidden',
   
    },
    header: {
      maxWidth: '1200px',
      margin: '0 auto 60px'
    },
    title: {
      fontSize: 'clamp(3.5rem, 10vw, 8.5rem)',
      fontWeight: '900',
      lineHeight: '0.85',
      letterSpacing: '-5px',
      margin: '0 0 30px 0',
      color: '#1a1a1a'
    },
    subtitle: {
      fontSize: '1.4rem',
      fontWeight: '700',
      lineHeight: '1.3',
      maxWidth: '450px'
    },
    grid: {
      display: 'flex',
      justifyContent: 'center',
      gap: '25px',
      flexWrap: 'wrap',
      maxWidth: '1400px',
      margin: '0 auto'
    },
    card: (rot, bg) => ({
      flex: '1 1 280px',
      maxWidth: '350px',
      height: '480px',
      backgroundColor: bg || '#000',
      borderRadius: '45px',
      position: 'relative',
      transform: `rotate(${rot})`,
      transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      cursor: 'pointer',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      boxShadow: '0 15px 35px rgba(0,0,0,0.08)'
    }),
    metricContent: {
      padding: '40px 30px',
      color: '#fff',
      textAlign: 'left'
    },
    bigText: {
      fontSize: '5.5rem',
      fontWeight: '900',
      margin: '0 0 80px 0',
      letterSpacing: '-3px'
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <h1 style={styles.title}>Get Hyped. Get<br/>Noticed.Get Results.</h1>
        <p style={styles.subtitle}>Klaar met gokken op content<br/>die niets oplevert?</p>
      </div>

      <div style={styles.grid}>
        {cards.map((card) => (
          <div 
            key={card.id}
            style={styles.card(card.rotate, card.bg)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotate(0deg) scale(1.05) translateY(-10px)';
              // হোভার করলে ভিডিও প্লে করার জন্য (ঐচ্ছিক)
              const v = e.currentTarget.querySelector('video');
              if(v) v.play();
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = `rotate(${card.rotate}) scale(1)`;
            }}
          >
            {card.type === 'metric' ? (
              <div style={styles.metricContent}>
                <h2 style={styles.bigText}>{card.title}</h2>
                <div style={{ borderBottom: '2px solid rgba(255,255,255,0.3)', paddingBottom: '15px' }}>
                  <p style={{ fontSize: '1.2rem', fontWeight: '800', margin: 0 }}>{card.desc}</p>
                  <p style={{ fontSize: '0.85rem', opacity: 0.9, margin: '5px 0 0 0' }}>{card.sub}</p>
                </div>
              </div>
            ) : (
              <div style={{ width: '100%', height: '100%' }}>
                {/* ভিডিওর src এখন card.videosrc থেকে ডাইনামিকালি আসবে */}
                <video 
                  src={card.videosrc} 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;