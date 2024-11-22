import React from 'react';
import styles from './ContactPage.module.css';

const ContactPage = () => {
return (
<div className={styles.container}>
<h1>Get in Touch</h1>
<p>Want to say hello or report an issue? We'd love to hear from you!</p>
<form className={styles.form}>
<label htmlFor="name">Name:</label>
<input type="text" id="name" />
<br />
<label htmlFor="email">Email:</label>
<input type="email" id="email" />
<br />
<label htmlFor="message">Message:</label>
<textarea id="message" />
<br />
<button type="submit">Send</button>
</form>
</div>
);
};

export default ContactPage;