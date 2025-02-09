import { NavLink } from "react-router-dom";

import logo2  from "../assets/icons/logo2.jpg";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={logo2} alt='logo' className='w-10 h-18 shadow-md rounded-lg object-contain' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
