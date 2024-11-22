import React from 'react';
import styles from './AppWrapper.module.css';

const AppWrapper = ({ children }) => {
return (
<div className={styles.appWrapper}>
<header className={styles.header}>
<h1 className={styles.heading}>Task Manager</h1>
</header>
<main className={styles.main}>{children}</main>
<footer className={styles.footer}>
<p className={styles.copy}>
&copy; 2023 Task Manager
</p>
</footer>
</div>
);
};

export default AppWrapper;