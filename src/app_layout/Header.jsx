import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <nav className="flex items-center justify-between p-6 text-white">
      <div className="font-bold text-2xl">My Portfolio</div>

      <div className="flex gap-6 text-slate-200">
        <NavLink>Home</NavLink>
        <NavLink>Project</NavLink>
        <NavLink>Me</NavLink>
        <NavLink>Click Here</NavLink>
        <NavLink>Resume</NavLink>
      </div>
    </nav>
  );
};
