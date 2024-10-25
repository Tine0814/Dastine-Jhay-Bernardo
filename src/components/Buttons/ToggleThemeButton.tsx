import React, { useState, useEffect } from "react";
import { useThemeContext } from "../../context/ThemeContext";
import { IoSunnySharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

const ToggleThemeButton: React.FC = () => {
  const { toggleTheme, mode } = useThemeContext();
  const [isToggling, setIsToggling] = useState(false);

  useEffect(() => {
    if (isToggling) {
      const timeout = setTimeout(() => setIsToggling(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isToggling]);

  const handleToggle = () => {
    setIsToggling(true);
    toggleTheme();
  };

  return (
    <div
      onClick={handleToggle}
      className="relative inline-block cursor-pointer text-white text-[40px]"
    >
      <div
        className={`transition-transform duration-300 ${
          mode === "dark"
            ? "opacity-0 scale-50 absolute"
            : "opacity-100 scale-100"
        }`}
      >
        <FaMoon className="text-[#f8db58] h-5 w-5" />
      </div>

      <div
        className={`transition-transform duration-300 ${
          mode === "light"
            ? "opacity-0 scale-50 absolute"
            : "opacity-100 scale-100"
        }`}
      >
        <IoSunnySharp className="text-[#f8db58] h-5 w-5 font" />
      </div>
    </div>
  );
};

export default ToggleThemeButton;
