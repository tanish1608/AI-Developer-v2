import React, { useState, useEffect } from 'react';

function CheckoutForm({ onCheckout = () => {} }) {
const [name, setName] = useState("");
const [address, setAddress] = useState("");
const [paymentMethod, setPaymentMethod] = useState("");
const [loading, setLoading] = useState(false);

useEffect(() => {
console.log('Component mounted or updated!');
}, []);

const handleNameChange = (e) => {
setName(e.target.value);
};

const handleAddressChange = (e) => {
setAddress(e.target.value);
};

const handlePaymentMethodChange = (e) => {
setPaymentMethod(e.target.value);
};

const handleCheckout = () => {
setLoading(true);
setTimeout(() => {
onCheckout({ name, address, paymentMethod });
setLoading(false);
}, 500);
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

const formStyle = {
width: "80%",
height: "80vh",
display: "flex",
flexDirection: "column",
alignItems: "center",
justifyContent: "space-between",
};

const inputStyle = {
padding: "10px 20px",
fontSize: "16px",
border: "1px solid #ccc",
borderRadius: "5px",
width: "100%",
};

const buttonStyle = {
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

const buttonHoverStyle = {
backgroundColor: "#0056b3",
};

const buttonDisabledStyle = {
backgroundColor: "#cccccc",
cursor: "not-allowed",
};

const loadingStyle = {
backgroundColor: "#ffcc00",
};

return (
<div style={containerStyle}>
<h1>Checkout Form</h1>
<form style={formStyle}>
<label>
Name:
<input
type="text"
value={name}
onChange={handleNameChange}
style={inputStyle}
/>
</label>
<label>
Address:
<input
type="text"
value={address}
onChange={handleAddressChange}
style={inputStyle}
/>
</label>
<label>
Payment Method:
<select
value={paymentMethod}
onChange={handlePaymentMethodChange}
style={inputStyle}
>
<option value="">Select a payment method</option>
<option value="credit card">Credit Card</option>
<option value="paypal">PayPal</option>
</select>
</label>
<button
style={{
...buttonStyle,
...(loading ? loadingStyle : {}),
":hover": buttonHoverStyle
}}
onClick={handleCheckout}
disabled={loading}
aria-live="polite"
>
{loading ? 'Processing...' : 'Checkout'}
</button>
</form>
</div>
);
}

export default CheckoutForm;