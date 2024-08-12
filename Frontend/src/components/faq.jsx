import React, { useState } from "react";
import Navbar from "./navbar";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How many clubs are there in college?",
      answer: "8",
    },
    {
      question: "DSW stands for?",
      answer: "Department of student welfare",
    },
    {
      question: "Who is the Dean of the DSW?",
      answer: "Gagandeep Brar Bhullar",
    },
    {
      question: "Who developed this website",
      answer: "Jaskeerat Singh Sandhu",
    },
    {
      question: "What is: 1 + 1?",
      answer: "Depends on who are you asking.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#2b2b2b] min-h-screen flex flex-col items-center">
        <h1 className="text-3xl font-bold my-12 pt-16 text-white ">
          Frequently Asked Questions
        </h1>
        <div className="max-w-xl w-full">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-transparent border border-gray-400 rounded-lg mb-4 p-6 relative transition-all duration-300 ${
                activeIndex === index ? "bg-[#2b2b2b] shadow-lg" : ""
              }`}
            >
              <h3 className="text-lg font-semibold text-white">
                {faq.question}
              </h3>
              <p
                className={`mt-4 ${
                  activeIndex === index ? "block" : "hidden"
                } text-white`}
              >
                {faq.answer}
              </p>
              <button
                className="absolute top-6 right-6 flex items-center justify-center h-8 w-8 rounded-full focus:outline-none bg-[#99EA73] text-white"
                onClick={() => toggleFAQ(index)}
              >
                {activeIndex === index ? (
                  <i className="fas fa-times"></i>
                ) : (
                  <i className="fas fa-chevron-down"></i>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="copyright fixed bottom-0 bg-[#222] h-10 w-[100%] hidden md:flex md:justify-center">
        <p className="text-white text-center justify-center p-2">
          &copy; 2024 All rights reserved
        </p>
      </div>
    </>
  );
};

export default FAQ;
