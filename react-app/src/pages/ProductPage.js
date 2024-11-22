import React from "react";

const ProductPage = () => {
const containerStyle = {
maxWidth: "1200px",
margin: "50px auto",
padding: "30px",
backgroundColor: "#fff",
borderRadius: "12px",
boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
textAlign: "center",
fontFamily: "Arial, sans-serif",
};

const headingStyle = {
fontSize: "36px",
color: "#333",
marginBottom: "20px",
};

const paragraphStyle = {
fontSize: "18px",
color: "#555",
lineHeight: "1.8",
marginBottom: "20px",
};

const buttonStyle = {
padding: "12px 20px",
fontSize: "16px",
fontWeight: "bold",
backgroundColor: "#007bff",
color: "#fff",
border: "none",
borderRadius: "8px",
cursor: "pointer",
transition: "background-color 0.3s ease",
};

const buttonHoverStyle = {
backgroundColor: "#0056b3",
};

const buttonDisabledStyle = {
backgroundColor: "#cccccc",
cursor: "not-allowed",
};

const handleClick = () => {
alert("More products coming soon!");
};

return (
<div style={containerStyle}>
<h1 style={headingStyle}>Products</h1>
<p style={paragraphStyle}>
Welcome to the Products page! Here, we provide a list of our products
with filtering and sorting options.
</p>
<button
style={buttonStyle}
onClick={handleClick}
onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
>
Learn More
</button>
<ul>
<li>Product 1</li>
<li>Product 2</li>
<li>Product 3</li>
</ul>
</div>
);
};

export default ProductPage;