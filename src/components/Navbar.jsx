import { NavLink } from 'react-router-dom';

import { home, book, folder, email } from '../assets/icons';

const Navbar = () => {
  return (
    <header className="header">
      <nav className="flex justify-between items-center text-lg px-4 py-6 font-medium">
        <img src={home} alt="home" className="w-4 h-4 object-contain" />
        <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-black')}>
          Home
        </NavLink>
      </nav>
      <nav>
        <div className="flex text-lg gap-7 font-meidum">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-black')}
          >
            About
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-black')}
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-black')}
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
