import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Booking.css";

function Booking() {
  const [bookingDate, setBookingDate] = useState("");
  const [numberOfDays, setNumberOfDays] = useState("");
  const [place, setPlace] = useState("");
  const [advancePayment, setAdvancePayment] = useState("payLater");
  const [advanceAmount, setAdvanceAmount] = useState("");
  const navigate = useNavigate();

  const handleBook = () => {
    alert("The car has been booked successfully!");
    // Update the user's profile booking details here
    navigate("/dashboard"); // Redirect to dashboard
  };

  return (
    <div className="booking-container">
      <h2>Booking</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleBook(); }}>
        <input
          type="date"
          placeholder="Booking Date"
          value={bookingDate}
          onChange={(e) => setBookingDate(e.target.value)}
          required
        /><br />
        <input
          type="number"
          placeholder="Number of Days"
          value={numberOfDays}
          onChange={(e) => setNumberOfDays(e.target.value)}
          required
        /><br />
        <input
          type="text"
          placeholder="Place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          required
        /><br />
        <select
          value={advancePayment}
          onChange={(e) => setAdvancePayment(e.target.value)}
        >
          <option value="payLater">Pay Later</option>
          <option value="advance">Pay in Advance</option>
        </select><br />
        {advancePayment === "advance" && (
          <input
            type="number"
            placeholder="Advance Payment Amount"
            value={advanceAmount}
            onChange={(e) => setAdvanceAmount(e.target.value)}
            required
          />
        )}
        <button type="submit">Book</button>
      </form>
    </div>
  );
}

export default Booking;