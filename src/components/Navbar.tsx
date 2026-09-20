import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { MdMenu, MdLogout } from "react-icons/md";

interface NavbarProps {
  onToggleSidebar: () => void;
}

const Navbar = ({ onToggleSidebar }: NavbarProps) => {
  const { totalItems } = useCart();
  const { logout, userEmail } = useAuth();
  const navigate = useNavigate();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsProfileMenuOpen(false);
    navigate("/login");
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen((prev) => !prev);
  };

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-8">
      <div className="flex items-center gap-2 md:gap-4 min-w-0">
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded hover:bg-slate-100 transition text-slate-600 flex-shrink-0 md:hidden"
          title="Contraer / Expandir menú"
        >
          <MdMenu size={24} />
        </button>
        <h2 className="text-slate-600 font-medium text-base md:text-lg truncate">
          Panel de Administración
        </h2>
      </div>

      <div className="flex items-end gap-3 md:gap-6 flex-shrink-0">
        <Link
          to="/carrito"
          className="relative p-2 hover:bg-slate-100 rounded-full transition"
          title="Carrito"
        >
          <span className="text-lg md:text-xl">🛒</span>
          {totalItems > 0 && (
            <span className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full transform translate-x-1 -translate-y-1">
              {totalItems}
            </span>
          )}
        </Link>

        <div className="flex items-center gap-2 md:gap-4">
          <span className="text-xs md:text-sm text-slate-500 hidden sm:inline truncate max-w-[100px] md:max-w-full">
            {userEmail}
          </span>

          {/* Perfil con menú funcional en móvil y desktop */}
          <div className="relative flex-shrink-0">
            <button
              onClick={toggleProfileMenu}
              className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center overflow-hidden hover:ring-2 hover:ring-indigo-600 transition"
              title="Menú de perfil"
            >
              <img
                src="https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg"
                alt="Avatar del usuario"
                className="w-full h-full object-cover"
              />
            </button>

            {/* Menú desplegable - visible cuando isProfileMenuOpen = true */}
            {isProfileMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-40 bg-white border border-slate-200 rounded-lg shadow-lg z-50">
                <div className="px-4 py-3 border-b border-slate-100">
                  <p className="text-xs text-slate-500 uppercase font-semibold">Cuenta</p>
                  <p className="text-sm text-slate-700 truncate">{userEmail}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 text-left px-4 py-3 text-sm text-red-600 font-semibold hover:bg-red-50 transition-colors"
                >
                  <MdLogout size={18} />
                  Cerrar Sesión
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Overlay para cerrar menú al clickear fuera */}
      {isProfileMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsProfileMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;