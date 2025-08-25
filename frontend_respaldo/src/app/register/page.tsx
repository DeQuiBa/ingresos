"use client";

import React, { useState, useEffect } from "react";
import FloatingInput from "@/components/iu/floatingInput";
import Button from "@/components/iu/button";
import { User, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/navbar/header";
import Footer from "@/components/footer/footer";

const comites = [
  "EVENTOS ACADÉMICOS",
  "ECONOMÍA - LOGÍSTICA",
  "REINADO SISTÉMICO",
  "CIENTÍFICO",
  "COMPARSA SISTÉMICA",
  "EDITORIAL",
  "ACTIVIDADES SOCIALES",
  "JUEGOS DEPORTIVOS",
  "CONVERSATORIO DE INVESTIGACIÓN",
  "IMAGEN INSTITUCIONAL",
  "DIFUSIÓN Y PROMOCIÓN",
  "ACADÉMICO",
  "GENERAL",
];

export default function Register() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [search, setSearch] = useState("");
  const [selectedComite, setSelectedComite] = useState("");

  const filteredComites = comites.filter((c) =>
    c.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden text-white">
      {/* Fondo animado */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 transition-all duration-700 opacity-30"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(14, 165, 233, 0.25) 0%, transparent 50%),
              linear-gradient(135deg, #0f172a 0%, #1e293b 70%, #0f172a 100%)
            `,
          }}
        />
        {/* Figuras geométricas animadas */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 left-16 w-72 h-72 border border-cyan-500/40 rotate-45 animate-pulse"></div>
          <div className="absolute bottom-16 right-16 w-52 h-52 border border-blue-500/40 rotate-12 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-28 h-28 border-2 border-purple-500/50 rounded-full animate-spin"></div>
        </div>
        {/* Grid técnico */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(14, 165, 233, 0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14, 165, 233, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <Header />

      <main className="pt-16 relative z-10">
        <section className="relative px-4 sm:px-6 lg:px-8">
          <div
            className={`max-w-4xl mx-auto px-8 py-12 sm:py-16 md:py-20 bg-gray-800/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-cyan-500/20 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Logo y título */}
            <div className="text-center mb-8">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <Image
                  src="/images/logo.webp"
                  alt="Logo"
                  width={220}
                  height={80}
                  className="mx-auto relative z-10 transition-transform duration-500 hover:scale-110 hover:drop-shadow-2xl"
                  priority
                />
              </div>
              <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                REGISTRAR
              </h1>
              <p className="mt-2 text-gray-400 text-sm sm:text-base">
                Crea la cuenta para el{" "}
                <span className="text-cyan-400 font-semibold">sistema financiero</span>.
              </p>
            </div>

            {/* Formulario */}
            <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <FloatingInput placeholder="Nombre" id="firstName" name="firstName" type="text" required />
              <FloatingInput placeholder="Apellidos" id="lastName" name="lastName" type="text" required />
              <FloatingInput placeholder="Correo electrónico" id="email" name="email" type="email" required />
              <FloatingInput placeholder="Contraseña" id="password" name="password" type="password" required />
              <FloatingInput placeholder="Confirmar contraseña" id="confirmPassword" name="confirmPassword" type="password" required />

              {/* Select comité */}
              <div className="relative col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-2 text-gray-300 text-sm font-medium">
                  <Users className="w-4 h-4 text-cyan-400" />
                  Selecciona tu comité
                </div>
                <input
                  type="text"
                  value={search || selectedComite}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setSelectedComite("");
                  }}
                  placeholder="Buscar comité..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-900/70 border border-cyan-500/40 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-500 transition"
                />
                {search && (
                  <ul className="absolute z-20 mt-1 w-full bg-gray-800/90 backdrop-blur-xl border border-cyan-500/30 rounded-xl max-h-44 overflow-y-auto shadow-lg">
                    {filteredComites.length > 0 ? (
                      filteredComites.map((comite) => (
                        <li
                          key={comite}
                          onClick={() => {
                            setSelectedComite(comite);
                            setSearch("");
                          }}
                          className="px-4 py-2 text-sm text-gray-200 hover:bg-cyan-600/40 cursor-pointer transition"
                        >
                          {comite}
                        </li>
                      ))
                    ) : (
                      <li className="px-4 py-2 text-sm text-gray-400">
                        No se encontró ningún comité
                      </li>
                    )}
                  </ul>
                )}
              </div>

              {/* Botón */}
              <div className="pt-4 col-span-1 md:col-span-2">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-transparent hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 text-cyan-400 hover:text-white font-bold py-3 px-8 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl border-2 border-cyan-500/50"
                >
                  Registrar <User className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </form>

            {/* Login */}
            <p className="mt-6 text-center text-sm text-gray-400 col-span-2">
              ¿Ya tienes una cuenta?{" "}
              <Link
                href="/login"
                className="text-cyan-400 hover:text-white hover:underline transition-colors"
              >
                Inicia sesión
              </Link>
            </p>
          </div>
        </section>

        {/* Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Footer />
        </div>
      </main>
    </div>
  );
}
