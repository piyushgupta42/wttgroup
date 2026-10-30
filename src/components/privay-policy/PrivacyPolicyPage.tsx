"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";



/* =========================================================
   PRIVACY POLICY DATA
========================================================= */

interface PolicySection {
  id: string;
  number: string;
  title: string;
  intro: string;
  paragraphs: string[];
}

const policySections: PolicySection[] = [
  {
    id: "definitions",
    number: "01",
    title: "Important Definitions",
    intro:
      "A few terms define how this Privacy Policy applies across the WTT digital experience.",
    paragraphs: [
      "“Website” means wttgroup.in and the website operated by Walk the Talk.",
      "“You” or “your” means any individual or user who visits or interacts with our Website.",
    ],
  },
  {
    id: "applicability",
    number: "02",
    title: "Applicability",
    intro:
      "This policy applies to personally identifiable information shared with Walk the Talk through the Website.",
    paragraphs: [
      "This Privacy Policy applies to all personally identifiable information that you provide to Walk the Talk through the Website or for purposes of using the Website.",
      "This Privacy Policy does not apply to personally identifiable information that you may provide to third parties, including through websites linked to our Website.",
      "If you choose to visit third-party websites, you should review the privacy policies of those third parties to understand their respective practices.",
      "You should also review and accept our Website Terms of Use, which apply to and govern your use of the Website.",
      "Walk the Talk reserves the right to modify this Privacy Policy periodically and at its discretion without prior notice.",
      "Users should review this Privacy Policy regularly to remain current with our practices and procedures.",
      "Your continued use of the Website will be subject to the then-current Privacy Policy.",
    ],
  },
  {
    id: "overview",
    number: "03",
    title: "Overview of the Policy",
    intro:
      "Transparency matters. This section explains what information we may collect and how it enters our systems.",
    paragraphs: [
      "As part of the normal operation of the Website, we collect and, in certain circumstances, may disclose personally identifiable information about you.",
      "This Privacy Policy describes the personally identifiable information we collect, how we use it and what may happen to that information.",
      "By accepting this Privacy Policy and our Terms of Use, you consent to our use and disclosure of personally identifiable information in the manner described in this Privacy Policy.",
      "This Privacy Policy is incorporated into and subject to the conditions of the Terms of Use and governs use of the Website.",
      "We may collect your name, address, email address, telephone number and other personally identifiable information that you voluntarily submit through the Website.",
      "We may also collect information you share with us through your use of the Website, including when you email us, write to us using contact details published on the Website or submit an inquiry.",
    ],
  },
  {
    id: "use",
    number: "04",
    title: "How Your Information Will Be Used",
    intro:
      "The information we collect helps us provide a smoother, more relevant and efficient experience.",
    paragraphs: [
      "Our goal in collecting information is to provide you with a smooth, efficient and customized experience.",
      "This allows us to provide services and features that are most likely to meet your needs and to customize the Website and our services.",
      "We may use the information we collect to provide you with information and services that you request from us.",
      "We may use personally identifiable information maintained in our records, together with information obtained from your current and past activities on the Website, to provide services and improve your experience.",
    ],
  },
  {
    id: "changes",
    number: "05",
    title: "Changes to Our Privacy Policy",
    intro:
      "Our Privacy Policy may evolve as our Website and practices evolve.",
    paragraphs: [
      "Any changes we make to our Privacy Policy will be posted on this page.",
      "We encourage users to review this page periodically to remain informed about our privacy practices.",
      "Continued use of the Website following changes to this Privacy Policy will signify your acceptance of those changes.",
    ],
  },
];

/* =========================================================
   HERO GRID
========================================================= */

function HeroGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}

/* =========================================================
   HERO ORBIT
========================================================= */

