import React, { useState, useEffect } from "react";
import InternShip2 from "../assets/InternShip2.jpg";
import InternShip3 from "../assets/InternShip3.jpg";
import InternShip1 from "../assets/InternShip1.jpg";
import InternShip4 from "../assets/InternShip4.jpg";

const Experience = () => {
  const portfolios = [
    {
      id: 1,
      title: "AI Software Developer",
      src: InternShip2,
      details: "I worked as an AI Software Developer at Agniforge Industries, gaining valuable experience in AI and ML. During my time there, I actively contributed to various projects, including Voice Recognition Systems and Object Detection using OpenCV. My role involved working on computer vision applications, honing my skills in AI and ML development",
    },
    {
      id: 2,
      title: "AI/ML Trainee",
      src: InternShip3,
      details: "During the AI training at MedTourEasy. The program not only enhanced my understanding of how AI can be implemented at different levels but also provided me with practical skills to implement these concepts. The resources provided were instrumental in strengthening my coding skills, allowing me to apply theoretical knowledge in a hands-on manner. This training has equipped me with a versatile skill set that I am eager to leverage in real-world scenarios.",
    },
    {
      id: 3,
      title: "Neem Consulting Technical Intern",
      src: InternShip1,
      details: "After working at Agniforge Industries, I joined Neem Consulting as a Technical Intern, expanding my expertise in Machine Learning. During my time there, I worked on various ML concepts, gaining hands-on experience in data handling and actively contributing to AI projects. This allowed me to acquire practical knowledge and skills in implementing ML algorithms and data-driven solutions.",
    },
    {
      id: 4,
      title: "Research Work",
      src: InternShip4,
      details: "Research paper on Automated Attendance System based on Facial Recognition using Adaboost Algorithm link: https://ieeexplore.ieee.org/document/10046982",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activePortfolio = portfolios[activeIndex];

  const handlePrevClick = () => {
    let newIndex = activeIndex - 1;
    if (newIndex < 0) {
      newIndex = portfolios.length - 1;
    }
    setActiveIndex(newIndex);
  };

  const handleNextClick = () => {
    let newIndex = activeIndex + 1;
    if (newIndex >= portfolios.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextClick();
    }, 4000); // Change portfolio every 5 seconds (adjust as needed)

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [activeIndex]);

  return (
    <div name="experience" className="fade-section w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"    >

<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
    <h2 className="text-4xl font-bold mt-20 text-white inline-block p-4"> 
  Experience  
</h2>
      <p className="text-gray-400">
        Check out some of my work right here
      </p>
    

        <div className="flex justify-center items-center h-screen">
          <button
            onClick={handlePrevClick}
            className="text-white cursor-pointer absolute left-0 top-1/2 transform -translate-y-1/2"
          >
            {"<"}
          </button>
          <div className="portfolio-container mx-4">
            <img
              src={activePortfolio.src}
              alt=""
              className="rounded-md max-h-96 max-w-full duration-200 hover:scale-105"
            />
            <div className="overlay">
              <div className="content mx-auto w-full text-center">
                <h3 className="text-2xl text-white mb-4">
                  {activePortfolio.title}
                </h3>
                <p className="text-gray-400">{activePortfolio.details}</p>
              </div>
            </div>
          </div>
          <button
            onClick={handleNextClick}
            className="text-white cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
