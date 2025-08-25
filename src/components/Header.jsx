import { NavLink } from "react-router-dom";
import { MdDownload } from "react-icons/md";
import { useState } from "react";

// import { MdDownload } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi"; // hamburger aur close icon

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Brand / Title */}
        <div className="font-bold bg-amber-400 xl:px-11 xl:py-3">Full Stack Web Developer</div>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Menu for desktop */}
        <nav className="hidden md:flex gap-6 items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/project">Project</NavLink>
          <a
            href="https://docs.google.com/document/d/1MNDO8uHd6VOj3T4skw4AZVywP5c2Ou_wQj8thrkIy9c/edit?tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            Resume <MdDownload />
          </a>
        </nav>
      </div>

      {/* Dropdown menu for mobile */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4">
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/project" onClick={() => setIsOpen(false)}>Project</NavLink>
          <a
            href="https://docs.google.com/document/d/1MNDO8uHd6VOj3T4skw4AZVywP5c2Ou_wQj8thrkIy9c/edit?tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
            onClick={() => setIsOpen(false)}
          >
            Resume <MdDownload />
          </a>
        </div>
      )}
    </header>
  );
};
