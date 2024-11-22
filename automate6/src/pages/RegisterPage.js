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
padding: "20px",
backgroundColor: "#f9f9f9",
borderRadius: "12px",
boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
};

const inputStyle = {
padding: "10px",
fontSize: "16px",
border: "none",
borderRadius: "8px",
width: "100%",
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

const handleSubmit = (event) => {
event.preventDefault();
alert("Registration successful!");
};

return (
<div style={containerStyle}>
<h1 style={headingStyle}>Register</h1>
<form style={formStyle} onSubmit={handleSubmit}>
<input
type="text"
placeholder="Username"
style={inputStyle}
required
/>
<input
type="email"
placeholder="Email"
style={inputStyle}
required
/>
<input
type="password"
placeholder="Password"
style={inputStyle}
required
/>
<button
style={buttonStyle}
type="submit"
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