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

interface WhyWttItem {
  id: string;
  number: string;
  title: string;
  description: string;
  enabled: boolean;
}

interface WhyWttContent {
  eyebrow: string;
  meta: string;
  smallEyebrow: string;
  headline: string[];
  paragraphs: string[];
  items: WhyWttItem[];
}

const defaultData: WhyWttContent = {
  eyebrow: "WHY WTT",
  meta: "OUR PHILOSOPHY",
  smallEyebrow: "THE WTT PHILOSOPHY",
  headline: ["INTENT.", "PEOPLE."],
  paragraphs: [],
  items: [],
};

export default function WhyWttForm() {
  const [data, setData] =
    useState<WhyWttContent>(defaultData);

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
          "/api/admin/home/why-wtt",
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
    field: keyof WhyWttContent,
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

  const updateParagraph = (
    index: number,
    value: string
  ) => {
    const paragraphs = [...data.paragraphs];

    paragraphs[index] = value;

    updateField("paragraphs", paragraphs);
  };

  const addParagraph = () => {
    updateField("paragraphs", [
      ...data.paragraphs,
      "",
    ]);
  };

  const removeParagraph = (
    index: number
  ) => {
    updateField(
      "paragraphs",
      data.paragraphs.filter(
        (_, i) => i !== index
      )
    );
  };

  const updateItem = (
    index: number,
    field: keyof WhyWttItem,
    value: any
  ) => {
    const items = [...data.items];

    items[index] = {
      ...items[index],
      [field]: value,
    };

    updateField("items", items);
  };

  const addItem = () => {
    const item: WhyWttItem = {
      id: crypto.randomUUID(),
      number: String(
        data.items.length + 1
      ).padStart(2, "0"),
      title: "",
      description: "",
      enabled: true,
    };

    updateField("items", [
      ...data.items,
      item,
    ]);
  };

  const removeItem = (
    index: number
  ) => {
    const items = data.items.filter(
      (_, i) => i !== index
    );

    updateField(
      "items",
      items.map((item, i) => ({
        ...item,
        number: String(i + 1).padStart(
          2,
          "0"
        ),
      }))
    );
  };

  const moveItem = (
    index: number,
    direction: "up" | "down"
  ) => {
    const items = [...data.items];

    const target =
      direction === "up"
        ? index - 1
        : index + 1;

    if (
      target < 0 ||
      target >= items.length
    ) {
      return;
    }

    [
      items[index],
      items[target],
    ] = [
      items[target],
      items[index],
    ];

    updateField(
      "items",
      items.map((item, i) => ({
        ...item,
        number: String(i + 1).padStart(
          2,
          "0"
        ),
      }))
    );
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      setMessage("");

      const response = await fetch(
        "/api/admin/home/why-wtt",
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
        "Why WTT saved successfully."
      );
    } catch (error) {
      console.error(error);

      setMessage(
        "Failed to save Why WTT."
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
            HOME / WHY WTT
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-[#08090a]">
            Why WTT
          </h1>

          <p className="mt-2 text-sm leading-6 text-black/45">
            Manage Why WTT content.
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

        <div className="grid gap-6 p-6 md:grid-cols-2">

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

          <div className="md:col-span-2">
            <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">
              Small Eyebrow
            </label>

            <input
              value={data.smallEyebrow}
              onChange={(e) =>
                updateField(
                  "smallEyebrow",
                  e.target.value
                )
              }
              className="h-12 w-full border border-black/10 bg-[#fafafa] px-4 text-sm outline-none focus:border-[#0976b2]"
            />
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

        <div className="flex items-center justify-between border-b border-black/10 px-6 py-5">

          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/35">
            Philosophy Content
          </p>

          <button
            type="button"
            onClick={addParagraph}
            className="inline-flex h-9 items-center gap-2 border border-black/10 px-3 text-[9px] font-bold uppercase tracking-[0.15em] hover:border-[#0976b2] hover:text-[#0976b2]"
          >
            <Plus size={14} />
            Add Paragraph
          </button>

        </div>

        <div className="space-y-5 p-6">

          {data.paragraphs.map(
            (paragraph, index) => (
              <div key={index}>

                <div className="mb-2 flex items-center justify-between">

                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/30">
                    Paragraph{" "}
                    {String(
                      index + 1
                    ).padStart(2, "0")}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      removeParagraph(
                        index
                      )
                    }
                    className="text-black/25 hover:text-red-500"
                  >
                    <Trash2 size={15} />
                  </button>

                </div>

                <textarea
                  value={paragraph}
                  onChange={(e) =>
                    updateParagraph(
                      index,
                      e.target.value
                    )
                  }
                  rows={5}
                  className="w-full resize-y border border-black/10 bg-[#fafafa] p-4 text-sm leading-6 outline-none focus:border-[#0976b2]"
                />

              </div>
            )
          )}

        </div>
      </section>

      <section className="border border-black/10 bg-white">

        <div className="flex items-center justify-between border-b border-black/10 px-6 py-5">

          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/35">
            Philosophy Items
          </p>

          <button
            type="button"
            onClick={addItem}
            className="inline-flex h-9 items-center gap-2 bg-[#0976b2] px-3 text-[9px] font-bold uppercase tracking-[0.15em] text-white hover:bg-[#08699f]"
          >
            <Plus size={14} />
            Add Item
          </button>

        </div>

        <div className="divide-y divide-black/10">

          {data.items.map(
            (item, index) => (
              <div
                key={item.id}
                className="p-6"
              >

                <div className="mb-5 flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <GripVertical
                      size={16}
                      className="text-black/20"
                    />

                    <div className="flex h-9 w-9 items-center justify-center bg-black text-[9px] font-bold text-white">
                      {item.number}
                    </div>

                  </div>

                  <div className="flex items-center gap-1">

                    <button
                      type="button"
                      disabled={
                        index === 0
                      }
                      onClick={() =>
                        moveItem(
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
                        data.items.length -
                          1
                      }
                      onClick={() =>
                        moveItem(
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
                        removeItem(
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
                      Number
                    </label>

                    <input
                      value={item.number}
                      onChange={(e) =>
                        updateItem(
                          index,
                          "number",
                          e.target.value
                        )
                      }
                      className="h-11 w-full border border-black/10 bg-[#fafafa] px-3 text-sm outline-none focus:border-[#0976b2]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">
                      Title
                    </label>

                    <input
                      value={item.title}
                      onChange={(e) =>
                        updateItem(
                          index,
                          "title",
                          e.target.value
                        )
                      }
                      className="h-11 w-full border border-black/10 bg-[#fafafa] px-3 text-sm font-semibold uppercase outline-none focus:border-[#0976b2]"
                    />
                  </div>

                  <div className="md:col-span-2">

                    <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">
                      Description
                    </label>

                    <textarea
                      value={
                        item.description
                      }
                      onChange={(e) =>
                        updateItem(
                          index,
                          "description",
                          e.target.value
                        )
                      }
                      rows={4}
                      className="w-full resize-y border border-black/10 bg-[#fafafa] p-3 text-sm leading-6 outline-none focus:border-[#0976b2]"
                    />

                  </div>

                </div>

              </div>
            )
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
            : "Save Why WTT"}
        </button>

      </div>

    </div>
  );
}