import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { certificates } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

gsap.registerPlugin(ScrollTrigger);

const CertificateCard = ({ index, name, issuer, year }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (el) {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: index * 0.15,
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
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      className="bg-black-200 p-4 xs:p-5 sm:p-6 rounded-xl shadow-card hover:shadow-lg transition-shadow"
    >
      <div className="flex flex-col items-center text-center">
        <h3 className="text-white font-bold text-[14px] xs:text-[16px] sm:text-[18px] mb-1 xs:mb-2">{name}</h3>
        <p className="text-secondary text-[12px] xs:text-[13px] sm:text-[14px] mb-1">{issuer}</p>
        <span className="text-[#915EFF] text-[11px] xs:text-[12px] font-medium">{year}</span>
      </div>
    </motion.div>
  );
};

const Certificates = () => {
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
        <p className={styles.sectionSubText}>Professional Development</p>
        <h2 className={styles.sectionHeadText}>Certifications.</h2>
      </div>

      <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6">
        {certificates.map((cert, index) => (
          <CertificateCard key={`certificate-${index}`} index={index} {...cert} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, "certificates");

