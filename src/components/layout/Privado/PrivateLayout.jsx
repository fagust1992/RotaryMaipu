import React from "react";
import { Outlet } from "react-router-dom";
import PrivateHeader from "./Privateheader";



const PrivateLayout = () => {
  return (
    <>
      {/* HEADER */}
      <PrivateHeader />

      {/* LAYOUT */}
      <h1>Private Layout</h1>

      <section className="layout_content">
        <Outlet />
      </section>
    </>
  );
};

export default PrivateLayout;
