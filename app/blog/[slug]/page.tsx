import Heading from "@/components/Heading";
import { getPost } from "@/lib/posts";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;

  const post = await getPost(slug);

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