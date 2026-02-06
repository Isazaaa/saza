import { Link } from 'react-router-dom'
import './Home.css'

export const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Tus sueños, en una alcancía única</h1>
          <p>Descubre alcancías personalizadas pintadas a mano. 
            El regalo perfecto para ahorrar con estilo.</p>
          <div className="hero-buttons">
            <Link to="/catalogo" className="btn btn-primary">Ver Catálogo</Link>
            <Link to="/personalizar" className="btn btn-outline">Personalizar</Link>
          </div>
        </div>
        <div className="hero-image">
          {/* Aquí pondremos una imagen, por ahora usamos un placeholder */}
          <div className="placeholder-image">🐷</div>
        </div>
      </section>

      <section className="features-section">
        <h2>¿Por qué elegir SAZA?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🎨 100% Personalizado</h3>
            <p>Elegimos los colores y diseño contigo.</p>
          </div>
          <div className="feature-card">
            <h3>🎁 Regalo Perfecto</h3>
            <p>Un detalle inolvidable para cualquier ocasión.</p>
          </div>
          <div className="feature-card">
            <h3>🖌️ Hecho a Mano</h3>
            <p>Arte y dedicación en cada marranito.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
