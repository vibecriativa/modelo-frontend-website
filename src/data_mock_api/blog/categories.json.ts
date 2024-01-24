import type { APIRoute } from "astro"

export const categories = [
    { "name": "Tecnologia", "slug": "tecnologia" },
    { "name": "Novidades", "slug": "novidades" },
    { "name": "Dicas", "slug": "dicas" },
    { "name": "Ideias", "slug": "ideias" }
]

export const get: APIRoute = async ({ params, request }) => {
    return new Response(
        JSON.stringify(categories), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    }
    );
}