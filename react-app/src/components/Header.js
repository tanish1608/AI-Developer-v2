import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
const headerStyle = {
backgroundColor: '#282c34',
padding: '10px',
textAlign: 'center',
};

const linkStyle = {
color: 'white',
margin: '0 10px',
textDecoration: 'none',
};

return (
<nav style={headerStyle}>
<Link to="/" style={linkStyle}>
Home
</Link>
<Link to="/about" style={linkStyle}>
About Us
</Link>
<Link to="/product" style={linkStyle}>
Products
</Link>
<Link to="/product-detail" style={linkStyle}>
Product Details
</Link>
<Link to="/cart" style={linkStyle}>
Cart
</Link>
<Link to="/checkout" style={linkStyle}>
Checkout
</Link>
<Link to="/order-history" style={linkStyle}>
Order History
</Link>
<Link to="/login" style={linkStyle}>
Login
</Link>
<Link to="/register" style={linkStyle}>
Register
</Link>
</nav>
);
}

export default Header;