import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaClock,
  FaGlobe,
} from "react-icons/fa";

import logo from "../assets/logo.jpg";

const Navbar = () => {
  const wrapperStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    zIndex: "1000",
  };

  const topBarStyle = {
    backgroundColor: "#2874f0",
    color: "white",
    padding: "10px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    fontSize: "14px",
    width: "100%",
    boxSizing: "border-box",
  };

  const leftInfoStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    alignItems: "center",
  };

  const socialIconsStyle = {
    display: "flex",
    gap: "10px",
    fontSize: "16px",
    alignItems: "center",
  };

  const navbarStyle = {
    background: "linear-gradient(to right, #ffffff, #e6f0ff)",
    padding: "20px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
    boxSizing: "border-box",
  };

  const logoContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const logoImageStyle = {
    width: "45px",
    height: "45px",
    objectFit: "contain",
  };

  const logoTextStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const navLinksStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    alignItems: "center",
    margin: "10px 0",
  };

  const appointmentButtonStyle = {
    backgroundColor: "#2874f0",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#000",
    fontWeight: "500",
    transition: "color 0.3s ease",
  };

  const hoverLinkStyle = `
    a.nav-link:hover {
      color: #2874f0 !important;
    }
  `;

  return (
    <>
      <style>{hoverLinkStyle}</style>

      <div style={wrapperStyle}>
        <div style={topBarStyle}>
          <div style={leftInfoStyle}>
            <span><FaMapMarkerAlt /> Address: 92 Bowery St., New York, NY 10013</span>
            <span><FaClock /> Office Open: 9.00 am - 6.00 pm</span>
            <span><FaGlobe /> www.Dental.com</span>
          </div>
          <div style={socialIconsStyle}>
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>

        <div style={navbarStyle}>
          <div style={logoContainerStyle}>
            <img src={logo} alt="Dental Logo" style={logoImageStyle} />
            <div style={logoTextStyle}>
              <strong>DENTAL</strong>
              <span style={{ fontSize: "12px", color: "#444" }}>CLINIC</span>
            </div>
          </div>

          <div style={navLinksStyle}>
            <a href="#" style={linkStyle} className="nav-link">HOME</a>
            <a href="#" style={linkStyle} className="nav-link">ABOUT US</a>
            <a href="#" style={linkStyle} className="nav-link">SERVICES</a>
            <a href="#" style={linkStyle} className="nav-link">REVIEWS</a>
            <a href="#" style={linkStyle} className="nav-link">CONTACT US</a>
            <a href="#" style={linkStyle} className="nav-link">BLOG</a>
            <a href="#" style={linkStyle} className="nav-link">ABOUT STAFF</a>
          </div>

          <button style={appointmentButtonStyle}>APPOINTMENT</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
