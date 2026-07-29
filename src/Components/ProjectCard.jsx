import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

function ProjectCard({ project }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [project.images.length]);

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
  <motion.div
    whileHover={{
      scale: 1.02,
      transition: { duration: 0.3 },
    }}
    className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-xl mb-10 sm:mb-12 lg:mb-16"
  >
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 p-5 sm:p-6 lg:p-8">

      {/* ================= LEFT SIDE ================= */}

      <div>

        <div className="relative">

          <img
            src={project.images[currentImage]}
            alt={project.title}
            className="w-full h-56 sm:h-72 lg:h-[350px] object-cover rounded-2xl"
          />

          {/* Previous */}

          <button
            onClick={prevImage}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-cyan-500 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center duration-300"
          >
            <FaChevronLeft />
          </button>

          {/* Next */}

          <button
            onClick={nextImage}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-cyan-500 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center duration-300"
          >
            <FaChevronRight />
          </button>

        </div>

        {/* Image Indicators */}

        <div className="flex justify-center gap-3 mt-5">

          {project.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full duration-300 ${
                currentImage === index
                  ? "bg-cyan-400"
                  : "bg-gray-600"
              }`}
            />
          ))}

        </div>

      </div>

      {/* ================= RIGHT SIDE ================= */}

      <div className="flex flex-col justify-center">

        <p className="text-cyan-400 font-semibold text-base sm:text-lg">
          Project 0{project.id}
        </p>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-3 leading-tight">
          {project.title}
        </h2>

        <h4 className="text-lg sm:text-xl text-gray-400 mt-3">
          {project.category}
        </h4>

        <p className="text-gray-300 leading-7 sm:leading-8 mt-5 sm:mt-6 text-sm sm:text-base">
          {project.description}
        </p>

        {/* Tech Stack */}

        <div className="mt-7 sm:mt-8">

          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-cyan-400">
            Tech Stack
          </h3>

          <div className="flex flex-wrap gap-3">

            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="bg-cyan-500/20 border border-cyan-500 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

        {/* Features */}

        <div className="mt-7 sm:mt-8">

          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-cyan-400">
            Key Features
          </h3>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">

            {project.features.map((feature, index) => (
              <li
                key={index}
                className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm sm:text-base text-gray-300 hover:border-cyan-400 hover:text-white transition duration-300"
              >
                ✔ {feature}
              </li>
            ))}

          </ul>

        </div>

        {/* Buttons */}

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8 sm:mt-10">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-xl transition duration-300"
          >
            <FaGithub />
            GitHub
          </a>

          {project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border border-cyan-400 hover:bg-cyan-500 hover:text-black px-6 py-3 rounded-xl transition duration-300"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}

        </div>

      </div>

    </div>

  </motion.div>
);



}

export default ProjectCard;