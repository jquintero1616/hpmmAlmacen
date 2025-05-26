import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import axios from "axios";
import LoginForm from "../components/molecules/LoginForm";
import LoginCard from "../components/organisms/LoginCard";
import { motion, AnimatePresence } from "framer-motion";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);
  const navigate = useNavigate();
  const { authenticate } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(""); // Limpia el error anterior

    // Validación previa
    if (!email || !password) {
      setLoginError("Debes ingresar correo y contraseña.");
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    setLoading(true);
    try {
      await authenticate(email, password);
      navigate("/home");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        setLoginError("* Credenciales incorrectas.");
        setShake(true);
        setTimeout(() => setShake(false), 500);
      } else {
        setLoginError("* Error al iniciar sesión.");
        setShake(true);
        setTimeout(() => setShake(false), 500);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-blue-100"
    >
      <LoginCard>
        <div className="w-full max-w-xs mx-auto">
          <AnimatePresence>
            {loginError && (
              <motion.div
                key={loginError}
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  x: shake ? [0, -10, 10, -10, 10, 0] : 0,
                }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="mb-6 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white/90 shadow-lg border border-red-200 backdrop-blur-sm"
              >
                <span className="text-red-500 text-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
                  </svg>
                </span>
                <span className="text-red-600 font-semibold text-sm">{loginError}</span>
              </motion.div>
            )}
          </AnimatePresence>
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-purple-500"></div>
            </div>
          ) : (
            <LoginForm
              email={email}
              password={password}
              error={""} // El error ya se muestra arriba con animación
              onEmailChange={(e) => setEmail(e.target.value)}
              onPasswordChange={(e) => setPassword(e.target.value)}
              onSubmit={handleLogin}
            />
          )}
        </div>
      </LoginCard>
    </motion.div>
  );
};

export default LoginPage;