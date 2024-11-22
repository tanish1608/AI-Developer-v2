import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header({ title = "Todo App", links = [] }) {
const [activeLink, setActiveLink] = useState(null);

useEffect(() => {
const currentLocation = window.location.pathname;
const activeLinkIndex = links.findIndex((link) => link.path === currentLocation);
if (activeLinkIndex !== -1) {
setActiveLink(links[activeLinkIndex]);
}
}, [links, window.location.pathname]);

// Inline CSS styles
const containerStyle = {
display: "flex",
justifyContent: "space-between",
alignItems: "center",
padding: "20px",
backgroundColor: "#333",
color: "#fff",
};

const linkStyle = {
textDecoration: "none",
color: "#fff",
marginRight: "20px",
transition: "color 0.3s ease",
};

const linkActiveStyle = {
color: "#007bff",
};

const titleStyle = {
fontSize: "24px",
fontWeight: "bold",
};

return (
<header style={containerStyle}>
<h1 style={titleStyle}>{title}</h1>
<nav>
{links.map((link, index) => (
<Link
key={index}
to={link.path}
style={{
...linkStyle,
...(activeLink === link ? linkActiveStyle : {}),
}}
aria-current={activeLink === link ? "page" : null}
>
{link.label}
</Link>
))}
</nav>
</header>
);
}

Header.defaultProps = {
links: [
{ path: "/", label: "Home" },
{ path: "/login", label: "Login" },
{ path: "/register", label: "Register" },
{ path: "/about", label: "About" },
],
};

export default Header;