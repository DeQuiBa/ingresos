import { ArrowRight, Search, Zap } from "lucide-react";
import VoucherConsulta from "./VoucherConsulta";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-transparent to-slate-100"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
                <Zap className="h-4 w-4" />
                VII CIISIC
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Sistema de ingresos y egresos de la
                <span className="text-indigo-600 block">VII CIISIC</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
                Transforma tu forma de trabajar con herramientas inteligentes
                que se adaptan a ti. Más que una app, es tu compañero digital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Comenzar gratis
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border border-slate-300 text-slate-900 rounded-xl font-semibold hover:bg-slate-100 transition-colors">
                  Mas información
                </button>
              </div>
            </div>

            <VoucherConsulta />
          </div>
        </div>
      </section>
    </>
  );
}
