"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { useRef, useState, type MouseEvent } from "react";
import { FaLinkedin } from "react-icons/fa6";
import WttHero from "../../components/common/WttHero";

/* ============================================================
   TYPES
============================================================ */

type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedinUrl?: string;
};

/* ============================================================
   TEAM DATA
============================================================ */

const squad: TeamMember[] = [
  {
    id: "01",
    name: "NIYANK ZAVERI",
    role: "VP & WEST HEAD",
    image: "/images/teams/NIYANK-ZAVERI.jpg",
    linkedinUrl: "https://www.linkedin.com/in/actual-profile/",
  },
  {
    id: "02",
    name: "CHITRA SRINIVASAN",
    role: "VP & SOUTH HEAD",
    image: "/images/teams/CHITRA-SRINIVASAN.jpg",
    linkedinUrl: "https://www.linkedin.com/in/actual-profile/",
  },
  {
    id: "03",
    name: "SURESH SINGH",
    role: "VP - OPERATIONS",
    image: "/images/teams/SURESH-SINGH.jpg",
    linkedinUrl: "https://www.linkedin.com/in/actual-profile/",
  },
  {
    id: "04",
    name: "KRISHNAKANT SHETTY",
    role: "AVP - FINANCE",
    image: "/images/teams/KRISHNAKANT-SHETTY.jpg",
    linkedinUrl: "https://www.linkedin.com/in/actual-profile/",
  },
  {
    id: "05",
    name: "HARPREET SINGH",
    role: "VP - BUSINESS",
    image: "/images/teams/HARPREET-SINGH.jpg",
    linkedinUrl: "https://www.linkedin.com/in/actual-profile/",
  },
  {
    id: "06",
    name: "DHIRAJ SUMAN",
    role: "AVP - OPERATIONS",
    image: "/images/teams/DHIRAJ-SUMAN.jpg",
  },
  {
    id: "07",
    name: "TABREZ BANGI",
    role: "SENIOR OPERATIONS DIRECTOR",
    image: "/images/teams/TABREZ-BANGI.jpg",
  },
  {
    id: "08",
    name: "SANCHIT ARORA",
    role: "SENIOR BUSINESS DIRECTOR",
    image: "/images/teams/SANCHIT-ARORA.jpg",
  },
  {
    id: "09",
    name: "SURAJ PAGDHARE",
    role: "CREATIVE DIRECTOR",
    image: "/images/teams/SURAJ-PAGDHARE.jpg",
  },
  {
    id: "10",
    name: "YUNUS SHAIKH",
    role: "ART DIRECTOR",
    image: "/images/teams/YUNUS-SHAIKH.jpg",
  },
  {
    id: "11",
    name: "SELVARAJ MUDALIYAR",
    role: "BUSINESS DIRECTOR",
    image: "/images/teams/SELVARAJ-MUDALIYAR.jpg",
  },
  {
    id: "12",
    name: "SAMEER MALL",
    role: "BUSINESS DIRECTOR",
    image: "/images/teams/SAMEER-MALL.jpg",
  },
  {
    id: "13",
    name: "ABHIRUP DAS",
    role: "ASSOCIATE BUSINESS DIRECTOR",
    image: "/images/teams/ABHIRUP-DAS.jpg",
  },
  {
    id: "14",
    name: "ATUL KUMAR SINGH",
    role: "SENIOR BUSINESS MANAGER",
    image: "/images/teams/ATUL-KUMAR-SINGH.jpg",
  },
  {
    id: "15",
    name: "DAVID CARLSON BURNS K",
    role: "SENIOR BUSINESS MANAGER",
    image: "/images/teams/DAVID-CARLSON-BURNS-K.jpg",
  },
  {
    id: "16",
    name: "MAZAHARODDIN SHAIK",
    role: "SENIOR OPERATIONS MANAGER",
    image: "/images/teams/MAZAHARODDIN-SHAIK.jpg",
  },
  {
    id: "17",
    name: "JAGADISH K",
    role: "SENIOR OPERATIONS MANAGER",
    image: "/images/teams/JAGADISH-K-YADAV.jpg",
  },
  {
    id: "18",
    name: "MANOJ KUMAR",
    role: "SENIOR OPERATIONS MANAGER",
    image: "/images/teams/MANOJ-KUMAR.jpg",
  },
  {
    id: "19",
    name: "MIHIR PARAB",
    role: "MANAGER - FINANCE",
    image: "/images/teams/MIHIR-PARAB.jpg",
  },
  {
    id: "20",
    name: "RAJIB SARKAR",
    role: "OPERATIONS MANAGER",
    image: "/images/teams/RAJIB-SARKAR.jpg",
  },
  {
    id: "21",
    name: "MYTHILI KUMBLE",
    role: "ASSISTANT BUSINESS MANAGER",
    image: "/images/teams/MYTHILI-KUMBLE.jpg",
  },
  {
    id: "22",
    name: "GURMEET SINGH",
    role: "ASSISTANT BUSINESS MANAGER",
    image: "/images/teams/GURMEET-SINGH.jpg",
  },
  {
    id: "23",
    name: "SHRUTI SHARMA",
    role: "ASSISTANT BUSINESS MANAGER",
    image: "/images/teams/SHRUTI-SHARMA.jpg",
  },
  {
    id: "24",
    name: "AARTI PATHARE",
    role: "VISUALIZER",
    image: "/images/teams/AARTI-PATHARE.jpg",
  },
  {
    id: "25",
    name: "ANSHUMAN DAS",
    role: "SENIOR OPERATIONS EXECUTIVE",
    image: "/images/teams/ANSHUMAN-DAS.jpg",
  },
  {
    id: "26",
    name: "MANOHARA MV",
    role: "SENIOR OPERATIONS EXECUTIVE",
    image: "/images/teams/MANOHARA-MV.jpg",
  },
  {
    id: "27",
    name: "SNEHA PAWAR",
    role: "FINANCE ASSISTANT",
    image: "/images/teams/SNEHA-PAWAR.jpg",
  },
];

