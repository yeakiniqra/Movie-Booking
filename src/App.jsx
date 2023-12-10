import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer';
import Nowplaying from './Movies/Nowplaying';
import Upcoming from './Movies/Upcoming';
import Toprated from './Movies/Toprated';
import Popular from './Movies/Popular';
import Shows from './Movies/Shows';
import TicketBooking from './Movies/TicketBooking';
import Contact from './Components/Contact';
import About from './Components/About';



function App() {
 

  return (
    <Router>
    <>
      <Navbar />
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/Nowplaying" element={<Nowplaying />} />
        <Route path="/Upcoming" element={<Upcoming />} />
        <Route path="/Toprated" element={<Toprated />} />
        <Route path="/Popular" element={<Popular />} />
        <Route path="/Shows" element={<Shows />} />
        <Route path="/ticket-booking/:timeSlot" element={<TicketBooking />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
       
      </Routes>
      <Footer />
    </>
  </Router>
   
  )
}

export default App
