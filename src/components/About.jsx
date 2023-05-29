import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Logo from "../assets/myphoto.png";
import { GoCloudDownload } from "react-icons/go";
import cvPDF from "../assets/Curriculum Vitae - Ishara Madusanka.pdf";

const About = () => {
  return (
    <div className="relative">
      <motion.div>
        <p className={styles.sectionSubText}>About Me</p>
        <h2 className={styles.sectionHeadText}>Introduction</h2>
      </motion.div>
      <div className="flex justify-start items-start mb-10 mt-10 p-10">
        <div>
          <img
            src={Logo}
            className="w-full sm:w-[300px] h-auto rounded-full"
            alt="Logo"
          />
        </div>
      </div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]"
      >
        I'm a software engineering undergraduate with a passion for developing
        innovative programs that expedite the efficiency and effectiveness of
        organizational success . Skilled leader who has the proven ability to
        motivate, educate and manage a team. Also a hardworking, flexible,
        enthusiastic and self-motivated individual with a friendly attitude. I
        believe that I have good interpersonal and communication skills, which
        makes me getting along and working with people easily.
      </motion.p>
      <div className="flex flex-col sm:flex-row gap-10 mt-10">
        <a
          href={cvPDF}
          download
          className="mt-10 text-2xl sm:text-3xl text-[#915eff] flex flex-col sm:flex-row gap-4 sm:gap-8"
        >
          Download CV
          <span>
            <GoCloudDownload className="w-8 h-8 sm:w-10 sm:h-10" />
          </span>
        </a>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default SectionWrapper(About, "about");
