import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 text-white py-24 px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Heading */}

        <h2 className="text-5xl font-bold text-center">
          Work <span className="text-cyan-400">Experience</span>
        </h2>

        <div className="w-32 h-1 bg-cyan-400 mx-auto rounded-full mt-4 mb-16"></div>

        {/* Experience Card */}

        <div className="relative border-l-4 border-cyan-400 pl-10">

          {/* Circle */}

          <div className="absolute -left-[15px] top-2 w-7 h-7 rounded-full bg-cyan-400"></div>

          <motion.div
            whileHover={{
              scale: 1.02,
            }}
            className="bg-slate-900 border border-slate-700 rounded-2xl p-10 shadow-lg"
          >
            {/* Top */}

            <div className="flex justify-between items-start">

              <div>

                <h3 className="text-3xl font-bold text-cyan-400">
                  Software Developer Intern
                </h3>

                <div className="flex items-center gap-3 mt-4 text-gray-300">

                  <FaBriefcase />

                  <span className="font-semibold">
                    ITECHNOPAD, Pune
                  </span>

                </div>

                <div className="flex items-center gap-3 mt-3 text-gray-300">

                  <FaCalendarAlt />

                  <span>Dec 2025 - Present</span>

                </div>

                <div className="flex items-center gap-3 mt-3 text-gray-300">

                  <FaMapMarkerAlt />

                  <span>Pune, Maharashtra</span>

                </div>

              </div>

              <div className="bg-cyan-500 text-black px-5 py-2 rounded-full font-semibold">
                Current
              </div>

            </div>

            {/* Project */}

            <div className="mt-10">

              <h4 className="text-2xl font-semibold text-white mb-3">
                Project : StayNMeal
              </h4>

              <p className="text-cyan-400 mb-6">
                Python • FastAPI • PostgreSQL • React • Maps API
              </p>

            </div>

            {/* Responsibilities */}

            <div>

              <h4 className="text-2xl font-semibold mb-6">
                Key Responsibilities
              </h4>

              <ul className="space-y-4 text-gray-300 leading-8">

                <li>
                  ✔ Developed scalable backend services and REST APIs
                  using <span className="text-cyan-400">Python & FastAPI</span>.
                </li>

                <li>
                  ✔ Built Subscription, Coupon, Pricing, Charges,
                  Taxation and Feature Gating modules.
                </li>

                <li>
                  ✔ Developed Schedule Visit and Callback Request
                  workflows for User and Admin portals.
                </li>

                <li>
                  ✔ Implemented Role-Based Access Control (RBAC)
                  for secure user and admin management.
                </li>

                <li>
                  ✔ Designed Ticketing, Feedback, Leads,
                  Support Center and Help Desk modules.
                </li>

                <li>
                  ✔ Implemented Logging, Error Handling and
                  Monitoring for production support.
                </li>

                <li>
                  ✔ Developed Pricing Rules, Charges and
                  GST Taxation workflows for Admin Panel.
                </li>

                <li>
                  ✔ Worked with PostgreSQL database schema,
                  Alembic migrations and data management.
                </li>

                <li>
                  ✔ Built and tested REST APIs for frontend
                  integration and cross-module communication.
                </li>

                <li>
                  ✔ Integrated Maps API for dynamic location
                  and address management.
                </li>

                <li>
                  ✔ Developed Duplicate Image Detection and
                  backend validation logic.
                </li>

                <li>
                  ✔ Fixed production bugs, optimized existing
                  features and collaborated in Agile development.
                </li>

                <li>
                  ✔ Used Git, Docker and collaborative
                  development workflows.
                </li>

              </ul>

            </div>

            {/* Technologies */}

            <div className="mt-10">

              <h4 className="text-2xl font-semibold mb-5">
                Technologies Used
              </h4>

              <div className="flex flex-wrap gap-4">

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
                    className="bg-cyan-500/20 border border-cyan-500 text-cyan-300 px-4 py-2 rounded-full"
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