import React from "react";

const RegisterPage = () => {
const containerStyle = {
maxWidth: "400px",
margin: "50px auto",
padding: "30px",
backgroundColor: "#fff",
borderRadius: "12px",
boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
textAlign: "center",
fontFamily: "Arial, sans-serif",
};

const headingStyle = {
fontSize: "24px",
color: "#333",
marginBottom: "20px",
};

const formStyle = {
display: "flex",
flexDirection: "column",
alignItems: "center",
justifyContent: "space-between",
};

const inputStyle = {
padding: "10px 20px",
fontSize: "16px",
border: "1px solid #ccc",
borderRadius: "8px",
width: "100%",
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
alert("Registration successful!");
};

return (
<div style={containerStyle}>
<h1 style={headingStyle}>Register</h1>
<form style={formStyle}>
<label>
Username:
<input
type="text"
style={inputStyle}
placeholder="Enter your username"
/>
</label>
<label>
Email:
<input
type="email"
style={inputStyle}
placeholder="Enter your email"
/>
</label>
<label>
Password:
<input
type="password"
style={inputStyle}
placeholder="Enter your password"
/>
</label>
<button
style={buttonStyle}
onClick={handleClick}
onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
>
Register
</button>
</form>
</div>
);
};

export default RegisterPage;