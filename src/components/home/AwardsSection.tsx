"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Trophy,
} from "lucide-react";
import { useEffect, useState } from "react";

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
    image: "/images/awards/OOHWARDS_OOH.png",
  },
  {
    id: "02",
    award: "MOMMYS",
    organization: "MAD OVER MARKETING",
    title: "BEST MARKETING CAMPAIGN",
    image: "/images/awards/MOMMYS_Best.png",
  },
  {
    id: "03",
    award: "MOMMYS",
    organization: "MAD OVER MARKETING",
    title: "MOM'S FAVOURITE",
    image: "/images/awards/MOMMYS_MOM.png",
  },
  {
    id: "04",
    award: "MAVERICK AWARDS",
    organization: "EXCHANGE4MEDIA",
    title: "RISING MAVERICK AGENCY OF THE YEAR",
    image: "/images/awards/MAVERICK_AWARDS_Rising.png",
  },
  {
    id: "05",
    award: "MAA AWARDS",
    organization: "ADGULLY",
    title: "PROMISING AGENCY OF THE YEAR",
    image: "/images/awards/MAA_AWARDS_Promising.png",
  },
  {
    id: "06",
    award: "MADX AWARDS",
    organization: "THE FOUNDER MEDIA",
    title: "INDEPENDENT AGENCY OF THE YEAR",
    image: "/images/awards/MADX_AWARDS_Independent.png",
  },
  {
    id: "07",
    award: "OOH PHOENIX AWARDS",
    organization: "THE FOUNDER MEDIA",
    title: "ADVERTISER OF THE YEAR",
    image: "/images/awards/OOH_PHOENIX_AWARDS_Advertise.png",
  },
];

