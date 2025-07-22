// src/pages/APropos.jsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const APropos = () => {
  return (
    <div className="fade-in">
      <Header />
      <div className="container py-5 apropos-section">
        <h2 className="mb-4 text-center apropos-title slide-in-up">À propos de Afro-Tresse</h2>

        <div className="row align-items-center slide-in-up">
          <div className="col-md-6">
            <img
              src="equipe.jpg"
              alt="Notre équipe"
              className="img-fluid rounded shadow-sm mb-4 mb-md-0 apropos-image"
            />
          </div>
          <div className="col-md-6">
            
             <p className="apropos-paragraph">
              Afro-Tresse est bien plus qu'une simple plateforme de coiffure ; c'est une véritable célébration de la beauté et de la culture africaine à travers l'art ancestral de la tresse. Fondée par des passionnés animés par un profond respect pour les traditions capillaires africaines et un désir d'innovation, notre mission est de proposer des styles variés, modernes et traditionnels, tout en respectant l'identité unique et la personnalité de chaque individu.
            </p>
            <p className="apropos-paragraph">
              {" "}
              Nos coiffeuses professionnelles allient expertise et créativité
              pour offrir une expérience unique à chaque cliente. Grâce à notre
              site, vous pouvez découvrir les modèles populaires, réserver une
              séance et même partager votre témoignage !{" "}
            </p>
            <p className="apropos-paragraph">
              {" "}
              Nous croyons en une beauté authentique, naturelle et inspirée.
              Merci de faire partie de l’univers Afro-Tresse.{" "}
            </p>
           <p className="apropos-paragraph">
              Notre site a été conçu pour vous offrir une expérience fluide et inspirante. Vous pouvez y découvrir un large éventail de modèles populaires, explorer les dernières tendances, et trouver l'inspiration pour votre prochaine coiffure. Grâce à notre système de réservation intuitif, prendre rendez-vous pour une séance de tressage n'a jamais été aussi simple. Nous encourageons également nos client(e)s à partager leur expérience et leur témoignage, car votre satisfaction est notre plus grande récompense.
            </p>
            <p className="apropos-paragraph">
              
              Nous croyons en une beauté authentique, naturelle et inspirée.
              Merci de faire partie de l’univers Afro-Tresse.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default APropos;
