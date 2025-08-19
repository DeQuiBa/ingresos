"use client";

import {
  BarChart3,
  CreditCard,
  FileText,
  Home,
  LogOut,
  Package,
  Settings,
  Shield,
  ShoppingCart,
  User,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";

import { useState } from "react";

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: Home, href: "/dashboard" },
  { id: "Comite 1", label: "Comite 1", icon: Users, href: "/comite" },
  { id: "Comite 2", label: "Comite 2", icon: Package, href: "/comite" },
  { id: "Comite 3", label: "Comite 3", icon: ShoppingCart, href: "/comite" },
  { id: "Comite 4", label: "Comite 4", icon: BarChart3, href: "/comite" },
  { id: "Comite 5", label: "Comite 5", icon: CreditCard, href: "/comite" },
  { id: "Comite 6", label: "Comite 6", icon: FileText, href: "/comite" },
  { id: "Comite 7", label: "Comite 7", icon: Shield, href: "/comite" },
  { id: "Comite 8", label: "Comite 8", icon: Settings, href: "/comite" },
];

export default function SiderbarAdmin({
  sidebarOpen,
  toggleSidebar,
}: {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}) {
  const [activeItem, setActiveItem] = useState("dashboard");
  return (
    <>
      {/* Overlay para mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40  lg:hidden "
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`
        overflow-y-auto fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:fixed lg:inset-0
      `}
      >
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">U</span>
            </div>
            <span className="text-xl font-bold text-gray-900">UNDC</span>
          </div>
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md text-gray-400 hover:text-gray-500 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* User Profile */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
              <User size={20} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                Carolay Delgado
              </p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <Link href={item.href} key={item.id} >
                <button
                  key={item.id}
                  onClick={() => setActiveItem(item.id)}
                  className={`
                    cursor-pointer w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200
                    ${
                      isActive
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }
                        `}
                >
                  <Icon size={20} className="mr-3" />
                  {item.label}
                </button>
              </Link>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-gray-200 space-y-2">
          <Link href="/" className="cursor-pointer w-full flex items-center px-4 py-3 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-xl transition-all duration-200">
            <LogOut size={20} className="mr-3" />
            Cerrar Sesión
          </Link>
        </div>
      </aside>
    </>
  );
}
