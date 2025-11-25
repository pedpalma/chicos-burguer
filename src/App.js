import { Routes, Route, Link } from 'react-router-dom';
import Index from './pages/Index';
import Produtos from './pages/Produtos';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/produtos" element={<Produtos />} />
    </Routes>
  )
}


