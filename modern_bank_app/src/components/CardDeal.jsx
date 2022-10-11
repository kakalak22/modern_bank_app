import React from "react";
import { card } from "../assets";
import styles, { layout } from "../constant/style";
import Button from "./Button";
import { motion } from "framer-motion";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <motion.h2
          initial={{ x: 500, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.6,
          }}
          className={styles.heading2}
        >
          Find a better card deal <br className="sm:block hidden" /> in few easy
          step
        </motion.h2>

        <motion.p
          initial={{ x: 500, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.8,
          }}
          className={`${styles.paragraph} max-w-[470px] mt-5`}
        >
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: 1,
          }}
        >
          <Button styles="mt-10" />
        </motion.div>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
