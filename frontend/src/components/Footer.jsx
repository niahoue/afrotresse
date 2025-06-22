// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css"; // Importe votre fichier CSS personnalisé
// Importez les icônes de lucide-react
import { Facebook, Instagram, Youtube, Phone, Mail, } from 'lucide-react'; // Ajout de l'icône YouTube pour TikTok si non disponible, ou d'autres icônes

const Footer = () => {
  return (
    <footer className="bg-brown text-white py-5 footer-custom">
      <div className="container">
        <div className="row justify-content-center text-center text-md-start">
          {/* Section 1: Logo/Informations sur la marque */}
          <div className="col-md-4 mb-4 mb-md-0">
            <Link to="/" className="text-white text-decoration-none d-inline-block">
              <h5 className="footer-brand mb-2 footer-heading-underline">Afro-Tresse</h5>
            </Link>
            <p className="footer-tagline small">
              L'élégance des tresses africaines, au bout de vos doigts.
            </p>
          </div>

          {/* Section 2: Liens rapides */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="footer-heading mb-3 footer-heading-underline">Liens rapides</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none footer-link">Accueil</Link></li>
              <li><Link to="/modeles" className="text-white text-decoration-none footer-link">Modèles</Link></li>
              <li><Link to="/a-propos" className="text-white text-decoration-none footer-link">À propos</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none footer-link">Contact</Link></li>
              <li><Link to="/produits" className="text-white text-decoration-none footer-link">Produits</Link></li> {/* Correction: /produits */}
            </ul>
          </div>

          {/* Section 3: Réseaux sociaux */}
          <div className="col-md-4">
            <h5 className="footer-heading mb-3 footer-heading-underline">Suivez-nous</h5>
            <div className="social-links d-flex justify-content-center justify-content-md-start">

            
              <a href="https://facebook.com/afrotresse" target="_blank" rel="noopener noreferrer" className="text-white mx-2 social-icon">
                <Facebook size={28} /> {/* Icône Facebook */}
              </a>
              <a href="https://instagram.com/afrotresse" target="_blank" rel="noopener noreferrer" className="text-white mx-2 social-icon">
                <Instagram size={28} /> {/* Icône Instagram */}
              </a>
              <a href="https://tiktok.com/afrotresse" target="_blank" rel="noopener noreferrer" className="text-white mx-2 social-icon">
                {/* Lucide-react n'a pas d'icône TikTok nativement. On peut utiliser Youtube ou une SVG personnalisée */}
                <Youtube size={28} /> {/* Utilisation de Youtube à la place de TikTok par défaut */}
              </a>
            </div>
          </div>
        </div>

        <hr className="my-4 border-white-50" /> {/* Ligne séparatrice */}

        {/* Droits d'auteur et liens légaux */}
        <div className="text-center">
          <p className="mb-1">
            © {new Date().getFullYear()} Afro-Tresse. Tous droits réservés.
          </p>
          <small>
            <Link to="/a-propos" className="text-white mx-2 footer-link">
              À propos
            </Link>
            |
            <Link to="/contact" className="text-white mx-2 footer-link">
              Contact
            </Link>
            |
            <Link to="/mentions-legales" className="text-white mx-2 footer-link">
              Mentions légales
            </Link>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;