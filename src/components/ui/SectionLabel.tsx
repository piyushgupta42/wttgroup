interface SectionLabelProps {
    number: string;
    label: string;
    light?: boolean;
  }
  
  export default function SectionLabel({
    number,
    label,
    light = false,
  }: SectionLabelProps) {
    return (
      <div
        className={`flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em] ${
          light ? "text-white/50" : "text-black/40"
        }`}
      >
        <span
          className={`font-semibold ${
            light ? "text-[#007aff]" : "text-[#007aff]"
          }`}
        >
          {number}
        </span>
  
        <span
          className={`h-px w-8 ${
            light ? "bg-white/20" : "bg-black/20"
          }`}
        />
  
        <span>{label}</span>
      </div>
    );
  }