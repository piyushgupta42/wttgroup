
"use client";

import Image from "next/image";
import { motion, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, ArrowUpRight, CircleDot } from "lucide-react";
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaTwitter, 
  FaYoutube
} from "react-icons/fa6"; 

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
    name: "Rajat Sikhdar",
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
    <main className="overflow-hidden bg-[#050509] text-white">
      <section className="relative min-h-[100svh] overflow-hidden">
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
          className="pointer-events-none absolute right-[-15%] top-[10%] h-[55vw] w-[55vw] rounded-full bg-[#0976b2]/20 blur-[150px]"
        />

        <div className="pointer-events-none absolute bottom-[-4vw] right-[-4vw] select-none">
          <span className="whitespace-nowrap text-[25vw] font-black leading-none tracking-[-0.1em] text-white/[0.025]">
            OUTDOOR
          </span>
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1600px] items-center px-6 pb-16 pt-32 sm:px-10 lg:px-16">
          <div className="grid w-full items-center gap-12 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:col-span-7"
            >
              <div className="mb-8 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-[#0976b2]">
                <span className="h-px w-12 bg-[#0976b2]" />
                WTT / ABOUT US
              </div>

              <h1 className="text-[15vw] font-black uppercase leading-[0.73] tracking-[-0.1em] sm:text-[12vw] lg:text-[8.5vw]">
              TALK IS Easy
                <br />
                <span className="text-[#0976b2]">THE WALK IS</span>
                <br />
                WHAT COUNTS
                {/* <br />
                TO MISS. */}
              </h1>

              {/* <div className="mt-10 max-w-xl border-t border-white/10 pt-6">
                <p className="text-base leading-relaxed text-white/45 sm:text-lg">
                  WTT is an outdoor-first creative agency creating campaigns,
                  experiences and brand visibility across the places where
                  people live, move and connect.
                </p>
              </div> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 4 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 1.1,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative hidden min-h-[600px] lg:col-span-5 lg:block"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-1/2 top-1/2 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0976b2]/20"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 45,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
              />

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
                className="absolute left-1/2 top-1/2 z-20 w-[310px] -translate-x-1/2 -translate-y-1/2"
              >
                <div className="border border-white/15 bg-[#0c0d12] p-3 shadow-2xl">
                  <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30">
                      WTT / OOH
                    </span>

                    <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#0976b2]">
                      Live
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0976b2]" />
                    </span>
                  </div>

                  <div className="relative flex h-[250px] flex-col justify-between overflow-hidden bg-[#0976b2] p-6">
                    <div className="absolute right-[-40px] top-[-40px] h-32 w-32 rounded-full border border-white/30" />
                    <div className="absolute bottom-[-80px] left-[-30px] h-52 w-52 rounded-full border border-white/20" />

                    <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.25em] text-white/70">
                      Outdoor
                      <br />
                      Is Not
                      <br />
                      Background.
                    </span>

                    <span className="relative z-10 text-4xl font-black uppercase leading-[0.85] tracking-[-0.07em]">
                      It&apos;s
                      <br />
                      The
                      <br />
                      Stage.
                    </span>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
                      Mumbai / Delhi
                    </span>

                    <ArrowUpRight size={18} className="text-[#0976b2]" />
                  </div>
                </div>
              </motion.div>

              <div className="absolute left-0 top-[20%] z-30 border border-white/10 bg-[#0a0b10]/90 p-5 backdrop-blur-xl">
                <div className="mb-2 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
                  <CircleDot size={11} className="text-[#0976b2]" />
                  City Reach
                </div>

                <div className="text-3xl font-black tracking-[-0.06em]">
                  360°
                </div>
              </div>

              <div className="absolute bottom-[18%] right-0 z-30 border border-[#0976b2]/30 bg-[#07142a]/90 p-5 backdrop-blur-xl">
                <div className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#0976b2]">
                  Brand Visibility
                </div>

                <div className="text-3xl font-black tracking-[-0.06em]">
                  24/7
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 sm:px-10 lg:px-16">
            <button
              type="button"
              onClick={() => scrollToSection("why-wtt")}
              className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 transition-colors hover:text-[#0976b2]"
            name="#why-wtt"
            >
              Scroll To Explore
              <ArrowDown
                size={14}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </button>

            <span className="hidden text-[10px] font-bold uppercase tracking-[0.25em] text-white/20 sm:block">
              People / Places / Possibility
            </span>
          </div>
        </div>
      </section>

      <section
        id="why-wtt"
        data-snap-section
        className="relative flex min-h-[100svh] w-full max-w-[100vw] items-center overflow-hidden bg-[#0976b2] text-white"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:80px_80px]" />

          <motion.div
            style={{ x: orbX, y: orbY }}
            className="absolute left-1/2 top-1/2 h-[70vw] w-[70vw] max-h-[1100px] max-w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]"
          />

          <motion.div
            style={{ x: orbX, y: orbY }}
            className="absolute left-1/2 top-1/2 h-[45vw] w-[45vw] max-h-[700px] max-w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.1]"
          />

          <motion.div
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.16, 0.3, 0.16],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-[130px]"
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

              <rect width="100%" height="100%" filter="url(#wtt-noise)" />
            </svg>
          </div>

          <div className="absolute left-0 top-0 h-full w-px bg-white/10" />
          <div className="absolute right-0 top-0 h-full w-px bg-white/10" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1700px] flex-col px-5 py-7 sm:px-8 md:px-10 lg:px-14 xl:px-16">
          {/* <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-between border-b border-white/20 pb-5"
          >
            <div className="flex items-center gap-4">
              <span className="h-2 w-2 rounded-full bg-white" />

              <span className="text-[10px] font-medium uppercase tracking-[0.3em]">
                Who We Are
              </span>
            </div>
          </motion.div> */}

          <div className="flex-1 py-4 lg:py-2">
            <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 xl:gap-24">
              <div className="relative">
                <div className="overflow-hidden">
                  <motion.h2
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: 0.9,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="max-w-[900px] text-[clamp(3.4rem,6vw,7.5rem)] font-semibold leading-[0.82] tracking-[-0.075em]"
                  >
                    Our thinking defines us.
                    {/* <br />
                    THE WALK IS */}
                    <br />
                    <span className="text-white/55">Our actions prove us.</span>
                  </motion.h2>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="border-l border-white/20 pl-6 sm:pl-8 lg:mt-6"
              >
                {/* <p className="text-xl font-medium leading-8 text-white/90 sm:text-2xl sm:leading-9">
                  Our thinking defines us. Our actions prove us.
                </p> */}

                <p className="mt-6 max-w-[620px] text-sm leading-7 text-white/65 sm:text-[15px] lg:text-base">
                  At Walk The Talk, we believe that great advertising is built
                  on more than visibility. It takes an understanding of people,
                  the courage to challenge convention, the creativity to see
                  possibilities where others see limitations, and the discipline
                  to deliver on every promise. We bring these principles to
                  every brief, every media opportunity and every client
                  relationship. Because for us, trust isn&apos;t built through
                  what we say. It&apos;s built through what we do.
                </p>
              </motion.div>
            </div>

            <div className="mt-6 grid grid-cols-1 border-l border-t border-white/20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {principles.map((service, index) => (
                <motion.article
                  key={service.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                  }}
                  className="group relative flex min-h-[310px] flex-col border-b border-r border-white/20 p-5 transition-colors duration-500 hover:bg-white/[0.07] sm:p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-[10px] font-medium tracking-[0.2em] text-white/50">
                      {service.number}
                    </span>

                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.4}
                      className="text-white/35 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                    />
                  </div>

                  <h3 className="mt-7 text-xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-[1.35rem]">
                    {service.title}
                  </h3>

                  <p className="mt-5 text-[13px] leading-6 text-white/60">
                    {service.description}
                  </p>

                  <motion.div
                    initial={false}
                    className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-white transition-transform duration-500 group-hover:scale-x-100"
                  />
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#050509] py-20 sm:py-28 lg:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.45)_1px,transparent_1px)] [background-size:80px_80px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16">
          <div className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#0976b2]"
              >
                <span className="h-px w-12 bg-[#0976b2]" />
                02 / The People
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[clamp(3.5rem,7vw,8rem)] font-black uppercase leading-[0.78] tracking-[-0.085em]"
              >
                The Minds
                <br />
                <span className="text-[#0976b2]">Behind The Promise.</span>
              </motion.h2>
            </div>

            <div className="border-l border-[#0976b2]/40 pl-5 sm:pl-7 lg:col-span-4">
              <p className="text-lg font-medium leading-8 text-white/90 sm:text-xl">
                Different strengths, and a shared belief in doing things right.
              </p>

              <p className="mt-5 text-sm leading-7 text-white/55 sm:text-[15px] lg:text-base">
                Behind every ambitious idea, enduring relationship and a
                successful enterprise is a collaboration of minds that believes
                in making things happen. Meet the drivers that guide and mentor
                WTT&apos;s vision, values and journey.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-7">
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
                <div className="relative aspect-[4/4.8] overflow-hidden border border-white/10 bg-[#111116]">
                  <motion.div
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                    />
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/40 text-[9px] font-bold backdrop-blur-md">
                    {leader.id}
                  </span> */}
                </div>

                
<div className="flex items-center justify-between gap-3 border-b border-white/10 py-4">
  <h3 className="min-w-0 flex-1 text-lg font-black uppercase leading-tight tracking-[-0.05em] transition-colors duration-300 group-hover:text-[#0976b2] sm:text-2xl">
    {leader.name}
  </h3>

  {leader.linkedinUrl && (
    <a
      href={leader.linkedinUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${leader.name} on LinkedIn`}
      title={`View ${leader.name} on LinkedIn`}
      onClick={(event) => event.stopPropagation()}
      className="relative z-10 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-[#0A66C2] text-white shadow-md transition-colors duration-200 hover:bg-[#004182] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050509]"
    >
      <FaLinkedin size={19} aria-hidden="true" />
    </a>
  )}
</div>

              </motion.article>
            ))}
          </div>

          <p className="mt-12 text-center text-sm italic leading-7 text-white/65 sm:text-base">
            Leadership is not about setting the direction alone. It&apos;s about
            building a team that moves forward together.
          </p>
        </div>
      </section>
    </main>
  );
}
