import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Projects = () => {
  const [ref, inView] = useInView();
  return (
    <section className={styles.container} id="projects" ref={ref}>
      <h2 className={styles.title}>Projects</h2>
      <motion.div
        className={styles.projects}
        initial={{ y: "100vw" }}
        animate={{ y: inView ? 0 : "100vw" }}
        transition={{ type: "spring", stiffness: 160, damping: 15 }}
      >
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </motion.div>
    </section>
  );
};
