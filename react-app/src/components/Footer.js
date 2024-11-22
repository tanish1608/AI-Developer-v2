import React, { useState, useEffect } from 'react';

function Footer({ socialMediaLinks = [], contactInfo = {} }) {
const [activeLink, setActiveLink] = useState(null);

useEffect(() => {
const handleScroll = () => {
if (window.scrollY > 100) {
document.getElementById("footer").classList.add("scrolled");
} else {
document.getElementById("footer").classList.remove("scrolled");
}
};
window.addEventListener("scroll", handleScroll);
return () => {
window.removeEventListener("scroll", handleScroll);
};
}, []);

const handleLinkClick = (e) => {
setActiveLink(e.target.textContent);
};

// Inline CSS styles
const footerStyle = {
position: "fixed",
bottom: 0,
left: 0,
width: "100%",
backgroundColor: "#333",
color: "#fff",
padding: "20px",
display: "flex",
justifyContent: "space-between",
alignItems: "center",
transition: "background-color 0.3s ease",
};

const socialMediaStyle = {
listStyle: "none",
margin: 0,
padding: 0,
display: "flex",
};

const socialMediaLinkStyle = {
textDecoration: "none",
color: "#fff",
fontSize: "18px",
marginRight: "20px",
transition: "color 0.3s ease",
};

const contactInfoStyle = {
listStyle: "none",
margin: 0,
padding: 0,
display: "flex",
};

const contactInfoLinkStyle = {
textDecoration: "none",
color: "#fff",
fontSize: "18px",
marginRight: "20px",
transition: "color 0.3s ease",
};

return (
<footer id="footer" style={footerStyle}>
<ul style={socialMediaStyle}>
{socialMediaLinks.map((link, index) => (
<li key={index}>
<a
href={link.href}
style={socialMediaLinkStyle}
target="_blank"
rel="noopener noreferrer"
onClick={handleLinkClick}
>
{link.text}
</a>
</li>
))}
</ul>
<ul style={contactInfoStyle}>
{Object.keys(contactInfo).map((key, index) => (
<li key={index}>
<a
href={contactInfo[key].href}
style={contactInfoLinkStyle}
target="_blank"
rel="noopener noreferrer"
onClick={handleLinkClick}
>
{contactInfo[key].text}
</a>
</li>
))}
</ul>
</footer>
);
}

export default Footer;