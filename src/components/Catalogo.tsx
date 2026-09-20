import { useState, useEffect } from 'react';
import { useCart, type Producto } from '../context/CartContext';
import { API_ENDPOINTS } from '../config/api';

const Catalogo = () => {
  const { addToCart } = useCart();
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchProductos = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await fetch(API_ENDPOINTS.productos);
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        const data: Producto[] = await response.json();
        setProductos(data);
      } catch (err) {
        console.error('Error al obtener productos:', err);
        setError('No se pudieron cargar los productos. Verifica que el backend esté corriendo en el puerto 3000.');
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-slate-500 text-sm md:text-base">Cargando productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 text-red-600 p-4 rounded-lg border border-red-200 text-center">
        {error}
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-xl md:text-2xl font-bold text-slate-800 mb-6">Catálogo de Productos</h1>
      {productos.length === 0 ? (
        <p className="text-slate-500">No hay productos disponibles.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
          {productos.map((prod) => (
            <div key={prod.id} className="bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm flex flex-col">
              <img src={prod.img} alt={prod.nombre} className="w-full h-32 md:h-40 object-cover" />
              <div className="p-3 md:p-4 flex flex-col flex-1">
                <h3 className="font-semibold text-slate-700 text-sm md:text-base line-clamp-2">{prod.nombre}</h3>
                <p className="text-indigo-600 font-bold mt-2 mb-3 text-sm md:text-base">${prod.precio.toFixed(2)}</p>

                <button
                  onClick={() => addToCart(prod)}
                  className="mt-auto w-full bg-slate-900 text-white py-2 rounded text-xs md:text-sm hover:bg-indigo-600 transition"
                >
                  Añadir al Carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Catalogo;