import React from "react";

const CheckoutPage = () => {
  const pageStyle = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, white%, #fad0c4 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  };

  const containerStyle = {
    maxWidth: "600px",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
    padding: "30px",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "28px",
    color: "#333",
    marginBottom: "20px",
  };

  const paragraphStyle = {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.6",
    marginBottom: "20px",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    textAlign: "left",
  };

  const labelStyle = {
    fontSize: "14px",
    color: "#333",
    marginBottom: "5px",
  };

  const inputStyle = {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    width: "100%",
    transition: "box-shadow 0.3s ease, border-color 0.3s ease",
  };

  const inputFocusStyle = {
    borderColor: "#007bff",
    boxShadow: "0 0 8px rgba(0, 123, 255, 0.5)",
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
    transition: "background-color 0.3s ease, transform 0.2s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b3",
  };

  const handleClick = (e) => {
    e.preventDefault();
    alert("Checkout completed!");
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>Checkout</h1>
        <p style={paragraphStyle}>
          Please fill out the form below to complete your purchase.
        </p>
        <form style={formStyle} onSubmit={handleClick}>
          <div>
            <label style={labelStyle} htmlFor="name">
              Name:
            </label>
            <input
              id="name"
              type="text"
              style={inputStyle}
              placeholder="Enter your full name"
              onFocus={(e) => (e.target.style.boxShadow = inputFocusStyle.boxShadow)}
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="email">
              Email:
            </label>
            <input
              id="email"
              type="email"
              style={inputStyle}
              placeholder="Enter your email address"
              onFocus={(e) => (e.target.style.boxShadow = inputFocusStyle.boxShadow)}
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="payment-method">
              Payment Method:
            </label>
            <select
              id="payment-method"
              style={inputStyle}
              onFocus={(e) => (e.target.style.boxShadow = inputFocusStyle.boxShadow)}
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            >
              <option value="">Select a payment method</option>
              <option value="credit card">Credit Card</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
          <div>
            <label style={labelStyle} htmlFor="card-number">
              Card Number:
            </label>
            <input
              id="card-number"
              type="text"
              style={inputStyle}
              placeholder="Enter your card number"
              onFocus={(e) => (e.target.style.boxShadow = inputFocusStyle.boxShadow)}
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="expiration">
              Expiration Date:
            </label>
            <input
              id="expiration"
              type="text"
              style={inputStyle}
              placeholder="MM/YY"
              onFocus={(e) => (e.target.style.boxShadow = inputFocusStyle.boxShadow)}
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="cvv">
              CVV:
            </label>
            <input
              id="cvv"
              type="text"
              style={inputStyle}
              placeholder="Enter your CVV"
              onFocus={(e) => (e.target.style.boxShadow = inputFocusStyle.boxShadow)}
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />
          </div>
          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
            onMouseDown={(e) => (e.target.style.transform = "scale(0.95)")}
            onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
          >
            Complete Checkout
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;