"use client"
import { Search } from "lucide-react";
import { useState } from "react";

export default function VoucherConsulta() {
  const [voucherNumber, setVoucherNumber] = useState("");
  const [searchResult, setSearchResult] = useState("");

  // Funcion de ejemplo para conectar despues con el backend
  const handleSearch = () => {
    if (voucherNumber.trim()) {
      setSearchResult(
        `Voucher ${voucherNumber} encontrado: Estado activo - Válido hasta 31/12/2024`
      );
    } else {
      setSearchResult("Por favor ingresa un número de voucher válido");
    }
  };

  return (
    <>
      <div className="relative py-16 bg-white rounded-2xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Consulta tu Voucher
            </h2>
            <p className="text-lg text-slate-600">
              Ingresa el número de tu voucher para verificar su estado y validez
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">


            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1">
                <input
                  type="text"
                  value={voucherNumber}
                  onChange={(e) => setVoucherNumber(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                  placeholder="Ingresa el número de voucher"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-900 placeholder-slate-500"
                />
              </div>
              <button
                onClick={handleSearch}
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md"
              >
                <Search className="h-5 w-5" />
                Buscar
              </button>
            </div>

            {searchResult && (
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Resultado de búsqueda:
                </h3>
                <p className="text-slate-700">{searchResult}</p>
              </div>
            )}


          </div>
        </div>
      </div>
    </>
  );
}
