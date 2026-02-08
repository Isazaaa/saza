import { useParams, Link } from 'react-router-dom'
import { useState, useMemo } from 'react'
import { products } from '../data/products'
import './ProductDetail.css'

export const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))
  
  const [selectedSize, setSelectedSize] = useState('mediana')
  const [currentImage, setCurrentImage] = useState(product ? product.image : '')

  // Lógica para recomendaciones aleatorias (evita cambiar al cambiar tamaño)
  const recommendations = useMemo(() => {
      const otherProducts = products.filter(p => p.id !== parseInt(id))
      // Mezclar y tomar 3
      return otherProducts.sort(() => 0.5 - Math.random()).slice(0, 3)
  }, [id])

  if (!product) {
    return <div className="detail-container"><h2>Producto no encontrado</h2><Link to="/catalogo">Volver al catálogo</Link></div>
  }

  const currentPrice = product.prices[selectedSize]

  // Mensaje para WhatsApp
  const phone = "573135519407"
  const message = `Hola, me interesa la *${product.name}* en tamaño *${selectedSize}* ($${currentPrice.toLocaleString()}).`
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <div className="detail-container">
      <Link to="/catalogo" className="back-link">← Volver al Catálogo</Link>
      
      <div className="detail-grid">
        <div className="detail-gallery-container">
          <div className="detail-images">
            <img src={currentImage} alt={product.name} className="main-detail-img" />
          </div>
          
          {product.gallery && product.gallery.length > 0 && (
            <div className="thumbnail-row">
              {product.gallery.map((img, index) => (
                <button 
                  key={index} 
                  className={`thumbnail-btn ${currentImage === img ? 'active' : ''}`}
                  onClick={() => setCurrentImage(img)}
                >
                  <img src={img} alt={`Vista ${index + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>
        
        <div className="detail-info">
          <h1>{product.name}</h1>
          <p className="detail-price">${currentPrice.toLocaleString()}</p>
          
          <p className="detail-description">{product.description}</p>
          
          <div className="size-selector">
            <h3>Elige el tamaño:</h3>
            <div className="size-options">
              <button 
                className={`size-btn ${selectedSize === 'pequena' ? 'active' : ''}`}
                onClick={() => setSelectedSize('pequena')}
              >
                Pequeña
                <span>$15.000</span>
              </button>
              <button 
                className={`size-btn ${selectedSize === 'mediana' ? 'active' : ''}`}
                onClick={() => setSelectedSize('mediana')}
              >
                Mediana
                <span>$20.000</span>
              </button>
              <button 
                className={`size-btn ${selectedSize === 'grande' ? 'active' : ''}`}
                onClick={() => setSelectedSize('grande')}
              >
                Grande
                <span>$25.000</span>
              </button>
            </div>
          </div>

          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
             Comprar por WhatsApp 
          </a>
        </div>
      </div>

      <div className="recommendations-section">
        <h2>También te podría gustar</h2>
        <div className="recommendations-grid">
            {recommendations.map(rec => (
                <Link to={`/producto/${rec.id}`} key={rec.id} className="rec-card" onClick={() => window.scrollTo(0, 0)}>
                    <div className="rec-image">
                        <img src={rec.image} alt={rec.name} />
                    </div>
                    <h4>{rec.name}</h4>
                    <p className="rec-price">Desde ${rec.prices.pequena.toLocaleString()}</p>
                </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
