import React from 'react';
import Jason from '../assets/jason.jpg';
import Rose from '../assets/rose.jpg';
import Alice from '../assets/alice.jpg';

const ClinicSection = () => {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '50px 20px',
      textAlign: 'center',
      backgroundColor: '#fff',
      color: '#333',
    },
    headingSpan: {
      color: '#0066ff',
    },
    advantages: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '30px',
      marginTop: '30px',
    },
    advantageItem: {
      minWidth: '150px',
    },
    advantageNumber: {
      fontSize: '28px',
      fontWeight: 'bold',
      marginBottom: '5px',
    },
    staffSection: {
      marginTop: '60px',
    },
    staffCards: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '20px',
      marginTop: '30px',
    },
    card: {
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      padding: '20px',
      width: '90%',
      maxWidth: '250px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      boxSizing: 'border-box',
    },
    image: {
      width: '100%',
      height: '280px',
      borderRadius: '10px',
      objectFit: 'cover',
    },
    name: {
      marginTop: '15px',
      fontSize: '18px',
      fontWeight: 'bold',
    },
    specialty: {
      fontSize: '14px',
      color: '#666',
    },
    button: {
      marginTop: '15px',
      padding: '10px 20px',
      backgroundColor: '#0066ff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      textTransform: 'uppercase',
      fontSize: '13px',
    },
  };

  const doctors = [
    { name: 'DR. JASON S MARTIN', specialty: 'TEETH CLEANING', image: Jason },
    { name: 'DR. ROSE Q. RYAN', specialty: 'TEETH BRACES', image: Rose },
    { name: 'DR. ALICE R. VARGAS', specialty: 'EMERGENCY SERVICE', image: Alice },
  ];

  return (
    <div style={styles.container}>
      <h2>
        OUR <span style={styles.headingSpan}>ADVANTAGES</span>
      </h2>

      <div style={styles.advantages}>
        <div style={styles.advantageItem}>
          <p style={styles.advantageNumber}>150+</p>
          <p>DOCTORS + NURSE</p>
        </div>
        <div style={styles.advantageItem}>
          <p style={styles.advantageNumber}>50+</p>
          <p>TRAINING COURSES</p>
        </div>
        <div style={styles.advantageItem}>
          <p style={styles.advantageNumber}>1,000 M</p>
          <p>INTERVENTIONS</p>
        </div>
        <div style={styles.advantageItem}>
          <p style={styles.advantageNumber}>50+</p>
          <p>YEAR EXPERIENCES</p>
        </div>
      </div>

      <div style={styles.staffSection}>
        <h2>
          DENTAL CLINIC ABOUT <span style={styles.headingSpan}>STAFF</span>
        </h2>

        <div style={styles.staffCards}>
          {doctors.map((doc, index) => (
            <div key={index} style={styles.card}>
              <img src={doc.image} alt={doc.name} style={styles.image} />
              <h3 style={styles.name}>{doc.name}</h3>
              <p style={styles.specialty}>{doc.specialty}</p>
              <button style={styles.button}>LEARN MORE</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClinicSection;
