import React from 'react';

import teethCheckupImage from '../assets/teethCheckupImage.jpeg';
import teethWhiteningImage from '../assets/teethWhiteningImage.jpeg';
import dentalBracesImage from '../assets/dentalBracesImage.jpeg';
import toothIcon from '../assets/toothIcon.png';

function DentalServices() {
  const styles = {
    container: {
      width: '100%',
      backgroundColor: ' #e6f0ff',
      padding: '3rem 1rem',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '3rem',
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#111827',
    },
    serviceText: {
      color: '#3b82f6',
    },
    servicesContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    serviceCard: {
      position: 'relative',
      width: '100%',
      maxWidth: '350px',
      borderRadius: '0.75rem',
      overflow: 'hidden',
      boxShadow:
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
    serviceImage: {
      width: '100%',
      height: '270px',
      objectFit: 'cover',
    },
    infoBox: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      backgroundColor: 'white',
      padding: '0.6rem',
      borderTopLeftRadius: '0.75rem',
      borderTopRightRadius: '0.75rem',
    },
    serviceTitle: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.4rem',
      fontSize: '0.75rem',
      fontWeight: '700',
      color: '#111827',
      marginBottom: '0.4rem',
    },
    toothIcon: {
      width: '20px',
      height: '20px',
      objectFit: 'contain',
    },
    serviceDescription: {
      fontSize: '0.6rem',
      color: '#6b7280',
      marginBottom: '0.4rem',
    },
    learnMore: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '0.6rem',
      color: '#3b82f6',
      fontWeight: '600',
      cursor: 'pointer',
    },
    arrow: {
      marginLeft: '0.2rem',
      fontSize: '0.7rem',
    },
  };

  const services = [
    {
      id: 1,
      title: 'TEETH CHECK UP',
      image: teethCheckupImage,
      description:
        "FROM ROUTINE CLEANINGS TO ADVANCED COSMETIC PROCEDURES, WE'RE HERE FOR YOUR DENTAL HEALTH.",
    },
    {
      id: 2,
      title: 'TEETH WHITENING',
      image: teethWhiteningImage,
      description:
        'UNLOCK THE RADIANCE OF YOUR SMILE WITH PROFESSIONAL TEETH WHITENING.',
    },
    {
      id: 3,
      title: 'DENTAL BRACES',
      image: dentalBracesImage,
      description:
        'TRANSFORM YOUR SMILE WITH CONFIDENCE. EMBRACE THE JOURNEY WITH OUR DENTAL CLINIC.',
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>
        BEST QUALITY <span style={styles.serviceText}>SERVICE</span>
      </h2>

      <div style={styles.servicesContainer}>
        {services.map((service) => (
          <div key={service.id} style={styles.serviceCard}>
            <img
              src={service.image}
              alt={service.title}
              style={styles.serviceImage}
            />
            <div style={styles.infoBox}>
              <div style={styles.serviceTitle}>
                <img
                  src={toothIcon}
                  alt="Tooth icon"
                  style={styles.toothIcon}
                />
                {service.title}
              </div>
              <p style={styles.serviceDescription}>{service.description}</p>
              <div style={styles.learnMore}>
                LEARN MORE <span style={styles.arrow}>→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DentalServices;
