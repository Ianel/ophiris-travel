import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Calendar, Users, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Booking Confirmation | Ophiris Madagascar Tours",
  description:
    "Your Madagascar adventure is confirmed! Review your booking details and prepare for an unforgettable journey.",
}

export default function BookingConfirmationPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="rounded-full bg-primary/10 p-3">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Booking Confirmed!</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Thank you for booking your Madagascar adventure with Ophiris. Your journey awaits!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Booking Details</CardTitle>
                <CardDescription>Reference: #MG23456789</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Madagascar Wildlife Explorer</h3>
                  <p className="text-sm text-muted-foreground">10 Days Tour</p>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Departure Date</p>
                    <p className="text-sm text-muted-foreground">June 15, 2025</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Travelers</p>
                    <p className="text-sm text-muted-foreground">2 Adults, 0 Children</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Meeting Point</p>
                    <p className="text-sm text-muted-foreground">Ivato International Airport, Antananarivo</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Full Itinerary
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What's Next?</CardTitle>
                <CardDescription>Prepare for your Madagascar adventure</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">1. Check Your Email</h3>
                  <p className="text-sm text-muted-foreground">
                    We've sent a detailed confirmation to your email with important information about your tour.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">2. Prepare for Your Trip</h3>
                  <p className="text-sm text-muted-foreground">
                    Review our pre-departure information, including packing list and visa requirements.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">3. Stay Connected</h3>
                  <p className="text-sm text-muted-foreground">
                    Your tour guide will contact you 1-2 weeks before departure with final details.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2">
                <Link href="/account/bookings" className="w-full">
                  <Button className="w-full">Manage Booking</Button>
                </Link>
                <Link href="/contact" className="w-full">
                  <Button variant="outline" className="w-full">
                    Contact Us
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Share Your Excitement!</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let your friends and family know about your upcoming Madagascar adventure.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Button>
              <Button variant="outline" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Button>
              <Button variant="outline" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Button>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">After Your Trip</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We'd love to hear about your experience after your adventure!
            </p>
            <Link href="/write-review">
              <Button>Write a Review</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

