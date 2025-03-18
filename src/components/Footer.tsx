import { Link, useLocation } from "react-router";
import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaMailBulk,
  FaPhoneVolume,
  FaRainbow,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationPin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const location = useLocation();

  const footerLinks = [
    {
      label: "About Company",
      href: "/about",
    },
    {
      label: "What we offer",
      href: "/about",
    },
    {
      label: "professional Team",
      href: "/about",
    },
  ];
  return (
    <footer className="bg-black py-16">
      <main className="main_footer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="footer-one">
          <div className="logo text-white">
            <Link
              to={"/"}
              className="text-[#00FCDB] text-3xl flex gap-2  items-center"
            >
              <FaRainbow /> <span className="text-white">Nator</span>
            </Link>
          </div>
          <div className="copyrights text-[#A8ACB7]">
            <p className="capitalize font-normal text-balance text-sm py-2">
              Copyright 2025 NatorMentor. All right reserved
            </p>
            <div className="socials flex space-x-6 pt-4 text-[#A8ACB7]">
              <FaYoutube className="hover:text-[#00FCDB] transition-colors duration-300" />
              <FaFacebook className="hover:text-[#00FCDB] transition-colors duration-300" />
              <FaXTwitter className="hover:text-[#00FCDB] transition-colors duration-300" />
              <FaInstagram className="hover:text-[#00FCDB] transition-colors duration-300" />
            </div>
          </div>
        </div>
        <div className="footer-one">
          <h2 className="text-lg">About</h2>
          <ul>
            {footerLinks.map((link) => (
              <li
                className={`${
                  link.href === location.pathname
                    ? "text-[#00FCDB]"
                    : "text-[#a8acb7]"
                } cursor-pointer hover:text-[#00fcdb] mt-2 text-balance text-sm`}
              >
                <Link to={link.href} className="">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-one">
          <h2 className="text-lg">Address</h2>
          <div className="footer_contents">
            <div className="flex gap-2 items-center">
              <FaLocationArrow className="text-[#00FCDB]" />
              <p className="text-balance text-sm mb-2 capitalize">
                551 lekki phase 1 estate, maryland bustop
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <FaPhoneVolume className="text-[#00FCDB]" />
              <p className="text-balance text-sm mb-2">(+234) 805-113-8767</p>
            </div>
            <div className="flex gap-2 items-center">
              <FaMailBulk className="text-[#00FCDB]" />
              <p className="text-balance text-sm">info@natorai.com</p>
            </div>
          </div>
        </div>
        <div className="footer-one">
          <h2 className="text-lg">NewsLetter SignUp</h2>
          <form action="" className="mt-2">
            <div className="grid grid-cols-[80%_20%] space-x-2 input_tag bg-zinc-900 py-[2px]">
              <input
                type="search"
                className="appearance-none p-2 outline-none w-full"
                placeholder="Enter your email Address"
              />
              <input
                type="submit"
                value="Send"
                className="bg-[#3500FC] hover:bg-blue-900 transition-colors duration-300 p-[4px] border-0  text-white w-full cursor-pointer"
              />
            </div>
          </form>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
