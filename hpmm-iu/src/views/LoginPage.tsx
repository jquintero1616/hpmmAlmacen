import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/layouts/Header";
import { Footer } from "../components/layouts/Footer";
import { useAuth } from "../hooks/useAuth";
import axios from "axios";
import Input from "../components/atoms/input";
import Button from "../components/atoms/Button";
// 1) Importa tu logo:
import logo from "../assets/hpmm.png";

const LoginPage: React.FC = () => {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const { authenticate } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await authenticate(email, password);
      navigate("/home");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        setLoginError("* Credenciales incorrectas.");
      } else {
        setLoginError("* Error al iniciar sesión.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center px-4">
        <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-8">
          
          {/* 2) Aquí metes tu logo centrado */}
          <div className="flex justify-center mb-4">
            <img src={logo} alt="HPMM Logo" className="h-12 w-auto" />
          </div>

          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Iniciar Sesión
          </h2>

          <form onSubmit={handleLogin} className="space-y-5">
            <Input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              placeholder="tu@correo.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <Input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Contraseña"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {loginError && (
              <p className="text-red-600 text-sm text-center">{loginError}</p>
            )}

            <Button
              type="submit"
              variant="primary"
              className="w-full py-2 transition hover:bg-blue-700"
            >
              Entrar
            </Button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LoginPage;
