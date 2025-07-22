// src/pages/Modeles.jsx
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../index.css";

const donneesTresses = [
  {
    id: 1,
    nom: " Braids",
    image: "tressebb1.png",
  },
  {
    id: 2,
    nom: "Cornrows",
    image: "tresse5.png",
  },
  {
    id: 3,
    nom: "Vanilles",
    image: "tresse4.png",
  },
  {
    id: 4,
    nom: "Fulani",
    image: "tresse7.png",
  },
  {
    id: 5,
    nom: "Crochet Braids",
    image: "tresse1.png",
  },
  {
    id: 6,
    nom: "Tresses Enfant",
    image: "tressebb.png",
  },
  {
    id: 7,
    nom: "Tresses Hommes",
    image: "homme-tresse.png",
  },
  {
    id: 8,
    nom: "Personnalisées",
    image: "personalisée.png",
  },
];

const Modeles = () => {
  const [tresses, setTresses] = useState(donneesTresses);

  return (
    <div className="fade-in">
      <Header />
      <div className="container py-5 slide-in-up">
        <h2 className="mb-4 text-center">Nos Modèles de Tresses</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
          {tresses.map((modele) => (
            <div className="col text-center" key={modele.id}>
              <LazyLoadImage
                src={modele.image}
                alt={modele.nom}
                className="img-fluid rounded mb-2 modele-image"
                effect="blur"
              />
              <h5 className="modele-name">{modele.nom}</h5>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Modeles;
