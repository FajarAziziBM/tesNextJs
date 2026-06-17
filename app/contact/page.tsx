import Heading from "@/components/Heading";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Hubungi kami melalui email, GitHub, dan media sosial",
});

export default function ContactPage() {
  return (
    <>
      <Heading>Contact Me</Heading>

      <ul>
        <li>Instagram</li>
        <li>Email</li>
        <li>Github</li>
      </ul>
    </>
  );
}