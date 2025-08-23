import HeaderHome from "@/components/common/HeaderHome";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registro ingresos- egresos UNDC",
  description: "Gestion de ingresos y egresos de la UNDC",
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="min-h-screen bg-slate-50">
        <HeaderHome />
        <main>
            {children}
        </main>
      </div>
    </>
  );
}
