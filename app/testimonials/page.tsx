import Image from "next/image"
import { ChevronRight, Star, Quote, Play, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"

export default function TestimonialsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="relative h-[300px]">
            <Image
              src="/placeholder.svg?height=300&width=1200"
              alt="Happy travelers in Madagascar"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Traveler Testimonials</h1>
            <p className="mt-4 max-w-2xl text-lg">
              Hear from adventurers who have experienced the magic of Madagascar with us
            </p>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Discover what our travelers have to say about their unforgettable experiences exploring Madagascar with
              Ophiris.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <h2 className="text-lg font-semibold">Filter Reviews</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-auto">
                <div>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Tour Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Tours</SelectItem>
                      <SelectItem value="wildlife">Wildlife Tours</SelectItem>
                      <SelectItem value="beach">Beach Tours</SelectItem>
                      <SelectItem value="cultural">Cultural Tours</SelectItem>
                      <SelectItem value="adventure">Adventure Tours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Ratings</SelectItem>
                      <SelectItem value="5">5 Stars</SelectItem>
                      <SelectItem value="4">4 Stars & Up</SelectItem>
                      <SelectItem value="3">3 Stars & Up</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Input type="text" placeholder="Search reviews..." />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Tabs */}
        <section className="py-12">
          <div className="container">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="all">All Reviews</TabsTrigger>
                <TabsTrigger value="featured">Featured</TabsTrigger>
                <TabsTrigger value="video">Video Reviews</TabsTrigger>
                <TabsTrigger value="recent">Recent</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Testimonial Card 1 */}
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
                      <div className="mb-2 text-sm text-muted-foreground">
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold mr-2">
                          Avenue of the Baobabs Explorer
                        </span>
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

                  {/* Testimonial Card 2 */}
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
                      <div className="mb-2 text-sm text-muted-foreground">
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold mr-2">
                          Rainforest Wildlife Adventure
                        </span>
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

                  {/* Testimonial Card 3 */}
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
                      <div className="mb-2 text-sm text-muted-foreground">
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold mr-2">
                          Island Paradise Getaway
                        </span>
                      </div>
                      <h5 className="font-medium mb-2">Exceeded all expectations</h5>
                      <p className="text-muted-foreground mb-4">
                        As a solo traveler, I was a bit nervous about this trip, but the Ophiris team made me feel
                        completely at ease. The small group size meant we could access places larger tours couldn't, and
                        I made friends for life among my fellow travelers. The beaches were pristine and the snorkeling
                        was incredible!
                      </p>
                    </CardContent>
                  </Card>

                  {/* Testimonial Card 4 */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="h-12 w-12 rounded-full overflow-hidden relative mr-4">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="David L."
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">David L.</h4>
                          <p className="text-sm text-muted-foreground">Traveled March 2023</p>
                        </div>
                        <div className="ml-auto flex items-center">
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <Star className="h-4 w-4 fill-primary text-primary" />
                        </div>
                      </div>
                      <div className="mb-2 text-sm text-muted-foreground">
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold mr-2">
                          Photography Expedition
                        </span>
                      </div>
                      <h5 className="font-medium mb-2">A photographer's dream come true</h5>
                      <p className="text-muted-foreground mb-4">
                        As an amateur photographer, this tour was perfect. Our guide knew all the best spots and times
                        for photography. The small group size meant I could set up my equipment without feeling rushed.
                        I came home with incredible shots of lemurs, chameleons, and landscapes. The photography tips
                        from our guide were invaluable.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Testimonial Card 5 */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="h-12 w-12 rounded-full overflow-hidden relative mr-4">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Maria G."
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">Maria G.</h4>
                          <p className="text-sm text-muted-foreground">Traveled January 2023</p>
                        </div>
                        <div className="ml-auto flex items-center">
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <Star className="h-4 w-4 fill-primary text-primary" />
                        </div>
                      </div>
                      <div className="mb-2 text-sm text-muted-foreground">
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold mr-2">
                          Cultural Immersion Experience
                        </span>
                      </div>
                      <h5 className="font-medium mb-2">Authentic cultural experiences</h5>
                      <p className="text-muted-foreground mb-4">
                        The cultural immersion tour was the highlight of my trip to Madagascar. We visited several
                        villages and had meaningful interactions with local people. The cooking class was so much fun,
                        and I still make some of the dishes at home! Our guide was excellent at translating and
                        providing context for the cultural practices we observed.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Testimonial Card 6 */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="h-12 w-12 rounded-full overflow-hidden relative mr-4">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="James K."
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">James K.</h4>
                          <p className="text-sm text-muted-foreground">Traveled December 2022</p>
                        </div>
                        <div className="ml-auto flex items-center">
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <Star className="h-4 w-4 fill-primary text-primary" />
                        </div>
                      </div>
                      <div className="mb-2 text-sm text-muted-foreground">
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold mr-2">
                          Southern Adventure Circuit
                        </span>
                      </div>
                      <h5 className="font-medium mb-2">Adventure of a lifetime</h5>
                      <p className="text-muted-foreground mb-4">
                        The Southern Adventure Circuit was challenging but incredibly rewarding. The landscapes were
                        unlike anything I've ever seen - from spiny forests to dramatic canyons. Our guide was
                        knowledgeable and safety-conscious, which was important for some of the more adventurous
                        activities. The accommodations were comfortable even in remote areas.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-12">
                  <nav className="flex items-center gap-1">
                    <Button variant="outline" size="icon" disabled>
                      <ChevronRight className="h-4 w-4 rotate-180" />
                      <span className="sr-only">Previous page</span>
                    </Button>
                    <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                      1
                    </Button>
                    <Button variant="outline" size="sm">
                      2
                    </Button>
                    <Button variant="outline" size="sm">
                      3
                    </Button>
                    <Button variant="outline" size="icon">
                      <ChevronRight className="h-4 w-4" />
                      <span className="sr-only">Next page</span>
                    </Button>
                  </nav>
                </div>
              </TabsContent>

              <TabsContent value="featured">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Featured Testimonial 1 */}
                  <Card className="bg-muted/30">
                    <CardContent className="p-8">
                      <div className="flex justify-center mb-6">
                        <Quote className="h-12 w-12 text-primary/20" />
                      </div>
                      <p className="text-lg italic text-center mb-6">
                        "Our tour with Ophiris was the highlight of our year. The guides were knowledgeable and
                        passionate, and we saw lemurs and chameleons up close in their natural habitat. Truly
                        unforgettable!"
                      </p>
                      <div className="flex items-center justify-center gap-4">
                        <div className="h-16 w-16 rounded-full overflow-hidden relative">
                          <Image
                            src="/placeholder.svg?height=64&width=64"
                            alt="Sarah J."
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">Sarah J.</h4>
                          <p className="text-sm text-muted-foreground">Wildlife Adventure Tour, 2023</p>
                          <div className="flex items-center mt-1">
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <Star className="h-4 w-4 fill-primary text-primary" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Featured Testimonial 2 */}
                  <Card className="bg-muted/30">
                    <CardContent className="p-8">
                      <div className="flex justify-center mb-6">
                        <Quote className="h-12 w-12 text-primary/20" />
                      </div>
                      <p className="text-lg italic text-center mb-6">
                        "The attention to detail was impressive. From comfortable accommodations to delicious local
                        cuisine, everything was perfect. Our guide knew exactly where to find the rarest species!"
                      </p>
                      <div className="flex items-center justify-center gap-4">
                        <div className="h-16 w-16 rounded-full overflow-hidden relative">
                          <Image
                            src="/placeholder.svg?height=64&width=64"
                            alt="Michael T."
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">Michael T.</h4>
                          <p className="text-sm text-muted-foreground">Baobab Explorer Tour, 2022</p>
                          <div className="flex items-center mt-1">
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <Star className="h-4 w-4 fill-primary text-primary" />
                            <Star className="h-4 w-4 fill-primary text-primary" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="video">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Video Testimonial 1 */}
                  <div className="space-y-4">
                    <div className="relative rounded-lg overflow-hidden aspect-video bg-muted">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-16 w-16 rounded-full bg-background/80 hover:bg-background/90 backdrop-blur"
                        >
                          <Play className="h-8 w-8" />
                        </Button>
                      </div>
                      <Image
                        src="/placeholder.svg?height=200&width=350"
                        alt="Video testimonial thumbnail"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">Our Madagascar Adventure</h4>
                      <p className="text-sm text-muted-foreground">By Sarah & John - Avenue of the Baobabs Tour</p>
                    </div>
                  </div>

                  {/* Video Testimonial 2 */}
                  <div className="space-y-4">
                    <div className="relative rounded-lg overflow-hidden aspect-video bg-muted">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-16 w-16 rounded-full bg-background/80 hover:bg-background/90 backdrop-blur"
                        >
                          <Play className="h-8 w-8" />
                        </Button>
                      </div>
                      <Image
                        src="/placeholder.svg?height=200&width=350"
                        alt="Video testimonial thumbnail"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">Wildlife Encounters in Madagascar</h4>
                      <p className="text-sm text-muted-foreground">By Elena R. - Rainforest Wildlife Adventure</p>
                    </div>
                  </div>

                  {/* Video Testimonial 3 */}
                  <div className="space-y-4">
                    <div className="relative rounded-lg overflow-hidden aspect-video bg-muted">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-16 w-16 rounded-full bg-background/80 hover:bg-background/90 backdrop-blur"
                        >
                          <Play className="h-8 w-8" />
                        </Button>
                      </div>
                      <Image
                        src="/placeholder.svg?height=200&width=350"
                        alt="Video testimonial thumbnail"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">Island Paradise Experience</h4>
                      <p className="text-sm text-muted-foreground">By David & Maria - Island Paradise Getaway</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="recent">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Recent Testimonial 1 */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="h-12 w-12 rounded-full overflow-hidden relative mr-4">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Thomas B."
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">Thomas B.</h4>
                          <p className="text-sm text-muted-foreground">Traveled May 2023</p>
                        </div>
                        <div className="ml-auto flex items-center">
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <Star className="h-4 w-4 fill-primary text-primary" />
                        </div>
                      </div>
                      <div className="mb-2 text-sm text-muted-foreground">
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold mr-2">
                          Southern Adventure Circuit
                        </span>
                      </div>
                      <h5 className="font-medium mb-2">Incredible landscapes and wildlife</h5>
                      <p className="text-muted-foreground mb-4">
                        Just returned from the Southern Adventure Circuit and I'm still processing all the amazing
                        things we saw. The spiny forests were otherworldly and the wildlife encounters were incredible.
                        Our guide was exceptional and made sure we had the best experience possible.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Recent Testimonial 2 */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="h-12 w-12 rounded-full overflow-hidden relative mr-4">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Sophia L."
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">Sophia L.</h4>
                          <p className="text-sm text-muted-foreground">Traveled May 2023</p>
                        </div>
                        <div className="ml-auto flex items-center">
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <Star className="h-4 w-4 fill-primary text-primary" />
                        </div>
                      </div>
                      <div className="mb-2 text-sm text-muted-foreground">
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold mr-2">
                          Island Paradise Getaway
                        </span>
                      </div>
                      <h5 className="font-medium mb-2">Paradise found in Madagascar</h5>
                      <p className="text-muted-foreground mb-4">
                        The beaches were absolutely stunning and the snorkeling was world-class. We saw so many colorful
                        fish and even some sea turtles! The accommodations were perfect - right on the beach with
                        amazing views. Our guide was friendly and knowledgeable about marine life.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Recent Testimonial 3 */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="h-12 w-12 rounded-full overflow-hidden relative mr-4">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Robert M."
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">Robert M.</h4>
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
                      <div className="mb-2 text-sm text-muted-foreground">
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold mr-2">
                          Photography Expedition
                        </span>
                      </div>
                      <h5 className="font-medium mb-2">Photographer's dream destination</h5>
                      <p className="text-muted-foreground mb-4">
                        Just back from the Photography Expedition and my camera is full of amazing shots! The guide knew
                        exactly where to position us for the best lighting and compositions. We had special access to
                        locations at sunrise and sunset. Worth every penny for serious photographers.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Review Statistics */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">What Our Travelers Think</h2>
                <p className="text-muted-foreground mb-8">
                  We're proud of our 4.9-star average rating across all tours. Our commitment to exceptional service and
                  authentic experiences is reflected in the feedback from our travelers.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="text-sm w-24">5 Stars</div>
                    <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[92%]"></div>
                    </div>
                    <div className="text-sm font-medium">92%</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-sm w-24">4 Stars</div>
                    <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[6%]"></div>
                    </div>
                    <div className="text-sm font-medium">6%</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-sm w-24">3 Stars</div>
                    <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[2%]"></div>
                    </div>
                    <div className="text-sm font-medium">2%</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-sm w-24">2 Stars</div>
                    <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[0%]"></div>
                    </div>
                    <div className="text-sm font-medium">0%</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-sm w-24">1 Star</div>
                    <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[0%]"></div>
                    </div>
                    <div className="text-sm font-medium">0%</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-4xl font-bold text-primary mb-2">98%</div>
                    <p className="text-sm text-muted-foreground">Would recommend us</p>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-4xl font-bold text-primary mb-2">4.9</div>
                    <p className="text-sm text-muted-foreground">Average rating</p>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <p className="text-sm text-muted-foreground">Reviews received</p>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-4xl font-bold text-primary mb-2">12k+</div>
                    <p className="text-sm text-muted-foreground">Happy travelers</p>
                  </div>
                </div>
              </div>
              <div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Share Your Experience</h3>
                    <p className="text-muted-foreground mb-6">
                      Have you traveled with us? We'd love to hear about your experience. Your feedback helps us improve
                      and helps other travelers plan their perfect Madagascar adventure.
                    </p>
                    <Button className="w-full mb-4">Write a Review</Button>
                    <p className="text-sm text-muted-foreground text-center">You can also review us on:</p>
                    <div className="flex justify-center gap-4 mt-4">
                      <Button variant="outline" size="sm">
                        TripAdvisor
                      </Button>
                      <Button variant="outline" size="sm">
                        Google
                      </Button>
                      <Button variant="outline" size="sm">
                        Facebook
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Share Your Madagascar Experience</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Your feedback helps us improve and helps other travelers plan their perfect trip.
                </p>
              </div>
              <div className="mt-6">
                <Link href="/write-review">
                  <Button size="lg">Write a Review</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                  Ready for Your Own Madagascar Story?
                </h2>
                <p className="mb-6 text-primary-foreground/90">
                  Join the thousands of happy travelers who have experienced the magic of Madagascar with Ophiris Tours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="secondary" size="lg">
                    Browse Tours
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Madagascar adventure"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}

