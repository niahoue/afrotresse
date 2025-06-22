// src/pages/Produits.jsx
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css"; // Assurez-vous que votre fichier CSS est importé
import ContactModal from "../components/ContactModal"; // Importez le nouveau composant de modale

// Données fictives pour les produits
const produitsData = [
  {
    id: 1,
    nom: "Huile de Croissance Capillaire",
    image: "https://placehold.co/300x250/FFF8E7/2C2C2C?text=Huile+Croissance",
    categorie: "produit"
  },
  {
    id: 2,
    nom: "Shampoing Hydratant Sans Sulfate",
    image: "https://placehold.co/300x250/FFF8E7/2C2C2C?text=Shampoing",
    categorie: "produit"
  },
  {
    id: 3,
    nom: "Après-Shampoing Démêlant",
    image: "https://placehold.co/300x250/FFF8E7/2C2C2C?text=Apres+Shampoing",
    categorie: "produit"
  },
  {
    id: 4,
    nom: "Masque Capillaire Réparateur",
    image: "https://placehold.co/300x250/FFF8E7/2C2C2C?text=Masque+Reparateur",
    categorie: "produit"
  },
  {
    id: 5,
    nom: "Perruque Lace Front (Kinky Curly)",
    image: "https://placehold.co/300x250/FFF8E7/2C2C2C?text=Perruque+Kinky",
    categorie: "perruque"
  },
  {
    id: 6,
    nom: "Perruque Lace Front (Deep Wave)",
    image: "https://placehold.co/300x250/FFF8E7/2C2C2C?text=Perruque+Deep",
    categorie: "perruque"
  },
  {
    id: 7,
    nom: "Gel Coiffant Fortifiant",
    image: "https://placehold.co/300x250/FFF8E7/2C2C2C?text=Gel+Coiffant",
    categorie: "produit"
  },
  {
    id: 8,
    nom: "Sérum Brillance Protecteur",
    image: "https://placehold.co/300x250/FFF8E7/2C2C2C?text=Serum+Brillance",
    categorie: "produit"
  },
  {
    id: 9,
    nom: "Perruque Tressée (Box Braids)",
    image: "https://placehold.co/300x250/FFF8E7/2C2C2C?text=Perruque+Tressee",
    categorie: "perruque"
  },
  {
    id: 10,
    nom: "Bonnet en Satin pour Cheveux",
    image: "https://placehold.co/300x250/FFF8E7/2C2C2C?text=Bonnet+Satin",
    categorie: "produit"
  },
];

const Produits = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductName, setSelectedProductName] = useState('');

  const handleOrderClick = (productName) => {
    setSelectedProductName(productName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProductName(''); // Réinitialise le nom du produit sélectionné
  };

  return (
    <>
      <Header />
      <div className="container py-5 produits-section">
        <h2 className="mb-5 text-center produits-title">Nos Produits Capillaires & Perruques</h2>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
          {produitsData.map((produit) => (
            <div key={produit.id} className="col">
              <div className="card h-100 product-card shadow-sm">
                <img
                  src={produit.image}
                  className="card-img-top product-image"
                  alt={produit.nom}
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x250/FFF8E7/2C2C2C?text=Image"; }}
                />
                <div className="card-body d-flex flex-column align-items-center">
                  <h5 className="card-title product-name">{produit.nom}</h5>
                  <p className="card-text product-contact-text mt-auto mb-3">Contactez-nous pour le prix personnalisé.</p>
                  <button
                    onClick={() => handleOrderClick(produit.nom)} // Ouvre la modale
                    className="btn cta-button order-btn"
                  >
                    Commander
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />

      {/* La modale de contact */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={closeModal}
        productName={selectedProductName}
      />
    </>
  );
};

export default Produits;
