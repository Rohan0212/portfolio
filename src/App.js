import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Home from "./pages/Home";

function App() {
  const [theme, setTheme] = useState("light");

  // Apply theme to HTML root
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <BrowserRouter>
      <div className="min-h-screen px-6 py-4 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <Routes>
          <Route
            path="/"
            element={<Home theme={theme} setTheme={setTheme} />}
          />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
