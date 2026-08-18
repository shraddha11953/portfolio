import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaCode,
  FaBriefcase,
} from "react-icons/fa";
import { motion } from "framer-motion";
import mypic from "../assets/mypic.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 text-white flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glow */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      {/* Main */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for Software & Product Opportunities
            </motion.div>

            {/* Hello */}
            <p className="text-cyan-400 text-lg md:text-xl mb-3">
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              Shraddha{" "}
              <span className="text-cyan-400">Jadhav</span>
            </h1>

            {/* Role */}
            <div className="mt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Software Engineer
              </h2>

              <p className="mt-2 text-lg sm:text-xl text-gray-400">
                &amp; Product Management
              </p>
            </div>

            {/* Description */}
            <p className="mt-7 max-w-2xl mx-auto lg:mx-0 text-gray-300 leading-8 text-base md:text-lg">
              Software Engineer specializing in Python backend development,
              REST APIs, databases, and scalable web applications.
            </p>

            <p className="mt-4 max-w-2xl mx-auto lg:mx-0 text-gray-400 leading-7">
              I also contribute to product management by translating
              requirements into practical features and collaborating across
              technology and product workflows.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 mt-7 justify-center lg:justify-start">
              {[
                "Python",
                "FastAPI",
                "Django",
                "PostgreSQL",
                "REST APIs",
                "Docker",
                "Product Management",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full text-sm border border-slate-700 bg-slate-900/80 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-9 justify-center lg:justify-start">
              <a
                href="/resume.pdf"
                download
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-7 py-3.5 rounded-full flex items-center justify-center gap-3 transition duration-300 shadow-lg shadow-cyan-500/20"
              >
                <FaDownload />
                Download Resume
              </a>

              <a
                href="#experience"
                className="border border-cyan-400/70 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 font-semibold px-7 py-3.5 rounded-full flex items-center justify-center gap-3 transition duration-300"
              >
                View Experience
                <FaArrowRight className="text-sm" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-5 mt-8 justify-center lg:justify-start">
              <a
                href="https://github.com/shraddha11953"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center text-xl text-gray-300 hover:text-cyan-400 hover:border-cyan-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/shraddha-jadhav-96349b2a8"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center text-xl text-gray-300 hover:text-cyan-400 hover:border-cyan-400 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          {/* ================= RIGHT ================= */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">

              {/* Glow */}
              <div className="absolute -inset-8 bg-cyan-400/10 rounded-[3rem] blur-3xl" />

              {/* Image Card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-[280px] sm:w-[330px] lg:w-[390px] rounded-[2rem] border border-cyan-400/40 bg-slate-900/90 backdrop-blur-xl p-3 shadow-2xl shadow-cyan-500/20"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <img
                    src={mypic}
                    alt="Shraddha Jadhav"
                    className="w-full h-[360px] sm:h-[420px] lg:h-[470px] object-cover object-top"
                  />

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                  {/* Image Bottom Content */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-cyan-400 font-semibold text-sm">
                      SOFTWARE ENGINEER
                    </p>

                    <p className="text-white text-lg font-bold mt-1">
                      Backend • APIs • Product
                    </p>
                  </div>
                </div>

                {/* Technology Footer */}
                <div className="flex items-center justify-center gap-2 flex-wrap px-3 py-4">
                  <span className="text-xs text-gray-400">
                    Python
                  </span>

                  <span className="text-cyan-400">•</span>

                  <span className="text-xs text-gray-400">
                    FastAPI
                  </span>

                  <span className="text-cyan-400">•</span>

                  <span className="text-xs text-gray-400">
                    PostgreSQL
                  </span>

                  <span className="text-cyan-400">•</span>

                  <span className="text-xs text-gray-400">
                    Product
                  </span>
                </div>
              </motion.div>

              {/* Small Role Badge - outside image */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-slate-900 border border-cyan-400/30 px-5 py-2.5 rounded-full shadow-xl whitespace-nowrap"
              >
                <div className="flex items-center gap-2">
                  <FaBriefcase className="text-cyan-400 text-sm" />
                  <span className="text-sm font-semibold text-gray-200">
                    Software Engineer
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ================= STATS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 lg:mt-24 max-w-4xl mx-auto"
        >
          <div className="text-center border border-slate-800 bg-slate-900/60 rounded-xl py-4">
            <FaCode className="text-cyan-400 mx-auto mb-2" />

            <p className="text-2xl font-bold text-cyan-400">
              4+
            </p>

            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Major Projects
            </p>
          </div>

          <div className="text-center border border-slate-800 bg-slate-900/60 rounded-xl py-4">
            <p className="text-2xl font-bold text-cyan-400">
              500+
            </p>

            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Problems Solved
            </p>
          </div>

          <div className="text-center border border-slate-800 bg-slate-900/60 rounded-xl py-4">
            <p className="text-2xl font-bold text-cyan-400">
              MCA
            </p>

            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Vishwakarma University
            </p>
          </div>

          <div className="text-center border border-slate-800 bg-slate-900/60 rounded-xl py-4">
            <p className="text-2xl font-bold text-cyan-400">
              2
            </p>

            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Professional Roles
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;