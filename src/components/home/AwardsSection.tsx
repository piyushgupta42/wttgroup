
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

interface Award {
  id: string;
  award: string;
  organization: string;
  title: string;
  image: string;
}

const awards: Award[] = [
  {
    id: "01",
    award: "OOHWARDS",
    organization: "MAD OVER MARKETING",
    title: "OOH AGENCY OF THE YEAR",
    image:
      "/images/awards/MAD-OVER-MARKETING–OOHWARDS-OOH-AGENCY-OF-THE-YEAR.png",
  },
  {
    id: "02",
    award: "MOMMYS",
    organization: "MAD OVER MARKETING",
    title: "BEST MARKETING CAMPAIGN",
    image:
      "/images/awards/MAD-OVER-MARKETING–MOMMYS-BEST-MARKETING-CAMPAIGN.png",
  },
  {
    id: "03",
    award: "MOMMYS",
    organization: "MAD OVER MARKETING",
    title: "MOM'S FAVOURITE",
    image:
      "/images/awards/MAD-OVER-MARKETING–MOMMYS-MOM-FAVOURITE.png",
  },
  {
    id: "04",
    award: "MAVERICK AWARDS",
    organization: "EXCHANGE4MEDIA",
    title: "RISING MAVERICK AGENCY OF THE YEAR",
    image:
      "/images/awards/EXCHANGE4MEDIA-MAVERICK-AWARDS-RISING-MAVERICK-AGENCY-OF-THE-YEAR.png",
  },
  {
    id: "05",
    award: "MAA AWARDS",
    organization: "ADGULLY",
    title: "PROMISING AGENCY OF THE YEAR",
    image:
      "/images/awards/ADGULLY-MAA-AWARDS-PROMISING-AGENCY-OF-THE-YEAR.png",
  },
  {
    id: "06",
    award: "MADX AWARDS",
    organization: "THE FOUNDER MEDIA",
    title: "INDEPENDENT AGENCY OF THE YEAR",
    image:
      "/images/awards/THE-FOUNDER-MEDIA-MADX-AWARDS-INDEPENDENT-AGENCY-OF-THE-YEAR.png",
  },
  {
    id: "07",
    award: "OOH PHOENIX AWARDS",
    organization: "THE FOUNDER MEDIA",
    title: "ADVERTISER OF THE YEAR",
    image:
      "/images/awards/THE-FOUNDER-MEDIA-OOH-PHOENIX-AWARDS-ADVERTISER-OF-THE-YEAR.png",
  },
  {
    id: "08",
    award: "AFAQS FOXGLOVE AWARDS",
    organization: "THE FOUNDER MEDIA",
    title: "RISING STAR OF THE YEAR",
    image:
      "/images/awards/AFAQS-FOXGLOVE-AWARDS-RISING-STAR-OF-THE-YEAR.png",
  },
];

const TOTAL_AWARDS = awards.length;
const AUTO_PLAY_DELAY = 4500;
const SLIDE_DURATION = 0.9;

const carouselAwards = [
  ...awards,
  ...awards,
  ...awards,
];

