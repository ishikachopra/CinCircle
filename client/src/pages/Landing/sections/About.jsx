import { motion } from "framer-motion";
import { TypingText } from "../../../components";

import styles from "../../../styles";
import { fadeIn, staggerContainer } from "../../../utils/motions";

const About = () => (
  <section
    className={`${styles.paddings} relative z-10`}
    style={{ fontFamily: "Montserrat, sans-serif" }}
  >
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About CineCircle" textStyles="text-center text-3xl font-bold" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-medium sm:text-[28px] text-[20px] text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300 leading-relaxed"
      >
        <span className="font-bold">CineCircle</span> is the ultimate way to enjoy movies with friends, no matter where you are.
        Create private rooms, watch movies in perfect sync, and chat in real-time with{" "}
        <span className="font-semibold text-white">seamless video streaming</span>. 
        Experience the{" "}
        <span className="font-semibold text-white">future of movie nights</span> with synchronized playback and effortless connection. 
        Just grab your popcorn and start watching together!
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
