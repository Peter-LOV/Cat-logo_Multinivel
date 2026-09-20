import { Link } from "react-router-dom";
import { MdDashboard, MdShoppingCart, MdPeopleAlt } from "react-icons/md";

interface SidebarProps {
  isCollapsed: boolean;
  closeSidebar: () => void;
}

const menuItems = [
  { to: "/", icon: MdDashboard, label: "Dashboard" },
  { to: "/catalogo", icon: MdShoppingCart, label: "Catálogo" },
  { to: "/mi-red", icon: MdPeopleAlt, label: "Mi Red" },
];

const Sidebar = ({ isCollapsed, closeSidebar }: SidebarProps) => {
  const handleLinkClick = () => {
    // Cierra el sidebar en móvil al clickear un link
    closeSidebar();
  };

  return (
    <aside
      className={`${
        isCollapsed ? "w-20" : "w-64"
      } bg-slate-900 text-white flex flex-col transition-all duration-300 overflow-hidden h-screen`}
    >
      <div className="p-4 md:p-6 text-xl md:text-2xl font-bold border-b border-slate-700 whitespace-nowrap overflow-hidden">
        {isCollapsed ? "MC" : "MultiCatálogo"}
      </div>
      <nav className="flex-1 p-3 md:p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              title={item.label}
              onClick={handleLinkClick}
              className={`flex items-center gap-3 p-2 md:p-3 rounded hover:bg-slate-800 transition ${
                isCollapsed ? "justify-center" : ""
              }`}
            >
              <Icon className="text-xl md:text-2xl flex-shrink-0" />
              {!isCollapsed && <span className="text-sm md:text-base">{item.label}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;