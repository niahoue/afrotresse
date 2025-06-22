// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../index.css"; // Assurez-vous que ce chemin est correct

const Header = () => (
  <header className="bg-brown py-3 px-4 d-flex justify-content-between align-items-center header-custom">
    <div className="d-flex align-items-center">
      <Link to="/" className="d-flex align-items-center logo-link">
        <img src="/logoAF.png" alt="Afro-Tresse Logo" className="header-logo" />
        <h1 className="text-white site-title ms-2">Afro-Tresse</h1>
      </Link>
    </div>
    <nav>
      <Link to="/" className="text-white mx-3 nav-link-custom">
        Accueil
      </Link>
      <Link to="/modeles" className="text-white mx-3 nav-link-custom">
        Modèles
      </Link>
      <Link to="/produits"className="text-white mx-3 nav-link-custom">
        Produits
      </Link>
      <Link to="/a-propos" className="text-white mx-3 nav-link-custom">
        A propos
      </Link>
      <Link to="/contact" className="text-white mx-3 nav-link-custom">
        Contact
      </Link>
    </nav>
  </header>
);

export default Header;