import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Experience = () => {
  const [ref, inView] = useInView();
  return (
    <section className={styles.container} id="experience" ref={ref}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <motion.div
          className={styles.skills}
          initial={{ x: "100vw" }}
          animate={{ x: inView ? 0 : "100vw" }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
        >
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </motion.div>
        <motion.ul
          className={styles.history}
          initial={{ x: "-100vw" }}
          animate={{ x: inView ? 0 : "-100vw" }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
        >
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
};
