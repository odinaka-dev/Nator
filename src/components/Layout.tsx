// import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <section className="">
        <Header />
        <Outlet />
        <Footer />
      </section>
    </>
  );
};

export default Layout;
