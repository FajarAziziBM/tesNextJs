interface LayoutProps {
    children: React.ReactNode
}


export default function BlogLayout({
    children
}: LayoutProps
) {
    return (
        <div style={{ display: "flex" }}>
            <div className="">
                Sidebar

            </div>
            <div className="px-4">{children}</div>
        </div>

    )
}
