import { LogIn, Sparkles, User } from "lucide-react";
import Link from "next/link";

export default function HeaderHome() {
  return (
    <>
      <header className="border-b border-slate-200 backdrop-blur-sm bg-white/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-slate-900">
                  VII CIISIC
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/login">
                <button className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                  <LogIn className="h-4 w-4" />
                  <span className="hidden sm:inline">Iniciar Sesión</span>
                </button>
              </Link>
              <button className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-200 shadow-sm hover:shadow-md">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Registrarse</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
