import React from "react";
import Project1 from "../assets/portfolio/Project1.jpg";
import Project2 from "../assets/portfolio/Project2.jpg";
import Project3 from "../assets/portfolio/Project3.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Project1,
      title:"Virtual ClassRoom",
      githubLink: "https://github.com/xxender13/virtual-classroom",
      moreInfoLink: "https://github.com/xxender13/virtual-classroom",
    },
    {
      id: 2,
      src: Project2,
      title:"AI Attendance System",
      githubLink: "https://github.com/xxender13/Automated-Attendance-System",
      moreInfoLink: "https://ieeexplore.ieee.org/document/10046982",
    },
    {
      id: 3,
      src: Project3,
      title:"IoT Based Student Tracking System",
      githubLink: "https://github.com/xxender13/Student-Tracking-System",
      moreInfoLink: "https://github.com/xxender13/Student-Tracking-System/blob/main/IoT-based%20Student%20Tracking%20System%20in%20alliance%20with.pdf",
    },
  ];

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank");
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  return (
    <div className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id,title, src, githubLink, moreInfoLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className="text-center my-4">{title}</p>
              <div className="flex items-center justify-center">
                
              <button
  className="w-1/2 px-6 py-3 m-4 duration-200 transform hover:scale-105 hover:bg-gray-700"
  onClick={() => openInNewTab(githubLink)}
>
  Github
</button>

<button
  className="w-1/2 px-6 py-3 m-4 duration-200 transform hover:scale-105 hover:bg-gray-700"
  onClick={() => openInNewTab(githubLink)}
>
  More Info
</button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
