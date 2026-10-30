interface FormInputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
  }
  
  export default function FormInput({
    label,
    value,
    onChange,
    placeholder,
  }: FormInputProps) {
    return (
      <div>
        <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500">
          {label}
        </label>
  
        <input
          value={value}
          onChange={(event) =>
            onChange(event.target.value)
          }
          placeholder={placeholder}
          className="h-12 w-full border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition focus:border-[#0976b2] focus:ring-2 focus:ring-[#0976b2]/10"
        />
      </div>
    );
  }