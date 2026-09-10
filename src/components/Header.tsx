import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Education', to: '/education' },
  { label: 'Contact', to: '/contact' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <NavLink to="/" className="text-xl font-bold tracking-tight text-slate-800">
          My<span className="text-blue-600">Portfolio</span>
        </NavLink>

        <nav className="hidden items-center gap-8 text-xs font-medium text-slate-700 sm:flex">
          {navigation.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `transition-colors hover:text-blue-600 ${isActive ? 'text-blue-600' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-lg p-1 text-slate-700 sm:hidden"
          aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-slate-100 px-6 py-3 sm:hidden">
          <div className="mx-auto flex max-w-5xl flex-col gap-3 text-sm font-medium text-slate-700">
            {navigation.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-2 py-1 hover:bg-blue-50 hover:text-blue-600 ${isActive ? 'bg-blue-50 text-blue-600' : ''}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
