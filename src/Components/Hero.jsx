import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-between px-24 bg-slate-900"
    >
      {/* Left */}
      <motion.div
        className="max-w-xl"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-cyan-400 text-xl mb-3">
          Hello, I'm
        </p>

        <h1 className="text-6xl font-bold leading-tight">
          Shraddha
          <br />
          <span className="text-cyan-400">Jadhav</span>
        </h1>

        <h2 className="text-2xl mt-6 text-gray-300 font-semibold">
          Python Backend Developer
        </h2>

        <p className="mt-6 text-gray-400 leading-8">
          Passionate Backend Developer with experience in Django,
          FastAPI, REST APIs and PostgreSQL.

          I enjoy building scalable backend systems,
          solving real-world problems and creating clean,
          secure applications.
        </p>

        <div className="flex gap-5 mt-10">

          <a
            href="/resume.pdf"
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-3 rounded-full flex items-center gap-3 transition"
          >
            <FaDownload />
            Resume
          </a>

          <a
            href="#contact"
            className="border border-cyan-400 px-8 py-3 rounded-full hover:bg-cyan-500 hover:text-black transition"
          >
            Contact Me
          </a>

        </div>

        <div className="flex gap-6 mt-10 text-3xl">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
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
      >
        <img
          src={profile}
          alt="profile"
          className="w-[420px] rounded-full border-4 border-cyan-400 shadow-[0_0_50px_#22d3ee]"
        />
      </motion.div>
    </section>
  );
}

export default Hero;