import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
const headerStyle = {
backgroundColor: '#333',
color: '#fff',
padding: '10px',
textAlign: 'center',
borderBottom: '1px solid #ccc',
};

const linkStyle = {
color: '#fff',
textDecoration: 'none',
fontSize: '18px',
marginRight: '20px',
};

return (
<header style={headerStyle}>
<Link to="/" style={linkStyle}>
Home
</Link>
<Link to="/task" style={linkStyle}>
Tasks
</Link>
</header>
);
};

export default Header;