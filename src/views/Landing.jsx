import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="landing">
      <section className="landing-hero">
        <img src="logo512.png" alt="React logo" />
        <div className="landing-cards">
          <Link to="/learn" className="landing-card">
            <h3>Aprender React</h3>
            <p>Guía completa: Routing, Reactividad, ciclo de vida y más</p>
          </Link>
          <Link to="/quiz" className="landing-card">
            <h3>🎯 Hacer Quiz</h3>
            <p>Pon a prueba tus conocimientos</p>
          </Link>
        </div>
      </section>
    </div>
  )
}
