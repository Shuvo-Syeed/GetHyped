import React from 'react';
import './CardStack.css';

const cardData = [
  {
    id: '01',
    expertise: 'Expertise',
    title: 'Strategy',
    description: 'We help you define your brand DNA and social strategy.',
    buttonText: 'Meer over strategy',
    bgColor: '#fdf4ff',
    videoSrc: 'YOUR_VIDEO_1_URL', 
  },
  {
    id: '02',
    expertise: 'Expertise',
    title: 'Content creation',
    description: 'We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt.',
    buttonText: 'Meer over content',
    bgColor: '#f0abfc',
    videoSrc: 'YOUR_VIDEO_2_URL',
  },
  {
    id: '03',
    expertise: 'Expertise',
    title: 'Activation',
    description: 'Zichtbaar waar en wanneer het telt. De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is.',
    buttonText: 'Meer over activatie',
    bgColor: '#4ade80',
    videoSrc: 'YOUR_VIDEO_3_URL',
  },
   {
    id: '04',
    expertise: 'Expertise',
    title: 'Activation',
    description: 'Zichtbaar waar en wanneer het telt. De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is.',
    buttonText: 'Meer over activatie',
    bgColor: '#4ade80',
    videoSrc: 'YOUR_VIDEO_3_URL',
  }
];

const CardStack = () => {
  return (
    <div className="stack-wrapper" style={{ backgroundColor: '#faf4ec' }}>
      {cardData.map((card, index) => (
        <section 
          className="stack-card" 
          key={card.id} 
          style={{ 
            backgroundColor: card.bgColor,
            top: `calc(5% + ${index * 30}px)` // Desktop overlap
          }}
        >
          <div className="stack-container">
            {/* Top Row: Expertise & Number */}
            <div className="stack-header">
              <span className="expertise-badge">{card.expertise}</span>
              <span className="card-id">{card.id}</span>
            </div>

            {/* Title Section */}
            <h1 className="stack-title">{card.title}</h1>

            {/* Bottom Content Row */}
            <div className="stack-body">
              <div className="stack-text-side">
                <p className="stack-desc">{card.description}</p>
                <button className="stack-btn">
                  {card.buttonText} <span className="arrow">→</span>
                </button>
              </div>

              <div className="stack-video-side">
                <div className="video-frame">
                   <video autoPlay muted loop playsInline src={card.videoSrc} />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
      {/* Spacer for bottom scrolling */}
      <div style={{ height: '30vh' }}></div>
    </div>
  );
};

export default CardStack;