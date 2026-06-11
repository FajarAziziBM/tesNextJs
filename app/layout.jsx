export default function Layout({ children }){
    return (
        <html>
            <head>
                <title>Learn NextJs</title>
            </head>
            <body>
                <h1>Layout</h1>
                {children}
            </body>
        </html>
    );
}