import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Building2,
  Wallet,
  Package,
  FileText,
  BarChart3,
  Users,
  Settings,
  LogOut,
  ChevronRight,
  Home,
} from "lucide-react";

interface SidebarProps {
  userRole?: string;
}

export default function Sidebar({ userRole = "Admin Utama" }: SidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/" },
    { icon: Building2, label: "Unit Usaha", path: "/unit-usaha" },
    {
      icon: Wallet,
      label: "Keuangan",
      path: "/keuangan",
      submenu: [
        { label: "Kas Masuk", path: "/keuangan/kas-masuk" },
        { label: "Kas Keluar", path: "/keuangan/kas-keluar" },
        { label: "Laporan Keuangan", path: "/keuangan/laporan" },
      ],
    },
    { icon: Package, label: "Inventaris & Aset", path: "/inventaris" },
    { icon: FileText, label: "Administrasi", path: "/administrasi" },
    { icon: BarChart3, label: "Laporan", path: "/laporan" },
    { icon: Users, label: "Pengguna & Hak Akses", path: "/pengguna" },
    { icon: Home, label: "Profil BUMDes", path: "/profil-bumdes" },
    { icon: Settings, label: "Pengaturan", path: "/pengaturan" },
  ];

  const handleLogout = () => {
    navigate("/login");
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 fixed left-0 top-0 bottom-0 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-semibold text-gray-900">SI BUMDes</h1>
            <p className="text-xs text-gray-500">Sistem Informasi</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                    active
                      ? "bg-green-50 text-green-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="flex-1 text-sm">{item.label}</span>
                  {item.submenu && (
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        active ? "rotate-90" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Submenu */}
                {item.submenu && active && (
                  <ul className="ml-11 mt-1 space-y-1">
                    {item.submenu.map((subitem) => (
                      <li key={subitem.path}>
                        <Link
                          to={subitem.path}
                          className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                            location.pathname === subitem.path
                              ? "text-green-700 bg-green-50"
                              : "text-gray-600 hover:bg-gray-50"
                          }`}
                        >
                          {subitem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Info & Logout */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <Users className="w-5 h-5 text-gray-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {userRole}
            </p>
            <p className="text-xs text-gray-500 truncate">admin@bumdes.id</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Keluar</span>
        </button>
      </div>
    </aside>
  );
}
