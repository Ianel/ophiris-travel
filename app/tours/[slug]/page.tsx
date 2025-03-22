import Link from "next/link"
import Image from "next/image"
import { MapPin, Calendar, Users, Star, Check, Info, AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

// This would normally be fetched from a database or API
const tourData = {
  baobabs: {
    slug: "baobabs-explorer",
    title: "Avenue of the Baobabs Explorer",
    location: "Western Madagascar",
    duration: "7 Days",
    groupSize: "Max 12",
    price: "$1,299",
    rating: 5,
    description:
      "Experience the iconic Avenue of the Baobabs and explore the surrounding villages and wildlife in Western Madagascar. This tour combines natural wonders with cultural immersion for an unforgettable adventure.",
    highlights: [
      "Photograph the majestic Baobab trees at sunset and sunrise",
      "Visit traditional Sakalava villages and learn about local customs",
      "Explore the Kirindy Forest Reserve to spot lemurs and other endemic species",
      "Relax on the pristine beaches of Morondava",
      "Take a boat trip through the mangrove forests",
      "Enjoy authentic Malagasy cuisine prepared with local ingredients",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Antananarivo",
        description:
          "Welcome to Madagascar! Upon arrival at Ivato International Airport, you'll be greeted by your guide and transferred to your hotel in Antananarivo. Enjoy a welcome dinner and briefing about your upcoming adventure.",
      },
      {
        day: "Day 2",
        title: "Flight to Morondava",
        description:
          "After breakfast, transfer to the airport for your flight to Morondava on the west coast. Upon arrival, check into your beachfront hotel and enjoy a relaxing afternoon exploring the town or relaxing on the beach.",
      },
      {
        day: "Day 3",
        title: "Avenue of the Baobabs & Kirindy Forest",
        description:
          "Early morning visit to the Avenue of the Baobabs to capture the sunrise. Continue to Kirindy Forest Reserve for a guided walk to spot lemurs, fossa, and other wildlife. Return to the Avenue for sunset photography before heading back to your hotel.",
      },
      {
        day: "Day 4",
        title: "Mangrove Boat Trip",
        description:
          "Today, explore the coastal mangrove ecosystem by traditional pirogue (dugout canoe). Spot various bird species and learn about this important ecosystem. Afternoon visit to a local fishing village to learn about traditional fishing methods.",
      },
      {
        day: "Day 5",
        title: "Sakalava Village Visit",
        description:
          "Spend the day immersed in Sakalava culture with a visit to a traditional village. Learn about local customs, crafts, and daily life. Participate in a cooking demonstration and enjoy a meal with a local family.",
      },
      {
        day: "Day 6",
        title: "Baobab Conservation & Free Time",
        description:
          "Morning visit to a baobab conservation project to learn about efforts to protect these iconic trees. Afternoon at leisure to relax on the beach or explore Morondava further. Farewell dinner featuring traditional Malagasy entertainment.",
      },
      {
        day: "Day 7",
        title: "Return to Antananarivo",
        description:
          "After breakfast, transfer to the airport for your flight back to Antananarivo. Depending on your onward travel plans, enjoy some last-minute souvenir shopping or transfer directly to the international airport for your departure flight.",
      },
    ],
    includes: [
      "All accommodations (6 nights in comfortable hotels and lodges)",
      "Domestic flights between Antananarivo and Morondava",
      "All ground transportation in private vehicles",
      "English-speaking expert guide throughout",
      "All meals as specified in the itinerary (B=Breakfast, L=Lunch, D=Dinner)",
      "All entrance fees to parks and reserves",
      "All activities mentioned in the itinerary",
      "Bottled water throughout the tour",
    ],
    excludes: [
      "International flights to/from Madagascar",
      "Travel insurance (required)",
      "Visa fees",
      "Alcoholic beverages",
      "Personal expenses and souvenirs",
      "Tips for guides and staff",
      "Any activities not mentioned in the itinerary",
    ],
  },
  rainforest: {
    slug: "rainforest-wildlife",
    title: "Rainforest Wildlife Adventure",
    location: "Eastern Madagascar",
    duration: "10 Days",
    groupSize: "Max 8",
    price: "$1,599",
    rating: 5,
    description:
      "Trek through lush rainforests to spot lemurs, chameleons, and exotic birds in Eastern Madagascar. This tour is perfect for wildlife enthusiasts and nature lovers.",
    highlights: [
      "Explore Andasibe-Mantadia National Park, home to the Indri lemur",
      "Night walks to spot nocturnal wildlife",
      "Visit Ranomafana National Park with its incredible biodiversity",
      "Boat trip on the Pangalanes Canal",
      "Interact with local conservation projects",
      "Experience the unique flora and fauna of Madagascar's eastern rainforests",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Antananarivo",
        description:
          "Welcome to Madagascar! Upon arrival at Ivato International Airport, you'll be greeted by your guide and transferred to your hotel in Antananarivo. Enjoy a welcome dinner and briefing about your upcoming adventure.",
      },
      {
        day: "Day 2",
        title: "Antananarivo to Andasibe",
        description:
          "After breakfast, drive east to Andasibe through the green and luxuriant vegetation of the east. This journey takes approximately 4 hours with a stop in Moramanga for lunch. Afternoon visit to the Vakona Private Reserve. Evening night walk to spot nocturnal species.",
      },
      {
        day: "Day 3",
        title: "Andasibe-Mantadia National Park",
        description:
          "Full day exploring Andasibe-Mantadia National Park. Morning visit to the Special Reserve of Andasibe to see the Indri, the largest lemur species. Afternoon visit to Mantadia National Park for more wildlife viewing. Evening night walk around the lodge.",
      },
    ],
    includes: [
      "All accommodations (9 nights in comfortable hotels and lodges)",
      "All ground transportation in private vehicles",
      "English-speaking expert guide throughout",
      "All meals as specified in the itinerary (B=Breakfast, L=Lunch, D=Dinner)",
      "All entrance fees to parks and reserves",
      "All activities mentioned in the itinerary",
      "Bottled water throughout the tour",
    ],
    excludes: [
      "International flights to/from Madagascar",
      "Travel insurance (required)",
      "Visa fees",
      "Alcoholic beverages",
      "Personal expenses and souvenirs",
      "Tips for guides and staff",
      "Any activities not mentioned in the itinerary",
    ],
  },
  island: {
    slug: "island-paradise",
    title: "Island Paradise Getaway",
    location: "Northern Madagascar",
    duration: "8 Days",
    groupSize: "Max 10",
    price: "$1,899",
    rating: 5,
    description:
      "Relax on pristine beaches and snorkel in crystal-clear waters teeming with marine life in Northern Madagascar. This tour combines relaxation with adventure.",
    highlights: [
      "Explore the beautiful beaches of Nosy Be",
      "Snorkeling and diving in crystal-clear waters",
      "Visit to Nosy Komba, the lemur island",
      "Boat trip to Nosy Tanikely Marine Reserve",
      "Traditional fishing village visits",
      "Optional water sports and activities",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Antananarivo",
        description:
          "Welcome to Madagascar! Upon arrival at Ivato International Airport, you'll be greeted by your guide and transferred to your hotel in Antananarivo. Enjoy a welcome dinner and briefing about your upcoming adventure.",
      },
      {
        day: "Day 2",
        title: "Flight to Nosy Be",
        description:
          "After breakfast, transfer to the airport for your flight to Nosy Be. Upon arrival, transfer to your beachfront resort. Afternoon at leisure to relax on the beach or explore the surroundings.",
      },
      {
        day: "Day 3",
        title: "Nosy Komba Excursion",
        description:
          "Full day excursion to Nosy Komba, known as Lemur Island. Visit the black lemurs that inhabit this small island and explore the local village known for its embroidery. Enjoy lunch on the island before returning to Nosy Be in the late afternoon.",
      },
    ],
    includes: [
      "All accommodations (7 nights in comfortable hotels and beach resorts)",
      "Domestic flights between Antananarivo and Nosy Be",
      "All ground and boat transportation",
      "English-speaking expert guide throughout",
      "All meals as specified in the itinerary (B=Breakfast, L=Lunch, D=Dinner)",
      "All entrance fees to parks and reserves",
      "All activities mentioned in the itinerary",
      "Bottled water throughout the tour",
    ],
    excludes: [
      "International flights to/from Madagascar",
      "Travel insurance (required)",
      "Visa fees",
      "Alcoholic beverages",
      "Personal expenses and souvenirs",
      "Tips for guides and staff",
      "Any activities not mentioned in the itinerary",
    ],
  },
}

