import { Link } from "react-scroll";
import { IoIosMailUnread } from "react-icons/io";
import { FaInstagramSquare, FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="text-gray-400 mt-20 border-t border-white/10">
      
      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12 md:justify-between items-center md:items-start">
        
        {/* LEFT SECTION */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold">
            <span className="text-cyan-400">Abhishek </span>Yadav
          </h1>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center md:justify-start gap-6 mt-8">
            {[
              {
                icon: <IoIosMailUnread size={24} />,
                link: "mailto:studyandrotech@gmail.com",
              },
              {
                icon: <FaInstagramSquare size={24} />,
                link: "https://www.instagram.com/abhiofficially2025",
              },
              {
                icon: <FaGithub size={24} />,
                link: "https://github.com/AbhiSecWizard",
              },
              {
                icon: <FaLinkedin size={24} />,
                link: "https://www.linkedin.com/in/abhishek-yadav-0b2711397/",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="h-12 w-12 flex items-center justify-center rounded-full border border-cyan-400
                hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="text-center md:text-left">
          <h2 className="font-semibold text-lg mb-4">Quick Links</h2>
          <ul className="space-y-2">
            {["home", "about", "project", "contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth
                  offset={-80}
                  className="cursor-pointer hover:text-cyan-400 transition"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-sm py-4 border-t border-white/10">
        © {new Date().getFullYear()} Abhishek Yadav. All rights reserved.
      </div>
    </footer>
  );
};