/* ============================================================
   MAIN PAGE
============================================================ */

export default function TeamPage() {
  const scrollToTeam = () => {
    document.getElementById("team")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="overflow-hidden bg-[#050509] font-sans text-white">
      {/* HERO SECTION */}

      {/* =====================================================
    HERO SECTION — ABOUT US DESIGN PATTERN
===================================================== */}

      <section className="relative min-h-[100svh] overflow-hidden bg-[#050509]">
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

        {/* Animated Glow */}
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
          className="pointer-events-none absolute right-[12%] top-[28%] h-[25vw] w-[25vw] rounded-full bg-[#0976b2] blur-[120px]"
        />

        {/* Background Typography */}
        <div className="pointer-events-none absolute bottom-[-4vw] right-[-4vw] select-none">
          <span className="whitespace-nowrap text-[25vw] font-black leading-none tracking-[-0.1em] text-white/[0.025]">
            PEOPLE
          </span>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1600px] items-center px-6 pb-16 pt-32 sm:px-10 lg:px-16">
          <div className="grid w-full items-center gap-12 lg:grid-cols-12">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:col-span-7"
            >
              {/* Section Label */}
              <div className="mb-8 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#0976b2]">
                <span className="h-px w-12 bg-[#0976b2]" />
                WTT / CHANGE MAKERS
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
                  className="
  wtt-display-title
  max-w-[900px]
  text-[clamp(3.4rem,8vw,8rem)]
  uppercase
"
                >
                  THE PEOPLE
                  <br />
                  <span className="text-[#0976b2]">WHO</span>
                  <br />
                  WALK THE TALK.
                </motion.h1>
              </div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.55,
                  duration: 0.8,
                }}
                className="mt-8 flex max-w-[650px] flex-col justify-between gap-6 border-t border-white/10 pt-6 sm:mt-10 md:flex-row md:items-end"
              >
                <p className="max-w-xl text-base font-normal leading-[1.8] text-white/55 sm:text-lg">
                  The thinkers, doers, problem-solvers and go-getters. Turning
                  ideas into real-world experiences.
                </p>

                <button
                  type="button"
                  onClick={scrollToTeam}
                  className="group flex shrink-0 cursor-pointer items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/50 transition-colors duration-300 hover:text-white"
                >
                  <span>MEET CHANGE MAKERS</span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-[#007aff] group-hover:bg-[#007aff] group-hover:text-white">
                    <ArrowDown
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-y-1"
                    />
                  </span>
                </button>
              </motion.div>
            </motion.div>

            {/* RIGHT HERO VISUAL */}
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
              {/* Outer Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-1/2 top-1/2 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0976b2]/20"
              />

              {/* Inner Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 45,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
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
                className="absolute left-1/2 top-1/2 z-20 w-[310px] -translate-x-1/2 -translate-y-1/2"
              >
                <div className="border border-white/15 bg-[#0c0d12] p-3 shadow-2xl">
                  {/* Card Header */}
                  <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/30">
                      WTT / PEOPLE
                    </span>

                    <span className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#0976b2]">
                      Our Team
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0976b2]" />
                    </span>
                  </div>

                  {/* Card Visual */}
                  <div className="relative flex h-[250px] flex-col justify-between overflow-hidden bg-[#0976b2] p-6">
                    <div className="absolute right-[-40px] top-[-40px] h-32 w-32 rounded-full border border-white/30" />

                    <div className="absolute bottom-[-80px] left-[-30px] h-52 w-52 rounded-full border border-white/20" />

                    <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.25em] text-white/70">
                      One Team
                      <br />
                      One Vision
                      <br />
                      One Promise.
                    </span>

                    <span className="relative z-10 text-4xl font-semibold uppercase leading-[0.85] tracking-[-0.07em]">
                      People
                      <br />
                      Make
                      <br />
                      Impact.
                    </span>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">
                      Ideas / People / Culture
                    </span>

                    <ArrowUpRight size={18} className="text-[#0976b2]" />
                  </div>
                </div>
              </motion.div>

              {/* Team Members Floating Card */}
              <div className="absolute left-0 top-[20%] z-30 border border-white/10 bg-[#0a0b10]/90 p-5 backdrop-blur-xl">
                {/* <div className="mb-2 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40">
          <CircleDot size={11} className="text-[#0976b2]" />
          Our People
        </div> */}

                <div className="text-3xl font-semibold tracking-[-0.06em]">
                  27+
                </div>
              </div>

              {/* Shared Vision Floating Card */}
              <div className="absolute bottom-[18%] right-0 z-30 border border-[#0976b2]/30 bg-[#07142a]/90 p-5 backdrop-blur-xl">
                <div className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#0976b2]">
                  Shared Vision
                </div>

                <div className="text-3xl font-semibold tracking-[-0.06em]">
                  ONE
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Scroll Navigation */}
        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 sm:px-10 lg:px-16">
            <button
              type="button"
              onClick={scrollToTeam}
              className="group flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30 transition-colors hover:text-[#0976b2]"
            >
              Scroll To Explore
              <ArrowDown
                size={14}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </button>

            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.25em] text-white/20 sm:block">
              People / Ideas / Culture
            </span>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section
        id="team"
        className="scroll-mt-20 bg-[#f3f3f0] py-24 text-[#050509] sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
          <div className="mb-16 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <h2 className="wtt-display-title uppercase">
                <span className="text-black/15">CHANGE</span>
                <span className="block text-[#0976b2]">MAKERS</span>
              </h2>
            </div>

            <div className="max-w-md">
              <p className="text-base font-normal leading-relaxed text-black/50 sm:text-lg">
                From strategy and creativity to client partnerships and
                on-ground execution, it takes committed people working together
                to bring every campaign to life. Meet the team that puts the WTT
                promise into action, every single day.
              </p>
            </div>
          </div>

          {/* Team Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4"
          >
            {squad.map((member, index) => (
              <SquadCard key={member.id} member={member} index={index} />
            ))}
          </motion.div>

          {/* Section Footer */}
          <div className="mt-10 flex items-center justify-between border-t border-black/10 pt-5">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/30">
              WTT / THE SQUAD
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ============================================================
   SQUAD CARD
