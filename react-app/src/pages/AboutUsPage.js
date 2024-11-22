import React from 'react';

function AboutUsPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Us</h1>
      <p style={styles.paragraph}>
        Welcome to our application! We are dedicated to providing the best user experience and creating high-quality solutions
        that cater to your needs. Our mission is to simplify complex processes and deliver excellent value through our products
        and services.
      </p>
      <p style={styles.paragraph}>
        Our team consists of passionate developers, designers, and innovators committed to continuous improvement and
        innovation. Thank you for being a part of our journey!
      </p>
      <h2 style={styles.subtitle}>Our Values</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>Customer First</li>
        <li style={styles.listItem}>Innovation</li>
        <li style={styles.listItem}>Integrity</li>
        <li style={styles.listItem}>Teamwork</li>
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    color: '#333',
    fontSize: '32px',
    marginBottom: '20px',
  },
  subtitle: {
    color: '#555',
    fontSize: '24px',
    marginTop: '20px',
    marginBottom: '15px',
  },
  paragraph: {
    color: '#666',
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '15px',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    color: '#444',
    fontSize: '16px',
    margin: '5px 0',
  },
};

export default AboutUsPage;