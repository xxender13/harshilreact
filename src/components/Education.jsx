import React,{useEffect,useState} from "react";

const Education = () => { const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div
        className={` transform transition duration-1000 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
    <div name="education" className="fade-section w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"    >

    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <h2 className="text-4xl font-bold mt-20 text-white inline-block p-4"> 
      Education  
    </h2>
          

      
  {/* Education Level 1 */}
  <span className="block mb-2">High School</span>
  <div className="relative pt-1">
    <div className="flex mb-2 items-center justify-between">
      <div className="flex items-center">
        <span className="mr-2">Progress:</span>
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
          100%
        </span>
      </div>
      <div className="text-right">
        <span className="text-xs font-semibold inline-block text-teal-600">
          CGPA: 7.6
        </span>
      </div>
    </div>
    <div className="w-full bg-teal-200 h-2 rounded-full overflow-hidden">
      <div className="bg-teal-600 h-full" style={{ width: '100%' }}></div>
    </div>
  </div>

  {/* Education Level 2 */}
  <span className="block mt-4 mb-2">SRM University</span>
  <div className="relative pt-1">
    <div className="flex mb-2 items-center justify-between">
      <div className="flex items-center">
        <span className="mr-2">Progress:</span>
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
          100%
        </span>
      </div>
      <div className="text-right">
        <span className="text-xs font-semibold inline-block text-teal-600">
          CGPA: 3.9
        </span>
      </div>
    </div>
    <div className="w-full bg-teal-200 h-2 rounded-full overflow-hidden">
      <div className="bg-teal-600 h-full" style={{ width: '100%' }}></div>
    </div>
  </div>

  {/* Education Level 3 */}
  <span className="block mt-4 mb-2">Saint Louis University</span>
  <div className="relative pt-1">
    <div className="flex mb-2 items-center justify-between">
      <div className="flex items-center">
        <span className="mr-2">Progress:</span>
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
          25%
        </span>
      </div>
      <div className="text-right">
        <span className="text-xs font-semibold inline-block text-teal-600">
          CGPA: 3.35
        </span>
      </div>
    </div>
    <div className="w-full bg-teal-200 h-2 rounded-full overflow-hidden">
      <div className="bg-teal-600 h-full" style={{ width: '25%' }}></div>
    </div>
  </div>


      </div>
    </div>
    </div>
  );
};

export default Education;
