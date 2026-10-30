"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Plus,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const menus = [
  {
    number: "01",
    label: "Home",
    href: "/",
  },
  {
    number: "02",
    label: "About Us",
    href: "/about",
  },
  {
    number: "03",
    label: "Change Makers",
    href: "/teams",
  },
  {
    number: "04",
    label: "Contact Us",
    href: "/contact",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 45);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* =====================================================
          HEADER
      ====================================================== */}

      <motion.header
        className="
          fixed
          left-1/2
          top-5
          z-[100]
          -translate-x-1/2
        "
        animate={{
          /*
           * MOBILE:
           * Always keep the pill header.
           *
           * DESKTOP:
           * Full menu at top,
           * circular button after scrolling.
           */
          width: scrolled
            ? 74
            : "calc(100vw - 32px)",
        }}
        transition={{
          duration: 0.55,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <motion.div
          layout
          className={`
            relative
            flex
            h-[68px]
            items-center
            overflow-hidden
            border
            ${
              scrolled
                ? "rounded-full border-white/10 bg-[#050509]/90 shadow-2xl backdrop-blur-xl"
                : "rounded-full border-white/10 bg-black/10 backdrop-blur-sm"
            }
          `}
        >
          {/* =================================================
              LOGO
          ================================================== */}

          <Link
            href="/"
            className={`
              absolute
              z-20
              flex
              items-center
              transition-all
              duration-500

              ${
                scrolled
                  ? "left-1/2 -translate-x-1/2"
                  : "left-4 md:left-4"
              }
            `}
          >
            <Image
              src="/images/logo.png"
              alt="WTT"
              width={250}
              height={250}
              priority
              className={`
                object-contain
                transition-all
                duration-500

                ${
                  scrolled
                    ? "h-20 w-20"
                    : "h-[100px] w-[100px] md:h-[80px] md:w-[80px]"
                }
              `}
            />
          </Link>

          {/* =================================================
              DESKTOP HORIZONTAL MENU
              
              IMPORTANT:
              md:flex = desktop only
              hidden = mobile completely hidden
          ================================================== */}

          <AnimatePresence>
            {!scrolled && (
              <motion.nav
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -30,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="
                  ml-auto
                  hidden
                  items-center
                  gap-1
                  pr-3
                  md:flex
                "
              >
                {menus.slice(0, 5).map((menu) => {
  const isActive =
    pathname === menu.href ||
    (menu.href !== "/" && pathname.startsWith(`${menu.href}/`));

  return (
    <Link
      key={menu.number}
      href={menu.href}
      className={`
        group
        relative
        rounded-full
        px-4
        py-2.5
        text-[10px]
        uppercase
        tracking-[0.18em]
        transition-colors
        duration-300

        ${
          isActive
            ? "text-white"
            : "text-white/70 hover:text-white"
        }
      `}
    >
      {menu.label}

      {/* ACTIVE / HOVER UNDERLINE */}
      <span
        className={`
          absolute
          bottom-1
          left-1/2
          h-px
          -translate-x-1/2
          bg-[#0976b2]
          transition-all
          duration-300

          ${
            isActive
              ? "w-6"
              : "w-0 group-hover:w-6"
          }
        `}
      />
    </Link>
  );
})}

                {/* <Link
                  href="/contact"
                  className="
                    ml-2
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-white
                    px-5
                    py-3
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-black
                    transition-all
                    hover:bg-[#007aff]
                    hover:text-white
                  "
                >
                  Let's Talk

                  <ArrowUpRight size={14} />
                </Link> */}
              </motion.nav>
            )}
          </AnimatePresence>

          {/* =================================================
              ANIMATED PLUS BUTTON
              
              MOBILE:
              Always visible.
              
              DESKTOP:
              Visible only after scroll.
          ================================================== */}

          <AnimatePresence>
            {(scrolled || !scrolled) && (
              <motion.button
                initial={{
                  opacity: 0,
                  scale: 0,
                  rotate: -90,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0,
                  rotate: 90,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                className={`
                  absolute
                  right-2
                  z-30
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#0976b2]

                  ${
                    scrolled
                      ? "inset-0 right-auto h-full w-full"
                      : "top-1/2 -translate-y-1/2"
                  }

                  ${
                    !scrolled
                      ? "md:hidden"
                      : ""
                  }
                `}
              >
                {/* ROTATING ORBIT */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    inset-[7px]
                    rounded-full
                    border
                    border-white/30
                    border-dashed
                  "
                />

                {/* PLUS */}
                <Plus
                  size={24}
                  strokeWidth={1.5}
                  className="relative z-10"
                />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.header>

      {/* =====================================================
          CINEMATIC FULLSCREEN MENU
      ====================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              clipPath: "circle(0% at 50% 50%)",
            }}
            animate={{
              clipPath: "circle(150% at 50% 50%)",
            }}
            exit={{
              clipPath: "circle(0% at 50% 50%)",
            }}
            transition={{
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="
              fixed
              inset-0
              z-[200]
              overflow-hidden
              bg-[#050509]
              text-white
            "
          >
            {/* BACKGROUND */}

            <div className="absolute inset-0">

              {/* GRID */}

              <div
                className="
                  absolute
                  inset-0
                  opacity-[0.05]
                  [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
                  [background-size:80px_80px]
                "
              />

              {/* GIANT WTT */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.15,
                }}
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  whitespace-nowrap
                  text-[35vw]
                  font-bold
                  leading-none
                  tracking-[-0.12em]
                  text-white/[0.025]
                "
              >
                WTT
              </motion.div>

              {/* BLUE GLOW */}

              <motion.div
                animate={{
                  x: [-50, 50, -50],
                  y: [-30, 40, -30],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  right-[-10%]
                  top-[-20%]
                  h-[650px]
                  w-[650px]
                  rounded-full
                  bg-[#007aff]/20
                  blur-[160px]
                "
              />

              {/* CENTER ORB */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[55vw]
                  w-[55vw]
                  max-h-[700px]
                  max-w-[700px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-white/[0.04]
                "
              />
            </div>

            {/* MENU CONTENT */}

            <div
              className="
                relative
                mx-auto
                flex
                h-full
                max-w-[1600px]
                flex-col
                px-6
                py-6
                md:px-10
                lg:px-14
              "
            >

              {/* TOP */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  pb-5
                "
              >
                <Image
                  src="/images/logo.png"
                  alt="WTT"
                  width={200}
                  height={200}
                  priority
                  className="
                    h-[80px]
                    w-[80px]
                    object-contain
                    md:h-[100px]
                    md:w-[100px]
                  "
                />

                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-white/50
                    transition-colors
                    hover:text-white
                  "
                >
                  Close

                  <span
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/15
                      transition-all
                      duration-300
                      group-hover:border-[#0976b2]
                      group-hover:bg-[#0976b2]
                    "
                  >
                    <X size={18} />
                  </span>
                </button>
              </div>

              {/* NAVIGATION */}

              <nav
                className="
                  relative
                  z-10
                  flex
                  flex-1
                  flex-col
                  justify-center
                "
              >
                {menus.map((menu, index) => {
  const isActive =
    pathname === menu.href ||
    (menu.href !== "/" && pathname.startsWith(`${menu.href}/`));

  return (
    <motion.div
      key={menu.number}
      initial={{
        opacity: 0,
        x: -80,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay: 0.18 + index * 0.08,
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
    >
      <Link
        href={menu.href}
        onClick={() => setMenuOpen(false)}
        className="group relative flex items-center py-2 md:py-3"
      >
        {/* NUMBER */}
        <span
          className={`
            w-10
            text-[10px]
            transition-colors
            duration-300
            md:w-16
            ${
              isActive
                ? "text-[#0976b2]"
                : "text-[#0976b2]/60"
            }
          `}
        >
          {menu.number}
        </span>

        {/* TITLE */}
        <motion.span
          animate={{
            x: hovered === index ? 22 : 0,
            opacity:
              hovered !== null && hovered !== index
                ? 0.3
                : 1,
          }}
          className={`
            text-[clamp(2.7rem,7vw,7.5rem)]
            font-semibold
            uppercase
            leading-[0.82]
            tracking-[-0.07em]
            transition-colors
            duration-300
            ${
              isActive
                ? "text-white"
                : "text-white"
            }
          `}
        >
          {menu.label}
        </motion.span>

        {/* ARROW */}
        <motion.span
          animate={{
            opacity:
              hovered === index
                ? 1
                : isActive
                ? 0.8
                : 0,
            x:
              hovered === index
                ? 0
                : 20,
            rotate:
              hovered === index
                ? 0
                : -20,
          }}
          className="
            ml-auto
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-[#0976b2]
            md:h-16
            md:w-16
          "
        >
          <ArrowUpRight size={22} />
        </motion.span>

        {/* ACTIVE / HOVER LINE */}
        <motion.span
          initial={false}
          animate={{
            scaleX:
              hovered === index || isActive
                ? 1
                : 0,
          }}
          transition={{
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            absolute
            bottom-0
            left-0
            h-[2px]
            w-full
            origin-left
            bg-[#0976b2]
          "
        />
      </Link>
    </motion.div>
  );
})}
              </nav>

              {/* BOTTOM */}

              <div
                className="
                  flex
                  flex-col
                  gap-5
                  border-t
                  border-white/10
                  pt-5
                  md:flex-row
                  md:items-end
                  md:justify-between
                "
              >
                <div>
                  <div
                    className="
                      mb-2
                      text-[9px]
                      uppercase
                      tracking-[0.3em]
                      text-white/30
                    "
                  >
                    WTT GROUP
                  </div>

                  <div
                    className="
                      text-xl
                      font-medium
                      tracking-tight
                      md:text-2xl
                    "
                  >
                    Creatively led.
                    <span className="text-[#0976b2]">
                      {" "}
                      Tech driven.
                    </span>
                  </div>
                </div>

                <div
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.25em]
                    text-white/30
                  "
                >
                  Mumbai · India
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}