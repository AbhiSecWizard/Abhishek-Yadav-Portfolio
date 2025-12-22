import projectData from "../api/api.json";
import "../Custom/Custome.css";

export const Project = () => {
  const { projects } = projectData;

  return (
    <section
      id="project"
      className="min-h-screen text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold">
            My <span className="text-amber-400">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Some of the work I’ve built using modern web technologies
          </p>
        </div>

        {/* PROJECT LIST */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* IMAGE */}
              <div className="flex justify-center">
                <div className="image_bg w-72 sm:w-80 md:w-96 rotate-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full rounded-2xl object-cover"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="space-y-5 text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm md:text-base">
                  {project.description}
                </p>

                <p className="text-sm text-gray-400">
                  <span className="text-white font-medium">Tech Stack:</span>{" "}
                  {project.technologies.join(", ")}
                </p>

                <div className="flex justify-center lg:justify-start gap-6 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-400 hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
