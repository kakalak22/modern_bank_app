import React, { useEffect } from "react";
import { clients } from "../constant";
import styles from "../constant/style";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Clients = () => {
  const ctrl = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    ctrl.start({ opacity: 1, scale: [1.5, 1] });
  }, [inView]);

  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client, index) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
          >
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              transition={{
                type: "spring",
                duration: 0.7,
                delay: index * 0.7,
              }}
              animate={ctrl}
              src={client.logo}
              alt="client"
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
