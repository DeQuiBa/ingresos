import { Menu, User } from "lucide-react";

export default function HeaderAdmin({toggleSidebar}: { toggleSidebar: () => void }) {
  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left side */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-md text-gray-400 hover:text-gray-500 lg:hidden"
              >
                <Menu size={20} />
              </button>
              
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <p className="text-gray-600">Bienvenida Carolay</p>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <User size={16} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

     
    </>
  );
}
