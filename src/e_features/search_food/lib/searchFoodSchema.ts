import { z } from "zod";
const CategorySchema = z.object({
    id: z.number(),
    created_at: z.string(),
    updated_at: z.string(),
    deleted_at: z.string().nullable(),
    name: z.string(),
    products: z.any().nullable(),
    image: z.string().nullable()
})
const ProductSchema = z.object({
    id: z.number(),
    name: z.string(),
    category_id: z.number(),
    category: CategorySchema,
    image: z.string().nullable(),
    protein: z.number(),
    fat: z.number(),
    carbs: z.number(),
    calories: z.number(),
});

const FoodSchema = z.object({
    id: z.number(),
    created_at: z.string(),
    image: z.string().nullable(),
    name: z.string(),
    products: z.any().nullable(),
    protein: z.number(),
    fat: z.number(),
    carbs: z.number(),
    calories: z.number(),
    user_id: z.number(),
    is_public: z.boolean(),
    receipt: z.any().nullable(),
});
const DataSchema = z.object({
    food: z.array(FoodSchema).nullable(),
    product: z.array(ProductSchema).nullable(),

});

export const ApiResponseSchema = z.object({
    response_status: z.number(),
    data: DataSchema,
    error: z.union([z.null(), z.array(z.string())])
});
export const defaultApiResponse: ApiResponse = {
    error: null,
    data: {
        product: null,
        food: null,
    },
    response_status: 0,
};
export type ApiResponse = z.infer<typeof ApiResponseSchema>;
export type Food = z.infer<typeof FoodSchema>;
export type Product = z.infer<typeof ProductSchema>;
export type Category = z.infer<typeof CategorySchema>;
export type Data = z.infer<typeof DataSchema>;


