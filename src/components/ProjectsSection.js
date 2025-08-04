import projects from "../data/projectsData";

const ProjectsSection = () => {
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>

      <div className="grid gap-6">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200 transition-transform transform hover:scale-[1.02] hover:shadow-lg cursor-pointer"
          >
            <h3 className="text-xl font-bold text-gray-800">{proj.title}</h3>
            <p className="text-sm text-blue-600 mb-2">{proj.tech}</p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
              {proj.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="flex gap-4">
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
    </div>
  );
};

export default ProjectsSection;
