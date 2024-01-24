import type { postTypes } from "@/global_types/blog_post";
import { Button } from "@/components/ui/button";

export function CardPost({ title, description, img, slug, categories }: postTypes) {
    return (
        <div className="bg-white rounded-lg shadow-xl">
            <img className="rounded-t-lg h-52 w-full object-cover" src={`${img?.url}`} alt={`${img?.alt}`} />
            <div className="p-5 space-y-6">
                <ul className="flex gap-4">
                    {
                        categories?.map((category) => (
                            <li className="text-xs text-slate-500">{category.name}</li>
                        ))
                    }
                </ul>
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">{title}</h5>
                <p className="mb-3 font-normal text-gray-500">{description}</p>
                <Button asChild><a href={`/blog/post/${slug}`} className="block w-max">Acessar post</a></Button>
            </div>
        </div>
    )
}