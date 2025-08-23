"use client";
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // para que cuando inicie sesion me lleve al dashboard
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simular login
    setTimeout(() => {
      setIsLoading(false);
      alert("Login simulado existosamente");
      router.push("/dashboard");
    }, 1500);
  };
  return (
    <>
      <div className="min-h-screen bg-slate-50 flex">
        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="text-center mb-8">
              <Link
                href="/"
                className="inline-flex items-center text-slate-600 hover:text-slate-800 mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al inicio
              </Link>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                Iniciar Sesión
              </h1>
              <p className="text-slate-600">
                Ingresa a tu cuenta para continuar
              </p>
            </div>

            {/* Login Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Correo electrónico
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Contraseña
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-12 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember & Forgot */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-sm text-slate-600">
                      Recordarme
                    </span>
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Iniciando sesión...
                    </div>
                  ) : (
                    "Iniciar Sesión"
                  )}
                </button>
              </form>

              {/* Sign Up Link */}
              <p className="mt-6 text-center text-sm text-slate-600">
                ¿No tienes una cuenta?{" "}
                <Link
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                >
                  Regístrate aquí
                </Link>
              </p>
            </div>
          </div>
        </div>
        {/* Left Side - Decorative Image */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 flex flex-col justify-center items-center p-12 text-white">
            <div className="max-w-md text-center">
              <h2 className="text-4xl font-bold mb-6">Bienvenido de vuelta</h2>
              <p className="text-xl text-indigo-100 mb-8">
                Accede a tu cuenta y continúa donde lo dejaste
              </p>
              <div className="w-24 h-1 bg-white/30 mx-auto rounded-full"></div>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/15 rounded-full blur-lg"></div>

          {/* Main Decorative Image */}
          <Image
            src="/modern-login-illustration.png"
            alt="Login illustration"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30"
          />
        </div>
      </div>
    </>
  );
}
