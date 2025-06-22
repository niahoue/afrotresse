import React from "react";
import Header from "../components/Header";
import Temoignages from "../components/Temoignages";
import "../index.css";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ModelePopulaires from "../components/ModelePopulaires";

export default function Home() {
  return (
    <div className="home-page">
      <Header />
      <main>
        <Hero />
        <ModelePopulaires />
        <Temoignages />
      </main>
      <Footer/>
    </div>
  );
}
