"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
} from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // =========================================================
  // HARDCODED LOGIN CREDENTIALS
  // =========================================================

  const ADMIN_USERNAME = "admin@wttgroup.in";
  const ADMIN_PASSWORD = "WTT@2026";

  // =========================================================
  // LOGIN
  // =========================================================

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    // Check username and password

    if (
      email.trim().toLowerCase() === ADMIN_USERNAME.toLowerCase() &&
      password === ADMIN_PASSWORD
    ) {
      // Save login status
      sessionStorage.setItem("wtt_admin_logged_in", "true");

      // Redirect to admin dashboard
      router.push("/admin");

      return;
    }

    // Incorrect credentials

    setError("Incorrect username or password");
    setLoading(false);
  };

  return (
    <main className="h-[100dvh] w-full overflow-hidden bg-[#050607] text-white">
      <div className="relative h-full min-h-0 w-full overflow-hidden">

        {/* =========================================================
            BACKGROUND
        ========================================================= */}

        <div className="pointer-events-none absolute inset-0">

          {/* Fine Grid */}

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `
                linear-gradient(
                  rgba(255,255,255,0.8) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(255,255,255,0.8) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "80px 80px",
            }}
          />

          {/* Blue Ambient Light */}

          <motion.div
            animate={{
              opacity: [0.08, 0.16, 0.08],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[58%] top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0976b2] blur-[180px]"
          />

          {/* Background WTT */}

          <div className="absolute bottom-[-12%] left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[28vw] font-black leading-none tracking-[-0.1em] text-white/[0.018]">
            WTT
          </div>
        </div>

        {/* =========================================================
            HEADER
        ========================================================= */}

        <header className="absolute left-0 right-0 top-0 z-30 flex h-[64px] items-center justify-between border-b border-white/[0.08] px-6 sm:h-[66px] sm:px-8 md:h-[68px] md:px-10 lg:h-[72px] lg:px-14">

          <Image
            src="/images/logo.png"
            alt="WTT Group"
            width={120}
            height={60}
            priority
            className="w-[80px] object-contain sm:w-[90px] md:w-[100px]"
          />

          <div className="flex items-center gap-3 sm:gap-4">

            <span className="hidden text-[8px] font-bold uppercase tracking-[0.3em] text-white/25 md:block">
              WALK THE TALK
            </span>

            <span className="h-7 w-px bg-white/10 sm:h-8" />

            <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#0976b2] sm:text-[9px]">
              ADMIN
            </span>

          </div>
        </header>

        {/* =========================================================
            MAIN
        ========================================================= */}

        <section className="relative z-10 grid h-full w-full grid-cols-1 overflow-hidden pb-[44px] pt-[64px] sm:pb-[46px] sm:pt-[66px] md:pb-[48px] md:pt-[68px] lg:grid-cols-[1.15fr_0.85fr] lg:pt-[72px]">

          {/* =====================================================
              LEFT — BRAND / VISUAL
          ===================================================== */}

          <div className="relative hidden min-h-0 overflow-hidden border-r border-white/[0.08] lg:block">

            <div className="absolute bottom-8 left-8 top-12 flex flex-col items-center justify-between xl:bottom-10 xl:left-10 xl:top-14">

              <span className="text-[7px] font-bold uppercase tracking-[0.3em] text-white/20 [writing-mode:vertical-rl]">
                WTT DIGITAL EXPERIENCE
              </span>

            </div>

            <div className="flex h-full min-h-0 flex-col justify-center px-[9%]">

              <motion.div
                initial={{
                  opacity: 0,
                  x: -50,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >

                <div className="mb-6 flex items-center gap-3 xl:mb-8 xl:gap-4">

                  <span className="h-px w-9 bg-[#0976b2] xl:w-12" />

                  <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#0976b2] xl:text-[10px]">
                    CONTENT MANAGEMENT SYSTEM
                  </span>

                </div>

                <h1 className="select-none text-[clamp(5rem,9vw,10rem)] font-black uppercase leading-[0.72] tracking-[-0.09em]">

                  WALK

                  <br />

                  <span className="ml-[8%] text-[#0976b2]">
                    THE
                  </span>

                  <br />

                  TALK
                  <span className="text-[#0976b2]">
                    .
                  </span>

                </h1>

              </motion.div>

            </div>

            <span className="pointer-events-none absolute bottom-[-8%] right-[-2%] select-none text-[24vw] font-black leading-none tracking-[-0.1em] text-white/[0.018]">
              01
            </span>

          </div>

          {/* =====================================================
              RIGHT — LOGIN
          ===================================================== */}

          <div className="relative flex min-h-0 items-center overflow-hidden">

            <div className="absolute bottom-0 left-0 top-0 hidden w-px bg-white/[0.08] lg:block" />

            <div className="flex w-full items-center px-6 py-5 sm:px-10 sm:py-6 md:px-16 lg:px-[10%] lg:py-4">

              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mx-auto w-full max-w-[500px]"
              >

                {/* =================================================
                    LOGIN HEADER
                ================================================= */}

                <div className="mb-8 xl:mb-9">

                  <div className="mb-5 flex items-center justify-between xl:mb-6">

                    <div className="flex h-10 w-10 items-center justify-center border border-[#0976b2]/40 bg-[#0976b2]/[0.06] sm:h-11 sm:w-11 xl:h-12 xl:w-12">

                      <LockKeyhole
                        size={17}
                        strokeWidth={1.3}
                        className="text-[#0976b2]"
                      />

                    </div>

                    <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-white/20 sm:text-[9px]">
                      ACCESS / 01
                    </span>

                  </div>

                  <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.3em] text-[#0976b2]">
                    Welcome back
                  </p>

                  <h2 className="text-[clamp(3rem,5vw,5rem)] font-black uppercase leading-[0.82] tracking-[-0.07em]">
                    Sign
                    <span className="text-[#0976b2]">
                      In.
                    </span>
                  </h2>

                </div>

                {/* =================================================
                    FORM
                ================================================= */}

                <form onSubmit={handleSubmit}>

                  {/* EMAIL */}

                  <div className="group border-b border-white/10 transition-colors focus-within:border-[#0976b2]">

                    <label
                      htmlFor="email"
                      className="mb-2 block text-[8px] font-bold uppercase tracking-[0.25em] text-white/25 sm:text-[9px]"
                    >
                      01 — Email address
                    </label>

                    <div className="flex items-center">

                      <Mail
                        size={16}
                        strokeWidth={1.3}
                        className="mr-3 shrink-0 text-white/20 transition-colors group-focus-within:text-[#0976b2] sm:mr-4"
                      />

                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(event) =>
                          setEmail(event.target.value)
                        }
                        placeholder="admin@wttgroup.in"
                        autoComplete="email"
                        required
                        className="h-12 w-full bg-transparent text-xs text-white outline-none placeholder:text-white/15 sm:h-13 sm:text-sm"
                      />

                    </div>

                  </div>

                  {/* PASSWORD */}

                  <div className="group mt-6 border-b border-white/10 transition-colors focus-within:border-[#0976b2] sm:mt-7">

                    <label
                      htmlFor="password"
                      className="mb-2 block text-[8px] font-bold uppercase tracking-[0.25em] text-white/25 sm:text-[9px]"
                    >
                      02 — Password
                    </label>

                    <div className="flex items-center">

                      <LockKeyhole
                        size={16}
                        strokeWidth={1.3}
                        className="mr-3 shrink-0 text-white/20 transition-colors group-focus-within:text-[#0976b2] sm:mr-4"
                      />

                      <input
                        id="password"
                        type={
                          showPassword
                            ? "text"
                            : "password"
                        }
                        value={password}
                        onChange={(event) =>
                          setPassword(event.target.value)
                        }
                        placeholder="Enter password"
                        autoComplete="current-password"
                        required
                        className="h-12 w-full bg-transparent text-xs text-white outline-none placeholder:text-white/15 sm:h-13 sm:text-sm"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowPassword(
                            (previous) => !previous
                          )
                        }
                        className="ml-2 shrink-0 text-white/20 transition-colors hover:text-white sm:ml-3"
                        aria-label={
                          showPassword
                            ? "Hide password"
                            : "Show password"
                        }
                      >
                        {showPassword ? (
                          <EyeOff
                            size={16}
                            strokeWidth={1.3}
                          />
                        ) : (
                          <Eye
                            size={16}
                            strokeWidth={1.3}
                          />
                        )}
                      </button>

                    </div>

                  </div>

                  {/* ERROR MESSAGE */}

                  {error && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -5,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      className="mt-4 flex items-center gap-2 border-l-2 border-red-500 bg-red-500/[0.06] px-3 py-2"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />

                      <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-red-400">
                        {error}
                      </span>
                    </motion.div>
                  )}

                  {/* OPTIONS */}

                  <div className="mt-5 flex items-center justify-between">

                    <label className="flex items-center gap-2">

                      <input
                        type="checkbox"
                        className="h-3.5 w-3.5 accent-[#0976b2]"
                      />

                      <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-white/25 sm:text-[9px]">
                        Remember me
                      </span>

                    </label>

                  </div>

                  {/* BUTTON */}

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{
                      x: 4,
                    }}
                    whileTap={{
                      scale: 0.99,
                    }}
                    className="group mt-6 flex h-14 w-full items-center justify-between border border-[#0976b2] bg-[#0976b2] px-5 transition-all duration-300 hover:bg-transparent hover:text-[#0976b2] disabled:cursor-not-allowed disabled:opacity-60 sm:px-6"
                  >

                    <span className="text-[9px] font-black uppercase tracking-[0.3em] sm:text-[10px]">
                      {loading
                        ? "Authenticating..."
                        : "Enter CMS"}
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center border border-white/20 transition-colors group-hover:border-[#0976b2] sm:h-9 sm:w-9">

                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.3}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />

                    </span>

                  </motion.button>

                </form>

              </motion.div>

            </div>

          </div>

        </section>

        {/* =========================================================
            FOOTER
        ========================================================= */}

        <footer className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 flex h-[44px] items-center justify-between border-t border-white/[0.06] px-6 sm:h-[46px] sm:px-8 md:h-[48px] md:px-10 lg:px-14">

          <span className="text-[7px] font-bold uppercase tracking-[0.2em] text-white/15 sm:text-[8px] sm:tracking-[0.25em]">
            © 2026 WTT Group. All rights reserved.
          </span>

          <span className="hidden text-[8px] font-bold uppercase tracking-[0.25em] text-white/15 lg:block">
            CMS / 2026
          </span>

        </footer>

      </div>
    </main>
  );
}