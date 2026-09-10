import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-slate-800 py-4 text-center text-[10px] text-white">
      <div className="mb-2 flex justify-center gap-4 text-slate-300">
        <NavLink to="/about" className="hover:text-white">About</NavLink>
        <NavLink to="/services" className="hover:text-white">Services</NavLink>
        <NavLink to="/contact" className="hover:text-white">Contact</NavLink>
      </div>
      © 2026 MyPortfolio. All Rights Reserved.
    </footer>
  )
}

export default Footer
