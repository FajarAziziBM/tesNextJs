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
                    [Header]
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
