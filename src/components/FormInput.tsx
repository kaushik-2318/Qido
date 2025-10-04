import type { FormInputProps } from "@/lib/types";

export function FormInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
  min,
  max,
  disabled,
}: FormInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-300">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder}
        required={required}
        min={min}
        max={max}
        disabled={disabled}
        autoComplete="off"
        className={`w-full rounded-xl border border-gray-700 bg-gray-800/50 px-4 py-3 text-white placeholder-gray-500 transition-all duration-300 focus:border-cyan-500/50 focus:bg-gray-800/50 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-700 ${
          type === "color" ? "h-12 cursor-pointer" : ""
        }`}
      />
    </div>
  );
}
