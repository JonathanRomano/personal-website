"use client";
import { motion } from "framer-motion";
import { MouseEventHandler, useState } from "react";

interface AnimatedButtonProps {
  text: string;
  onClick?: () => Promise<void> | void;
  className?: string;
}

const AnimatedButton = ({ text, onClick, className }: AnimatedButtonProps) => {
  const [pending, setPending] = useState(false);
  const handleClick: MouseEventHandler<HTMLButtonElement> = async (e) => {
    if (onClick) {
      e.preventDefault();
      setPending(true);
      await onClick!();
      setPending(false);
    }
  };
  return (
    <motion.button
      className={`relative ${className && className}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
    >
      <div className={`${pending && "invisible"}`}>{text}</div>
      {pending && (
        <div
          className={`absolute inset-0 flex w-full h-full items-center justify-center`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <rect x="1" y="1" rx="1" width="10" height="10" fill="currentColor">
              <animate
                id="spinner_c7A9"
                begin="0;spinner_23zP.end"
                attributeName="x"
                dur="0.2s"
                values="1;13"
                fill="freeze"
              />
              <animate
                id="spinner_Acnw"
                begin="spinner_ZmWi.end"
                attributeName="y"
                dur="0.2s"
                values="1;13"
                fill="freeze"
              />
              <animate
                id="spinner_iIcm"
                begin="spinner_zfQN.end"
                attributeName="x"
                dur="0.2s"
                values="13;1"
                fill="freeze"
              />
              <animate
                id="spinner_WX4U"
                begin="spinner_rRAc.end"
                attributeName="y"
                dur="0.2s"
                values="13;1"
                fill="freeze"
              />
            </rect>
            <rect
              x="1"
              y="13"
              rx="1"
              width="10"
              height="10"
              fill="currentColor"
            >
              <animate
                id="spinner_YLx7"
                begin="spinner_c7A9.end"
                attributeName="y"
                dur="0.2s"
                values="13;1"
                fill="freeze"
              />
              <animate
                id="spinner_vwnJ"
                begin="spinner_Acnw.end"
                attributeName="x"
                dur="0.2s"
                values="1;13"
                fill="freeze"
              />
              <animate
                id="spinner_KQuy"
                begin="spinner_iIcm.end"
                attributeName="y"
                dur="0.2s"
                values="1;13"
                fill="freeze"
              />
              <animate
                id="spinner_arKy"
                begin="spinner_WX4U.end"
                attributeName="x"
                dur="0.2s"
                values="13;1"
                fill="freeze"
              />
            </rect>
            <rect
              x="13"
              y="13"
              rx="1"
              width="10"
              height="10"
              fill="currentColor"
            >
              <animate
                id="spinner_ZmWi"
                begin="spinner_YLx7.end"
                attributeName="x"
                dur="0.2s"
                values="13;1"
                fill="freeze"
              />
              <animate
                id="spinner_zfQN"
                begin="spinner_vwnJ.end"
                attributeName="y"
                dur="0.2s"
                values="13;1"
                fill="freeze"
              />
              <animate
                id="spinner_rRAc"
                begin="spinner_KQuy.end"
                attributeName="x"
                dur="0.2s"
                values="1;13"
                fill="freeze"
              />
              <animate
                id="spinner_23zP"
                begin="spinner_arKy.end"
                attributeName="y"
                dur="0.2s"
                values="1;13"
                fill="freeze"
              />
            </rect>
          </svg>
        </div>
      )}
    </motion.button>
  );
};

export default AnimatedButton;
