import React, { useState, useEffect } from 'react';

function CommentCard({ commentText, likes = 0 }) {
const [loading, setLoading] = useState(false);
const [liked, setLiked] = useState(false);

useEffect(() => {
console.log('Component mounted or updated!');
}, []);

const handleLikeButton = () => {
setLoading(true);
setTimeout(() => {
setLiked(!liked);
setLoading(false);
}, 500);
};

// Inline CSS styles
const containerStyle = {
display: "flex",
flexDirection: "column",
padding: "20px",
border: "1px solid #ddd",
borderRadius: "10px",
boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
};

const commentTextStyle = {
fontSize: "18px",
margin: "10px 0",
};

const likeButtonStyle = {
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

const likeButtonHoverStyle = {
backgroundColor: "#0056b3",
};

const likeButtonDisabledStyle = {
backgroundColor: "#cccccc",
cursor: "not-allowed",
};

const likeCountStyle = {
fontSize: "14px",
color: "#666",
margin: "10px 0",
};

return (
<div style={containerStyle}>
<p style={commentTextStyle}>{commentText}</p>
<button
style={{
...likeButtonStyle,
...(liked ? likeButtonDisabledStyle : {}),
":hover": likeButtonHoverStyle
}}
onClick={handleLikeButton}
disabled={loading}
aria-live="polite"
>
{loading ? 'Loading...' : liked ? 'Unlike' : 'Like'}
</button>
<p style={likeCountStyle}>{likes} likes</p>
</div>
);
}

export default CommentCard;