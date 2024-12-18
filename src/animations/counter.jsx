import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

export default function Counter({ target, delay = 0.5 }) {
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0); // To store the displayed value
  const rounded = useTransform(count, (latest) => Math.round(latest));  

  useEffect(() => {
    // Start animation with the specified delay
    const animation = animate(count, target, {
      duration: 1.5,         // Animation duration
      ease: [0.25, 0.8, 0.25, 1],  // Custom easing for smoother, bouncy feel
      delay: delay,        // Use the passed delay prop (default is 0.5)
    });

    // Update the displayed value when the count updates
    const unsubscribe = rounded.onChange((latest) => {
      setDisplayValue(latest); // Update the state with the rounded value
    });

    return () => {
      animation.stop();
      unsubscribe();
    };
  }, [target, delay, count, rounded]);

  return (
    <motion.h1 
      style={{ fontSize: "2rem", fontWeight: "bold", color: "white", display: "inline-flex", alignItems: "baseline" }}
    >
      {displayValue} {/* Now we render the state value, which is the final rounded number */}
      <span style={{ fontSize: "2rem", marginLeft: "5px", fontWeight: "bold", color: "white" }}>+</span>
    </motion.h1>
  );
}
