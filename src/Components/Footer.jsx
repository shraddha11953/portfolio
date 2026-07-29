import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8 sm:py-10 px-5 sm:px-8 lg:px-20 border-t border-slate-700">
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-0">

        {/* Left */}

        <p className="text-gray-400 text-sm sm:text-base text-center md:text-left">
          © 2026 Shraddha Jadhav. All Rights Reserved.
        </p>

        {/* Center */}

        <p className="text-cyan-400 font-semibold text-sm sm:text-base text-center">
          Built with React ⚛️ & Tailwind CSS
        </p>

        {/* Right */}

        <div className="flex gap-5 text-xl sm:text-2xl">

          <a
            href="https://github.com/shraddha11953"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/shraddha-jadhav-96349b2a8"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;