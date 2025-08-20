import CardInfo from "@/components/common/CardInfo";

export default function Dashboard() {
  return (
    <>
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Bienvenido de vuelta, carolay</p>
      </div>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <CardInfo title="Ingresos" value={2300} />
          <CardInfo title="Egresos" value={1300} />
          <CardInfo title="Diferencia" value={1000} />
          <CardInfo title="Ingresos" value={2300} />
          <CardInfo title="Egresos" value={1300} />
          <CardInfo title="Diferencia" value={1000} />
          <CardInfo title="Ingresos" value={2300} />
          <CardInfo title="Egresos" value={1300} />
          <CardInfo title="Diferencia" value={1000} />
        </div>
      </section>
    </>
  );
}
