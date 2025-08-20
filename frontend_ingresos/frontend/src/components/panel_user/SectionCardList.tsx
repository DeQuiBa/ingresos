import CardInfo from "../common/CardInfo";

export default function SectionCardList() {
  return (
    <>
      {/* Sección de Cards */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <CardInfo title="Ingresos" value={2300}/>
          <CardInfo title="Egresos" value={1300}/>
          <CardInfo title="Diferencia" value={1000}/>          
        </div>
      </section>
    </>
  );
}
