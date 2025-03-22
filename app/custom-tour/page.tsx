import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Slider } from "@/components/ui/slider"
import { CalendarIcon, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Create Custom Tour | Ophiris Madagascar Tours",
  description:
    "Design your own personalized Madagascar adventure. Tell us your preferences and we'll create a custom itinerary just for you.",
}

export default function CustomTourPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Create Your Custom Madagascar Adventure
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Design a personalized journey tailored to your interests, timeline, and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Your Dream Trip</h2>
                  <p className="text-muted-foreground mb-6">
                    Tell us about your ideal Madagascar experience, and our travel experts will craft a personalized
                    itinerary just for you.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">1. Travel Preferences</h3>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="travelers">Number of Travelers</Label>
                        <Input id="travelers" type="number" min="1" placeholder="e.g., 2" />
                      </div>
                      <div className="space-y-2">
                        <Label>Preferred Travel Dates</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left font-normal">
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              <span>Pick a date</span>
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" initialFocus />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="duration">Trip Duration (Days)</Label>
                      <Input id="duration" type="number" min="5" max="30" placeholder="e.g., 10" />
                    </div>

                    <div className="space-y-2">
                      <Label>Budget Range (per person)</Label>
                      <div className="pt-6 px-2">
                        <Slider defaultValue={[2500]} max={10000} step={500} />
                        <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                          <span>$1,000</span>
                          <span>$5,000</span>
                          <span>$10,000+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">2. Destinations & Interests</h3>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Which regions of Madagascar would you like to visit?</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2">
                        {regions.map((region) => (
                          <div key={region.id} className="flex items-center space-x-2">
                            <Checkbox id={`region-${region.id}`} />
                            <label
                              htmlFor={`region-${region.id}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {region.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>What activities are you interested in?</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2">
                        {activities.map((activity) => (
                          <div key={activity.id} className="flex items-center space-x-2">
                            <Checkbox id={`activity-${activity.id}`} />
                            <label
                              htmlFor={`activity-${activity.id}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {activity.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Accommodation Preferences</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2">
                        {accommodations.map((accommodation) => (
                          <div key={accommodation.id} className="flex items-center space-x-2">
                            <Checkbox id={`accommodation-${accommodation.id}`} />
                            <label
                              htmlFor={`accommodation-${accommodation.id}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {accommodation.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">3. Additional Information</h3>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="special-interests">Special Interests or Requirements</Label>
                      <Textarea
                        id="special-interests"
                        placeholder="Tell us about any special interests, dietary requirements, accessibility needs, or other preferences"
                        rows={4}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="previous-travel">Previous Travel Experience</Label>
                      <Textarea
                        id="previous-travel"
                        placeholder="Have you traveled to Africa before? What kind of travel experiences do you enjoy?"
                        rows={3}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">4. Contact Information</h3>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="Your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Your last name" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Your email address" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" placeholder="Your phone number" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country">Country of Residence</Label>
                      <Input id="country" placeholder="Your country" />
                    </div>

                    <div className="flex items-center space-x-2 pt-2">
                      <Checkbox id="marketing" />
                      <label
                        htmlFor="marketing"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I'd like to receive travel inspiration and special offers
                      </label>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="w-full md:w-auto">
                  Submit Custom Tour Request
                </Button>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Why Create a Custom Tour?</h3>
                    <ul className="space-y-4">
                      <li className="flex">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Personalized Experience</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            Tailor every aspect of your journey to match your interests and preferences.
                          </p>
                        </div>
                      </li>
                      <li className="flex">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Flexible Scheduling</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            Travel on your own timeline with the flexibility to adjust as needed.
                          </p>
                        </div>
                      </li>
                      <li className="flex">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Expert Guidance</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            Benefit from our local knowledge to discover hidden gems and authentic experiences.
                          </p>
                        </div>
                      </li>
                      <li className="flex">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Private Tours Available</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            Enjoy the exclusivity of a private guide and vehicle for your group.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Custom Madagascar Tour"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <p className="text-white font-medium">Create memories that last a lifetime</p>
                  </div>
                </div>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3">What Happens Next?</h3>
                    <ol className="space-y-3">
                      <li className="flex">
                        <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold mr-2">
                          1
                        </span>
                        <p className="text-sm">Our travel experts will review your preferences</p>
                      </li>
                      <li className="flex">
                        <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold mr-2">
                          2
                        </span>
                        <p className="text-sm">We'll contact you within 48 hours to discuss details</p>
                      </li>
                      <li className="flex">
                        <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold mr-2">
                          3
                        </span>
                        <p className="text-sm">You'll receive a custom itinerary and quote</p>
                      </li>
                      <li className="flex">
                        <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold mr-2">
                          4
                        </span>
                        <p className="text-sm">We'll refine the plan until it's perfect for you</p>
                      </li>
                    </ol>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

const regions = [
  { id: 1, name: "Antananarivo & Central Highlands" },
  { id: 2, name: "Northern Madagascar (Diego Suarez, Nosy Be)" },
  { id: 3, name: "Eastern Rainforests (Andasibe, Ranomafana)" },
  { id: 4, name: "Southern Madagascar (Isalo, Ifaty)" },
  { id: 5, name: "Western Madagascar (Morondava, Avenue of Baobabs)" },
  { id: 6, name: "Remote Areas (Masoala Peninsula, Tsingy)" },
]

const activities = [
  { id: 1, name: "Wildlife Viewing & Lemur Spotting" },
  { id: 2, name: "Hiking & Trekking" },
  { id: 3, name: "Beach & Snorkeling" },
  { id: 4, name: "Cultural Experiences & Village Visits" },
  { id: 5, name: "Photography" },
  { id: 6, name: "Birdwatching" },
  { id: 7, name: "Botanical Tours" },
  { id: 8, name: "Scuba Diving" },
]

const accommodations = [
  { id: 1, name: "Luxury Lodges & Resorts" },
  { id: 2, name: "Mid-range Hotels" },
  { id: 3, name: "Eco-lodges" },
  { id: 4, name: "Boutique Hotels" },
  { id: 5, name: "Basic Accommodations (for remote areas)" },
  { id: 6, name: "Camping (for adventure tours)" },
]

