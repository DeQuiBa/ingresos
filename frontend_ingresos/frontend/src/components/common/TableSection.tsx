import { FilePlus } from "lucide-react";

interface TableSectionProps {
  comite: string;
  onNew?: () => void;
  children: React.ReactNode;
}
export default function TableSection({
  comite,
  onNew,
  children,
}: TableSectionProps) {
  return (
    <>
      <section className="mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              REGISTRO DE INGRESOS Y EGRESOS {comite}
            </h2>
            {onNew && (
              <button
                onClick={onNew}
                className="cursor-pointer flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <FilePlus className="w-4 h-4" />
                Nuevo
              </button>
            )}
          </div>

          {/* Estructura de la tabla - aquí irá tu tabla */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
              <p className="text-sm text-gray-600">Aquí va tu tabla de datos</p>
            </div>
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