function AwardCard({
  award,
  active,
  onClick,
}: {
  award: Award;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={`${award.award}: ${award.title}`}
      aria-pressed={active}
      animate={{
        scale: active ? 1.1 : 0.84,
        opacity: active ? 1 : 0.48,
        y: active ? -10 : 0,
      }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        group relative flex h-[280px] w-[175px]
        shrink-0 flex-col overflow-hidden
        rounded-[20px] border text-left
        transform-gpu
        sm:h-[315px] sm:w-[205px]
        lg:h-[345px] lg:w-[225px]
        ${
          active
            ? "z-20 border-[#3289dc] bg-[#142f78] shadow-[0_25px_65px_rgba(0,0,0,0.65)]"
            : "z-10 border-white/10 bg-[#17476b]"
        }
      `}
    >
      <div
        className="
          pointer-events-none absolute inset-0
          opacity-[0.08]
          [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)]
          [background-size:35px_35px]
        "
      />

      <div
        className="
          relative z-10 flex h-[145px]
          items-center justify-center px-5 pt-5
          sm:h-[165px] lg:h-[185px]
        "
      >
        <div className="relative h-full w-full">
          <Image
            src={award.image}
            alt={`${award.award} - ${award.title}`}
            fill
            sizes="(max-width: 640px) 175px, (max-width: 1024px) 205px, 225px"
            className="
              object-contain
              transition-transform duration-700
              group-hover:scale-105
            "
          />
        </div>
      </div>

      <div
        className="
          relative z-10 mt-auto
          border-t border-white/15
          px-4 py-4 sm:px-5 sm:py-5
        "
      >
        <p
          className="
            text-[8px] font-medium uppercase
            tracking-[0.2em] text-white/60
          "
        >
          {award.organization}
        </p>

        <h3
          className="
            mt-3 text-[16px] font-semibold uppercase
            leading-[1.08] tracking-[-0.035em]
            text-white sm:text-[19px]
          "
        >
          {award.award}
        </h3>

        <p
          className="
            mt-3 min-h-[28px] text-[10px]
            uppercase leading-[1.5]
            text-white/70
          "
        >
          {award.title}
        </p>

        <motion.div
          animate={{ scaleX: active ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="
            absolute bottom-0 left-0
            h-[3px] w-full origin-left
            bg-[#55aaff]
          "
        />
      </div>
    </motion.button>
  );
}

export default function AwardsSection() {
  const [activeIndex, setActiveIndex] = useState(TOTAL_AWARDS);
  const [trackOffset, setTrackOffset] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const isJumping = useRef(false);

  const updatePosition = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!viewport || !track) return;

    const activeCard = track.children[
      activeIndex
    ] as HTMLElement | undefined;

    if (!activeCard) return;

    const cardCenter =
      activeCard.offsetLeft + activeCard.offsetWidth / 2;

    const viewportCenter = viewport.clientWidth / 2;

    setTrackOffset(viewportCenter - cardCenter);
  }, [activeIndex]);

  useLayoutEffect(() => {
    updatePosition();

    const viewport = viewportRef.current;

    if (!viewport) return;

    const observer = new ResizeObserver(() => {
      updatePosition();
    });

    observer.observe(viewport);

    return () => observer.disconnect();
  }, [updatePosition]);

  const moveNext = useCallback(() => {
    if (isJumping.current) return;

    setActiveIndex((current) => current + 1);
  }, []);

  const movePrevious = useCallback(() => {
    if (isJumping.current) return;

    setActiveIndex((current) => current - 1);
  }, []);

  const handleCardClick = useCallback(
    (index: number) => {
      if (isJumping.current) return;

      const originalIndex = index % TOTAL_AWARDS;

      setActiveIndex(TOTAL_AWARDS + originalIndex);
    },
    []
  );

  const handleAnimationComplete = () => {
    if (isJumping.current) return;

    if (activeIndex >= TOTAL_AWARDS * 2) {
      isJumping.current = true;
      setTransitionEnabled(false);
      setActiveIndex(TOTAL_AWARDS);
      return;
    }

    if (activeIndex < TOTAL_AWARDS) {
      isJumping.current = true;
      setTransitionEnabled(false);
      setActiveIndex(TOTAL_AWARDS * 2 - 1);
    }
  };

  useLayoutEffect(() => {
    if (!isJumping.current) return;

    updatePosition();

    const frame = requestAnimationFrame(() => {
      setTransitionEnabled(true);
      isJumping.current = false;
    });

    return () => cancelAnimationFrame(frame);
  }, [activeIndex, updatePosition]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      moveNext();
    }, AUTO_PLAY_DELAY);

    return () => window.clearTimeout(timeout);
  }, [activeIndex, moveNext]);

  return (
    <section
      id="awards"
      data-snap-section
      className="
        relative flex min-h-[100svh]
        w-full max-w-[100vw]
        overflow-hidden bg-[#050509]
        font-sans text-white
      "
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute inset-0 opacity-[0.04]
            [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        <div
          className="
            absolute -left-[14%] top-[15%]
            h-[480px] w-[480px]
            rounded-full bg-[#0976b2]/10 blur-[150px]
          "
        />

        <div
          className="
            absolute -bottom-[18%] -right-[10%]
            h-[450px] w-[450px]
            rounded-full bg-[#0976b2]/10 blur-[150px]
          "
        />

        <div
          className="
            absolute -bottom-[7%] -left-[2%]
            select-none whitespace-nowrap
            text-[25vw] font-black uppercase
            leading-none tracking-[-0.12em]
            text-white/[0.018]
          "
        >
          AWARDS
        </div>
      </div>

      <div
        className="
          relative z-10 mx-auto flex min-h-[100svh]
          w-full max-w-[1900px] flex-col
          px-5 py-8 sm:px-8 sm:py-10
          lg:px-12 lg:py-12
        "
      >
        <div
          className="
            grid grid-cols-1 gap-7 py-5
            sm:py-5
            lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.65fr)]
            lg:items-end lg:gap-16
          "
        >
          <div className="overflow-hidden">
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="wtt-display-title max-w-[800px] uppercase"
            >
              When The Work Speaks.
              <br />
              <span className="text-white/45">
                The Industry Listens.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              border-l border-[#0976b2]/40
              pl-5 sm:pl-7
            "
          >
            <p className="text-lg font-medium leading-8 text-white/90 sm:text-xl">
              Recognition is rewarding. The work that earns it matters even
              more.
            </p>

            <p className="mt-4 max-w-[540px] text-sm leading-7 text-white/55 sm:text-[15px] lg:text-base">
              Every accolade represents a challenge taken on, an idea pushed
              further and a team that went the extra mile. We are grateful to
              our clients, collaborators, teams and industry peers who make
              these milestones possible.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="
            relative flex flex-1
            items-center justify-center pb-5
          "
        >
          <button
            type="button"
            onClick={movePrevious}
            aria-label="Previous award"
            className="
              absolute left-0 top-1/2 z-30
              flex h-11 w-11 -translate-y-1/2
              items-center justify-center rounded-full
              border border-white/20 bg-[#050509]
              text-white transition-all duration-300
              hover:scale-110 hover:border-[#0976b2]
              hover:bg-[#0976b2]
              sm:left-2
            "
          >
            <ArrowLeft size={19} />
          </button>

          <div
            ref={viewportRef}
            className="
              relative w-full overflow-hidden
              py-16
            "
          >
            <motion.div
              ref={trackRef}
              initial={false}
              animate={{ x: trackOffset }}
              onAnimationComplete={handleAnimationComplete}
              transition={{
                duration: transitionEnabled ? SLIDE_DURATION : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative flex w-max
                items-center gap-4
                sm:gap-6 lg:gap-8
              "
            >
              {carouselAwards.map((award, index) => (
                <AwardCard
                  key={`${award.id}-${index}`}
                  award={award}
                  active={index === activeIndex}
                  onClick={() => handleCardClick(index)}
                />
              ))}
            </motion.div>
          </div>

          <button
            type="button"
            onClick={moveNext}
            aria-label="Next award"
            className="
              absolute right-0 top-1/2 z-30
              flex h-11 w-11 -translate-y-1/2
              items-center justify-center rounded-full
              border border-[#0976b2] bg-[#0976b2]
              text-white transition-all duration-300
              hover:scale-110 hover:bg-[#08699d]
              sm:right-2
            "
          >
            <ArrowRight size={19} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
