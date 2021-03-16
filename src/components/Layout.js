import React from "react";
import Navbar from "./Navigation";
import { Footer } from "./Navigation";

export default function Layout({ children }) {
  return (
    <div>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}