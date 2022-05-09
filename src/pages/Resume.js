import React, { Component } from "react";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import { motion } from "framer-motion";
const Resume = () => {
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
     id="resume-section" className="resume"
     initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
   >
     <div className="resume-inner">
        <h1 className="alegreya f-bold heading-large">CV</h1>
        <WorkExperience/>
        <Education/>
        <Skills/>
      </div>
   </motion.section>
  );
}

export default Resume;
