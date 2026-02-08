import { useState } from 'react'
import './Personalizar.css'

export const Personalizar = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    tamano: 'Mediana',
    descripcion: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const phone = "573135519407"
    const message = `Hola SAZA, quiero una alcancía personalizada:
    
👤 *Nombre:* ${formData.nombre}
📏 *Tamaño:* ${formData.tamano}
🎨 *Idea:* ${formData.descripcion}

(Adjuntaré foto de referencia si tengo)`
    
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="personalizar-page">
      <div className="personalizar-header">
        <h1>Diseña tu Marranito Ideal</h1>
        <p>Si lo puedes imaginar, lo podemos pintar. Cuéntanos tu idea y la haremos realidad.</p>
      </div>

      <div className="steps-container">
        <div className="step-card">
          <div className="step-number">1</div>
          <h3>Elige el Tamaño</h3>
          <p>Mediana o Grande, según tus metas de ahorro.</p>
        </div>
        <div className="step-card">
          <div className="step-number">2</div>
          <h3>Describe tu Idea</h3>
          <p>Personajes, profesiones, colores o temáticas.</p>
        </div>
        <div className="step-card">
          <div className="step-number">3</div>
          <h3>Cotiza en WhatsApp</h3>
          <p>Te confirmamos precio y tiempo de entrega.</p>
        </div>
      </div>

      <div className="form-section">
        <form className="custom-form" onSubmit={handleSubmit}>
          <h2>Cuéntanos qué quieres</h2>
          
          <div className="form-group">
            <label htmlFor="nombre">Tu Nombre:</label>
            <input 
              type="text" 
              id="nombre" 
              name="nombre" 
              value={formData.nombre} 
              onChange={handleChange} 
              placeholder="Ej: Ana María"
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="tamano">Tamaño:</label>
            <select 
              id="tamano" 
              name="tamano" 
              value={formData.tamano} 
              onChange={handleChange}
            >
              <option value="Pequeña">Pequeña</option>
              <option value="Mediana">Mediana</option>
              <option value="Grande">Grande</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="descripcion">Describe tu idea:</label>
            <textarea 
              id="descripcion" 
              name="descripcion" 
              value={formData.descripcion} 
              onChange={handleChange} 
              placeholder="Ej: Quiero un marranito vestido de médico con gafas azules..."
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-whatsapp-form">
            Cotizar Diseño en WhatsApp
          </button>
          <p className="form-note">*Al abrir WhatsApp podrás enviarnos fotos de referencia.</p>
        </form>
      </div>
    </div>
  )
}
