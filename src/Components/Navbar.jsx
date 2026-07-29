import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-5">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400 tracking-wide">
          Shraddha<span className="text-white">.</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-[17px] font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setActive(item.toLowerCase())}
                className={`transition duration-300 hover:text-cyan-400 ${
                  active === item.toLowerCase()
                    ? "text-cyan-400"
                    : "text-gray-300"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex gap-5 text-2xl">
          <a
            href="https://github.com/shraddha11953"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/YOUR-LINKEDIN"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 duration-300"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700">
          <ul className="flex flex-col items-center py-6 gap-5 text-lg">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => {
                    setActive(item.toLowerCase());
                    setMenuOpen(false);
                  }}
                  className={`transition duration-300 hover:text-cyan-400 ${
                    active === item.toLowerCase()
                      ? "text-cyan-400"
                      : "text-gray-300"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}

            <div className="flex gap-6 text-2xl pt-3">
              <a
                href="https://github.com/shraddha11953"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400"
              >
                <FaGithub />
              </a>

              <a
                
                href="https://www.linkedin.com/in/shraddha-jadhav-96349b2a8"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400"
              >
                <FaLinkedin />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;