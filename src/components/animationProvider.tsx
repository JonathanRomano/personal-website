"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimationProviderProps {
  children: React.ReactNode;
  className?: string;
}

const AnimationProvider = ({ children, className }: AnimationProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  const variants = {
    hidden: { y: 50, opacity: 0.25 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.7,
      },
    },
  };

  return (
    <motion.div
      className={className}
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

export default AnimationProvider;
