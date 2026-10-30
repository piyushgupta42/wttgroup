"use client";

import { motion } from "framer-motion";

interface MovingTextProps {
  text: string;
  direction?: "left" | "right";
}

export default function MovingText({
  text,
  direction = "left",
}: MovingTextProps) {
  const start = direction === "left" ? "0%" : "-50%";
  const end = direction === "left" ? "-50%" : "0%";

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        initial={{ x: start }}
        animate={{ x: end }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max whitespace-nowrap"
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className="
              mr-10
              text-[clamp(5rem,13vw,14rem)]
              font-black
              uppercase
              leading-[0.75]
              tracking-[-0.07em]
            "
          >
            {text}

            <span className="mx-8 text-[#007aff]">
              ×
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}