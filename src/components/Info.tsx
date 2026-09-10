function Info({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2">
      <span className="text-blue-600">{icon}</span>
      <span>{children}</span>
    </div>
  )
}

export default Info
