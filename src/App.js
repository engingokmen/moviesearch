import React from "react";
import { Router } from "@reach/router";
import { Listing } from "./views/Listing";
import { Detail } from "./views/Detail";
import { Header, Footer } from "./components/Layout";

export default function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Router className="index">
          <Listing path="/" />
          <Detail path="detail/:id" />
        </Router>
      </div>
      <Footer />
    </>
  );
}
