// server.js (à placer dans le dossier racine de votre backend, ex: afrotresse-backend)

// Importations des modules nécessaires
require('dotenv').config(); // Charge les variables d'environnement depuis le fichier .env
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors'); // Pour gérer les requêtes cross-origin du frontend

// Initialisation de l'application Express
const app = express();
// Définit le port du serveur. Utilise le port défini dans .env ou 5000 par défaut.
const port = process.env.PORT || 5000;

// Vérification des variables d'environnement critiques
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error('ERREUR: Les variables d\'environnement EMAIL_USER et EMAIL_PASS ne sont pas configurées dans le fichier .env.');
  console.error('Veuillez créer un fichier .env à la racine du dossier backend avec EMAIL_USER=votre_email et EMAIL_PASS=votre_mot_de_passe_app.');
  process.exit(1); // Arrête l'application si les variables critiques sont manquantes
}

// --- Middlewares ---
// Middleware pour parser les requêtes JSON (nécessaire pour recevoir les données du formulaire)
app.use(express.json());

// Middleware CORS (Cross-Origin Resource Sharing)
// Permet à votre frontend (qui pourrait être sur un port différent) de communiquer avec ce backend.
// En développement, remplacez 'http://localhost:5173' par l'URL exacte de votre frontend.
// En production, mettez l'URL de domaine de votre site web (ex: 'https://afrotresse.com').
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173', // Permet les requêtes depuis votre frontend
  methods: ['GET', 'POST'], // Autorise les méthodes HTTP GET et POST
  allowedHeaders: ['Content-Type'], // Autorise l'envoi de l'en-tête Content-Type
}));

// --- Configuration de Nodemailer ---
// Crée un objet transporteur réutilisable en utilisant les identifiants de messagerie.
// Utilise les variables d'environnement pour la sécurité.
const transporter = nodemailer.createTransport({
  service: 'gmail', // Spécifie le service de messagerie (ex: 'gmail', 'outlook', 'yahoo')
                   // Si ce n'est pas un service connu, configurez 'host' et 'port' manuellement.
  auth: {
    user: process.env.EMAIL_USER, // Votre adresse e-mail, chargée depuis .env
    pass: process.env.EMAIL_PASS, // Votre mot de passe d'application ou mot de passe d'e-mail, chargé depuis .env
  },
});

// Vérifier la connectivité du transporteur (peut être fait au démarrage ou avant l'envoi)
transporter.verify(function (error, success) {
  if (error) {
    console.error('Erreur de configuration du transporteur Nodemailer:', error);
    console.error('Vérifiez vos identifiants EMAIL_USER et EMAIL_PASS dans le fichier .env.');
  } else {
    console.log('Nodemailer est prêt à envoyer des e-mails.');
  }
});


// --- Routes API ---

// Route POST pour l'envoi du formulaire de contact
app.post('/api/contact', async (req, res) => {
  // Destructuration des données envoyées par le frontend
  const { nom, email, message } = req.body;

  // Validation basique des données reçues
  if (!nom || !email || !message) {
    console.warn('Tentative de soumission de formulaire incomplète.');
    return res.status(400).json({ message: 'Tous les champs (Nom, Email, Message) sont requis.' });
  }

  // Crée l'objet mail avec les informations de l'expéditeur et du destinataire
  const mailOptions = {
    from: process.env.EMAIL_USER, // L'adresse e-mail qui envoie le mail (souvent la même que user)
    to: process.env.EMAIL_USER, // L'adresse e-mail où vous souhaitez recevoir les messages de contact (votre propre email)
    subject: `Nouveau message de contact de Afro-Tresse par ${nom}`, // Sujet de l'e-mail
    html: `
      <h3>Nouveau message de contact</h3>
      <p><strong>Nom:</strong> ${nom}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
      <br>
      <p>Ceci est un message automatisé depuis le formulaire de contact de votre site Afro-Tresse.</p>
    `, // Contenu de l'e-mail au format HTML
  };

  try {
    // Envoie l'e-mail via le transporteur Nodemailer
    const info = await transporter.sendMail(mailOptions);
    console.log(`Message de ${nom} (${email}) envoyé avec succès. ID du message: ${info.messageId}`);
    // Répond au frontend que l'envoi a réussi
    res.status(200).json({ message: 'Message envoyé avec succès !' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
    // Répond au frontend avec un statut d'erreur et un message
    res.status(500).json({
      message: 'Erreur lors de l\'envoi du message.',
      error: error.message,
      details: 'Vérifiez les logs du serveur pour plus d\'informations (accès, authentification, configuration Nodemailer).'
    });
  }
});

// Route de test simple pour vérifier que le serveur est bien démarré
app.get('/', (req, res) => {
  res.send(`Serveur backend Afro-Tresse en marche sur le port ${port} !`);
});

// --- Démarrage du serveur ---
app.listen(port, () => {
  console.log(`Serveur backend écoutant sur http://localhost:${port}`);
  console.log('Assurez-vous que vos variables d\'environnement EMAIL_USER et EMAIL_PASS sont correctement configurées dans le fichier .env.');
});
