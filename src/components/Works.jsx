import { motion } from "framer-motion";
import React, { useState } from "react";
import { Tilt } from "react-tilt";

import { github } from "../assets";
import { projects, words } from "../constants";
import { SectionWrapper } from "../hoc";
import useCardIntent from "../reactbits/hooks/useCardIntent";
import useParallax from "../reactbits/hooks/useParallax";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import useMediaQuery from "../utils/useMediaQuery";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
  isFeatured,
  category,
  onOpenModal,
}) => {
  const { hoverDepth, previewReady, handlers } = useCardIntent({
    id: `project-${index}`,
    hoverDelay: 200,
  });

  const isMobile = useMediaQuery("(max-width: 768px)");
  const { style: parallaxStyle } = useParallax({ enabled: !isMobile && previewReady });

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="w-full lg:w-[calc(50%-20px)] flex"
    >
      <motion.div
        {...handlers}
        animate={{
          y: previewReady ? -6 - hoverDepth * 6 : 0,
          scale: 1 + hoverDepth * 0.012,
        }}
        transition={{
          duration: 0.28,
          type: "spring",
          stiffness: 230,
          damping: 24,
        }}
        className={`relative w-full flex flex-col rounded-2xl overflow-hidden cursor-pointer group bg-[#0a0e17] transition-all duration-400 shadow-[0_6px_24px_rgb(0,0,0,0.25)] hover:shadow-[0_16px_36px_rgb(0,0,0,0.45)] ${
          isFeatured
            ? "border border-blue-500/40 hover:border-blue-500/70 shadow-[0_6px_24px_rgba(37,99,235,0.15)] hover:shadow-[0_16px_40px_rgba(37,99,235,0.3)] ring-1 ring-blue-500/25"
            : "border border-white/[0.08] hover:border-white/[0.18]"
        }`}
        onClick={() => onOpenModal(previewReady)}
      >
        {/* Subtle Top Accent Line */}
        <div
          className={`absolute top-0 left-0 right-0 h-[2px] transition-all duration-500 ${
            isFeatured
              ? "bg-gradient-to-r from-blue-500 via-indigo-400 to-blue-500"
              : "bg-white/10 group-hover:bg-blue-500/50"
          }`}
        ></div>

        {/* Project Number Badge */}
        <div className="absolute top-4 left-4 z-20 transition-all duration-400 group-hover:scale-105">
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-black/60 backdrop-blur-md border border-white/[0.14] shadow-md">
            <span className="text-white/90 font-semibold text-xs tracking-wider font-mono">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Top-Right Badges / Quick Action Buttons */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          {isFeatured && (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-blue-500/20 text-blue-300 border border-blue-500/40 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
              Backend Focus
            </span>
          )}
          {source_code_link && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                window.open(source_code_link, "_blank");
              }}
              className="w-9 h-9 rounded-lg bg-black/60 backdrop-blur-md border border-white/[0.14] hover:border-blue-500/50 hover:bg-white/[0.1] flex items-center justify-center transition-all duration-300 shadow-md"
              aria-label="View source code on GitHub"
              title="View on GitHub"
            >
              <img src={github} alt="github" className="w-4 h-4 opacity-80 group-hover:opacity-100" />
            </motion.button>
          )}
        </div>

        {/* Main Image Section */}
        <div className="relative h-[220px] sm:h-[240px] w-full overflow-hidden bg-[#0d1120]">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-[1.03]"
            style={{
              filter: "brightness(0.9) saturate(1.05) contrast(1.02)",
              ...parallaxStyle,
            }}
          />
          {/* Subtle gradient overlay to smoothly transition into card body */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-black/20 to-black/30 pointer-events-none"></div>
        </div>

        {/* Content Section */}
        <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4 bg-[#0a0e17]">
          <div className="flex flex-col gap-2">
            {/* Title */}
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-white font-bold text-lg sm:text-xl leading-snug tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                {name}
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {tags.map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className={`text-[11px] sm:text-xs font-medium px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] ${tag.color}`}
              >
                #{tag.name}
              </span>
            ))}
          </div>

          {/* Bottom Action Row */}
          <div className="pt-3 border-t border-white/[0.07] flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              {live_demo_link && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(live_demo_link, "_blank");
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600/90 hover:bg-blue-600 rounded-lg shadow-sm hover:shadow-blue-500/20 transition-all duration-200"
                >
                  <span>View Project</span>
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </button>
              )}
              {source_code_link && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(source_code_link, "_blank");
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white/90 bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 rounded-lg transition-all duration-200"
                >
                  <img src={github} alt="GitHub" className="w-3.5 h-3.5 opacity-80" />
                  <span>GitHub</span>
                </button>
              )}
            </div>

            {/* View Details modal trigger indicator */}
            <div className="inline-flex items-center gap-1 text-xs text-blue-400/80 font-medium group-hover:text-blue-300 transition-colors">
              <span>Details</span>
              <svg
                className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Premium Hover Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div
            className={`absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl ${
              isFeatured ? "bg-blue-500/15" : "bg-blue-500/8"
            }`}
          ></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(-1);
  const [modalPreviewReady, setModalPreviewReady] = useState(false);

  const handleOpenModal = (project, previewReady = false) => {
    const index = projects.findIndex((p) => p.name === project.name);
    setCurrentProjectIndex(index);
    setSelectedProject(project);
    setModalPreviewReady(previewReady);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedProject(null);
      setCurrentProjectIndex(-1);
      setModalPreviewReady(false);
    }, 300); // Clear after animation
  };

  const handleNavigateProject = (newIndex) => {
    if (newIndex >= 0 && newIndex < projects.length) {
      setCurrentProjectIndex(newIndex);
      setSelectedProject(projects[newIndex]);
    }
  };

  return (
    <>
      <div>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} `}>My work</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </motion.div>
        <div className="hero-text">
          <motion.span
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[30px] max-w-3xl leading-[50px]"
          >
            <h1>
              Shaping
              <span className="slide pl-3">
                <span className="wrapper">
                  {words.map((word, index) => (
                    <span
                      key={index}
                      className="flex items-center text-3xl md:gap-3 gap-1 pb-2"
                    >
                      <img
                        src={word.imgPath}
                        alt="person"
                        className=" md:p-2 p-1 rounded-full bg-[#8ec5ff]"
                      />
                      <span
                        className="font-extrabold text-white"
                        style={{
                          fontFamily: word.font,
                          textShadow: "0 0 4px #8ec5ff, 0 0 6px white",
                        }}
                      >
                        {word.text}
                      </span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            <h1>into Real Projects that Deliver Results</h1>
          </motion.span>
        </div>

        <div className="mt-20 flex flex-wrap gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}
              onOpenModal={(previewReady) =>
                handleOpenModal(project, previewReady)
              }
            />
          ))}
        </div>
      </div>

      {/* Project Modal with Navigation */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        projects={projects}
        currentIndex={currentProjectIndex}
        onNavigate={handleNavigateProject}
        previewReady={modalPreviewReady}
      />
    </>
  );
};

export default SectionWrapper(Works, "projects");
