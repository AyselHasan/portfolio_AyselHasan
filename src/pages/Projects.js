import React from "react";
import { motion } from "framer-motion";
import Project from "./../components/Project";

const Projects = () => {
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };
  return (
    <motion.section
      id="projects-section"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      <div className="projects mb-4">
        <div className="projects-inner">
          <h1 className="alegreya f-bold heading-large">Layihələr</h1>
          <Project/>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
