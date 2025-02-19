import { motion } from "framer-motion";
import { TypingText } from "../../../components";

import styles from "../../../styles";
import { fadeIn, staggerContainer } from "../../../utils/motions";

const About = () => (
  <section className={`py-10 relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`max-w-[800px] ${styles.flexCenter} flex-col`}
    >
     

      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[30px] font-light sm:text-[24px] text-[14px]  text-secondary-white text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300 "
      >
        CineCircle
        is the
        ultimate way to enjoy movies with friends, no matter where you are.
        Create private rooms, watch movies in perfect sync, and chat in
        real-time with{" "}

        seamless video streaming

        .
      </motion.div>

     
    </motion.div>
  </section>
);

export default About;
