import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 text-white py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Heading */}

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
          Work <span className="text-cyan-400">Experience</span>
        </h2>

        <div className="w-24 sm:w-28 lg:w-32 h-1 bg-cyan-400 mx-auto rounded-full mt-4 mb-10 sm:mb-12 lg:mb-16"></div>

        {/* Experience Card */}

        <div className="relative border-l-4 border-cyan-400 pl-6 sm:pl-8 lg:pl-10">

          {/* Circle */}

          <div className="absolute -left-[15px] top-2 w-7 h-7 rounded-full bg-cyan-400"></div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-slate-900 border border-slate-700 rounded-2xl p-5 sm:p-7 lg:p-10 shadow-lg"
          >
            {/* Top */}

            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">

              <div>

                <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400 leading-snug">
                  Software Developer Intern
                </h3>

                <div className="flex items-center gap-3 mt-4 text-gray-300 text-sm sm:text-base">
                  <FaBriefcase className="shrink-0" />
                  <span className="font-semibold">ITECHNOPAD, Pune</span>
                </div>

                <div className="flex items-center gap-3 mt-3 text-gray-300 text-sm sm:text-base">
                  <FaCalendarAlt className="shrink-0" />
                  <span>Dec 2025 - Present</span>
                </div>

                <div className="flex items-center gap-3 mt-3 text-gray-300 text-sm sm:text-base">
                  <FaMapMarkerAlt className="shrink-0" />
                  <span>Pune, Maharashtra</span>
                </div>

              </div>

              <div className="self-start bg-cyan-500 text-black px-5 py-2 rounded-full font-semibold text-sm sm:text-base">
                Current
              </div>

            </div>

            {/* Project */}

            <div className="mt-8 sm:mt-10">

              <h4 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                Project : StayNMeal
              </h4>

              <p className="text-cyan-400 text-sm sm:text-base mb-6 break-words">
                Python • FastAPI • PostgreSQL • React • Maps API
              </p>

            </div>

            {/* Responsibilities */}

            <div>

              <h4 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6">
                Key Responsibilities
              </h4>

              <ul className="space-y-3 sm:space-y-4 text-gray-300 leading-7 sm:leading-8 text-sm sm:text-base">

                <li>
                  ✔ Developed scalable backend services and REST APIs using{" "}
                  <span className="text-cyan-400">Python & FastAPI</span>.
                </li>

                <li>
                  ✔ Built Subscription, Coupon, Pricing, Charges, Taxation and
                  Feature Gating modules.
                </li>

                <li>
                  ✔ Developed Schedule Visit and Callback Request workflows for
                  User and Admin portals.
                </li>

                <li>
                  ✔ Implemented Role-Based Access Control (RBAC) for secure user
                  and admin management.
                </li>

                <li>
                  ✔ Designed Ticketing, Feedback, Leads, Support Center and Help
                  Desk modules.
                </li>

                <li>
                  ✔ Implemented Logging, Error Handling and Monitoring for
                  production support.
                </li>

                <li>
                  ✔ Developed Pricing Rules, Charges and GST Taxation workflows
                  for Admin Panel.
                </li>

                <li>
                  ✔ Worked with PostgreSQL database schema, Alembic migrations
                  and data management.
                </li>

                <li>
                  ✔ Built and tested REST APIs for frontend integration and
                  cross-module communication.
                </li>

                <li>
                  ✔ Integrated Maps API for dynamic location and address
                  management.
                </li>

                <li>
                  ✔ Developed Duplicate Image Detection and backend validation
                  logic.
                </li>

                <li>
                  ✔ Fixed production bugs, optimized existing features and
                  collaborated in Agile development.
                </li>

                <li>
                  ✔ Used Git, Docker and collaborative development workflows.
                </li>

              </ul>

            </div>

            {/* Technologies */}

            <div className="mt-8 sm:mt-10">

              <h4 className="text-xl sm:text-2xl font-semibold mb-5">
                Technologies Used
              </h4>

              <div className="flex flex-wrap gap-3 sm:gap-4">

                {[
                  "Python",
                  "FastAPI",
                  "REST API",
                  "PostgreSQL",
                  "React",
                  "Docker",
                  "Git",
                  "Alembic",
                  "RBAC",
                  "Maps API",
                  "Authentication",
                  "Feature Gating",
                  "Subscription",
                  "Pricing",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-cyan-500/20 border border-cyan-500 text-cyan-300 px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base"
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </div>

          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}

export default Experience;