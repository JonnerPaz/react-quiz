import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found-content">
        <img src="/logo512.png" alt="React logo" className="not-found-logo" />
        <span className="not-found-badge">404</span>
        <h1 className="not-found-title">Página no encontrada</h1>
        <p className="not-found-description">
          La ruta que estás buscando no existe o ha sido movida. Puedes volver
          al inicio o explorar alguna de las secciones disponibles:
        </p>

        <div className="not-found-actions">
          <Link to="/" className="not-found-btn not-found-btn-primary">
            Volver al Inicio
          </Link>
          <Link to="/learn" className="not-found-btn">
            Aprender React
          </Link>
          <Link to="/quiz" className="not-found-btn">
            Ir al Quiz
          </Link>
        </div>
      </div>
    </main>
  )
}
