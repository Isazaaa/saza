import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Inicio</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
