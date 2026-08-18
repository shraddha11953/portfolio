import { motion } from "framer-motion";
import {
  FaCertificate,
  FaCode,
  FaExternalLinkAlt,
  FaTrophy,
} from "react-icons/fa";

function Achievements() {
  return (
    <section
      id="achievements"
      className="bg-slate-950 text-white py-20 md:py-24 px-6 md:px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center">
          Achievements &{" "}
          <span className="text-cyan-400">Certifications</span>
        </h2>

        <div className="w-28 h-1 bg-cyan-400 mx-auto rounded-full mt-4 mb-10 md:mb-14"></div>

        {/* Certificates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          {/* Certificate 1 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-slate-900 border border-slate-700 rounded-2xl p-6 md:p-8"
          >
            <FaCertificate className="text-4xl text-cyan-400 mb-5" />

            <h3 className="text-xl md:text-2xl font-bold mb-3">
              Basic DevOps Engineering
            </h3>

            <p className="text-gray-400 mb-2">
              TCS iON
            </p>

            <p className="text-gray-500 text-sm mb-6">
              Certificate of Achievement • April 2025
            </p>

            <a
              href="/certificates/basic-devops-engineering.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-5 py-2.5 rounded-full transition"
            >
              View Certificate
              <FaExternalLinkAlt className="text-sm" />
            </a>
          </motion.div>

          {/* Certificate 2 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-slate-900 border border-slate-700 rounded-2xl p-6 md:p-8"
          >
            <FaCertificate className="text-4xl text-cyan-400 mb-5" />

            <h3 className="text-xl md:text-2xl font-bold mb-3">
              Data Mining and Warehousing
            </h3>

            <p className="text-gray-400 mb-2">
              TCS iON
            </p>

            <p className="text-gray-500 text-sm mb-6">
              Certificate of Achievement • December 2024
            </p>

            <a
              href="/certificates/data-mining-warehousing.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-5 py-2.5 rounded-full transition"
            >
              View Certificate
              <FaExternalLinkAlt className="text-sm" />
            </a>
          </motion.div>

        </div>

        {/* Coding Achievements */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* CodeChef */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-slate-900 border border-slate-700 rounded-2xl p-6"
          >
            <FaTrophy className="text-4xl text-yellow-400 mb-5" />

            <h3 className="text-xl font-bold mb-4">
              CodeChef
            </h3>

            <ul className="text-gray-300 space-y-2 text-sm md:text-base">
              <li>• Solved 350+ problems</li>
              <li>• Diamond Badge: Streak Maintainer</li>
              <li>• Silver Badge: Problem Solving</li>
            </ul>

            <a
              href="https://www.codechef.com/users/shraddha9503"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              View CodeChef Profile
              <FaExternalLinkAlt className="text-sm" />
            </a>
          </motion.div>

          {/* LeetCode */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-slate-900 border border-slate-700 rounded-2xl p-6"
          >
            <FaCode className="text-4xl text-orange-400 mb-5" />

            <h3 className="text-xl font-bold mb-4">
              LeetCode
            </h3>

            <ul className="text-gray-300 space-y-2 text-sm md:text-base">
              <li>• Solved 150+ problems</li>
              <li>• Consistent problem-solving practice</li>
              <li>• Data Structures & Algorithms</li>
            </ul>

            <a
              href="https://leetcode.com/u/shraddha9503/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              View LeetCode Profile
              <FaExternalLinkAlt className="text-sm" />
            </a>
          </motion.div>

          {/* HackerRank */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-slate-900 border border-slate-700 rounded-2xl p-6"
          >
            <FaCode className="text-4xl text-green-400 mb-5" />

            <h3 className="text-xl font-bold mb-4">
              HackerRank
            </h3>

            <p className="text-gray-300 text-sm md:text-base leading-7">
              Coding practice and technical skill development through
              programming challenges and problem solving.
            </p>

            <a
              href="https://www.hackerrank.com/profile/shraddha9503"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              View HackerRank Profile
              <FaExternalLinkAlt className="text-sm" />
            </a>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}

export default Achievements;