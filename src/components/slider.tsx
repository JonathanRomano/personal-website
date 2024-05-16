"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { useState, ReactNode } from "react";
import AnimatedButton from "./animatedButton";

interface SliderProps {
  children: ReactNode;
}

const Slider: React.FC<SliderProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const childrenArray = React.Children.toArray(children);
  const totalChildren = childrenArray.length;

  const x = useMotionValue(0);
  const input = [-200, 0, 200]; // Range of dragging
  const output = [0.7, 1, 0.7]; // Scale values corresponding to drag positions
  const scale = useTransform(x, input, output);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalChildren);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + totalChildren) % totalChildren
    );
  };

  const handleDragEnd = (event, info) => {
    event.preventDefault();
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset > 100 || velocity > 200) {
      handlePrev();
    } else if (offset < -100 || velocity < -200) {
      handleNext();
    }
  };

  return (
    <div className="pt-10">
      <motion.div
        key={activeIndex}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
        style={{ x, scale }}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {childrenArray[activeIndex]}
      </motion.div>
      <div className="flex justify-between">
        <AnimatedButton
          onClick={handlePrev}
          text="prev"
          className="rounded-md border border-1 border-primary text-primary hover:bg-primary hover:text-white px-6 py-2 "
        />
        <AnimatedButton
          onClick={handleNext}
          text="next"
          className="rounded-md border border-1 border-primary text-primary hover:bg-primary hover:text-white px-6 py-2 "
        />
      </div>
    </div>
  );
};

export default Slider;
