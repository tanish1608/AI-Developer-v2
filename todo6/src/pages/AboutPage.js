import React from 'react';
import styles from './AboutPage.module.css';

function AboutPage() {
return (
<div className={styles.container}>
<h1>About To-Do List App</h1>
<p>This is a simple To-Do List application built using React.js.</p>
<p>The app allows you to create, delete and mark tasks as done.</p>
<p>Feel free to explore the features and provide feedback!</p>
</div>
);
}

export default AboutPage;