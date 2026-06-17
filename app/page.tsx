import Heading from "@/components/Heading";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Home",
  description:
    "Belajar Next.js modern menggunakan App Router, SEO, dan TypeScript",
});

export default function HomePage() {
  return (
    <div>
      <Heading>Welcome to Next.js</Heading>
    </div>
  );
}