import { FaGithub, FaLinkedin } from "react-icons/fa";
import profilePic from "../assets/profile.jpg";
import ThemeToggle from "./ThemeToggle";
import { MdEmail } from "react-icons/md";

const Hero = ({ activeTab, setActiveTab }) => {
  return (
    <div className="mb-10">
      {/* 🧠 Profile Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6">
        {/* Left: Profile + Info */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img
            src={profilePic}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border shadow"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Rohan Rajnish Khandare
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              Software Engineer | Full Stack Web Developer | MERN Stack |
            </p>
            <div className="flex justify-center sm:justify-start gap-4 mt-2">
              <a
                href="https://github.com/Rohan0212"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-xl text-gray-800 dark:text-white hover:text-black dark:hover:text-gray-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/rohankhandare/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-xl text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300" />
              </a>
              <a
                href="mailto:rkhanda3@ncsu.edu"
                target="_blank"
                rel="noreferrer"
              >
                <MdEmail className="text-xl text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Theme Toggle Slider */}
        <div className="self-start sm:self-center">
          <ThemeToggle />
        </div>
      </div>

      {/* 🧠 Tab Bar */}
      <div className="flex gap-6 border-b pb-2 text-sm">
        <button
          onClick={() => setActiveTab("about")}
          className={`pb-1 ${
            activeTab === "about"
              ? "text-black dark:text-white font-semibold border-b-2 border-black dark:border-white"
              : "text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white"
          }`}
        >
          About
        </button>
        <button
          onClick={() => setActiveTab("projects")}
          className={`pb-1 ${
            activeTab === "projects"
              ? "text-black dark:text-white font-semibold border-b-2 border-black dark:border-white"
              : "text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white"
          }`}
        >
          Projects
        </button>
      </div>
    </div>
  );
};

export default Hero;
