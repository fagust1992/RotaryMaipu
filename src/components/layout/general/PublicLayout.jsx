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
  console.log(auth._id); // Opcional: Para verificar el valor de auth._id
console.log("estoy en principal")
  return (
    <>
      {/* LAYOUT */}
      <Header />
      <Widgets />
      <Banner />
      <BannerWithImage />
      <Gallery />

      <News showAll = {false} />
      <Footer />
      <section className="layout_content">
        {auth._id ? <Navigate to="" /> : <Outlet />}
      </section>
    </>
  );
};

export default PublicLayout;
