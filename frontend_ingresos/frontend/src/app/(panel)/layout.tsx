"use client"

import SiderbarAdmin from "@/components/common/SiderbarAdmin";
import HeaderAdmin from "@/components/common/HeaderAdmin";
import { useState } from "react";


export default function LayoutAdmin({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        
        <SiderbarAdmin sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="lg:pl-64">
          {/* Header arriba */}
          <HeaderAdmin toggleSidebar={toggleSidebar} />
          <main className="p-6">{children}</main>
        </div>
      </div>
    </>
  );
}
