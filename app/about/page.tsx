import Heading from "@/components/Heading";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Informasi mengenai website tutorial Next.js modern",
});

export default function AboutPage() {
  return (
    <>
      <Heading>About</Heading>
      <p>This is the about page</p>
    </>
  );
}