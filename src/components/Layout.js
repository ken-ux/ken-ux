import React from "react";
import Navbar from "./Navigation";
import { Footer } from "./Navigation";

export default function Layout({ children }) {
  return (
    <div>
        <Navbar />
          <div className="page px-5">
            {children}
          </div>
        <Footer />
    </div>
  )
}