import { motion } from "framer-motion";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { achievements } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const AchievementCard = ({ Achievement }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#111522",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={Achievement.date}
      iconStyle={{ background: Achievement.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full p-1.5">
          <img
            src={Achievement.icon}
            alt={Achievement.company_name}
            className="w-full h-full object-contain rounded-full"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[#8eadff] text-[24px] font-bold">
          {Array.isArray(Achievement.title)
            ? Achievement.title.map((t, i) => <div key={i}>{t}</div>)
            : Achievement.title}
        </h3>
        {Achievement.company_name && (
          <p
            className="text-secondary text-[16px] font-semibold mt-1"
            style={{ margin: 0 }}
          >
            {Achievement.company_name}
          </p>
        )}
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {Achievement.points.map((point, index) => (
          <li
            key={`Achievement-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider leading-relaxed"
          >
            {point}
          </li>
        ))}
      </ul>

      {Achievement.certificate && (
        <div className="mt-5 pt-1">
          <a
            href={Achievement.certificate}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-600 hover:to-indigo-600 text-white rounded-lg text-[14px] font-medium shadow-md transition-all duration-200"
          >
            <span>View Certificate</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      )}
    </VerticalTimelineElement>
  );
};

const Achievement = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Experience & Certifications
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Achievements.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={`Achievement-${index}`}
              Achievement={achievement}
            />
          ))}
        </VerticalTimeline>
      </div>

      <span id="skills"></span>
    </>
  );
};

export default SectionWrapper(Achievement, "achievements");
