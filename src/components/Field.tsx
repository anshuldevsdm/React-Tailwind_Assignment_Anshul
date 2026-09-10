type FieldProps = {
  label: string
  placeholder: string
  type?: string
  textarea?: boolean
  required?: boolean
}

function Field({ label, placeholder, type = 'text', textarea = false, required = false }: FieldProps) {
  return (
    <label className="mb-2 block text-[10px] font-medium text-slate-700">
      {label}
      {textarea ? (
        <textarea
          rows={3}
          placeholder={placeholder}
          required={required}
          className="mt-1 block w-full resize-none rounded border border-slate-200 px-2 py-1.5 text-[10px] font-normal outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          required={required}
          className="mt-1 block w-full rounded border border-slate-200 px-2 py-1.5 text-[10px] font-normal outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100"
        />
      )}
    </label>
  )
}

export default Field
