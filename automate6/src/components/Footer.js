import React from 'react';

function Footer() {
// Inline CSS styles
const footerStyle = {
backgroundColor: "#333",
color: "#fff",
padding: "20px",
textAlign: "center",
fontFamily: "Arial, sans-serif",
};

const socialMediaStyle = {
listStyle: "none",
margin: "0",
padding: "0",
display: "flex",
justifyContent: "space-between",
};

const socialMediaItemStyle = {
margin: "0 20px",
textDecoration: "none",
color: "#fff",
transition: "color 0.3s ease",
};

const socialMediaItemHoverStyle = {
color: "#ccc",
};

return (
<footer style={footerStyle}>
<p>&copy; 2023 Social Media App</p>
<ul style={socialMediaStyle}>
<li>
<a
href="https://www.facebook.com"
style={{
...socialMediaItemStyle,
":hover": socialMediaItemHoverStyle,
}}
>
Facebook
</a>
</li>
<li>
<a
href="https://www.twitter.com"
style={{
...socialMediaItemStyle,
":hover": socialMediaItemHoverStyle,
}}
>
Twitter
</a>
</li>
<li>
<a
href="https://www.instagram.com"
style={{
...socialMediaItemStyle,
":hover": socialMediaItemHoverStyle,
}}
>
Instagram
</a>
</li>
</ul>
</footer>
);
}

export default Footer;