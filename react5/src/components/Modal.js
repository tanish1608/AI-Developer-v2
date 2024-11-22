import React, { useState } from "react";

function Modal({ isOpen, onClose, children }) {
const [initialFocus, setInitialFocus] = useState(null);

const modalStyle = {
position: "fixed",
top: "0",
right: "0",
bottom: "0",
left: "0",
backgroundColor: "rgba(0, 0, 0, 0.5)",
};

const modalContentStyle = {
position: "relative",
backgroundColor: "#fff",
padding: "20px",
borderRadius: "5px",
margin: "100px auto",
maxWidth: "600px",
};

const closeButtonStyle = {
position: "absolute",
top: "10px",
right: "10px",
cursor: "pointer",
};

const handleEscKeydown = (event) => {
if (event.key === "Escape") {
onClose();
}
};

return (
<div style={modalStyle} onClick={onClose}>
{isOpen && (
<div style={modalContentStyle}>
<button
style={closeButtonStyle}
onClick={onClose}
>
×
</button>
<div style={{ padding: "20px" }}>{children}</div>
</div>
)}
</div>
);
}

export default Modal;