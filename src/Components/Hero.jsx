import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6 md:px-24 py-24 bg-slate-900 gap-12"
    >
      {/* Left */}
      <motion.div
        className="max-w-xl text-center md:text-left"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-cyan-400 text-lg md:text-xl mb-3">
          Hello, I'm
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          <span className="text-cyan-400">shraddha</span>
        
          <br />
          <span className="text-cyan-400">Jadhav</span>
        </h1>

        <h2 className="text-xl md:text-2xl mt-6 text-gray-300 font-semibold">
          Python Backend Developer
        </h2>

        <p className="mt-6 text-gray-400 leading-8 text-sm md:text-base">
          Passionate Backend Developer with experience in Django,
          FastAPI, REST APIs and PostgreSQL.
          <br />
          <br />
          I enjoy building scalable backend systems,
          solving real-world problems and creating clean,
          secure applications.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center md:justify-start">
          <a
            href="/resume.pdf"
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-3 rounded-full flex items-center justify-center gap-3 transition"
          >
            <FaDownload />
            Resume
          </a>

          <a
            href="#contact"
            className="border border-cyan-400 px-8 py-3 rounded-full hover:bg-cyan-500 hover:text-black transition text-center"
          >
            Contact Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-10 text-3xl justify-center md:justify-start">
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
      </motion.div>

      {/* Right */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center"
      >
        <img
          src={profile}
          alt="profile"
          className="w-64 sm:w-72 md:w-[420px] rounded-full border-4 border-cyan-400 shadow-[0_0_50px_#22d3ee]"
        />
      </motion.div>
    </section>
  );
}

export default Hero;