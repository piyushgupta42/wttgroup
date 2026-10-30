interface FormTextareaProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    rows?: number;
  }
  
  export default function FormTextarea({
    label,
    value,
    onChange,
    rows = 5,
  }: FormTextareaProps) {
    return (
      <div>
        <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500">
          {label}
        </label>
  
        <textarea
          value={value}
          onChange={(event) =>
            onChange(event.target.value)
          }
          rows={rows}
          className="w-full resize-none border border-gray-200 bg-white px-4 py-4 text-sm leading-6 text-gray-900 outline-none transition focus:border-[#0976b2] focus:ring-2 focus:ring-[#0976b2]/10"
        />
      </div>
    );
  }