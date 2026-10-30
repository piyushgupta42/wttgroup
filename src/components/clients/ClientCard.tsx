"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import type { Client } from "./clients-data";

interface ClientCardProps {
  client: Client;
  index: number;
}

export default function ClientCard({
  client,
  index,
}: ClientCardProps) {
  return (
    <motion.article
      layout
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.96,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.04,
      }}
      className="
        group
        relative
        min-h-[300px]
        overflow-hidden
        border
        border-black/10
        bg-[#f4f4f1]
        p-6
        transition-colors
        duration-500
        hover:bg-[#050509]
        md:min-h-[360px]
        md:p-8
      "
    >
      {/* Background number */}

      <span
        className="
          pointer-events-none
          absolute
          -right-3
          -top-10
          select-none
          text-[150px]
          font-semibold
          leading-none
          tracking-[-0.08em]
          text-black/[0.035]
          transition-colors
          duration-500
          group-hover:text-white/[0.035]
        "
      >
        {client.id}
      </span>

      {/* Top */}

      <div className="relative z-10 flex items-start justify-between">
        <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-black/40 transition-colors duration-500 group-hover:text-white/40">
          {client.id}
        </span>

        <span className="text-[9px] uppercase tracking-[0.2em] text-black/35 transition-colors duration-500 group-hover:text-white/35">
          {client.category}
        </span>
      </div>

      {/* Logo */}

      <div className="relative z-10 flex h-[150px] items-center justify-center md:h-[190px]">
        <motion.div
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            duration: 0.4,
          }}
          className="relative h-24 w-[75%] md:h-32"
        >
          <Image
            src={client.logo}
            alt={`${client.name} logo`}
            fill
            sizes="(max-width: 768px) 70vw, 30vw"
            className="
              object-contain
              grayscale
              opacity-70
              transition-all
              duration-500
              group-hover:grayscale-0
              group-hover:opacity-100
            "
          />
        </motion.div>
      </div>

      {/* Bottom */}

      <div className="relative z-10 mt-auto">

        <div className="mb-5 h-px w-full bg-black/10 transition-colors duration-500 group-hover:bg-white/10" />

        <div className="flex items-end justify-between gap-6">

          <div>
            <h3 className="text-lg font-semibold tracking-[-0.03em] text-black transition-colors duration-500 group-hover:text-white md:text-xl">
              {client.name}
            </h3>

            <p className="mt-2 max-w-xs text-xs leading-5 text-black/40 transition-colors duration-500 group-hover:text-white/40">
              {client.description}
            </p>
          </div>

          <motion.div
            whileHover={{
              rotate: 45,
            }}
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-black/10
              text-black
              transition-all
              duration-500
              group-hover:border-[#007aff]
              group-hover:bg-[#007aff]
              group-hover:text-white
            "
          >
            <ArrowUpRight size={16} />
          </motion.div>

        </div>

      </div>

      {/* Blue hover line */}

      <motion.div
        initial={{
          scaleX: 0,
        }}
        whileHover={{
          scaleX: 1,
        }}
        className="
          absolute
          bottom-0
          left-0
          h-1
          w-full
          origin-left
          bg-[#007aff]
        "
      />
    </motion.article>
  );
}