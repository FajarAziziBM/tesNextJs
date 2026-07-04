//src/lib/seo.ts
import type { Metadata } from "next";

type SEOProps = {
  title: string;
  description: string;
  image?: string;
};

export function createMetadata({
  title,
  description,
  image,
}: SEOProps): Metadata {
  return {
    title,
    description,

    openGraph: {
      title,
      description,
      images: image ? [image] : [],
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : [],
    },
  };
}