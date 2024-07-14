import React from "react";
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";
import { PublicLayout } from "../components/layout/general/PublicLayout";
import PrivateLayout from "../components/layout/Privado/PrivateLayout";
import { Login } from "../components/user/Login";
import { Register } from "../components/user/Privado/Register";
import ContactForm from "../components/layout/general/ContactForm"
import { Feed } from "../components/publication/Feed";
import AuthProvider from "../context/AuthProvider";
import { Reports } from "../components/layout/general/Reports";
import { Information } from "../components/layout/general/Information";
import { Nosotros } from "../components/layout/general/Nosotros";


const Routing = () => {
  const isAuthenticated = false; // Aquí deberías tener la lógica para determinar si el usuario está autenticado

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PublicLayout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacto" element={<ContactForm />} />
          <Route path="/noticias" element={<Reports />} />
          <Route path="/informacion" element={<Nosotros/>} />
          <Route path="/nosotros" element={<Information/>} />

          {/* Ruta protegida que redirige a /login si no está autenticado */}
          <Route
            path="/private"
            element={
              isAuthenticated ? <PrivateLayout /> : <Navigate to="/login" />
            }
          />

          {/* Ruta por defecto dentro de /private */}
          <Route path="/private/feed" element={<Feed />} />
          <Route
            path="*"
            element={
              <>
                <p>
                  <h1>Error 404</h1>
                  <Link to="/">Volver</Link>
                </p>
              </>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Routing;
