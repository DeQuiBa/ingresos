"use client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
/* import data from "./MOCK_DATA.json" */
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

type TableProps<TData> = {
  columns: ColumnDef<TData, unknown>[];
  data: TData[];

};

export default function TableTansTack<TData>({
  data,
  columns,
}: TableProps<TData>) {
  /*  */

  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");

  console.log(setSorting)
  const table = useReactTable({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onGlobalFilterChange: setFiltering,
  });

  return (
    <>
      <div className="w-full max-w-6xl mx-auto p-6 space-y-6">
        {/* Header con búsqueda y botón nuevo */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              value={filtering}
              onChange={(e) => setFiltering(e.target.value)}
              placeholder="Buscar..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            {table.getRowModel().rows.length === 0 ? (
              <div className="p-4 text-center text-gray-500" >
                No hay resultados que coincidan.
              </div>
            ) : (
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <th
                          key={header.id}
                          onClick={header.column.getToggleGroupingHandler()}
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {header.column.getIsSorted() === "asc" && (
                            <ChevronUp className="bg-red-500 inline w-4 h-4 ml-1" />
                          )}
                          {header.column.getIsSorted() === "desc" && (
                            <ChevronDown className="inline w-4 h-4 ml-1" />
                          )}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {table.getRowModel().rows.map((row) => (
                    <tr
                      key={row.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td key={cell.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {" "}
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Navegación de páginas */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="text-sm text-gray-500">
            Mostrando página {table.getState().pagination.pageIndex + 1} de{" "}
            {table.getPageCount()}
          </div>

          <div className="flex items-center gap-2">
            <Button
              className="cursor-pointer"
              onClick={() => table.setPageIndex(0)}
            >
              Primera Pagina
            </Button>
            <Button
              className="cursor-pointer"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Anterior
            </Button>
            <Button
              className="cursor-pointer"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Siguiente
            </Button>
            <Button
              className="cursor-pointer"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            >
              Ultima pagina
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
