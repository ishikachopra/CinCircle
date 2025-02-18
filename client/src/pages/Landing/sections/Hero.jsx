import { motion } from 'framer-motion';
import About from './About';
import styles from '../../../styles';
import { slideIn, staggerContainer, textVariant } from '../../../utils/motions';
import { Play } from 'lucide-react';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6 flex justify-center align-middle h-screen`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`flex flex-col align-middle justify-center mt-20`}
    >
      <div className="flex justify-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1)} className={styles.heroHeading}>
          CINECIRCLE
        </motion.h1>
        <motion.div variants={textVariant(0.8)} className="flex flex-row items-center">
          <h2 className={styles.heroSubHeading}>Stream </h2>
          <span className={styles.heroSubHeadingWhite}> Share</span>
          <h2 className={styles.heroSubHeading}>Connect!</h2>
        </motion.div>
      </div>

      <div className="flex">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-600 text-white px-8 py-3 rounded-full flex items-center space-x-2 hover:bg-purple-700 transition shadow-lg shadow-purple-500/20 justify-center z-10 w-56"
        >
          <Play className="w-5 h-5" />
          <span>Start Watching</span>
        </motion.button>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
      </motion.div>
      <About />
    </motion.div>

    {/* Animation for the 3 images */}
    <div className="md:w-1/2 flex items-center justify-center h-full">
      <div className="h-3/4 w-full flex items-baseline -rotate-6 gap-3">
        {/* Left Small Image */}
        <motion.img
          src="/IronMan.webp"
          alt="Game Art 1"
          className="w-1/3 h-2/3 clip-diamond"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
        {/* Center Large Image */}
        <motion.img
          src="/sizume.jpg"
          alt="Game Art 2"
          className="w-2/5 h-full z-10 shadow-lg clip-diamond"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
        {/* Right Small Image */}
        <motion.img
          src="/lala.jpg"
          alt="Game Art 3"
          className="w-1/3 h-2/3 clip-diamond"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        />
      </div>
    </div>
  </section>
);

export default Hero;
