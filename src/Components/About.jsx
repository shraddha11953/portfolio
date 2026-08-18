import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaBriefcase,
  FaCode,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 text-white py-20 md:py-24 px-6 md:px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Heading */}

        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          About <span className="text-cyan-400">Me</span>
        </h2>

        <div className="w-24 md:w-28 h-1 bg-cyan-400 mx-auto rounded-full mb-10 md:mb-14"></div>

        {/* Main Content */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left Side */}

          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-400">
              Software Engineer & Product Manager
            </h3>

            <p className="text-gray-300 leading-8 text-base md:text-lg">
              I am a Software Engineer with a strong foundation in Python
              backend development, API development, databases, and
              scalable web applications. I work with technologies such as
              Python, FastAPI, Django, PostgreSQL, REST APIs, and Docker.
            </p>

            <p className="text-gray-300 leading-8 text-base md:text-lg mt-5">
              Alongside software development, I also work across product
              management activities, including understanding product
              requirements, breaking features into actionable tasks,
              collaborating with development teams, and contributing to
              product-focused solutions.
            </p>

            <p className="text-gray-300 leading-8 text-base md:text-lg mt-5">
              I enjoy solving real-world problems, designing reliable
              backend systems, working with databases, and turning
              requirements into practical and maintainable products.
              I am particularly interested in building technology-driven
              products that create a meaningful user and business impact.
            </p>

            {/* Personal Details */}

            <div className="mt-8 space-y-3 text-gray-300 text-sm md:text-base">

              <p>
                <span className="text-cyan-400 font-semibold">
                  Name :
                </span>{" "}
                Shraddha Jadhav
              </p>

              <p>
                <span className="text-cyan-400 font-semibold">
                  Location :
                </span>{" "}
                Pune, Maharashtra
              </p>

              <p className="break-all">
                <span className="text-cyan-400 font-semibold">
                  Email :
                </span>{" "}
                shraddhaj9147@gmail.com
              </p>

              <p>
                <span className="text-cyan-400 font-semibold">
                  Phone :
                </span>{" "}
                +91 9130345867
              </p>

            </div>
          </div>

          {/* Right Side */}

          <div className="grid grid-cols-2 gap-4 md:gap-6">

            {/* Projects */}

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900 rounded-xl p-5 md:p-8 border border-slate-700 text-center"
            >
              <FaLaptopCode
                className="text-cyan-400 text-4xl md:text-5xl mx-auto mb-4 md:mb-5"
              />

              <h2 className="text-3xl md:text-4xl font-bold">
                4+
              </h2>

              <p className="text-gray-400 mt-3 text-sm md:text-base">
                Major Projects
              </p>
            </motion.div>

            {/* Experience */}

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900 rounded-xl p-5 md:p-8 border border-slate-700 text-center"
            >
              <FaBriefcase
                className="text-cyan-400 text-4xl md:text-5xl mx-auto mb-4 md:mb-5"
              />

              <h2 className="text-3xl md:text-4xl font-bold">
                1+
              </h2>

              <p className="text-gray-400 mt-3 text-sm md:text-base">
                Professional Experience
              </p>
            </motion.div>

            {/* Coding */}

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900 rounded-xl p-5 md:p-8 border border-slate-700 text-center"
            >
              <FaCode
                className="text-cyan-400 text-4xl md:text-5xl mx-auto mb-4 md:mb-5"
              />

              <h2 className="text-3xl md:text-4xl font-bold">
                500+
              </h2>

              <p className="text-gray-400 mt-3 text-sm md:text-base">
                Coding Problems Solved
              </p>
            </motion.div>

            {/* Education */}

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900 rounded-xl p-5 md:p-8 border border-slate-700 text-center"
            >
              <FaUserGraduate
                className="text-cyan-400 text-4xl md:text-5xl mx-auto mb-4 md:mb-5"
              />

              <h2 className="text-3xl md:text-4xl font-bold">
                MCA
              </h2>

              <p className="text-gray-400 mt-3 text-sm md:text-base">
                Vishwakarma University
              </p>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;