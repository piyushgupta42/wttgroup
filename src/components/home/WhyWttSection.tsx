"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Plus,
} from "lucide-react";
import {
  useEffect,
  useState,
  type ReactNode,
} from "react";

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

export default function WhyWttSection() {
  const [active, setActive] = useState(0);

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
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX - window.innerWidth / 2);
      mouseY.set(event.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  useEffect(() => {
    const section = document.getElementById("why-wtt");

    if (!section) return;

    let locked = false;

    const handleWheel = (event: WheelEvent) => {
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

      const target =
        event.deltaY > 0
          ? section.nextElementSibling
          : section.previousElementSibling;

      if (target instanceof HTMLElement) {
        target.scrollIntoView({
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
      id="why-wtt"
      data-snap-section
      className="
        relative
        flex
        min-h-[100svh]
        w-full
        max-w-[100vw]
        items-center
        overflow-hidden
        bg-[#0976b2]
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            inset-0
            opacity-[0.07]
            [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        <motion.div
          style={{ x: orbX, y: orbY }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[70vw]
            w-[70vw]
            max-h-[1100px]
            max-w-[1100px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-white/[0.08]
          "
        />

        <motion.div
          style={{ x: orbX, y: orbY }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[45vw]
            w-[45vw]
            max-h-[700px]
            max-w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-white/[0.1]
          "
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
          className="
            absolute
            left-1/2
            top-1/2
            h-[450px]
            w-[450px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/20
            blur-[130px]
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

      {/* =====================================================
          MAIN CONTAINER
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
          px-5
          py-7
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-16
        "
      >
        {/* =================================================
            TOP BAR
        ================================================== */}
        {/* <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            flex
            items-center
            justify-between
            border-b
            border-white/20
            pb-5
          "
        >
          <div className="flex items-center gap-4">
            <span className="h-2 w-2 rounded-full bg-white" />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.3em]
              "
            >
              Why WTT
            </span>
          </div>

          <span
            className="
              hidden
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-white/55
              sm:block
            "
          >
            Our Philosophy
          </span>
        </motion.div> */}

        {/* =================================================
            MAIN CONTENT
        ================================================== */}
        {/* =================================================
    MAIN CONTENT
================================================= */}
<div className="flex-1 py-4 lg:py-2">
  {/* =================================================
      TOP CONTENT
  ================================================== */}
  <div
    className="
      grid
      items-start
      gap-12
      lg:grid-cols-[1.1fr_0.9fr]
      lg:gap-16
      xl:gap-24
    "
  >
    {/* Left */}
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
          className="
            max-w-[900px]
            text-[clamp(3.4rem,6vw,7.5rem)]
            font-semibold
            leading-[0.82]
            tracking-[-0.075em]
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

    {/* Right */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: 0.15 }}
      className="
        border-l
        border-white/20
        pl-6
        sm:pl-8
        lg:mt-6
      "
    >
      <p
        className="
          text-xl
          font-medium
          leading-8
          text-white/90
          sm:text-2xl
          sm:leading-9
        "
      >
        A smarter way to think. A bolder way to create. A better way to
        deliver.
      </p>

      <p
        className="
          mt-6
          max-w-[620px]
          text-sm
          leading-7
          text-white/65
          sm:text-[15px]
          lg:text-base
        "
      >
        We believe OOH Advertising deserves more than conventional thinking. At
        WTT, research-backed intelligence, AI-driven planning, creative
        ingenuity and execution excellence come together to create OOH
        solutions that are relevant, impactful and accountable.
      </p>

      {/* <div className="mt-8 flex items-center gap-4">
        <span
          className="
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-white
            text-[#0976b2]
          "
        >
          <ArrowUpRight size={18} strokeWidth={1.5} />
        </span>

        <span
          className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.2em]
            text-white/75
            sm:text-[11px]
          "
        >
          Intelligence. Innovation. Accountability.
        </span>
      </div> */}
    </motion.div>
  </div>

  {/* =================================================
      FIVE SERVICES GRID
  ================================================== */}
  <div
    className="
      mt-6
      grid
      grid-cols-1
      border-l
      border-t
      border-white/20
      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-5
    "
  >
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
        className="
          group
          relative
          flex
          min-h-[310px]
          flex-col
          border-b
          border-r
          border-white/20
          p-5
          transition-colors
          duration-500
          hover:bg-white/[0.07]
          sm:p-6
        "
      >
        <div className="flex items-start justify-between gap-4">
          <span
            className="
              text-[10px]
              font-medium
              tracking-[0.2em]
              text-white/50
            "
          >
            {service.number}
          </span>

          <ArrowUpRight
            size={16}
            strokeWidth={1.4}
            className="
              text-white/35
              transition-all
              duration-500
              group-hover:-translate-y-1
              group-hover:translate-x-1
              group-hover:text-white
            "
          />
        </div>

        <h3
          className="
            mt-7
            text-xl
            font-semibold
            leading-[1.05]
            tracking-[-0.04em]
            text-white
            sm:text-[1.35rem]
          "
        >
          {service.title}
        </h3>

        <p
          className="
            mt-6
            text-sm
            font-medium
            leading-6
            text-white/90
          "
        >
          {service.lead}
        </p>

        <p
          className="
            mt-5
            text-[13px]
            leading-6
            text-white/60
          "
        >
          {service.description}
        </p>

        <motion.div
          initial={false}
          className="
            absolute
            bottom-0
            left-0
            h-[2px]
            w-full
            origin-left
            scale-x-0
            bg-white
            transition-transform
            duration-500
            group-hover:scale-x-100
          "
        />
      </motion.article>
    ))}
  </div>
</div>

        {/* =================================================
            BOTTOM
        ================================================== */}
        <div
          className="
            mt-3
            flex
            items-center
            justify-between
            border-t
            border-white/20
            pt-5
          "
        >
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-white/50">02</span>

            <div className="h-px w-10 bg-white/30 sm:w-12" />

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-white/50
              "
            >
              Intelligence × Impact
            </span>
          </div>

          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="
              hidden
              items-center
              gap-3
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-white/50
              md:flex
            "
          >
            Scroll
            <ArrowDown size={13} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AnimateHeight({
  active,
  children,
}: {
  active: boolean;
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={false}
      animate={{
        height: active ? "auto" : 0,
        opacity: active ? 1 : 0,
        marginTop: active ? 16 : 0,
      }}
      transition={{
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="overflow-hidden"
    >
      <div className="text-xs leading-6 text-white/60">{children}</div>
    </motion.div>
  );
}