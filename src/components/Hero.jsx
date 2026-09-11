import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import useParallax from "../reactbits/hooks/useParallax";
import { styles } from "../styles";
import useMediaQuery from "../utils/useMediaQuery";
import { ComputersCanvas } from "./canvas";

const TYPED_ITEMS = [
  "Backend Developer",
  "Full Stack Builder",
  "Software Engineer",
  "Always Learning",
];

const TypewriterText = ({
  words = TYPED_ITEMS,
  typeSpeed = 80,
  deleteSpeed = 40,
  pauseEnd = 1600,
  pauseStart = 400,
}) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[wordIndex % words.length];

    let timer;

    if (!isDeleting) {
      if (text.length < currentWord.length) {
        timer = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, typeSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseEnd);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(currentWord.slice(0, text.length - 1));
        }, deleteSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }, pauseStart);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseEnd, pauseStart]);

  return (
    <>
      <span
        className="typed"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(245, 202, 153, 0.5), rgba(245, 202, 153, 0.5))",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 8px",
          backgroundPosition: "0 100%",
          color: "#915EFF",
          display: "inline-block",
          fontWeight: "bold",
          minHeight: "1.2em",
        }}
      >
        {text || "\u200B"}
      </span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="typed-cursor inline-block ml-0.5 text-[#915EFF] font-bold select-none"
        aria-hidden="true"
      >
        |
      </motion.span>
    </>
  );
};

const Hero = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { style: parallaxStyle } = useParallax({
    strength: 0.03,
    maxOffset: 15,
    enabled: !isMobile,
  });

  return (
    <section className={`relative w-full h-screen mx-auto`} id="hero">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div style={parallaxStyle}>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Shubham</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm{" "}
            <TypewriterText />
            <br />
            <b>Bring on the challenges. I’m here to learn, build, and keep growing.</b>

          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
