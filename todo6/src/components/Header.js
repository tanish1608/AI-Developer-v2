import React from 'react';
import { Link } from 'react-router-dom';
import HomePage from '../pages/HomePage';
function Header() {
return (
  <>
<nav>
<ul>
<li>
<Link to="/">Home</Link>
</li>
<li>
<Link to="/about">About</Link>
</li>
</ul>
</nav>
<div>
<h1>Welcome to the Home Page</h1>
<HomePage />
</div>
</>
);
}

export default Header;