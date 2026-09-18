type FieldProps = {
  label: string
  placeholder: string
  name: string
  type?: string
  textarea?: boolean
  required?: boolean
  pattern?: string
  inputMode?: 'text' | 'email' | 'tel' | 'numeric'
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onInput?: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  error?: string
}

function Field({ label, placeholder, name, type = 'text', textarea = false, required = false, pattern, inputMode, onChange, onInput, error }: FieldProps) {
  return (
    <label className="mb-2 block text-[10px] font-medium text-slate-700">
      {label}
      {textarea ? (
        <textarea
          name={name}
          rows={3}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          onInput={onInput}
          className="mt-1 block w-full resize-none rounded border border-slate-200 px-2 py-1.5 text-[10px] font-normal outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          pattern={pattern}
          inputMode={inputMode}
          onChange={onChange}
          onInput={onInput}
          className="mt-1 block w-full rounded border border-slate-200 px-2 py-1.5 text-[10px] font-normal outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
        />
      )}
      {error && <span className="mt-1 block font-normal text-red-600">{error}</span>}
    </label>
  )
}

export default Field
