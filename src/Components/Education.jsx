import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section
      id="education"
      className="bg-slate-900 text-white py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Heading */}

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
          My <span className="text-cyan-400">Education</span>
        </h2>

        <div className="w-24 sm:w-28 lg:w-32 h-1 bg-cyan-400 mx-auto rounded-full mt-4 mb-10 sm:mb-12 lg:mb-16"></div>

        {/* Timeline Container */}

        <div className="relative border-l-4 border-cyan-400 pl-6 sm:pl-8 lg:pl-10 space-y-8 sm:space-y-10 lg:space-y-12">

          {/* MCA */}

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative bg-slate-950 border border-slate-700 p-5 sm:p-6 lg:p-8 rounded-2xl"
          >
            {/* Dot */}
            <div className="absolute -left-[15px] top-7 sm:top-8 w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center">
              <FaGraduationCap className="text-black text-sm" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 leading-snug">
              Master of Computer Applications (MCA)
            </h3>

            <p className="text-gray-300 mt-2 text-sm sm:text-base">
              Vishwakarma University, Pune
            </p>

            <p className="text-gray-400 mt-1 text-sm sm:text-base">
              Aug 2023 – Jun 2025
            </p>

            <p className="text-gray-300 mt-4 text-sm sm:text-base">
              CGPA:{" "}
              <span className="text-cyan-400 font-semibold">
                7.99 / 10
              </span>
            </p>
          </motion.div>

          {/* BSc */}

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative bg-slate-950 border border-slate-700 p-5 sm:p-6 lg:p-8 rounded-2xl"
          >
            <div className="absolute -left-[15px] top-7 sm:top-8 w-6 h-6 bg-cyan-400 rounded-full"></div>

            <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 leading-snug">
              B.Sc. Mathematics
            </h3>

            <p className="text-gray-300 mt-2 text-sm sm:text-base">
              Shivaji University, Kolhapur
            </p>

            <p className="text-gray-400 mt-1 text-sm sm:text-base">
              Aug 2020 – Jun 2023
            </p>

            <p className="text-gray-300 mt-4 text-sm sm:text-base">
              CGPA:{" "}
              <span className="text-cyan-400 font-semibold">
                8.68 / 10
              </span>
            </p>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}

export default Education;