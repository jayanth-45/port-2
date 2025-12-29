import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        padding: "1.25rem",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      dateClassName="text-secondary text-[12px] xs:text-[13px] sm:text-[14px]"
      iconStyle={{ background: experience.iconBg, width: "40px", height: "40px" }}
      iconClassName="xs:w-[50px] xs:h-[50px] sm:w-[60px] sm:h-[60px]"
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[80%] h-[80%] xs:w-[85%] xs:h-[85%] sm:w-[90%] sm:h-[90%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[18px] xs:text-[20px] sm:text-[22px] md:text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[14px] xs:text-[15px] sm:text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-4 sm:mt-5 list-disc ml-4 sm:ml-5 space-y-1.5 sm:space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[12px] xs:text-[13px] sm:text-[14px] pl-1 tracking-wide sm:tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-12 sm:mt-16 md:mt-20 flex flex-col'>
        <VerticalTimeline lineColor="#915EFF">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
