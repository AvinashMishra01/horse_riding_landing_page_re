


import React from 'react';
import { useSelector } from 'react-redux';
import LandingPage from './components/LandingPage';
import BookingForm from './components/BookingForm';
import ConfirmationPopup from './components/ConfirmationPopup';

const App = () => {
  const page = useSelector((state) => state.booking.page);

  return (
    <div className="App">
      {page === 'landing' && <LandingPage />}
      {page === 'booking' && <BookingForm />}
      {page === 'confirmation' && <ConfirmationPopup />}
      
    </div>
  );
};

export default App;
