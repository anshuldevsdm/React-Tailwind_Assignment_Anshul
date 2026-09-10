function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="relative mb-6 w-fit pb-2 text-xl font-bold text-slate-800 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-6 after:bg-blue-600">
      {children}
    </h2>
  )
}

export default SectionTitle
