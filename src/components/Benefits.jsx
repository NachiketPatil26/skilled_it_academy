import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { assets, col1, col2, col3 } from "../assets/assets";
import InfoCards from "./InfoCards";

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
        threshold: 0.25, // Trigger when 50% of the section is visible
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
    <div
      ref={sectionRef}
      className="bg-black flex flex-col justify-center items-center py-10"
    >
      {/* Heading Section */}
      <div className="flex flex-row items-center">
         <motion.div className="flex flex-row items-center"
              
              initial={{ opacity: 0, y: 50 }} // Cards start from below
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut", // Smooth easing
              }}
            >

        <img
          src={assets.goldenwing}
          alt="Golden Wing"
          className="w-32 mr-5 mb-10"
        />
             
        <h1
          className="inline-block text-transparent bg-clip-text font-extrabold text-3xl mt-10 mb-10"
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
          className="w-32 ml-5 mb-10 scale-x-[-1]"
        />
         
         </motion.div>
      </div>

      {/* Columns Section */}
      <div className="flex flex-row justify-center items-center gap-5">
        {/* Left Column */}
        <motion.div
          className="flex flex-col gap-3 col-left"
          initial={{ opacity: 0, x: -100, y: 100 }} // Start from bottom-left
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -100, y: isInView ? 0 : 0 }} // Animate to normal position
          transition={{
            duration: 1.5,
            ease: "easeInOut", // Use easeInOut for smooth acceleration and deceleration
            staggerChildren: 0.2, // Stagger child animations in this column
          }}
        >
          {col1.map((row1, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }} // Cards start from below
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }} // Cards animate to their normal position
              transition={{
                duration: 0.8,
                delay: index * 0.2, // Stagger each card with a delay
                ease: "easeInOut", // Smooth easing
              }}
            >
              <InfoCards icon={row1.icon} text={row1.text} />
            </motion.div>
          ))}
        </motion.div>

        {/* Middle Column */}
        <motion.div
          className="flex flex-col gap-3 col-middle"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut", // Use easeInOut for smooth acceleration and deceleration
            staggerChildren: 0.2,
          }}
        >
          {col2.map((row2, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }} // Cards start from below
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2, // Stagger each card with a delay
                ease: "easeInOut", // Smooth easing
              }}
            >
              <InfoCards icon={row2.icon} text={row2.text} />
            </motion.div>
          ))}
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="flex flex-col gap-3 col-right"
          initial={{ opacity: 0, x: 100, y: 100 }} // Start from bottom-right
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 100, y: isInView ? 0 : 0 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut", // Use easeInOut for smooth acceleration and deceleration
            staggerChildren: 0.2,
          }}
        >
          {col3.map((row3, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }} // Cards start from below
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2, // Stagger each card with a delay
                ease: "easeInOut", // Smooth easing
              }}
            >
              <InfoCards icon={row3.icon} text={row3.text} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Benefits;
