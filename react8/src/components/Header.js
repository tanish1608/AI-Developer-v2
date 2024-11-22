import React from "react";
import "./Header.css";

function Header() {
const [activeTab, setActiveTab] = useState("home");

const headerStyle = {
display: "flex",
justifyContent: "space-between",
alignItems: "center",
padding: "20px 40px",
};

const navStyle = {
listStyle: "none",
margin: 0,
padding: 0,
display: "flex",
justifyContent: "space-between",
alignItems: "center",
};

const navItemStyle = {
margin: "0 20px",
};

const activeClassName = {
color: "#007bff",
textDecoration: "underline",
};

const handleTabClick = (tab) => {
setActiveTab(tab);
};

return (
<header style={headerStyle}>
<nav style={navStyle}>
<ul>
<li style={navItemStyle}>
<Link
to="/"
onClick={() => handleTabClick("home")}
style={
activeTab === "home"
? activeClassName
: {}
}
>
Home
</Link>
</li>
<li style={navItemStyle}>
<Link
to="/tasks"
onClick={() => handleTabClick("tasks")}
style={
activeTab === "tasks"
? activeClassName
: {}
}
>
Tasks
</Link>
</li>
<li style={navItemStyle}>
<Link
to="/about"
onClick={() => handleTabClick("about")}
style={
activeTab === "about"
? activeClassName
: {}
}
>
About
</Link>
</li>
</ul>
</nav>
</header>
);
}

export default Header;