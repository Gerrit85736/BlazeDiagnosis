import { z } from 'zod';

export const createVehicleSchema = z.object({
  primaryCustomerId: z.string().uuid(),
  vin: z.string().optional(),
  registrationNumber: z.string().optional(),
  make: z.string().min(1),
  model: z.string().min(1),
  year: z.number().int().optional(),
  mileage: z.number().int().optional(),
  engineDetails: z.string().optional(),
  fuelType: z.string().optional(),
  transmission: z.string().optional(),
  color: z.string().optional(),
  notes: z.string().optional(),
});

export type CreateVehicleInput = z.infer<typeof createVehicleSchema>;
