import React, { useEffect } from "react";
import styles from "../constant/style";
import Button from "./Button";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const CTA = () => {
  const headingCtrl = useAnimation();
  const paragraphCtrl = useAnimation();
  const buttonCtrl = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const animationSequence = async () => {
    await headingCtrl.start("start");
    await paragraphCtrl.start("start");
    return await buttonCtrl.start("start");
  };

  useEffect(() => {
    if (inView) {
      animationSequence();
    }
    if (!inView) {
      headingCtrl.start("stop");
      paragraphCtrl.start("stop");
      buttonCtrl.start("stop");
    }
  }, [inView]);

  const variants = {
    start: {
      opacity: 1,
      scale: [1.5, 1],
      transition: {
        duration: 1,
      },
    },
    stop: { opacity: 0, scale: 0 },
  };

  return (
    <section
      ref={ref}
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <motion.h2
          variants={variants}
          animate={headingCtrl}
          className={styles.heading2}
        >
          Let's try our service now
        </motion.h2>

        <motion.p
          variants={variants}
          animate={paragraphCtrl}
          className={`${styles.paragraph} max-w-[470px] mt-5`}
        >
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </motion.p>
      </div>
      <motion.div
        variants={variants}
        animate={buttonCtrl}
        className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}
      >
        <Button />
      </motion.div>
    </section>
  );
};

export default CTA;
