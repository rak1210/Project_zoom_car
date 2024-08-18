import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Payment.css";

function Payment() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [upiId, setUpiId] = useState(""); // Optional field for display
  const navigate = useNavigate();

  const handlePayment = () => {
    alert("You have received a payment request to your UPI ID.");
    // Handle the payment logic here
    navigate("/dashboard"); // Redirect to dashboard
  };

  return (
    <div className="payment-container">
      <h2>Make Payment</h2>
      <form onSubmit={(e) => { e.preventDefault(); handlePayment(); }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br />
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        /><br />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        /><br />
        <input
          type="text"
          placeholder="UPI ID (eg. abc@upi)"
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
          required
        /><br />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}

export default Payment;