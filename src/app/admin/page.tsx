"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  LogOut,
  UserCircle,
} from "lucide-react";

const adminModules = [
  {
    title: "Header Menu",
    description:
      "Manage website navigation menus.",
    href: "/admin/header-menu",
  },
  {
    title: "Footer",
    description:
      "Manage footer content, links and social media.",
    href: "/admin/footer",
  },
  {
    title: "Showreels",
    description:
      "Manage homepage showreel videos.",
    href: "/admin/showreels",
  },
];

export default function AdminDashboard() {
  const router = useRouter();

  const handleLogout = () => {
    // Remove login session
    sessionStorage.removeItem("wtt_admin_logged_in");

    // Redirect to login page
    router.replace("/admin/login");
  };

  return (
    <main className="min-h-screen bg-[#f5f7fa]">

      {/* =========================================================
          HEADER
      ========================================================= */}

      <header className="border-b border-gray-200 bg-white">

        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">

          {/* LOGO / BRAND */}

          <div className="flex items-center gap-4">

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0976b2]">
                WTT CMS
              </p>

              <h1 className="mt-1 text-xl font-bold tracking-tight text-gray-900">
                Admin Dashboard
              </h1>
            </div>

          </div>

          {/* PROFILE + LOGOUT */}

          <div className="flex items-center gap-3">

            {/* Profile */}

            <div className="hidden items-center gap-3 border-r border-gray-200 pr-4 sm:flex">

              <UserCircle
                size={34}
                strokeWidth={1.5}
                className="text-[#0976b2]"
              />

              <div className="leading-none">

                <p className="text-sm font-semibold text-gray-900">
                  Administrator
                </p>

                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-gray-400">
                  WTT Admin
                </p>

              </div>

            </div>

            {/* Mobile Profile Icon */}

            <div className="flex h-9 w-9 items-center justify-center sm:hidden">

              <UserCircle
                size={27}
                strokeWidth={1.5}
                className="text-[#0976b2]"
              />

            </div>

            {/* Logout */}

            <button
              type="button"
              onClick={handleLogout}
              className="group flex h-10 items-center gap-2 border border-gray-200 bg-white px-4 text-xs font-bold uppercase tracking-[0.12em] text-gray-600 transition-all duration-300 hover:border-red-200 hover:bg-red-50 hover:text-red-600"
            >

              <LogOut
                size={15}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:-translate-x-0.5"
              />

              <span className="hidden sm:block">
                Logout
              </span>

            </button>

          </div>

        </div>

      </header>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-14">

        {/* PAGE INTRO */}

        <div className="mb-10">

          <div className="flex items-center gap-3">

            <span className="h-px w-8 bg-[#0976b2]" />

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0976b2]">
              Content Management System
            </p>

          </div>

          <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.04em] text-gray-900 sm:text-5xl">
            Manage
            <span className="text-[#0976b2]">
              .
            </span>
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
            Manage and update the content of your WTT Group
            website from one central dashboard.
          </p>

        </div>

        {/* =========================================================
            MODULES
        ========================================================= */}

        <div className="grid gap-5 md:grid-cols-3">

          {adminModules.map((module, index) => (

            <Link
              key={module.href}
              href={module.href}
              className="group relative overflow-hidden border border-gray-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#0976b2]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
            >

              {/* Background Number */}

              <span className="pointer-events-none absolute -right-3 -top-7 select-none text-[100px] font-black leading-none tracking-[-0.08em] text-gray-100 transition-colors duration-500 group-hover:text-[#0976b2]/[0.06]">
                0{index + 1}
              </span>

              {/* Icon */}

              <div className="relative mb-7 flex h-12 w-12 items-center justify-center border border-[#0976b2]/20 bg-[#0976b2]/[0.06] text-[#0976b2] transition-all duration-300 group-hover:border-[#0976b2] group-hover:bg-[#0976b2] group-hover:text-white">

                <ArrowRight
                  size={19}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </div>

              {/* Title */}

              <h3 className="relative text-xl font-bold text-gray-900">
                {module.title}
              </h3>

              {/* Description */}

              <p className="relative mt-3 text-sm leading-6 text-gray-500">
                {module.description}
              </p>

              {/* Manage */}

              <div className="relative mt-7 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0976b2]">

                Manage

                <ArrowRight
                  size={14}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </div>

            </Link>

          ))}

        </div>

      </div>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="border-t border-gray-200 bg-white">

        <div className="mx-auto flex min-h-[56px] max-w-7xl items-center justify-between px-5 sm:px-8">

          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
            © 2026 WTT Group. All rights reserved.
          </p>

          <p className="hidden text-[9px] font-bold uppercase tracking-[0.2em] text-gray-300 sm:block">
            Creatively Led — Tech Driven
          </p>

        </div>

      </footer>

    </main>
  );
}