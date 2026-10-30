"use client";

import { useEffect, useState } from "react";
import {
  Plus,
  Trash2,
  Save,
  GripVertical,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

interface Brand {
  id: string;
  name: string;
  category: string;
  logoUrl: string;
  enabled: boolean;
}

interface BrandsContent {
  eyebrow: string;
  meta: string;
  headline: string[];
  description: string;
  brands: Brand[];
}

const defaultData: BrandsContent = {
  eyebrow: "OUR CLIENTS",
  meta: "50+ BRANDS",
  headline: [
    "BRANDS THAT",
    "BELIEVE IN US",
  ],
  description: "",
  brands: [],
};

export default function BrandsForm() {
  const [data, setData] =
    useState<BrandsContent>(defaultData);

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [message, setMessage] =
    useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(
          "/api/admin/home/brands",
          {
            cache: "no-store",
          }
        );

        if (!response.ok) return;

        const result = await response.json();

        if (result?.content) {
          setData(result.content);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const updateField = (
    field: keyof BrandsContent,
    value: any
  ) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateHeadline = (
    index: number,
    value: string
  ) => {
    const headline = [...data.headline];

    headline[index] = value;

    updateField("headline", headline);
  };

  const updateBrand = (
    index: number,
    field: keyof Brand,
    value: any
  ) => {
    const brands = [...data.brands];

    brands[index] = {
      ...brands[index],
      [field]: value,
    };

    updateField("brands", brands);
  };

  const addBrand = () => {
    const brand: Brand = {
      id: crypto.randomUUID(),
      name: "",
      category: "",
      logoUrl: "",
      enabled: true,
    };

    updateField("brands", [
      ...data.brands,
      brand,
    ]);
  };

  const removeBrand = (
    index: number
  ) => {
    updateField(
      "brands",
      data.brands.filter(
        (_, i) => i !== index
      )
    );
  };

  const moveBrand = (
    index: number,
    direction: "up" | "down"
  ) => {
    const brands = [...data.brands];

    const target =
      direction === "up"
        ? index - 1
        : index + 1;

    if (
      target < 0 ||
      target >= brands.length
    ) {
      return;
    }

    [
      brands[index],
      brands[target],
    ] = [
      brands[target],
      brands[index],
    ];

    updateField("brands", brands);
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      setMessage("");

      const response = await fetch(
        "/api/admin/home/brands",
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            content: data,
            enabled: true,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to save"
        );
      }

      setMessage(
        "Brands saved successfully."
      );
    } catch (error) {
      console.error(error);

      setMessage(
        "Failed to save Brands."
      );
    } finally {
      setSaving(false);

      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/30">
          Loading...
        </span>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div className="flex flex-col gap-5 border-b border-black/10 pb-6 sm:flex-row sm:items-end sm:justify-between">

        <div>
          <div className="mb-2 text-[9px] font-bold uppercase tracking-[0.3em] text-[#0976b2]">
            HOME / BRANDS
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-[#08090a]">
            Brands
          </h1>

          <p className="mt-2 text-sm leading-6 text-black/45">
            Manage homepage brands.
          </p>
        </div>

        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="inline-flex h-11 items-center justify-center gap-2 bg-[#0976b2] px-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#08699f] disabled:opacity-50"
        >
          <Save size={15} />

          {saving
            ? "Saving..."
            : "Save Changes"}
        </button>

      </div>

      {message && (
        <div className="border border-[#0976b2]/20 bg-[#0976b2]/5 px-4 py-3 text-[11px] text-[#0976b2]">
          {message}
        </div>
      )}

      <section className="border border-black/10 bg-white">

        <div className="border-b border-black/10 px-6 py-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/35">
            Section Content
          </p>
        </div>

        <div className="space-y-6 p-6">

          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">
                Eyebrow
              </label>

              <input
                value={data.eyebrow}
                onChange={(e) =>
                  updateField(
                    "eyebrow",
                    e.target.value
                  )
                }
                className="h-12 w-full border border-black/10 bg-[#fafafa] px-4 text-sm outline-none focus:border-[#0976b2]"
              />
            </div>

            <div>
              <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">
                Meta
              </label>

              <input
                value={data.meta}
                onChange={(e) =>
                  updateField(
                    "meta",
                    e.target.value
                  )
                }
                className="h-12 w-full border border-black/10 bg-[#fafafa] px-4 text-sm outline-none focus:border-[#0976b2]"
              />
            </div>

          </div>

        </div>
      </section>

      <section className="border border-black/10 bg-white">

        <div className="border-b border-black/10 px-6 py-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/35">
            Main Headline
          </p>
        </div>

        <div className="space-y-4 p-6">

          {data.headline.map(
            (line, index) => (
              <div
                key={index}
                className="flex items-center gap-3"
              >

                <div className="flex h-10 w-10 items-center justify-center bg-black text-[9px] font-bold text-white">
                  {String(
                    index + 1
                  ).padStart(2, "0")}
                </div>

                <input
                  value={line}
                  onChange={(e) =>
                    updateHeadline(
                      index,
                      e.target.value
                    )
                  }
                  className="h-12 flex-1 border border-black/10 bg-[#fafafa] px-4 text-lg font-semibold uppercase outline-none focus:border-[#0976b2]"
                />

              </div>
            )
          )}

        </div>
      </section>

      <section className="border border-black/10 bg-white">

        <div className="border-b border-black/10 px-6 py-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/35">
            Description
          </p>
        </div>

        <div className="p-6">

          <textarea
            value={data.description}
            onChange={(e) =>
              updateField(
                "description",
                e.target.value
              )
            }
            rows={6}
            className="w-full resize-y border border-black/10 bg-[#fafafa] p-4 text-sm leading-6 outline-none focus:border-[#0976b2]"
          />

        </div>

      </section>

      <section className="border border-black/10 bg-white">

        <div className="flex items-center justify-between border-b border-black/10 px-6 py-5">

          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/35">
            Brands
          </p>

          <button
            type="button"
            onClick={addBrand}
            className="inline-flex h-9 items-center gap-2 bg-[#0976b2] px-3 text-[9px] font-bold uppercase tracking-[0.15em] text-white hover:bg-[#08699f]"
          >
            <Plus size={14} />
            Add Brand
          </button>

        </div>

        <div className="divide-y divide-black/10">

          {data.brands.map(
            (brand, index) => (
              <div
                key={brand.id}
                className="p-6"
              >

                <div className="mb-5 flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <GripVertical
                      size={16}
                      className="text-black/20"
                    />

                    <div className="flex h-9 w-9 items-center justify-center bg-black text-[9px] font-bold text-white">
                      {String(
                        index + 1
                      ).padStart(2, "0")}
                    </div>

                  </div>

                  <div className="flex items-center gap-1">

                    <button
                      type="button"
                      disabled={
                        index === 0
                      }
                      onClick={() =>
                        moveBrand(
                          index,
                          "up"
                        )
                      }
                      className="flex h-8 w-8 items-center justify-center border border-black/10 disabled:opacity-20"
                    >
                      <ChevronUp size={15} />
                    </button>

                    <button
                      type="button"
                      disabled={
                        index ===
                        data.brands.length -
                          1
                      }
                      onClick={() =>
                        moveBrand(
                          index,
                          "down"
                        )
                      }
                      className="flex h-8 w-8 items-center justify-center border border-black/10 disabled:opacity-20"
                    >
                      <ChevronDown size={15} />
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        removeBrand(
                          index
                        )
                      }
                      className="ml-2 flex h-8 w-8 items-center justify-center border border-black/10 text-black/30 hover:border-red-300 hover:text-red-500"
                    >
                      <Trash2 size={14} />
                    </button>

                  </div>

                </div>

                <div className="grid gap-5 md:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">
                      Brand Name
                    </label>

                    <input
                      value={brand.name}
                      onChange={(e) =>
                        updateBrand(
                          index,
                          "name",
                          e.target.value
                        )
                      }
                      className="h-11 w-full border border-black/10 bg-[#fafafa] px-3 text-sm font-semibold uppercase outline-none focus:border-[#0976b2]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">
                      Category
                    </label>

                    <input
                      value={
                        brand.category
                      }
                      onChange={(e) =>
                        updateBrand(
                          index,
                          "category",
                          e.target.value
                        )
                      }
                      className="h-11 w-full border border-black/10 bg-[#fafafa] px-3 text-sm outline-none focus:border-[#0976b2]"
                    />
                  </div>

                  <div className="md:col-span-2">

                    <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">
                      Logo URL
                    </label>

                    <input
                      value={
                        brand.logoUrl
                      }
                      onChange={(e) =>
                        updateBrand(
                          index,
                          "logoUrl",
                          e.target.value
                        )
                      }
                      placeholder="/images/clients/logo.png"
                      className="h-11 w-full border border-black/10 bg-[#fafafa] px-3 text-sm outline-none focus:border-[#0976b2]"
                    />

                  </div>

                </div>

              </div>
            )
          )}

          {data.brands.length ===
            0 && (
            <div className="px-6 py-16 text-center">

              <p className="text-sm text-black/35">
                No brands added.
              </p>

              <button
                type="button"
                onClick={addBrand}
                className="mt-4 text-[9px] font-bold uppercase tracking-[0.2em] text-[#0976b2]"
              >
                + Add Brand
              </button>

            </div>
          )}

        </div>
      </section>

      <div className="flex justify-end border-t border-black/10 pt-6">

        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="inline-flex h-12 items-center gap-2 bg-[#0976b2] px-7 text-[10px] font-bold uppercase tracking-[0.2em] text-white disabled:opacity-50"
        >
          <Save size={15} />

          {saving
            ? "Saving..."
            : "Save Brands"}
        </button>

      </div>

    </div>
  );
}