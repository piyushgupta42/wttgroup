
"use client";

import Image from "next/image";
import { motion, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, ArrowUpRight, CircleDot } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import WttHero from "../../components/common/WttHero";

type Leader = {
  id: string;
  name: string;
  image: string;
  linkedinUrl?: string;
};

const principles = [
  {
    number: "01",
    title: "Creativity Without Convention",
    description:
      "We challenge the obvious, explore the unexpected and look for ways to make every brand presence more distinctive.",
  },
  {
    number: "02",
    title: "Technology With Purpose",
    description:
      "We embrace data, technology and intelligent planning to bring greater insight, relevance and effectiveness to OOH.",
  },
  {
    number: "03",
    title: "Excellence in Every Execution",
    description:
      "We believe the smallest details matter. Quality, transparency and accountability are fundamental to the work we deliver.",
  },
  {
    number: "04",
    title: "Relationships Built on Trust",
    description:
      "We value long-term partnerships rooted in mutual respect and a shared commitment to doing the right thing.",
  },
];

const leaders: Leader[] = [
  {
    id: "01",
    name: "Nikhil Verma",
    image: "/images/leader/nikhil-verma.jpg",
    linkedinUrl: "https://www.linkedin.com/in/actual-profile/",
  },
  {
    id: "02",
    name: "Rajat Sikder",
    image: "/images/leader/rajat-sikhdar.jpg",
    linkedinUrl: "https://www.linkedin.com/in/actual-profile/",
  },
  {
    id: "03",
    name: "Vipul Mehta",
    image: "/images/leader/vipul-mehta.jpg",
    linkedinUrl: "https://www.linkedin.com/in/actual-profile/",
  },
  {
    id: "04",
    name: "Hardeep Singh",
    image: "/images/leader/hardeep-singh.jpg",
    linkedinUrl: "https://www.linkedin.com/in/actual-profile/",
  },
];

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export default function AboutPage() {
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

  return (
    <main className="overflow-hidden bg-[#050509] font-sans text-white">
      {/* =====================================================
          HERO SECTION
      ===================================================== */}


        {/* Hero Content */}
        <WttHero
  eyebrow="WTT / ABOUT US"
  heading={
    <>
      TALK IS EASY
      <br />
      <span className="text-[#0976b2]">THE WALK IS</span>
      <br />
      WHAT COUNTS
    </>
  }
  scrollTarget="why-wtt"
  footerText="People / Places / Possibility"
/>

      {/* =====================================================
          WHY WTT SECTION
      ===================================================== */}

      <section
        id="why-wtt"
        data-snap-section
        className="
          relative flex min-h-[100svh]
          w-full max-w-[100vw] items-center
          overflow-hidden bg-[#0976b2]
          font-sans text-white
        "
      >
        {/* Background Design */}
        <div className="
          pointer-events-none absolute inset-0 overflow-hidden
        ">
          {/* Grid */}
          <div className="
            absolute inset-0 opacity-[0.09]
            [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)]
            [background-size:80px_80px]
          " />

          {/* Animated Circles */}
          <motion.div
            style={{ x: orbX, y: orbY }}
            className="
              absolute left-1/2 top-1/2
              h-[75vw] w-[75vw]
              max-h-[1150px] max-w-[1150px]
              -translate-x-1/2 -translate-y-1/2
              rounded-full border border-white/[0.12]
            "
          />

          <motion.div
            style={{ x: orbX, y: orbY }}
            className="
              absolute left-1/2 top-1/2
              h-[48vw] w-[48vw]
              max-h-[750px] max-w-[750px]
              -translate-x-1/2 -translate-y-1/2
              rounded-full border border-white/[0.14]
            "
          />

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.12, 0.25, 0.12],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute left-1/2 top-1/2
              h-[500px] w-[500px]
              -translate-x-1/2 -translate-y-1/2
              rounded-full bg-white/20 blur-[140px]
            "
          />

          {/* Noise */}
          <div className="
            absolute inset-0 opacity-[0.035]
            mix-blend-overlay
          ">
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

          {/* Side Borders */}
          <div className="
            absolute left-0 top-0 h-full w-px bg-white/15
          " />

          <div className="
            absolute right-0 top-0 h-full w-px bg-white/15
          " />

          {/* Decorative Light */}
          <div className="
            absolute -right-40 -top-40
            h-[500px] w-[500px] rounded-full
            bg-white/[0.06] blur-[120px]
          " />
        </div>

        {/* Main Content */}
        <div className="
          relative z-10 mx-auto flex min-h-[100svh]
          w-full max-w-[1700px] flex-col justify-center
          px-5 py-8 sm:px-8 md:px-10
          lg:px-14 lg:py-10 xl:px-16
        ">
          {/* Heading and Description */}
          <div className="
            grid items-center gap-10
            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-16 xl:gap-24
          ">
            {/* Left Heading */}
            <div className="relative">
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ opacity: 0, y: 90 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    wtt-display-title
                    max-w-[1050px]
                    text-[clamp(3.1rem,6.4vw,7.8rem)]
                    uppercase
                  "
                >
                  OUR THINKING
                  <br />
                  DEFINES US.
                  <br />

                  <span className="text-white/45">
                    OUR ACTIONS
                    <br className="hidden xl:block" />
                    {" "}PROVE US.
                  </span>
                </motion.h2>
              </div>

              {/* Heading Accent */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 90 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-8 h-1 bg-white"
              />
            </div>

            {/* Right Description */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, delay: 0.15 }}
              className="relative lg:mt-8"
            >
              <div className="
                absolute -left-6 top-0 hidden
                h-full w-[2px] bg-white/40 lg:block
              " />

              <div className="
                mb-6 flex items-center gap-3
              ">
                <span className="
                  text-[11px] font-semibold uppercase
                  tracking-[0.3em] text-white
                ">
                  What We Believe
                </span>

                <span className="h-px flex-1 bg-white/30" />
              </div>

              <p className="
                max-w-[650px] text-[15px]
                font-medium leading-[1.9]
                text-white sm:text-base lg:text-[17px]
              ">
                At Walk The Talk, we believe that great advertising is built
                on more than visibility. It takes an understanding of people,
                the courage to challenge convention, the creativity to see
                possibilities where others see limitations, and the discipline
                to deliver on every promise. We bring these principles to
                every brief, every media opportunity and every client
                relationship. Because for us, trust isn&apos;t built through
                what we say. It&apos;s built through what we do.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <span className="
                  text-[11px] font-semibold uppercase
                  tracking-[0.2em] text-white
                ">
                  Walk The Talk
                </span>

                <ArrowUpRight size={17} className="text-white" />
              </div>
            </motion.div>
          </div>

          {/* Principles */}
          <div className="
            mt-14 grid grid-cols-1
            border-l border-t border-white/30
            sm:grid-cols-2
            lg:mt-16 lg:grid-cols-4
          ">
            {principles.map((principle, index) => (
              <motion.article
                key={principle.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="
                  group relative flex min-h-[260px]
                  flex-col overflow-hidden
                  border-b border-r border-white/30
                  bg-white/[0.025] p-6
                  transition-all duration-500
                  hover:bg-[#050509]
                  sm:min-h-[280px] sm:p-7
                  lg:min-h-[300px] lg:p-8
                "
              >
                {/* Background Number */}
                <span className="
                  pointer-events-none absolute -right-2 top-10
                  text-[100px] font-black leading-none
                  tracking-[-0.1em] text-white/[0.045]
                  transition-all duration-700
                  group-hover:scale-110
                  group-hover:text-white/[0.09]
                ">
                  {principle.number}
                </span>

                {/* Card Top */}
                <div className="
                  relative z-10 flex items-center
                  justify-between
                ">
                  <span className="
                    text-[11px] font-semibold
                    tracking-[0.25em] text-white
                  ">
                    {principle.number}
                  </span>

                  <div className="
                    flex h-9 w-9 items-center justify-center
                    rounded-full border border-white/40
                    text-white transition-all duration-500
                    group-hover:border-white
                    group-hover:bg-white group-hover:text-black
                  ">
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.5}
                      className="
                        transition-transform duration-500
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative z-10 mt-auto pt-10">
                  <h3 className="
                    max-w-[260px] text-[21px]
                    font-semibold leading-[1.12]
                    tracking-[-0.045em] text-white
                    transition-transform duration-500
                    group-hover:translate-x-1 sm:text-[23px]
                  ">
                    {principle.title}
                  </h3>

                  <p className="
                    mt-5 max-w-[320px]
                    text-[13px] font-normal
                    leading-[1.85] text-white/80
                  ">
                    {principle.description}
                  </p>
                </div>

                {/* Bottom Hover Line */}
                <div className="
                  absolute bottom-0 left-0
                  h-[3px] w-full origin-left
                  scale-x-0 bg-white
                  transition-transform duration-500
                  group-hover:scale-x-100
                " />
              </motion.article>
            ))}
          </div>

          {/* Bottom Statement */}
          <div className="
            mt-7 flex flex-col justify-between
            gap-4 sm:flex-row sm:items-center
          ">
            <p className="
              text-[10px] font-semibold uppercase
              tracking-[0.25em] text-white
            ">
              Creativity. Technology. Excellence. Trust.
            </p>

            <p className="
              text-[10px] font-semibold uppercase
              tracking-[0.25em] text-white
            ">
              Our actions speak louder.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          LEADERSHIP SECTION
      ===================================================== */}

      <section className="
        relative overflow-hidden bg-[#050509]
        py-20 font-sans sm:py-28 lg:py-32
      ">
        {/* Background Grid */}
        <div className="
          pointer-events-none absolute inset-0 opacity-[0.04]
          [background-image:linear-gradient(rgba(255,255,255,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.45)_1px,transparent_1px)]
          [background-size:80px_80px]
        " />

        <div className="
          relative z-10 mx-auto w-full max-w-[1600px]
          px-6 sm:px-10 lg:px-16
        ">
          {/* Section Introduction */}
          <div className="
            mb-12 grid gap-8
            lg:mb-16 lg:grid-cols-12 lg:items-end
          ">
            <div className="lg:col-span-8">
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
                    wtt-display-title
                    max-w-[900px]
                    text-[clamp(3.2rem,6vw,7.2rem)]
                    uppercase
                  "
                >
                  The Minds
                  <br />
                  <span className="text-[#0976b2]">
                    Behind The Promise.
                  </span>
                </motion.h2>
              </div>
            </div>

            <div className="
              border-l border-[#0976b2]/40
              pl-5 sm:pl-7 lg:col-span-4
            ">
              <p className="
                text-lg font-medium leading-8
                text-white/90 sm:text-xl
              ">
                Different strengths, and a shared belief in doing things right.
              </p>

              <p className="
                mt-5 text-sm leading-7
                text-white/55 sm:text-[15px] lg:text-base
              ">
                Behind every ambitious idea, enduring relationship and a
                successful enterprise is a collaboration of minds that believes
                in making things happen. Meet the drivers that guide and mentor
                WTT&apos;s vision, values and journey.
              </p>
            </div>
          </div>

          {/* Leadership Cards */}
          <div className="
            grid grid-cols-2 gap-4
            sm:gap-5 lg:grid-cols-4 lg:gap-7
          ">
            {leaders.map((leader, index) => (
              <motion.article
                key={leader.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="group"
              >
                {/* Leader Image */}
                <div className="
                  relative aspect-[4/4.8]
                  overflow-hidden border border-white/10
                  bg-[#111116]
                ">
                  <motion.div
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      sizes="
                        (max-width: 640px) 50vw,
                        25vw
                      "
                      className="
                        object-cover grayscale
                        transition-all duration-700
                        group-hover:grayscale-0
                      "
                    />
                  </motion.div>

                  <div className="
                    absolute inset-0
                    bg-gradient-to-t from-black/60
                    via-transparent to-transparent
                  " />
                </div>

                {/* Leader Details */}
                <div className="
                  flex items-center justify-between
                  gap-3 border-b border-white/10 py-4
                ">
                  <h3 className="
                    min-w-0 flex-1 text-lg
                    font-semibold uppercase
                    leading-tight tracking-[-0.05em]
                    transition-colors duration-300
                    group-hover:text-[#0976b2]
                    sm:text-2xl
                  ">
                    {leader.name}
                  </h3>

                  {leader.linkedinUrl && (
                    <a
                      href={leader.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${leader.name} on LinkedIn`}
                      title={`View ${leader.name} on LinkedIn`}
                      className="
                        relative z-10 inline-flex
                        h-10 w-10 shrink-0
                        items-center justify-center
                        rounded-full border border-white/20
                        bg-[#0A66C2] text-white shadow-md
                        transition-colors duration-200
                        hover:bg-[#004182]
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-[#0A66C2]
                        focus-visible:ring-offset-2
                        focus-visible:ring-offset-[#050509]
                      "
                    >
                      <FaLinkedin size={19} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>

          {/* Closing Statement */}
          <p className="
            mt-12 text-center text-sm
            italic leading-7 text-white/65 sm:text-base
          ">
            Leadership is not about setting the direction alone. It&apos;s about
            building a team that moves forward together.
          </p>
        </div>
      </section>
    </main>
  );
}
