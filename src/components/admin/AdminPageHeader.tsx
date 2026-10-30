"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Eye,
  Save,
} from "lucide-react";

interface AdminPageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function AdminPageHeader({
  eyebrow,
  title,
  description,
}: AdminPageHeaderProps) {

  return (

    <div className="border-b border-gray-200 bg-white">

      <div className="mx-auto max-w-[1500px] px-5 py-7 sm:px-8 lg:px-10">

        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

          <div>

            <Link
              href="/admin/home"
              className="mb-5 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 transition hover:text-[#0976b2]"
            >

              <ArrowLeft size={13} />

              Back to Home

            </Link>


            <div className="flex items-center gap-2">

              <span className="h-px w-7 bg-[#0976b2]" />

              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#0976b2]">
                {eyebrow}
              </span>

            </div>


            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-gray-900 sm:text-4xl">
              {title}<span className="text-[#0976b2]">.</span>
            </h2>

            <p className="mt-2 max-w-xl text-xs leading-6 text-gray-500">
              {description}
            </p>

          </div>


          <div className="flex items-center gap-2">

            <Link
              href="/"
              target="_blank"
              className="inline-flex h-10 items-center gap-2 border border-gray-200 px-4 text-[8px] font-bold uppercase tracking-[0.15em] text-gray-500 transition hover:border-gray-400 hover:text-gray-900"
            >

              <Eye size={14} />

              Preview

            </Link>


            <button
              type="button"
              className="inline-flex h-10 items-center gap-2 bg-[#0976b2] px-5 text-[8px] font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#086a9f]"
            >

              <Save size={14} />

              Save Changes

            </button>

          </div>

        </div>

      </div>

    </div>

  );
}