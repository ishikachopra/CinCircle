import { motion } from 'framer-motion';

import styles from '../../../styles';
import {TitleText} from '../../../components';
import {TypingText} from '../../../components';
import { fadeIn, staggerContainer } from '../../../utils/motions';

const World = () => (
  <section className={`${styles.paddings} relative z-10 bg-gradient-to-tl from-purple-950 via-black to-black min-h-screen`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`$lg:w-[500px] w-full mx-auto flex flex-col`}
    >

      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>Track friends around you and invite them to watch movie Together
          </>
        )}
        textStyles="text-center font-medium "
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-4/5 h-[550px] mx-auto "
      >
        <img src="/map.png" alt="map" className="w-full lg:w-[80%] mx-auto h-auto" />

        <div className="absolute bottom-20 right-48 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-56 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
