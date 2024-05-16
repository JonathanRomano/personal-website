"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isScrolledDown, setIsScrolledDown] = useState<boolean>(false);

  useEffect(() => {
    let prevScrollPosition = window.scrollY;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition < prevScrollPosition) {
        setIsScrolledDown(false);
      } else {
        setIsScrolledDown(true);
      }

      prevScrollPosition = scrollPosition;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAnchor = (event: React.MouseEvent, anchoId: string) => {
    event.preventDefault();
    const anchor = document.querySelector<HTMLElement>(anchoId);

    if (anchor) {
      window.scrollTo({
        top: anchor.offsetTop,
        behavior: "smooth",
      });

      window.onscroll = () => {
        if (window.scrollY === anchor?.offsetTop) {
          setIsScrolledDown(true);
        }
      };
    }
  };

  return (
    <motion.nav
      className="fixed top-0 w-full flex justify-between items-center h-20 z-50 px-20 bg-neutral"
      initial={false}
      animate={{
        y: isScrolledDown ? "-100%" : "0",
      }}
      transition={{ duration: 0.3 }}
    >
      <a
        className="relative aspect-logo h-20"
        onClick={(e) => scrollToAnchor(e, "#home")}
      >
        <Image
          src={"/logoSimple.png"}
          alt="logo Jonathan Lauxen Romano"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </a>
      <div className="flex gap-6 text-white">
        <a onClick={(e) => scrollToAnchor(e, "#about-me")}>About me</a>
        <a onClick={(e) => scrollToAnchor(e, "#portfolio")}>Portfolio</a>
        <a onClick={(e) => scrollToAnchor(e, "#contact")}>Contact</a>
      </div>
    </motion.nav>
  );
};

export default NavBar;
