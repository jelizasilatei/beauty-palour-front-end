import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const photos = ['https://www.nicepng.com/png/detail/4-45811_michaels-long-hair-girl-png.png',
  'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1264169989a-1624390000.jpg', 
  'https://www.byrdie.com/thmb/1L5TtcoL9-z3WqzophCNFiQKrHg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easynailart_social-b35f03c7ea144c7fa39fc6583208489b.jpg'];
  const words = ['STYLISH', 'FASHION', 'COLOUR'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prevPhoto) => (prevPhoto + 1) % photos.length);
    }, 3000); // Adjust the interval to change the slide duration (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          display: 'flex',
          transition: 'transform 0.5s',
          transform: `translateX(-${currentPhoto * 100}%)`,
        }}
      >
        {photos.map((photo, index) => (
          <div
            key={index}
            style={{
              position: 'relative',
              width: '100%',
              flex: '0 0 100%',
            }}
          >
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                fontSize: '3rem',
                fontStyle: 'italic',
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
              }}
            >
              {words[index]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
