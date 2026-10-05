import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="nav">
      <NavLink
        to="/"
        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
      >
        Inicio
      </NavLink>
      <NavLink
        to="/learn"
        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
      >
        Aprender React
      </NavLink>
      <NavLink
        to="/quiz"
        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
      >
        Quiz
      </NavLink>
    </nav>
  )
}
