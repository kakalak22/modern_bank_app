import React, { useEffect, useState } from "react";
import { quotes } from "../assets";
import { motion } from "framer-motion";
import AnimatedText from "./common/AnimatedText";

const FeedbackCard = ({ content, name, title, img, delay, cardCtrl }) => {
  const [isTextAnimationStart, setIsTextAnimationStart] = useState(false);

  useEffect(() => {
    setIsTextAnimationStart(true);
    return () => {
      setIsTextAnimationStart(false);
    };
  }, [cardCtrl]);

  const animatedProps = {
    initial: { opacity: 0 },
    transition: {
      duration: 1.5,
      type: "spring",
      delay: delay,
    },
  };
  return (
    <motion.div
      {...animatedProps}
      animate={cardCtrl}
      className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card"
    >
      <img
        src={quotes}
        alt="double_quotes"
        className="w-[42px] h-[27px]  object-contain"
      />
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
        <AnimatedText isTextAnimationStart={isTextAnimationStart}>
          {content}
        </AnimatedText>
      </p>

      <div className="flex flex-row ">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-normal text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite ">
            <AnimatedText isTextAnimationStart={isTextAnimationStart}>
              {title}
            </AnimatedText>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeedbackCard;
