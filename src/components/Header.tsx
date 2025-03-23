import { Link, useLocation } from "react-router";
import { FaRainbow } from "react-icons/fa";
import { LuSquareMenu } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Chat Nator", href: "/translate" },
    { label: "Translate", href: "/options" },
    { label: "Login", href: "/login" },
    { label: "Sign Up", href: "/signup" },
  ];

  return (
    <nav className="bg-[#0d0d0d]">
      <div className="navbar py-4 flex justify-between md:justify-start md:space-x-20 items-center">
        <div className="logo text-white">
          <Link
            to={"/"}
            className="text-[#00FCDB] text-2xl md:text-3xl flex gap-2 items-center"
          >
            <FaRainbow /> <span className="text-white">Nator</span>
          </Link>
        </div>
        <div className="links_user flex items-center space-x-8">
          <ul className="hidden md:flex space-x-6 items-center">
            {links.map((link) => (
              <li
                key={link.href}
                className={`${
                  link.href === location.pathname
                    ? "text-[#00FCDB]"
                    : "text-white"
                } cursor-pointer hover:text-[#00FCDB] transition-colors duration-300`}
              >
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div
            className="flex md:hidden text-2xl cursor-pointer hover:text-[#00FCDB]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <LuSquareMenu />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute md:hidden flex flex-col items-center space-y-4 bg-[#0d0d0d] py-4 z-10 w-full"
          >
            {links.map((link) => (
              <li
                key={link.href}
                className={`${
                  link.href === location.pathname
                    ? "text-[#00FCDB]"
                    : "text-white"
                } cursor-pointer hover:text-[#00FCDB] transition-colors duration-300`}
                onClick={() => setMenuOpen(false)}
              >
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