============================================================ */

function SquadCard({ member, index }: { member: TeamMember; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      layout
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.55,
        delay: (index % 8) * 0.04,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden bg-[#111116]"
    >
      <div className="relative aspect-[0.78/1] overflow-hidden">
        {/* Team Member Image */}
        <motion.div
          animate={{
            scale: hovered ? 1.1 : 1,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0"
        >
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover grayscale transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:grayscale-0"
          />
        </motion.div>

        {/* Image Overlay */}
        <motion.div
          animate={{
            opacity: hovered ? 0.85 : 0.65,
          }}
          className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"
        />

        {/* Hover Glow */}
        <motion.div
          animate={{
            opacity: hovered ? 0.45 : 0,
            scale: hovered ? 1.2 : 0.8,
          }}
          className="absolute bottom-[-80px] right-[-80px] h-64 w-64 rounded-full bg-[#0976b2] blur-[90px]"
        />

        {/* Top Arrow */}
        <motion.div
          animate={{
            rotate: hovered ? 45 : 0,
            scale: hovered ? 1.08 : 1,
          }}
          transition={{
            duration: 0.4,
          }}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black"
        >
          <ArrowUpRight size={17} />
        </motion.div>

        {/* Member Details */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-4 sm:p-5">
          <motion.h3
            animate={{
              y: hovered ? -2 : 0,
            }}
            className="pr-2 text-lg font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-white sm:text-xl lg:text-2xl"
          >
            {member.name}
          </motion.h3>

          <div className="mt-3 flex min-h-10 items-center justify-between gap-3">
            <span className="max-w-[calc(100%-3rem)] text-[8px] font-medium uppercase tracking-[0.12em] text-white/55 sm:text-[9px]">
              {member.role}
            </span>

            {member.linkedinUrl && (
              <a
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${member.name} on LinkedIn`}
                onClick={(event) => event.stopPropagation()}
                className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-[#0A66C2] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#004182]"
              >
                <FaLinkedin size={19} />
              </a>
            )}
          </div>
        </div>

        {/* Hover Border */}
        <motion.div
          animate={{
            opacity: hovered ? 1 : 0,
          }}
          className="pointer-events-none absolute inset-0 border-2 border-[#0976b2]"
        />
      </div>
    </motion.article>
  );
}

/* ============================================================
   HERO SQUAD VISUAL
============================================================ */

function HeroSquadVisual() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    setMouse({ x, y });
  };

  const handleMouseLeave = () => {
    setMouse({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{
        opacity: 0,
        scale: 0.85,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.2,
        delay: 0.25,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative h-[400px] w-full max-w-[600px] sm:h-[520px] lg:h-[680px]"
    >
      {/* Outer Orbit */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08] sm:h-[500px] sm:w-[500px]"
      >
        <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#0976b2] shadow-[0_0_30px_8px_rgba(0,122,255,.5)]" />
      </motion.div>

      {/* Inner Orbit */}
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0976b2]/20 sm:h-[360px] sm:w-[360px]"
      >
        <div className="absolute bottom-[-3px] left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-white shadow-[0_0_25px_5px_rgba(255,255,255,.3)]" />
      </motion.div>

      {/* Center Glow */}
      <motion.div
        animate={{
          scale: [0.9, 1.12, 0.9],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0976b2]/20 blur-[60px]"
      />

      {/* Center WTT Circle */}
      <motion.div
        style={{
          x: mouse.x * 12,
          y: mouse.y * 12,
        }}
        className="absolute left-1/2 top-1/2 z-20 flex h-[135px] w-[135px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#050509]/80 backdrop-blur-xl sm:h-[165px] sm:w-[165px]"
      >
        <div className="text-center">
          <div className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#0976b2]">
            WTT
          </div>

          <div className="mt-2 text-[8px] font-semibold uppercase tracking-[0.25em] text-white/40">
            PEOPLE
          </div>
        </div>
      </motion.div>

      {/* Rotating Text */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 z-30 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-[245px] sm:w-[245px]"
      >
        <div className="absolute left-1/2 top-[-4px] -translate-x-1/2 whitespace-nowrap text-[8px] font-semibold uppercase tracking-[0.35em] text-white/40">
          CREATE • CHALLENGE • COLLABORATE •
        </div>
      </motion.div>

      {/* Side Label */}
      <div className="absolute right-[-10px] top-1/2 hidden -translate-y-1/2 rotate-90 text-[8px] font-semibold uppercase tracking-[0.5em] text-white/20 xl:block">
        PEOPLE / IDEAS / CULTURE / WTT
      </div>
    </motion.div>
  );
}
