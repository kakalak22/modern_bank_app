import React, { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { card } from "../assets";
import styles, { layout } from "../constant/style";
import Button from "./Button";
import AnimatedText from "./common/AnimatedText";

const CardDeal = () => {
  const [isTextAnimationStart, setIsTextAnimationStart] = useState(false);
  const sectionInfoHeadingCtrl = useAnimationControls();
  const buttonControl = useAnimationControls();
  const imageCtrl = useAnimationControls();

  const animationProps = {
    initial: { opacity: 0, scale: 0 },
    transition: {
      duration: 1,
    },
  };

  const animationSequence = async () => {
    await sectionInfoHeadingCtrl
      .start({ scale: [1.5, 1], opacity: 1 })
      .then(setIsTextAnimationStart(true));
    await imageCtrl.start({ opacity: 1, scale: 1 });
    return await buttonControl.start({ opacity: 1, scale: [1.5, 1] });
  };

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      animationSequence();
    }
  }, [inView]);

  return (
    <section ref={ref} className={layout.section}>
      <div className={layout.sectionInfo}>
        <motion.h2
          animate={sectionInfoHeadingCtrl}
          {...animationProps}
          className={styles.heading2}
        >
          Find a better card deal <br className="sm:block hidden" /> in few easy
          step
        </motion.h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          <AnimatedText isTextAnimationStart={isTextAnimationStart}>
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </AnimatedText>
        </p>
        <motion.div {...animationProps} animate={buttonControl}>
          <Button styles="mt-10" />
        </motion.div>
      </div>

      <div className={layout.sectionImg}>
        <motion.img
          animate={imageCtrl}
          {...animationProps}
          src={card}
          alt="card"
          className="w-[100%] h-[100%]"
        />
      </div>
    </section>
  );
};

export default CardDeal;
