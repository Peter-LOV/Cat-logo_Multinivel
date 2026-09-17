import { useCart } from '../context/CartContext';

const Catalogo = () => {
  const { addToCart } = useCart();

  const productos = [
    { id: 1, nombre: "Serum Revitalizante", precio: 45.00, img: "https://picsum.photos/seed/serum/150" },
    { id: 2, nombre: "Crema Hidratante Pro", precio: 32.50, img: "https://picsum.photos/seed/crema/150" },
    { id: 3, nombre: "Tónico Purificante", precio: 28.00, img: "https://picsum.photos/seed/tonico/150" },
    { id: 4, nombre: "Mascarilla Nocturna", precio: 50.00, img: "https://picsum.photos/seed/mascarilla/150" },
  ];

  return (
    <div>
      <h1 className="text-xl md:text-2xl font-bold text-slate-800 mb-6">Catálogo de Productos</h1>
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
    </div>
  );
};

export default Catalogo;