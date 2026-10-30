"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

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
  const sectionRef = useRef<HTMLElement | null>(null);

  /*
  ==========================================================
  DESKTOP SECTION SNAP
  Small wheel movement → next / previous section
  ==========================================================
  */
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    let locked = false;

    const handleWheel = (event: WheelEvent) => {
      // Keep normal mobile scrolling
      if (window.innerWidth < 768) return;

      const rect = section.getBoundingClientRect();

      const isSectionActive =
        rect.top <= window.innerHeight * 0.25 &&
        rect.bottom >= window.innerHeight * 0.75;

      if (!isSectionActive) return;
      if (Math.abs(event.deltaY) < 8) return;

      event.preventDefault();

      if (locked) return;

      locked = true;

      const nextSection =
        event.deltaY > 0
          ? section.nextElementSibling
          : section.previousElementSibling;

      if (nextSection instanceof HTMLElement) {
        nextSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      window.setTimeout(() => {
        locked = false;
      }, 900);
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="what-we-do"
      data-snap-section
      className="
        relative
        flex
        min-h-[100svh]
        w-full
        max-w-[100vw]
        items-center
        overflow-hidden
        bg-[#050509]
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.045]
            [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        {/* Blue glow */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-[15%]
            top-[5%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#0976b2]/10
            blur-[150px]
          "
        />

        {/* Left subtle glow */}
        <div
          className="
            absolute
            -left-[20%]
            bottom-[-20%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#0976b2]/5
            blur-[140px]
          "
        />

        {/* Vertical borders */}
        <div className="absolute left-0 top-0 h-full w-px bg-white/[0.08]" />
        <div className="absolute right-0 top-0 h-full w-px bg-white/[0.08]" />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[100svh]
          w-full
          max-w-[1700px]
          flex-col
          justify-center
          px-5
          py-10
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-16
        "
      >
        {/* =================================================
            TOP LABEL
        ================================================== */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="
            mb-10
            flex
            items-center
            justify-between
            border-b
            border-white/10
            pb-2
          "
        >
          <div className="flex items-center gap-4">
            <span className="h-2 w-2 rounded-full bg-[#0976b2]" />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-white/60
                sm:text-[11px]
              "
            >
              What We Do
            </span>
          </div>

          <span
            className="
              hidden
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-white/30
              sm:block
            "
          >
            Planning · Buying · Innovation
          </span>
        </motion.div> */}

        {/* =================================================
            MAIN GRID
        ================================================== */}
        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-12
            lg:grid-cols-[1.2fr_0.8fr]
            lg:gap-14
            xl:gap-20
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================== */}
          <div className="relative">
            <div className="overflow-hidden">
              <motion.h2
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  max-w-[800px]
                  text-[clamp(3.4rem,6vw,7.2rem)]
                  font-semibold
                  leading-[0.84]
                  tracking-[-0.07em]
                "
              >
                FROM SPACE
                <br />
                TO{" "}
                <span className="text-[#0976b2]">
                  IMPACT.
                </span>
              </motion.h2>
            </div>

            <div className="mt-2 max-w-[760px] sm:mt-6">
            <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="
                  mt-5
                  max-w-[700px]
                  text-sm
                  leading-7
                  text-white/55
                  sm:text-[15px]
                  sm:leading-7
                  lg:text-base
                "
              >
                OOH is our medium. Making it work for brands is our business.
              {/* </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="
                  mt-5
                  max-w-[700px]
                  text-sm
                  leading-7
                  text-white/55
                  sm:text-[15px]
                  sm:leading-7
                  lg:text-base
                "
              > */}
                From strategic planning, efficient buying to creative innovation
                and execution, we bring every part of OOH Advertising together to
                make brands more visible, more relevant and more impactful.
              </motion.p>
            </div>

            {/* Service cards */}
            <div
              className="
                mt-6
                grid
                grid-cols-1
                border-l
                border-t
                border-white/10
                sm:grid-cols-3
              "
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.65,
                    delay: 0.1 + index * 0.06,
                  }}
                  className="
                    group
                    relative
                    min-h-[190px]
                    border-b
                    border-r
                    border-white/10
                    p-5
                    transition-colors
                    duration-500
                    hover:bg-white/[0.035]
                    sm:p-2
                  "
                >
                  <div className="flex items-start justify-between gap-5">
                    <span
                      className="
                        text-[10px]
                        font-medium
                        tracking-[0.2em]
                        text-[#0976b2]
                      "
                    >
                      {service.number}
                    </span>

                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.4}
                      className="
                        text-white/25
                        transition-all
                        duration-500
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-[#0976b2]
                      "
                    />
                  </div>

                  <h3
                    className="
                      mt-7
                      text-base
                      font-medium
                      tracking-[-0.03em]
                      text-white
                      sm:text-[17px]
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-[13px]
                      leading-6
                      text-white/50
                    "
                  >
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* =================================================
              RIGHT IMAGE
          ================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.94 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              mx-auto
              w-full
              max-w-[650px]
              lg:sticky
              lg:top-10
              lg:mx-0
            "
          >
            {/* Blue frame */}
            <div
              className="
                pointer-events-none
                absolute
                -bottom-4
                -right-4
                h-full
                w-full
                border
                border-[#0976b2]/40
              "
            />

            {/* Image */}
            <div
              className="
                group
                relative
                aspect-[1/1.05]
                w-full
                overflow-hidden
                bg-[#0b0b10]
                sm:aspect-[1.2/1]
                lg:aspect-[0.85/1]
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
                  object-cover
                  grayscale
                  transition-transform
                  duration-[1400ms]
                  ease-out
                  group-hover:scale-105
                  group-hover:grayscale-0
                "
              />

              {/* Dark overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/15
                  to-transparent
                  opacity-80
                "
              />

              {/* Blue tint */}
              <div
                className="
                  absolute
                  inset-0
                  bg-[#0976b2]/10
                  mix-blend-screen
                  transition-opacity
                  duration-700
                  group-hover:opacity-0
                "
              />

              {/* Image label */}
              <div
                className="
                  absolute
                  left-5
                  top-5
                  flex
                  items-center
                  gap-3
                  sm:left-7
                  sm:top-7
                "
              >
                <span className="h-2 w-2 rounded-full bg-[#0976b2]" />

                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.25em]
                    text-white/70
                  "
                >
                  WTT / OOH
                </span>
              </div>

              {/* Bottom image content */}
              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  flex
                  items-end
                  justify-between
                  gap-5
                  sm:bottom-7
                  sm:left-7
                  sm:right-7
                "
              >
                <div>
                  <div
                    className="
                      mb-2
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                      text-white/40
                    "
                  >
                    Media that moves
                  </div>

                  <div
                    className="
                      max-w-[300px]
                      text-2xl
                      font-medium
                      leading-[0.95]
                      tracking-[-0.04em]
                      sm:text-3xl
                    "
                  >
                    Visible.
                    <span className="text-[#0976b2]">
                      {" "}Relevant.
                    </span>
                    <br />
                    Impactful.
                  </div>
                </div>

                <motion.div
                  whileHover={{ rotate: 45 }}
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0976b2]
                    sm:h-14
                    sm:w-14
                  "
                >
                  <ArrowUpRight size={20} strokeWidth={1.5} />
                </motion.div>
              </div>
            </div>

            {/* Corner detail */}
            <div
              className="
                pointer-events-none
                absolute
                -left-4
                top-8
                h-10
                w-10
                border-l
                border-t
                border-[#0976b2]
              "
            />
          </motion.div>
        </div>

        {/* =================================================
            BOTTOM META
        ================================================== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="
            mt-10
            flex
            items-center
            justify-between
            border-t
            border-white/10
            pt-5
          "
        >
          <div
            className="
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-white/25
            "
          >
            Strategy · Buying · Innovation · Technology · Measurement
          </div>

          {/* <div
            className="
              hidden
              items-center
              gap-3
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-white/30
              sm:flex
            "
          >
            <span>Scroll to continue</span>

            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <ArrowDown size={13} />
            </motion.span>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}