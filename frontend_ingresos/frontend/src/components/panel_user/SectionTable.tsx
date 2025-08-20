"use client"
import TableSection from "../common/TableSection";

export default function SectionTableComite() {
  return (
    <>
      <TableSection comite="COMPARSA" onNew={() => alert("Agregando nuevo ingreso")}>
        <h1>Aqui va mi tabla</h1>
      </TableSection>
    </>
  );
}
