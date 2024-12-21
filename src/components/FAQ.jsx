import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { assets } from "../assets/assets";
import { color } from "framer-motion";


const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const answerRefs = useRef([]);

  const questions = [
    {
      question: "What is the refund policy?",
      answer:
        "Skills IT Academy operates a strict no-refunds policy for all purchased paid courses. Once a course purchase is confirmed, payment cannot be refunded. This policy applies to all courses, irrespective of the price, duration, or the learner's progress within.",
    },
    {
      question: "What courses does Kiran Academy offer?",
      answer: "Kiran Academy offers a variety of courses in technology, business, and design.",
    },
    {
      question: "Does Skills IT provide 100% placement assistance?",
      answer: "Skills IT Academy provides career guidance and placement assistance, but 100% placement is not guaranteed.",
    },
    {
      question: "What is the duration of each course?",
      answer: "Course durations vary depending on the program, ranging from a few weeks to several months.",
    },
    {
      question: "Will I get any study material with the course?",
      answer: "Yes, all courses include comprehensive study materials and resources to support your learning.",
    },
  ];

  // To manage the GSAP animation for the answer content and arrow
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    if (activeIndex !== null) {
      // Expand the answer with smooth animation
      gsap.to(answerRefs.current[activeIndex], {
        duration: 0.5,
        height: "auto",
        opacity: 1,
        ease: "easeInOut",
      });
    } else {
      // Collapse the answer smoothly
      gsap.to(answerRefs.current, {
        duration: 0.3,
        height: 0,
        opacity: 0,
        ease: "easeInOut",
      });
    }
  }, [activeIndex]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white font-montserrat">
      <h1 className="text-5xl font-extrabold text-purple mb-6 leading-tight">FAQ</h1>
      <h2 className="text-3xl font-bold text-purple mb-4 leading-tight">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {questions.map((item, index) => (
          <div key={index} className="border-b border-purple">
            <button
              onClick={() => handleClick(index)}
              className="w-full text-left py-4 flex justify-between items-center text-black font-bold"
            >
              {item.question}
              <span
                className={`transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-90 text-purple" : "rotate-0 text-purple"
                }`}
              >
                <img src={assets.right_arrow} className="w-8 " alt=""
                />
              </span>
            </button>
            <div
              ref={(el) => (answerRefs.current[index] = el)}
              className="mt-2 overflow-hidden text-black text-sm rounded-md"
              style={{ height: 0, opacity: 0 }}
            >
              {activeIndex === index && (
                <div className="p-4">
                  {item.answer}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
