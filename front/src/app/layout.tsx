import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import NavbarDashboard from "@/components/NavbarDashboard/NavbarDashboard";
import Sidebars from "@/components/Sidebars/Sidebars";
import { Mostrar, Ocultar } from "@/components/ui";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Consorcify",
    description: "Tus administraciones en un click",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`bg-fondo text-white ${oswald.className}`}>
                <Ocultar>
                    <Sidebars />
                    <NavbarDashboard />
                </Ocultar>
                {children}
                <Mostrar>
                    <Footer />
                </Mostrar>
            </body>
        </html>
    );
}
