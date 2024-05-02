"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ExperienceCounter = () => {
  const [year, setYear] = useState(0);
  const finalYear = 6;
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1.0,
  });

  useEffect(() => {
    let intervalId: any;
    if (inView) {
      intervalId = setInterval(() => {
        setYear((prevYear) => {
          if (prevYear < finalYear) {
            return prevYear + 1;
          } else {
            clearInterval(intervalId);
            return prevYear;
          }
        });
      }, 150);
    }

    return () => intervalId && clearInterval(intervalId);
  }, [inView]);

  return (
    <motion.span
      ref={ref}
      className="flex flex-col justify-center items-center text-white font-bold text-[30rem] leading-none"
      initial={{ scale: 0.5 }}
      onAnimationComplete={() => console.log(23)}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      {year}
      <h1 className="text-4xl text-primary pt-2">Years of Experience</h1>
    </motion.span>
  );
};

export default ExperienceCounter;
