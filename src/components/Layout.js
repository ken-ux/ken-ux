import React from "react";
import Navbar from "./Navigation";
import { Footer } from "./Navigation";

export default function Layout({ children }) {
  const pageStyles = {
    backgroundColor: "white", //#f8e3d5
    fontFamily: "-apple-system, Roboto, sans-serif, serif"
  }
  return (
    <div>
        <Navbar />
          <div className="px-5" style={pageStyles}>
            {children}
          </div>
        <Footer />
    </div>
  )
}