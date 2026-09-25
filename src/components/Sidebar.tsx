// src/components/Sidebar.tsx
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { MdDashboard, MdStorefront, MdShoppingCart, MdPeopleAlt } from "react-icons/md";

interface SidebarProps {
  isCollapsed: boolean;
  closeSidebar: () => void;
}

interface NavItem {
  to: string;
  label: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  soloAdmin?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  {
    to: "/",
    label: "Dashboard",
    title: "Dashboard",
    soloAdmin: true,
    icon: MdDashboard,
  },
  {
    to: "/tienda",
    label: "Tienda",
    title: "Tienda",
    icon: MdStorefront,
  },
  {
    to: "/catalogo",
    label: "Catálogo",
    title: "Catálogo",
    icon: MdShoppingCart,
  },
  {
    to: "/mi-red",
    label: "Mi Red",
    title: "Mi Red",
    soloAdmin: true,
    icon: MdPeopleAlt,
  },
];

const Sidebar = ({ isCollapsed, closeSidebar }: SidebarProps) => {
  const { user } = useAuth();
  const { pathname } = useLocation();

  // Filtramos las opciones según el rol del usuario
  const items = NAV_ITEMS.filter((item) => !item.soloAdmin || user?.rol === "admin");

  return (
    <aside
      className={`${
        isCollapsed ? "w-20" : "w-64"
      } bg-slate-900 text-white flex flex-col transition-all duration-300 overflow-hidden h-screen`}
    >
      <div className="p-4 md:p-6 text-xl md:text-2xl font-bold border-b border-slate-700 whitespace-nowrap overflow-hidden">
        {isCollapsed ? "MC" : "MultiCatálogo"}
      </div>

      <nav className="flex-1 p-3 md:p-4 space-y-2 overflow-y-auto">
        {items.map((item) => {
          const Icon = item.icon;
          // Resaltamos la opción activa según la ruta actual
          const esActivo =
            item.to === "/"
              ? pathname === "/"
              : pathname.startsWith(item.to);

          return (
            <Link
              key={item.to}
              to={item.to}
              title={item.title}
              onClick={closeSidebar}
              className={`flex items-center gap-3 p-2 md:p-3 rounded transition ${
                esActivo ? "bg-indigo-600 text-white" : "hover:bg-slate-800"
              } ${isCollapsed ? "justify-center" : ""}`}
            >
              <Icon className="text-xl md:text-2xl flex-shrink-0" />
              {!isCollapsed && (
                <span className="text-sm md:text-base whitespace-nowrap">{item.label}</span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-3 border-t border-slate-700 text-xs text-slate-300">
        {isCollapsed ? (
          <p className="text-center uppercase">{user?.rol}</p>
        ) : (
          <p>
            Conectado como <span className="font-semibold uppercase">{user?.rol}</span>
          </p>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;