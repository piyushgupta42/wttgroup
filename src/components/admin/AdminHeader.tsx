"use client";

import { useRouter } from "next/navigation";
import {
  LogOut,
  UserCircle,
} from "lucide-react";

export default function AdminHeader() {

  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.removeItem("wtt_admin_logged_in");
    router.replace("/admin/login");
  };

  return (
    <header className="sticky top-0 z-50 h-[72px] border-b border-black/[0.07] bg-white/95 backdrop-blur-xl">

      <div className="flex h-full items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* LEFT */}

        <div className="flex items-center gap-4">

          <div className="flex h-9 w-9 items-center justify-center bg-[#0976b2] text-white">

            <span className="text-[11px] font-black tracking-tight">
              W
            </span>

          </div>

          <div>

            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#0976b2]">
              WTT GROUP
            </p>

            <h1 className="mt-0.5 text-sm font-bold tracking-tight text-gray-900">
              Content Management System
            </h1>

          </div>

        </div>


        {/* RIGHT */}

        <div className="flex items-center gap-3">

          <div className="hidden items-center gap-3 border-r border-gray-200 pr-4 sm:flex">

            <UserCircle
              size={32}
              strokeWidth={1.4}
              className="text-[#0976b2]"
            />

            <div>

              <p className="text-xs font-bold text-gray-900">
                Administrator
              </p>

              <p className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.18em] text-gray-400">
                WTT Admin
              </p>

            </div>

          </div>


          <button
            type="button"
            onClick={handleLogout}
            className="
              group
              flex
              h-10
              items-center
              gap-2
              border
              border-gray-200
              px-3
              text-[9px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-gray-500
              transition
              hover:border-red-200
              hover:bg-red-50
              hover:text-red-600
            "
          >

            <LogOut
              size={15}
              strokeWidth={1.7}
              className="transition-transform group-hover:-translate-x-0.5"
            />

            <span className="hidden sm:block">
              Logout
            </span>

          </button>

        </div>

      </div>

    </header>
  );
}