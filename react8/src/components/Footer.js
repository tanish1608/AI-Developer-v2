import React from "react";

function Footer() {
const footerStyle = {
backgroundColor: "#333",
color: "#fff",
padding: "20px",
textAlign: "center",
clear: "both",
};

const socialLinksStyle = {
listStyle: "none",
margin: 0,
padding: 0,
display: "flex",
justifyContent: "space-between",
alignItems: "center",
};

const socialLinkStyle = {
margin: "0 20px",
};

return (
<footer style={footerStyle}>
<p>Copyright &copy; 2023 Your Company Name</p>
<ul style={socialLinksStyle}>
<li style={socialLinkStyle}>
<a
href="https://www.facebook.com/"
target="_blank"
rel="noreferrer"
>
<img
src="https://raw.githubusercontent.com/facebookarchive/facebook-login-ios/master/resources/icon50.png"
alt="Facebook"
style={{ width: "20px", height: "20px" }}
/>
</a>
</li>
<li style={socialLinkStyle}>
<a
href="https://www.twitter.com/"
target="_blank"
rel="noreferrer"
>
<img
src="https://www.twimg.com/static/images/comms/social-facebook.tweet.twitter.32x32.png"
alt="Twitter"
style={{ width: "20px", height: "20px" }}
/>
</a>
</li>
<li style={socialLinkStyle}>
<a
href="https://www.linkedin.com/"
target="_blank"
rel="noreferrer"
>
<img
src="https://www.linkedin.com/businessteam/content/icon.png"
alt="LinkedIn"
style={{ width: "20px", height: "20px" }}
/>
</a>
</li>
</ul>
</footer>
);
}

export default Footer;