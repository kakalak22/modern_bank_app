import React, { useEffect, useState } from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../constant/style";
import { motion, useAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedText from "./common/AnimatedText";

const Billing = () => {
  const [isTextAnimationStart, setIsTextAnimationStart] = useState(false);
  const sectionInfoHeadingCtrl = useAnimationControls();
  const sectionAppCtrl = useAnimationControls();
  const imageCtrl = useAnimationControls();

  const animationSequence = async () => {
    await sectionInfoHeadingCtrl
      .start({ scale: [1.5, 1], opacity: 1 })
      .then(setIsTextAnimationStart(true));
    await imageCtrl.start({ opacity: 1, scale: 1 });
    return await sectionAppCtrl.start({ opacity: 1, scale: [1.5, 1] });
  };

  const animationProps = {
    initial: { opacity: 0, scale: 0 },
    transition: {
      duration: 1,
    },
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
    <section ref={ref} id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <motion.img
          animate={imageCtrl}
          {...animationProps}
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        <div className="absolute z-[3] top-0 -left-1/2 w-[50%] h-[50%] rounded-full white__gradient" />

        <div className="absolute z-[0] bottom-0 -left-1/2 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>

      <div className={layout.sectionInfo}>
        <motion.h2
          animate={sectionInfoHeadingCtrl}
          {...animationProps}
          className={styles.heading2}
        >
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing
        </motion.h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          <AnimatedText isTextAnimationStart={isTextAnimationStart}>
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </AnimatedText>
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <motion.img
            animate={sectionAppCtrl}
            {...animationProps}
            src={apple}
            alt="appstore"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
          <motion.img
            animate={sectionAppCtrl}
            {...animationProps}
            transition={{ delay: 1 }}
            src={google}
            alt="playstore"
            className="w-[128px] h-[42px] object-contain  cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
