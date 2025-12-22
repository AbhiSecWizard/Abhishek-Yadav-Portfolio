import { useState } from "react";
import { Link } from "react-scroll";
import { Download } from "lucide-react";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const menuItems = ["home", "about", "project", "contact"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md">
      
      {/* NAVBAR */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white uppercase">
        
        {/* LOGO */}
        <div className="text-2xl font-bold tracking-wider cursor-pointer">
          <span className="text-cyan-400">A</span>Y
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 text-sm font-semibold">
          {menuItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              {item}
            </Link>
          ))}

          <a
            href="/certification/Resume.pdf"
            download
            className="flex items-center gap-2 hover:text-cyan-400 transition"
          >
            <Download size={18} />
            Resume
          </a>
        </div>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl transition-transform duration-300"
        >
          <span className={`inline-block ${open ? "rotate-90" : ""}`}>
            {open ? "✕" : "☰"}
          </span>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-black/80 backdrop-blur-md
        flex flex-col items-center gap-6 py-10 text-sm font-semibold
        transition-all duration-300 ease-out
        ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6 pointer-events-none"}`}
      >
        {menuItems.map((item, index) => (
          <Link
            key={item}
            to={item}
            smooth
            duration={500}
            offset={-80}
            onClick={() => setOpen(false)}
            style={{ transitionDelay: `${index * 80}ms` }}
            className={`uppercase transition-all duration-300 text-white
            ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            hover:text-cyan-400`}
          >
            {item}
          </Link>
        ))}

        <a
          href="/certification/Resume.pdf"
          download
          style={{ transitionDelay: "350ms" }}
          className={`flex items-center gap-2 uppercase transition-all duration-300 text-white
          ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          hover:text-cyan-400`}
        >
          <Download size={18} />
          Resume
        </a>
      </div>
    </header>
  );
};
