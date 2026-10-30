"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Menu,
  PanelBottom,
  Video,
  BriefcaseBusiness,
  Users,
  Trophy,
  Settings,
  LogOut,
} from "lucide-react";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}

const navigation = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Header Menu",
    href: "/admin/header-menu",
    icon: Menu,
  },
  {
    label: "Footer",
    href: "/admin/footer",
    icon: PanelBottom,
  },
  {
    label: "Showreels",
    href: "/admin/showreels",
    icon: Video,
  },
  {
    label: "Services",
    href: "/admin/services",
    icon: BriefcaseBusiness,
  },
  {
    label: "Clients",
    href: "/admin/clients",
    icon: Users,
  },
  {
    label: "Awards",
    href: "/admin/awards",
    icon: Trophy,
  },
  {
    label: "Site Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminLayout({
  children,
}: AdminLayoutProps) {
  const pathname = usePathname();

  return (
    <main className="flex-1 p-0 sm:p-1 lg:p-1">
            {children}
          </main>
  );
}