import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header({ title = "Social Media App" }) {
const [activeLink, setActiveLink] = useState(window.location.pathname);

useEffect(() => {
setActiveLink(window.location.pathname);
}, [window.location.pathname]);

// Inline CSS styles
const headerStyle = {
backgroundColor: "#333",
color: "#fff",
padding: "20px",
textAlign: "center",
fontFamily: "Arial, sans-serif",
};

const navStyle = {
listStyle: "none",
margin: "0",
padding: "0",
display: "flex",
justifyContent: "space-between",
};

const navItemStyle = {
margin: "0 20px",
textDecoration: "none",
color: "#fff",
transition: "color 0.3s ease",
};

const navItemActiveStyle = {
color: "#007bff",
};

const navItemHoverStyle = {
color: "#ccc",
};

return (
<header style={headerStyle}>
<h1 style={{ margin: "0" }}>{title}</h1>
<nav style={navStyle}>
<ul>
<li>
<Link
to="/"
style={{
...navItemStyle,
...(activeLink === "/" ? navItemActiveStyle : {}),
":hover": navItemHoverStyle,
}}
>
Home
</Link>
</li>
<li>
<Link
to="/about"
style={{
...navItemStyle,
...(activeLink === "/about" ? navItemActiveStyle : {}),
":hover": navItemHoverStyle,
}}
>
About
</Link>
</li>
<li>
<Link
to="/login"
style={{
...navItemStyle,
...(activeLink === "/login" ? navItemActiveStyle : {}),
":hover": navItemHoverStyle,
}}
>
Login
</Link>
</li>
<li>
<Link
to="/register"
style={{
...navItemStyle,
...(activeLink === "/register" ? navItemActiveStyle : {}),
":hover": navItemHoverStyle,
}}
>
Register
</Link>
</li>
</ul>
</nav>
</header>
);
}

export default Header;