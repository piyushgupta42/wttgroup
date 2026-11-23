
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Strategic Media Planning",
    description:
      "The right audience. The right location. The right moment. We turn market intelligence and research into smarter OOH media strategies.",
  },
  {
    number: "02",
    title: "Efficient Media Buying",
    description:
      "From high-impact landmarks to hyperlocal touchpoints, we identify and secure media that works harder for your brand and your budget.",
  },
  {
    number: "03",
    title: "Creative Innovation",
    description:
      "We challenge conventional formats, rethink the use of space and transform ordinary media into extraordinary brand experiences.",
  },
  {
    number: "04",
    title: "DOOH & Technology",
    description:
      "Bringing data, digital screens and intelligent planning together to make OOH Advertising more dynamic, responsive and measurable.",
  },
  {
    number: "05",
    title: "Anywhere & Everywhere",
    description:
      "Six offices. A nationwide footprint. One consistent commitment to quality, transparency and precision at every touchpoint.",
  },
  {
    number: "06",
    title: "Measurement & Metrics",
    description:
      "A greater focus into campaign delivery, backed by AI powered audience measurement solutions and structured analytics reporting.",
  },
];

export default function WhatWeDoSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="what-we-do"
      data-snap-section
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#050509]
        text-white
        lg:h-[100svh]
        lg:min-h-0
      "
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute inset-0 opacity-[0.045]
            [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        {!reduceMotion && (
          <motion.div
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute -right-[15%] top-[5%]
              h-[550px] w-[550px]
              rounded-full bg-[#0976b2]/10 blur-[140px]
            "
          />
        )}

        <div className="absolute -left-[20%] bottom-[-20%] h-[400px] w-[400px] rounded-full bg-[#0976b2]/5 blur-[120px]" />

        <div className="absolute left-0 top-0 h-full w-px bg-white/[0.08]" />
        <div className="absolute right-0 top-0 h-full w-px bg-white/[0.08]" />
      </div>

      {/* Main Container */}
      <div
        className="
          relative z-10 mx-auto flex w-full max-w-[1700px]
          flex-col justify-center
          px-5 py-10
          sm:px-8
          md:px-10
          lg:h-full lg:min-h-0 lg:py-5
          lg:px-12
          xl:px-16
        "
      >
        {/* Main Grid */}
        <div
          className="
            grid grid-cols-1 items-center
            gap-10
            lg:min-h-0
            lg:grid-cols-[1.2fr_0.8fr]
            lg:gap-10
            xl:gap-14
          "
        >
          {/* LEFT CONTENT */}
          <div className="min-w-0">
            {/* Heading */}
            <motion.h2
              initial={reduceMotion ? false : { opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="
                max-w-[800px]
                text-[clamp(3rem,5.2vw,6.5rem)]
                font-semibold
                leading-[0.86]
                tracking-[-0.07em]
              "
            >
              FROM SPACE
              <br />
              TO <span className="text-[#0976b2]">IMPACT.</span>
            </motion.h2>

            {/* Description */}
            <div className="mt-5 max-w-[700px]">
              <p className="text-base font-medium leading-7 text-white/90 xl:text-lg">
                OOH is our medium. Making it work for brands is our business.
              </p>

              <p className="mt-3 text-sm leading-6 text-white/55 xl:text-[15px]">
                From strategic planning, efficient buying to creative innovation
                and execution, we bring every part of OOH Advertising together
                to make brands more visible, more relevant and more impactful.
              </p>
            </div>

            {/* Service Grid */}
            <div
              className="
                mt-6 grid grid-cols-1
                border-l border-t border-white/10
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >
              {services.map((service, index) => (
                <motion.article
                  key={service.number}
                  initial={
                    reduceMotion ? false : { opacity: 0, y: 15 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                  }}
                  className="
                    group relative flex
                    min-h-[155px] flex-col
                    border-b border-r border-white/10
                    bg-transparent
                    p-4
                    transition-colors duration-300 ease-out
                    hover:bg-[#0976b2]
                    focus-within:bg-[#0976b2]
                    xl:min-h-[165px]
                    xl:p-5
                  "
                >
                  {/* Number and Arrow */}
                  <div className="flex items-center justify-between">
                    <span
                      className="
                        text-[10px] font-medium tracking-[0.2em]
                        text-[#0976b2]
                        transition-colors duration-300
                        group-hover:text-white
                      "
                    >
                      {service.number}
                    </span>

                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.4}
                      className="
                        text-[#0976b2]
                        transition-colors duration-300
                        group-hover:text-white
                      "
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      mt-5 text-[15px] font-medium
                      tracking-[-0.03em] text-white
                      transition-colors duration-300
                      group-hover:text-white
                      xl:text-base
                    "
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-2 text-[12px] leading-[1.65]
                      text-white/50
                      transition-colors duration-300
                      group-hover:text-white/90
                      xl:text-[13px]
                    "
                  >
                    {service.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, x: 35 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              relative mx-auto w-full max-w-[650px]
              lg:mx-0 lg:min-w-0
            "
          >
            {/* Blue Frame */}
            <div
              className="
                pointer-events-none absolute
                -bottom-3 -right-3
                h-full w-full
                border border-[#0976b2]/40
              "
            />

            {/* Image */}
            <div
              className="
                group relative aspect-[1/1.05]
                w-full overflow-hidden bg-[#0b0b10]
                sm:aspect-[1.2/1]
                lg:aspect-[0.82/1]
                lg:max-h-[calc(100svh-100px)]
              "
            >
              <Image
                src="/images/services/service-01.jpeg"
                alt="Out Of Home advertising campaign"
                fill
                priority
                sizes="
                  (max-width: 768px) 100vw,
                  (max-width: 1280px) 42vw,
                  36vw
                "
                className="
                  object-cover grayscale
                  transition-all duration-[1200ms] ease-out
                  group-hover:scale-105
                  group-hover:grayscale-0
                "
              />

              {/* Dark Overlay */}
              <div
                className="
                  pointer-events-none absolute inset-0
                  bg-gradient-to-t
                  from-black via-black/15 to-transparent
                  opacity-80
                "
              />

              {/* Blue Tint */}
              <div
                className="
                  pointer-events-none absolute inset-0
                  bg-[#0976b2]/10 mix-blend-screen
                  transition-opacity duration-700
                  group-hover:opacity-0
                "
              />

              {/* Image Label */}
              <div className="absolute left-5 top-5 flex items-center gap-3 sm:left-7 sm:top-7">
                <span className="h-2 w-2 rounded-full bg-[#0976b2]" />

                <span className="text-[9px] uppercase tracking-[0.25em] text-white/70">
                  WTT / PROMISE
                </span>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-7 sm:left-7 sm:right-7">
                <div>
                  <div className="mb-2 text-[9px] uppercase tracking-[0.25em] text-white/40">
                    Media on the move
                  </div>

                  <div className="text-2xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-3xl">
                    Visible.
                    <span className="text-[#0976b2]"> Relevant.</span>
                    <br />
                    Impactful.
                  </div>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0976b2] sm:h-14 sm:w-14">
                  <ArrowUpRight size={20} strokeWidth={1.5} />
                </div>
              </div>
            </div>

            {/* Corner Detail */}
            <div
              className="
                pointer-events-none absolute
                -left-3 top-8 h-10 w-10
                border-l border-t border-[#0976b2]
              "
            />
          </motion.div>
        </div>

        {/* Bottom Meta */}
        {/* <div
          className="
            mt-7 flex items-center justify-between
            border-t border-white/10 pt-4
            lg:mt-5
          "
        >
          <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
            Strategy · Buying · Innovation · Technology · Measurement
          </p>
        </div> */}
      </div>
    </section>
  );
}
