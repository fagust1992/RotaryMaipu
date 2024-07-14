import React from "react";
import { Outlet } from "react-router-dom";
import { Register } from "../../user/Privado/Register"; // Importa usando {}

const PrivateLayout = () => {
  return (
    <>
      {/* LAYOUT */}
      <h1>Private Layout</h1>

      <section className="layout_content">
        <Outlet />
      </section>

      {/* Componentes específicos de la ruta privada */}
      <Register />
    </>
  );
};

export default PrivateLayout;
