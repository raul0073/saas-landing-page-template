import { z } from "zod"
 
export const contactSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be greater than 2 letters"
  }).max(50, {
    message: "Name cannot be more than 50 letters"
  }),
  email: z.string().email({
    message: "Email must be valid."
  }),
  phone: z.string().min(10, {message: "Phone number must be 10 digits."}).max(10),
  message: z.string().min(5, {
    message: "Message must be at least 5 characters"
  }).max(250, {
    message: "Message cannot be more than 250 characters"
  })
})

export type ContactSchema = z.infer<typeof contactSchema>;