import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Catalogo from './components/Catalogo';
import MiRed from './components/MiRed';
import Carrito from './components/Carrito';
import Login from './components/Login';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            {/* Ruta pública */}
            <Route path="/login" element={<Login />} />

            {/* Rutas dentro del Layout */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="catalogo" element={<Catalogo />} />
              <Route path="mi-red" element={<MiRed />} />
              <Route path="carrito" element={<Carrito />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;