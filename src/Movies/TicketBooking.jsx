import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TicketBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const movieId = searchParams.get("movies");

  if (!movieId) {
    // Redirect or handle missing query parameter as needed
    return null;
  }

 

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [numberOfTickets, setNumberOfTickets] = useState(1);
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");

  // Mapping of time slots to corresponding ticket prices
  const timeSlotTicketPrices = {
    "09:00 AM - 11:00 AM": 8,
    "12:00 PM - 02:00 PM": 10,
    "03:00 PM - 05:00 PM": 12,
    "06:00 PM - 08:00 PM": 15,
    "09:00 PM - 11:00 PM": 18,
  };

  const [ticketPrice, setTicketPrice] = useState(
    timeSlotTicketPrices[decodeURIComponent(location.pathname.split("/").pop())]
  );
  // Scroll to the top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=fabf45cc64f54095c2866ebcd1a8dfa3`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch movie data: ${response.status}`);
        }
        const movieData = await response.json();
        setSelectedMovie(movieData);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovieData();
  }, [movieId]);

  const handleNumberOfTicketsChange = (event) => {
    const tickets = parseInt(event.target.value, 10);
    setNumberOfTickets(isNaN(tickets) ? 0 : tickets);
    // Update total price based on the number of tickets and ticket price
    setTotalPrice(tickets * ticketPrice);
  };

  const [totalPrice, setTotalPrice] = useState(numberOfTickets * ticketPrice);

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleConfirmBooking = () => {
    alert(
      `Your booking has been confirmed. You will receive a confirmation email shortly at ${email}.`
    );

    navigate("/");
  };

  return (
    <div className="bg-gray-800  p-10 min-h-screen">
      <h2 className="text-white text-2xl mb-4 font-bold text-center">
        Ticket Booking
      </h2>
      <p className="text-white font-semibold mb-4">
        Time Slot: {decodeURIComponent(location.pathname.split("/").pop())}
      </p>
      {selectedMovie && (
        <ul>
          <li key={selectedMovie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
              alt={selectedMovie.title}
              className="w-74 h-64 object-cover rounded-lg"
            />
            <p className="mt-4 text-lg text-white font-semibold">{`Title: ${selectedMovie.title}`}</p>
            <p className="text-gray-100">{`Release Date: ${selectedMovie.release_date}`}</p>
            <p className="text-green-500 font-semibold mb-4">{`Price of the Ticket: $${ticketPrice}`}</p>

            <div className="mb-4">
              <label
                htmlFor="numberOfTickets"
                className="block text-sm font-medium text-gray-100"
              >
                Number of Tickets:
              </label>
              <input
                type="number"
                id="numberOfTickets"
                value={numberOfTickets}
                onChange={handleNumberOfTicketsChange}
                className="mt-1 p-2 mb-3 w-full md:w-1/2 lg:w-1/3 text-black rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="totalPrice"
                className="block text-sm font-medium text-gray-100"
              >
                Total Price:
              </label>
              <input
                type="text"
                id="totalPrice"
                value={`$${isNaN(totalPrice) ? 0 : totalPrice}`}
                readOnly
                className="mt-1 p-2 mb-3 w-full md:w-1/2 lg:w-1/3 text-black rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </li>
        </ul>
      )}
      <div className="mb-4">
        <label
          htmlFor="contactNumber"
          className="block text-sm font-medium text-gray-100"
        >
          Contact Number:
        </label>
        <input
          type="tel"
          id="contactNumber"
          value={contactNumber}
          onChange={handleContactNumberChange}
          className="mt-1 p-2 w-full md:w-1/2 lg:w-1/3 text-black rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-100"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={handleEmailChange}
          className="mt-1 p-2 mb-3 w-full md:w-1/2 lg:w-1/3 text-black rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <button
        onClick={handleConfirmBooking}
        className="bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-indigo-300"
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default TicketBooking;
