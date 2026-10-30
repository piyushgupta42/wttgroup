"use client";

import {
  FormEvent,
  useEffect,
  useState,
} from "react";

import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Check,
  Mail,
  X,
} from "lucide-react";

interface ContactFormProps {
  onClose: () => void;
}

export default function ContactForm({
  onClose,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState<
    Record<string, string>
  >({});

  /* =====================================================
     LOCK BACKGROUND
  ===================================================== */

  useEffect(() => {
    const scrollY = window.scrollY;

    const previous = {
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
      overflow: document.body.style.overflow,
    };

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.position = previous.position;
      document.body.style.top = previous.top;
      document.body.style.width = previous.width;
      document.body.style.overflow = previous.overflow;

      window.scrollTo(0, scrollY);
    };
  }, []);

  /* =====================================================
     ESCAPE KEY
  ===================================================== */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [onClose]);

  /* =====================================================
     VALIDATION
  ===================================================== */

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    if (!form.name.trim()) {
      nextErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (
      !/^\S+@\S+\.\S+$/.test(form.email)
    ) {
      nextErrors.email = "Enter a valid email";
    }

    if (!form.mobile.trim()) {
      nextErrors.mobile = "Mobile number is required";
    }

    if (!form.message.trim()) {
      nextErrors.message =
        "Please tell us about your project";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (
    event: FormEvent
  ) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    // UI ONLY
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      className="fixed inset-0 z-[9999] bg-[#050509]"
    >

      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#007aff]/10 blur-[130px]" />

      </div>

      {/* =================================================
          HEADER
      ================================================= */}

      <header className="absolute left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-5 md:px-10">

        <div className="flex items-center gap-3">

          <span className="h-2 w-2 rounded-full bg-[#007aff]" />

          <span className="text-[9px] uppercase tracking-[0.35em] text-white/40">
            Start a project
          </span>

        </div>

        {/* CLOSE */}

        <button
          type="button"
          onClick={onClose}
          aria-label="Close contact form"
          className="
            group
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/[0.02]
            transition-all
            duration-300
            hover:border-[#007aff]
            hover:bg-[#007aff]
          "
        >
          <X
            size={18}
            className="transition-transform duration-300 group-hover:rotate-90"
          />
        </button>

      </header>

      {/* =================================================
          SCROLLABLE CONTENT
      ================================================= */}

      <div
        className="
          relative
          h-[100dvh]
          overflow-y-auto
          overscroll-contain
          px-6
          pb-[140px]
          pt-28
          md:px-10
          md:pt-32
        "
      >

        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

            {/* =================================================
                LEFT
            ================================================= */}

            <div>

              <p className="mb-7 text-[9px] uppercase tracking-[0.35em] text-[#007aff]">
                Tell us everything
              </p>

              <h2 className="text-[clamp(3.4rem,7vw,7.5rem)] font-semibold leading-[0.82] tracking-[-0.07em]">

                HAVE
                <br />

                AN IDEA
                <span className="text-[#007aff]">
                  ?
                </span>

              </h2>

              <p className="mt-9 max-w-sm text-sm leading-7 text-white/40">
                Great work starts with a conversation.
                Tell us what you want to build, change
                or communicate.
              </p>

              <a
                href="mailto:hello@wttgroup.in"
                className="mt-10 flex w-fit items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
              >
                <Mail
                  size={16}
                  className="text-[#007aff]"
                />

                hello@wttgroup.in
              </a>

            </div>

            {/* =================================================
                FORM
            ================================================= */}

            {!submitted ? (
              <motion.form
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                onSubmit={handleSubmit}
                className="w-full"
              >

                <FormField
                  number="01"
                  label="Your name"
                  value={form.name}
                  error={errors.name}
                  onChange={(value) =>
                    setForm({
                      ...form,
                      name: value,
                    })
                  }
                />

                <FormField
                  number="02"
                  label="Email address"
                  type="email"
                  value={form.email}
                  error={errors.email}
                  onChange={(value) =>
                    setForm({
                      ...form,
                      email: value,
                    })
                  }
                />

                <FormField
                  number="03"
                  label="Mobile number"
                  type="tel"
                  value={form.mobile}
                  error={errors.mobile}
                  onChange={(value) =>
                    setForm({
                      ...form,
                      mobile: value,
                    })
                  }
                />

                {/* MESSAGE */}

                <div className="mb-10">

                  <div className="mb-3 flex items-center gap-4">

                    <span className="text-[9px] tracking-[0.2em] text-white/20">
                      04
                    </span>

                    <label className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                      Project details
                    </label>

                  </div>

                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        message:
                          event.target.value,
                      })
                    }
                    placeholder="Tell us what you're working on..."
                    className="
                      w-full
                      resize-none
                      border-b
                      border-white/15
                      bg-transparent
                      py-4
                      text-base
                      text-white
                      outline-none
                      placeholder:text-white/20
                      focus:border-[#007aff]
                    "
                  />

                  {errors.message && (
                    <p className="mt-2 text-xs text-red-400">
                      {errors.message}
                    </p>
                  )}

                </div>

                {/* SEND */}

                <div className="pb-8">

                  <button
                    type="submit"
                    className="
                      group
                      flex
                      w-full
                      items-center
                      justify-between
                      border-t
                      border-white/10
                      pt-5
                    "
                  >

                    <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
                      Send enquiry
                    </span>

                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#007aff] transition-transform duration-300 group-hover:scale-110 md:h-16 md:w-16">
                      <ArrowUpRight size={20} />
                    </span>

                  </button>

                </div>

              </motion.form>
            ) : (

              /* SUCCESS */

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                className="flex min-h-[500px] flex-col justify-center"
              >

                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#007aff]">
                  <Check size={30} />
                </div>

                <h3 className="text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.85] tracking-[-0.06em]">

                  MESSAGE
                  <br />

                  RECEIVED
                  <span className="text-[#007aff]">
                    .
                  </span>

                </h3>

                <p className="mt-8 max-w-md text-sm leading-7 text-white/40">
                  Thanks for reaching out. Our team
                  will get back to you soon.
                </p>

                <button
                  type="button"
                  onClick={onClose}
                  className="mt-10 w-fit border-b border-[#007aff] pb-2 text-[10px] uppercase tracking-[0.25em]"
                >
                  Back to contact
                </button>

              </motion.div>
            )}

          </div>

        </div>

      </div>

    </motion.div>
  );
}

/* =========================================================
   FORM FIELD
========================================================= */

function FormField({
  number,
  label,
  value,
  error,
  onChange,
  type = "text",
}: {
  number: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <div className="mb-9">

      <div className="mb-3 flex items-center gap-4">

        <span className="text-[9px] tracking-[0.2em] text-white/20">
          {number}
        </span>

        <label className="text-[10px] uppercase tracking-[0.25em] text-white/40">
          {label}
        </label>

      </div>

      <input
        type={type}
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        placeholder={`Enter your ${label.toLowerCase()}`}
        className="
          w-full
          border-b
          border-white/15
          bg-transparent
          py-4
          text-base
          text-white
          outline-none
          placeholder:text-white/20
          focus:border-[#007aff]
          md:text-lg
        "
      />

      {error && (
        <p className="mt-2 text-xs text-red-400">
          {error}
        </p>
      )}

    </div>
  );
}