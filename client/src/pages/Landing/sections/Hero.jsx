import { motion } from 'framer-motion';

import styles from '../../../styles';
import { slideIn, staggerContainer, textVariant } from '../../../utils/motions';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          CINECIRCLE
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h2 className={styles.heroSubHeading}>Stream-</h2>
          <span className={styles.heroSubHeadingWhite} >Share</span>
          <h2 className={styles.heroSubHeading}>-Connect!</h2>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
        
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
