import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/header";
import Footer from "../common/footer";
import ScrollToTop from "../components/Scrolltotop"

export default function DefaultLayout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="main-body">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
