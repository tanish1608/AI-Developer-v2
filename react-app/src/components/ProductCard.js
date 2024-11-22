import React, { useState, useEffect } from 'react';

function ProductCard({ product = {}, onAddToCart = () => {} }) {
const [hovered, setHovered] = useState(false);

useEffect(() => {
const handleMouseEnter = () => {
setHovered(true);
};

const handleMouseLeave = () => {
setHovered(false);
};

document.addEventListener("mousemove", handleMouseEnter);
document.addEventListener("mouseout", handleMouseLeave);

return () => {
document.removeEventListener("mousemove", handleMouseEnter);
document.removeEventListener("mouseout", handleMouseLeave);
};
}, []);

const handleAddToCart = () => {
onAddToCart(product);
};

// Inline CSS styles
const containerStyle = {
width: "300px",
height: "400px",
backgroundColor: "#fff",
border: "1px solid #ddd",
borderRadius: "10px",
padding: "20px",
display: "flex",
flexDirection: "column",
alignItems: "center",
justifyContent: "space-between",
transition: "box-shadow 0.3s ease",
};

const imageStyle = {
width: "100%",
height: "150px",
objectFit: "cover",
borderRadius: "10px 10px 0 0",
};

const productNameStyle = {
fontSize: "18px",
margin: "10px 0",
};

const priceStyle = {
fontSize: "16px",
color: "#008000",
margin: "10px 0",
};

const descriptionStyle = {
fontSize: "14px",
color: "#666",
margin: "10px 0",
};

const addToCartStyle = {
padding: "10px 20px",
fontSize: "16px",
fontWeight: "bold",
color: "#fff",
backgroundColor: "#007bff",
border: "none",
borderRadius: "5px",
cursor: "pointer",
transition: "background-color 0.3s ease",
};

const addToCartHoverStyle = {
backgroundColor: "#0056b3",
};

return (
<div style={containerStyle}>
<img src={product.image} alt={product.name} style={imageStyle} />
<h2 style={productNameStyle}>{product.name}</h2>
<p style={priceStyle}>${product.price}</p>
<p style={descriptionStyle}>{product.description}</p>
<button
style={{
...addToCartStyle,
...(hovered ? addToCartHoverStyle : {}),
}}
onClick={handleAddToCart}
>
Add to Cart
</button>
</div>
);
}

export default ProductCard;