import React from 'react';
import styles from './HomePage.module.css';
import Header from '../Header/Header';
import Card from '../';
const HomePage = () => {
return (
<div className={styles.container}>
<Header />
<h1>Welcome to our homepage!</h1>
<p>This is a brief description of our landing page.</p>
<div className={styles.cardsContainer}>
<Card title="Task 1" description="This is task 1" />
<Card title="Task 2" description="This is task 2" />
<Card title="Task 3" description="This is task 3" />
</div>
</div>
);
};

export default HomePage;