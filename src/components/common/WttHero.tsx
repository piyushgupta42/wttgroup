
"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

import WttHeroVisual from "./WttHeroVisual";

interface WttHeroProps {
  eyebrow: string;
  heading: ReactNode;
  description?: ReactNode;

  rightContent?: ReactNode;
  visualType?: "visual" | "custom";

  backgroundText?: string;
  scrollTarget?: string;
  ctaLabel?: string;
  footerText?: string;

  showCTA?: boolean;
  showScroll?: boolean;

  headingClassName?: string;
  contentClassName?: string;
}

export default function WttHero({
  eyebrow,
  heading,
  description,
  rightContent,
  visualType = "visual",
  backgroundText = "OUTDOOR",
  scrollTarget,
  ctaLabel = "Explore More",
  footerText = "People / Places / Possibility",
  showCTA = true,
  showScroll = true,
  headingClassName = "",
  contentClassName = "",
}: WttHeroProps) {
  const scrollToTarget = () => {
    if (!scrollTarget) return;

    document.getElementById(scrollTarget)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#050509] text-white">

      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.055]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.3) 1px,transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Primary Animated Glow */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none absolute right-[-15%] top-[10%]
          h-[55vw] w-[55vw] rounded-full
          bg-[#0976b2]/20 blur-[150px]
        "
      />

      {/* Secondary Animated Glow */}
      <motion.div
        animate={{
          opacity: [0.15, 0.35, 0.15],
          scale: [0.9, 1.15, 0.9],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none absolute right-[12%] top-[28%]
          h-[25vw] w-[25vw] rounded-full
          bg-[#0976b2] blur-[120px]
        "
      />

      {/* Background Typography */}
      <div className="pointer-events-none absolute bottom-[-4vw] right-[-4vw] select-none">
        <span className="
          whitespace-nowrap text-[25vw]
          font-black leading-none
          tracking-[-0.1em] text-white/[0.025]
        ">
          {backgroundText}
        </span>
      </div>

      {/* Main Hero Content */}
      <div className="
        relative z-10 mx-auto flex min-h-[100svh]
        w-full max-w-[1600px] items-center
        px-6 pb-20 pt-32 sm:px-10 lg:px-16
      ">
        <div className="grid w-full items-center gap-12 lg:grid-cols-12">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`
              lg:col-span-7
              ${contentClassName}
            `}
          >
            {/* Eyebrow */}
            <div className="
              mb-8 flex items-center gap-4
              text-xs font-semibold uppercase
              tracking-[0.3em] text-[#0976b2]
            ">
              <span className="h-px w-12 bg-[#0976b2]" />
              {eyebrow}
            </div>

            {/* Main Heading */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`
                  wtt-display-title
                  max-w-[900px]
                  text-[clamp(3.4rem,8vw,8rem)]
                  uppercase
                  ${headingClassName}
                `}
              >
                {heading}
              </motion.h1>
            </div>

            {/* Description and CTA */}
            {description && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.55,
                  duration: 0.8,
                }}
                className="
                  mt-8 flex max-w-[650px]
                  flex-col justify-between gap-6
                  border-t border-white/10 pt-6
                  sm:mt-10 md:flex-row md:items-end
                "
              >
                <div className="
                  max-w-xl text-base font-normal
                  leading-[1.8] text-white/55 sm:text-lg
                ">
                  {description}
                </div>

                {/* {showCTA && (
                  <button
                    type="button"
                    onClick={scrollToTarget}
                    disabled={!scrollTarget}
                    className="
                      group flex shrink-0 items-center gap-3
                      text-xs font-semibold uppercase
                      tracking-[0.25em] text-white/50
                      transition-colors duration-300
                      hover:text-white
                      disabled:cursor-default
                    "
                  >
                    <span>{ctaLabel}</span>

                    <span className="
                      flex h-9 w-9 items-center justify-center
                      rounded-full border border-white/15
                      transition-all duration-300
                      group-hover:border-[#007aff]
                      group-hover:bg-[#007aff]
                      group-hover:text-white
                    ">
                      <ArrowDown
                        size={17}
                        className="
                          transition-transform duration-300
                          group-hover:translate-y-1
                        "
                      />
                    </span>
                  </button>
                )} */}
              </motion.div>
            )}
          </motion.div>

          {/* RIGHT HERO VISUAL */}
          {visualType === "custom" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 4 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 1.1,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative hidden min-h-[600px]
                lg:col-span-5 lg:block
              "
            >
              {rightContent}
            </motion.div>
          ) : (
            <div className="lg:col-span-5">
              {rightContent ?? <WttHeroVisual />}
            </div>
          )}

        </div>
      </div>

      {/* Bottom Scroll Navigation */}
      {showScroll && (
        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="
            mx-auto flex max-w-[1600px]
            items-center justify-between
            px-6 sm:px-10 lg:px-16
          ">
            <button
              type="button"
              onClick={scrollToTarget}
              disabled={!scrollTarget}
              className="
                group flex items-center gap-3
                text-[10px] font-semibold uppercase
                tracking-[0.25em] text-white/30
                transition-colors hover:text-[#0976b2]
                disabled:cursor-default
              "
            >
              Scroll To Explore

              <ArrowDown
                size={14}
                className="
                  transition-transform duration-300
                  group-hover:translate-y-1
                "
              />
            </button>

            <span className="
              hidden text-[10px] font-semibold uppercase
              tracking-[0.25em] text-white/20 sm:block
            ">
              {footerText}
            </span>
          </div>
        </div>
      )}

    </section>
  );
}
