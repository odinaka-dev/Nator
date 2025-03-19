// import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <section className="">
        <Header />
        <Outlet />
      </section>
    </>
  );
};

export default Layout;
