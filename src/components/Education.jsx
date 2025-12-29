import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

gsap.registerPlugin(ScrollTrigger);

const EducationCard = ({ index, degree, institution, score, year }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (el) {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
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
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="bg-tertiary p-4 xs:p-5 sm:p-6 rounded-2xl shadow-card"
    >
      <div className="flex flex-col">
        <h3 className="text-white font-bold text-[16px] xs:text-[18px] sm:text-[20px]">{degree}</h3>
        <p className="text-secondary text-[13px] xs:text-[14px] sm:text-[15px] md:text-[16px] mt-2">{institution}</p>
        <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center mt-3 xs:mt-4 gap-1 xs:gap-0">
          <span className="text-[#915EFF] font-semibold text-[12px] xs:text-[13px] sm:text-[14px]">{score}</span>
          <span className="text-secondary text-[12px] xs:text-[13px] sm:text-[14px]">{year}</span>
        </div>
      </div>
    </motion.div>
  );
};

const Education = () => {
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
        <p className={styles.sectionSubText}>Academic Background</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </div>

      <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
        {education.map((edu, index) => (
          <EducationCard key={`education-${index}`} index={index} {...edu} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");

