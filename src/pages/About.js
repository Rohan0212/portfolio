import { motion } from "framer-motion";

import { Link, useLocation } from "react-router-dom";
import Hero from "../components/Hero";

const About = () => {
  const location = useLocation();
  const navItems = [
    { path: "/", label: "About" },
    { path: "/projects", label: "Projects" },
  ];
  return (
    <motion.div
      className="max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />

      {/* 🔽 Existing About Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I’m a Master’s student in Computer Science at North Carolina State
          University, passionate about building impactful software systems. I
          have hands-on experience in developing full-stack web applications,
          designing scalable backend systems, and working with cloud platforms.
        </p>
      </div>
      {/* 💼 Experience Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Experience</h2>

        <ol className="relative border-s border-gray-200 ml-2">
          {/* Baranwal Consultancy */}
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <h3 className="text-md font-semibold text-gray-900">
              Full Stack Developer Intern
            </h3>
            <p className="text-sm text-gray-600 italic">
              Baranwal Consultancy and Services • Feb 2024 – May 2024
            </p>
            <ul className="list-disc list-inside mt-2 text-sm text-gray-700 space-y-1">
              <li>
                Developed responsive UIs with React and RESTful APIs using
                Node.js & Express, reducing processing time by 25%.
              </li>
              <li>
                Integrated AWS services (S3, EC2, API Gateway, Load Balancer) to
                handle 10,000+ users and 1L+ monthly records.
              </li>
            </ul>
          </li>

          {/* Persistent Systems */}
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <h3 className="text-md font-semibold text-gray-900">
              C++ Developer Intern
            </h3>
            <p className="text-sm text-gray-600 italic">
              Persistent Systems (Martian Internship) • Jun 2022 – Aug 2022
            </p>
            <ul className="list-disc list-inside mt-2 text-sm text-gray-700 space-y-1">
              <li>
                Built a student CRM system using C++ and SQL, improving data
                retrieval efficiency by 40%.
              </li>
              <li>
                Simulated CI/CD behavior via automated build scripts and
                post-build test triggers.
              </li>
            </ul>
          </li>

          {/* Sparks Foundation */}
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <h3 className="text-md font-semibold text-gray-900">
              Web Developer Intern
            </h3>
            <p className="text-sm text-gray-600 italic">
              The Sparks Foundation • Jan 2022 – Feb 2022
            </p>
            <ul className="list-disc list-inside mt-2 text-sm text-gray-700 space-y-1">
              <li>
                Built a secure banking system with responsive UI using HTML,
                CSS, Bootstrap, and MySQL (normalized to 3NF).
              </li>
              <li>
                Maintained ACID compliance and ensured data consistency in
                transaction storage.
              </li>
            </ul>
          </li>
        </ol>
      </div>

      {/* 🛠️ Skills Badge Style Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>

        <div className="flex flex-wrap gap-3">
          {[
            "Python",
            "C++",
            "Java",
            "SQL",
            "No-SQL",
            "JavaScript",
            "PHP",
            "AWS",
            "Azure Cloud",
            "Web Services",
            "Machine Learning & AI",
            "NLP",
            "ROS Noetic",
            "ReactJS",
            "Express.js",
            "Node.js",
            "Git",
            "Gitlab",
            "Django",
            "Android Studio",
          ].map((skill, idx) => (
            <span
              key={idx}
              className="bg-gray-100 text-sm text-gray-800 px-4 py-1 rounded-full shadow-sm hover:bg-gray-200 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
