"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CircleDot } from "lucide-react";

export default function WttHeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: 4 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        duration: 1.1,
        delay: 0.25,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative min-h-[380px] w-full sm:min-h-[450px] lg:col-span-5 lg:min-h-[600px]"
    >
      {/* Outer Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute left-1/2 top-1/2
          h-[470px] w-[470px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full border border-[#0976b2]/20
        "
      />

      {/* Inner Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute left-1/2 top-1/2
          h-[350px] w-[350px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full border border-white/10
        "
      />

      {/* Central Card */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute left-1/2 top-1/2 z-20
          w-[310px] -translate-x-1/2
          -translate-y-1/2
        "
      >
        <div className="border border-white/15 bg-[#0c0d12] p-3 shadow-2xl">
          <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/30">
              WTT / OOH
            </span>

            <span className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#0976b2]">
              Live
              <span className="h-1.5 w-1.5 rounded-full bg-[#0976b2]" />
            </span>
          </div>

          <div className="relative flex h-[250px] flex-col justify-between overflow-hidden bg-[#0976b2] p-6">
            <div className="absolute right-[-40px] top-[-40px] h-32 w-32 rounded-full border border-white/30" />

            <div className="absolute bottom-[-80px] left-[-30px] h-52 w-52 rounded-full border border-white/20" />

            <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.25em] text-white/70">
              Outdoor
              <br />
              Is Not
              <br />
              Background.
            </span>

            <span className="relative z-10 text-4xl font-semibold uppercase leading-[0.85] tracking-[-0.07em]">
              It&apos;s
              <br />
              The
              <br />
              Stage.
            </span>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">
              Mumbai / Delhi
            </span>

            <ArrowUpRight size={18} className="text-[#0976b2]" />
          </div>
        </div>
      </motion.div>

      {/* City Reach */}
      <div className="absolute left-0 top-[20%] z-30 border border-white/10 bg-[#0a0b10]/90 p-5 backdrop-blur-xl">
        <div className="mb-2 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40">
          <CircleDot size={11} className="text-[#0976b2]" />
          City Reach
        </div>

        <div className="text-3xl font-semibold tracking-[-0.06em]">
          360°
        </div>
      </div>

      {/* Brand Visibility */}
      <div className="absolute bottom-[18%] right-0 z-30 border border-[#0976b2]/30 bg-[#07142a]/90 p-5 backdrop-blur-xl">
        <div className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#0976b2]">
          Brand Visibility
        </div>

        <div className="text-3xl font-semibold tracking-[-0.06em]">
          24/7
        </div>
      </div>
    </motion.div>
  );
}