"use client";

import { useRef, useState } from "react";
import {
  ImagePlus,
  Trash2,
  Upload,
} from "lucide-react";

interface ImageUploadProps {
  value: string;
  onChange: (value: string) => void;
  folder?: string;
  label?: string;
  recommendedText?: string;
  aspectClassName?: string;
}

export default function ImageUpload({
  value,
  onChange,
  folder = "general",
  label = "Image",
  recommendedText = "PNG, JPG or WEBP.",
  aspectClassName = "aspect-[1.25/1]",
}: ImageUploadProps) {
  const inputRef =
    useRef<HTMLInputElement>(null);

  const [uploading, setUploading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function handleUpload(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    try {
      setUploading(true);
      setError("");

      const formData = new FormData();

      formData.append("file", file);
      formData.append("folder", folder);

      const response = await fetch(
        "/api/admin/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error ||
            "Image upload failed."
        );
      }

      if (!data?.path) {
        throw new Error(
          "Image path was not returned."
        );
      }

      onChange(data.path);
    } catch (error) {
      console.error(
        "Image upload error:",
        error
      );

      setError(
        error instanceof Error
          ? error.message
          : "Image upload failed."
      );
    } finally {
      setUploading(false);

      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  }

  function handleRemove() {
    onChange("");
    setError("");
  }

  return (
    <div>
      {/* Label */}

      <label className="mb-2 block text-[7px] font-bold uppercase tracking-[0.3em] text-white/35">
        {label}
      </label>

      {/* Image Container */}

      <div className="overflow-hidden border border-white/[0.08] bg-[#05070a]">

        {/* Preview */}

        <div
          className={`relative w-full overflow-hidden bg-white/[0.02] ${aspectClassName}`}
        >
          {value ? (
            <>
              <img
                src={value}
                alt={label}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Overlay */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Remove */}

              <button
                type="button"
                onClick={handleRemove}
                disabled={uploading}
                className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center border border-white/20 bg-black/60 text-white backdrop-blur-md transition hover:border-red-400 hover:text-red-400 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Trash2 size={13} />
              </button>

              {/* Path */}

              <div className="absolute bottom-3 left-3 right-3 z-10">
                <p className="truncate text-[7px] font-bold uppercase tracking-[0.2em] text-white/60">
                  {value}
                </p>
              </div>
            </>
          ) : (
            <div className="flex h-full flex-col items-center justify-center">
              <ImagePlus
                size={28}
                strokeWidth={1}
                className="text-white/15"
              />

              <p className="mt-3 text-[8px] font-bold uppercase tracking-[0.25em] text-white/20">
                No Image
              </p>
            </div>
          )}
        </div>

        {/* Upload Button */}

        <div className="border-t border-white/[0.08] p-4">
          <label
            className={`flex h-11 items-center justify-center gap-2 border border-white/[0.1] bg-white/[0.02] text-[8px] font-bold uppercase tracking-[0.2em] text-white/50 transition ${
              uploading
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer hover:border-[#0976b2] hover:bg-[#0976b2]/5 hover:text-white"
            }`}
          >
            <Upload size={13} />

            {uploading
              ? "Uploading..."
              : value
                ? "Replace Image"
                : "Upload Image"}

            <input
              ref={inputRef}
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={handleUpload}
              disabled={uploading}
              className="hidden"
            />
          </label>

          {/* Help Text */}

          <p className="mt-3 text-[7px] leading-4 text-white/20">
            {recommendedText}
          </p>

          {/* Error */}

          {error && (
            <p className="mt-2 text-[7px] leading-4 text-red-400">
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}