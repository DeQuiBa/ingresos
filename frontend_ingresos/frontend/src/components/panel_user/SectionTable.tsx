"use client";
import { ColumnDef } from "@tanstack/react-table";
import TableSection from "../common/TableSection";
import TableTansTack from "../ui/TableTansTack";
import Link from "next/link";

//TData
type User = {
  id: number;
  fecha: string;
  ingreso: number;
  actividad: string;
  codigo: string;
  voucher: string;
  cantidad: number;
};

export default function SectionTableComite() {
  // especificamos columnas de la tabla
  const columns: ColumnDef<User>[] = [
    {
      header: "Id",
      accessorKey: "id",
    },
    {
      header: "Fecha",
      accessorKey: "fecha",
    },
    {
      header: "Ingreso",
      accessorKey: "ingreso",
    },
    {
      header: "Actividad",
      accessorKey: "actividad",
    },
    {
      header: "Código",
      accessorKey: "codigo",
    },
    {
      header: "Voucher",
      accessorKey: "voucher",
    },
    {
      header: "Cantidad",
      accessorKey: "cantidad",
    },
    {
      id: "acciones",
      header: "Acciones",
      cell: ({ row }: { row: any }) => (
        <>
          <div className="flex flex-row gap-3">
            <Link href={`/comite/${row.original.id}`}>
              <button className="cursor-pointer bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                Editar
              </button>
            </Link>
            <Link href="#">
              <button className="cursor-pointer bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                Eliminar
              </button>
            </Link>
          </div>
        </>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      fecha: "10-08-2003",
      ingreso: 1240,
      actividad: "una actividad",
      codigo: "ASD-12321",
      voucher: "COUCHER-SE12",
      cantidad: 4,
    },
    {
      id: 2,
      fecha: "10-08-2003",
      ingreso: 1240,
      actividad: "new2",
      codigo: "ASD-12321",
      voucher: "COUCHER-SE12",
      cantidad: 4,
    },
    {
      id: 3,
      fecha: "10-08-2003",
      ingreso: 1240,
      actividad: "bad bunny",
      codigo: "ASD-12321",
      voucher: "COUCHER-SE12",
      cantidad: 4,
    },
    {
      id: 4,
      fecha: "10-08-2003",
      ingreso: 1240,
      actividad: "timeline",
      codigo: "ASD-12321",
      voucher: "COUCHER-SE12",
      cantidad: 4,
    },
    {
      id: 5,
      fecha: "10-08-2003",
      ingreso: 1240,
      actividad: "sky",
      codigo: "ASD-12321",
      voucher: "COUCHER-SE12",
      cantidad: 4,
    },
  ];

  return (
    <>
      <TableSection
        comite="COMPARSA"
        onNew={() => alert("Agregando nuevo ingreso")}
      >
        <TableTansTack columns={columns} data={data} />
      </TableSection>
    </>
  );
}
