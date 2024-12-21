import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { assets, col1, col2, col3 } from "../assets/assets"; // Ensure these arrays are properly defined
import InfoCards from "./InfoCards.jsx";

const MotionColumn = ({ children, isInView, initialX = 0, initialY = 0 }) => {
  return (
    <motion.div
      className="flex flex-col gap-3"
      initial={{ opacity: 0, x: initialX, y: initialY }}
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : initialX, y: isInView ? 0 : initialY }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
        staggerChildren: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
};

const Benefits = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="bg-black flex flex-col justify-center items-center py-10">
      {/* Heading Section */}
      <div className="flex flex-row items-center mb-10">
        <img
          src={assets.goldenwing}
          alt="Golden Wing"
          className="w-32 mr-5"
        />
        <h1
          className="inline-block text-transparent bg-clip-text font-extrabold text-3xl"
          style={{
            background:
              "linear-gradient(to right, #f8cc47 0%, #e1a04a 25%, #eed783 70%, #f2b753 100%)",
            WebkitBackgroundClip: "text", // Needed for Safari support
          }}
        >
          Unique Benefits & Program Highlights
        </h1>
        <img
          src={assets.goldenwing}
          alt="Golden Wing"
          className="w-32 ml-5 scale-x-[-1]"
        />
      </div>

      {/* Columns Section */}
      <div className="flex flex-row justify-center items-center gap-10">
        {/* Left Column */}
        <MotionColumn isInView={isInView} initialX={-100}>
          {col1.map((row1, index) => (
            <InfoCards key={index} icon={row1.icon} text={row1.text} />
          ))}
        </MotionColumn>

        {/* Middle Column */}
        <MotionColumn isInView={isInView} initialY={100}>
          {col2.map((row2, index) => (
            <InfoCards key={index} icon={row2.icon} text={row2.text} />
          ))}
        </MotionColumn>

        {/* Right Column */}
        <MotionColumn isInView={isInView} initialX={100}>
          {col3.map((row3, index) => (
            <InfoCards key={index} icon={row3.icon} text={row3.text} />
          ))}
        </MotionColumn>
      </div>
    </div>
  );
};

export default Benefits;
