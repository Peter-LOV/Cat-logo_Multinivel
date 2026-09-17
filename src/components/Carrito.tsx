import { useCart } from '../context/CartContext';

const Carrito = () => {
  const { cart, removeFromCart, totalPrice } = useCart();

  return (
    <div>
      <h1 className="text-xl md:text-2xl font-bold text-slate-800 mb-6">Tu Carrito de Compras</h1>

      {cart.length === 0 ? (
        <div className="bg-white p-6 md:p-8 rounded-lg border border-slate-200 shadow-sm text-center">
          <p className="text-slate-500">Tu carrito está vacío actualmente.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Lista de productos */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white p-3 md:p-4 rounded-lg border border-slate-200 shadow-sm gap-3">
                <div className="flex items-center gap-3 w-full sm:flex-1">
                  <img src={item.img} alt={item.nombre} className="w-14 h-14 md:w-16 md:h-16 object-cover rounded-md flex-shrink-0" />
                  <div className="min-w-0">
                    <h3 className="font-semibold text-slate-800 text-sm md:text-base truncate">{item.nombre}</h3>
                    <p className="text-xs md:text-sm text-slate-500">Cantidad: {item.cantidad}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:gap-6 justify-between sm:justify-end w-full sm:w-auto">
                  <p className="font-bold text-indigo-600 text-sm md:text-base">${(item.precio * item.cantidad).toFixed(2)}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 transition text-lg"
                    title="Eliminar producto"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Resumen de pago */}
          <div className="bg-white p-4 md:p-6 rounded-lg border border-slate-200 shadow-sm h-fit">
            <h2 className="text-base md:text-lg font-bold text-slate-800 mb-4">Resumen del Pedido</h2>
            <div className="flex justify-between border-b border-slate-100 pb-4 mb-4">
              <span className="text-slate-600 text-sm md:text-base">Subtotal</span>
              <span className="font-semibold text-sm md:text-base">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-slate-800 font-bold text-sm md:text-base">Total a Pagar</span>
              <span className="text-xl md:text-2xl font-bold text-indigo-600">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full bg-indigo-600 text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-indigo-700 transition text-sm md:text-base">
              Proceder al Pago
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;