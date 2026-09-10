import type { LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

type ServiceCardProps = {
  icon: LucideIcon
  title: string
  description: string
  tone: string
}

function ServiceCard({ icon: Icon, title, description, tone }: ServiceCardProps) {
  return (
    <article className="rounded-md bg-white p-4 shadow-sm">
      <span className={`mb-3 flex h-10 w-10 items-center justify-center rounded-full ${tone}`}>
        <Icon size={21} />
      </span>
      <h3 className="text-sm font-bold text-slate-800">{title}</h3>
      <p className="mt-1 text-xs leading-relaxed text-slate-600">{description}</p>
      <Link to="/contact" className="mt-3 inline-block text-xs font-medium text-blue-600 hover:text-blue-700">
        Get Started
      </Link>
    </article>
  )
}

export default ServiceCard
