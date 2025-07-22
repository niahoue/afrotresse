// src/components/ModelePopulaire.jsx

import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css"; // Assurez-vous que votre fichier CSS est importé

const modelesPopulaires = [
  {
    id: 1,
    nom: "Box Braids",
    image: "tresse7.png",
  },
  {
    id: 2,
    nom: "Cornrows",
    image: "torsade.png",
  },
  {
    id: 3,
    nom: "Vanilles",
    image: "tresse1.png",
  },
  {
    id: 4,
    nom: "Fulani",
    image: "tresse6.png",
  },
  {
    id: 5,
    nom: "Crochet Braids",
    image: "/crochet.png",
  },
  {
    id: 6,
    nom: "Tresses Enfant",
    image: "/tressebb.png",
  },
  {
    id: 7,
    nom: "Tresses Hommes",
    image: "/homme-tresse.png"
  },
  {
    id: 8,
    nom: "Tresses Personnalisées",
    image: "/personalisée.png",
  },
];

const ModelePopulaire = () => {
  return (
    <section className="py-5 bg-light modele-populaire-section"> {/* Ajout de la classe personnalisée */}
      <div className="container text-center">
        <h3 className="mb-5 modele-populaire-title">Nos Modèles de Tresses</h3> {/* Titre et marge */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 justify-content-center"> {/* Bootstrap grid */}
          {modelesPopulaires.map((modele) => (
            <div key={modele.id} className="col">
              <div className="modele-item"> {/* Conteneur pour chaque modèle */}
                <LazyLoadImage
                  src={modele.image}
                  className="img-fluid rounded modele-image" // Classes pour l'image
                  alt={modele.nom}
                  effect="blur"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x200/F5DEB3/2C2C2C?text=Image"; }}
                />
                <h5 className="mt-3 modele-name">{modele.nom}</h5> {/* Nom du modèle */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelePopulaire;
