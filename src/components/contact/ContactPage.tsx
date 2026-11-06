
"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  MapPin,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";

import OfficeMap, { offices, type Office } from "./OfficeMap";

/* ============================================================
   ANIMATION VARIANTS
============================================================ */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/* ============================================================
   CITY ORDER
============================================================ */

const cityOrder = [
  "Mumbai",
  "Delhi",
  "Bengaluru",
  "Chennai",
  "Hyderabad",
  "Kolkata",
];

const orderedOffices = cityOrder
  .map((city) => offices.find((office) => office.city === city))
  .filter((office): office is Office => Boolean(office));

/* ============================================================
   MAIN CONTACT PAGE
============================================================ */

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const [activeOffice, setActiveOffice] = useState<Office>(
    () => orderedOffices[0] ?? offices[0]
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Current UI-only success feedback.
    // Connect your API/server action here to submit enquiries.
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const selectOffice = (office: Office) => {
    setActiveOffice(office);
  };

  return (
    <main className="w-full overflow-x-hidden bg-[#050509] font-sans text-white">


      {/* =====================================================
    HERO SECTION — CONTACT US
====================================================== */}

<section
  data-snap-section
  className="relative min-h-[100svh] overflow-hidden mt-4 bg-[#050509]"
>
  {/* Background Grid */}
  <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
        backgroundSize: "70px 70px",
      }}
    />
  </div>

  {/* Atmospheric Glows */}
  <motion.div
    animate={{
      x: [0, 60, 0],
      y: [0, -40, 0],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#0976b2]/20 blur-[140px]"
  />

  <motion.div
    animate={{
      x: [0, -50, 0],
      y: [0, 40, 0],
    }}
    transition={{
      duration: 14,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#0976b2]/10 blur-[130px]"
  />

  {/* Hero Content */}
  <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-center px-5 py-24 sm:px-8 lg:px-12 lg:py-20">
    <div className="grid flex-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">

      {/* LEFT CONTENT */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-20"
      >
        {/* Eyebrow */}
        <motion.div
          variants={fadeUp}
          className="mb-8 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#0976b2]"
        >
          <span className="h-px w-12 bg-[#0976b2]" />
          WTT / CONTACT US
        </motion.div>

        {/* Heading */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{
              opacity: 0,
              y: 100,
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
            YOUR NEXT
            <br />
            <span className="text-white">BIG IDEA</span>
            <br />
            <span className="text-[#0976b2]">STARTS HERE.</span>
          </motion.h1>
        </div>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="mt-8 max-w-xl text-base font-normal leading-7 text-white/55 sm:text-lg"
        >
          Every great idea starts with a conversation.
          Let’s connect, collaborate and create something
          extraordinary together.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          className="mt-9 flex flex-wrap gap-3"
        >
          <button
            type="button"
            onClick={scrollToForm}
            className="group flex items-center gap-3 rounded-full bg-[#0976b2] px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#1685ff] hover:shadow-[0_0_40px_rgba(0,122,255,.3)]"
          >
            Start a conversation

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          type="button"
          onClick={scrollToForm}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30 transition-colors hover:text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10">
            <ArrowDown size={13} />
          </span>

          Scroll to connect
        </motion.button>
      </motion.div>

      {/* RIGHT SIDE — OFFICE MAP */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.94,
          x: 40,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative mx-auto w-full max-w-[750px]"
      >
        {/* Decorative Rings */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0976b2]/10" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />

        {/* Map Container */}
        <div className="relative h-[430px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_30px_100px_rgba(0,0,0,.4)] sm:h-[500px] lg:h-[620px]">

          {/* Map Glow */}
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-[#050509]/20 via-transparent to-[#050509]/40" />

          {/* Map Heading */}
          <div className="pointer-events-none absolute left-5 top-5 z-20">
            <div className="rounded-2xl border border-white/10 bg-[#050509]/80 px-4 py-3 backdrop-blur-xl">
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#0976b2]">
                WTT Network
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                We are closer than you think.
              </p>
            </div>
          </div>

          {/* Interactive Office Map */}
          <OfficeMap selectedOffice={activeOffice} />

          {/* Map Bottom Information */}
          <div className="pointer-events-none absolute bottom-5 left-5 right-5 z-20 flex items-end justify-between">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/40">
                Currently viewing
              </p>

              <p className="mt-1 text-xl font-semibold text-white">
                {activeOffice.city}
              </p>
            </div>

            <div className="rounded-full border border-white/10 bg-black/60 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/70 backdrop-blur-xl">
              06 Offices
            </div>
          </div>
        </div>

        {/* FLOATING CARD — TOP RIGHT */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-2 top-16 z-30 hidden rounded-2xl border border-white/10 bg-[#101016]/90 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block lg:-right-8"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0976b2]/15 text-[#1685ff]">
              <MapPin size={18} />
            </div>

            <div>
              <p className="text-xl font-semibold text-white">06</p>
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/40">
                Cities across India
              </p>
            </div>
          </div>
        </motion.div>

        {/* FLOATING CARD — BOTTOM LEFT */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-7 left-5 z-30 hidden rounded-2xl border border-white/10 bg-[#101016]/95 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block lg:-left-8"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0976b2]/15 text-[#1685ff]">
              <MessageCircle size={18} />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Let’s Connect
              </p>
              <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.15em] text-white/40">
                hello@wttgroup.in
              </p>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  </div>
</section>

      {/* =====================================================
          CONTACT FORM SECTION
      ====================================================== */}

      <section
        id="contact-form"
        data-snap-section
        className="scroll-mt-20 relative bg-[#f2f2ee] px-5 py-20 text-[#050509] sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={stagger}
            >
              <div className="overflow-hidden">
                <motion.h2
                  initial={{
                    opacity: 0,
                    y: 100,
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
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="wtt-display-title max-w-[800px] uppercase"
                >
                  LET’S
                  <br />
                  <span className="text-[#0976b2]">CONNECT.</span>
                </motion.h2>
              </div>

              <motion.p
                variants={fadeUp}
                className="mt-8 max-w-md text-base font-normal leading-7 text-black/55"
              >
                Have a brief, an ambition or simply ideas you'd like to explore?
                We'd love to hear from you. Let's talk about how we can enrich
                your brand and make a bigger impact out there.
              </motion.p>

              {/* Contact Details */}
              <motion.div variants={fadeUp} className="mt-10 space-y-4">
                {/* Office Network */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-white">
                    <MapPin size={17} />
                  </div>

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/35">
                      WTT Network
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      6 offices across India
                    </p>

                    <p className="mt-1 text-xs leading-5 text-black/45">
                      Mumbai · Delhi · Bengaluru · Chennai · Hyderabad ·
                      Kolkata
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0976b2] text-white">
                    <MessageCircle size={17} />
                  </div>

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/35">
                      Email us
                    </p>

                    <a
                      href="mailto:hello@wttgroup.in"
                      className="mt-1 block text-sm font-semibold transition hover:text-[#0976b2]"
                    >
                      hello@wttgroup.in
                    </a>

                    <p className="mt-1 text-xs text-black/45">
                      Let's Get Talking.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
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
                duration: 0.7,
              }}
            >
              <form
                onSubmit={handleSubmit}
                className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_25px_80px_rgba(0,0,0,.08)] sm:p-8 lg:p-12"
              >
                {/* Form Heading */}
                <div className="mb-10 flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#0976b2]">
                      Something Brewing?
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                      We Are All Ears
                    </h3>
                  </div>

                  <div className="hidden h-11 w-11 items-center justify-center rounded-full bg-[#0976b2]/10 text-[#0976b2] sm:flex">
                    <Sparkles size={19} />
                  </div>
                </div>

                <div className="space-y-7">
                  {/* Name */}
                  <div className="group relative">
                    <label
                      htmlFor="name"
                      className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40"
                    >
                      Your name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="Enter your name"
                      className="w-full border-b border-black/15 bg-transparent px-0 py-3 text-base outline-none transition placeholder:text-black/25 focus:border-[#0976b2]"
                    />
                  </div>

                  {/* Mobile */}
                  <div className="group relative">
                    <label
                      htmlFor="mobile"
                      className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40"
                    >
                      Mobile number
                    </label>

                    <input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      autoComplete="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full border-b border-black/15 bg-transparent px-0 py-3 text-base outline-none transition placeholder:text-black/25 focus:border-[#0976b2]"
                    />
                  </div>

                  {/* Message */}
                  <div className="group relative">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40"
                    >
                      Tell us about it
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="What are we creating together?"
                      className="w-full resize-none border-b border-black/15 bg-transparent px-0 py-3 text-base outline-none transition placeholder:text-black/25 focus:border-[#0976b2]"
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-xs text-[10px] leading-5 text-black/35">
                    By sending this note, you agree to be contacted by the WTT
                    Team regarding your request.
                  </p>

                  <button
                    type="submit"
                    disabled={submitted}
                    className="group flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#050509] px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-[#0976b2] disabled:cursor-default"
                  >
                    {submitted ? (
                      <>
                        Sent successfully
                        <Check size={16} />
                      </>
                    ) : (
                      <>
                        Send
                        <Send
                          size={15}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CITY NETWORK SECTION
      ====================================================== */}

      <section
        data-snap-section
        className="relative overflow-hidden bg-[#0976b2] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
      >
        {/* Background Decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/10" />

          <div className="absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full border border-white/10" />

          <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-white/[0.04] blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px]">
          {/* Heading */}
          <div className="mb-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <motion.h2
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
              className="wtt-display-title max-w-[900px] text-white uppercase"
            >
              SIX CITIES.
              <br />
              <span className="text-white/40">ONE WTT.</span>
            </motion.h2>

            <motion.div
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="lg:pb-2"
            >
              <p className="max-w-md text-base font-normal leading-8 text-white sm:text-lg">
                From Mumbai to Hyderabad, our teams work across culture,
                creativity, technology and experiences. One network. Six cities.
                Countless possibilities.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <span className="h-px w-12 bg-white/60" />

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  Explore our locations
                </span>
              </div>
            </motion.div>
          </div>

          {/* City Cards */}
          <div className="grid border-l border-t border-white/25 sm:grid-cols-2 lg:grid-cols-3">
            {cityOrder.map((city, index) => {
              const office = offices.find((item) => item.city === city);

              if (!office) return null;

              const isActive = activeOffice.city === office.city;

              return (
                <motion.button
                  key={office.city}
                  type="button"
                  onClick={() => selectOffice(office)}
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.07,
                  }}
                  aria-pressed={isActive}
                  className={`
                    group relative flex min-h-[260px] flex-col
                    justify-between border-b border-r
                    border-white/25 p-7 text-left
                    transition-all duration-500
                    sm:p-8 lg:min-h-[285px] lg:p-9
                    ${
                      isActive
                        ? "bg-[#050509] shadow-2xl"
                        : "bg-white/[0.035] hover:bg-white/[0.12]"
                    }
                  `}
                >
                  {/* Card Top */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.25em] text-white">
                      0{index + 1}
                    </span>

                    <span
                      className={`
                        flex h-10 w-10 items-center justify-center
                        rounded-full border border-white/30
                        transition-all duration-300
                        ${
                          isActive
                            ? "bg-white text-black"
                            : "text-white group-hover:bg-white group-hover:text-black"
                        }
                      `}
                    >
                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </span>
                  </div>

                  {/* Card Bottom */}
                  <div className="mt-12">
                    <h3
                      className={`
                        text-3xl font-semibold tracking-[-0.04em]
                        transition-colors duration-300
                        ${isActive ? "text-white" : "text-white"}
                      `}
                    >
                      {office.city}
                    </h3>

                    <p className="mt-4 max-w-sm text-sm font-normal leading-7 text-white/75">
                      {office.address}
                    </p>

                    <div className="mt-5 flex items-center gap-2">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          isActive ? "bg-white" : "bg-white/50"
                        }`}
                      />

                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">
                        {isActive
                          ? "Currently selected"
                          : "Explore office"}
                      </span>
                    </div>
                  </div>

                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="active-office-indicator"
                      className="absolute bottom-0 left-0 h-1 w-full bg-white"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Section Footer */}
          <div className="mt-8 flex flex-col justify-between gap-4 border-t border-white/25 pt-6 sm:flex-row sm:items-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              One network. Six locations. Endless possibilities.
            </p>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              06 / Offices across India
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
