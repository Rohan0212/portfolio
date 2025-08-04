import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div
      onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
      className="w-14 h-7 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center px-1 cursor-pointer transition-all duration-300"
    >
      <div
        className={`w-5 h-5 bg-white rounded-full flex items-center justify-center text-xs transition-all duration-300 ${
          theme === "dark" ? "translate-x-7" : "translate-x-0"
        }`}
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </div>
    </div>
  );
};

export default ThemeToggle;
