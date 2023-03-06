export default function StudioLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    return (
        <html>
            <head />
            <body className={` bg-white scroll-show`}>
                {children}
            </body>
        </html>
    );
}