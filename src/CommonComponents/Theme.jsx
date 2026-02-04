import React, { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const Theme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      {" "}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full  bg-gray-100 dark:bg-blue-700 text-gray-800 dark:text-white hover:scale-105 transition"
      >
        {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
      </button>
    </div>
  );
};

export default Theme;
