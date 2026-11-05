"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

import OfficeMap, { offices, Office } from "./OfficeMap";

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

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
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

  const [activeOffice, setActiveOffice] = useState<Office>(
    () => orderedOffices[0] ?? offices[0]
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const selectOffice = (office: Office) => {
    setActiveOffice(office);

    // window.dispatchEvent(
    //   new CustomEvent("wtt-office-select", {
    //     detail: office,
    //   })
    // );
  };

  return (
    <main className="w-full overflow-x-hidden bg-[#050509] text-white">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section
        data-snap-section
        className="relative min-h-[100svh] overflow-hidden"
      >
        {/* Background grid */}
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

        {/* Blue atmospheric glow */}
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

        {/* Top */}
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] flex-col px-5 py-6 sm:px-8 lg:px-12">
          {/* <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0976b2] text-sm font-black">
                W
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                  WTT Group
                </p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/30">
                  Contact
                </p>
              </div>
            </div>

            <button
              onClick={scrollToForm}
              className="group flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] backdrop-blur-md transition hover:border-[#0976b2]/60 hover:bg-[#0976b2]/10"
            >
              Start a conversation
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
          </div> */}

          {/* Hero content */}
          <div className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:py-16">
            {/* Left */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              {/* <motion.div
                variants={fadeUp}
                className="mb-7 flex items-center gap-3"
              >
                <span className="h-2 w-2 rounded-full bg-[#0976b2] shadow-[0_0_18px_#0976b2]" />

                <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">
                  Six cities. One network.
                </span>
              </motion.div> */}
              {/* <div className="mb-8 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-[#0976b2]">
                <span className="h-px w-12 bg-[#0976b2]" />
                WTT / CONTACT US
              </div>

              <motion.h1
                variants={fadeUp}
                className="max-w-4xl text-[clamp(4rem,9vw,9rem)] font-black leading-[0.78] tracking-[-0.075em]"
              >
                YOUR NEXT
                <br />
                <span className="text-white">BIG IDEA </span>
                <br />
                <span className="text-[#0976b2]">STARTS HERE.</span>
              </motion.h1> */}

<div className="overflow-hidden">
              <div className="mb-8 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-[#0976b2]">
                  <span className="h-px w-12 bg-[#0976b2]" />
                  WTT / CONTACT US
                </div>
              <motion.h2
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  max-w-[800px]
                  
                  font-semibold
                  leading-[0.84]
                  tracking-[-0.07em]
                  text-[8vw]
                "
              >
                YOUR NEXT
                <br />
                <span className="text-white">BIG IDEA </span>
                <br />
                <span className="text-[#0976b2]">STARTS HERE.</span>
              </motion.h2>
            </div>

              <motion.p
                variants={fadeUp}
                className="mt-8 max-w-xl text-base leading-7 text-white/55 sm:text-lg"
              >
                Every great idea starts with a conversation.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-3"
              >
                <button
                  onClick={scrollToForm}
                  className="group flex items-center gap-3 rounded-full bg-[#0976b2] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#1685ff] hover:shadow-[0_0_40px_rgba(0,122,255,.3)]"
                >
                  Send an enquiry
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>

                {/* <div className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-xs uppercase tracking-[0.15em] text-white/50">
                  <MapPin size={14} />
                  India
                </div> */}
              </motion.div>

              {/* Scroll indicator */}
              <motion.button
                onClick={scrollToForm}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-16 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white/30"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10">
                  <ArrowDown size={13} />
                </span>
                Scroll to connect
              </motion.button>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                x: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="relative h-[430px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-2xl sm:h-[500px] lg:h-[620px]"
            >
              {/* Map heading */}
              <div className="pointer-events-none absolute left-5 top-5 z-20">
                <div className="rounded-2xl border border-white/10 bg-[#050509]/75 px-4 py-3 backdrop-blur-xl">
                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#0976b2]">
                    WTT Network
                  </p>
                  <p className="mt-1 text-sm font-semibold">
                    We are closer than you think.
                  </p>
                </div>
              </div>

              <OfficeMap selectedOffice={activeOffice} />

              {/* Map bottom label */}
              <div className="pointer-events-none absolute bottom-5 left-5 right-5 z-20 flex items-end justify-between">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/40">
                    Currently viewing
                  </p>

                  <p className="mt-1 text-lg font-bold">{activeOffice.city}</p>
                </div>

                <div className="rounded-full border border-white/10 bg-black/50 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.15em] text-white/60 backdrop-blur-xl">
                  06 Offices
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FORM + CONTACT
      ====================================================== */}
      <section
        id="contact-form"
        data-snap-section
        className="relative bg-[#f2f2ee] px-5 py-20 text-[#050509] sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            {/* Left */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              {/* <motion.div
                variants={fadeUp}
                className="mb-6 flex items-center gap-3"
              >
                <span className="h-2 w-2 rounded-full bg-[#0976b2]" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">
                  Get in touch
                </span>
              </motion.div> */}

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
                  max-w-[800px]
                  text-[clamp(3.4rem,6vw,7.2rem)]
                  font-semibold
                  leading-[0.84]
                  tracking-[-0.07em]
                "
              >
                LET’S
                <br />
                <span className="text-[#0976b2]">
                CONNECT.
                </span>
              </motion.h2>
            </div>

              {/* <motion.h2
                variants={fadeUp}
                className="text-[clamp(3.5rem,7vw,7rem)] font-black leading-[0.82] tracking-[-0.07em]"
              >
                LET’S
                <br />
                <span className="text-[#0976b2]">CONNECT.</span>
              </motion.h2> */}

              <motion.p
                variants={fadeUp}
                className="mt-8 max-w-md text-base leading-7 text-black/55"
              >
                Have a brief, an ambition or simply ideas you'd like to explore?
                We'd love to hear from you. Let's talk about how we can enrich
                your brand make a bigger impact, out there.
              </motion.p>

              {/* Contact details */}
              <motion.div variants={fadeUp} className="mt-10 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-white">
                    <MapPin size={17} />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/35">
                      WTT Network
                    </p>

                    <p className="mt-1 text-sm font-bold">
                      6 offices across India
                    </p>

                    <p className="mt-1 text-xs leading-5 text-black/45">
                      Mumbai · Delhi · Bengaluru · Chennai · Hyderabad · Kolkata
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0976b2] text-white">
                    <MessageCircle size={17} />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/35">
                      Email us
                    </p>

                    <a
                      href="mailto:hello@wttgroup.in"
                      className="mt-1 block text-sm font-bold transition hover:text-[#0976b2]"
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

            {/* Form */}
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
                <div className="mb-10 flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#0976b2]">
                      Something Brewing?
                    </p>

                    <h3 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
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
                      className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-black/40"
                    >
                      Your name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="w-full border-b border-black/15 bg-transparent px-0 py-3 text-base outline-none transition placeholder:text-black/25 focus:border-[#0976b2]"
                    />
                  </div>

                  {/* Mobile */}
                  <div className="group relative">
                    <label
                      htmlFor="mobile"
                      className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-black/40"
                    >
                      Mobile number
                    </label>

                    <input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full border-b border-black/15 bg-transparent px-0 py-3 text-base outline-none transition placeholder:text-black/25 focus:border-[#0976b2]"
                    />
                  </div>

                  {/* Message */}
                  <div className="group relative">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-black/40"
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

                <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-xs text-[10px] leading-5 text-black/35">
                    By sending this note, you agree to be contacted by the
                    WTT Team regarding your request.
                  </p>

                  <button
                    type="submit"
                    disabled={submitted}
                    className="group flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#050509] px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#0976b2] disabled:cursor-default"
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
    CITY NETWORK
====================================================== */}
      <section
        data-snap-section
        className="relative overflow-hidden bg-[#0976b2] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
      >
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/10" />
          <div className="absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full border border-white/10" />
          <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-white/[0.04] blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px]">
          {/* Heading */}
          <div className="mb-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-7 flex items-center gap-3"
        >
          <span className="h-2 w-2 rounded-full bg-white" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-white">
            Our network / India
          </span>
        </motion.div> */}

              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="
            max-w-[900px]
            text-[clamp(3.5rem,8vw,8rem)]
            font-black
            leading-[0.82]
            tracking-[-0.075em]
            text-white
          "
              >
                SIX CITIES.
                <br />
                <span className="text-white/40">ONE WTT.</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:pb-2"
            >
              <p className="max-w-md text-base leading-8 text-white sm:text-lg">
                From Mumbai to Hyderabad, our teams work across culture,
                creativity, technology and experiences. One network. Six cities.
                Countless possibilities.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <span className="h-px w-12 bg-white/60" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                  Explore our locations
                </span>
              </div>
            </motion.div>
          </div>

          {/* City Cards */}
          <div className="grid border-l border-t border-white/25 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Mumbai",
              "Delhi",
              "Bengaluru",
              "Chennai",
              "Hyderabad",
              "Kolkata",
            ].map((city, index) => {
              const office = offices.find((item) => item.city === city);

              if (!office) return null;

              const isActive = activeOffice.city === office.city;

              return (
                <motion.button
                  key={office.city}
                  onClick={() => selectOffice(office)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.07,
                  }}
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
                  {/* Top */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[0.25em] text-white">
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

                  {/* Bottom */}
                  <div className="mt-12">
                    <h3
                      className={`
                  text-3xl font-black tracking-[-0.04em]
                  transition-colors duration-300
                  ${
                    isActive
                      ? "text-white"
                      : "text-white group-hover:text-white"
                  }
                `}
                    >
                      {office.city}
                    </h3>

                    <p className="mt-4 max-w-sm text-sm leading-7 text-white">
                      {office.address}
                    </p>

                    <div className="mt-5 flex items-center gap-2">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          isActive ? "bg-white" : "bg-white/50"
                        }`}
                      />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                        {isActive ? "Currently selected" : "Explore office"}
                      </span>
                    </div>
                  </div>

                  {/* Active indicator */}
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

          {/* Footer */}
          <div className="mt-8 flex flex-col justify-between gap-4 border-t border-white/25 pt-6 sm:flex-row sm:items-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              One network. Six locations. Endless possibilities.
            </p>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              06 / Offices across India
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
