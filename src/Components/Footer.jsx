import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10 px-20 border-t border-slate-700">
      <div className="flex flex-col md:flex-row justify-between items-center">

        {/* Left */}

        <p className="text-gray-400">
          © 2026 Shraddha Jadhav. All Rights Reserved.
        </p>

        {/* Center */}

        <p className="text-cyan-400 font-semibold mt-4 md:mt-0">
          Built with React ⚛️ & Tailwind CSS
        </p>

        {/* Right */}

        <div className="flex gap-5 text-2xl mt-4 md:mt-0">

          <a
            href="https://github.com/shraddha11953"
            className="hover:text-cyan-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com"
            className="hover:text-cyan-400"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;