interface SectionHeaderProps {
    eyebrow: string;
    title: string;
    description: string;
  }
  
  export default function SectionHeader({
    eyebrow,
    title,
    description,
  }: SectionHeaderProps) {
    return (
      <div className="mb-10">
  
        <div className="flex items-center gap-3">
  
          <span className="h-px w-8 bg-[#0976b2]" />
  
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#0976b2]">
            {eyebrow}
          </span>
  
        </div>
  
        <h1 className="mt-4 text-4xl font-black uppercase tracking-[-0.04em] text-[#080a0d] sm:text-5xl">
          {title}
          <span className="text-[#0976b2]">.</span>
        </h1>
  
        <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-500">
          {description}
        </p>
  
      </div>
    );
  }