import { Inter as FontSans } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import { getMetadata } from "@/utils/getMetadata";
import { Toaster } from "sonner";

const fontInter = FontSans({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = getMetadata({
  title: "Pitcheth",
  description: "Decentralized Pitching Solution empowering global transparency and trust in investment opportunities.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen antialiased bg-white",
          fontInter.variable
        )}
      >
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
