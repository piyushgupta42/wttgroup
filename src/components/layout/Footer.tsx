"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import { 
    FaFacebook, 
    FaInstagram, 
    FaLinkedin, 
    FaTwitter, 
    FaYoutube
  } from "react-icons/fa6"; 

const services = [
  "Brand Strategy",
  "Creative",
  "Digital",
  "Media",
  "Outdoor",
];

const companyLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "CHANGE MAKERS", href: "/teams" },
  { label: "CONTACT US", href: "/contact" },
  { label: "PRIVACY POLICY", href: "/privacy-policy" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/wtt-group",
    icon: FaLinkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/wtt_group",
    icon: FaInstagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/wttcpl",
    icon: FaFacebook,
  },
  {
    label: "Twitter / X",
    href: "https://x.com/WTTGroup",
    icon: FaTwitter,
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
    setEmail("");

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <footer className="relative w-full overflow-hidden bg-[#050509] rounded-t-[24px]">
      {/* =========================================================
          BACKGROUND GLOW
      ========================================================= */}

<div className="pointer-events-none absolute inset-0 overflow-hidden">
  <div
    className="
      absolute
      left-1/2
      top-0
      h-[350px]
      w-[700px]
      -translate-x-1/2
      rounded-full
      bg-[#0976b2]/[0.06]
      blur-[140px]
    "
  />
</div>

      {/* =========================================================
          MAIN FOOTER PANEL
      ========================================================= */}

<div className="relative w-full overflow-hidden rounded-t-[24px] bg-[#050509] text-white">
        {/* subtle grid */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
            [background-size:60px_60px]
          "
        />

        {/* blue glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-32
            -top-32
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#0976b2]/20
            blur-[120px]
          "
        />

        <div className="relative">
          {/* =====================================================
              TOP CONTENT
          ===================================================== */}

          <div className="grid grid-cols-1 gap-12 p-7 sm:p-10 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:gap-16 lg:p-14 xl:p-16">
            {/* ===================================================
                NEWSLETTER
            =================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* <div className="mb-7 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#0976b2]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40">
                  Stay connected
                </span>
              </div> */}

              <h2
                className="
                  max-w-xl
                  text-[clamp(2.5rem,5vw,5rem)]
                  font-black
                  uppercase
                  leading-[0.88]
                  tracking-[-0.06em]
                "
              >
                HAVE A BRAND 
                <br />
                TO MOVE?
                <br/>
                <span className="text-[#0976b2]">LET'S GET IT OUT THERE.</span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-6 text-white/45">
              Bring us your ambition. We'll bring in the possibilities. <br/>let's think bold, Go beyond and Walk the Talk.
              </p>

              {/* Newsletter */}
              {/* <form
                onSubmit={handleSubmit}
                className="
                  mt-8
                  flex
                  max-w-xl
                  items-center
                  rounded-full
                  border
                  border-white/20
                  bg-white/[0.03]
                  p-1.5
                  transition-all
                  focus-within:border-[#0976b2]
                  focus-within:bg-white/[0.05]
                "
              >
                <Mail
                  size={17}
                  className="ml-4 shrink-0 text-white/35"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Your email address"
                  required
                  className="
                    min-w-0
                    flex-1
                    bg-transparent
                    px-3
                    py-3
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-white/30
                  "
                />

                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0976b2]
                    text-white
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:bg-white
                    hover:text-black
                  "
                >
                  {submitted ? (
                    <Check size={17} />
                  ) : (
                    <Send size={16} />
                  )}
                </button>
              </form>

              {submitted && (
                <p className="mt-3 text-xs text-[#0976b2]">
                  Thanks — you&apos;re on the list.
                </p>
              )} */}
            </motion.div>

            {/* ===================================================
                SERVICES
            =================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/35">
                Our services
              </p>

              <div className="flex flex-col gap-3">
                {services.map((service, index) => (
                  <Link
                    key={service}
                    href="/services"
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      text-[15px]
                      text-white/75
                      transition-colors
                      hover:text-white
                    "
                  >
                    <span className="text-[10px] text-[#0976b2]">
                      0{index + 1}
                    </span>

                    <span>{service}</span>

                    <ArrowUpRight
                      size={13}
                      className="
                        -translate-x-2
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:translate-x-0
                        group-hover:opacity-100
                        group-hover:text-[#0976b2]
                      "
                    />
                  </Link>
                ))}
              </div> */}

              <div className="mt-10">
                <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/35">
                  EXPLORE
                </p>

                <div className="flex flex-col gap-3">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="
                        w-fit
                        text-sm
                        text-white/55
                        transition-colors
                        hover:text-[#0976b2]
                      "
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ===================================================
                CONTACT
            =================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/35">
                CONNECT
              </p>

              <a
                href="mailto:hello@wttgroup.in"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  text-lg
                  font-medium
                  text-white
                  transition-colors
                  hover:text-[#0976b2]
                "
              >
                hello@wttgroup.in

                <ArrowUpRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </a>

              {/* Contact details */}
              {/* <div className="mt-9 space-y-5">
                <div className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10">
                    <MapPin size={15} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/30">
                      Visit us
                    </p>

                    <p className="mt-1 text-sm leading-6 text-white/65">
                      Mumbai, Maharashtra
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10">
                    <Phone size={15} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/30">
                      Call us
                    </p>

                    <a
                      href="tel:+910000000000"
                      className="mt-1 block text-sm text-white/65 transition-colors hover:text-[#0976b2]"
                    >
                      +91 00000 00000
                    </a>
                  </div>
                </div>
              </div> */}

              {/* Let's Chat */}
              {/* <div className="mt-10">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/35">
                  Let&apos;s chat
                </p>

                <Link
                  href="/contact"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-[#0976b2]
                    px-5
                    py-3
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#0976b2]
                  "
                >
                  Start a conversation

                  <span
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      bg-[#0976b2]
                      transition-all
                      group-hover:bg-white
                      group-hover:text-black
                    "
                  >
                    <ArrowUpRight size={14} />
                  </span>
                </Link>
              </div> */}
            </motion.div>
          </div>

          {/* =====================================================
              TRUST / BADGES
          ===================================================== */}

          {/* <div className="border-t border-white/10 px-7 py-6 sm:px-10 lg:px-14">
            <div className="flex flex-wrap items-center gap-3">
              {[
                "CREATIVE",
                "MEDIA",
                "OUTDOOR",
                "DIGITAL",
                "TECH",
                "WTT GROUP",
              ].map((item, index) => (
                <div
                  key={item}
                  className="
                    flex
                    h-12
                    min-w-[105px]
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-white/10
                    bg-white/[0.025]
                    px-4
                    text-center
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-white/45
                    transition-all
                    duration-300
                    hover:border-[#0976b2]
                    hover:bg-[#0976b2]/10
                    hover:text-white
                  "
                >
                  {index === 5 ? (
                    <Image
                      src="/images/logo.png"
                      alt="WTT"
                      width={55}
                      height={55}
                      className="h-8 w-8 object-contain"
                    />
                  ) : (
                    item
                  )}
                </div>
              ))}
            </div>
          </div> */}

          {/* =====================================================
              SOCIAL / LINKS
          ===================================================== */}

          <div className="border-t border-white/10 px-7 py-5 sm:px-10 lg:px-14">
            <div
              className="
                flex
                flex-col
                gap-5
                md:flex-row
                md:items-center
                md:justify-between
              "
            >
              {/* Copyright */}
              <div className="flex items-center gap-3">
                {/* <Image
                  src="/images/logo.png"
                  alt="WTT"
                  width={40}
                  height={40}
                  className="h-7 w-7 object-contain"
                /> */}

                <p className="text-[10px] uppercase tracking-[0.12em] text-white/35">
                  © {new Date().getFullYear()} WALT THE TALK COMMUNITAIONS PVT. LTD. ALL RIGHTS RESERVED.
                </p>
              </div>

              {/* Social */}
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/15
                        text-white/55
                        transition-all
                        duration-300
                        hover:border-[#0976b2]
                        hover:bg-[#0976b2]
                        hover:text-white
                      "
                    >
                      <Icon size={14} />
                    </a>
                  );
                })}
              </div>

              {/* Legal */}
              {/* <div className="flex gap-5 text-[10px] uppercase tracking-[0.12em] text-white/35"> */}
                {/* <Link
                  href="/terms"
                  className="transition-colors hover:text-white"
                >
                  Terms
                </Link> */}

                {/* <Link
                  href="/privacy-policy"
                  className="transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link> */}
              {/* </div> */}
            </div>
          </div>

         {/* =====================================================
    GIANT WTT BRAND
===================================================== */}

<div className="relative overflow-hidden border-t border-white/[0.06]">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    }}
    className="
      select-none
      whitespace-nowrap
      px-4
      pt-16
      text-center
      text-[clamp(8rem,24vw,22rem)]
      font-black
      uppercase
      leading-[0.7]
      tracking-[-0.1em]
    "
  >
    <span
      className="
        bg-gradient-to-b
        from-[#0976b2]/30
        via-[#0976b2]/10
        to-transparent
        bg-clip-text
        text-transparent
      "
    >
      WTT
    </span>
  </motion.div>
</div>
        </div>
      </div>
    </footer>
  );
}