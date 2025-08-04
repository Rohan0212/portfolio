import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiX } from "react-icons/si"; // for X (Twitter)
import profilePic from "../assets/profile.jpg"; // Replace with your actual image

const Header = () => {
  const location = useLocation();
  const navItems = [
    { path: "/", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/uses", label: "Uses" },
    { path: "/newsletter", label: "Newsletter" },
  ];

  return (
    <div className="mb-8">
      {/* Top section: image, name, role, icons */}
      <div className="flex items-center gap-6 mb-4">
        <img
          src={profilePic}
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover border"
        />
        <div>
          <h1 className="text-xl font-semibold text-gray-900">
            Rohan Rajnish Khandare
          </h1>
          <p className="text-gray-500 text-sm">Full Stack Developer</p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 mb-4">
        <a href="https://x.com/yourprofile" target="_blank" rel="noreferrer">
          <SiX className="text-lg text-black hover:text-gray-700" />
        </a>
        <a
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="text-xl text-black hover:text-gray-700" />
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-xl text-blue-700 hover:text-blue-900" />
        </a>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-6 border-b pb-2 text-sm">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`${
              location.pathname === item.path
                ? "text-black font-medium border-b-2 border-black pb-1"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
