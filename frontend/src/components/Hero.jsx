// src/components/Hero.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Assurez-vous que Bootstrap est importé
import "../index.css"; // Assurez-vous que votre fichier CSS est importé

const Hero = () => {
  return (
    <section className="hero-section bg-beige py-5">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
        {/* Section de texte à gauche */}
        <div className="hero-text text-center text-md-start mb-4 mb-md-0">
          <h2 className="hero-title">Sublimez Vous avec des Tresses Africaines</h2>
          <p className="hero-description mt-3 mb-4">
            Découvrez nos coiffures uniques et élégantes pour mettre en valeur votre beauté naturelle.
          </p>
          <button className="cta-button">Réserver une Tresse</button>
        </div>

        {/* Section de l'image à droite */}
        <div className="hero-image-container">
          {/* Remplacez cette URL par votre image réelle si disponible */}
          <img
            src="/hero-image.png"
            alt="Femme avec des tresses africaines"
            className="hero-image img-fluid"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/450x450/F5DEB3/2C2C2C?text=Image+non+disponible"; }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;