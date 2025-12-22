export const About = () => {
  return (
    <section
      id="about"
      className="h-screen text-white flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            Hi, I'm <span className="text-white font-semibold">Abhishek Yadav</span>,
            a passionate Frontend Developer who loves creating clean, modern,
            and user-friendly web interfaces. I focus on writing scalable code
            and building smooth user experiences.
          </p>

          <p className="mt-4 text-gray-400">
            I work mainly with <span className="text-cyan-400">React</span>,
            <span className="text-cyan-400"> Tailwind CSS</span>, and
            <span className="text-cyan-400"> JavaScript</span>, and I enjoy
            learning new technologies to improve my skills every day.
          </p>

          {/* Skills */}
          <div className="mt-8 flex flex-wrap gap-4">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind",
              "Git",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 border border-cyan-400/40 rounded-full text-sm text-cyan-300 hover:bg-cyan-400 hover:text-black transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side Card */}
        <div className="relative">
          <div className="border border-cyan-400/30 rounded-2xl p-8 bg-white/5 backdrop-blur-md">
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
              Frontend Developer
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>✔ Responsive Web Design</li>
              <li>✔ Modern UI / UX</li>
              <li>✔ React Components</li>
              <li>✔ Clean Tailwind Layouts</li>
              <li>✔ Smooth Animations</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};
