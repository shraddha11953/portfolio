import { motion } from "framer-motion";
import {
  FaPython,
  FaJs,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaServer,
} from "react-icons/fa";

import { SiDjango, SiFastapi, SiPostgresql, SiMysql} from "react-icons/si";

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900 text-white py-24 px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold text-center">
          My <span className="text-cyan-400">Skills</span>
        </h2>

        <div className="w-28 h-1 bg-cyan-400 mx-auto rounded-full mt-4 mb-14"></div>

        <div className="grid grid-cols-2 gap-8">

          {/* Languages */}

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-slate-950 p-8 rounded-xl border border-slate-700"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              Languages
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-4">
                <FaPython className="text-3xl text-yellow-400" />
                <span>Python</span>
              </div>

              <div className="flex items-center gap-4">
                <FaJs className="text-3xl text-yellow-300" />
                <span>JavaScript</span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhp className="text-3xl text-indigo-400" />
                <span>PHP</span>
              </div>

            </div>

          </motion.div>

          {/* Frameworks */}

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-slate-950 p-8 rounded-xl border border-slate-700"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              Frameworks
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-4">
                <SiDjango className="text-3xl text-green-500" />
                <span>Django</span>
              </div>

              <div className="flex items-center gap-4">
                <SiFastapi className="text-3xl text-cyan-400" />
                <span>FastAPI</span>
              </div>

            </div>

          </motion.div>

          {/* Databases */}

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-slate-950 p-8 rounded-xl border border-slate-700"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              Databases
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-4">
                <SiMysql className="text-3xl text-blue-400" />
                <span>MySQL</span>
              </div>

              <div className="flex items-center gap-4">
                <SiPostgresql className="text-3xl text-sky-500" />
                <span>PostgreSQL</span>
              </div>

            </div>

          </motion.div>

          {/* Backend */}

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-slate-950 p-8 rounded-xl border border-slate-700"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              Backend Development
            </h3>

            <div className="flex flex-wrap gap-3">

              <span className="bg-cyan-500/20 px-4 py-2 rounded-full">
                REST APIs
              </span>

              <span className="bg-cyan-500/20 px-4 py-2 rounded-full">
                Authentication
              </span>

              <span className="bg-cyan-500/20 px-4 py-2 rounded-full">
                CRUD Operations
              </span>

              <span className="bg-cyan-500/20 px-4 py-2 rounded-full">
                OOP
              </span>

              <span className="bg-cyan-500/20 px-4 py-2 rounded-full">
                Data Structures
              </span>

              <span className="bg-cyan-500/20 px-4 py-2 rounded-full">
                Algorithms
              </span>

            </div>

          </motion.div>

        </div>

        {/* Tools */}

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-slate-950 p-8 rounded-xl border border-slate-700 mt-8"
        >
          <h3 className="text-2xl font-bold text-cyan-400 mb-6">
            Tools
          </h3>

          <div className="grid grid-cols-5 gap-6 text-center">

            <div>
              <FaGitAlt className="text-5xl mx-auto text-orange-500" />
              <p className="mt-3">Git</p>
            </div>

            <div>
              <FaGithub className="text-5xl mx-auto" />
              <p className="mt-3">GitHub</p>
            </div>

            <div>
              <FaDatabase className="text-5xl mx-auto text-blue-500" />
              <p className="mt-3">VS Code</p>
            </div>

            <div>
              <FaDatabase className="text-5xl mx-auto text-green-500" />
              <p className="mt-3">Excel</p>
            </div>

            <div>
              <FaServer className="text-5xl mx-auto text-cyan-400" />
              <p className="mt-3">Backend APIs</p>
            </div>

          </div>

        </motion.div>

      </motion.div>
    </section>
  );
}

export default Skills;