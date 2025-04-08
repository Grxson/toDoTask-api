import { z } from 'zod';
// Zod funciona para validar esquemas ( schemas )

export const registerSchema = z.object({

    name: z.string().min(1), // La cadena debe de ser de al menos 1 carácter
    email: z.string().email(), // 'email' debe de ser de formato de correo electrónico
    password: z.string().min(6) // minimo de 6 caracteres
})

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})