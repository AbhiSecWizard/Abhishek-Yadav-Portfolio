import SplineTool from "../component/Spline";

export const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center overflow-hidden text-white"
    >
      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        {/* TEXT CONTENT */}
        <div className="z-10 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-amber-400">Abhishek Yadav</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto md:mx-0">
            A passionate{" "}
            <span className="text-amber-400">Frontend Developer</span> who
            builds modern, responsive, and interactive web experiences using
            React, Tailwind CSS, and JavaScript.
          </p>

          <a
            href="https://wa.me/918527248570?text=Hello%20I%20want%20to%20contact%20you"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-8 px-6 py-3 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-300 transition"
          >
            WhatsApp
          </a>
        </div>

        {/* SPLINE (Desktop Only) */}
        <div className="flex md:flex md:items-center md:justify-center items-center justify-center">
          <SplineTool />
        </div>
      </div>
    </section>
  );
};
