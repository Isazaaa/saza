import { useState } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/products'
import './Catalogo.css'

export const Catalogo = () => {
  const [filter, setFilter] = useState('Todos')

  const filteredProducts = filter === 'Todos' 
    ? products 
    : products.filter(p => p.category === filter)

  return (
    <div className="catalogo-container">
      <header className="catalogo-header">
        <h1>Nuestro Catálogo</h1>
        <p>Encuentra el diseño perfecto para ti</p>
        
        <div className="filters">
          {['Todos', 'Personajes', 'Superhéroes', 'Animales'].map(cat => (
            <button 
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>
      
      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img 
                src={product.image} 
                alt={product.name} 
                className="product-img-main"
              />
              <img 
                src={product.hoverImage} 
                alt={`${product.name} vista 2`} 
                className="product-img-hover"
              />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="price">Desde ${product.prices.pequena.toLocaleString()}</p>
              <Link to={`/producto/${product.id}`} className="btn-add">Ver Detalle</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
