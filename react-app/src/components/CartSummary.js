import React, { useState, useEffect } from 'react';

function CartSummary({ cart = [], onRemoveItem = () => {} }) {
const [totalCost, setTotalCost] = useState(0);
const [numItems, setNumItems] = useState(0);

useEffect(() => {
const calculateTotalCost = () => {
let sum = 0;
cart.forEach((item) => {
sum += item.price  item.quantity;
});
setTotalCost(sum);
};

const calculateNumItems = () => {
setNumItems(cart.length);
};

calculateTotalCost();
calculateNumItems();
}, [cart]);

const handleRemoveItem = (item) => {
onRemoveItem(item);
const newCart = cart.filter((i) => i !== item);
setCart(newCart);
};

// Inline CSS styles
const containerStyle = {
width: "100%",
height: "100vh",
display: "flex",
flexDirection: "column",
alignItems: "center",
justifyContent: "space-between",
};

const summaryStyle = {
width: "80%",
height: "80vh",
display: "flex",
flexDirection: "column",
alignItems: "center",
justifyContent: "space-between",
};

const totalCostStyle = {
fontSize: "24px",
fontWeight: "bold",
color: "#008000",
};

const numItemsStyle = {
fontSize: "18px",
color: "#666",
};

const removeItemStyle = {
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

const removeItemHoverStyle = {
backgroundColor: "#0056b3",
};

return (
<div style={containerStyle}>
<h1>Cart Summary</h1>
<div style={summaryStyle}>
<p style={totalCostStyle}>Total Cost: ${totalCost}</p>
<p style={numItemsStyle}>Number of Items: {numItems}</p>
{cart.map((item, index) => (
<div key={index}>
<p>{item.name}</p>
<p>Quantity: {item.quantity}</p>
<button
style={{
...removeItemStyle,
...(item.hover ? removeItemHoverStyle : {}),
}}
onClick={() => handleRemoveItem(item)}
>
Remove Item
</button>
</div>
))}
</div>
</div>
);
}

export default CartSummary;