import React from 'react';
import styles from './Header.module.css';

const Header = () => {
const [activeLink, setActiveLink] = React.useState('');

return (
<header className={styles.header}>
<nav>
<ul>
<li onClick={() => setActiveLink('home')} className={activeLink === 'home' ? styles.active : ''}>
<a href="/#">Home</a>
</li>
<li onClick={() => setActiveLink('about')} className={activeLink === 'about' ? styles.active : ''}>
<a href="/#about">About</a>
</li>
<li onClick={() => setActiveLink('contact')} className={activeLink === 'contact' ? styles.active : ''}>
<a href="/#contact">Contact</a>
</li>
</ul>
</nav>
<h1 className={styles.branding}>My App</h1>
</header>
);
};

export default Header;