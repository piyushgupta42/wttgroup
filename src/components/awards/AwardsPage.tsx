"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  ExternalLink,
  MapPin,
  Trophy,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

export interface Award {
  id: string;
  year: string;
  award: string;
  category: string;
  metal: "GOLD" | "SILVER" | "BRONZE";
  campaign: string;
  brand: string;
  image: string;
  description: string;
}

/* =========================================================
   AWARDS DATA
========================================================= */

// export const awards: Award[] = [
//   {
//     id: "01",
//     year: "2025",
//     award: "e4m Maverick Awards",
//     category: "Best Product Launch — Offline",
//     metal: "GOLD",
//     campaign: "Cook Like a Pro",
//     brand: "Milton ProCook",
//     image: "/images/awards/award-01.png",
//     description:
//       "A high-impact product communication campaign designed to turn everyday cooking into a memorable brand experience.",
//   },
//   {
//     id: "02",
//     year: "2025",
//     award: "e4m Maverick Awards",
//     category: "Best Marketing Campaign — Hospitality",
//     metal: "GOLD",
//     campaign: "Taste The Epic",
//     brand: "KFC",
//     image: "/images/awards/award-02.png",
//     description:
//       "A bold campaign created to bring the KFC experience into the physical world through memorable outdoor communication.",
//   },
//   {
//     id: "03",
//     year: "2025",
//     award: "e4m Maverick Awards",
//     category: "Best Marketing Campaign — Consumer Durable",
//     metal: "GOLD",
//     campaign: "One Touch Casserole",
//     brand: "Milton",
//     image: "/images/awards/award-03.png",
//     description:
//       "A consumer-focused campaign that transformed a simple product proposition into distinctive brand communication.",
//   },
//   {
//     id: "04",
//     year: "2025",
//     award: "e4m Maverick Awards",
//     category: "Best DOOH / OOH Campaign",
//     metal: "GOLD",
//     campaign: "Cook Like a Pro",
//     brand: "Milton ProCook",
//     image: "/images/awards/award-04.png",
//     description:
//       "A campaign using outdoor media to create visibility, memorability and a stronger connection between product and audience.",
//   },
//   {
//     id: "05",
//     year: "2024",
//     award: "e4m Maverick Awards",
//     category: "Best DOOH / OOH Campaign",
//     metal: "GOLD",
//     campaign: "The Weather I Long For",
//     brand: "Nescafé",
//     image: "/images/awards/award-05.png",
//     description:
//       "An experiential outdoor campaign built around weather, coffee and a highly contextual consumer experience.",
//   },
//   {
//     id: "06",
//     year: "2024",
//     award: "OOH Awards",
//     category: "Best Targeted OOH Campaign",
//     metal: "GOLD",
//     campaign: "My Colour My Choice",
//     brand: "Milton",
//     image: "/images/awards/award-06.png",
//     description:
//       "A targeted outdoor campaign that combined product relevance with creative outdoor execution.",
//   },
//   {
//     id: "07",
//     year: "2025",
//     award: "Foxglove Awards",
//     category: "Most Innovative Use of OOH",
//     metal: "GOLD",
//     campaign: "Pahado Wali Maggi",
//     brand: "Maggi",
//     image: "/images/awards/award-07.png",
//     description:
//       "An outdoor campaign that used context and location to make the Maggi proposition more culturally relevant.",
//   },
//   {
//     id: "08",
//     year: "2024",
//     award: "OOH Awards",
//     category: "Best Integration / Creative OOH",
//     metal: "GOLD",
//     campaign: "Rich Delicious Break",
//     brand: "KitKat",
//     image: "/images/awards/award-08.png",
//     description:
//       "A visually distinctive outdoor execution created around the iconic KitKat break proposition.",
//   },
// ];

/* =========================================================
   PAGE
========================================================= */

