import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Header from "../../../components/layout/general/Header";
import { Widgets } from "./Widgets";
import Profile from "../../../hooks/Profile"; // Ajusta la ruta según sea necesario
import { Banner, BannerWithImage, News } from "./Banner";
import Gallery from "./Gallery";
import Footer from "./Footer";

export const PublicLayout = () => {
  const auth = Profile(); // Asegúrate de que el hook se llame Profile

  console.log(auth); // Opcional: Para verificar el valor de auth._id
  console.log("estoy en principal");

  // Verificar si auth._id está definido y tiene un valor
  if (auth._id) {
    return <Navigate to="/perfil" />;
  }

  return (
    <>
      {/* LAYOUT */}
      <Header />
      <Widgets />
      <Banner />
      <BannerWithImage />
      <Gallery />
      <News showAll={false} />
      <Footer />

      <section className="layout_content">
        <Outlet />
      </section>
    </>
  );
};

export default PublicLayout;

