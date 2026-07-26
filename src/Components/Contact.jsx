import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-24 px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Heading */}

        <h2 className="text-5xl font-bold text-center">
          Get In <span className="text-cyan-400">Touch</span>
        </h2>

        <div className="w-32 h-1 bg-cyan-400 mx-auto rounded-full mt-4 mb-16"></div>

        {/* Content */}

        <div className="grid grid-cols-2 gap-16">

          {/* Left Info */}

          <div className="space-y-8">

            <h3 className="text-3xl font-bold text-cyan-400">
              Let’s Connect 🚀
            </h3>

            <p className="text-gray-300 leading-8">
              I’m open to internships, backend developer roles,
              and freelance opportunities. Feel free to reach out
              if you want to collaborate or hire me.
            </p>

            <div className="space-y-4 text-gray-300">

              <p className="flex items-center gap-3">
                <FaEnvelope className="text-cyan-400" />
                shraddhaj9147@gmail.com
              </p>

              <p className="flex items-center gap-3">
                <FaPhone className="text-cyan-400" />
                +91 9130345867
              </p>

            </div>

            {/* Socials */}

            <div className="flex gap-6 text-3xl mt-6">

              <a
                href="https://github.com/shraddha11953"
                target="_blank"
                className="hover:text-cyan-400"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-cyan-400"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

          {/* Right Side (Simple Form) */}

          <motion.form
            className="bg-slate-900 border border-slate-700 p-10 rounded-2xl space-y-6"
            whileHover={{ scale: 1.01 }}
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 bg-slate-800 rounded-lg outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 bg-slate-800 rounded-lg outline-none"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 bg-slate-800 rounded-lg outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-4 rounded-lg transition"
            >
              Send Message
            </button>

          </motion.form>

        </div>
      </motion.div>
    </section>
  );
}

export default Contact;