import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Header from "../../../components/layout/general/Header";
import { Widgets } from "./Widgets";
import Profile from "../../../hooks/Profile";
import { Banner, BannerWithImage, News } from "./Banner";
import Gallery from "./Gallery";
import Footer from "./Footer";

export const PublicLayout = () => {
  const auth = Profile(); 

  console.log(auth);
  console.log("estoy en principal");

  if (auth._id) {
    return <Navigate to="/perfil" />;
  }

  return (
    <>
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


