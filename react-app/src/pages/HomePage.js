import React from 'react';

function HomePage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Our Application!</h1>
      <p style={styles.paragraph}>
        Explore the features of our app and enjoy a seamless user experience. Navigate through the different pages using the
        header above and learn more about what we offer.
      </p>
      <p style={styles.paragraph}>
        Whether you're here to learn about us, register an account, or log in to access your dashboard, we've got you covered.
        Start your journey with us today!
      </p>
      <button style={styles.button}>Get Started</button>
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
  paragraph: {
    color: '#555',
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '15px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default HomePage;