export default function TourDetailPage({ params }: { params: { slug: string } }) {
  // In a real application, you would fetch the tour data based on the slug
  // For this example, we'll use the baobabs tour data for all slugs
  let tour = tourData.baobabs

  if (params.slug === "rainforest-wildlife") {
    tour = tourData.rainforest
  } else if (params.slug === "island-paradise") {
    tour = tourData.island
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Breadcrumbs */}
        <div className="container py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/tours">Tours</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>{tour.title}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Tour Hero */}
        <section className="container py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt={tour.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-2 mt-2">
                <div className="relative h-24 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Tour gallery image"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-24 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Tour gallery image"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-24 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Tour gallery image"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-24 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Tour gallery image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div>
              <Card>
                <CardContent className="p-6">
                  <h1 className="text-2xl font-bold mb-4">{tour.title}</h1>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{tour.location}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    {Array.from({ length: tour.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">32 reviews</span>
                  </div>
                  <Separator className="my-4" />
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Duration</p>
                        <p className="text-sm text-muted-foreground">{tour.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Group Size</p>
                        <p className="text-sm text-muted-foreground">{tour.groupSize}</p>
                      </div>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-2">Starting from</p>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">{tour.price}</span>
                      <span className="text-muted-foreground ml-1">/ person</span>
                    </div>
                  </div>
                  <Link href="/booking">
                    <Button className="w-full mb-2">Book This Tour</Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full">
                      Ask a Question
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tour Details */}
        <section className="container py-8">
          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
              <TabsTrigger value="includes">What's Included</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="pt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
                  <p className="text-muted-foreground mb-6">{tour.description}</p>

                  <h3 className="text-xl font-bold mb-4">Tour Highlights</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
                    {tour.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-muted/50 p-6 rounded-lg mb-8">
                    <div className="flex items-start gap-4">
                      <Info className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold mb-2">Important Information</h4>
                        <p className="text-muted-foreground mb-4">
                          This tour involves some walking on uneven terrain. A moderate level of fitness is recommended.
                          The tour is not suitable for children under 8 years old.
                        </p>
                        <p className="text-muted-foreground">
                          Madagascar has a tropical climate. The best time to visit is during the dry season from April
                          to November. This tour operates year-round, but some activities may be adjusted during the
                          rainy season.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4">Map</h3>
                  <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
                    <Image src="/placeholder.svg?height=400&width=800" alt="Tour map" fill className="object-cover" />
                  </div>
                </div>
                <div>
                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4">Tour Details</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Tour Code</span>
                          <span className="font-medium">BAO-001</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Duration</span>
                          <span className="font-medium">{tour.duration}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Group Size</span>
                          <span className="font-medium">{tour.groupSize}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Difficulty</span>
                          <span className="font-medium">Easy to Moderate</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Languages</span>
                          <span className="font-medium">English, French</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Accommodation</span>
                          <span className="font-medium">3-4 Star Hotels</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4">Upcoming Departures</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">June 15, 2024</p>
                            <p className="text-sm text-muted-foreground">4 spots left</p>
                          </div>
                          <Link href="/booking">
                            <Button size="sm">Book</Button>
                          </Link>
                        </div>
                        <Separator />
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">July 10, 2024</p>
                            <p className="text-sm text-muted-foreground">6 spots left</p>
                          </div>
                          <Link href="/booking">
                            <Button size="sm">Book</Button>
                          </Link>
                        </div>
                        <Separator />
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">August 5, 2024</p>
                            <p className="text-sm text-muted-foreground">8 spots left</p>
                          </div>
                          <Link href="/booking">
                            <Button size="sm">Book</Button>
                          </Link>
                        </div>
                        <Separator />
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">September 20, 2024</p>
                            <p className="text-sm text-muted-foreground">10 spots left</p>
                          </div>
                          <Link href="/booking">
                            <Button size="sm">Book</Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="itinerary" className="pt-6">
              <h2 className="text-2xl font-bold mb-6">Tour Itinerary</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="space-y-6">
                    {tour.itinerary.map((day, index) => (
                      <div key={index} className="relative pl-8 pb-6 border-l-2 border-muted last:border-0 last:pb-0">
                        <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                        <h3 className="text-lg font-bold">
                          {day.day}: {day.title}
                        </h3>
                        <p className="text-muted-foreground">{day.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <Card className="sticky top-24">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4">Accommodation</h3>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                          <AccordionTrigger>Antananarivo</AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-2">
                              <p className="font-medium">Hotel Colbert</p>
                              <p className="text-sm text-muted-foreground">
                                A comfortable 4-star hotel in the heart of Madagascar's capital with modern amenities
                                and a restaurant serving international and Malagasy cuisine.
                              </p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                          <AccordionTrigger>Morondava</AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-2">
                              <p className="font-medium">Palissandre Côte Ouest Resort</p>
                              <p className="text-sm text-muted-foreground">
                                A beachfront resort with comfortable bungalows, a swimming pool, and stunning views of
                                the Mozambique Channel. Perfect base for exploring the Avenue of the Baobabs.
                              </p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="includes" className="pt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold mb-6">What's Included</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary" />
                        Included in the Price
                      </h3>
                      <ul className="space-y-2">
                        {tour.includes.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-destructive" />
                        Not Included
                      </h3>
                      <ul className="space-y-2">
                        {tour.excludes.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4">Optional Add-ons</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium">Photography Workshop</p>
                            <p className="text-sm text-muted-foreground">
                              2-hour session with a professional photographer
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">$75</p>
                            <p className="text-sm text-muted-foreground">per person</p>
                          </div>
                        </div>
                        <Separator />
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium">Private Guide Upgrade</p>
                            <p className="text-sm text-muted-foreground">Exclusive guide for your party</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">$299</p>
                            <p className="text-sm text-muted-foreground">per day</p>
                          </div>
                        </div>
                        <Separator />
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium">Extra Night in Antananarivo</p>
                            <p className="text-sm text-muted-foreground">4-star hotel with breakfast</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">$120</p>
                            <p className="text-sm text-muted-foreground">per night</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="pt-6">
              <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="space-y-6">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="h-12 w-12 rounded-full overflow-hidden relative mr-4">
                            <Image
                              src="/placeholder.svg?height=48&width=48"
                              alt="Sarah J."
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold">Sarah J.</h4>
                            <p className="text-sm text-muted-foreground">Traveled April 2023</p>
                          </div>
                          <div className="ml-auto flex items-center">
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <Star className="h-4 w-4 fill-primary text-primary" />
                          </div>
                        </div>
                        <h5 className="font-medium mb-2">Unforgettable experience with amazing guides!</h5>
                        <p className="text-muted-foreground mb-4">
                          The Avenue of the Baobabs was even more spectacular than I imagined. Our guide was incredibly
                          knowledgeable about the trees and the local ecosystem. The sunrise and sunset photo
                          opportunities were magical. The accommodations were comfortable and the food was delicious.
                          Highly recommend this tour!
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="h-12 w-12 rounded-full overflow-hidden relative mr-4">
                            <Image
                              src="/placeholder.svg?height=48&width=48"
                              alt="Michael T."
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold">Michael T.</h4>
                            <p className="text-sm text-muted-foreground">Traveled February 2023</p>
                          </div>
                          <div className="ml-auto flex items-center">
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <Star className="h-4 w-4 fill-primary text-primary" />
                          </div>
                        </div>
                        <h5 className="font-medium mb-2">Perfect balance of nature and culture</h5>
                        <p className="text-muted-foreground mb-4">
                          This tour offered the perfect mix of natural wonders and cultural experiences. The Kirindy
                          Forest was amazing for wildlife spotting - we saw several lemur species and even a fossa! The
                          village visit was authentic and respectful. Our guide spoke excellent English and was very
                          attentive to our needs.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="h-12 w-12 rounded-full overflow-hidden relative mr-4">
                            <Image
                              src="/placeholder.svg?height=48&width=48"
                              alt="Elena R."
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold">Elena R.</h4>
                            <p className="text-sm text-muted-foreground">Traveled November 2022</p>
                          </div>
                          <div className="ml-auto flex items-center">
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <Star className="h-4 w-4 fill-primary text-primary" />
                          </div>
                        </div>
                        <h5 className="font-medium mb-2">Exceeded all expectations</h5>
                        <p className="text-muted-foreground mb-4">
                          As a solo traveler, I was a bit nervous about this trip, but the Ophiris team made me feel
                          completely at ease. The small group size meant we could access places larger tours couldn't,
                          and I made friends for life among my fellow travelers. The baobabs were absolutely stunning,
                          and the wildlife encounters were incredible.
                        </p>
                      </CardContent>
                    </Card>

                    <div className="flex justify-center">
                      <Link href="/testimonials">
                        <Button variant="outline">Load More Reviews</Button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <Card className="sticky top-24">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4">Review Summary</h3>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                          <div className="text-4xl font-bold mr-2">5.0</div>
                          <div className="flex flex-col">
                            <div className="flex">
                              <Star className="h-4 w-4 fill-primary text-primary" />
                              <Star className="h-4 w-4 fill-primary text-primary" />
                              <Star className="h-4 w-4 fill-primary text-primary" />
                              <Star className="h-4 w-4 fill-primary text-primary" />
                              <Star className="h-4 w-4 fill-primary text-primary" />
                            </div>
                            <span className="text-sm text-muted-foreground">32 reviews</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2">
                          <div className="text-sm w-24">Guide</div>
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div className="bg-primary h-full w-[98%]"></div>
                          </div>
                          <div className="text-sm font-medium">4.9</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-sm w-24">Accommodation</div>
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div className="bg-primary h-full w-[94%]"></div>
                          </div>
                          <div className="text-sm font-medium">4.7</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-sm w-24">Transportation</div>
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div className="bg-primary h-full w-[96%]"></div>
                          </div>
                          <div className="text-sm font-medium">4.8</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-sm w-24">Value</div>
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div className="bg-primary h-full w-[98%]"></div>
                          </div>
                          <div className="text-sm font-medium">4.9</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-sm w-24">Overall</div>
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div className="bg-primary h-full w-[100%]"></div>
                          </div>
                          <div className="text-sm font-medium">5.0</div>
                        </div>
                      </div>
                      <Link href="/testimonials">
                        <Button className="w-full">Write a Review</Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Related Tours */}
        <section className="container py-12 border-t">
          <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Rainforest trek"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Eastern Madagascar</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Rainforest Wildlife Adventure</h3>
                <p className="text-muted-foreground mb-4">
                  Trek through lush rainforests to spot lemurs, chameleons, and exotic birds.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold">$1,599</span>
                    <span className="text-muted-foreground"> / person</span>
                  </div>
                  <Link href="/tours/rainforest-wildlife">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=200&width=400" alt="Beach paradise" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Northern Madagascar</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Island Paradise Getaway</h3>
                <p className="text-muted-foreground mb-4">
                  Relax on pristine beaches and snorkel in crystal-clear waters.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold">$1,899</span>
                    <span className="text-muted-foreground"> / person</span>
                  </div>
                  <Link href="/tours/island-paradise">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Cultural experience"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Central Madagascar</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Cultural Immersion Experience</h3>
                <p className="text-muted-foreground mb-4">
                  Connect with local communities and learn about Madagascar's heritage.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold">$1,499</span>
                    <span className="text-muted-foreground"> / person</span>
                  </div>
                  <Link href="/tours/cultural-immersion">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

