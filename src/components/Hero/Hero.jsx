import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Hero = () => {
  const [ref, inView] = useInView();
  return (
    <section className={styles.container} ref={ref}>
      <motion.div
        className={styles.content}
        initial={{ x: "-100vw" }}
        animate={{ x: inView ? 0 : "-100vw" }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
      >
        <h1 className={styles.title}>Hi, I'm Duy</h1>
        <p className={styles.description}>
          I'm a fontend developer React. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:duytnh201@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </motion.div>
      <motion.img
        src={getImageUrl("hero/heroWelcome.png")}
        alt="Hero image of me"
        className={styles.heroImg}
        initial={{ x: '100vw' }}
        animate={{ x: inView ? 0 : "100vw" }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
