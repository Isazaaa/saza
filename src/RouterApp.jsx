import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Catalogo } from './pages/Catalogo'
import { ProductDetail } from './pages/ProductDetail'
import { Personalizar } from './pages/Personalizar'
import { Nosotros } from './pages/Nosotros'
import { Contacto } from './pages/Contacto'

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalogo" element={<Catalogo />} />
          <Route path="producto/:id" element={<ProductDetail />} />
          <Route path="personalizar" element={<Personalizar />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
