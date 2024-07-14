
import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../redux/bookingSlice';
// import { motion } from 'framer-motion';
import './landingpage.css';
import { Carousel } from './carouselComponent/Carousel';
import slideData from '../crousel/carouselData.json'
import Footer from './footer/Footer';
const horses = [
 {
  name : "Astable-1",
 horseDetail : [ 
    { id: 1, name: 'Thunder', image: '/assests/horses/horse2.jpg' },
  { id: 2, name: 'Lightning', image: '/assests/horses/horse3.jpg' },
  { id: 3, name: 'Blaze', image: '/assests/horses/horse5.jpg' }, 
  { id: 4, name: 'Storm', image: '/assests/horses/horse6.jpg' }]
},
{
  name : "Astable-2",
 horseDetail : [ 
    { id: 1, name: 'Thunder', image: '/assests/horses/horse8.jpg' },
  { id: 2, name: 'Lightning', image: '/assests/horses/horse14.jpg' },
  { id: 3, name: 'Blaze', image: '/assests/horses/horse13.jpg'},
  { id: 4, name: 'Storm', image: '/assests/horses/horse11.jpg' }]
},
{
  name : "Astable-3",
  horseDetail :[ 
    { id: 1, name: 'Thunder', image: '/assests/horses/horse11 1.jpg' }, //4 1 7 9 10 12
  { id: 2, name: 'Lightning', image: '/assests/horses/horse22.jpg' },
  { id: 3, name: 'Blaze', image: '/assests/horses/horse55.jpg' },
  { id: 4, name: 'Storm', image: '/assests/horses/horse222.jpg' }]
},
{
 name : "Astable-4",
 horseDetail :[ 
    { id: 1, name: 'Thunder', image: '/assests/horses/horse233.jpg' },
  { id: 2, name: 'Lightning', image: '/assests/horses/horse333.jpg' },
  { id: 3, name: 'Blaze', image: '/assests/horses/horse4.jpg' },
  { id: 4, name: 'Storm', image: '/assests/horses/horse1.jpg' }]
},
{
    name: "Astable-5",
  horseDetail :[ 
    { id: 1, name: 'Thunder', image:'/assests/horses/horse7.jpg'},
  { id: 2, name: 'Lightning', image: '/assests/horses/horse17.jpg' },
  { id: 3, name: 'Blaze', image: '/assests/horses/horse9.jpg' },
  { id: 4, name: 'Storm', image: '/assests/horses/horse12.jpg' }]
}


];

const LandingPage = () => {
  const dispatch = useDispatch();

  const handleBookNow = () => {
    dispatch(setPage('booking'));
  };

  return (
    <>
    <div className='heador'>
    <h1 className='heading'>Horse Ride Booking System</h1>
    </div>
      <div className='carouselDiv'>
      <Carousel data={slideData.slides} />
      </div>
    <div className="landing-page">
     
      <div className="horses">
        { horses.map((stab,index)=>(
          <div className="astable">
           <h1>{stab.name}</h1>
           <div className="astable2">
            {stab.horseDetail.map(horse => (
              
              <div key={horse.id} className="horse-card">
                <img src={horse.image} alt={horse.name} />
                <h2>{horse.name}</h2>
                <button onClick={handleBookNow}>Book Now</button>
              </div>
             
            ))}
             </div>
            </div>
        ))
        
        }
      </div>
    </div>
    <div className='footer'>
      <Footer />
    </div>
    </>
  );
};

export default LandingPage;
