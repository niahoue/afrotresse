// src/components/Temoignages.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Nécessaire pour le fonctionnement du carrousel Bootstrap
import "../index.css"; // Importe votre fichier CSS personnalisé

const temoignagesData = [
  {
    nom: "Aïssata",
    avis: "Très belle coiffure, je recommande Afro-Tresse les yeux fermés !",
    note: 5,
  },
  {
    nom: "Nadia",
    avis: "Service rapide et coiffeuse très professionnelle. Je reviendrai !",
    note: 5,
  },
  {
    nom: "Fatou",
    avis: "Les tresses sont magnifiques et tiennent longtemps. Bravo !",
    note: 4,
  },
  {
    nom: "Estelle",
    avis: "Mon fils adore ses nouvelles tresses. Merci pour votre patience.",
    note: 5,
  },
  {
    nom: "Josiane",
    avis: "J’ai testé les Fulani, résultat sublime. Rien à redire.",
    note: 4,
  },
];

const renderStars = (note) => {
  // Affiche des étoiles Unicode. Peut être remplacé par des icônes si désiré.
  return "⭐".repeat(note);
};

const Temoignages = () => {
  return (
    <section className="py-5 temoignages-section bg-beige"> {/* Section avec un fond beige */}
      <div className="container">
        <h3 className="text-center mb-5 temoignages-title">Ce que disent nos clientes</h3> {/* Titre personnalisé */}
        <div
          id="carouselTemoignages"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {temoignagesData.map((t, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="card mx-auto temoignage-card"> {/* Carte personnalisée */}
                  <div className="card-body text-center">
                    <h5 className="card-title temoignage-name">{t.nom}</h5>
                    <p className="card-text temoignage-avis">"{t.avis}"</p>
                    <p className="text-warning mb-0 temoignage-note">{renderStars(t.note)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Contrôles du carrousel */}
          <button
            className="carousel-control-prev temoignages-carousel-control"
            type="button"
            data-bs-target="#carouselTemoignages"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Précédent</span>
          </button>
          <button
            className="carousel-control-next temoignages-carousel-control"
            type="button"
            data-bs-target="#carouselTemoignages"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Suivant</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Temoignages;