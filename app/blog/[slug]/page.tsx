// app/blog/[slug]/page.tsx
import Heading from "@/components/Heading";
import SherLinkButton from "@/components/SherLinkButton";
import { getPost, getSlugs } from "@/lib/posts";
import { createMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";

export const dynamicParams = true;

export const revalidate = 60;

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

/* =========================
   STATIC PARAMS (SSG)
========================= */
export async function generateStaticParams() {
  const slugs = await getSlugs();

  if (!slugs) {
    return [];
  };

  return slugs.map((slug) => ({
    slug,
  }));
}

/* =========================
   METADATA SEO
========================= */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.description,
    image: post.image,
  });
}

/* =========================
   PAGE COMPONENT
========================= */
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
          {new Date(post.publishedAt).toLocaleDateString("id-ID")} •{" "}
          {post.author}
        </p>

        <SherLinkButton />
      </div>

      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={840}
          height={660}
          unoptimized
          className="rounded-md mb-6"
        />
      )}

      <article
        className="prose prose-slate max-w-none"
        dangerouslySetInnerHTML={{ __html: post.body }}
      />
    </>
  );
}