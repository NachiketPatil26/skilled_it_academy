import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

function TextReveal({ text }) {
  // Split the text into lines using newline characters (\n)
  const lines = text.split("\n");

  return (
    <div className="TextReveal">
      {lines.map((line, lineIndex) => (
        <motion.div
          key={lineIndex}
          className="line"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: lineIndex * 0.3, // Stagger line-by-line
            ease: "easeOut",
          }}
        >
          {line.split(" ").map((word, i) => (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
