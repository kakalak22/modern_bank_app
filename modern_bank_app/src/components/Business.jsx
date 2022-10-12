import React, { useEffect } from "react";
import { features } from "../constant";
import styles, { layout } from "../constant/style";
import Button from "./Button";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FeatureCard = ({ icon, title, content, index, delay, featureCtrl }) => {
  return (
    <motion.div
      initial={{ x: 800, opacity: 0 }}
      animate={featureCtrl}
      transition={{
        duration: 1.2,
        delay: delay,
      }}
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
          {title}
        </h4>

        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
          {content}
        </p>
      </div>
    </motion.div>
  );
};

const Business = () => {
  const featureCtrl = useAnimation();
  const buttonCtrl = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const animationSequence = async () => {
    await featureCtrl.start({ x: 0, opacity: 1 });
    return await buttonCtrl.start({ scale: [1.5, 1], opacity: 1 });
  };

  useEffect(() => {
    if (inView) {
      animationSequence();
    }
  }, [inView]);

  return (
    <section id="features" className={`${layout.section} mt-10`}>
      <motion.div ref={ref} className={layout.sectionInfo}>
        <motion.h2
          initial={{ x: -500, opacity: 0 }}
          animate={featureCtrl}
          transition={{
            duration: 1.2,
          }}
          className={styles.heading2}
        >
          You do the business, <br className="sm:block hidden" />
          we will handle the money.
        </motion.h2>

        <motion.p
          initial={{ x: -500, opacity: 0 }}
          animate={featureCtrl}
          transition={{
            duration: 1.2,
            delay: 0.5,
          }}
          className={`${styles.paragraph} max-w-[470px] mt-5`}
        >
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={buttonCtrl}
          transition={{
            duration: 1.2,
          }}
        >
          <Button styles="mt-10" />
        </motion.div>
      </motion.div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            content={feature.content}
            index={index}
            delay={0.5 + (index * 2) / 10}
            featureCtrl={featureCtrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Business;
