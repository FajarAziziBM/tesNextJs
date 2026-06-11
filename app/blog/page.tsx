import Link from "next/link";
import Heading from "../components/Heading";

export default function BlogPage() {
    return (
        <>
            <Heading>Blog</Heading>

            <p>Berikut List Blog
            </p>
            <ul>
                <li>
                    <Link href="/blog/belajar-nextjs">Belajar NextJs</Link>
                </li>
                <li>
                    <Link href="/blog/latihan-route-nextjs" prefetch={false}>Latihan Route Nextjs</Link>
                </li>
            </ul>

        </>
    )
}