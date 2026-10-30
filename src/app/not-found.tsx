import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  MoveUpRight,
} from "lucide-react";

export default function NotFound() {
  return (
    <main className="h-[100dvh] w-full overflow-hidden bg-[#030609] text-white">
      <div className="relative h-full min-h-0 w-full overflow-hidden">

        {/* =========================================================
            BACKGROUND
        ========================================================= */}

        <div className="pointer-events-none absolute inset-0">

          {/* Center Glow */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[500px]
              w-[500px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#0976b2]/10
              blur-[140px]
            "
          />

          {/* Top Right Glow */}

          <div
            className="
              absolute
              -right-40
              -top-40
              h-[450px]
              w-[450px]
              rounded-full
              bg-[#0976b2]/5
              blur-[120px]
            "
          />

          {/* Background Grid */}

          <div
            className="
              absolute
              inset-0
              opacity-[0.05]
            "
            style={{
              backgroundImage: `
                linear-gradient(
                  rgba(255,255,255,0.25) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(255,255,255,0.25) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "80px 80px",
            }}
          />

          {/* Giant Background WTT */}

          <div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[30vw] font-black leading-none tracking-[-0.12em] text-white/[0.018]">
            WTT
          </div>

        </div>

        {/* =========================================================
            HEADER — SAME AS ADMIN
        ========================================================= */}

        <header className="absolute left-0 right-0 top-0 z-30 flex h-[64px] items-center justify-between border-b border-white/[0.08] px-6 sm:h-[66px] sm:px-8 md:h-[68px] md:px-10 lg:h-[72px] lg:px-14">

          {/* Logo */}

          <Link
            href="/"
            className="group flex items-center"
          >
            <Image
              src="/images/logo.png"
              alt="WTT Group"
              width={120}
              height={60}
              priority
              className="w-[80px] object-contain transition-opacity duration-300 group-hover:opacity-80 sm:w-[90px] md:w-[100px]"
            />
          </Link>

          {/* Header Right */}

          <div className="flex items-center gap-3 sm:gap-4">

            <span className="hidden text-[8px] font-bold uppercase tracking-[0.3em] text-white/25 md:block">
              WALK THE TALK
            </span>

            <span className="h-7 w-px bg-white/10 sm:h-8" />

            <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#0976b2] sm:text-[9px]">
              404
            </span>

          </div>

        </header>

        {/* =========================================================
            MAIN
        ========================================================= */}

        <section className="relative z-10 h-full w-full overflow-hidden pb-[44px] pt-[64px] sm:pb-[46px] sm:pt-[66px] md:pb-[48px] md:pt-[68px] lg:pt-[72px]">

          <div className="mx-auto flex h-full min-h-0 w-full max-w-[1600px] flex-col justify-center px-6 sm:px-8 md:px-10 lg:px-14 xl:px-20">

            {/* =====================================================
                MAIN GRID
            ===================================================== */}

            <div className="grid min-h-0 flex-1 items-center gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">

              {/* =================================================
                  LEFT CONTENT
              ================================================= */}

              <div className="relative flex min-h-0 flex-col justify-center">

                {/* Error Label */}

                <div className="mb-4 flex items-center gap-3 sm:mb-5 lg:mb-6">

                  <span className="h-px w-8 bg-[#0976b2] sm:w-10 lg:w-12" />

                  <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#0976b2] sm:text-[9px] lg:text-xs">
                    ERROR 404
                  </span>

                </div>

                {/* Giant 404 */}

                <div className="relative">

                  <h1
                    className="
                      select-none
                      text-[clamp(7rem,19vw,19rem)]
                      font-black
                      leading-[0.68]
                      tracking-[-0.09em]
                      text-white
                    "
                  >
                    404
                  </h1>

                  {/* Blue Line */}

                  <div
                    className="
                      absolute
                      bottom-[10%]
                      left-[8%]
                      h-1
                      w-[30%]
                      animate-pulse
                      bg-[#0976b2]
                      shadow-[0_0_35px_rgba(9,118,178,0.8)]
                      sm:h-1.5
                      lg:h-2
                    "
                  />

                </div>

                {/* Heading */}

                <div className="mt-7 max-w-xl sm:mt-8 lg:mt-9">

                  <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                    LOST THE WAY?
                  </h2>

                  <p className="mt-3 max-w-lg text-xs leading-6 text-white/45 sm:mt-4 sm:text-sm lg:text-base">
                    Looks like this page took a wrong turn.
                    Don't worry — every great journey has a
                    way back.
                  </p>

                </div>

                {/* Button */}

                <div className="mt-6 flex flex-wrap items-center gap-4 sm:mt-7 lg:mt-8">

                  <Link
                    href="/"
                    className="
                      group
                      inline-flex
                      h-12
                      items-center
                      gap-3
                      bg-[#0976b2]
                      px-6
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-white
                      shadow-[0_0_35px_rgba(9,118,178,0.18)]
                      transition-all
                      duration-300
                      hover:bg-white
                      hover:text-black
                      hover:shadow-[0_0_50px_rgba(9,118,178,0.3)]
                      sm:h-13
                      sm:px-7
                      sm:text-[10px]
                    "
                  >

                    <ArrowLeft
                      size={16}
                      strokeWidth={1.5}
                      className="
                        transition-transform
                        duration-300
                        group-hover:-translate-x-1
                      "
                    />

                    BACK TO HOME

                  </Link>

                  <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-white/25 sm:text-[9px]">
                    KEEP WALKING
                  </span>

                </div>

              </div>

              {/* =================================================
                  RIGHT VISUAL
              ================================================= */}

              <div className="relative hidden min-h-0 items-center justify-center lg:flex">

                {/* Outer Circle */}

                <div
                  className="
                    absolute
                    h-[280px]
                    w-[280px]
                    rounded-full
                    border
                    border-white/10
                    xl:h-[360px]
                    xl:w-[360px]
                  "
                />

                {/* Dashed Orbit */}

                <div
                  className="
                    wtt-orbit-animation
                    absolute
                    h-[215px]
                    w-[215px]
                    rounded-full
                    border
                    border-dashed
                    border-[#0976b2]/30
                    xl:h-[285px]
                    xl:w-[285px]
                  "
                />

                {/* Route */}

                <svg
                  viewBox="0 0 400 400"
                  className="
                    absolute
                    h-[320px]
                    w-[320px]
                    xl:h-[420px]
                    xl:w-[420px]
                  "
                  fill="none"
                >

                  {/* Route Background */}

                  <path
                    d="
                      M80 310
                      C120 250 100 190 170 175
                      C230 162 225 250 280 220
                      C330 192 310 120 345 80
                    "
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="2"
                    strokeDasharray="8 10"
                  />

                  {/* Animated Route */}

                  <path
                    d="
                      M80 310
                      C120 250 100 190 170 175
                      C230 162 225 250 280 220
                      C330 192 310 120 345 80
                    "
                    stroke="#0976b2"
                    strokeWidth="3"
                    strokeDasharray="55 400"
                    strokeLinecap="round"
                    className="wtt-route-animation"
                  />

                </svg>

                {/* Center Circle */}

                <div
                  className="
                    relative
                    flex
                    h-28
                    w-28
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#0976b2]/30
                    bg-[#0976b2]/10
                    shadow-[0_0_80px_rgba(9,118,178,0.2)]
                    backdrop-blur-xl
                    xl:h-32
                    xl:w-32
                  "
                >

                  <div className="text-center">

                    <MoveUpRight
                      className="mx-auto mb-2 text-[#0976b2]"
                      size={25}
                      strokeWidth={1.4}
                    />

                    <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-white/45">
                      FIND YOUR WAY
                    </span>

                  </div>

                </div>

                {/* Floating Dot 01 */}

                <div
                  className="
                    absolute
                    left-[16%]
                    top-[30%]
                    h-2
                    w-2
                    animate-pulse
                    rounded-full
                    bg-[#0976b2]
                    shadow-[0_0_15px_#0976b2]
                  "
                />

                {/* Floating Dot 02 */}

                <div
                  className="
                    absolute
                    right-[18%]
                    top-[20%]
                    h-1.5
                    w-1.5
                    animate-pulse
                    rounded-full
                    bg-white/70
                  "
                />

                {/* Floating Dot 03 */}

                <div
                  className="
                    absolute
                    bottom-[22%]
                    right-[18%]
                    h-2
                    w-2
                    animate-pulse
                    rounded-full
                    bg-[#0976b2]
                    shadow-[0_0_15px_#0976b2]
                  "
                />

              </div>

            </div>

            {/* =====================================================
                BOTTOM TAGLINE
            ===================================================== */}

            <div className="shrink-0 border-t border-white/10 py-4 sm:py-5">

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-white/25 sm:text-[9px]">
                  WTT GROUP
                </p>

                <p className="text-[7px] uppercase tracking-[0.2em] text-white/30 sm:text-[8px] sm:tracking-[0.25em]">

                  MUCH HAS BEEN SPOKEN

                  <span className="mx-2 text-[#0976b2] sm:mx-3">
                    /
                  </span>

                  IT&apos;S TIME TO

                  <span className="mx-2 text-[#0976b2] sm:mx-3">
                    /
                  </span>

                  WALK THE TALK

                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =========================================================
            FOOTER — SAME AS ADMIN
        ========================================================= */}

        <footer className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 flex h-[44px] items-center justify-between border-t border-white/[0.06] px-6 sm:h-[46px] sm:px-8 md:h-[48px] md:px-10 lg:px-14">

          <span className="text-[7px] font-bold uppercase tracking-[0.2em] text-white/15 sm:text-[8px] sm:tracking-[0.25em]">
            © 2026 WTT Group. All rights reserved.
          </span>

          <span className="hidden text-[8px] font-bold uppercase tracking-[0.25em] text-white/15 lg:block">
            404 / PAGE NOT FOUND
          </span>

        </footer>

      </div>
    </main>
  );
}