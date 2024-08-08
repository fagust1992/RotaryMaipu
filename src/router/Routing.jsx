import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";
import { PublicLayout } from "../components/layout/general/PublicLayout";
import PrivateLayout from "../components/layout/Privado/PrivateLayout";
import { Login } from "../components/user/Login";
import { Register } from "../components/user/Privado/Register";
import ContactForm from "../components/layout/general/ContactForm";
import AuthProvider, { AuthContext } from "../context/AuthProvider";
import { Reports } from "../components/layout/general/Reports";
import { Information } from "../components/layout/general/Information";
import { Nosotros } from "../components/layout/general/Nosotros";
import { PerfiUser } from "../components/layout/Privado/PerfiUser";
import GeneradorPDF from "../components/layout/general/GeneradorPDF";
import MaintenancePage from "../components/layout/general/MaintenancePage";

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
    return <div>Loading...</div>;
  }

  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  const isAuthenticated = token && user;

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Navigate to="/perfil" /> : <PublicLayout />} />
      <Route path="/contacto" element={<ContactForm />} />
      <Route path="/noticias" element={<Reports />} />
      <Route path="/informacion" element={<Nosotros />} />
      <Route path="/nosotros" element={<Information />} />
      <Route path="/login" element={<MaintenancePage/>} />
      <Route path="/perfil" element={isAuthenticated ? <PerfiUser /> : <Navigate to="/login" />} />
      <Route path="/registro" element={<Register/> } />
      <Route path="*" element={<><h1>Error 404</h1><Link to="/">Volver</Link></>} />
      <Route path="/generate" element={<GeneradorPDF />} /> {/* Nueva ruta */}
   
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
