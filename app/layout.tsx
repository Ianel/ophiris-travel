import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Ophiris Tours - Madagascar Travel Specialists",
    description:
        "Discover the magic of Madagascar with expert-guided tours and personalized travel experiences.",
    generator: "v0.dev",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider enableSystem disableTransitionOnChange>
                    <SiteHeader />
                    {children}
                    <SiteFooter />
                </ThemeProvider>
            </body>
        </html>
    );
}

import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
