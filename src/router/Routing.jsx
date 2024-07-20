import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";
import { PublicLayout } from "../components/layout/general/PublicLayout";
import PrivateLayout from "../components/layout/Privado/PrivateLayout";
import { Login } from "../components/user/Login";
import { Register } from "../components/user/Privado/Register";
import ContactForm from "../components/layout/general/ContactForm";
import { Feed } from "../components/publication/Feed";
import AuthProvider, { AuthContext } from "../context/AuthProvider";
import { Reports } from "../components/layout/general/Reports";
import { Information } from "../components/layout/general/Information";
import { Nosotros } from "../components/layout/general/Nosotros";

const AppRoutes = () => {
  const { auth, getProfile } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!auth) {
        await getProfile();
      }
      setLoading(false);
    };
    fetchProfile();
  }, [auth, getProfile]);

  if (loading) {
    return <div>Loading...</div>; // Mostrar un indicador de carga mientras se obtiene el perfil
  }

  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  console.log("Token:", token, "User:", user);

  const isAuthenticated = token && user;
  console.log("Is authenticated:", isAuthenticated);

  return (
    <Routes>
      <Route path="/" element={<PublicLayout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contacto" element={<ContactForm />} />
      <Route path="/noticias" element={<Reports />} />
      <Route path="/informacion" element={<Nosotros />} />
      <Route path="/nosotros" element={<Information />} />

      {/* Proteger la ruta de registro */}
      <Route
        path="/registro"
        element={isAuthenticated ? <Register /> : <Navigate to="/login" />}
      />

      {/* Ruta protegida que redirige a /login si no está autenticado */}
      <Route
        path="/private"
        element={isAuthenticated ? <PrivateLayout /> : <Navigate to="/login" />}
      />
      {/* Ruta por defecto dentro de /private */}
      <Route
        path="/private/feed"
        element={isAuthenticated ? <Feed /> : <Navigate to="/login" />}
      />

      <Route
        path="*"
        element={
          <>
            <h1>Error 404</h1>
            <Link to="/">Volver</Link>
          </>
        }
      />
    </Routes>
  );
};

const Routing = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Routing;
