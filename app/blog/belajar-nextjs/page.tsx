import Heading from "@/components/Heading";
import { readFile } from "node:fs/promises";
import { marked } from "marked";

export default async function PostPage() {
    const text = await readFile(
        "./content/blog/belajar-nextjs.md",
        "utf-8"
    );

    const html = await marked.parse(text);

    return (
        <>
            <Heading>Belajar NextJS</Heading>
            <img
                src="/images/image-1.jpg"
                alt="" width={840}
                height={660}
                className="mb-2 rounded-md"
            />
            <article
                className="prose prose-slate"
                dangerouslySetInnerHTML={{
                    __html: html,
                }}
            />
        </>
    );
}