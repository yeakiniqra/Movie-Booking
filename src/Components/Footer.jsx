import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 font-sans dark:bg-gray-900">
    <div className="container mx-auto flex flex-col items-center justify-center px-6 py-6">
      <div className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white text-center">
        Subscribe to our newsletter to get updates.
      </div>

      <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
        <input
          id="text-input"
          type="text"
          className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
          placeholder="Email Address"
        />

        <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
          Subscribe
        </button>
      </div>

      <p className="font-sans p-8 text-start text-gray-700 md:text-center md:text-lg md:p-4">
         Developed by © <span className='font-bold'> Yeakin Iqra</span>
      </p>
    </div>
  </footer>
  
  );
};

export default Footer;
