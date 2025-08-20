import HeaderAdmin from "@/components/common/HeaderAdmin";


export default function LayoutAdmin({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header arriba */}
        <HeaderAdmin />
        <main className="p-6">{children}</main>
      </div>
    </>
  );
}
