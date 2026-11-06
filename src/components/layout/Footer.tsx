
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

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
  return (
    <footer
      className="
        relative w-full overflow-hidden
        bg-[#050509] font-sans text-white
      "
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute left-1/2 top-0
            h-[400px] w-[700px]
            -translate-x-1/2 rounded-full
            bg-[#0976b2]/[0.06] blur-[150px]
          "
        />

        <div
          className="
            absolute inset-0 opacity-[0.025]
            [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
            [background-size:65px_65px]
          "
        />
      </div>

      <div
        className="
          relative mx-auto w-full max-w-[1800px]
          px-5 pt-16 sm:px-8 lg:px-10
        "
      >
        {/* Top Footer Content */}
        <div
          className="
            grid grid-cols-1 gap-3
            lg:grid-cols-[1fr_1.15fr_215px]
            xl:grid-cols-[1fr_1.15fr_215px]
          "
        >
          {/* Left Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              relative flex min-h-[280px]
              items-center overflow-hidden
              border border-white/[0.04]
              bg-[#08090f] p-7 sm:p-10
              lg:min-h-[330px] xl:p-16
            "
          >
            {/* Grid Background */}
            <div
              className="
                pointer-events-none absolute inset-0 opacity-[0.045]
                [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
                [background-size:65px_65px]
              "
            />

            <div className="relative z-10">
              <h2
                className="
                  wtt-display-title
                  max-w-[520px]
                  uppercase
                "
              >
                HAVE A
                <br />
                BRAND
                <br />
                TO MOVE?
              </h2>
            </div>
          </motion.div>

          {/* Center Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="
              group relative flex min-h-[280px]
              flex-col justify-center overflow-hidden
              border border-white/[0.04]
              bg-[#08090f] p-7 sm:p-10
              lg:min-h-[330px] lg:p-8 xl:p-9
            "
          >
            {/* Grid Background */}
            <div
              className="
                pointer-events-none absolute inset-0 opacity-[0.045]
                [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
                [background-size:65px_65px]
              "
            />

            {/* Blue Glow */}
            <div
              className="
                pointer-events-none absolute -right-24 top-0
                h-[300px] w-[300px] rounded-full
                bg-[#0976b2]/[0.12] blur-[100px]
              "
            />

            <div className="relative z-10 pt-5">
              <h2
                className="
                  wtt-display-title
                  max-w-[650px]
                  text-[#477bb2]
                  transition-colors duration-500
                  group-hover:text-[#5b91c9]
                "
              >
                LET&apos;S GET IT
                <br />
                OUT THERE.
              </h2>

              <p
                className="
                  mt-7 max-w-[450px]
                  text-[13px] font-medium
                  leading-7 text-white/50
                  sm:text-sm
                "
              >
                Bring us your ambition. We&apos;ll bring in
                the possibilities.
                <br />
                Let&apos;s think bold, Go beyond and Walk the Talk.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Explore & Connect */}
          <div className="flex flex-col gap-3">
            {/* Explore */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="
                border border-white/[0.04]
                bg-[#08090f] p-5 sm:p-6
              "
            >
              <p
                className="
                  mb-6 text-[10px] font-semibold
                  uppercase tracking-[0.3em]
                  text-white/40
                "
              >
                EXPLORE
              </p>

              <div className="flex flex-col gap-[15px]">
                {companyLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="
                      group/link flex w-fit items-center
                      gap-2 text-[13px] font-medium
                      text-white/60
                      transition-colors duration-300
                      hover:text-white
                    "
                  >
                    {link.label}

                    <ArrowUpRight
                      size={12}
                      className="
                        -translate-x-1 -translate-y-1
                        opacity-0 transition-all duration-300
                        group-hover/link:translate-x-0
                        group-hover/link:translate-y-0
                        group-hover/link:opacity-100
                      "
                    />
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Connect */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="
                flex-1 border border-white/[0.04]
                bg-[#08090f] p-5 sm:p-6
              "
            >
              <p
                className="
                  mb-8 text-[10px] font-semibold
                  uppercase tracking-[0.3em]
                  text-white/40
                "
              >
                CONNECT
              </p>

              <a
                href="mailto:hello@wttgroup.in"
                className="
                  group flex items-center justify-between
                  gap-2 text-[15px] font-medium
                  text-white transition-colors
                  hover:text-[#0976b2] sm:text-base
                "
              >
                <span className="break-all">
                  hello@wttgroup.in
                </span>

                <ArrowUpRight
                  size={17}
                  className="
                    shrink-0 transition-transform duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Copyright & Social Links */}
        <div
          className="
            mt-3 border-y border-white/[0.10]
            bg-[#08090f] px-5 py-6 sm:px-8
          "
        >
          <div
            className="
              flex flex-col gap-5
              md:flex-row md:items-center
              md:justify-between
            "
          >
            {/* Copyright */}
            <p
              className="
                text-[10px] font-medium
                uppercase tracking-[0.12em]
                leading-5 text-white/40
              "
            >
              © {new Date().getFullYear()} WALK THE TALK
              COMMUNICATIONS PVT. LTD. ALL RIGHTS RESERVED.
            </p>

            {/* Social Links */}
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
                    title={social.label}
                    className="
                      flex h-10 w-10 items-center
                      justify-center rounded-full
                      border border-white/20
                      text-white/60
                      transition-all duration-300
                      hover:border-white hover:bg-white
                      hover:text-[#050509]
                    "
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Brand Logo */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            flex min-h-[260px] items-center
            justify-center overflow-hidden
            py-12 sm:min-h-[300px] sm:py-16
          "
        >
          <Link
            href="/"
            aria-label="WTT Group Home"
            className="
              group relative block w-full max-w-[520px]
              transition-transform duration-500
              hover:scale-[1.03]
            "
          >
            <Image
              src="/images/WTT_Logo_Brand_Blue.png"
              alt="Walk The Talk - Let's Do It Together"
              width={650}
              height={220}
              className="mx-auto h-auto w-full object-contain"
            />
          </Link>
        </motion.div>
      </div>
    </footer>
  );
}
