import { Link } from "react-scroll";

export const Header = () => {
  return (
    <div className="lg:relative lg:flex lg:items-center lg:ml-12 lg:py-8 text-white uppercase">

      {/* Logo - Left */}
     <div className="lg:mx-[-300px] lg:font-bold text-lg cursor-pointer ">
        AY
      </div>
      {/* Menu - Perfect Center */}
      <div className="absolute ml-18 left-1/2 -translate-x-1/2 flex gap-12">
        <Link to="home" smooth duration={500} offset={-80} className="cursor-pointer">
          Home
        </Link>
        
        <Link to="about" smooth duration={500} offset={-80} className="cursor-pointer">
          About
        </Link>

        <Link to="project" smooth duration={500} offset={-80} className="cursor-pointer">
          Project
        </Link>

        <Link to="contact" smooth duration={500} offset={-80} className="cursor-pointer">
          Contact
        </Link>

        <a
          href="https://wa.me/918527248570?text=Hello%20I%20want%20to%20contact%20you"
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer"
        >
          WhatsApp
        </a>
      </div>

    </div>
  );
};
