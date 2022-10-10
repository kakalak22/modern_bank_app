import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../constant/style";

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
    </section>
  );
};

export default Billing;
