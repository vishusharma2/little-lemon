import React from "react";
import { useState } from "react";

const BookingForm = (props) => {
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <div className="booking-page">
      <div className="container">
        <div className="booking-header">
          <h1>Reserve a Table</h1>
          <p>
            Please fill out the form below to make your reservation at Little
            Lemon.
          </p>
        </div>
        <form onSubmit={handleSumbit} className="booking-form">
          <fieldset>
            <div className="form-group">
              <label htmlFor="book-date">Choose Date</label>
              <input
                id="book-date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                type="date"
                required
                aria-describedby="date-help"
              />
              <small id="date-help" className="form-help">
                Select your preferred date
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="book-time">Choose Time</label>
              <select
                id="book-time"
                value={times}
                onChange={(e) => setTimes(e.target.value)}
                required
                aria-describedby="time-help"
              >
                <option value="">Select a Time</option>
                {props.availableTimes.availableTimes.map((availableTimes) => {
                  return <option key={availableTimes}>{availableTimes}</option>;
                })}
              </select>
              <small id="time-help" className="form-help">
                Available times for your selected date
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="book-guests">Number of Guests</label>
              <input
                id="book-guests"
                min="1"
                value={guests}
                onChange={(e) => {
                  setGuests(e.target.value);
                }}
                type={"number"}
                placeholder="0"
                max={10}
                required
                aria-describedby="guests-help"
              />
              <small id="guests-help" className="form-help">
                Maximum 10 guests per reservation
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="book-occasion">Occasion</label>
              <select
                id="book-occasion"
                key={occasion}
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
                aria-describedby="occasion-help"
              >
                <option value="">Select an Option</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Business">Business</option>
                <option value="Casual">Casual</option>
              </select>
              <small id="occasion-help" className="form-help">
                Let us know the occasion for your visit
              </small>
            </div>
            <div className="form-group">
              <input
                aria-label="Submit reservation"
                type={"submit"}
                value={"Make Your Reservation"}
                className="submit-button"
              />
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
