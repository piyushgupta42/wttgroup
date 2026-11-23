
"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Intelligence Before Impressions",
    lead: "Research-led. Data-backed. Audience-first.",
    description:
      "We look beyond footfall and visibility. Research and market intelligence help us understand audience profiles, movement patterns, location relevance and media opportunities, enabling more informed planning decisions.",
  },
  {
    number: "02",
    title: "AI that Makes Planning Smarter",
    lead: "Less guesswork. More intelligence.",
    description:
      "We bring AI-driven planning into the OOH decision making process to help evaluate opportunities, interpret audience, and make location-based media choices more precise and purposeful.",
  },
  {
    number: "03",
    title: "Audience Measurement that Goes Beyond Reach",
    lead: "From where a brand appears, to who it has the opportunity to reach.",
    description:
      "Our AI-driven audience measurement solution helps assess audience exposure opportunities and provides a more informed view of campaign performance.",
  },
  {
    number: "04",
    title: "Creativity that Refuses to Be Ordinary",
    lead: "If the space is ordinary, we rethink the space.",
    description:
      "We look beyond standard formats to explore creative amplifications, unconventional media applications and innovative uses of the environment that give brands a more distinctive presence.",
  },
  {
    number: "05",
    title: "Execution that Means Business",
    lead: "The idea is only as good as its execution.",
    description:
      "We bring rigour, transparency and attention to detail to campaign delivery across markets, ensuring that what is planned is executed with the quality and accountability brands expect. Documenting and reporting every part of the agreed SOP.",
  },
];

const COLORS = {
  background: "#07558a",
  hover: "#050509",
  white: "#ffffff",
};

export default function WhyWttSection() {
  const reduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  const orbX = useTransform(smoothX, [-500, 500], [-35, 35]);
  const orbY = useTransform(smoothY, [-500, 500], [-35, 35]);

  useEffect(() => {
    if (reduceMotion) return;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX - window.innerWidth / 2);
      mouseY.set(event.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY, reduceMotion]);

  return (
    <section
      id="why-wtt"
      data-snap-section
      className="
        relative flex w-full max-w-[100vw]
        min-h-screen items-center overflow-hidden
        text-white
        lg:h-[100svh] lg:min-h-0
      "
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute inset-0 opacity-[0.055]
            [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        <motion.div
          style={{
            x: reduceMotion ? 0 : orbX,
            y: reduceMotion ? 0 : orbY,
          }}
          className="
            absolute left-1/2 top-1/2
            h-[70vw] w-[70vw]
            max-h-[1100px] max-w-[1100px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full border border-white/[0.08]
          "
        />

        <motion.div
          style={{
            x: reduceMotion ? 0 : orbX,
            y: reduceMotion ? 0 : orbY,
          }}
          className="
            absolute left-1/2 top-1/2
            h-[45vw] w-[45vw]
            max-h-[700px] max-w-[700px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full border border-white/[0.1]
          "
        />

        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  scale: [1, 1.12, 1],
                  opacity: [0.12, 0.24, 0.12],
                }
          }
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute left-1/2 top-1/2
            h-[450px] w-[450px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full bg-white/15 blur-[130px]
          "
        />

        <div className="absolute inset-0 opacity-[0.035] mix-blend-overlay">
          <svg className="h-full w-full">
            <filter id="wtt-noise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency=".8"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect
              width="100%"
              height="100%"
              filter="url(#wtt-noise)"
            />
          </svg>
        </div>

        <div className="absolute left-0 top-0 h-full w-px bg-white/10" />
        <div className="absolute right-0 top-0 h-full w-px bg-white/10" />
      </div>

      {/* Main Container */}
      <div
        className="
          relative z-10 mx-auto flex w-full
          max-w-[1700px] flex-col
          px-5 py-7
          sm:px-8 md:px-10
          lg:h-full lg:min-h-0 lg:justify-center
          lg:px-14 lg:py-5
          xl:px-16
        "
      >
        <div className="flex-1 py-4 lg:flex lg:min-h-0 lg:flex-col lg:justify-center lg:py-2">

          {/* Top Content */}
          <div
            className="
              grid items-start gap-10
              lg:grid-cols-[1.1fr_0.9fr]
              lg:gap-12
              xl:gap-20
            "
          >
            {/* Left Title */}
            <div className="relative">
              <div className="overflow-hidden">
                <motion.h2
                  initial={
                    reduceMotion ? false : { opacity: 0, y: 60 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    wtt-display-title
                    max-w-[900px]
                  "
                >
                  NOT JUST OUT
                  <br />
                  OF THE BOX.
                  <br />
                  <span className="text-white/55">
                    MUCH BEYOND IT.
                  </span>
                </motion.h2>
              </div>
            </div>

            {/* Right Content */}
            <motion.div
              initial={
                reduceMotion ? false : { opacity: 0, y: 25 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="
                border-l border-white/20
                pl-6 sm:pl-8 lg:mt-6
              "
            >
              <p
                className="
                  text-xl font-medium leading-8
                  text-white/90
                  sm:text-2xl sm:leading-9
                "
              >
                A smarter way to think. A bolder way to create.
                A better way to deliver.
              </p>

              <p
                className="
                  mt-6 max-w-[620px]
                  text-sm font-normal leading-7
                  text-white/65
                  sm:text-[15px] lg:text-base
                "
              >
                We believe OOH Advertising deserves more than conventional
                thinking. At WTT, research-backed intelligence, AI-driven
                planning, creative ingenuity and execution excellence come
                together to create OOH solutions that are relevant, impactful
                and accountable.
              </p>
            </motion.div>
          </div>

          {/* Five Principles Grid */}
          <div
            className="
              mt-7 grid grid-cols-1
              border-l border-t border-white/20
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-5
            "
          >
            {principles.map((service, index) => (
              <motion.article
                key={service.number}
                initial={
                  reduceMotion ? false : { opacity: 0, y: 20 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="
                  group relative flex min-w-0 flex-col
                  min-h-[310px]
                  border-b border-r border-white/20
                  bg-transparent
                  p-5 sm:p-6
                  transition-colors duration-300 ease-in-out
                  hover:bg-[#050509]
                  focus-within:bg-[#050509]
                "
              >
                {/* Card Number */}
                <div className="flex items-start justify-between gap-4">
                  <span
                    className="
                      text-[10px] font-medium tracking-[0.2em]
                      text-white/50
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
                      text-white/35
                      transition-colors duration-300
                      group-hover:text-white
                    "
                  />
                </div>

                {/* Card Heading */}
                <h3
                  className="
                    mt-7 text-xl font-semibold
                    leading-[1.05] tracking-[-0.04em]
                    text-white
                    transition-colors duration-300
                    group-hover:text-white
                    sm:text-[1.35rem]
                  "
                >
                  {service.title}
                </h3>

                {/* Lead */}
                <p
                  className="
                    mt-6 text-sm font-medium
                    leading-6 text-white/90
                  "
                >
                  {service.lead}
                </p>

                {/* Description */}
                <p
                  className="
                    mt-5 text-[13px] font-normal
                    leading-6 text-white/60
                    transition-colors duration-300
                    group-hover:text-white/75
                  "
                >
                  {service.description}
                </p>

                {/* Bottom Hover Line */}
                <div
                  className="
                    absolute bottom-0 left-0
                    h-[2px] w-full
                    origin-left scale-x-0
                    bg-white
                    transition-transform duration-300
                    group-hover:scale-x-100
                  "
                />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
