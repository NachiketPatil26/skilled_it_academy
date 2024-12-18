import React from "react";

const Card = ({ title, duration, education, rating, learners, badgeText }) => {
  return (
    <div className="w-80 mt-10 rounded-lg drop-shadow-lg overflow-hidden font-sans">
      {/* Card Top Section */}
      <div className="bg-gray h-32 relative">
        {badgeText && (
          <div className="z-0 absolute top-20 right-4 bg-pink text-white text-xs font-bold px-3 py-1 rounded-t-lg">
            <span className="italic text-xs font-montserrat font-medium leading-none">{badgeText.split(" ")[0]}</span><br />
            <span className="font-montserrat text-base ">{badgeText.split(" ")[1]}</span> 
            <span> </span>
            <span className="font-montserrat text-base">{ badgeText.split(" ")[2]}</span>
            <span> </span>
            <span className="text-base text-white">★</span>
          </div>
        )}  
      </div>

      {/* Card Bottom Section */}
      <div className="z-10 bg-purple font-montserrat text-gray  p-4 px-5">
        <h2 className="text-3xl font-bold mb-4 text-neon-yellow">{title}</h2>
        <p className="flex justify-between text-sm mb-1">
          <span className="text-gray text-base font-medium">Duration </span>
          <span> - </span>
          <span className="font-bold text-base">{duration}</span>
        </p>
        <p className="flex justify-between text-sm">
          <span className="text-gray text-base font-medium -translate-y-3">Education</span>
          <span className="-translate-y-3"> - </span>
          <span className="font-bold text-base -translate-y-3">{education}</span>
        </p>
        <div className="flex items-center">
          <span className="text-neon-yellow text-xl mr-2">★</span>
          <span className="font-bold text-neon-yellow text-lg">{rating}</span>
          <span className="ml-2 mt-1 text-xs text-neon-yellow italic">{learners} Learners</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
