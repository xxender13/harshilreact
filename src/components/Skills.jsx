import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png"; 
import javascript from "../assets/javascript.png";
import python from "../assets/Python.jpg";
import opencv from "../assets/opencv.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";


const Skills = () => {

  const skills = [
    {
      id: 1,
      icon: html, 
      title: "HTML",
      value: 90,
      style: "shadow-orange-500" 
    },
    {
      id: 2,    
      icon: css,
      title: "CSS",
      value: 80,
      style: "shadow-blue-500"
    },
    {
      id: 3,  
      icon: javascript,
      title: "JavaScript",
      value: 70,
      style: "shadow-yellow-500"
    },
    {
      id: 4,  
      icon: python,
      title: "Python",
      value: 95,
      style: "shadow-yellow-500"
    },
    {
      id: 4,  
      icon: opencv,
      title: "OpenCVt",
      value: 90,
      style: "shadow-yellow-500"
    },
    {
      id:5,
      icon: react,
      title: "React",
      value: 65,
      style: "shadow-blue-500"
    },
    {
      id:6,
      icon: tailwind,
      title: "Tailwind",
      value: 55,
      style: "shadow-sky-500"
    }

  ];

  return (
    <div name="skills" className="bg-gray-800 py-10">

      <div className="max-w-4xl mx-auto">
        
      <div className="pb-8">
          <p className="text-4xl margin-top-20 font-bold inline border-b-4 border-gray-500">
            Skills
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
        
          {skills.map(skill => (
            
            <div className={`p-6 rounded-xl ${skill.style}`} key={skill.id}>
              
              <img src={skill.icon} className="w-20 mx-auto" alt={skill.title} />
              
              <p className="mt-4 text-xl font-bold text-white">
                {skill.title}
              </p>
              
              <div className="w-full bg-gray-200 rounded-full mx-auto mt-4">
                <div className="bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-full"
                  style={{width: `${skill.value}%`}}>
                  {skill.value}%
                </div>
              </div>
              
              
            </div>
            
          ))}
        
        </div>
        
      </div>

    </div>
  );
};

export default Skills;