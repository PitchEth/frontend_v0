import Headline from "@/components/shared/Headline";
import GuestNavBar from "@/components/shared/navBar/GuestNavBar";

export default function GuestLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <section className="w-full overflow-x-hidden">
            {/* announcement tagline*/}
            <Headline />
            {/* header */}
            <GuestNavBar />
            <main className="w-full">{children}</main>
            {/* footer */}
        </section>
    );
}