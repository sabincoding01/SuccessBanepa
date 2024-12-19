import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.jpg';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu
  const [showSmallBar, setShowSmallBar] = useState(true); // State to toggle small bar visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the state
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowSmallBar(false);
    } else {
      setShowSmallBar(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "About Us", link: "/about" },
    { id: 3, title: "Services", link: "/services" },
    { id: 4, title: "Contact Us", link: "/contact" },
    { id: 5, title: "Blog", link: "/blog" },
  ];

  return (
    <div className="sticky top-0 z-50">
      {/* Small Bar */}
      {showSmallBar && (
        <div className="bg-blue-600 text-white text-sm py-1">
          <marquee behavior="scroll" direction="left" className="mt-1">
            Welcome to Success BCEC Abroad Study! Banepa,Kavrepalanchwok
          </marquee>
        </div>
      )}

      {/* Navbar */}
      <nav className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-0">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src={logo}
                alt="logo"
                className="h-10 rounded w-40"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:space-x-4 ">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  className="hover:underline"
                >
                  {item.title}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Toggle Button (Hamburger) */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu (Visibility controlled by isMenuOpen state) */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 text-white px-4 py-2">
            <div className="space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  className="block text-lg hover:underline"
                  onClick={() => setIsMenuOpen(false)} // Close the menu when a link is clicked
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
