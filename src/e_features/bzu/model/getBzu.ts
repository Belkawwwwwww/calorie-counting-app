import { z } from 'zod';

export const GetBzuResponseSchema = z.object({
    response_status: z.number(),
    data: z.object({
        id: z.number(),
        user_id: z.number(),
        created_at: z.string().datetime(),
        updated_at: z.string().datetime(),
        max: z.number(),
        day: z.string(),
        current: z.number(),
        carbs: z.number(),
        fat: z.number(),
        protein: z.number(),
    }),
    error: z.null().or(z.string()),
});
