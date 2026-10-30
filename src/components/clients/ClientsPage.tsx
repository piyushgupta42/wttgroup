"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Search,
  X,
} from "lucide-react";

import ClientCard from "./ClientCard";
import {
  clients,
  clientCategories,
} from "./clients-data";

export default function ClientsPage() {
  const [activeCategory, setActiveCategory] =
    useState("ALL");

  const [search, setSearch] = useState("");

  const [selectedClient, setSelectedClient] =
    useState(clients[0]);

  const filteredClients = useMemo(() => {
    return clients.filter((client) => {
      const matchesCategory =
        activeCategory === "ALL" ||
        client.category === activeCategory;

      const matchesSearch =
        client.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        client.category
          .toLowerCase()
          .includes(search.toLowerCase());

      return (
        matchesCategory &&
        matchesSearch
      );
    });
  }, [activeCategory, search]);

  const marqueeClients = [
    ...clients,
    ...clients,
  ];

  return (
    <main className="overflow-hidden bg-[#f4f4f1] text-[#050509]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#050509] text-white">

        {/* Grid */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
          }}
        />

        {/* Glow */}

        <div className="pointer-events-none absolute left-[60%] top-[50%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#007aff]/15 blur-[150px]" />

        {/* Circle */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            pointer-events-none
            absolute
            -right-[220px]
            top-[8%]
            h-[650px]
            w-[650px]
            rounded-full
            border
            border-[#007aff]/20
          "
        />

        {/* Header labels */}

        <div className="absolute left-6 top-28 flex items-center gap-3 md:left-10">
          <span className="h-2 w-2 rounded-full bg-[#007aff]" />

          <span className="text-[9px] uppercase tracking-[0.35em] text-white/40">
            WTT / CLIENTS
          </span>
        </div>

        <div className="absolute right-6 top-28 text-[9px] uppercase tracking-[0.35em] text-white/30 md:right-10">
          01 — NETWORK
        </div>

        {/* Hero content */}

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 py-32 md:px-10 lg:px-16">

          <div className="grid items-end gap-16 lg:grid-cols-[1fr_0.35fr]">

            <div>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="mb-8 text-[10px] uppercase tracking-[0.4em] text-[#007aff]"
              >
                The brands we move
              </motion.p>

              <div className="overflow-hidden">

                <motion.h1
                  initial={{
                    y: "100%",
                  }}
                  animate={{
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    text-[clamp(4rem,11vw,11rem)]
                    font-semibold
                    leading-[0.76]
                    tracking-[-0.08em]
                  "
                >
                  CLIENTS
                  <span className="text-[#007aff]">.</span>
                </motion.h1>

              </div>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                }}
                className="mt-10 max-w-xl text-sm leading-7 text-white/40 md:text-base"
              >
                From ambitious challengers to established
                market leaders, we create communication
                that gets brands noticed, remembered and
                talked about.
              </motion.p>

            </div>

            {/* Counter */}

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
                duration: 0.8,
                delay: 0.5,
              }}
              className="lg:pb-4"
            >

              <div className="text-[clamp(5rem,10vw,9rem)] font-semibold leading-none tracking-[-0.08em]">
                100
                <span className="text-[#007aff]">
                  +
                </span>
              </div>

              <div className="mt-4 flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-white/30">
                <span className="h-px w-10 bg-[#007aff]" />
                Brands & businesses
              </div>

            </motion.div>

          </div>

        </div>

        {/* Scroll */}

        <div className="absolute bottom-8 left-6 flex items-center gap-3 md:left-10">

          <motion.div
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <ArrowDown
              size={15}
              className="text-[#007aff]"
            />
          </motion.div>

          <span className="text-[8px] uppercase tracking-[0.35em] text-white/30">
            Explore our network
          </span>

        </div>

      </section>

      {/* =====================================================
          MARQUEE
      ===================================================== */}

      <section className="overflow-hidden border-b border-black/10 bg-[#007aff] py-5">

        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max"
        >

          {marqueeClients.map(
            (client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex items-center"
              >

                <span className="px-6 text-2xl font-semibold uppercase tracking-[-0.04em] text-white md:text-4xl">
                  {client.name}
                </span>

                <span className="text-xl text-white/40">
                  /
                </span>

              </div>
            )
          )}

        </motion.div>

      </section>

      {/* =====================================================
          FEATURED CLIENT
      ===================================================== */}

      <section className="relative bg-[#f4f4f1] px-6 py-24 md:px-10 md:py-32 lg:px-16">

        <div className="mx-auto max-w-[1600px]">

          {/* Section heading */}

          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>

              <div className="mb-5 flex items-center gap-3">

                <span className="h-px w-10 bg-[#007aff]" />

                <span className="text-[9px] uppercase tracking-[0.35em] text-black/40">
                  Featured partnership
                </span>

              </div>

              <h2 className="text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.82] tracking-[-0.07em]">
                BUILT
                <br />
                TOGETHER<span className="text-[#007aff]">.</span>
              </h2>

            </div>

            <p className="max-w-sm text-sm leading-7 text-black/40">
              A closer look at the brands and businesses
              we work with — across categories, cities and
              cultures.
            </p>

          </div>

          {/* Featured panel */}

          <div className="grid overflow-hidden bg-[#050509] text-white lg:grid-cols-[1.1fr_0.9fr]">

            {/* Logo area */}

            <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden p-10 md:min-h-[560px]">

              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)
                  `,
                  backgroundSize: "70px 70px",
                }}
              />

              <motion.div
                key={selectedClient.id}
                initial={{
                  opacity: 0,
                  scale: 0.85,
                  rotate: -5,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="relative h-44 w-[70%] md:h-64"
              >
                <Image
                  src={selectedClient.logo}
                  alt={selectedClient.name}
                  fill
                  sizes="70vw"
                  className="object-contain"
                />
              </motion.div>

              <div className="absolute bottom-8 left-8 text-[9px] uppercase tracking-[0.3em] text-white/25">
                Selected client / {selectedClient.id}
              </div>

            </div>

            {/* Details */}

            <div className="flex flex-col justify-between border-t border-white/10 p-8 md:p-12 lg:border-l lg:border-t-0">

              <div>

                <span className="text-[9px] uppercase tracking-[0.3em] text-[#007aff]">
                  {selectedClient.category}
                </span>

                <h3 className="mt-6 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
                  {selectedClient.name}
                </h3>

                <p className="mt-7 max-w-md text-sm leading-7 text-white/40">
                  {selectedClient.description}
                </p>

              </div>

              {/* Featured selector */}

              <div className="mt-14">

                <p className="mb-5 text-[9px] uppercase tracking-[0.3em] text-white/25">
                  More partnerships
                </p>

                <div className="grid grid-cols-2 gap-2">

                  {clients
                    .filter((client) =>
                      client.featured
                    )
                    .map((client) => (
                      <button
                        type="button"
                        key={client.id}
                        onClick={() =>
                          setSelectedClient(client)
                        }
                        className={`
                          flex
                          items-center
                          justify-between
                          border
                          px-4
                          py-3
                          text-left
                          transition-all
                          ${
                            selectedClient.id ===
                            client.id
                              ? "border-[#007aff] bg-[#007aff]"
                              : "border-white/10 bg-white/[0.02] hover:border-white/30"
                          }
                        `}
                      >
                        <span className="text-[9px] uppercase tracking-[0.15em]">
                          {client.name}
                        </span>

                        <ArrowUpRight
                          size={13}
                        />
                      </button>
                    ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CLIENT DIRECTORY
      ===================================================== */}

      <section
        id="client-directory"
        className="relative bg-white px-6 py-24 md:px-10 md:py-32 lg:px-16"
      >

        <div className="mx-auto max-w-[1600px]">

          {/* Heading */}

          <div className="mb-14">

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-[#007aff]" />

              <span className="text-[9px] uppercase tracking-[0.35em] text-black/40">
                Our network
              </span>

            </div>

            <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

              <h2 className="text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.82] tracking-[-0.07em]">
                THE
                <br />
                NETWORK<span className="text-[#007aff]">.</span>
              </h2>

              <p className="max-w-md text-sm leading-7 text-black/40">
                Explore our growing network of clients across
                industries. More brands, more stories, more
                conversations.
              </p>

            </div>

          </div>

          {/* Controls */}

          <div className="mb-10 flex flex-col gap-6 border-y border-black/10 py-5 lg:flex-row lg:items-center lg:justify-between">

            {/* Categories */}

            <div className="flex flex-wrap gap-2">

              {clientCategories.map(
                (category) => (
                  <button
                    type="button"
                    key={category}
                    onClick={() =>
                      setActiveCategory(category)
                    }
                    className={`
                      rounded-full
                      border
                      px-4
                      py-2.5
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      transition-all
                      ${
                        activeCategory === category
                          ? "border-[#007aff] bg-[#007aff] text-white"
                          : "border-black/10 bg-transparent text-black/45 hover:border-black/30 hover:text-black"
                      }
                    `}
                  >
                    {category}
                  </button>
                )
              )}

            </div>

            {/* Search */}

            <div className="relative w-full lg:w-72">

              <Search
                size={15}
                className="absolute left-0 top-1/2 -translate-y-1/2 text-black/30"
              />

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="SEARCH CLIENTS"
                className="
                  w-full
                  border-b
                  border-black/15
                  bg-transparent
                  py-3
                  pl-7
                  pr-8
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  outline-none
                  placeholder:text-black/25
                  focus:border-[#007aff]
                "
              />

              {search && (
                <button
                  type="button"
                  onClick={() =>
                    setSearch("")
                  }
                  className="absolute right-0 top-1/2 -translate-y-1/2"
                >
                  <X size={14} />
                </button>
              )}

            </div>

          </div>

          {/* Result count */}

          <div className="mb-6 flex items-center justify-between">

            <span className="text-[9px] uppercase tracking-[0.25em] text-black/30">
              Showing {filteredClients.length}{" "}
              partnerships
            </span>

            <span className="text-[9px] uppercase tracking-[0.25em] text-black/30">
              {activeCategory}
            </span>

          </div>

          {/* Client grid */}

          <motion.div
            layout
            className="grid gap-px bg-black/10 md:grid-cols-2 xl:grid-cols-3"
          >

            <AnimatePresence mode="popLayout">

              {filteredClients.map(
                (client, index) => (
                  <ClientCard
                    key={client.id}
                    client={client}
                    index={index}
                  />
                )
              )}

            </AnimatePresence>

          </motion.div>

          {/* Empty */}

          {filteredClients.length === 0 && (
            <div className="flex min-h-[300px] items-center justify-center border border-black/10">

              <div className="text-center">

                <div className="text-5xl font-semibold tracking-[-0.05em]">
                  0
                </div>

                <p className="mt-3 text-[9px] uppercase tracking-[0.25em] text-black/40">
                  No clients found
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("ALL");
                  }}
                  className="mt-6 text-[9px] uppercase tracking-[0.25em] text-[#007aff]"
                >
                  Reset filters
                </button>

              </div>

            </div>
          )}

        </div>

      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#007aff] px-6 py-28 text-white md:px-10 md:py-40 lg:px-16">

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1600px]">

          <div className="flex flex-col justify-between gap-16 lg:flex-row lg:items-end">

            <div>

              <span className="text-[9px] uppercase tracking-[0.35em] text-white/60">
                Your brand could be next
              </span>

              <h2 className="mt-7 max-w-5xl text-[clamp(3.5rem,8vw,9rem)] font-semibold leading-[0.78] tracking-[-0.08em]">
                LET'S
                <br />
                TALK<span className="text-white/40">.</span>
              </h2>

            </div>

            <Link
              href="/contact"
              className="group flex h-32 w-32 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white text-black transition-transform duration-500 hover:scale-110 md:h-40 md:w-40"
            >
              <span className="flex flex-col items-center gap-2 text-center text-[9px] font-semibold uppercase tracking-[0.2em]">
                Start
                <br />
                a project

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </span>
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}