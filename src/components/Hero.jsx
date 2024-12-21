import React from 'react';
import { assets } from '../assets/assets';
import TextReveal from '../animations/textanimation';
import textboxImage from '../assets/textbox.png';
import Counter from '../animations/counter';
import { gsap } from 'gsap';

const Hero = () => {

   
    gsap.fromTo(
        ".slide-up-item",
        {
          y: 100,
          opacity: 0,
          scale: 1, // Start slightly scaled down
        },
        {
          y: 0,
          opacity: 1,
          scale: 1, // End at full scale
          duration: 1,
          ease: "easeOut",
          stagger: 0.3,
        }
      );

  return (

    <>
      <div className="relative w-full flex items-center justify-center">
        {/* Background Image */}
        <img
          src={assets.hero_bg}
          className="w-full h-full object-cover"
          alt="Hero background"
        />

        {/* Text Container */}
        <div className="absolute flex flex-col items-center sm:items-start text-white text-start lg:-translate-x-56 lg:-translate-y-7  px-4 sm:px-12 md:px-16 lg:px-20">
          <h1 className="text-base sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-extrabold leading-tight">
            <TextReveal text={"Your Trusted\nPartner in the"} />
          </h1>
          <p className="mt-3 text-base sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-extrabold rounded-lg px-2 py-2 -translate-x-2 bg-gradient-to-r from-yellow via-pink to-gradpurple">
            <TextReveal text={"Coding Journey"} />
          </p>
        </div>
      </div>



      {/* Textbox Section */}
      <div
        className="z-1 hidden lg:flex items-center justify-between gap-4 text-bold font-montserrat 
                bg-no-repeat bg-center bg-clip-border text-sm sm:text-base px-4 sm:px-8 md:px-10 
                py-3 sm:py-6 w-11/12 sm:w-4/5 md:w-3/5 mx-auto rounded-3xl shadow-lg -translate-y-20 drop-shadow-lg"
        style={{
          backgroundImage: `url(${textboxImage})`,
        }}
      >
        {/* Left Section - Trainer Icon and Text */}
        <div className="flex flex-col justify-center items-center text-center sm:text-left slide-up-item">
          <img src={assets.trainer_icon} className="w-16 mb-2 mt-2" alt="Trainer Icon" />
          <p className="text-xl sm:text-xl text-white text-center font-extrabold drop-shadow-lg">
            Highly Skilled Professional <br /> Corporate Trainers
          </p>
        </div>

        {/* Right Section - Stats */}
        <div className="flex flex-col sm:flex-row items-center text-white justify-center gap-2">
          <div className="flex flex-col items-center px-2 slide-up-item">
            <img src={assets.teacher} className="w-20" alt="" />
            <Counter target={35000} />
            <p className="text-center text-sm font-semibold drop-shadow-lg">Students Trained</p>
          </div>
          <div className="flex flex-col items-center px-2 slide-up-item">
            <img src={assets.hiring} className="w-20" alt="" />
            <Counter target={1000} delay={0} />
            <p className="text-center text-sm font-semibold drop-shadow-lg">Hiring Recruiters</p>
          </div>
          <div className="flex flex-col items-center px-2 slide-up-item">
            <img src={assets.graduate} className="w-20" alt="" />
            <Counter target={12000} delay={0} />
            <p className="text-center text-sm font-semibold drop-shadow-lg">Students Placed</p>
          </div>
        </div>
      </div>




    </>
  );
};

export default Hero;
