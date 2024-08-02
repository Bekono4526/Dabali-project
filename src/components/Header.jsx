import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "/logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (e, path) => {
    setActiveLink(path);
    if (location.pathname === path) {
      document.querySelector(".main-content").scrollTop = 0;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const mainContent = document.querySelector(".main-content");
    const handleScroll = () => {
      if (mainContent.scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    mainContent.addEventListener("scroll", handleScroll);
    return () => {
      mainContent.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white text-yellow-400 shadow-md" : "bg-transparent text-white"
      }`}
    >
      <div className="flex justify-between items-center p-4 md:p-6">
        <Link to="/" onClick={(e) => handleLinkClick(e, "/")}>
          <img
            src={logo}
            alt="Bekono Sophie Logo"
            className={`h-10 cursor-pointer transition-colors duration-300 ${scrolled ? 'text-yellow-400' : 'text-white'}`}
          />
        </Link>

        <nav className="hidden custom-md:flex font-custom">
          <ul className="flex items-center gap-8">
            <li
              className={`p-2 px-4 rounded-lg transition-colors duration-300 ${
                scrolled ? "text-yellow-400" : "text-white"
              }`}
            >
              <Link
                to="/"
                onClick={(e) => handleLinkClick(e, "/")}
                className={`${
                  activeLink === "/" ? "active-link" : "link-hover-underline"
                } ${scrolled ? "" : "link-hover-underline"}`}
              >
                Home
              </Link>
            </li>
            <li
              className={`p-2 px-4 rounded-lg transition-colors duration-300 ${
                scrolled ? "text-yellow-400" : "text-white"
              }`}
            >
              <Link
                to="/about"
                onClick={(e) => handleLinkClick(e, "/about")}
                className={`${
                  activeLink === "/about" ? "active-link" : "link-hover-underline"
                } ${scrolled ? "" : "link-hover-underline"}`}
              >
                About me
              </Link>
            </li>
            <li
              className={`p-2 px-4 rounded-lg transition-colors duration-300 ${
                scrolled ? "text-yellow-400" : "text-white"
              }`}
            >
              <Link
                to="/traiteur"
                onClick={(e) => handleLinkClick(e, "/traiteur")}
                className={`${
                  activeLink === "/traiteur" ? "active-link" : "link-hover-underline"
                } ${scrolled ? "" : "link-hover-underline"}`}
              >
                Dabali traiteur
              </Link>
            </li>
            <li
              className={`p-2 px-4 rounded-lg transition-colors duration-300 ${
                scrolled ? "text-yellow-400" : "text-white"
              }`}
            >
              <Link
                to="/menu"
                onClick={(e) => handleLinkClick(e, "/menu")}
                className={`${
                  activeLink === "/menu" ? "active-link" : "link-hover-underline"
                } ${scrolled ? "" : "link-hover-underline"}`}
              >
                Menu
              </Link>
            </li>
            <li
              className={`p-2 px-4 rounded-lg transition-colors duration-300 ${
                scrolled ? "text-yellow-400" : "text-white"
              }`}
            >
              <Link
                to="/franchise"
                onClick={(e) => handleLinkClick(e, "/franchise")}
                className={`${
                  activeLink === "/franchise" ? "active-link" : "link-hover-underline"
                } ${scrolled ? "" : "link-hover-underline"}`}
              >
                Franchise
              </Link>
            </li>
            <li
              className={`p-2 px-4 rounded-lg transition-colors duration-300 ${
                scrolled ? "text-yellow-400" : "text-white"
              }`}
            >
              <Link
                to="/contact"
                onClick={(e) => handleLinkClick(e, "/contact")}
                className={`${
                  activeLink === "/contact" ? "active-link" : "link-hover-underline"
                } ${scrolled ? "" : "link-hover-underline"}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className={`text-2xl custom-md:hidden ${
            scrolled ? "text-yellow-400" : "text-white "
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div
        className={`absolute inset-0 bg-dark-purple z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } custom-md:hidden`}
        style={{ width: "80%", height: "100vh" }}
      >
        <div className="flex flex-col items-start p-4 space-y-4 text-darker-blue font-custom h-full bg-white">
          <h1 className="text-2xl font-bold text-darker-blue mb-6 cursor-pointer">
            Bekono Sophie
          </h1>
          <Link
            to="/"
            className={`w-full py-2 ${activeLink === "/" ? "active-link" : "hover:bg-gray-800"}`}
            onClick={(e) => handleLinkClick(e, "/")}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`w-full py-2 ${activeLink === "/about" ? "active-link" : "hover:bg-gray-800"}`}
            onClick={(e) => handleLinkClick(e, "/about")}
          >
            About me
          </Link>
          <Link
            to="/traiteur"
            className={`w-full py-2 ${activeLink === "/traiteur" ? "active-link" : "hover:bg-gray-800"}`}
            onClick={(e) => handleLinkClick(e, "/traiteur")}
          >
            Dabali traiteur
          </Link>
          <Link
            to="/menu"
            className={`w-full py-2 ${activeLink === "/menu" ? "active-link" : "hover:bg-gray-800"}`}
            onClick={(e) => handleLinkClick(e, "/menu")}
          >
            Menu
          </Link>
          <Link
            to="/franchise"
            className={`w-full py-2 ${activeLink === "/franchise" ? "active-link" : "hover:bg-gray-800"}`}
            onClick={(e) => handleLinkClick(e, "/franchise")}
          >
            Franchise
          </Link>
          <Link
            to="/gallerie"
            className={`w-full py-2 ${activeLink === "/gallerie" ? "active-link" : "hover:bg-gray-800"}`}
            onClick={(e) => handleLinkClick(e, "/gallerie")}
          >
            Gallerie
          </Link>
          <Link
            to="/contact"
            className={`w-full py-2 ${activeLink === "/contact" ? "active-link" : "hover:bg-gray-800"}`}
            onClick={(e) => handleLinkClick(e, "/contact")}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
