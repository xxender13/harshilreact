import React, { useState, useEffect } from "react";

const Contact = () => {const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div
    className={` transform transition duration-1000 ease-out ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
    }`}
  >
    <div name="experience" className="fade-section w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"    >

    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <h2 className="text-4xl font-bold mt-20 text-white inline-block p-4"> 
      Contact me
    </h2>
          <p className="text-gray-400">
            Submit the form to get in touch 
          </p>
    
        <div className=" flex justify-center items-center">
          <form
            action="https://formspree.io/f/myyqande"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
