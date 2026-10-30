"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Plus,
  Save,
  Trash2,
  Trophy,
  X,
  ImagePlus,
} from "lucide-react";
import Link from "next/link";

import ImageUpload from "../../../components/common/ImageUpload";

/* =========================================================
   TYPES
========================================================= */

export interface Award {
  id: string;
  year: string;
  award: string;
  category: string;
  metal: "GOLD" | "SILVER" | "BRONZE";
  campaign: string;
  brand: string;
  image: string;
  description: string;
}

/* =========================================================
   DEFAULT DATA
========================================================= */

const emptyAward: Award = {
  id: "",
  year: "",
  award: "",
  category: "",
  metal: "GOLD",
  campaign: "",
  brand: "",
  image: "",
  description: "",
};

/* =========================================================
   COMPONENT
========================================================= */

export default function RecognitionsForm() {
  const [awards, setAwards] = useState<Award[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [editingId, setEditingId] =
    useState<string | null>(null);

  const [form, setForm] =
    useState<Award>({
      ...emptyAward,
    });

  const [message, setMessage] =
    useState("");

  const [error, setError] =
    useState("");

  /* =========================================================
     LOAD DATA
  ========================================================= */

  useEffect(() => {
    loadAwards();
  }, []);

  async function loadAwards() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "/api/admin/home/recognitions",
        {
          cache: "no-store",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error ||
            "Failed to load recognitions"
        );
      }

      setAwards(
        Array.isArray(data?.content?.awards)
          ? data.content.awards
          : []
      );
    } catch (error) {
      console.error(
        "Load recognitions error:",
        error
      );

      setError(
        error instanceof Error
          ? error.message
          : "Unable to load recognition data."
      );
    } finally {
      setLoading(false);
    }
  }

  /* =========================================================
     INPUT CHANGE
  ========================================================= */

  function handleChange<K extends keyof Award>(
    field: K,
    value: Award[K]
  ) {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  /* =========================================================
     GENERATE ID
  ========================================================= */

  function generateAwardId() {
    if (awards.length === 0) {
      return "01";
    }

    const numericIds = awards
      .map((award) => Number(award.id))
      .filter((id) => !Number.isNaN(id));

    const nextId =
      numericIds.length > 0
        ? Math.max(...numericIds) + 1
        : awards.length + 1;

    return String(nextId).padStart(2, "0");
  }

  /* =========================================================
     ADD NEW
  ========================================================= */

  function handleAddNew() {
    setEditingId(null);

    setForm({
      ...emptyAward,
      id: generateAwardId(),
    });

    setMessage("");
    setError("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  /* =========================================================
     EDIT
  ========================================================= */

  function handleEdit(award: Award) {
    setEditingId(award.id);

    setForm({
      ...award,
    });

    setMessage("");
    setError("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  /* =========================================================
     CANCEL EDIT
  ========================================================= */

  function handleCancel() {
    setEditingId(null);

    setForm({
      ...emptyAward,
    });

    setMessage("");
    setError("");
  }

  /* =========================================================
     SAVE / UPDATE
  ========================================================= */

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    try {
      setSaving(true);
      setError("");
      setMessage("");

      /* ---------------------------------------------
         VALIDATION
      --------------------------------------------- */

      if (
        !form.year.trim() ||
        !form.award.trim() ||
        !form.category.trim() ||
        !form.campaign.trim() ||
        !form.brand.trim()
      ) {
        setError(
          "Please fill all required fields."
        );

        setSaving(false);

        return;
      }

      /* ---------------------------------------------
         CREATE UPDATED ARRAY
      --------------------------------------------- */

      const updatedAwards = editingId
        ? awards.map((award) =>
            award.id === editingId
              ? {
                  ...form,
                  id: editingId,
                }
              : award
          )
        : [
            ...awards,
            {
              ...form,
              id:
                form.id ||
                generateAwardId(),
            },
          ];

      /* ---------------------------------------------
         SAVE TO API
      --------------------------------------------- */

      const response = await fetch(
        "/api/admin/home/recognitions",
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            content: {
              awards: updatedAwards,
            },
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error ||
            "Failed to save recognitions"
        );
      }

      /* ---------------------------------------------
         UPDATE LOCAL STATE
      --------------------------------------------- */

      setAwards(updatedAwards);

      setMessage(
        editingId
          ? "Recognition updated successfully."
          : "Recognition added successfully."
      );

      setEditingId(null);

      setForm({
        ...emptyAward,
      });
    } catch (error) {
      console.error(
        "Save recognition error:",
        error
      );

      setError(
        error instanceof Error
          ? error.message
          : "Unable to save recognition."
      );
    } finally {
      setSaving(false);
    }
  }

  /* =========================================================
     DELETE
  ========================================================= */

  async function handleDelete(id: string) {
    const confirmed =
      window.confirm(
        "Are you sure you want to delete this recognition?"
      );

    if (!confirmed) {
      return;
    }

    try {
      setError("");
      setMessage("");

      const updatedAwards =
        awards.filter(
          (award) => award.id !== id
        );

      const response = await fetch(
        "/api/admin/home/recognitions",
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            content: {
              awards: updatedAwards,
            },
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error ||
            "Failed to delete recognition"
        );
      }

      setAwards(updatedAwards);

      if (editingId === id) {
        setEditingId(null);

        setForm({
          ...emptyAward,
        });
      }

      setMessage(
        "Recognition deleted successfully."
      );
    } catch (error) {
      console.error(
        "Delete recognition error:",
        error
      );

      setError(
        error instanceof Error
          ? error.message
          : "Unable to delete recognition."
      );
    }
  }

  /* =========================================================
     LOADING
  ========================================================= */

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center bg-[#030609]">
        <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30">
          Loading Recognitions...
        </div>
      </div>
    );
  }

  /* =========================================================
     UI
  ========================================================= */

  return (
    <div className="min-h-screen bg-[#030609] text-white">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="border-b border-white/[0.08]">
        <div className="mx-auto max-w-[1600px] px-6 py-7 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            {/* LEFT */}

            <div>
              <div className="mb-3 flex items-center gap-3">
                <Link
                  href="/admin/home"
                  className="flex h-8 w-8 items-center justify-center border border-white/10 text-white/40 transition hover:border-[#0976b2] hover:text-[#0976b2]"
                >
                  <ArrowLeft size={14} />
                </Link>

                <span className="h-px w-8 bg-[#0976b2]" />

                <span className="text-[8px] font-bold uppercase tracking-[0.35em] text-white/30">
                  Home / Recognitions
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Trophy
                  size={20}
                  strokeWidth={1.5}
                  className="text-[#0976b2]"
                />

                <h1 className="text-2xl font-black uppercase tracking-[-0.04em] sm:text-3xl">
                  Recognitions
                </h1>
              </div>

              <p className="mt-2 max-w-xl text-xs leading-5 text-white/35">
                Manage awards, campaigns and
                recognition content displayed on
                the WTT website.
              </p>
            </div>

            {/* ADD */}

            <button
              type="button"
              onClick={handleAddNew}
              className="inline-flex h-11 items-center justify-center gap-2 bg-[#0976b2] px-5 text-[8px] font-bold uppercase tracking-[0.25em] text-white transition hover:bg-[#08699f]"
            >
              <Plus size={14} />

              Add Recognition
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="mx-auto max-w-[1600px] px-6 py-8 sm:px-8 lg:px-10">
        {/* ===================================================
            MESSAGE
        =================================================== */}

        {message && (
          <div className="mb-6 border border-[#0976b2]/30 bg-[#0976b2]/10 px-4 py-3 text-[8px] font-bold uppercase tracking-[0.2em] text-[#55b9eb]">
            {message}
          </div>
        )}

        {error && (
          <div className="mb-6 border border-red-500/20 bg-red-500/5 px-4 py-3 text-[8px] font-bold uppercase tracking-[0.2em] text-red-400">
            {error}
          </div>
        )}

        {/* ===================================================
            EDITOR
        =================================================== */}

        <form
          onSubmit={handleSubmit}
          className="mb-10 border border-white/[0.08] bg-[#080b0f]"
        >
          {/* FORM HEADER */}

          <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-5 sm:px-7">
            <div>
              <p className="text-[7px] font-bold uppercase tracking-[0.35em] text-[#0976b2]">
                {editingId
                  ? "Edit Recognition"
                  : "New Recognition"}
              </p>

              <h2 className="mt-2 text-lg font-black uppercase tracking-[-0.03em]">
                {editingId
                  ? `Recognition ${editingId}`
                  : "Add Award"}
              </h2>
            </div>

            {editingId && (
              <button
                type="button"
                onClick={handleCancel}
                className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.2em] text-white/30 transition hover:text-white"
              >
                <X size={13} />

                Cancel
              </button>
            )}
          </div>

          {/* FORM BODY */}

          <div className="grid gap-8 p-5 sm:p-7 lg:grid-cols-[1fr_360px]">
            {/* =================================================
                LEFT
            ================================================= */}

            <div className="space-y-7">
              {/* ROW 01 */}

              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Year"
                  required
                  value={form.year}
                  placeholder="2025"
                  onChange={(value) =>
                    handleChange(
                      "year",
                      value
                    )
                  }
                />

                <Field
                  label="Award"
                  required
                  value={form.award}
                  placeholder="e4m Maverick Awards"
                  onChange={(value) =>
                    handleChange(
                      "award",
                      value
                    )
                  }
                />
              </div>

              {/* CATEGORY */}

              <Field
                label="Category"
                required
                value={form.category}
                placeholder="Best Product Launch — Offline"
                onChange={(value) =>
                  handleChange(
                    "category",
                    value
                  )
                }
              />

              {/* CAMPAIGN / BRAND */}

              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Campaign"
                  required
                  value={form.campaign}
                  placeholder="Cook Like a Pro"
                  onChange={(value) =>
                    handleChange(
                      "campaign",
                      value
                    )
                  }
                />

                <Field
                  label="Brand"
                  required
                  value={form.brand}
                  placeholder="Milton ProCook"
                  onChange={(value) =>
                    handleChange(
                      "brand",
                      value
                    )
                  }
                />
              </div>

              {/* METAL */}

              <div>
                <label className="mb-2 block text-[7px] font-bold uppercase tracking-[0.3em] text-white/35">
                  Recognition Level
                </label>

                <div className="grid grid-cols-3 gap-2">
                  {(
                    [
                      "GOLD",
                      "SILVER",
                      "BRONZE",
                    ] as const
                  ).map((metal) => (
                    <button
                      key={metal}
                      type="button"
                      onClick={() =>
                        handleChange(
                          "metal",
                          metal
                        )
                      }
                      className={`h-11 border text-[8px] font-bold uppercase tracking-[0.2em] transition ${
                        form.metal === metal
                          ? "border-[#0976b2] bg-[#0976b2]/15 text-[#55b9eb]"
                          : "border-white/[0.08] bg-white/[0.02] text-white/30 hover:border-white/20 hover:text-white/60"
                      }`}
                    >
                      {metal}
                    </button>
                  ))}
                </div>
              </div>

              {/* DESCRIPTION */}

              <div>
                <label className="mb-2 block text-[7px] font-bold uppercase tracking-[0.3em] text-white/35">
                  Description
                </label>

                <textarea
                  value={form.description}
                  onChange={(event) =>
                    handleChange(
                      "description",
                      event.target.value
                    )
                  }
                  rows={6}
                  placeholder="Describe the campaign and recognition..."
                  className="w-full resize-none border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-xs leading-6 text-white outline-none transition placeholder:text-white/15 focus:border-[#0976b2]"
                />
              </div>
            </div>

            {/* =================================================
                RIGHT — IMAGE
            ================================================= */}

            <div>
              <ImageUpload
                value={form.image}
                onChange={(value) =>
                  handleChange(
                    "image",
                    value
                  )
                }
                folder="awards"
                label="Award Image"
                recommendedText="PNG, JPG or WEBP. Recommended landscape image for award cards."
                aspectClassName="aspect-[1.25/1]"
              />
            </div>
          </div>

          {/* ===================================================
              SAVE BAR
          =================================================== */}

          <div className="flex flex-col gap-3 border-t border-white/[0.08] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <p className="text-[7px] uppercase tracking-[0.25em] text-white/20">
              Changes will be saved to MongoDB.
            </p>

            <button
              type="submit"
              disabled={saving}
              className="inline-flex h-11 items-center justify-center gap-2 bg-[#0976b2] px-6 text-[8px] font-bold uppercase tracking-[0.25em] text-white transition hover:bg-[#08699f] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Save size={14} />

              {saving
                ? "Saving..."
                : editingId
                  ? "Update Recognition"
                  : "Save Recognition"}
            </button>
          </div>
        </form>

        {/* ===================================================
            EXISTING AWARDS
        =================================================== */}

        <div>
          {/* SECTION HEADER */}

          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-[7px] font-bold uppercase tracking-[0.35em] text-[#0976b2]">
                Recognition Archive
              </p>

              <h2 className="mt-2 text-xl font-black uppercase tracking-[-0.04em]">
                Existing Awards
              </h2>
            </div>

            <span className="font-mono text-[9px] text-white/25">
              {String(
                awards.length
              ).padStart(2, "0")}{" "}
              ITEMS
            </span>
          </div>

          {/* EMPTY */}

          {awards.length === 0 ? (
            <div className="border border-dashed border-white/10 px-5 py-16 text-center">
              <Trophy
                size={25}
                strokeWidth={1}
                className="mx-auto text-white/15"
              />

              <p className="mt-4 text-[8px] font-bold uppercase tracking-[0.3em] text-white/25">
                No recognitions added yet
              </p>
            </div>
          ) : (
            /* AWARD GRID */

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {awards.map((award) => (
                <article
                  key={award.id}
                  className="group overflow-hidden border border-white/[0.08] bg-[#080b0f] transition hover:border-white/15"
                >
                  {/* IMAGE */}

                  <div className="relative aspect-[1.25/1] overflow-hidden bg-black">
                    {award.image ? (
                      <img
                        src={award.image}
                        alt={
                          award.campaign ||
                          "Award image"
                        }
                        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <ImagePlus
                          size={25}
                          strokeWidth={1}
                          className="text-white/15"
                        />
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* ID */}

                    <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-md">
                      <span className="font-mono text-[8px] text-white">
                        {award.id}
                      </span>
                    </div>

                    {/* METAL */}

                    <div className="absolute bottom-4 left-4">
                      <span className="text-[7px] font-bold uppercase tracking-[0.25em] text-[#55b9eb]">
                        {award.metal}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[7px] font-bold uppercase tracking-[0.25em] text-[#0976b2]">
                          {award.year}
                        </p>

                        <h3 className="mt-2 text-lg font-black leading-[0.9] tracking-[-0.04em]">
                          {award.campaign}

                          <span className="text-[#0976b2]">
                            .
                          </span>
                        </h3>
                      </div>
                    </div>

                    <p className="mt-3 text-[8px] uppercase tracking-[0.18em] text-white/30">
                      {award.brand}
                    </p>

                    <p className="mt-3 line-clamp-2 text-[10px] leading-5 text-white/30">
                      {award.category}
                    </p>

                    {/* ACTIONS */}

                    <div className="mt-5 flex gap-2 border-t border-white/[0.07] pt-4">
                      <button
                        type="button"
                        onClick={() =>
                          handleEdit(
                            award
                          )
                        }
                        className="flex h-9 flex-1 items-center justify-center gap-2 border border-white/[0.08] text-[7px] font-bold uppercase tracking-[0.2em] text-white/40 transition hover:border-[#0976b2] hover:text-[#55b9eb]"
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          handleDelete(
                            award.id
                          )
                        }
                        className="flex h-9 w-10 items-center justify-center border border-white/[0.08] text-white/25 transition hover:border-red-500/40 hover:text-red-400"
                      >
                        <Trash2
                          size={13}
                        />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   FIELD
========================================================= */

function Field({
  label,
  value,
  placeholder,
  required,
  onChange,
}: {
  label: string;
  value: string;
  placeholder?: string;
  required?: boolean;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-[7px] font-bold uppercase tracking-[0.3em] text-white/35">
        {label}

        {required && (
          <span className="ml-1 text-[#0976b2]">
            *
          </span>
        )}
      </label>

      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(event) =>
          onChange(
            event.target.value
          )
        }
        className="h-11 w-full border border-white/[0.08] bg-white/[0.02] px-4 text-xs text-white outline-none transition placeholder:text-white/15 focus:border-[#0976b2]"
      />
    </div>
  );
}