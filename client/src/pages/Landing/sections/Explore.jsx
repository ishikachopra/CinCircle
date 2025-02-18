import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../../../styles';
import { exploreWorlds } from '../../../constants';
import { staggerContainer } from '../../../utils/motions';
import { ExploreCard, TitleText, TypingText } from '../../../components';

const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings} bg-gradient-to-br from-purple-950 via-black to-black` } id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`2xl:max-w-[1100px] w-full mx-auto flex flex-col`}
      >
        <TypingText title="| Explore The CineWorld" textStyles="text-center" />
        <TitleText
          title={<>Choose the genre you want  to explore</>}
          textStyles="text-center font-medium"
        />
       
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[60vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
