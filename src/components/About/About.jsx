import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const About = () => {
  const [ref, inView] = useInView();
  return (
    <section className={styles.container} id="about" ref={ref}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <motion.img
          src={getImageUrl("about/about.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
          initial={{ x: "-100vw" }}
          animate={{ x: inView ? 0 : "-100vw" }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
        />
        <ul className={styles.aboutItems}>
          <motion.li
            className={styles.aboutItem}
            initial={{ x: "100vw" }}
            animate={{ x: inView ? 0 : "100vw" }}
            transition={{ type: "spring", stiffness: 160, damping: 15 }}
          >
            <img src={getImageUrl("about/cursorIcon.png")} alt="info icon" />
            <div className={styles.aboutItemText}>
              <h3>Information</h3>
              <p>
                I am Hoàng Duy. I was born in 2001. I come from Tiền Giang province.
              </p>
            </div>
          </motion.li>
          <motion.li
            className={styles.aboutItem}
            initial={{ x: "100vw" }}
            animate={{ x: inView ? 0 : "100vw" }}
            transition={{ type: "spring", stiffness: 140, damping: 15 }}
          >
            <img src={getImageUrl("about/cursorIcon.png")} alt="edu icon" />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>
                I have studied at Vinh Long University of Technology Education. My GPA was 3.2/4.0.
              </p>
            </div>
          </motion.li>
          <motion.li
            className={styles.aboutItem}
            initial={{ x: "100vw" }}
            animate={{ x: inView ? 0 : "100vw" }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <img src={getImageUrl("about/cursorIcon.png")} alt="interest icon" />
            <div className={styles.aboutItemText}>
              <h3>Interest</h3>
              <p>
                I enjoy watching movies, playing sports, listen to music and learning new things
              </p>
            </div>
          </motion.li>
        </ul>
      </div>
    </section>
  );
};
