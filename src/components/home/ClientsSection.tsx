"use client";

import Image from "next/image";
import {
  animate,
  motion,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
} from "react";

interface Client {
  name: string;
  logo: string;
}

const clients: Client[] = [
  { name: "Client One", logo: "/images/clients/client-01.png" },
  { name: "Client Two", logo: "/images/clients/client-02.png" },
  { name: "Client Three", logo: "/images/clients/client-03.png" },
  { name: "Client Four", logo: "/images/clients/client-04.png" },
  { name: "Client Five", logo: "/images/clients/client-05.png" },
  { name: "Client Six", logo: "/images/clients/client-06.png" },
  { name: "Client Seven", logo: "/images/clients/client-07.png" },
  { name: "Client Eight", logo: "/images/clients/client-08.png" },
];

export default function ClientsSection() {
  const midpoint = Math.ceil(clients.length / 2);

  const rowOne = clients.slice(0, midpoint);
  const rowTwo = clients.slice(midpoint);

  return (
    <section
      id="clients"
      data-snap-section
      className="
        relative
        flex
        min-h-[100svh]
        w-full
        max-w-[100vw]
        overflow-hidden
        bg-[#f5f5f3]
        text-[#050509]
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -bottom-[5%]
            -left-[2%]
            select-none
            whitespace-nowrap
            text-[24vw]
            font-black
            uppercase
            leading-none
            tracking-[-0.11em]
            text-black/[0.025]
          "
        >
          CLIENTS
        </div>

        <div
          className="
            absolute
            -right-[12%]
            -top-[20%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#0976b2]/[0.06]
            blur-[130px]
          "
        />

        <div className="absolute inset-0 opacity-[0.035]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.35) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
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
        {/* =================================================
            TOP LABEL
        ================================================== */}
        {/* <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            flex
            items-center
            justify-between
             border-b
            border-[#0976b2]/35
            pb-2
          "
        >
          <div className="flex items-center gap-4">
            <span className="h-[7px] w-[7px] rounded-full bg-[#0976b2]" />

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.35em]
                text-black/45
                sm:text-[10px]
              "
            >
              Our Clients
            </span>
          </div>

          <span
            className="
              hidden
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.3em]
              text-black/30
              sm:block
            "
          >
            100+ Brands
          </span>
        </motion.div> */}

        

        {/* =================================================
            CONTENT HEADER
        ================================================== */}
        <div
          className="
            grid
            grid-cols-1
            gap-8
            py-10
            sm:py-12
            lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.6fr)]
            lg:items-end
            lg:gap-16
          "
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2
              className="
                max-w-[1050px]
                text-[clamp(3.7rem,7.4vw,8rem)]
                font-black
                uppercase
                leading-[0.78]
                tracking-[-0.085em]
                text-[#050509]
              "
            >
              Our Growing
              <br />
              Circle Of{" "}
              <span className="text-[#0976b2]">
                Trust.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="
              border-l
              border-[#0976b2]/35
              pl-5
              sm:pl-7
              lg:mb-1
            "
          >
            <p
              className="
                text-lg
                font-medium
                leading-8
                text-[#050509]
                sm:text-xl
                sm:leading-8
              "
            >
              The brands which walked with us in our journey.
            </p>

            <p
              className="
                mt-5
                max-w-[480px]
                text-sm
                leading-7
                text-black/55
                sm:text-[15px]
                lg:text-base
              "
            >
              Each partnership is a shared ambition and an opportunity to do
              things meaningful. We are proud to work alongside brands that
              trust us to take their stories out into the world.
            </p>
          </motion.div>
        </div>

        {/* =================================================
            CLIENT LOGO MARQUEE
        ================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="
            flex
            flex-1
            flex-col
            justify-center
            gap-4
            pb-10
            sm:gap-5
          "
        >
          {/* Right button moves the first row to the left */}
          <ClientMarquee
            clients={rowOne}
            direction="left"
            control="right"
            duration={45}
          />

          {/* Left button moves the second row to the right */}
          {rowTwo.length > 0 && (
            <ClientMarquee
              clients={rowTwo}
              direction="right"
              control="left"
              duration={50}
            />
          )}
        </motion.div>

        {/* =================================================
            BOTTOM STATEMENT
        ================================================== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <p
            className="
              text-[11px]
              font-black
              uppercase
              tracking-[-0.02em]
              text-[#050509]
              sm:text-sm
            "
          >
            100+ Brands. 40+ Categories. One Commitment To Impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   CLIENT MARQUEE
========================================================= */

function ClientMarquee({
  clients,
  direction,
  control,
  duration,
}: {
  clients: Client[];
  direction: "left" | "right";
  control: "left" | "right";
  duration: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const items = [...clients, ...clients];

  const x = useMotionValue(0);
  const singleSetWidth = useRef(0);
  const cardStep = useRef(0);
  const speed = useRef(0);
  const isAnimating = useRef(false);
  const clickAnimation = useRef<{ stop: () => void } | null>(null);

  const movementDirection = useRef(
    direction === "left" ? -1 : 1
  );

  const normalizePosition = (value: number) => {
    const width = singleSetWidth.current;

    if (!width) return value;

    while (value <= -width) value += width;
    while (value > 0) value -= width;

    return value;
  };

  const measureTrack = useCallback(() => {
    if (!trackRef.current) return;

    const firstCard = trackRef.current.firstElementChild;

    singleSetWidth.current = trackRef.current.scrollWidth / 2;
    speed.current = singleSetWidth.current / duration;

    if (firstCard instanceof HTMLElement) {
      const styles = window.getComputedStyle(trackRef.current);

      cardStep.current =
        firstCard.getBoundingClientRect().width +
        parseFloat(styles.columnGap || "0");
    }
  }, [duration]);

  useAnimationFrame((_, delta) => {
    if (!singleSetWidth.current || isAnimating.current) return;

    const movement =
      (speed.current * delta * movementDirection.current) / 1000;

    x.set(normalizePosition(x.get() + movement));
  });

  useEffect(() => {
    measureTrack();

    const resizeObserver = new ResizeObserver(measureTrack);

    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }

    window.addEventListener("resize", measureTrack);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measureTrack);
    };
  }, [measureTrack]);

  const moveMarquee = (newDirection: -1 | 1) => {
    movementDirection.current = newDirection;

    const step = cardStep.current || 270;
    const targetX = x.get() + step * newDirection;

    // Stop any previous button animation before starting another one.
    clickAnimation.current?.stop();
    isAnimating.current = true;

    clickAnimation.current = animate(x, targetX, {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
      onComplete: () => {
        // Keep the duplicated marquee track in its seamless range.
        x.set(normalizePosition(x.get()));
        isAnimating.current = false;
        clickAnimation.current = null;
      },
    });
  };

  useEffect(() => {
    return () => {
      clickAnimation.current?.stop();
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Left fade */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-20
          h-full
          w-16
          bg-gradient-to-r
          from-[#f5f5f3]
          via-[#f5f5f3]/90
          to-transparent
          sm:w-24
          lg:w-32
        "
      />

      {/* Right fade */}
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          z-20
          h-full
          w-16
          bg-gradient-to-l
          from-[#f5f5f3]
          via-[#f5f5f3]/90
          to-transparent
          sm:w-24
          lg:w-32
        "
      />

      {/* Left button: moves the second row right */}
      {control === "left" && (
        <button
          type="button"
          aria-label="Scroll client logos right"
          onClick={() => moveMarquee(1)}
          className="
            absolute
            left-3
            top-1/2
            z-30
            flex
            h-11
            w-11
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-[#0976b2]/35
            bg-white/90
            text-[#0976b2]
            shadow-sm
            backdrop-blur-md
            transition-all
            duration-300
            hover:scale-110
            hover:bg-[#0976b2]
            hover:text-white
            sm:left-5
            lg:left-7
          "
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
      )}

      {/* Right button: moves the first row left */}
      {control === "right" && (
        <button
          type="button"
          aria-label="Scroll client logos left"
          onClick={() => moveMarquee(-1)}
          className="
            absolute
            right-3
            top-1/2
            z-30
            flex
            h-11
            w-11
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-[#0976b2]/35
            bg-white/90
            text-[#0976b2]
            shadow-sm
            backdrop-blur-md
            transition-all
            duration-300
            hover:scale-110
            hover:bg-[#0976b2]
            hover:text-white
            sm:right-5
            lg:right-7
          "
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      )}

      <motion.div
        ref={trackRef}
        style={{ x }}
        className="
          flex
          w-max
          will-change-transform
        "
      >
        {items.map((client, index) => (
          <ClientCard
            key={`${client.name}-${index}`}
            client={client}
          />
        ))}
      </motion.div>
    </div>
  );
}

/* =========================================================
   CLIENT CARD
========================================================= */

function ClientCard({
  client,
}: {
  client: Client;
}) {
  return (
    <div
      className="
        group/card
        relative
        flex
        h-[120px]
        w-[200px]
        shrink-0
        items-center
        justify-center
        border-r
        border-black/[0.08]
        bg-white/35
        px-6
        transition-colors
        duration-500
        hover:bg-white/75
        sm:h-[135px]
        sm:w-[230px]
        lg:h-[150px]
        lg:w-[270px]
      "
    >
      <motion.div
        className="
          relative
          h-[58px]
          w-full
          sm:h-[65px]
          lg:h-[74px]
        "
        whileHover={{ scale: 1.07 }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        
<Image
  src={client.logo}
  alt={client.name}
  fill
  sizes="
    (max-width: 640px) 200px,
    (max-width: 1024px) 230px,
    270px
  "
  className="
    object-contain
    scale-[1.5]
    grayscale
    opacity-60
    transition-all
    duration-500
    group-hover/card:scale-[1.4]
    group-hover/card:grayscale-0
    group-hover/card:opacity-100
  "
/>

      </motion.div>

      <div
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-0
          bg-[#0976b2]
          transition-all
          duration-500
          group-hover/card:w-full
        "
      />
    </div>
  );
}