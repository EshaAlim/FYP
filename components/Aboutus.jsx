import React from 'react';
import image from '../assets/image.png'; // Make sure this path is correct

function AboutUs() {
  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '3rem 1rem',
      background: 'linear-gradient(to right, #ffffff, #f1f5f9)',
      fontFamily: 'Arial, sans-serif',
    },
    imageContainer: {
      flex: '1 1 400px',
      display: 'flex',
      justifyContent: 'center',
      padding: '1rem',
    },
    image: {
      width: '100%',
      maxWidth: '450px',
      borderRadius: '1rem',
      boxShadow: '12px 12px 0 #3b82f6',
    },
    textContainer: {
      flex: '1 1 450px',
      padding: '1rem',
      color: '#111827',
    },
    heading: {
      fontSize: '2rem',
      fontWeight: '700',
      marginBottom: '1rem',
    },
    boldBlue: {
      color: '#3b82f6',
      fontWeight: '700',
    },
    paragraph: {
      fontSize: '0.95rem',
      marginBottom: '1rem',
      lineHeight: '1.6',
    },
    button: {
      marginTop: '1rem',
      backgroundColor: '#3b82f6',
      color: '#fff',
      border: 'none',
      padding: '0.6rem 1.2rem',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '0.9rem',
      transition: 'background-color 0.3s ease',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src={image} alt="Dental Clinic" style={styles.image} />
      </div>
      <div style={styles.textContainer}>
        <h2 style={styles.heading}>ABOUT US</h2>
        <p style={styles.paragraph}>
          PRODENT <span style={styles.boldBlue}>DR. GRUIA</span> DENTAL CLINICS, FOUNDED BY MR. DOCTOR DAN GRUIA WITH
          WORK POINTS IN BUCHAREST AND CÂMPINA.
        </p>
        <p style={styles.paragraph}>
          DRIVEN BY THE DESIRE TO EXCEL, WE HAVE INVESTED IN THE DEVELOPMENT OF THE CLINIC, BOTH THROUGH
          STATE-OF-THE-ART EQUIPMENT AND THROUGH THE PERSONAL AND PROFESSIONAL DEVELOPMENT OF THE MEDICAL TEAM. OUR
          TEAM OF DOCTORS IS MADE UP OF HIGHLY QUALIFIED AND EXPERIENCED SPECIALISTS IN THE FIELDS THEY REPRESENT.
        </p>
        <p style={styles.paragraph}>
          OVER THE YEARS, WE HAVE CONSTANTLY IMPROVED OUR MEDICAL SERVICES OF PREVENTION, DIAGNOSIS AND TREATMENT TO
          STANDARDS OF EXCELLENCE, AND OUR EFFORTS WILL ALWAYS BE FOCUSED ON THE PATIENT AND HIS NEEDS IN TERMS OF
          PROFESSIONALISM, QUALITY AND SAFETY OF THE MEDICAL ACT.
        </p>
        <button style={styles.button}>LEARN MORE</button>
      </div>
    </div>
  );
}

export default AboutUs;
