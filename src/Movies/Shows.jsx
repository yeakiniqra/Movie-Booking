import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Nowplaying from './Nowplaying';

const Shows = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [selectedMovies, setSelectedMovies] = useState([]);


  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=fabf45cc64f54095c2866ebcd1a8dfa3'
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setMovies(data.results.slice(0, 20)); // Get only the first 20 movies
    } catch (error) {
      console.error('Error fetching now playing movie data:', error);
    }
  };

  useEffect(() => {
    // Fetch initial movie data
    fetchData();

    // Fetch new movie data every 24 hours
    const fetchInterval = setInterval(() => {
      fetchData();
    }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds

    // Cleanup interval to avoid memory leaks
    return () => clearInterval(fetchInterval);
  }, []);
  

  const timeSlots = [
    '09:00 AM - 11:00 AM',
    '12:00 PM - 02:00 PM',
    '03:00 PM - 05:00 PM',
    '06:00 PM - 08:00 PM',
    '09:00 PM - 11:00 PM',
  ];
  // Scroll to the top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTimeSlotClick = (timeSlotIndex) => {
    const startIndex = timeSlotIndex * 2;
    const endIndex = startIndex + 2;
    const selectedMoviesForSlot = movies.slice(startIndex, endIndex);
  
    
    setSelectedMovies([...selectedMoviesForSlot]);
    setSelectedTimeSlot(timeSlots[timeSlotIndex]);
  };
  
  
  const handleBookNowClick = (selectedTimeSlot, selectedMovie) => {
    // Check if selectedMovie is an object before proceeding
    if (selectedMovie && typeof selectedMovie === 'object') {
      // Take the movie ID
      const movieId = selectedMovie.id;
  
      // Encode the movie ID
      const movieIdString = encodeURIComponent(movieId);
  
      // Navigate to the Ticket Booking page with time slot and selected movie as query parameters
      navigate(`/ticket-booking/${selectedTimeSlot}?movies=${movieIdString}`);
    } else {
      console.error('selectedMovie is not a valid object:', selectedMovie);
    }
  };
  
  
  
  

  return (
    <div className="bg-gray-800 p-10 min-h-screen">
      <h2 className="text-white text-2xl mb-4 font-bold text-center">Please Select Time Slot</h2>
      <div className="flex justify-center flex-wrap text-white mx-auto">
        {timeSlots.map((timeSlot, index) => (
          <button
            key={index}
            onClick={() => handleTimeSlotClick(index)}
            className={`bg-gray-700 p-2 m-2 rounded-md cursor-pointer ${
              selectedTimeSlot === timeSlot ? 'bg-green-500' : ''
            }`}
          >
            {timeSlot}
          </button>
        ))}
      </div>
      {selectedTimeSlot && (
  <div>
    <h3 className="text-white text-center font-semibold text-lg mt-4 mb-4">{`Movies for ${selectedTimeSlot}`}</h3>
    <ul className="flex flex-wrap justify-center">
      {selectedMovies.map((movie) => (
        <li key={movie.id} className="m-2 transition-transform transform hover:scale-105">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-74 h-64 object-cover rounded" />
          <p className="mt-4 text-lg text-white font-semibold">{`Title: ${movie.title}`}</p>
          <p className="text-gray-100">{`Release Date: ${movie.release_date}`}</p>
          <p className="text-yellow-400">{`Rating: ${movie.vote_average}`}</p>
          <button onClick={() => handleBookNowClick(selectedTimeSlot, movie)} className="bg-cyan-600 text-white px-4 py-2 rounded mt-2 hover:bg-violet-600">Book Now</button>
        </li>
      ))}
    </ul>
  </div>
)}

    </div>
  );
};

export default Shows;
