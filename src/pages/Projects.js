import React from "react";
import projects from "../data/projectsData";
import { motion } from "framer-motion";
import Hero from "../components/Hero";

const Projects = () => {
  return (
    <motion.div
      className="max-w-5xl mx-auto px-4 py-8"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />

      <h2 className="text-3xl font-semibold mb-6">Projects</h2>

      <div className="grid gap-6">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
          >
            <h3 className="text-xl font-bold text-gray-800">{proj.title}</h3>
            <p className="text-sm text-blue-600 mb-2">{proj.tech}</p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
              {proj.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="flex gap-4">
              {proj.demo && proj.demo !== "#" && (
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                >
                  Live Demo
                </a>
              )}
              <a
                href={proj.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-900 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
