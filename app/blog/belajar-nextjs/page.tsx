import Heading from "@/components/Heading";
import { getPostBySlug } from "@/lib/posts";

export default async function PostPage() {
    const post = await getPostBySlug("belajar-nextjs");

    return (
        <>
            <Heading>{post.title}</Heading>

            <p className="pb-2 text-sm italic">
                {post.date} - {post.author}
            </p>

            <img
                src={post.image}
                alt={post.title}
                width={840}
                height={660}
                className="mb-2 rounded-md"
            />

            <article
                className="prose prose-slate"
                dangerouslySetInnerHTML={{
                    __html: post.body,
                }}
            />
        </>
    );
}