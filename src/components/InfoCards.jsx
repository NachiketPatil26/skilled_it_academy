import React from 'react';
import { assets } from '../assets/assets'; // Ensure assets are properly imported

const InfoCards = ({ text, icon = assets.icon1 }) => {
  return (
    <div className="flex flex-col sm:flex-row bg-purple text-white font-montserrat text-base p-4 rounded-lg shadow-md items-center gap-4">
      {/* Icon Section */}
      <div className="flex-shrink-0">
        <img src={icon} className="w-24 h-24 sm:w-32 sm:h-32" alt="icon" />
      </div>

      {/* Text Section */}
      <div className="flex-grow">
        <h1 className="text-lg font-medium text-center sm:text-left w-full truncate">{text}</h1>
      </div>
    </div>
  );
};

export default InfoCards;
