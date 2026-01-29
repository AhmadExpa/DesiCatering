import { z } from "zod";

// Even without a DB, we use schema.ts to define our data models for the frontend

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Types for our static data
export interface Deal {
  id: number;
  image: string;
  title: string;
  description?: string;
}

export interface MenuItem {
  id: number;
  category: string; // Pizza, Burgers, Wraps, Wings, Shakes, Shisha
  image: string;
  title: string;
}

export interface ActionLink {
  title: string;
  url: string;
  type: 'pdf' | 'uber' | 'deliveroo' | 'just-eat';
  icon?: string;
}
