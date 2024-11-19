
export default function GuestLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <section className="w-full">
            {/* header */}
            <main className="w-full">{children}</main>
            {/* footer */}
        </section>
    );
}