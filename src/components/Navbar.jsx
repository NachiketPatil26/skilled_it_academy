import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white shadow-lg sticky top-0 z-50">

      {/* Main Navbar Container */}
      <div className="flex justify-between items-center px-3 py-2 max-w-screen-xl mx-auto">

        {/* Logo and Brand */}
        <div className="flex items-center">
          <img src={assets.logo} className="w-28" alt="logo" />
          <div className="">
            <p className="text-xl sm:text-2xl font-montserrat font-extrabold text-darkpurple leading-none">Skills IT Academy</p>
            <p className="text-sm sm:text-base text-center font-montserrat font-semibold text-lightpurple leading-none">IT Training & Placement</p>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4  mr-20">
          <Link 
            to="/" 
            className="text-lg font-montserrat text-darkpurple rounded px-1.5 font-semibold transition-colors duration-300 hover:bg-lightpurple hover:text-white"
          >
            HOME
          </Link>
          <Link 
            to="/batches" 
            className="text-lg font-montserrat text-darkpurple rounded px-1.5 font-semibold transition-colors duration-300 hover:bg-lightpurple hover:text-white"
          >
            BATCHES
          </Link>
          <Link 
            to="/contact" 
            className="text-lg font-montserrat text-darkpurple rounded px-1.5 font-semibold transition-colors duration-300 hover:bg-lightpurple hover:text-white"
          >
            CONTACT
          </Link>
          <Link 
            to="/more" 
            className="text-lg font-montserrat text-darkpurple rounded px-1.5 font-semibold transition-colors duration-300 hover:bg-lightpurple hover:text-white "
          >
            MORE 
            
          </Link> {/* dropdown to be added */}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button 
            className="text-darkpurple focus:outline-none" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Links Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white absolute top-16 left-0 right-0 shadow-lg z-40">
          <div className="flex flex-col items-center space-y-4 py-6">
            <Link 
              to="/" 
              className="text-lg font-montserrat text-darkpurple font-semibold transition-colors duration-300 hover:text-lightpurple"
              onClick={() => setMenuOpen(false)}
            >
              HOME
            </Link>
            <Link 
              to="/batches" 
              className="text-lg font-montserrat text-darkpurple font-semibold transition-colors duration-300 hover:text-lightpurple"
              onClick={() => setMenuOpen(false)}
            >
              BATCHES
            </Link>
            <Link 
              to="/contact" 
              className="text-lg font-montserrat text-darkpurple font-semibold transition-colors duration-300 hover:text-lightpurple"
              onClick={() => setMenuOpen(false)}
            >
              CONTACT
            </Link>
            <Link 
              to="/more" 
              className="text-lg font-montserrat text-darkpurple font-semibold transition-colors duration-300 hover:text-lightpurple"
              onClick={() => setMenuOpen(false)}
            >
              MORE
            </Link>
          </div>
        </div>
      )}

    </div>
  );
}

export default Navbar;
