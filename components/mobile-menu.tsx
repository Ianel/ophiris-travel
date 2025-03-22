"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between border-b pb-4">
            <span className="text-lg font-bold">Ophiris</span>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <nav className="flex flex-col gap-4 py-8">
            <MobileLink href="/" setOpen={setOpen}>
              Home
            </MobileLink>
            <MobileLink href="/tours" setOpen={setOpen}>
              Tours
            </MobileLink>
            <MobileLink href="/about" setOpen={setOpen}>
              About
            </MobileLink>
            <MobileLink href="/blog" setOpen={setOpen}>
              Blog
            </MobileLink>
            <MobileLink href="/testimonials" setOpen={setOpen}>
              Testimonials
            </MobileLink>
            <MobileLink href="/faq" setOpen={setOpen}>
              FAQ
            </MobileLink>
            <MobileLink href="/contact" setOpen={setOpen}>
              Contact
            </MobileLink>
          </nav>
          <div className="mt-auto border-t pt-4 flex flex-col gap-4">
            <Link href="/account/login" className="w-full">
              <Button variant="outline" className="w-full">
                Login
              </Button>
            </Link>
            <Link href="/booking" className="w-full">
              <Button className="w-full">Book Now</Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

function MobileLink({ href, children, setOpen }) {
  return (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className="text-lg font-medium transition-colors hover:text-primary"
    >
      {children}
    </Link>
  )
}

