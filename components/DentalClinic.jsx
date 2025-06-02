import React from 'react';
import Dental from "../assets/Dental.png"; // Apni image ka naam yahan lagayen

function DentalClinic() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#e6f0ff',
      marginTop: '100px', // space below navbar
      width: '100%',
    },
    mainContent: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
    leftContent: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '2rem',
    },
    headerText: {
      color: '#2563eb',
      fontWeight: '600',
      fontSize: '0.875rem',
      marginBottom: '1.5rem'
    },
    titleContainer: {
      marginBottom: '1.5rem'
    },
    mainTitle: {
      fontSize: '2.25rem',
      fontWeight: '700',
      color: '#1f2937',
      marginBottom: '0.5rem'
    },
    blueText: {
      color: '#2563eb'
    },
    welcomeText: {
      color: '#4b5563',
      fontSize: '0.875rem',
      marginTop: '1rem'
    },
    boldText: {
      fontWeight: '600'
    },
    buttonContainer: {
      display: 'flex',
      gap: '1rem',
      paddingTop: '1rem'
    },
    appointmentButton: {
      backgroundColor: '#2563eb',
      color: 'white',
      padding: '0.5rem 1.5rem',
      borderRadius: '0.375rem',
      fontWeight: '500',
      border: 'none',
      cursor: 'pointer'
    },
    learnMoreButton: {
      color: '#374151',
      padding: '0.5rem 1.5rem',
      fontWeight: '500',
      background: 'none',
      border: '2px solid #374151',
      borderRadius: '0.375rem',
      cursor: 'pointer'
    },
    rightContent: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
    },
    imageBox: {
      borderRadius: '1rem',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      padding: '1rem',
      backgroundColor: '#ffffff',
      maxWidth: '400px',
      width: '100%',
    },
    dentistImage: {
      width: '100%',
      height: 'auto',
      borderRadius: '0.75rem',
    },
  };

  const isDesktop = window.innerWidth >= 768;
  if (isDesktop) {
    styles.mainContent.flexDirection = 'row';
    styles.leftContent.width = '50%';
    styles.rightContent.width = '50%';
  }

  return (
    <div style={styles.container}>
      <div style={styles.mainContent}>
        {/* Left Content */}
        <div style={styles.leftContent}>
          <div style={styles.headerText}>HEY! WE ARE DENTAL</div>

          <div style={styles.titleContainer}>
            <h1 style={styles.mainTitle}>
              DENTAL <span style={styles.blueText}>HELPING</span> YOU TO BRING BACK YOUR <span style={styles.blueText}>HAPPY SMILE</span>
            </h1>
            <p style={styles.welcomeText}>
              WELCOME TO <span style={styles.boldText}>[DENTAL CLINIC]</span>, WHERE YOUR JOURNEY TO A BRIGHTER,
              HEALTHIER SMILE DENTAL SOLUTIONS TAILORED TO YOUR UNIQUE NEEDS.
            </p>
          </div>

          <div style={styles.buttonContainer}>
            <button className="appointment-button" style={styles.appointmentButton}>APPOINTMENT</button>
            <button className="learn-more-button" style={styles.learnMoreButton}>LEARN MORE</button>
          </div>
        </div>

        {/* Right Content (Image) */}
        <div style={styles.rightContent}>
          <div style={styles.imageBox}>
            <img src={Dental} alt="Dental" style={styles.dentistImage} />
          </div>
        </div>
      </div>

      {/* Hover and Click CSS */}
      <style>
        {`
          .appointment-button:hover {
            background-color: #1d4ed8;
          }
          .appointment-button:active {
            background-color: #1e40af;
          }

          .learn-more-button:hover {
            background-color: #1d4ed8;
            color: white;
            border-color: #1d4ed8;
          }
          .learn-more-button:active {
            background-color: #1e40af;
            color: white;
            border-color: #1e40af;
          }
        `}
      </style>
    </div>
  );
}

export default DentalClinic;
