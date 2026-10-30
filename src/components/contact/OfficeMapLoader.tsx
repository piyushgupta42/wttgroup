"use client";

import dynamic from "next/dynamic";

const OfficeMap = dynamic(
  () => import("./OfficeMap"),
  {
    ssr: false,

    loading: () => (
      <div className="flex h-full w-full items-center justify-center bg-[#e5e5e0]">
        <div className="text-center">

          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-black/10 border-t-[#007aff]" />

          <p className="mt-4 text-[9px] uppercase tracking-[0.3em] text-black/30">
            Loading WTT Network
          </p>

        </div>
      </div>
    ),
  }
);

export default OfficeMap;