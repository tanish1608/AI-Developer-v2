import React, { useState, useEffect } from 'react';

function ProfileCard({ profilePicture, name, bio, username }) {
const [loading, setLoading] = useState(false);

useEffect(() => {
console.log('Component mounted or updated!');
}, []);

const handleLoadProfilePicture = () => {
setLoading(true);
setTimeout(() => {
setLoading(false);
}, 500);
};

// Inline CSS styles
const containerStyle = {
display: "flex",
flexDirection: "column",
alignItems: "center",
padding: "20px",
border: "1px solid #ddd",
borderRadius: "10px",
boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
};

const profilePictureStyle = {
width: "100px",
height: "100px",
borderRadius: "50%",
objectFit: "cover",
};

const nameStyle = {
fontSize: "18px",
fontWeight: "bold",
margin: "10px 0",
};

const bioStyle = {
fontSize: "14px",
color: "#666",
margin: "10px 0",
};

return (
<div style={containerStyle}>
<img
src={profilePicture}
alt={username}
style={profilePictureStyle}
onLoad={handleLoadProfilePicture}
aria-label={username}
/>
<h2 style={nameStyle}>{name}</h2>
<p style={bioStyle}>{bio}</p>
{loading ? (
<p>Loading...</p>
) : (
<button
style={{
padding: "10px 20px",
fontSize: "16px",
fontWeight: "bold",
color: "#fff",
backgroundColor: "#007bff",
border: "none",
borderRadius: "5px",
cursor: "pointer",
transition: "background-color 0.3s ease",
}}
>
View Profile
</button>
)}
</div>
);
}

export default ProfileCard;