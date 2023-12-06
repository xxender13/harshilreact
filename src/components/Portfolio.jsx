import React from "react";
import Project1 from "../assets/portfolio/Project1.jpg";
import Project2 from "../assets/portfolio/Project2.jpg";
import Project3 from "../assets/portfolio/Project3.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      image: Project1,
      title:"Virtual ClassRoom",
      githubLink: "https://github.com/xxender13/virtual-classroom",
      moreInfoLink: "https://github.com/xxender13/virtual-classroom",
      details:"This project is related to an online classroom system where  the faculty can create annoucements host test",
    },
    {
      id: 2,
      image: Project2,
      title:"AI Attendance System",
      githubLink: "https://github.com/xxender13/Automated-Attendance-System",
      moreInfoLink: "https://ieeexplore.ieee.org/document/10046982",
      details:"This project is on computer vision and its ML algorithms where a student can register with an unique id and use there face to mark their attendance",
    },
    {
      id: 3,
      image: Project3,
      title:"IoT Based Student Tracking System",
      githubLink: "https://github.com/xxender13/Student-Tracking-System",
      moreInfoLink: "https://github.com/xxender13/Student-Tracking-System/blob/main/IoT-based%20Student%20Tracking%20System%20in%20alliance%20with.pdf",
      details:"This project is an IoT based project which is a student tracking system"
    },
  ];




  
  return (
    <div
      name="projects"
      className="fade-section w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
          {portfolios.map(({ id, image, title, githubLink, moreInfoLink, desc, details }) => (
            <div key={id} className="group relative rounded overflow-hidden">
              <div className="duration-500 w-full h-64">
                <img
                  className="duration-500 w-full h-full object-cover group-hover:rotate-y-180"
                  src={image}
                  alt={details}
                />
  
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white text-gray-900 text-center opacity-0 group-hover:opacity-100 group-hover:-rotate-y-180 duration-500">
                  <h3 className="text-2xl font-bold mb-3">{details}</h3>
                  <p className="text-sm">{desc}</p>
  
                  <div className="flex mt-2">
                    <a
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                    >
                      GitHub
                    </a>
                    <a
                      href={moreInfoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                    >
                      More Info
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};
  
export default Portfolio;