import React from 'react';

const TestimonialCard = ({ 
  name = "Swati Disuza", 
  testimonial = `"These coding videos are amazing! As a beginner, I was able to grasp
  complex concepts easily, and the step-by-step tutorials made learning
  fun. The lessons are clear, engaging, and perfect for all skill levels.
  I’ve gained so much confidence in my coding abilities!"` 
}) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg w-64 p-6 text-center relative">
      {/* Top Circle */}
      <div className="absolute -top-16 w-32 h-32 rounded-full bg-lime flex items-center justify-center"></div>
      
      {/* Star Ratings */}
      <div className="mt-10 mb-2 flex justify-center">
        <span className="text-yellow text-lg">
          &#9733; &#9733; &#9733; &#9733; &#9733;
        </span>
      </div>

      {/* Name */}
      <h3 className="text-xl font-bold text-purple mb-2">{name}</h3>

      {/* Testimonial */}
      <p className="text-black text-sm">
        {testimonial}
      </p>
    </div>
  );
};

export default TestimonialCard;