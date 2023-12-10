import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Handler hook for when Outside click dropdown close
let useClickOutside = (handler) => {
  let domNode = useRef();
 

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};


const DropdownItem = ({ label, to }) => {
  return (
    <Link
      to={to}
      className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium block"
    >
      {label}
    </Link>
  );
};

const Dropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  let domNode = useClickOutside(() => {
    setDropdownOpen(false);
  });

  return (
    <div ref={domNode} className="relative z-20 group">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="text-white px-3 py-2 ml-3 rounded-md z-20 text-sm font-medium focus:outline-none focus:border-blue-300"
      >
        Movies
        <svg
          className="text-white inline w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        className={`absolute bg-gray-800 z-20 text-white ${dropdownOpen ? 'block' : 'hidden'}`}
        style={{ top: '100%', left: 0, minWidth: '10rem' }}
      >
        <DropdownItem label="Now Playing" to="/nowplaying" />
        <DropdownItem label="Top Rated" to="/toprated" />
        <DropdownItem label="Upcoming" to="/upcoming" />
        <DropdownItem label="Popular" to="/popular" />
      </div>
    </div>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navbarRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
  
    document.addEventListener('click', handleClickOutside);
  
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navbarRef} className="bg-gray-900 p-4 sticky top-0 z-20" style={{ zIndex: '100' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between relative z-20">
        <Link to="/" className="text-white text-lg tracking-tight uppercase focus:outline-none focus:ring lg:text-2xl font-mono">
          MovieFiesta
        </Link>
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center p-2 text-gray-100 hover:text-white focus:outline-none focus:text-white md:hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                
              ></path>
            </svg>
          </button>
        </div>
        <div className={`flex-col items-center flex-grow ${open ? 'flex' : 'hidden'} md:pb-0 md:flex md:justify-end md:flex-row`}>
          <Dropdown />
          <Link
            to="/shows"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium ml-3"
          >
            Shows
          </Link>
      
          <Link
            to="/about"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium ml-3"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium ml-3"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};



export default Navbar;
