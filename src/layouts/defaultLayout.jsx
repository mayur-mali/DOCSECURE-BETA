import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function defaultLayout(props) {
  return (
    <div className="min-h-screen h-auto text-white">
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}
