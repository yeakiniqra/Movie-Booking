import React from 'react'
import { Link } from 'react-router-dom';
import Accordion from './Accordion';



function Home() {
  return (
    <div>
         <section className="text-gray-600 body-font bg-gray-800">
 
            
      <div className="max-w-5xl pt-2 pb-24 mx-auto relative">
      
        <h1 className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
        Book Your Cinematic Journey Today
        </h1>
        <h2 className="text-lg font-4 font-semibold pt-4 pb-5 text-gray-400 text-center">
        Step into the Spotlight,Where Every Seat is a Front Row Experience
        </h2>
        <div className="flex flex-col items-center md:flex-row md:justify-center">
      <Link
        to="/Shows"
        className="inline-flex items-center py-3 rounded-lg font-semibold text-black transition duration-500 ease-in-out transform bg-transparent bg-white px-7 text-md md:mt-0 hover:text-black hover:bg-lime-500 focus:shadow-outline mb-4 md:mb-0"
      >
        <span className="justify-center">Book Show</span>
      </Link>
      <Link
        to="/Shows"
        className="inline-flex items-center py-3 rounded-lg font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform ml-0 md:ml-11 bg-blue-500 px-14 text-md hover:bg-lime-500 md:mt-0 focus:shadow-outline"
      >
        <span className="justify-center">Purchase Tickets</span>
      </Link>
    </div>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto">
        <img
          className="object-cover object-center w-1/2 border shadow-md"
          alt="Placeholder Image"
          src="https://shorturl.at/ruMP9"
        ></img>
      </div>
      <h2 className="pt-10 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-6xl md:text-6xl">
        Trending Movies and Shows for you to watch.
      </h2>
      <br></br>
      <p className="mx-auto text-xl text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3">
        watch movies with your friends and family and enjoy the best experience with us.
      </p>
      <div className="pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3">
        <div className="ktq4">
         
        <Accordion />
          
        </div>
      </div>
    </section>
    </div>
  )
}

export default Home
