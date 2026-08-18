import { motion } from "framer-motion";

import {
  FaPython,
  FaJs,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaServer,
  FaCode,
  FaDocker,
  FaJira,
  FaRobot,
  FaCloud,
  FaNetworkWired,
  FaDesktop,
  FaTasks,
} from "react-icons/fa";

import {
  SiDjango,
  SiFastapi,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900 text-white py-20 md:py-24 px-6 md:px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Heading */}

        <h2 className="text-3xl md:text-5xl font-bold text-center">
          My <span className="text-cyan-400">Skills</span>
        </h2>

        <div className="w-28 h-1 bg-cyan-400 mx-auto rounded-full mt-4 mb-10 md:mb-14"></div>

        {/* Main Skills */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          {/* Languages */}

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-slate-950 p-6 md:p-8 rounded-xl border border-slate-700"
          >
            <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-6">
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
            className="bg-slate-950 p-6 md:p-8 rounded-xl border border-slate-700"
          >
            <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-6">
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
            className="bg-slate-950 p-6 md:p-8 rounded-xl border border-slate-700"
          >
            <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-6">
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

          {/* Backend Development */}

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-slate-950 p-6 md:p-8 rounded-xl border border-slate-700"
          >
            <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-6">
              Backend Development
            </h3>

            <div className="flex flex-wrap gap-3">

              {[
                "REST APIs",
                "Authentication",
                "CRUD Operations",
                "OOP",
                "Data Structures",
                "Algorithms",
                "RBAC",
                "API Integration",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-cyan-500/20 border border-cyan-500/30 px-4 py-2 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}

            </div>
          </motion.div>

          {/* Core Computer Science */}

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-slate-950 p-6 md:p-8 rounded-xl border border-slate-700"
          >
            <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-6">
              Core Computer Science
            </h3>

            <div className="flex flex-wrap gap-3">

              <span className="bg-cyan-500/20 border border-cyan-500/30 px-4 py-2 rounded-full flex items-center gap-2">
                <FaDatabase />
                DBMS
              </span>

              <span className="bg-cyan-500/20 border border-cyan-500/30 px-4 py-2 rounded-full flex items-center gap-2">
                <FaDesktop />
                Operating Systems
              </span>

              <span className="bg-cyan-500/20 border border-cyan-500/30 px-4 py-2 rounded-full flex items-center gap-2">
                <FaNetworkWired />
                Computer Networks
              </span>

              <span className="bg-cyan-500/20 border border-cyan-500/30 px-4 py-2 rounded-full">
                OOP
              </span>

              <span className="bg-cyan-500/20 border border-cyan-500/30 px-4 py-2 rounded-full">
                Data Structures
              </span>

              <span className="bg-cyan-500/20 border border-cyan-500/30 px-4 py-2 rounded-full">
                Algorithms
              </span>

            </div>
          </motion.div>

          {/* Tools & DevOps */}

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-slate-950 p-6 md:p-8 rounded-xl border border-slate-700"
          >
            <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-6">
              Tools & DevOps
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">

              <div>
                <FaGitAlt className="text-4xl mx-auto text-orange-500" />
                <p className="mt-3 text-sm">Git</p>
              </div>

              <div>
                <FaGithub className="text-4xl mx-auto" />
                <p className="mt-3 text-sm">GitHub</p>
              </div>

              <div>
                <FaCode className="text-4xl mx-auto text-blue-500" />
                <p className="mt-3 text-sm">VS Code</p>
              </div>

              <div>
                <FaDocker className="text-4xl mx-auto text-blue-400" />
                <p className="mt-3 text-sm">Docker</p>
              </div>

              <div>
                <FaJira className="text-4xl mx-auto text-blue-500" />
                <p className="mt-3 text-sm">Jira</p>
              </div>

              <div>
                <FaCloud className="text-4xl mx-auto text-cyan-400" />
                <p className="mt-3 text-sm">Render</p>
              </div>

            </div>
          </motion.div>

          {/* AI Tools */}

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-slate-950 p-6 md:p-8 rounded-xl border border-slate-700"
          >
            <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
              <FaRobot />
              AI Tools
            </h3>

            <div className="flex flex-wrap gap-3">

              <span className="bg-cyan-500/20 border border-cyan-500/30 px-4 py-2 rounded-full">
                ChatGPT
              </span>

              <span className="bg-cyan-500/20 border border-cyan-500/30 px-4 py-2 rounded-full">
                Claude
              </span>

              <span className="bg-cyan-500/20 border border-cyan-500/30 px-4 py-2 rounded-full">
                Lovable
              </span>

              <span className="bg-cyan-500/20 border border-cyan-500/30 px-4 py-2 rounded-full">
                Emergent
              </span>

              <span className="bg-cyan-500/20 border border-cyan-500/30 px-4 py-2 rounded-full">
                AI-Assisted Development
              </span>

            </div>
          </motion.div>

        </div>

        {/* Product Management & Deployment */}

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-slate-950 p-6 md:p-8 rounded-xl border border-slate-700 mt-6 md:mt-8"
        >
          <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-6">
            Product & Deployment
          </h3>

          <div className="flex flex-wrap gap-3">

            <span className="bg-cyan-500/20 border border-cyan-500/30 px-4 py-2 rounded-full flex items-center gap-2">
              <FaTasks />
              Product Management
            </span>

            <span className="bg-cyan-500/20 border border-cyan-500/30 px-4 py-2 rounded-full">
              Agile Development
            </span>

            <span className="bg-cyan-500/20 border border-cyan-500/30 px-4 py-2 rounded-full">
              Jira
            </span>

            <span className="bg-cyan-500/20 border border-cyan-500/30 px-4 py-2 rounded-full">
              Docker
            </span>

            <span className="bg-cyan-500/20 border border-cyan-500/30 px-4 py-2 rounded-full flex items-center gap-2">
              <FaCloud />
              Render Deployment
            </span>

            <span className="bg-cyan-500/20 border border-cyan-500/30 px-4 py-2 rounded-full">
              API Integration
            </span>

            <span className="bg-cyan-500/20 border border-cyan-500/30 px-4 py-2 rounded-full">
              Git Workflow
            </span>

          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}

export default Skills;