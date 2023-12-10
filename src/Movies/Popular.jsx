// PopularMovieList.js
import React, { useState, useEffect } from 'react';

const Popular = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/popular?api_key=fabf45cc64f54095c2866ebcd1a8dfa3'
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching popular movie data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-700 p-10 text-white min-h-screen">
      <h2 className="text-white text-center font-semibold text-3xl mb-4">Popular Movies</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <li key={movie.id} className="bg-gray-700 p-4 rounded-md">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className="w-74 h-74 object-cover rounded-md mb-2"
            />
            <h3 className="text-white text-lg font-semibold">{movie.title}</h3>
            <p className="text-gray-100 mb-2">Released: {movie.release_date}</p>
            <p className="text-yellow-400">Rating: {movie.vote_average}/10</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Popular;
