"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ChevronRight,
  House,
  Users,
  Building2,
  Trophy,
  Video,
  Menu,
  PanelBottom,
  Info,
} from "lucide-react";
import { useState } from "react";

const homeItems = [
  {
    title: "Hero",
    href: "/admin/home/hero",
  },
  {
    title: "What We Do",
    href: "/admin/home/what-we-do",
  },
  {
    title: "Why WTT",
    href: "/admin/home/why-wtt",
  },
  {
    title: "Brands",
    href: "/admin/home/brands",
  },
  {
    title: "Recognitions",
    href: "/admin/home/recognitions",
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  const homeActive = pathname.startsWith("/admin/home");

  const [homeOpen, setHomeOpen] = useState(homeActive);

  return (
    <aside className="flex h-full w-[280px] shrink-0 flex-col border-r border-white/10 bg-[#080a0d] text-white">

      {/* BRAND */}

      <div className="flex h-[78px] items-center border-b border-white/10 px-7">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#0976b2]">
            WTT
          </p>

          <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
            Content Management
          </p>
        </div>
      </div>

      {/* NAVIGATION */}

      <div className="flex-1 overflow-y-auto px-4 py-6">

        <p className="mb-4 px-3 text-[9px] font-bold uppercase tracking-[0.3em] text-white/25">
          Website
        </p>

        {/* HOME */}

        <div>
          <button
            type="button"
            onClick={() => setHomeOpen(!homeOpen)}
            className={`group flex w-full items-center justify-between rounded-none px-3 py-3 text-left transition ${
              homeActive
                ? "bg-[#0976b2]/10 text-white"
                : "text-white/50 hover:bg-white/[0.03] hover:text-white"
            }`}
          >
            <span className="flex items-center gap-3">
              <House
                size={16}
                strokeWidth={1.5}
                className={
                  homeActive
                    ? "text-[#0976b2]"
                    : "text-white/30"
                }
              />

              <span className="text-[11px] font-bold uppercase tracking-[0.16em]">
                Home
              </span>
            </span>

            {homeOpen ? (
              <ChevronDown size={15} />
            ) : (
              <ChevronRight size={15} />
            )}
          </button>

          {/* HOME CHILDREN */}

          <div
            className={`overflow-hidden transition-all duration-300 ${
              homeOpen
                ? "max-h-[400px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="ml-4 border-l border-white/10 py-2">

              {homeItems.map((item, index) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative flex items-center gap-3 px-5 py-3 transition ${
                      active
                        ? "text-white"
                        : "text-white/35 hover:text-white/80"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full transition ${
                        active
                          ? "bg-[#0976b2]"
                          : "bg-white/20 group-hover:bg-white/50"
                      }`}
                    />

                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em]">
                      {item.title}
                    </span>

                    {active && (
                      <span className="absolute right-3 h-px w-5 bg-[#0976b2]" />
                    )}
                  </Link>
                );
              })}

            </div>
          </div>
        </div>

        {/* OTHER ITEMS */}

        <div className="mt-3 space-y-1">

          <SidebarItem
            href="/admin/about"
            title="About"
            icon={<Info size={16} strokeWidth={1.5} />}
            pathname={pathname}
          />

          <SidebarItem
            href="/admin/teams"
            title="Teams"
            icon={<Users size={16} strokeWidth={1.5} />}
            pathname={pathname}
          />

          <SidebarItem
            href="/admin/clients"
            title="Clients"
            icon={<Building2 size={16} strokeWidth={1.5} />}
            pathname={pathname}
          />

          <SidebarItem
            href="/admin/awards"
            title="Awards"
            icon={<Trophy size={16} strokeWidth={1.5} />}
            pathname={pathname}
          />

          <SidebarItem
            href="/admin/showreels"
            title="Showreels"
            icon={<Video size={16} strokeWidth={1.5} />}
            pathname={pathname}
          />

        </div>

        <p className="mb-4 mt-10 px-3 text-[9px] font-bold uppercase tracking-[0.3em] text-white/25">
          Global
        </p>

        <div className="space-y-1">

          <SidebarItem
            href="/admin/header-menu"
            title="Header Menu"
            icon={<Menu size={16} strokeWidth={1.5} />}
            pathname={pathname}
          />

          <SidebarItem
            href="/admin/footer"
            title="Footer"
            icon={<PanelBottom size={16} strokeWidth={1.5} />}
            pathname={pathname}
          />

        </div>

      </div>

      {/* BOTTOM */}

      <div className="border-t border-white/10 p-5">

        <div className="flex items-center justify-between">

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/25">
              WTT CMS
            </p>

            <p className="mt-1 text-[10px] text-white/50">
              v1.0.0
            </p>
          </div>

          <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]" />

        </div>

      </div>

    </aside>
  );
}

function SidebarItem({
  href,
  title,
  icon,
  pathname,
}: {
  href: string;
  title: string;
  icon: React.ReactNode;
  pathname: string;
}) {
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-3 transition ${
        active
          ? "bg-[#0976b2]/10 text-white"
          : "text-white/45 hover:bg-white/[0.03] hover:text-white"
      }`}
    >
      <span
        className={
          active
            ? "text-[#0976b2]"
            : "text-white/30"
        }
      >
        {icon}
      </span>

      <span className="text-[10px] font-bold uppercase tracking-[0.16em]">
        {title}
      </span>
    </Link>
  );
}