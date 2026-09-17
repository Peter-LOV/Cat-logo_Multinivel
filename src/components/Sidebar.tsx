import { Link } from "react-router-dom";

interface SidebarProps {
  isCollapsed: boolean;
}

const menuItems = [
  { to: "/", icon: "📊", label: "Dashboard" },
  { to: "/catalogo", icon: "📦", label: "Catálogo" },
  { to: "/mi-red", icon: "🌐", label: "Mi Red" },
];

const Sidebar = ({ isCollapsed }: SidebarProps) => {
  return (
    <aside
      className={`${
        isCollapsed ? "w-20" : "w-64"
      } bg-slate-900 text-white flex flex-col transition-all duration-300 overflow-hidden`}
    >
      <div className="p-4 md:p-6 text-xl md:text-2xl font-bold border-b border-slate-700 whitespace-nowrap overflow-hidden">
        {isCollapsed ? "MC" : "MultiCatálogo"}
      </div>
      <nav className="flex-1 p-3 md:p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            title={item.label}
            className={`flex items-center gap-3 p-2 md:p-3 rounded hover:bg-slate-800 transition ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <span className="text-lg md:text-xl">{item.icon}</span>
            {!isCollapsed && <span className="text-sm md:text-base">{item.label}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;