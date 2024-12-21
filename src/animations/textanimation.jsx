import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

function TextReveal({ text }) {
  const [isInView, setIsInView] = useState(false); // State to track if the component is in view
  const sectionRef = useRef(null); // Ref to track the section

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Set in view when the section is visible
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Clean up observer on unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Split the text into lines using newline characters (\n)
  const lines = text.split("\n");

  return (
    <div ref={sectionRef} className="TextReveal">
      {lines.map((line, lineIndex) => (
        <motion.div
          key={lineIndex}
          className="line"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }} // Trigger animation when in view
          transition={{
            duration: 1.5,
            delay: lineIndex * 0.3, // Stagger line-by-line
            ease: "easeOut",
          }}
        >
          {line.split(" ").map((word, i) => (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: 0 }}
              transition={{
                duration: 0.7,
                delay: i * 0.1 + lineIndex * 0.2, // Stagger word-by-word
                ease: "easeOut",
              }}
              key={i}
              className="word"
            >
              {word}{" "}
            </motion.span>
          ))}
        </motion.div>
      ))}
    </div>
  );
}

// Prop validation (optional)
TextReveal.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextReveal;
