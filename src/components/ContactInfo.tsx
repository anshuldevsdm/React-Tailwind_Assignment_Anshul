import type { LucideIcon } from 'lucide-react'

type ContactInfoProps = {
  details: Array<{ icon: LucideIcon; text: string }>
}

function ContactInfo({ details }: ContactInfoProps) {
  return (
    <div className="space-y-3 text-xs text-slate-600">
      {details.map(({ icon: Icon, text }) => (
        <div key={text} className="flex items-center gap-3">
          <Icon size={16} className="text-blue-600" />
          {text}
        </div>
      ))}
    </div>
  )
}

export default ContactInfo
