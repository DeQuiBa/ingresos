"use client";
import CardInfo from "@/components/common/CardInfo";
import TableSection from "@/components/common/TableSection";

export default function PanelComiteAdmin() {
  return (
    <>
      <TableSection
        comite="COMPARSA"
        onNew={() => alert("Agregando nuevo ingreso")}
      >
        <h1>Aqui va mi tabla</h1>
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
