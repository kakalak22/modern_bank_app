import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { feedback } from "../constant";
import styles from "../constant/style";
import AnimatedText from "./common/AnimatedText";
import FeedbackCard from "./FeedbackCard";

const Testimonial = () => {
  const [isTextAnimationStart, setIsTextAnimationStart] = useState(false);
  const headingCtrl = useAnimation();
  const cardCtrl = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const animationSequence = async () => {
    await headingCtrl
      .start({ opacity: 1, scale: [1.5, 1] })
      .then(setIsTextAnimationStart(true));
    return await cardCtrl.start({ opacity: 1 });
  };

  useEffect(() => {
    if (inView) {
      animationSequence();
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative mt-8`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[60%] rounded-full blue__gradient" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          animate={headingCtrl}
          transition={{
            duration: 1,
          }}
          className={styles.heading2}
        >
          What people are <br className="sm:block hidden" /> saying about us
        </motion.h1>

        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            <AnimatedText isTextAnimationStart={isTextAnimationStart}>
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </AnimatedText>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center feedback-container relative z-[1]">
        {feedback.map((card, index) => (
          <FeedbackCard
            key={card.id}
            {...card}
            cardCtrl={cardCtrl}
            delay={index * 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
