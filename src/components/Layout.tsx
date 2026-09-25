import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = () => {
  const [isCollapsed] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Overlay en móvil cuando sidebar está abierto */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden backdrop-blur-sm"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar - Oculto en móvil por defecto, visible en md+ */}
      <div
        className={`fixed md:static inset-y-0 left-0 z-40 md:z-auto transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:!translate-x-0`}
      >
        <Sidebar isCollapsed={isCollapsed} closeSidebar={closeSidebar} />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar onToggleSidebar={handleToggleSidebar} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;