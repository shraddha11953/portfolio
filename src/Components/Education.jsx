import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section
      id="education"
      className="bg-slate-900 text-white py-24 px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Heading */}

        <h2 className="text-5xl font-bold text-center">
          My <span className="text-cyan-400">Education</span>
        </h2>

        <div className="w-32 h-1 bg-cyan-400 mx-auto rounded-full mt-4 mb-16"></div>

        {/* Timeline Container */}

        <div className="relative border-l-4 border-cyan-400 pl-10 space-y-12">

          {/* MCA */}

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative bg-slate-950 border border-slate-700 p-8 rounded-2xl"
          >
            {/* Dot */}
            <div className="absolute -left-[14px] top-8 w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center">
              <FaGraduationCap className="text-black text-sm" />
            </div>

            <h3 className="text-2xl font-bold text-cyan-400">
              Master of Computer Applications (MCA)
            </h3>

            <p className="text-gray-300 mt-2">
              Vishwakarma University, Pune
            </p>

            <p className="text-gray-400 mt-1">
              Aug 2023 – Jun 2025
            </p>

            <p className="text-gray-300 mt-4">
              CGPA: <span className="text-cyan-400 font-semibold">7.99 / 10</span>
            </p>

          </motion.div>

          {/* BSc */}

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative bg-slate-950 border border-slate-700 p-8 rounded-2xl"
          >
            <div className="absolute -left-[14px] top-8 w-6 h-6 bg-cyan-400 rounded-full"></div>

            <h3 className="text-2xl font-bold text-cyan-400">
              B.Sc. Mathematics
            </h3>

            <p className="text-gray-300 mt-2">
              Shivaji University, Kolhapur
            </p>

            <p className="text-gray-400 mt-1">
              Aug 2020 – Jun 2023
            </p>

            <p className="text-gray-300 mt-4">
              CGPA: <span className="text-cyan-400 font-semibold">8.68 / 10</span>
            </p>

          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}

export default Education;