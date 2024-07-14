import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../redux/bookingSlice';

const ConfirmationPopup = () => {
  const dispatch = useDispatch();
  const bookingDetails = useSelector((state) => state.booking.bookingDetails);

  const handleBackToHome = () => {
    dispatch(setPage('landing'));
  };

  return (
    <div className="confirmation-popup">
      <h2>Booking Confirmed!</h2>
      <p>Thank you for booking a ride with us.</p>
      <p><strong>Horse:</strong> {bookingDetails.horse}</p>
      <p><strong>Date:</strong> {bookingDetails.date}</p>
      <p><strong>Time:</strong> {bookingDetails.time}</p>
      <button onClick={handleBackToHome}>Back to Home</button>
    </div>
  );
};

export default ConfirmationPopup;
