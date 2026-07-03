// app/blog/[slug]/page.tsx

import Heading from "@/components/Heading";
import SherLinkButton from "@/components/SherLinkButton";
import { getPost, getSlugs } from "@/lib/posts";
import { createMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await getSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    return {};
  }

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

  if (!post) {
    notFound();
  }

  return (
    <>
      <Heading>{post.title}</Heading>

      <div className="flex gap-3 pb-4 items-center">
        <p className="text-sm italic">
          {new Date(
            post.publishedAt
          ).toLocaleDateString("id-ID")}
          {" • "}
          {post.author}
        </p>

        <SherLinkButton />
      </div>

      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          width={840}
          height={660}
          className="rounded-md mb-6"
        />
      )}

      <article
        className="prose prose-slate max-w-none"
        dangerouslySetInnerHTML={{
          __html: post.body,
        }}
      />
    </>
  );
}