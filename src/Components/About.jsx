import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="flex items-center py-10 bg-gray-800 xl:h-screen min-h-screen font-poppins dark:bg-gray-800">
      <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <div className="relative">
              <img
                src="https://media-cache.cinematerial.com/p/500x/mnmpxslr/spider-man-across-the-spider-verse-greek-movie-poster.jpg?v=1684746411"
                alt=""
                className="relative z-40 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded"
              />
              <div className="absolute z-10 hidden w-full h-full bg-magenta-400 rounded-bl-[80px] rounded -bottom-6 right-6 lg:block"></div>
           
            </div>
          </div>
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
            <div className="relative">
              <h1 className="absolute -top-20 left-0 text-[20px] lg:text-[100px] text-gray-900 font-bold dark:text-gray-200 opacity-5 md:block hidden">
                About Us
              </h1>
              <h1 className="pl-2 text-3xl font-bold border-l-8 border-blue-400 md:text-5xl dark:text-white">
                Welcome to Cinema
              </h1>
            </div>
            <p className="mt-6 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
              This movie app is created by <span className="font-bold">Iqra</span> for the purpose of learning React.
              You can book tickets for your favourite movies and shows.I made this app using React, Tailwind CSS, and the Movie Database API.
              This app can be used to book tickets for your favourite movies and shows.There are so many movies and shows to choose from.
              There are category wise movies and shows. You can choose from the category you want to watch. You can also search for your favourite movies and shows. 
            </p>
            <Link
        to="/Shows"
              className="px-4 py-3 text-gray-50 transition-all transform bg-lime-900 rounded-[80px] hover:bg-green-500 dark:hover:text-gray-100 dark:text-gray-100 "
            >
              Book Tickets
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
