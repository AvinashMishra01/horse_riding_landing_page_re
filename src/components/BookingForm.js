import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBookingDetails, setPage } from '../redux/bookingSlice';
import { sendCalendarInvite } from '../utils/calendarInvite';

const BookingForm = () => {
  const dispatch = useDispatch();
  const [horse, setHorse] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingDetails = { horse, date, time, name, email, phone };
    dispatch(setBookingDetails(bookingDetails));
    sendCalendarInvite(bookingDetails);
    dispatch(setPage('confirmation'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book Your Ride</h2>
      <label>
        Horse:
        <select value={horse} onChange={(e) => setHorse(e.target.value)}>
          <option value="" disabled>Select a horse</option>
          <option value="Thunder">Thunder</option>
          <option value="Lightning">Lightning</option>
          <option value="Blaze">Blaze</option>
          <option value="Storm">Storm</option>
        </select>
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </label>
      <label>
        Time:
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
      </label>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Phone:
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;
