import { z } from 'zod';

export const GetBzuResponseSchema = z.object({
    response_status: z.number(),
    data: z.object({
        id: z.string(),
        user_id: z.string(),
        created_at: z.string().datetime(),
        updated_at: z.string().datetime(),
        max: z.number(),
        day: z.string().transform((val) => new Date(val)),
        current: z.number(),
    }),
    error: z.null().or(z.string()),
});
