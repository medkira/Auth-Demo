import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  confirmPassword: z.string().min(8, "Confirm Password must be at least 8 characters long"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});


export const createAppointmentSchema = z.object({
  appointment_date: z.string().min(1, "Appointment date is required"),
  appointment_time: z.string().min(1, "Appointment time is required"),
  patient: z.object({
    id: z.number().min(1, 'Patient ID is required'),
    // phone_number: z.string().min(1, 'Phone number is required'),
  }),
  reminder_sent: z.boolean(),
  doctor_id: z.string().min(1, 'Doctor ID is required'),
});

// Define the error object type
interface ErrorObject {
  error?: string;
  fieldErrors?: Record<string, string[]>;
}