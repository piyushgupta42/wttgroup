
"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Check,
  MapPin,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";

import OfficeMap, { offices, type Office } from "./OfficeMap";
import WttHero from "../../components/common/WttHero";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

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

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const [activeOffice, setActiveOffice] = useState<Office>(
    () => orderedOffices[0] ?? offices[0]
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main>
      {/* =====================================================
          SECTION 01 — CONTACT HERO
      ====================================================== */}

      <section
        id="contact-hero"
        className="relative h-[100svh] min-h-[650px] w-full snap-start snap-always"
      >
        <WttHero
          eyebrow="WTT / CONTACT US"
          visualType="custom"
          scrollTarget="contact-form"
          footerText="Mumbai / Delhi / Bengaluru / Chennai / Hyderabad / Kolkata"
          description={<>Every great idea starts with a conversation.</>}
          heading={
            <>
              YOUR NEXT
              <br />
              <span className="text-white">BIG IDEA</span>
              <br />
              <span className="text-[#0976b2]">STARTS HERE.</span>
            </>
          }
          rightContent={
            <div className="relative mx-auto w-full max-w-[600px]">
              <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0976b2]/10" />

              <div className="relative h-[clamp(240px,52vh,540px)] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-2xl">
                <div className="pointer-events-none absolute left-4 top-4 z-20 sm:left-5 sm:top-5">
                  <div className="rounded-2xl border border-white/10 bg-[#050509]/80 px-3 py-3 backdrop-blur-xl sm:px-4">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#0976b2]">
                      WTT Network
                    </p>

                    <p className="mt-1 text-xs font-semibold text-white sm:text-sm">
                      We are closer than you think.
                    </p>
                  </div>
                </div>

                <OfficeMap selectedOffice={activeOffice} />
              </div>
            </div>
          }
        />
      </section>

      {/* =====================================================
          SECTION 02 — LET'S CONNECT
      ====================================================== */}

      <section
        id="contact-form"
        data-snap-section
        className="
          relative flex h-[100svh] min-h-[700px] w-full
          snap-start snap-always items-center
          overflow-y-auto bg-[#f2f2ee]
          px-5 py-8 text-[#050509]
          sm:px-8 lg:px-12
        "
      >
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 xl:gap-24">

            {/* LEFT CONTENT */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#0976b2]">
                  <span className="h-px w-10 bg-[#0976b2]" />
                  WTT / LET'S TALK
                </p>

                <h2 className="wtt-display-title max-w-[800px] text-[clamp(2.8rem,5.5vw,6rem)] leading-[0.95] uppercase">
                  LET'S
                  <br />
                  <span className="text-[#0976b2]">CONNECT.</span>
                </h2>
              </motion.div>
              

              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-md text-sm leading-6 text-black/55 sm:text-base sm:leading-7"
              >
                Have a brief, an ambition or simply ideas you'd like to explore?
                We'd love to hear from you. Let's talk about how we can enrich
                your brand and make a bigger impact out there.
              </motion.p>

              {/* CONTACT DETAILS */}

              <motion.div
                variants={fadeUp}
                className="mt-6 space-y-5 sm:mt-8"
              >
                {/* Network */}

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white">
                    <MapPin size={16} />
                  </div>

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/35">
                      WTT Network
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      6 offices across India
                    </p>

                    <p className="mt-1 max-w-sm text-xs leading-5 text-black/45">
                      Mumbai · Delhi · Bengaluru · Chennai · Hyderabad · Kolkata
                    </p>
                  </div>
                </div>

                {/* Email */}

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0976b2] text-white">
                    <MessageCircle size={16} />
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

            {/* CONTACT FORM */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <form
                onSubmit={handleSubmit}
                className="
                  rounded-[1.5rem] border border-black/10
                  bg-white p-5 shadow-[0_25px_80px_rgba(0,0,0,.08)]
                  sm:rounded-[2rem] sm:p-7 lg:p-9
                  xl:p-10
                "
              >
                {/* Form Header */}

                <div className="mb-6 flex items-start justify-between gap-4 sm:mb-8">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#0976b2]">
                      Something Brewing?
                    </p>

                    <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
                      We Are All Ears
                    </h3>
                  </div>

                  <div className="hidden h-10 w-10 items-center justify-center rounded-full bg-[#0976b2]/10 text-[#0976b2] sm:flex">
                    <Sparkles size={17} />
                  </div>
                </div>

                {/* FORM FIELDS */}

                <div className="space-y-5 sm:space-y-6">

                  {/* Name */}

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-black/40"
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
                      className="
                        w-full border-b border-black/15
                        bg-transparent px-0 py-2.5 text-sm
                        outline-none transition
                        placeholder:text-black/25
                        focus:border-[#0976b2]
                      "
                    />
                  </div>

                  {/* Mobile */}

                  <div>
                    <label
                      htmlFor="mobile"
                      className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-black/40"
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
                      className="
                        w-full border-b border-black/15
                        bg-transparent px-0 py-2.5 text-sm
                        outline-none transition
                        placeholder:text-black/25
                        focus:border-[#0976b2]
                      "
                    />
                  </div>

                  {/* Message */}

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-black/40"
                    >
                      Tell us about it
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={3}
                      placeholder="What are we creating together?"
                      className="
                        w-full resize-none border-b border-black/15
                        bg-transparent px-0 py-2.5 text-sm
                        outline-none transition
                        placeholder:text-black/25
                        focus:border-[#0976b2]
                      "
                    />
                  </div>
                </div>

                {/* SUBMIT */}

                <div className="mt-6 flex flex-col gap-4 sm:mt-7 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-xs text-[9px] leading-4 text-black/35">
                    By sending this note, you agree to be contacted by the WTT
                    Team regarding your request.
                  </p>

                  <button
                    type="submit"
                    disabled={submitted}
                    className="
                      group flex shrink-0 items-center justify-center gap-3
                      rounded-full bg-[#050509] px-6 py-3
                      text-[10px] font-semibold uppercase tracking-[0.15em]
                      text-white transition hover:bg-[#0976b2]
                      disabled:cursor-default
                    "
                  >
                    {submitted ? (
                      <>
                        Sent successfully
                        <Check size={15} />
                      </>
                    ) : (
                      <>
                        Send
                        <Send
                          size={14}
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
          SECTION 03 — SIX OFFICES / ONE OUTLOOK
      ====================================================== */}

      <section
        id="offices"
        data-snap-section
        className="
          relative flex h-[100svh] min-h-[700px] w-full
          snap-start snap-always items-center
          overflow-y-auto bg-[#0976b2]
          px-5 py-8 text-white sm:px-8 lg:px-12
        "
      >
        {/* BACKGROUND DECORATION */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/10" />

          <div className="absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full border border-white/10" />

          <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-white/[0.04] blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1400px]">

          {/* HEADER */}

          <div className="mb-7 grid gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="
                wtt-display-title max-w-[900px]
                text-[clamp(2.5rem,5.5vw,6rem)]
                leading-[0.95] uppercase text-white
              "
            >
              SIX OFFICES
              <br />
              <span className="text-white/40">ONE OUTLOOK</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="max-w-md text-xs leading-6 text-white/80 sm:text-sm sm:leading-7">
                North or South, East or West, our teams work across culture,
                creativity, technology and experiences. One Network. Six Offices.
                Countless Possibilities.
              </p>

              <div className="mt-4 flex items-center gap-3">
                <span className="h-px w-10 bg-white/60" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white sm:text-[10px]">
                  DROP IN FOR A COFFEE
                </span>
              </div>
            </motion.div>
          </div>

          {/* CITY GRID */}

          <div className="grid grid-cols-2 border-l border-t border-white/25 lg:grid-cols-3">
            {cityOrder.map((city, index) => {
              const office = offices.find((item) => item.city === city);

              if (!office) return null;

              const isActive = activeOffice.city === office.city;

              return (
                <motion.button
  key={office.city}
  type="button"
  onClick={() => setActiveOffice(office)}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={{ duration: 0.5, delay: index * 0.05 }}
  aria-pressed={isActive}
  className="
    group relative flex flex-col justify-center
    border-b border-r border-white/25
    p-4 text-left
    min-h-[120px] sm:min-h-[145px] sm:p-5 lg:p-6
    bg-white/[0.035]
    transition-all duration-300
    hover:bg-[#050509]
    hover:shadow-2xl
  "
>
  <h3 className="text-xl font-semibold tracking-[-0.04em] sm:text-2xl lg:text-3xl">
    {office.city}
  </h3>

  <p className="mt-2 text-[10px] leading-5 text-white/70 sm:text-xs sm:leading-6">
    {office.address}
  </p>

  {/* Hover indicator */}
  <div
    className="
      absolute bottom-0 left-0 h-1 w-full
      scale-x-0 bg-white
      transition-transform duration-300
      group-hover:scale-x-100
    "
  />
</motion.button>
              );
            })}
          </div>

          {/* SECTION FOOTER */}

          <div className="mt-5 flex flex-col justify-between gap-3 border-t border-white/25 pt-4 sm:flex-row sm:items-center">
            <p className="text-[9px] font-semibold uppercase tracking-[0.15em] sm:text-[10px] sm:tracking-[0.2em]">
              ONE NETWORK. SIX OFFICES. ENDLESS POSSIBILITIES.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
