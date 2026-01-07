import { useState } from "react";
import HamburgerIcon from "/hamburger-icon.png";

const Navbar = () => {
  // Toggle logic
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="navbar">
      <h1 className="logo">JvkeDev</h1>

      {/* Menu Icon */}
      <button className="md:hidden" onClick={toggleMenu}>
        <img src={HamburgerIcon} alt="menu" width="30" />
      </button>

      {/* Navigation Links */}
      <ul
        className={`
    mobile-menu
    ${
      isOpen
        ? "max-h-screen opacity-100 translate-y-0"
        : "max-h-0 opacity-0 -translate-y-4 md:max-h-none md:opacity-100 md:translate-y-0"
    }
  `}
      >
        {["hero", "about", "projects", "skills", "contact"].map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className="block px-6 py-3 text-pink-500 hover:text-pink-600 font-bold text-center"
              onClick={() => setIsOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
