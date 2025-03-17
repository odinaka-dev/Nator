import { Link, useLocation } from "react-router";
import { FaRainbow } from "react-icons/fa";
import { LuSquareMenu } from "react-icons/lu";

const Header = () => {
  const location = useLocation();
  // the links
  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Translate",
      href: "/translate",
    },
    {
      label: "Options",
      href: "/options",
    },
    {
      label: "Login",
      href: "/login",
    },
    {
      label: "Sign Up",
      href: "/signup",
    },
  ];

  return (
    <nav className="py-4 flex space-x-20 items-center">
      <div className="logo text-white">
        <Link to={"/"} className="text-[#00FCDB] text-3xl">
          <FaRainbow />
        </Link>
      </div>
      <div className="links_user flex items-center space-x-8">
        <ul className="flex space-x-6 items-center">
          {links.map((link) => (
            <li
              className={`${
                link.href === location.pathname
                  ? "text-[#00FCDB]"
                  : "text-white"
              } cursor-pointer hover:text-[#00FCDB] transition-colors duration-300`}
              key={link.href}
            >
              <Link to={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="md:hidden text-xl cursor-pointer hover:text-[#00FCDB]">
          <LuSquareMenu />
        </div>
      </div>
    </nav>
  );
};

export default Header;
