import React from 'react';
import { assets } from '../assets/assets';

const Ticker = () => {
  const logos = [
    assets.zensar,
    assets.kayako,
    assets.caterpillar,
    assets.lenskart,
    assets.webex,
    assets.tcs,
    assets.serco,
    assets.karvy,
    assets.hsbc,
    assets.asus
  ];

  // Create groups of logos plus extra sets for seamless looping
  const getLogoGroups = () => {
    const firstGroup = logos.slice(0, 5);
    const secondGroup = logos.slice(5, 10);
    // Return 4 sets to ensure smooth infinite loop
    return [...firstGroup, ...secondGroup, ...firstGroup, ...secondGroup];
  };

  return (
    <div className="w-full bg-black overflow-hidden py-8">
      <div className="relative flex w-full">
        <div className="flex animate-slide-groups">
          {/* Render all logo groups */}
          {getLogoGroups().map((logo, index) => (
            <div 
              key={index} 
              className="w-1/5 px-4 flex items-center justify-center shrink-0"
            >
              <img
                src={logo}
                alt={`logo-${index}`}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker;