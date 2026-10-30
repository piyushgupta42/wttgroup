
"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0 hidden md:block">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source
            src="/videos/wtt-showreel-desktop.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <video
        className="absolute inset-0 h-full w-full object-cover md:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source
          src="/videos/wtt-showreel-mobile.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(0,122,255,0.35),transparent_35%)]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-end px-6 pb-16 md:px-10 md:pb-20 lg:px-16">
        <div className="max-w-[1250px]" />

        <div className="mt-14 flex items-end justify-between">
          <motion.button
            type="button"
            animate={{
              y: scrolled ? 5 : 0,
            }}
            transition={{
              duration: 0.4,
            }}
            onClick={() => {
              document.getElementById("what-we-do")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-white/70"
          >
            Scroll to explore

            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-[#007aff] group-hover:bg-[#007aff]">
              <ArrowDown
                size={15}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </span>
          </motion.button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[#007aff]" />
    </section>
  );
}
