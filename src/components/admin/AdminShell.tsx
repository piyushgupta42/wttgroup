"use client";

import { ReactNode } from "react";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

interface AdminShellProps {
  children: ReactNode;
}

export default function AdminShell({
  children,
}: AdminShellProps) {
  return (
    <div className="min-h-screen bg-[#f5f7fa] text-[#111827]">

      <AdminHeader />

      <div className="flex">

        <AdminSidebar />

        <main className="min-w-0 flex-1">
          {children}
        </main>

      </div>

    </div>
  );
}