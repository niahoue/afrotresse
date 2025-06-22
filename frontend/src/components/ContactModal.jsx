// src/components/ContactModal.jsx
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'; // Assurez-vous que votre fichier CSS est importé
import { XCircle } from 'lucide-react'; // Icône pour fermer la modale

const ContactModal = ({ isOpen, onClose, productName = '' }) => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: productName ? `Je suis intéressé(e) par le produit : ${productName}. J'aimerais en savoir plus sur les options de personnalisation et les prix.` : ''
  });
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', 'sending', null

  // Réinitialise le formulaire lorsque la modale s'ouvre pour un nouveau produit ou se ferme
  useEffect(() => {
    if (isOpen) {
      setFormData({
        nom: '',
        email: '',
        message: productName ? `Je suis intéressé(e) par le produit : ${productName}. J'aimerais en savoir plus sur les options de personnalisation et les prix.` : ''
      });
      setSubmissionStatus(null); // Réinitialise le statut de soumission
    }
  }, [isOpen, productName]);

  // Si la modale n'est pas ouverte, ne rien rendre du tout
  if (!isOpen) return null;

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
        // Fermer la modale après un court délai pour que l'utilisateur voie le message de succès
        setTimeout(() => onClose(), 2000);
      } else {
        // Tente de parser la réponse JSON même en cas d'erreur pour obtenir plus de détails
        let errorData = {};
        try {
            errorData = await response.json();
        } catch (jsonError) {
            console.error("Erreur de parsing JSON de la réponse d'erreur dans la modale:", jsonError);
            errorData = { message: `Réponse non JSON du serveur (Statut: ${response.status})` };
        }
        console.error("Erreur lors de l'envoi du message via la modale:", errorData);
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error("Erreur réseau ou autre problème lors de l'envoi via la modale:", error);
      setSubmissionStatus('error');
    } finally {
      // Masquer le message d'erreur/succès s'il n'y a pas de fermeture automatique
      // Seulement si le statut n'est pas 'success' (car le succès ferme déjà la modale)
      if (submissionStatus !== 'success') {
        setTimeout(() => setSubmissionStatus(null), 5000);
      }
    }
  };

  return (
    // Correction ici: Ajout de la classe 'show' dynamiquement
    <div className={`modal-overlay ${isOpen ? 'show' : ''}`}>
      <div className="modal-content-custom">
        <button className="modal-close-btn" onClick={onClose}>
          <XCircle size={28} />
        </button>
        <h4 className="modal-title">Demander un devis pour {productName || 'un produit personnalisé'}</h4>

        {submissionStatus === 'sending' && (
          <div className="alert alert-info text-center submission-message" role="alert">
            Envoi en cours...
          </div>
        )}
        {submissionStatus === 'success' && (
          <div className="alert alert-success text-center submission-message" role="alert">
            Votre demande a été envoyée avec succès ! Nous vous contacterons bientôt.
          </div>
        )}
        {submissionStatus === 'error' && (
          <div className="alert alert-danger text-center submission-message" role="alert">
            Une erreur est survenue lors de l'envoi. Veuillez réessayer.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="modalNom" className="form-label">Nom</label>
            <input
              type="text"
              className="form-control contact-input"
              id="modalNom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="modalEmail" className="form-label">Email</label>
            <input
              type="email"
              className="form-control contact-input"
              id="modalEmail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="modalMessage" className="form-label">Message</label>
            <textarea
              className="form-control contact-textarea"
              id="modalMessage"
              name="message"
              rows="5"
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
            {submissionStatus === 'sending' ? 'Envoi...' : 'Envoyer la demande'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
