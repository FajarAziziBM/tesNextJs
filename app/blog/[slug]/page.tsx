import Heading from "@/components/Heading";
import SherLinkButton from "@/components/SherLinkButton";
import { getPost } from "@/lib/posts";
import { createMetadata } from "@/lib/seo";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = await getPost(slug);

  return createMetadata({
    title: post.title,
    description: post.description,
    image: post.image,
  });
}

export default async function PostPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const post = await getPost(slug);

  return (
    <>
      <Heading>{post.title}</Heading>

      <div className="flex gap-3 pb-2 items-baseline">
        <p className="pb-2 text-sm italic">
          {post.date} - {post.author}
        </p>

        <SherLinkButton />
        
      </div>

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
          __html: post.body ?? "",
        }}
      />
    </>
  );
}