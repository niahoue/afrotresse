// src/pages/MentionsLegales.jsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css"; 
const MentionsLegales = () => {
  return (
    <div className="fade-in">
      <Header />
      <div className="container py-5 legal-notice-section">
        <h2 className="mb-5 text-center legal-notice-title slide-in-up">Mentions Légales</h2>

        <div className="legal-content slide-in-up">
          <p className="legal-paragraph">
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site Afro-Tresse l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
          </p>

          <h3 className="legal-subsection-title mt-4 mb-3">Éditeur du site</h3>
          <p className="legal-paragraph">
            Le présent site, accessible à l’URL afrotresse.com, est édité par :<br />
            <strong>[webklor]</strong><br />
            Forme juridique : SARL<br />
            Numéro SIRET : 552-178-639-00132<br />
            Adresse : 75 Rue des Balance <br />
            Téléphone : 0767758052<br />
            Adresse e-mail : webklorci@gmail.com
          </p>

          <h3 className="legal-subsection-title mt-4 mb-3">Hébergement</h3>
          <p className="legal-paragraph">
            Le site est hébergé par la société : [Nom de l'hébergeur]<br />
            Adresse : [Adresse de l'hébergeur]<br />
            Téléphone : [Téléphone de l'hébergeur - si disponible]<br />
            Site web : [Site web de l'hébergeur]
          </p>

          <h3 className="legal-subsection-title mt-4 mb-3">Directeur de la publication</h3>
          <p className="legal-paragraph">
            Le Directeur de la publication du site est : <strong>[Nom & Prénom du Directeur de la publication]</strong>.
          </p>

          <h3 className="legal-subsection-title mt-4 mb-3">Propriété intellectuelle</h3>
          <p className="legal-paragraph">
            Tous les éléments du site [afrotresse.com], y compris les textes, graphismes, logos, icônes, photographies, plans, sons, sont la propriété exclusive de [Nom de votre entreprise/responsable] à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de [Nom de votre entreprise/responsable].
          </p>

          <h3 className="legal-subsection-title mt-4 mb-3">Données personnelles</h3>
          <p className="legal-paragraph">
            La collecte et le traitement des données personnelles sont réalisés conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés. Pour plus d'informations sur la manière dont nous traitons vos données personnelles, veuillez consulter notre [Lien vers votre Politique de Confidentialité si vous en avez une, sinon supprimez cette partie ou créez-en une].
          </p>

          <h3 className="legal-subsection-title mt-4 mb-3">Cookies</h3>
          <p className="legal-paragraph">
            L'utilisateur est informé que lors de ses visites sur le site, un ou des cookies sont susceptibles de s'installer automatiquement sur son ordinateur par l'intermédiaire de son logiciel de navigation. Un cookie est un bloc de données qui ne permet pas d'identifier l'utilisateur, mais qui enregistre des informations relatives à la navigation de celui-ci sur le site. Le paramétrage du logiciel de navigation permet d'informer de la présence de cookie et éventuellement, de la refuser. Pour plus d'informations, veuillez consulter notre [Lien vers votre Politique de Cookies si vous en avez une].
          </p>

          <h3 className="legal-subsection-title mt-4 mb-3">Litiges</h3>
          <p className="legal-paragraph">
            Les présentes conditions d'utilisation du site sont régies par la loi française et soumises à la compétence des tribunaux français. En cas de litige, les parties s'engagent à rechercher une solution amiable avant toute action judiciaire.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MentionsLegales;
