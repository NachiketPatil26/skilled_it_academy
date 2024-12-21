import React from 'react';
import { assets } from '../assets/assets'; // Ensure assets are properly imported

const InfoCards = ({ text, icon = assets.icon1 }) => {
  return (
    <div className="flex flex-row bg-purple text-white font-montserrat text-base p-2 rounded-lg shadow-md items-center">
      <div>
        <img src={icon} className="w-24 mr-6 " alt="icon" />
      </div>
      <div>
        <h1 className="text-lg font-medium w-72">{text}</h1>
      </div>
    </div>
  );
};

export default InfoCards;