import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().regex(/^[0-9+ ]{10,}$/, 'Numéro de téléphone invalide'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});

export function validateContactForm(data) {
  return contactSchema.parse(data);
}