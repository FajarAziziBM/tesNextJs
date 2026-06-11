import Link from "next/link"

interface LayoutProps {
    children: React.ReactNode
}


export default function RootLayout({
    children
}: LayoutProps
) {
    return (
        <html>
            <head>
                <title>Learn NextJs</title>
            </head>
            <body>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link href="/blog/belajar-nextjs">Belajar NextJs</Link>
                            </li>
                            <li>
                                <Link href="/blog/latihan-route-nextjs">Latihan Route Nextjs</Link>
                            </li>
                            <li>
                                <Link href="/about">About</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    [Footer]
                </footer>
            </body>
        </html>
    )
}
