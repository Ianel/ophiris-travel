import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Users } from "lucide-react"
import { BookingForm } from "@/components/booking-form"

export const metadata: Metadata = {
  title: "Book Your Madagascar Tour | Ophiris",
  description:
    "Book your dream Madagascar tour with Ophiris. Choose from our popular tours or customize your own adventure.",
}

export default function BookingPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Book Your Madagascar Adventure
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Choose your preferred tour, dates, and options to start your unforgettable journey through Madagascar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="tour-selection" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="tour-selection">1. Tour</TabsTrigger>
              <TabsTrigger value="dates" id="dates-tab">
                2. Dates
              </TabsTrigger>
              <TabsTrigger value="travelers" id="travelers-tab">
                3. Travelers
              </TabsTrigger>
              <TabsTrigger value="payment" id="payment-tab">
                4. Payment
              </TabsTrigger>
            </TabsList>
            <TabsContent value="tour-selection" className="pt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {tours.map((tour) => (
                  <TourCard key={tour.id} tour={tour} />
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link href="/custom-tour">
                  <Button variant="outline" size="lg">
                    Create Custom Tour
                  </Button>
                </Link>
              </div>
            </TabsContent>
            <TabsContent value="dates" className="pt-6">
              <BookingForm step="dates" />
            </TabsContent>
            <TabsContent value="travelers" className="pt-6">
              <BookingForm step="travelers" />
            </TabsContent>
            <TabsContent value="payment" className="pt-6">
              <BookingForm step="payment" />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}

function TourCard({ tour }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image src={tour.image || "/placeholder.svg"} alt={tour.title} fill className="object-cover" />
        {tour.featured && (
          <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 text-xs font-medium rounded">
            Popular
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-bold">{tour.title}</h3>
        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {tour.duration}
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            {tour.groupSize}
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-xl font-bold">${tour.price}</span>
              <span className="text-muted-foreground text-sm"> / person</span>
            </div>
            <Button>Select</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

const tours = [
  {
    id: 1,
    title: "Madagascar Wildlife Explorer",
    duration: "10 Days",
    groupSize: "Max 12",
    price: 2499,
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
  {
    id: 2,
    title: "Baobab & Beaches",
    duration: "7 Days",
    groupSize: "Max 10",
    price: 1899,
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: 3,
    title: "Rainforest & Lemurs",
    duration: "8 Days",
    groupSize: "Max 8",
    price: 2199,
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
  {
    id: 4,
    title: "Madagascar Complete",
    duration: "14 Days",
    groupSize: "Max 10",
    price: 3299,
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: 5,
    title: "Southern Madagascar Adventure",
    duration: "9 Days",
    groupSize: "Max 12",
    price: 2099,
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: 6,
    title: "Northern Highlights",
    duration: "6 Days",
    groupSize: "Max 8",
    price: 1699,
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
]

