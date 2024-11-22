import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logoContainer}>
        <h1 style={styles.logoText}>My App</h1>
      </div>
      <div style={styles.linksContainer}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/register" style={styles.link}>Register</Link>
        <Link to="/about" style={styles.link}>About Us</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    padding: '15px 30px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
  logoContainer: {
    flex: 1,
  },
  logoText: {
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    letterSpacing: '2px',
    margin: 0,
    textTransform: 'uppercase',
    transition: 'color 0.3s ease-in-out',
  },
  linksContainer: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
  },
  link: {
    color: '#ecf0f1',
    fontSize: '16px',
    fontWeight: '500',
    textDecoration: 'none',
    position: 'relative',
    padding: '10px 15px',
    borderRadius: '4px',
    transition: 'color 0.3s, transform 0.3s, background-color 0.3s ease',
  },
  linkHover: {
    color: '#3498db',
    backgroundColor: '#ecf0f1',
    transform: 'scale(1.1)',
  },
};

export default Header;