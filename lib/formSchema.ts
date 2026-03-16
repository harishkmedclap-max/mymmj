import { z } from "zod";

export const formSchema = z.object({
  name:      z.string().min(2, "Name must be at least 2 characters"),
  email:     z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^\d{3}-\d{3}-\d{4}$/, "Use format 999-999-9999"),
  terms:     z.literal(true).refine((val) => val === true, {
    message: "You must accept terms",
  }),
  marketing: z.boolean().optional(),
});

export type FormSchemaType = z.infer<typeof formSchema>;