function HeroOrbit() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[560px] items-center justify-center">
      {/* Glow */}
      <div className="absolute h-[70%] w-[70%] rounded-full bg-[#0976b2]/20 blur-[100px]" />

      {/* Outer orbit */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[7%] rounded-full border border-white/10"
      >
        <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#0976b2] shadow-[0_0_30px_#0976b2]" />
      </motion.div>

      {/* Middle orbit */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[19%] rounded-full border border-white/[0.12]"
      >
        <span className="absolute right-[8%] top-[18%] h-2 w-2 rounded-full bg-white/70" />
      </motion.div>

      {/* Inner orbit */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[31%] rounded-full border border-[#0976b2]/30"
      >
        <span className="absolute bottom-[7%] left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#0976b2]" />
      </motion.div>

      {/* Center */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex aspect-square w-[34%] items-center justify-center rounded-full border border-white/15 bg-white/[0.035] backdrop-blur-xl"
      >
        <div className="flex aspect-square w-[72%] items-center justify-center rounded-full border border-[#0976b2]/40 bg-[#0976b2]/10">
          <ShieldCheck
            size={48}
            strokeWidth={1.2}
            className="text-[#0976b2]"
          />
        </div>
      </motion.div>

      {/* Floating card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[1%] top-[17%] z-20 border border-white/10 bg-[#0b0b10]/90 px-5 py-4 backdrop-blur-xl"
      >
        <div className="mb-2 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0976b2]" />
          <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/40">
            Security
          </span>
        </div>

        <div className="text-xl font-black uppercase tracking-tight text-white">
          24/7
        </div>

        <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">
          Protection
        </div>
      </motion.div>

      {/* Privacy card */}
      <motion.div
        animate={{ y: [0, 9, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[12%] left-[2%] z-20 border border-[#0976b2]/30 bg-[#0976b2] px-5 py-4"
      >
        <div className="mb-1 text-[9px] font-bold uppercase tracking-[0.25em] text-white/60">
          Privacy
        </div>

        <div className="text-lg font-black uppercase tracking-tight text-white">
          HIGH
        </div>
      </motion.div>
    </div>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("definitions");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const { scrollYProgress } = useScroll();

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.18],
    [1, 0.2]
  );

  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.18],
    [1, 0.96]
  );

  /* =======================================================
     ACTIVE SECTION
  ======================================================= */

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    policySections.forEach((section) => {
      const element = sectionRefs.current[section.id];

      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section.id);
          }
        },
        {
          rootMargin: "-25% 0px -65% 0px",
          threshold: 0,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  /* =======================================================
     SCROLL TO SECTION
  ======================================================= */

  const scrollToSection = (id: string) => {
    const element = sectionRefs.current[id];

    if (!element) return;

    const headerOffset = 100;

    const top =
      element.getBoundingClientRect().top +
      window.scrollY -
      headerOffset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <main className="w-full max-w-full overflow-x-hidden bg-[#050509] text-white">
      {/* ===================================================
          EXISTING WTT HEADER
      =================================================== */}

      

      {/* ===================================================
          HERO
      =================================================== */}

      <section className="relative min-h-screen w-full overflow-hidden bg-[#050509]">
        <HeroGrid />

        {/* Atmospheric glow */}
        <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[#0976b2]/10 blur-[140px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-[#0976b2]/10 blur-[160px]" />

        {/* Giant background word */}
        <div className="pointer-events-none absolute inset-x-0 bottom-[-5vw] select-none overflow-hidden">
          <div className="whitespace-nowrap text-[26vw] font-black leading-none tracking-[-0.08em] text-white/[0.025]">
            TRUST
          </div>
        </div>

        <motion.div
          style={{
            opacity: heroOpacity,
            scale: heroScale,
          }}
          className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1600px] flex-col justify-center px-6 pb-20 pt-32 sm:px-10 lg:px-16"
        >
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* LEFT */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mb-7 flex items-center gap-3"
              >
                <span className="h-px w-8 bg-[#0976b2]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/45">
                  WTT / Privacy Policy
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="max-w-5xl text-[17vw] font-black uppercase leading-[0.76] tracking-[-0.07em] sm:text-[13vw] lg:text-[9.5vw]"
              >
                Privacy
                <br />
                <span className="text-[#0976b2]">Matters.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.35,
                }}
                className="mt-9 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8"
              >
                Your trust matters to us. This Privacy Policy explains
                how Walk the Talk collects, uses, protects and manages
                information shared through our digital experience.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.45,
                }}
                className="mt-10 flex flex-wrap gap-3"
              >
                {[
                  "PEOPLE",
                  "DATA",
                  "TRUST",
                ].map((item) => (
                  <div
                    key={item}
                    className="border border-white/10 px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.25em] text-white/40"
                  >
                    {item}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-5">
              <HeroOrbit />
            </div>
          </div>

          {/* Hero bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
            }}
            className="mt-12 flex items-center justify-between border-t border-white/10 pt-5"
          >
            <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30">
              WTT / DIGITAL / 01—08
            </div>

            <button
              type="button"
              onClick={() => scrollToSection("definitions")}
              className="group flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.25em] text-white/45 transition-colors hover:text-white"
            >
              Explore Policy

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition-all group-hover:border-[#0976b2] group-hover:bg-[#0976b2]">
                <ArrowDown size={13} />
              </span>
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* ===================================================
          POLICY CONTENT
      =================================================== */}

      <section className="relative w-full overflow-hidden bg-[#f3f3f0] text-[#050509]">
        {/* Decorative top blue line */}
        <div className="h-1 w-full bg-[#0976b2]" />

        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16">
          {/* =================================================
              POLICY INDEX
          ================================================= */}

          <div className="border-b border-black/10 py-7 lg:py-9">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="mb-2 text-[9px] font-bold uppercase tracking-[0.3em] text-black/35">
                  Legal / Navigation
                </div>

                <div className="text-2xl font-black uppercase tracking-[-0.04em] sm:text-3xl">
                  Privacy Policy
                </div>
              </div>

              <div className="flex max-w-full flex-wrap gap-x-5 gap-y-3">
                {policySections.map((section) => {
                  const isActive = activeSection === section.id;

                  return (
                    <button
                      key={section.id}
                      type="button"
                      onClick={() => scrollToSection(section.id)}
                      className={`group flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.16em] transition-colors ${
                        isActive
                          ? "text-[#0976b2]"
                          : "text-black/35 hover:text-black"
                      }`}
                    >
                      <span
                        className={`transition-all ${
                          isActive
                            ? "text-[#0976b2]"
                            : "text-black/20 group-hover:text-black/50"
                        }`}
                      >
                        {section.number}
                      </span>

                      <span className="hidden sm:inline">
                        {section.title.length > 18
                          ? section.title.slice(0, 18) + "…"
                          : section.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* =================================================
              INTRO STRIP
          ================================================= */}

          <div className="grid border-b border-black/10 py-12 lg:grid-cols-12 lg:gap-10 lg:py-16">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.3em] text-black/35">
                <span className="h-px w-7 bg-[#0976b2]" />
                Your Data
              </div>
            </div>

            <div className="lg:col-span-7">
              <h2 className="max-w-4xl text-3xl font-black uppercase leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Clear information.
                <br />
                <span className="text-[#0976b2]">
                  Responsible handling.
                </span>
              </h2>
            </div>

            <div className="mt-7 lg:col-span-2 lg:mt-0">
              <p className="text-xs leading-5 text-black/45">
                A transparent overview of how information is collected,
                used and protected across the WTT digital experience.
              </p>
            </div>
          </div>

          {/* =================================================
              POLICY SECTIONS
          ================================================= */}

          <div>
            {policySections.map((section, index) => (
              <motion.article
                key={section.id}
                id={section.id}
                ref={(element) => {
                  sectionRefs.current[section.id] = element;
                }}
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
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="scroll-mt-24 border-b border-black/10 py-12 sm:py-14 lg:py-16"
              >
                <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
                  {/* NUMBER */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between lg:block">
                      <div className="text-5xl font-black leading-none tracking-[-0.07em] text-black/[0.13] sm:text-6xl">
                        {section.number}
                      </div>

                      <div className="mt-2 text-[8px] font-bold uppercase tracking-[0.25em] text-black/30 lg:mt-5">
                        Policy
                      </div>
                    </div>
                  </div>

                  {/* TITLE */}
                  <div className="lg:col-span-4">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0976b2]" />

                      <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#0976b2]">
                        Section {section.number}
                      </span>
                    </div>

                    <h2 className="max-w-xl text-3xl font-black uppercase leading-[0.92] tracking-[-0.05em] sm:text-4xl lg:text-5xl">
                      {section.title}
                    </h2>

                    <p className="mt-6 max-w-md text-sm font-medium leading-6 text-black/55">
                      {section.intro}
                    </p>
                  </div>

                  {/* CONTENT */}
                  <div className="lg:col-span-6">
                    <div
                      className={`grid gap-x-8 gap-y-6 ${
                        section.paragraphs.length >= 4
                          ? "xl:grid-cols-2"
                          : "grid-cols-1"
                      }`}
                    >
                      {section.paragraphs.map((paragraph, paragraphIndex) => (
                        <div
                          key={`${section.id}-${paragraphIndex}`}
                          className="relative border-l border-black/10 pl-5"
                        >
                          <div className="absolute -left-[3px] top-1.5 h-1.5 w-1.5 rounded-full bg-[#0976b2]" />

                          <div className="mb-2 text-[8px] font-bold uppercase tracking-[0.2em] text-black/25">
                            {String(paragraphIndex + 1).padStart(2, "0")}
                          </div>

                          <p className="text-sm leading-6 text-black/65">
                            {paragraph}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* NEXT SECTION */}
                {index < policySections.length - 1 && (
                  <div className="mt-10 flex justify-end">
                    <button
                      type="button"
                      onClick={() =>
                        scrollToSection(policySections[index + 1].id)
                      }
                      className="group flex items-center gap-3 text-[8px] font-bold uppercase tracking-[0.25em] text-black/30 transition-colors hover:text-[#0976b2]"
                    >
                      Next / {policySections[index + 1].number}

                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 transition-all group-hover:border-[#0976b2] group-hover:bg-[#0976b2] group-hover:text-white">
                        <ArrowRight size={11} />
                      </span>
                    </button>
                  </div>
                )}
              </motion.article>
            ))}
          </div>

          {/* =================================================
              CLOSING TRUST BLOCK
          ================================================= */}

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
            }}
            transition={{
              duration: 0.7,
            }}
            className="grid gap-8 py-16 sm:py-20 lg:grid-cols-12 lg:items-end lg:py-24"
          >
            <div className="lg:col-span-8">
              <div className="mb-5 flex items-center gap-3">
                <LockKeyhole
                  size={16}
                  strokeWidth={1.5}
                  className="text-[#0976b2]"
                />

                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-black/35">
                  Your Privacy / Our Responsibility
                </span>
              </div>

              <h2 className="text-5xl font-black uppercase leading-[0.82] tracking-[-0.07em] sm:text-7xl lg:text-[7.5vw]">
                Trust is
                <br />
                <span className="text-[#0976b2]">everything.</span>
              </h2>
            </div>

            <div className="lg:col-span-4">
              <p className="max-w-md text-sm leading-6 text-black/50">
                We believe privacy should be simple, transparent and
                responsible. If you have questions about this policy,
                please reach out to the Walk the Talk team.
              </p>

              <button
                type="button"
                className="group mt-7 inline-flex items-center gap-3 border-b border-black/20 pb-2 text-[9px] font-bold uppercase tracking-[0.25em] transition-colors hover:border-[#0976b2] hover:text-[#0976b2]"
              >
                Contact WTT

                <ArrowUpRight
                  size={13}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </div>
          </motion.div>
        </div>

        {/* =================================================
            EXISTING WTT FOOTER
        ================================================= */}

        
      </section>
    </main>
  );
}