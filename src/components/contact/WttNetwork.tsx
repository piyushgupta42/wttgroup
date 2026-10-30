"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

// import OfficeMapLoader from "./OfficeMapLoader";
import OfficeMap from "./OfficeMap";

const offices = [
  {
    city: "MUMBAI",
    number: "01",
    address:
      "910, Summit Business Park, Behind Guru Nanak Petrol Pump, Off Andheri Kurla Road, Andheri (East), Mumbai - 400093.",
  },
  {
    city: "DELHI",
    number: "02",
    address:
      "401-402 Thapar House, Yusuf Sarai Community Center, New Delhi - 110049.",
  },
  {
    city: "KOLKATA",
    number: "03",
    address:
      "Godrej Waterside, 12th Floor, Tower 2, D-5, DP Block, Sector V, Bidhan Nagar, Kolkata - 700091.",
  },
  {
    city: "CHENNAI",
    number: "04",
    address:
      "No 11/38, Status Quo Building, Sterling Road, Seetha Nagar, Nungambakkam, Chennai - 600034.",
  },
  {
    city: "BENGALURU",
    number: "05",
    address: "A/509, Mittal Towers, MG Road, Bengaluru - 560001.",
  },
  {
    city: "HYDERABAD",
    number: "06",
    address:
      "505, No. 6-3-252/2, Sri Ram Nest, Mega City, Irram Manzil Colony, Banjara Hills, Hyderabad - 500082.",
  },
];

export default function WttNetwork() {
  return (
    <section className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-10 lg:px-16">
      {/* =====================================================
          INTRO
      ===================================================== */}

        <div className="mx-auto max-w-[1600px] px-6 pb-12 pt-24 md:px-10 md:pt-32 lg:px-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.5fr] lg:items-end">
            <div>
                <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#007aff]" />

                <span className="text-[9px] uppercase tracking-[0.35em] text-black/40">
                    Contact / 02
                </span>
                </div>

                <h2 className="text-[clamp(4rem,9vw,9rem)] font-semibold leading-[0.78] tracking-[-0.075em]">
                WE ARE
                <br />
                <span className="text-[#007aff]">HERE.</span>
                </h2>
            </div>

            <div className="lg:pb-2">
                <p className="max-w-md text-sm leading-7 text-black/50">
                Six cities. One connected network. Wherever your next idea starts,
                there is a WTT team ready to walk the talk.
                </p>

                <a
                href="mailto:hello@wttgroup.in"
                className="mt-5 flex items-center gap-3 text-xs font-medium"
                >
                <Mail size={15} className="text-[#007aff]" />
                hello@wttgroup.in
                </a>
            </div>
            </div>
        </div>

      {/* =====================================================
          MAP
      ===================================================== */}

        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
            <div className="relative overflow-hidden border border-black/10 bg-[#e5e5e0]">
            {/* Top label */}
            <div className="absolute left-5 top-5 z-[500] flex items-center gap-3 rounded-full bg-white/90 px-4 py-2 shadow-sm backdrop-blur">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#007aff]" />

                <span className="text-[8px] font-medium uppercase tracking-[0.28em]">
                WTT India Network
                </span>
            </div>
            <div className="absolute left-0 right-0 top-0 z-20 h-[2px] bg-[#007aff]" />

            {/* Map */}
            <div className="h-[620px] w-full sm:h-[600px] lg:h-[680px]">
                {/* <OfficeMapLoader /> */}
                <OfficeMap />
            </div>
            </div>

            {/* Bottom meta */}
            <div className="absolute bottom-5 left-5 z-[500] rounded-full bg-white/80 px-4 py-2 text-[8px] uppercase tracking-[0.25em] text-black/40 backdrop-blur">
            06 Locations / India
            </div>

            {/* Corner */}
            <div className="absolute bottom-5 right-5 z-[500] hidden items-center gap-2 text-[8px] uppercase tracking-[0.2em] text-black/30 md:flex">
            Hover / Click Location
            <ArrowUpRight size={12} />
            </div>
        </div>

      {/* =====================================================
          OFFICE GRID
      ===================================================== */}

        <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 lg:px-16">
            <div className="mb-8 flex items-center justify-between">
            <span className="text-[9px] uppercase tracking-[0.3em] text-black/30">
                Our offices
            </span>

            <span className="text-[9px] uppercase tracking-[0.3em] text-black/30">
                06 / 06
            </span>
            </div>

            <div className="grid border-l border-t border-black/10 md:grid-cols-2 lg:grid-cols-3">
            {offices.map((office, index) => (
                <motion.div
                key={office.city}
                initial={{
                    opacity: 0,
                    y: 25,
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
                    duration: 0.6,
                    delay: index * 0.05,
                }}
                className="
                    group
                    relative
                    min-h-[260px]
                    border-b
                    border-r
                    border-black/10
                    p-7
                    transition-all
                    duration-500
                    hover:bg-[#007aff]
                    hover:text-white
                "
                >
                <div className="flex items-center justify-between">
                    <span className="text-[9px] tracking-[0.2em] text-black/30 transition-colors group-hover:text-white/50">
                    {office.number}
                    </span>

                    <ArrowUpRight
                    size={17}
                    className="text-black/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                    />
                </div>

                <div className="mt-16">
                    <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                    {office.city}
                    </h3>

                    <div className="mt-4 flex gap-3">
                    <MapPin
                        size={14}
                        className="mt-1 shrink-0 text-[#007aff] group-hover:text-white"
                    />

                    <p className="max-w-xs text-xs leading-6 text-black/50 group-hover:text-white/60">
                        {office.address}
                    </p>
                    </div>
                </div>
                </motion.div>
            ))}
            </div>
        </div>

      {/* =====================================================
          MARQUEE
      ===================================================== */}

        <div className="overflow-hidden border-t border-black/10 py-16">
            <motion.div
            animate={{
                x: ["0%", "-50%"],
            }}
            transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
            }}
            className="
                flex
                w-max
                whitespace-nowrap
                text-[14vw]
                font-semibold
                leading-none
                tracking-[-0.08em]
                text-black/[0.045]
            "
            >
            MUMBAI — DELHI — KOLKATA — CHENNAI — BENGALURU — HYDERABAD — MUMBAI —
            DELHI —
            </motion.div>
        </div>
    </section>
  );
}
