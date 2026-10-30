"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  href: string;
  children: ReactNode;
}

export default function MagneticButton({
  href,
  children,
}: MagneticButtonProps) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="
          group
          inline-flex
          items-center
          gap-4
          rounded-full
          bg-[#007aff]
          px-6
          py-3.5
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.18em]
          text-white
          transition-all
          duration-300
          hover:bg-white
          hover:text-black
        "
      >
        {children}

        <span
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            bg-white
            text-black
            transition-transform
            duration-300
            group-hover:rotate-45
          "
        >
          <ArrowUpRight size={15} />
        </span>
      </motion.div>
    </Link>
  );
}