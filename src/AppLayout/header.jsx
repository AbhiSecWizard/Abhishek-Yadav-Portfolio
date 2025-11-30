import { NavLink } from "react-router-dom";
export const Header = () => {   
    return (
        <header className="bg-blue-600 text-white p-4">
           <div>
                <NavLink to="/"><h1 className="text-2xl font-bold">My Portfolio</h1></NavLink>
           </div>
           <div>
                <button>
                    <NavLink to="/home">Home</NavLink>
                </button>
                <button>
                    <NavLink to="/about">About</NavLink>
                </button>
           </div>
        </header>
    );
}   
