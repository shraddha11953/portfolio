import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  const [active, setActive] = useState("home");

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
      <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-5">

        <h1 className="text-2xl font-bold text-cyan-400 tracking-wide">
          Shraddha<span className="text-white">.</span>
        </h1>

        <ul className="flex gap-8 text-[17px] font-medium">
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

        <div className="flex gap-5 text-2xl">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;