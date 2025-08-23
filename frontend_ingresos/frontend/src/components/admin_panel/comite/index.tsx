"use client";
import CardInfo from "@/components/common/CardInfo";
import TableSection from "@/components/common/TableSection";
import TableTansTack from "@/components/ui/TableTansTack";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

//TData
type User = {
  id: number
  fecha: string
  ingreso: number
  actividad: string
  codigo:string
  voucher: string
  cantidad: number
};

export default function PanelComiteAdmin() {

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
    { id: 1, fecha:"10-08-2003", ingreso:1240 , actividad: "una actividad", codigo:"ASD-12321",voucher:"COUCHER-SE12", cantidad:4},
    { id: 2, fecha:"10-08-2003", ingreso:1240 , actividad: "new2", codigo:"ASD-12321",voucher:"COUCHER-SE12", cantidad:4},
    { id: 3, fecha:"10-08-2003", ingreso:1240 , actividad: "bad bunny", codigo:"ASD-12321",voucher:"COUCHER-SE12", cantidad:4},
    { id: 4, fecha:"10-08-2003", ingreso:1240 , actividad: "timeline", codigo:"ASD-12321",voucher:"COUCHER-SE12", cantidad:4},
    { id: 5, fecha:"10-08-2003", ingreso:1240 , actividad: "sky", codigo:"ASD-12321",voucher:"COUCHER-SE12", cantidad:4},
  ];

  return (
    <>
      <TableSection
        comite="COMPARSA"
        onNew={() => alert("Agregando nuevo ingreso")}
      >
        <TableTansTack columns={columns} data={data} />
      </TableSection>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <CardInfo title="Ingresos" value={2300} />
          <CardInfo title="Egresos" value={1300} />
          <CardInfo title="Diferencia" value={1000} />
        </div>
      </section>
    </>
  );
}
