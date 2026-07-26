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
      className="bg-slate-950 text-white py-24 px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold text-center mb-4">
          About <span className="text-cyan-400">Me</span>
        </h2>

        <div className="w-28 h-1 bg-cyan-400 mx-auto rounded-full mb-14"></div>

        <div className="grid grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div>

            <h3 className="text-3xl font-bold mb-6 text-cyan-400">
              Python Backend Developer
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              I am a passionate Python Backend Developer with hands-on
              experience in Django, FastAPI, REST APIs, PostgreSQL, and
              scalable backend development.

              During my internship at ITECHNOPAD, I worked on
              real-world enterprise modules including Role-Based Access
              Control (RBAC), Feature Gating, Subscription Management,
              Pricing, Coupons, Tickets, Leads, Feedback Systems, and
              Map API Integration.

              I enjoy solving complex backend problems, designing
              optimized database schemas, and building secure,
              maintainable applications.
            </p>

            <div className="mt-8 space-y-3 text-gray-300">

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

              <p>
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

          <div className="grid grid-cols-2 gap-6">

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900 rounded-xl p-8 border border-slate-700 text-center"
            >
              <FaLaptopCode
                className="text-cyan-400 text-5xl mx-auto mb-5"
              />

              <h2 className="text-4xl font-bold">
                4+
              </h2>

              <p className="text-gray-400 mt-3">
                Major Projects
              </p>

            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900 rounded-xl p-8 border border-slate-700 text-center"
            >
              <FaBriefcase
                className="text-cyan-400 text-5xl mx-auto mb-5"
              />

              <h2 className="text-4xl font-bold">
                1
              </h2>

              <p className="text-gray-400 mt-3">
                Internship
              </p>

            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900 rounded-xl p-8 border border-slate-700 text-center"
            >
              <FaCode
                className="text-cyan-400 text-5xl mx-auto mb-5"
              />

              <h2 className="text-4xl font-bold">
                500+
              </h2>

              <p className="text-gray-400 mt-3">
                Coding Problems Solved
              </p>

            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900 rounded-xl p-8 border border-slate-700 text-center"
            >
              <FaUserGraduate
                className="text-cyan-400 text-5xl mx-auto mb-5"
              />

              <h2 className="text-4xl font-bold">
                MCA
              </h2>

              <p className="text-gray-400 mt-3">
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