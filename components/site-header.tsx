import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/mobile-menu";

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/placeholder.svg?height=32&width=32"
                            alt="Ophiris Logo"
                            width={32}
                            height={32}
                            className="rounded-md"
                        />
                        <span className="text-xl font-bold">Ophiris</span>
                    </Link>
                </div>
                <nav className="hidden md:flex gap-6">
                    <Link
                        href="/"
                        className="text-sm font-medium hover:text-primary"
                    >
                        Home
                    </Link>
                    <Link
                        href="/tours"
                        className="text-sm font-medium hover:text-primary"
                    >
                        Tours
                    </Link>
                    <Link
                        href="/about"
                        className="text-sm font-medium hover:text-primary"
                    >
                        About
                    </Link>
                    <Link
                        href="/testimonials"
                        className="text-sm font-medium hover:text-primary"
                    >
                        Testimonials
                    </Link>
                    <Link
                        href="/contact"
                        className="text-sm font-medium hover:text-primary"
                    >
                        Contact
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Link href="/account/login">
                        <Button
                            variant="outline"
                            size="sm"
                            className="hidden md:flex"
                        >
                            Login
                        </Button>
                    </Link>
                    <Link href="/booking">
                        <Button size="sm">Book Now</Button>
                    </Link>
                    <MobileMenu />
                </div>
            </div>
        </header>
    );
}
