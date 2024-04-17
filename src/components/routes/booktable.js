
import { useState } from "react";
import "./booktable.css"
import { Link, useNavigate } from "react-router-dom";

function BookTable() {


  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform further validation if needed
    alert(`Booking Details:
        Name: ${name}
        Date: ${date}
        Time: ${time}
        Guests: ${guests}
      `);
    navigate("/")
  };
  return (
    <div className="booking-form-container">
      <h2>Book a Table</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Number of Guests:</label>
          <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} required />
        </div>
        <button type="submit">Book</button>
        <br></br>
        <Link to={"/"}><button>Back</button></Link>

      </form>
    </div>

  )
}

export default BookTable