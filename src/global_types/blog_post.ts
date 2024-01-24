import type { category } from "@/global_types/blog_category";

export interface postTypes {
    title?: string;
    slug?: string;
    img?: {
        url?: string;
        alt?: string;
    };
    categories?: category[];
    description?: string;
    content?: string;
}