import { z } from "zod";

export const registerSchema = z.object({
    username: z.string().min(3, "username minimal 3 karakter").max(15, "username maksimal 15 karakter"),
    email: z.string().email(),
    password: z.string().min(4, "password minimal 4 karakter")
})

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4, "password minimal 4 karakter"),
})