import { motion } from "framer-motion";
import React from "react";
import { RiBriefcase4Fill } from "react-icons/ri";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import useMagnetic from "../reactbits/hooks/useMagnetic";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[255px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#111522] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
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

const About = () => {
  const { ref: resumeButtonRef, style: magneticStyle } = useMagnetic({
    radius: 100,
    strength: 0.3,
  });

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I’m Shubham, a <span className="text-white font-semibold">Full Stack Developer with a strong focus on backend development</span>. I enjoy building systems that are reliable, secure, and built to scale. While I’m fully comfortable working across the entire stack to create responsive user interfaces, backend engineering is where I feel most at home.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        What excites me most is <span className="text-white">building APIs</span>, <span className="text-white">working with databases</span> (PostgreSQL & MongoDB), designing robust <span className="text-white">authentication</span> flows, and planning solid <span className="text-white">backend architecture</span>. I like understanding how components interact under the hood, writing race-condition-safe transactions, and tackling real-world problems with clean, maintainable code.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I believe in <span className="text-white">learning through building projects</span>. Whether building production features as a Web Developer Intern at Jagatmitra Foundation, engineering concurrency-safe stock deduction for StockLock, or pursuing my BCA at IGNOU, I continuously challenge myself to learn deeper and write better software.
      </motion.p>
      <button
        ref={resumeButtonRef}
        style={magneticStyle}
        className="mt-10 px-6 py-3 text-white bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-md shadow-md hover:bg-gradient-to-r hover:from-cyan-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        onClick={() => {
          const link = document.createElement("a");
          link.href = "/Shubham_Resume.pdf";
          link.download = "Shubham_Resume.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
      >
        <span className="font-semibold flex gap-1.5 items-center">
          <RiBriefcase4Fill />
          Download Resume
        </span>
      </button>
    </>
  );
};

export default SectionWrapper(About, "about");
