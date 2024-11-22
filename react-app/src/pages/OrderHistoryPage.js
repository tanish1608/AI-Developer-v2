import React from "react";

const OrderHistoryPage = () => {
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
alert("Order history updated!");
};

return (
<div style={containerStyle}>
<h1 style={headingStyle}>Order History</h1>
<p style={paragraphStyle}>
Welcome to the Order History page! Here, we provide a list of your
past orders, including the date, products, and total cost of each order.
</p>
<button
style={buttonStyle}
onClick={handleClick}
onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
>
View Order History
</button>
<table>
<thead>
<tr>
<th>Date</th>
<th>Products</th>
<th>Total Cost</th>
</tr>
</thead>
<tbody>
<tr>
<td>2022-01-01</td>
<td>Product 1 x 2, Product 2 x 1</td>
<td>$20.99</td>
</tr>
<tr>
<td>2022-01-15</td>
<td>Product 3 x 1, Product 4 x 2</td>
<td>$30.99</td>
</tr>
</tbody>
</table>
</div>
);
};

export default OrderHistoryPage;