import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const EducationCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.year}
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.name}</h3>
        <p
          className="text-white text-[16px] font-semibold mb-10"
          style={{ margin: 0 }}
        >
          {experience.institute}
        </p>
        <p className="text-secondary text-sm mt-10">{experience.description}</p>
      </div>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  // return (
  //   <div>
  //     <div>
  //       <motion.div>
  //         <h2 className={styles.sectionHeadText}>Education</h2>
  //       </motion.div>
  //     </div>
  //     <div className="grid grid-rows-2 gap-10 mt-10">
  //       <div className="flex flex-col-2 gap-16 bg-tertiary rounded-3xl p-10">
  //         <div>
  //           <p className="text-2xl font-bold">Bachelors's Degree</p>
  //           <p className="italic ">
  //             Sri Lanka Institute of Information Technology
  //           </p>
  //         </div>
  //         <div>
  //           <p className="text-xl font-bold">
  //             Bsc. (Hons) in Software Engineering
  //           </p>
  //           <p className="italic ">
  //             Currently reading for my Bachelors' Degree in Software Engineering
  //             at Sri Lanka Institute of Information Technology (SLIIT)
  //           </p>
  //         </div>
  //       </div>
  //       <div className="flex flex-col-2 gap-16 bg-tertiary rounded-3xl p-10">
  //         <div>
  //           <p className="text-2xl font-bold">School Education</p>
  //           <p className="italic ">Richmond College</p>
  //         </div>
  //         <div>
  //           <p className="text-xl font-bold">
  //             Bsc. (Hons) in Software Engineering
  //           </p>
  //           <p className="italic ">
  //             Currently reading for my Bachelors' Degree in Software Engineering
  //             at Sri Lanka Institute of Information Technology (SLIIT)
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>Education</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {education.map((experience, index) => (
            <EducationCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