function AwardCard({
  award,
  active,
  position,
  onClick,
}: {
  award: Award;
  active: boolean;
  position: number;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      style={{ order: position }}
      animate={{
        opacity: active ? 1 : 0.58,
        scale: active ? 1 : 0.9,
        y: active ? -28 : 0,
      }}
      transition={{
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`
        group
        relative
        flex
        h-[280px]
        w-[165px]
        shrink-0
        flex-col
        overflow-hidden
        rounded-[18px]
        border
        text-left
        transition-colors
        duration-500
        sm:h-[315px]
        sm:w-[190px]
        lg:h-[345px]
        lg:w-[215px]
        ${
          active
            ? "border-[#0976b2] bg-[#08296a] shadow-[0_25px_60px_rgba(0,0,0,0.5)]"
            : "border-[#0976b2]/50 bg-[#0976b2] hover:bg-[#0b8acb]"
        }
      `}
    >
      {/* Card grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.08]
          [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)]
          [background-size:35px_35px]
        "
      />

      {/* Number */}
      <span
        className="
          absolute
          right-4
          top-4
          z-20
          flex
          h-7
          w-7
          items-center
          justify-center
          rounded-full
          border
          border-white/20
          text-[8px]
          font-bold
          text-white/60
        "
      >
        {award.id}
      </span>

      {/* Award image */}
      <div
        className="
          relative
          z-10
          flex
          h-[145px]
          items-center
          justify-center
          px-5
          pt-6
          sm:h-[165px]
          lg:h-[180px]
        "
      >
        <div className="relative h-full w-full">
          <Image
            src={award.image}
            alt={`${award.award} - ${award.title}`}
            fill
            sizes="215px"
            className="
              object-contain
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        </div>
      </div>

      {/* Award details */}
      <div
        className="
          relative
          z-10
          mt-auto
          border-t
          border-white/15
          px-4
          py-4
          sm:px-5
          sm:py-5
        "
      >
        <p
          className="
            text-[7px]
            font-bold
            uppercase
            tracking-[0.16em]
            text-white/50
            sm:text-[8px]
          "
        >
          {award.organization}
        </p>

        <h3
          className="
            mt-2
            text-[16px]
            font-black
            uppercase
            leading-[0.92]
            tracking-[-0.04em]
            text-white
            sm:text-[18px]
            lg:text-[20px]
          "
        >
          {award.award}
        </h3>

        <p
          className="
            mt-3
            min-h-[28px]
            text-[9px]
            font-medium
            uppercase
            leading-[1.25]
            tracking-[-0.01em]
            text-white/75
            sm:text-[10px]
          "
        >
          {award.title}
        </p>

        <div
          className={`
            absolute
            bottom-0
            left-0
            h-[2px]
            bg-white
            transition-all
            duration-500
            ${active ? "w-full" : "w-0 group-hover:w-full"}
          `}
        />
      </div>
    </motion.button>
  );
}

export default function AwardsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeAward = awards[activeIndex];

  // Automatically highlight the next award while preserving the centered,
  // enlarged active-card animation.
  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % awards.length);
    }, 1500);

    return () => window.clearInterval(intervalId);
  }, []);

  const previousAward = () => {
    setActiveIndex((current) =>
      current === 0 ? awards.length - 1 : current - 1
    );
  };

  const nextAward = () => {
    setActiveIndex((current) =>
      current === awards.length - 1 ? 0 : current + 1
    );
  };

  const getPosition = (index: number) => {
    const middle = Math.floor(awards.length / 2);

    return (
      ((index - activeIndex + awards.length + middle) %
        awards.length) -
      middle
    );
  };

  return (
    <section
      id="awards"
      data-snap-section
      className="
        relative
        flex
        min-h-[100svh]
        w-full
        max-w-[100vw]
        overflow-hidden
        bg-[#050509]
        text-white
      "
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            inset-0
            opacity-[0.04]
            [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        <div
          className="
            absolute
            -left-[14%]
            top-[15%]
            h-[480px]
            w-[480px]
            rounded-full
            bg-[#0976b2]/10
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            -bottom-[18%]
            -right-[10%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#0976b2]/10
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            -bottom-[7%]
            -left-[2%]
            select-none
            whitespace-nowrap
            text-[25vw]
            font-black
            uppercase
            leading-none
            tracking-[-0.12em]
            text-white/[0.018]
          "
        >
          AWARDS
        </div>
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[100svh]
          w-full
          max-w-[1900px]
          flex-col
          px-5
          py-8
          sm:px-8
          sm:py-10
          lg:px-12
          lg:py-12
        "
      >
        {/* Top label */}
        {/* <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            flex
            items-center
            gap-4
            border-b
            border-white/10
            pb-5
          "
        >
          <Trophy
            size={15}
            strokeWidth={1.5}
            className="text-[#0976b2]"
          />

          <span
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.35em]
              text-[#0976b2]
              sm:text-[10px]
            "
          >
            Awards & Recognition
          </span> */}

          {/* <span className="h-px flex-1 bg-white/10" /> */}

          {/* <span
            className="
              hidden
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.3em]
              text-white/30
              sm:block
            "
          >
            07 Awards
          </span> */}
        {/* </motion.div> */}

        {/* Introduction */}
        <div
          className="
            grid
            grid-cols-1
            gap-7
            py-5
            sm:py-5
            lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.65fr)]
            lg:items-end
            lg:gap-16
          "
        >
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2
              className="
                max-w-[1000px]
                text-[clamp(3rem,5.5vw,6rem)]
                font-black
                uppercase
                leading-[0.88]
                tracking-[-0.07em]
              "
            >
              When The Work Speaks.
              <br />
              <span className="text-white/45">
                The Industry Listens.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="
              border-l
              border-[#0976b2]/40
              pl-5
              sm:pl-7
            "
          >
            <p
              className="
                text-lg
                font-medium
                leading-8
                text-white/90
                sm:text-xl
              "
            >
              Recognition is rewarding. The work that earns it matters even
              more.
            </p>

            <p
              className="
                mt-4
                max-w-[540px]
                text-sm
                leading-7
                text-white/55
                sm:text-[15px]
                lg:text-base
              "
            >
              Every accolade represents a challenge taken on, an idea pushed
              further and a team that went the extra mile. We are grateful to
              our clients, collaborators, teams and industry peers who make
              these milestones possible.
            </p>
          </motion.div>
        </div>

        {/* Award carousel */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="
            relative
            flex
            flex-1
            items-center
            justify-center
            pb-5
          "
        >
          <button
            type="button"
            onClick={previousAward}
            aria-label="Previous award"
            className="
              absolute
              left-0
              top-1/2
              z-30
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-[#050509]
              text-white/70
              transition-all
              duration-300
              hover:scale-110
              hover:border-[#0976b2]
              hover:bg-[#0976b2]
              hover:text-white
              sm:left-3
            "
          >
            <ArrowLeft size={17} />
          </button>

          <div
            className="
              flex
              w-full
              items-center
              justify-center
              gap-1
              overflow-hidden
              px-11
              py-9
              sm:gap-2
              sm:px-16
              lg:gap-2.5
            "
          >
            {awards.map((award, index) => (
              <AwardCard
                key={award.id}
                award={award}
                active={index === activeIndex}
                position={getPosition(index)}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextAward}
            aria-label="Next award"
            className="
              absolute
              right-0
              top-1/2
              z-30
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-[#0976b2]
              bg-[#0976b2]
              text-white
              transition-all
              duration-300
              hover:scale-110
              hover:bg-[#08699d]
              sm:right-3
            "
          >
            <ArrowRight size={17} />
          </button>
        </motion.div>

        {/* Selected award details */}
        {/* <motion.div
          key={activeAward.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="
            grid
            grid-cols-1
            gap-4
            border-t
            border-white/10
            pt-5
            sm:grid-cols-[auto_1fr_auto]
            sm:items-end
            sm:gap-7
          "
        >
          <span
            className="
              text-4xl
              font-black
              leading-none
              tracking-[-0.08em]
              text-[#0976b2]
              sm:text-5xl
            "
          >
            {activeAward.id}
          </span>

          <div>
            <p
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#0976b2]
              "
            >
              {activeAward.organization}
            </p>

            <h3
              className="
                mt-2
                text-2xl
                font-black
                uppercase
                leading-[0.95]
                tracking-[-0.04em]
                text-white
                sm:text-3xl
              "
            >
              {activeAward.award}
            </h3>

            <p
              className="
                mt-2
                text-sm
                font-medium
                uppercase
                tracking-[-0.02em]
                text-white/65
                sm:text-base
              "
            >
              {activeAward.title}
            </p>
          </div>

          <span
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-white/35
            "
          >
            Award {activeAward.id} of 07
          </span>
        </motion.div> */}
      </div>
    </section>
  );
}