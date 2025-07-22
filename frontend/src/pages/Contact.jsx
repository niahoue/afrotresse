// src/pages/Contact.jsx
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

// Importez les icônes de lucide-react
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ nom: "", email: "", message: "" });
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', 'sending', null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('sending'); // Indiquer que l'envoi est en cours

    try {
      // CORRECTION ICI : L'URL du backend est maintenant codée en dur pour le développement.
      // Assurez-vous que le port (5000) correspond au port sur lequel votre backend écoute.
      const backendUrl = 'http://localhost:5000/api/contact';
      // IMPORTANT : En production, cette URL devra être remplacée par l'URL de votre serveur backend déployé.
      // Une meilleure pratique pour le développement est d'utiliser un proxy Vite, voir les suggestions après ce code.

      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({ nom: "", email: "", message: "" }); // Réinitialiser le formulaire
      } else {
        // Tente de parser la réponse JSON même en cas d'erreur pour obtenir plus de détails
        let errorData = {};
        try {
            errorData = await response.json();
        } catch (jsonError) {
            console.error("Erreur de parsing JSON de la réponse d'erreur:", jsonError);
            errorData = { message: `Réponse non JSON du serveur (Statut: ${response.status})` };
        }
        console.error("Erreur lors de l'envoi du message:", errorData);
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error("Erreur réseau ou autre problème:", error);
      setSubmissionStatus('error');
    } finally {
      setTimeout(() => setSubmissionStatus(null), 5000); // Masquer le message après 5 secondes
    }
  };

  return (
    <div className="fade-in">
      <Header />
      <div className="container py-5 contact-section">
        <h2 className="mb-5 text-center contact-title slide-in-up">Contactez-nous</h2>
        {/* Ajout de d-flex et align-items-stretch ici pour que les colonnes aient la même hauteur */}
        <div className="row justify-content-center d-flex align-items-stretch slide-in-up">
          {/* Section Informations de Contact */}
          {/* Utilisation de col-md-5 et col-lg-4 pour un meilleur alignement visuel et répartition */}
          <div className="col-md-5 col-lg-4 mb-4 mb-md-0 contact-info-container d-flex flex-column justify-content-center">
            <h4 className="contact-info-heading mb-4">Besoin d'aide ?</h4>
            <p className="contact-info-text">
              N'hésitez pas à nous contacter pour toute question, suggestion ou pour prendre rendez-vous. Nous sommes là pour vous aider !
            </p>
            <ul className="list-unstyled contact-details mt-auto"> {/* mt-auto pousse vers le bas si le contenu est court */}
              <li className="d-flex align-items-start mb-3">
                <MapPin size={24} className="me-3 contact-icon" />
                <span>
                  123 Rue de la Tresse, Quartier Bohème <br />
                  01 BP 1234 Abidjan, Côte d'Ivoire
                </span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <Phone size={24} className="me-3 contact-icon" />
                <span>+225 07 00 00 00 00</span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <Mail size={24} className="me-3 contact-icon" />
                <span>contact@afrotresse.com</span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <Clock size={24} className="me-3 contact-icon" />
                <span>
                  Lun - Sam: 09h00 - 18h00 <br />
                  Dimanche: Fermé
                </span>
              </li>
            </ul>
          </div>

          {/* Section Formulaire de Contact */}
          {/* Utilisation de col-md-6 et col-lg-7 pour un meilleur alignement visuel et répartition */}
          <div className="col-md-6 col-lg-7">
            <h4 className="contact-form-heading mb-4">Envoyez-nous un message</h4>
            {submissionStatus === 'sending' && (
              <div className="alert alert-info text-center submission-message" role="alert">
                Envoi en cours...
              </div>
            )}
            {submissionStatus === 'success' && (
              <div className="alert alert-success text-center submission-message" role="alert">
                Merci {formData.nom || "!"}, votre message a été envoyé avec succès ! Nous vous répondrons bientôt.
              </div>
            )}
            {submissionStatus === 'error' && (
              <div className="alert alert-danger text-center submission-message" role="alert">
                Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer.
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="mb-3">
                <label htmlFor="nom" className="form-label">
                  Nom
                </label>
                <input
                  type="text"
                  className="form-control contact-input"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control contact-input"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control contact-textarea"
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn cta-button contact-submit-btn"
                disabled={submissionStatus === 'sending'}
              >
                {submissionStatus === 'sending' ? 'Envoi...' : 'Envoyer le message'}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
