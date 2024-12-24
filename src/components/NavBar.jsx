import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container max-w-7xl flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-3xl font-bold text-gray-800">
          <Link to="/" className="text-red-400">
            USTELLY
          </Link>
        </div>

        {/* Hamburger Menu Button (Visible on Mobile) */}
        <button
          className="sm:block md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-6 w-6 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-6 absolute md:static bg-white w-full md:w-auto left-0 top-16 md:top-auto py-3 md:py-0`}
        >
          <li className="text-center  ">
            <Link
              to="/"
              className="text-gray-700 hover:text-red-600 transition block md:inline"
            >
              Главная
            </Link>
          </li>
          <li className="text-center  ">
            <Link
              to="/aboutus"
              className="text-gray-700 hover:text-red-600 transition block md:inline"
            >
              Про нас
            </Link>
          </li>
          <li className="text-center  ">
            <Link
              to="/forpartners"
              className="text-gray-700 hover:text-red-600 transition block md:inline"
            >
              Для партнеров
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
