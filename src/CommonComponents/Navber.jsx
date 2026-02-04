import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
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
    <nav className="w-full px-6 py-4 flex items-center justify-between bg-BGWhite shadow-md">
      {/* Left - Company Name */}
      <h1 className="text-xl font-bold text-TextBlack">
        CompanyName
      </h1>

      {/* Right - Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full  bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:scale-105 transition">
        {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
      </button>
    </nav>
  );
};

export default Navbar;