export default function AwardsPage() {
  const [awards, setAwards] = useState<Award[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* =========================================================
     LOAD AWARDS FROM DATABASE
  ========================================================= */

  useEffect(() => {
    const loadAwards = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "/api/admin/home/recognitions",
          {
            method: "GET",
            cache: "no-store",
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data?.error ||
              "Failed to load recognitions"
          );
        }

        const databaseAwards =
          data?.content?.awards;

        if (!Array.isArray(databaseAwards)) {
          throw new Error(
            "Invalid recognitions data"
          );
        }

        setAwards(databaseAwards);
      } catch (error) {
        console.error(
          "Failed to load recognitions:",
          error
        );

        setError(
          error instanceof Error
            ? error.message
            : "Failed to load recognitions"
        );
      } finally {
        setLoading(false);
      }
    };

    loadAwards();
  }, []);

  /* =========================================================
     STATS
  ========================================================= */

  const goldCount = awards.filter(
    (item) => item.metal === "GOLD"
  ).length;

  const years = Array.from(
    new Set(awards.map((item) => item.year))
  );

  /* =========================================================
     LOADING
  ========================================================= */

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050509] text-white">
        <div className="text-center">
          <div className="mx-auto mb-5 h-8 w-8 animate-spin rounded-full border border-white/20 border-t-[#007aff]" />

          <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-white/40">
            Loading Recognitions
          </p>
        </div>
      </main>
    );
  }

  /* =========================================================
     ERROR
  ========================================================= */

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050509] px-5 text-white">
        <div className="max-w-md text-center">
          <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.35em] text-[#007aff]">
            Recognition
          </p>

          <h1 className="text-3xl font-black tracking-[-0.05em]">
            Unable to load awards.
          </h1>

          <p className="mt-4 text-sm leading-6 text-white/40">
            {error}
          </p>
        </div>
      </main>
    );
  }

  /* =========================================================
     EMPTY
  ========================================================= */

  if (awards.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050509] px-5 text-white">
        <div className="text-center">
          <Trophy
            size={30}
            strokeWidth={1.2}
            className="mx-auto mb-5 text-[#007aff]"
          />

          <h1 className="text-3xl font-black">
            No recognitions yet.
          </h1>

          <p className="mt-3 text-sm text-white/40">
            Add awards from the admin panel.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="wtt-awards-page w-full overflow-x-hidden bg-[#050509] text-white">

      {/* =====================================================
          01 — HERO
      ===================================================== */}

      <section
        data-snap-section
        className="relative h-[100svh] min-h-[620px] w-full snap-start overflow-hidden"
      >
        <BackgroundGrid />

        <div className="pointer-events-none absolute right-[-15%] top-[10%] h-[55vw] w-[55vw] rounded-full bg-[#007aff]/10 blur-[120px]" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1800px] flex-col justify-between px-5 pb-6 pt-28 sm:px-8 md:px-12 lg:px-16 lg:pb-8 xl:px-20">

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#007aff] sm:w-12" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.35em] text-white/45 sm:text-[9px]">
                WTT / Recognition
              </span>
            </div>

            <span className="font-mono text-[8px] text-white/25 sm:text-[9px]">
              01 / {String(awards.length).padStart(2, "0")}
            </span>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-12">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <p className="mb-5 text-[8px] font-bold uppercase tracking-[0.4em] text-[#007aff] sm:text-[9px]">
                Awards / {years.join(" — ")}
              </p>

              <h1 className="text-[clamp(4rem,11vw,11rem)] font-black leading-[0.77] tracking-[-0.09em]">
                WORK
                <br />
                THAT
                <br />
                <span className="text-[#007aff]">
                  MOVES.
                </span>
              </h1>

              <p className="mt-7 max-w-md text-xs leading-6 text-white/40 sm:text-sm sm:leading-7">
                Ideas built for the real world, engineered to
                stop traffic, start conversations and stay
                remembered.
              </p>
            </motion.div>

            <OOHHeroVisual />
          </div>

          <div className="flex items-center justify-between border-t border-white/10 pt-4">

            <div className="flex items-center gap-3">
              <MapPin
                size={12}
                strokeWidth={1.5}
                className="text-[#007aff]"
              />

              <span className="text-[7px] uppercase tracking-[0.3em] text-white/30">
                Mumbai / India
              </span>
            </div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="flex items-center gap-2 text-[7px] font-bold uppercase tracking-[0.3em] text-white/40"
            >
              Scroll to explore
              <ArrowDown size={13} />
            </motion.div>

          </div>
        </div>
      </section>


      {/* =====================================================
          02 — RECOGNITION INTRO
      ===================================================== */}

      <section
        data-snap-section
        className="relative h-[100svh] min-h-[620px] w-full snap-start overflow-hidden bg-[#f2f2ef] text-[#050509]"
      >

        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "linear-gradient(#050509 1px, transparent 1px), linear-gradient(90deg, #050509 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-[1800px] flex-col justify-between px-5 pb-6 pt-28 sm:px-8 md:px-12 lg:px-16 lg:pb-8 xl:px-20">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-[#007aff]">
                02
              </span>

              <span className="h-px w-10 bg-black/15" />

              <span className="text-[8px] uppercase tracking-[0.35em] text-black/35">
                Recognition
              </span>

            </div>

            <Trophy
              size={17}
              strokeWidth={1.4}
              className="text-[#007aff]"
            />

          </div>

          <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_.8fr]">

            <div>

              <h2 className="text-[clamp(3.8rem,10vw,10rem)] font-black leading-[0.76] tracking-[-0.09em]">
                PROOF
                <br />
                THAT
                <br />
                <span className="text-[#007aff]">
                  MATTERS.
                </span>
              </h2>

            </div>

            <div className="max-w-md pb-2 lg:pb-5">

              <p className="text-sm leading-7 text-black/45">
                Recognition follows great work. These are
                the campaigns that made people stop,
                look and remember.
              </p>

              <div className="mt-10 grid grid-cols-3 border-y border-black/10">

                <Stat
                  value={String(awards.length).padStart(2, "0")}
                  label="Awards"
                />

                <Stat
                  value={String(goldCount).padStart(2, "0")}
                  label="Gold"
                />

                <Stat
                  value={String(years.length).padStart(2, "0")}
                  label="Years"
                />

              </div>

            </div>
          </div>

          <div className="overflow-hidden border-y border-black/10 py-4">

            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex w-max gap-10 whitespace-nowrap"
            >

              {Array.from({ length: 2 }).map((_, group) => (
                <div
                  key={group}
                  className="flex items-center gap-10"
                >

                  <span className="text-[9px] font-bold uppercase tracking-[0.35em]">
                    OOH
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-[#007aff]" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.35em]">
                    DOOH
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-black/20" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.35em]">
                    EXPERIENCE
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-[#007aff]" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.35em]">
                    CREATIVE
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-black/20" />

                </div>
              ))}

            </motion.div>
          </div>

        </div>
      </section>


      {/* =====================================================
          03 — FEATURED AWARD 01
      ===================================================== */}

      {awards[0] && (
        <FeaturedAward
          number="03"
          award={awards[0]}
          dark
        />
      )}


      {/* =====================================================
          04 — FEATURED AWARD 02
      ===================================================== */}

      {awards[1] && (
        <FeaturedAward
          number="04"
          award={awards[1]}
          dark={false}
        />
      )}


      {/* =====================================================
          05 — FEATURED AWARD 03
      ===================================================== */}

      {awards[2] && (
        <FeaturedAward
          number="05"
          award={awards[2]}
          dark
        />
      )}


      {/* =====================================================
          06 — FEATURED AWARD 04
      ===================================================== */}

      {awards[3] && (
        <FeaturedAward
          number="06"
          award={awards[3]}
          dark={false}
        />
      )}


      {/* =====================================================
          07 — AWARD WALL
      ===================================================== */}

      {awards.length > 4 && (
        <section
          data-snap-section
          className="relative h-[100svh] min-h-[620px] w-full snap-start overflow-hidden bg-[#050509]"
        >

          <BackgroundGrid />

          <div className="relative z-10 mx-auto flex h-full max-w-[1800px] flex-col px-5 pb-6 pt-28 sm:px-8 md:px-12 lg:px-16 lg:pb-8 xl:px-20">

            <div className="flex items-end justify-between">

              <div>

                <div className="mb-4 flex items-center gap-3">

                  <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-[#007aff]">
                    07
                  </span>

                  <span className="h-px w-10 bg-white/15" />

                  <span className="text-[8px] uppercase tracking-[0.35em] text-white/30">
                    Award Wall
                  </span>

                </div>

                <h2 className="text-[clamp(3.5rem,8vw,8rem)] font-black leading-[0.78] tracking-[-0.09em]">
                  THE
                  <br />
                  ARCHIVE
                  <span className="text-[#007aff]">.</span>
                </h2>

              </div>

              <p className="hidden max-w-xs text-xs leading-6 text-white/35 md:block">
                A collection of work that travelled
                beyond the screen and into the streets.
              </p>

            </div>

            <div className="mt-8 grid min-h-0 flex-1 grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">

              {awards.slice(4).map((award, index) => (
                <MiniAwardCard
                  key={award.id}
                  award={award}
                  index={index}
                />
              ))}

            </div>

            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">

              <span className="text-[7px] uppercase tracking-[0.3em] text-white/25">
                WTT / Awards Archive
              </span>

              <span className="font-mono text-[8px] text-white/25">
                {years.join(" — ")}
              </span>

            </div>

          </div>
        </section>
      )}


      {/* =====================================================
          08 — CTA
      ===================================================== */}

      <section
        data-snap-section
        className="relative h-[100svh] min-h-[620px] w-full snap-start overflow-hidden bg-[#007aff] text-white"
      >

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="pointer-events-none absolute right-[-100px] top-[15%] hidden h-[360px] w-[500px] rotate-[-8deg] border border-white/20 bg-black/10 lg:block">

          <div className="absolute inset-5 border border-white/10">

            <div className="absolute left-5 top-5 h-2 w-20 bg-white/30" />

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">

              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/40">
                WTT / OOH
              </span>

              <ArrowUpRight size={20} />

            </div>

          </div>

        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-[1800px] flex-col justify-between px-5 pb-6 pt-28 sm:px-8 md:px-12 lg:px-16 lg:pb-8 xl:px-20">

          <div className="flex items-center justify-between">

            <span className="text-[8px] uppercase tracking-[0.4em] text-white/50">
              08 / Next
            </span>

            <span className="font-mono text-[8px] text-white/40">
              WTT / INDIA
            </span>

          </div>

          <div>

            <p className="mb-6 text-[8px] font-bold uppercase tracking-[0.4em] text-white/55">
              Your campaign could be next
            </p>

            <h2 className="max-w-6xl text-[clamp(4rem,12vw,12rem)] font-black leading-[0.73] tracking-[-0.1em]">
              MAKE
              <br />
              PEOPLE
              <br />
              <span className="text-black">
                LOOK.
              </span>
            </h2>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-5 border border-white/40 px-6 py-4 text-[8px] font-bold uppercase tracking-[0.3em] transition-all duration-300 hover:bg-white hover:text-[#007aff] sm:mt-10 sm:px-8 sm:py-5"
            >
              Start a Project

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>

          </div>

          <div className="flex items-center justify-between border-t border-white/20 pt-4">

            <span className="text-[7px] uppercase tracking-[0.3em] text-white/45">
              Creatively led. Tech driven.
            </span>

            <span className="text-[7px] uppercase tracking-[0.3em] text-white/45">
              Outdoor / Digital / Experience
            </span>

          </div>

        </div>
      </section>

    </main>
  );
}


/* =========================================================
   BACKGROUND GRID
========================================================= */

function BackgroundGrid() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.045]"
      style={{
        backgroundImage:
          "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    />
  );
}


/* =========================================================
   OOH HERO VISUAL
========================================================= */

function OOHHeroVisual() {
  return (
    <div className="relative mx-auto h-[300px] w-full max-w-[650px] sm:h-[400px] lg:h-[480px]">

      {/* Main billboard */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
          rotate: -5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: -5,
        }}
        transition={{
          duration: 1,
          delay: 0.2,
        }}
        className="absolute left-[5%] top-[14%] h-[62%] w-[72%] border border-white/15 bg-[#101015] p-2 shadow-2xl sm:p-3"
      >

        <div className="relative flex h-full w-full items-end overflow-hidden border border-white/10 bg-[#0b0b10]">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(0,122,255,.35),transparent_45%)]" />

          <div className="relative z-10 p-5 sm:p-7">

            <p className="text-[7px] font-bold uppercase tracking-[0.35em] text-[#007aff]">
              WTT / Outdoor Media
            </p>

            <p className="mt-2 text-[clamp(1.6rem,4vw,3.8rem)] font-black leading-[0.8] tracking-[-0.07em]">
              IDEAS
              <br />
              IN THE
              <br />
              WILD.
            </p>

          </div>

        </div>

      </motion.div>


      {/* Small board */}

      <motion.div
        initial={{
          opacity: 0,
          x: 40,
          y: 30,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.5,
        }}
        className="absolute right-[2%] top-[4%] h-[32%] w-[30%] border border-white/15 bg-[#111117] p-2 sm:p-3"
      >

        <div className="flex h-full flex-col justify-between border border-white/10 p-3">

          <span className="font-mono text-[7px] text-white/30">
            01
          </span>

          <span className="text-[clamp(1rem,2.5vw,2rem)] font-black tracking-[-0.06em]">
            OOH<span className="text-[#007aff]">.</span>
          </span>

        </div>

      </motion.div>


      {/* Circle */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[5%] right-[8%] flex h-28 w-28 items-center justify-center rounded-full border border-[#007aff]/30 sm:h-40 sm:w-40"
      >

        <div className="absolute inset-3 rounded-full border border-dashed border-[#007aff]/30" />

        <div className="text-center">

          <p className="text-[7px] font-bold uppercase tracking-[0.3em] text-[#007aff]">
            WTT
          </p>

          <p className="mt-1 text-2xl font-black sm:text-4xl">
            08
          </p>

          <p className="text-[6px] uppercase tracking-[0.25em] text-white/30">
            Wins
          </p>

        </div>

      </motion.div>


      {/* Blue nodes */}

      <div className="absolute left-[1%] bottom-[15%] h-3 w-3 rounded-full bg-[#007aff] shadow-[0_0_30px_#007aff]" />

      <div className="absolute right-[5%] bottom-[42%] h-2 w-2 rounded-full bg-white/80" />

    </div>
  );
}


/* =========================================================
   STAT
========================================================= */

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="px-3 py-5 first:pl-0 last:pr-0">

      <p className="text-3xl font-black tracking-[-0.07em] sm:text-4xl">
        {value}
      </p>

      <p className="mt-1 text-[7px] uppercase tracking-[0.3em] text-black/30">
        {label}
      </p>

    </div>
  );
}


