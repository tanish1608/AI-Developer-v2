import React from "react";
import Modal from "../Modal";

const TaskDetailsPage = () => {
const containerStyle = {
maxWidth: "800px",
margin: "20px auto",
padding: "20px",
backgroundColor: "#f0f0f0",
borderRadius: "8px",
textAlign: "center",
fontFamily: "Arial, sans-serif",
};

const headingStyle = {
fontSize: "32px",
color: "#333",
};

const paragraphStyle = {
fontSize: "18px",
color: "#666",
lineHeight: "1.6",
};

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
borderRadius: "8px",
margin: "100px auto",
maxWidth: "600px",
};

return (
<div style={containerStyle}>
<h1 style={headingStyle}>Task Details</h1>
<p style={paragraphStyle}>
This is the Task Details page. Here, you can view and edit individual
task details. You can also use the Modal component to edit task details.
</p>
<Modal>
<h2 style={{ fontSize: "24px", color: "#333" }}>Edit Task Details</h2>
<p style={{ fontSize: "18px", color: "#666" }}>
You can edit task details here. Please fill in the necessary
information and click the "Save" button.
</p>
</Modal>
</div>
);
};

export default TaskDetailsPage;