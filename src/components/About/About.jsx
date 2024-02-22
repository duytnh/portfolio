import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/about.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="info icon" />
            <div className={styles.aboutItemText}>
              <h3>Information</h3>
              <p>
                I am Hoàng Duy. I was born in 2001. I come from Tiền Giang province.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="edu icon" />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>
                I have studied at Vinh Long University of Technology Education. My GPA was 3.2/4.0.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="interest icon" />
            <div className={styles.aboutItemText}>
              <h3>Interest</h3>
              <p>
                I enjoy watching movies, playing sports, listen to music and learning new things
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
