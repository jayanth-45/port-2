import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { languages } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

gsap.registerPlugin(ScrollTrigger);

const LanguageCard = ({ index, name, proficiency }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (el) {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [index]);

  return (
    <motion.div
      ref={cardRef}
      variants={fadeIn("right", "spring", index * 0.2, 0.75)}
      className="bg-tertiary p-4 xs:p-5 sm:p-6 rounded-xl shadow-card flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 xs:gap-0"
    >
      <h3 className="text-white font-bold text-[16px] xs:text-[17px] sm:text-[18px]">{name}</h3>
      <span className="text-[#915EFF] text-[13px] xs:text-[14px] font-medium">{proficiency}</span>
    </motion.div>
  );
};

const Languages = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: -30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <>
      <div ref={headingRef}>
        <p className={styles.sectionSubText}>Communication</p>
        <h2 className={styles.sectionHeadText}>Languages.</h2>
      </div>

      <div className="mt-12 sm:mt-16 md:mt-20 flex flex-col gap-3 xs:gap-4 max-w-2xl w-full">
        {languages.map((lang, index) => (
          <LanguageCard key={`language-${index}`} index={index} {...lang} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Languages, "languages");

