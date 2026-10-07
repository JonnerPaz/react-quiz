import { NavLink } from 'react-router-dom'

const routes = [
  {
    to: '/',
    name: 'Inicio',
  },
  {
    to: '/learn',
    name: 'Aprender React',
  },
  {
    to: '/quiz',
    name: 'Quiz',
  },
]

export default function Nav() {
  return (
    <nav className="nav">
      {routes.map((route) => (
        <NavLink
          key={route.to}
          to={route.to}
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          {route.name}
        </NavLink>
      ))}
    </nav>
  )
}
