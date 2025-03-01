import { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <label htmlFor="toggle2" className="flex items-center space-x-4 cursor-pointer text-gray-800">
      {/* <span className="font-medium">{isOn ? "On" : "Off"}</span> */}
      <div className="relative">
        {/* Input Checkbox */}
        <input
          id="toggle2"
          type="checkbox"
          className="hidden peer"
          checked={isOn}
          onChange={handleToggle}
        />

        {/* Toggle Track */}
        <div className={`w-12 h-5 flex items-center rounded-full transition-all relative px-2 ${isOn ? "bg-green-500" : "bg-red-500"}`}>
          {/* Left Dot (Red) */}
          {/* <span className="w-2.5 h-2.5 bg-white rounded-full"></span> */}
          {/* Right Dot (Green) */}
          {/* <span className="w-2.5 h-2.5 bg-white rounded-full ml-auto"></span> */}
        </div>

        {/* Sliding Toggle Button */}
        <div className={`absolute top-0 w-5 h-5 bg-white border border-gray-300 rounded-full shadow-md transform transition-all ${isOn ? "translate-x-7" : "translate-x-0"}`}></div>
      </div>
    </label>
  );
};

export default ToggleSwitch;
