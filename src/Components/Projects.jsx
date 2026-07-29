import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projects from "../data/projectsData";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Heading */}

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="w-24 sm:w-28 lg:w-32 h-1 bg-cyan-400 mx-auto rounded-full mt-4 mb-10 sm:mb-12 lg:mb-16"></div>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16 leading-7 text-sm sm:text-base px-2 sm:px-0">
          Here are some of my real-world projects where I worked on
          backend systems, APIs, databases, and full-stack applications.
          Each project demonstrates my problem-solving skills and
          hands-on development experience.
        </p>

        {/* Projects List */}

        <div className="space-y-10 sm:space-y-12 lg:space-y-16">

          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}

        </div>

      </motion.div>
    </section>
  );
}

export default Projects;