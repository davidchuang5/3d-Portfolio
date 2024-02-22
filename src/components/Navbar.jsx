import { NavLink } from 'react-router-dom';

import { home, book, folder, email } from '../assets/icons';

const Navbar = () => {
  console.log(location.pathname);
  return (
    <header className="header">
      <nav className="flex items-center text-lg gap-2 font-medium">
        <img src={home} alt="home" className="w-4 h-4 object-contain" />
        <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-black')}>
          Home
        </NavLink>
      </nav>

      <nav className="flex items-center text-lg gap-7 font-medium">
        <div className="flex items-center gap-1">
          <img src={book} alt="book" className="w-4 h-4 object-contain" />
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-black')}
          >
            About
          </NavLink>
        </div>
        <div className="flex items-center gap-1">
          <img src={folder} alt="folder" className="w-4 h-4 object-contain" />
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-black')}
          >
            Projects
          </NavLink>
        </div>
        <div className="flex items-center gap-1">
          <img src={email} alt="folder" className="w-4 h-4 object-contain" />
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
