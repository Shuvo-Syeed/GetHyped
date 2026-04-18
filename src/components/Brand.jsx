import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Brand = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [trackWidth, setTrackWidth] = useState(0);
  const trackRef = useRef(null);

  const brands = [
    { name: 'morssinkhof', logo: '...' },
    { name: 'Salontopper', logo: '...' },
    { name: 'seesing flex', logo: '...' },
    { name: 'Graafschap', logo: '...' },
    { name: 'fides', logo: '...' },
  ];

  // 1. Array double kora hoyeche
  const doubledBrands = [...brands, ...brands];

  // 2. Width auto-calculate korar logic
  useEffect(() => {
    if (trackRef.current) {
      // Pura track-er odhek width-e amra loop reset korbo
      setTrackWidth(trackRef.current.scrollWidth / 2);
    }
  }, []);

  const getRotation = (index) => {
    const rotations = [-6, 5, -4, 7, -5]; 
    return rotations[index % rotations.length];
  };

  const styles = {
    container: {
      backgroundColor: '#f9f7f2', // Cream theme
      padding: '100px 0',
      overflow: 'hidden',
      width: '100%',
    },
    track: {
      display: 'flex',
      gap: '25px', // Exact gap matching pic
      width: 'max-content', 
    },
    card: (index, pressed) => ({
      flex: '0 0 320px',
      height: '380px',
      backgroundColor: '#fff',
      borderRadius: '25px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid rgba(0,0,0,0.05)',
      // Click hold effect
      transform: pressed 
        ? `rotate(${getRotation(index)}deg) translateY(-15px)` 
        : 'rotate(0deg)',
      transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    }),
  };

  return (
    <div style={styles.container}>
      <h2 style={{ fontSize: '4.5rem', fontWeight: '900', margin: '0 0 60px 6%' }}>
        These brands <br /> got hyped.
      </h2>

      <div style={{ display: 'flex' }}>
        <motion.div 
          ref={trackRef}
          style={styles.track}
          // 3. Auto-calculated distance use kora hoyeche
          animate={{ x: [0, -trackWidth] }} 
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear",
            repeatType: "loop" 
          }}
        >
          {doubledBrands.map((brand, index) => (
            <div 
              key={index} 
              onMouseDown={() => setIsPressed(true)}
              onMouseUp={() => setIsPressed(false)}
              onMouseLeave={() => setIsPressed(false)}
              style={styles.card(index, isPressed)}
            >
              <div style={{ fontSize: '1.5rem', fontWeight: '800' }}>{brand.name}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Brand;