/* =========================================================
   FEATURED AWARD
========================================================= */

function FeaturedAward({
  number,
  award,
  dark,
}: {
  number: string;
  award: Award;
  dark: boolean;
}) {
  return (
    <section
      data-snap-section
      className={`relative h-[100svh] min-h-[620px] w-full snap-start overflow-hidden ${
        dark
          ? "bg-[#050509] text-white"
          : "bg-[#f2f2ef] text-[#050509]"
      }`}
    >

      {/* Grid */}

      <div
        className={`pointer-events-none absolute inset-0 ${
          dark ? "opacity-[0.045]" : "opacity-[0.035]"
        }`}
        style={{
          backgroundImage: dark
            ? "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg,#ffffff 1px,transparent 1px)"
            : "linear-gradient(#050509 1px, transparent 1px), linear-gradient(90deg,#050509 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />


      <div className="relative z-10 mx-auto flex h-full max-w-[1800px] flex-col px-5 pb-6 pt-28 sm:px-8 md:px-12 lg:px-16 lg:pb-8 xl:px-20">

        {/* Top */}

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-[#007aff]">
              {number}
            </span>

            <span
              className={`h-px w-10 ${
                dark ? "bg-white/15" : "bg-black/15"
              }`}
            />

            <span
              className={`text-[8px] uppercase tracking-[0.35em] ${
                dark ? "text-white/30" : "text-black/35"
              }`}
            >
              Featured Recognition
            </span>

          </div>


          <span
            className={`font-mono text-[8px] ${
              dark ? "text-white/25" : "text-black/25"
            }`}
          >
            {award.year}
          </span>

        </div>


        {/* Main */}

        <div className="grid min-h-0 flex-1 items-center gap-8 py-7 lg:grid-cols-[1.1fr_.9fr] lg:gap-14 lg:py-10">

          {/* Image */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative min-h-0"
          >

            <div className="relative aspect-[1.25/1] max-h-[52svh] overflow-hidden border border-black/10 bg-black lg:aspect-[1.35/1] lg:max-h-[62svh]">

              <Image
                src={award.image}
                alt={award.campaign}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                priority={award.id === "01"}
              />


              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />


              {/* Image number */}

              <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm sm:left-6 sm:top-6">

                <span className="font-mono text-[8px] text-white">
                  {award.id}
                </span>

              </div>


              {/* Gold */}

              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">

                <span className="flex items-center gap-2 text-[7px] font-bold uppercase tracking-[0.3em] text-white">

                  <span className="h-1.5 w-1.5 rounded-full bg-[#007aff]" />

                  {award.metal}

                </span>

              </div>


              {/* External */}

              <div className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-sm sm:bottom-6 sm:right-6">

                <ExternalLink
                  size={13}
                  strokeWidth={1.5}
                  className="text-white"
                />

              </div>

            </div>

          </motion.div>


          {/* Content */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="min-w-0"
          >

            <div className="flex items-center justify-between">

              <span className="max-w-[75%] text-[8px] font-bold uppercase tracking-[0.3em] text-[#007aff]">
                {award.category}
              </span>

              <Trophy
                size={16}
                strokeWidth={1.3}
                className="text-[#007aff]"
              />

            </div>


            <div
              className={`my-5 h-px ${
                dark ? "bg-white/10" : "bg-black/10"
              }`}
            />


            <p
              className={`text-[8px] uppercase tracking-[0.3em] ${
                dark ? "text-white/30" : "text-black/30"
              }`}
            >
              {award.award}
            </p>


            <h2 className="mt-5 text-[clamp(3rem,6vw,7rem)] font-black leading-[0.78] tracking-[-0.09em]">

              {award.campaign}

              <span className="text-[#007aff]">
                .
              </span>

            </h2>


            <div
              className={`mt-7 grid grid-cols-2 border-y py-4 ${
                dark
                  ? "border-white/10"
                  : "border-black/10"
              }`}
            >

              <div>

                <p
                  className={`text-[7px] uppercase tracking-[0.3em] ${
                    dark ? "text-white/25" : "text-black/30"
                  }`}
                >
                  Brand
                </p>

                <p className="mt-2 text-sm font-bold">
                  {award.brand}
                </p>

              </div>


              <div>

                <p
                  className={`text-[7px] uppercase tracking-[0.3em] ${
                    dark ? "text-white/25" : "text-black/30"
                  }`}
                >
                  Recognition
                </p>

                <p className="mt-2 text-sm font-bold">
                  {award.metal}
                </p>

              </div>

            </div>


            <p
              className={`mt-6 max-w-lg text-xs leading-6 ${
                dark ? "text-white/40" : "text-black/45"
              }`}
            >
              {award.description}
            </p>


            <div className="mt-6 flex items-center justify-between">

              <span
                className={`text-[7px] font-bold uppercase tracking-[0.3em] ${
                  dark ? "text-white/30" : "text-black/30"
                }`}
              >
                Awarded / {award.year}
              </span>


              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#007aff] text-[#007aff]">

                <ArrowUpRight size={14} />

              </span>

            </div>

          </motion.div>

        </div>


        {/* Bottom */}

        <div
          className={`flex items-center justify-between border-t pt-4 ${
            dark ? "border-white/10" : "border-black/10"
          }`}
        >

          <span
            className={`text-[7px] uppercase tracking-[0.3em] ${
              dark ? "text-white/20" : "text-black/25"
            }`}
          >
            WTT / Outdoor Media
          </span>

          <span
            className={`font-mono text-[8px] ${
              dark ? "text-white/20" : "text-black/25"
            }`}
          >
            {award.id} / 08
          </span>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   MINI AWARD CARD
========================================================= */

function MiniAwardCard({
  award,
  index,
}: {
  award: Award;
  index: number;
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      className="group relative min-h-0 overflow-hidden border border-white/10 bg-[#0c0c11]"
    >

      <div className="absolute inset-0">

        <Image
          src={award.image}
          alt={award.campaign}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover opacity-70 grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      </div>


      <div className="relative flex h-full min-h-[220px] flex-col justify-between p-4 sm:p-5">

        <div className="flex items-center justify-between">

          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[7px] backdrop-blur-md">
            {award.id}
          </span>

          <span className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#007aff]">
            {award.metal}
          </span>

        </div>


        <div>

          <p className="mb-2 text-[6px] uppercase tracking-[0.25em] text-white/45">
            {award.category}
          </p>

          <h3 className="text-lg font-black leading-[0.9] tracking-[-0.05em] sm:text-2xl">
            {award.campaign}
            <span className="text-[#007aff]">.</span>
          </h3>

          <p className="mt-2 text-[7px] uppercase tracking-[0.2em] text-white/35">
            {award.brand}
          </p>

        </div>

      </div>

    </motion.article>
  );
}