import { Check, Loader2 } from "lucide-react";

interface SaveButtonProps {
  loading: boolean;
}

export default function SaveButton({
  loading,
}: SaveButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="inline-flex h-12 items-center gap-3 bg-[#0976b2] px-7 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#075f91] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading ? (
        <>
          <Loader2
            size={15}
            className="animate-spin"
          />

          Saving
        </>
      ) : (
        <>
          <Check size={15} />

          Save Changes
        </>
      )}
    </button>
  );
}