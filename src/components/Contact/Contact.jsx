import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Contact = () => {
  const [ref, inView] = useInView();
  return (
    <footer id="contact" className={styles.container} ref={ref}>
      <motion.div className={styles.text}
        initial={{ x: "-100vw" }}
        animate={{ x: inView ? 0 : "-100vw" }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </motion.div>
      <motion.ul className={styles.links}
        initial={{ x: "100vw" }}
        animate={{ x: inView ? 0 : "100vw" }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:duytnh201@gmail.com">duytnh201@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/duytnh">linkedin.com/duytnh</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/duytnh">github.com/duytnh</a>
        </li>
      </motion.ul>
    </footer>
  );
};
