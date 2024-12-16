// server/routes/contact.js
import express from 'express';
import { sendContactEmail } from '../services/email.js';
import { validateContactForm } from '../validators/contact.js';

export const contactRouter = express.Router();

contactRouter.get('/test', (req, res) => {
  res.json({ message: 'Server is running!' });
});

contactRouter.post('/', async (req, res) => {
  try {
    // Validate form data
    const validatedData = validateContactForm(req.body);

    // Send email
    await sendContactEmail(validatedData);

    res.json({ 
      success: true, 
      message: 'Message envoyé avec succès' 
    });
  } catch (error) {
    if (error.name === 'ZodError') {
      return res.status(400).json({ 
        success: false, 
        message: 'Données invalides', 
        errors: error.errors 
      });
    }

    console.error('Contact form error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Erreur lors de l\'envoi du message' 
    });
  }
});
