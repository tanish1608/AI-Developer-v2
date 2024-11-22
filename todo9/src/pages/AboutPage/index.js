import React from 'react';
import styles from './AboutPage.module.css';

const AboutPage = () => {
return (
<div className={styles.container}>
<h1>About Our Application</h1>
<p>This is a page providing details about the application.</p>
<ul className={styles.features}>
<li>Feature 1: This feature does something cool.</li>
<li>Feature 2: Another feature that's also pretty great.</li>
<li>Feature 3: The final feature, which is awesome!</li>
</ul>
</div>
);
};

export default AboutPage;