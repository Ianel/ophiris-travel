import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Users, Award, Heart, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="relative h-[400px]">
            <Image
              src="/placeholder.svg?height=400&width=1200"
              alt="About Ophiris Tours"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Ophiris Tours</h1>
            <p className="mt-4 max-w-2xl text-lg">Discover the story behind Madagascar's premier tour operator</p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2010 by Jean-Claude Razafindrakoto, a native Malagasy with a passion for conservation and
                  tourism, Ophiris Tours began as a small operation with a big vision: to showcase the incredible
                  biodiversity and cultural richness of Madagascar while supporting local communities and conservation
                  efforts.
                </p>
                <p className="text-muted-foreground mb-4">
                  The name "Ophiris" comes from the scientific name of a rare orchid species found only in Madagascar's
                  eastern rainforests, symbolizing our commitment to preserving the island's unique natural heritage.
                </p>
                <p className="text-muted-foreground mb-6">
                  Over the years, we've grown from a team of three guides to a full-service tour operator with over 25
                  staff members, all sharing the same passion for Madagascar and sustainable tourism. Today, we're proud
                  to be recognized as one of the leading tour operators in Madagascar, known for our expert guides,
                  authentic experiences, and commitment to responsible travel.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Ophiris Tours founder"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Mission & Values</h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                We're guided by a commitment to sustainable tourism that benefits local communities while preserving
                Madagascar's fragile ecosystems for future generations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Passion for Madagascar</h3>
                  <p className="text-muted-foreground">
                    We're deeply passionate about sharing the natural wonders and cultural heritage of our island nation
                    with travelers from around the world.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Environmental Stewardship</h3>
                  <p className="text-muted-foreground">
                    We're committed to minimizing our environmental footprint and supporting conservation efforts to
                    protect Madagascar's unique biodiversity.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Community Support</h3>
                  <p className="text-muted-foreground">
                    We believe tourism should benefit local communities through employment, education, and direct
                    support for community-led initiatives.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Meet Our Team</h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Our team consists of passionate local guides and international travel experts who share a deep love for
                Madagascar.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=256&width=256"
                    alt="Jean-Claude Razafindrakoto"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg">Jean-Claude Razafindrakoto</h3>
                <p className="text-primary font-medium mb-2">Founder & CEO</p>
                <p className="text-sm text-muted-foreground">
                  A native Malagasy with over 20 years of experience in tourism and conservation.
                </p>
              </div>
              <div className="text-center">
                <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=256&width=256"
                    alt="Sophie Rabemananjara"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg">Sophie Rabemananjara</h3>
                <p className="text-primary font-medium mb-2">Head Guide</p>
                <p className="text-sm text-muted-foreground">
                  Wildlife expert specializing in Madagascar's unique fauna with a background in biology.
                </p>
              </div>
              <div className="text-center">
                <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=256&width=256"
                    alt="Marc Andriamihaja"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg">Marc Andriamihaja</h3>
                <p className="text-primary font-medium mb-2">Operations Manager</p>
                <p className="text-sm text-muted-foreground">
                  Ensures all tours run smoothly with attention to detail and exceptional service.
                </p>
              </div>
              <div className="text-center">
                <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=256&width=256"
                    alt="Claire Randrianarisoa"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg">Claire Randrianarisoa</h3>
                <p className="text-primary font-medium mb-2">Cultural Specialist</p>
                <p className="text-sm text-muted-foreground">
                  Expert in Madagascar's diverse cultural traditions and community engagement.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <Button variant="outline" className="gap-2">
                Meet the Full Team <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Sustainability */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Conservation efforts"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Our Commitment to Sustainability</h2>
                <p className="text-muted-foreground mb-4">
                  At Ophiris Tours, sustainability isn't just a buzzword—it's at the core of everything we do. We
                  recognize the delicate balance between tourism, conservation, and community development in Madagascar.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Award className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Environmental Initiatives</h4>
                      <p className="text-sm text-muted-foreground">
                        We donate 5% of our profits to local conservation projects and minimize waste on all our tours.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Award className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Community Support</h4>
                      <p className="text-sm text-muted-foreground">
                        We employ local guides and staff, and support community-led initiatives in the areas we visit.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Award className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Responsible Travel Practices</h4>
                      <p className="text-sm text-muted-foreground">
                        We educate our travelers on responsible tourism and follow strict guidelines to minimize our
                        impact.
                      </p>
                    </div>
                  </div>
                </div>
                <Button className="gap-2">
                  Learn More About Our Initiatives <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Certifications & Partnerships</h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                We're proud to be recognized by leading organizations in sustainable tourism and conservation.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <div className="relative h-24 w-24 mb-4">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Certification logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold text-center">Travelife Certified</h3>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative h-24 w-24 mb-4">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Certification logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold text-center">Madagascar Tourism Board</h3>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative h-24 w-24 mb-4">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Certification logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold text-center">WWF Partner</h3>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative h-24 w-24 mb-4">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Certification logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold text-center">Conservation International</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">What Our Clients Say</h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Don't just take our word for it—hear from travelers who have experienced Madagascar with us.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-background">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </div>
                  </div>
                  <p className="italic mb-6">
                    "Our tour with Ophiris was the highlight of our year. The guides were knowledgeable and passionate,
                    and we saw lemurs and chameleons up close in their natural habitat. Truly unforgettable!"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden relative">
                      <Image src="/placeholder.svg?height=48&width=48" alt="Sarah J." fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Sarah J.</h4>
                      <p className="text-sm text-muted-foreground">United States</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </div>
                  </div>
                  <p className="italic mb-6">
                    "The attention to detail was impressive. From comfortable accommodations to delicious local cuisine,
                    everything was perfect. Our guide knew exactly where to find the rarest species!"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden relative">
                      <Image src="/placeholder.svg?height=48&width=48" alt="Michael T." fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Michael T.</h4>
                      <p className="text-sm text-muted-foreground">United Kingdom</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </div>
                  </div>
                  <p className="italic mb-6">
                    "As a solo traveler, I felt completely at ease with Ophiris. The small group size meant we could
                    access places larger tours couldn't, and I made friends for life among my fellow travelers."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden relative">
                      <Image src="/placeholder.svg?height=48&width=48" alt="Elena R." fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Elena R.</h4>
                      <p className="text-sm text-muted-foreground">Germany</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/testimonials">
                <Button variant="outline" className="gap-2">
                  Read More Testimonials <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                  Ready to Explore Madagascar with Us?
                </h2>
                <p className="mb-6 text-primary-foreground/90">
                  Contact us today to start planning your dream trip to one of the world's most unique destinations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/tours">
                    <Button variant="secondary" size="lg">
                      Browse Tours
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                    >
                      Contact Us
                    </Button>
                  </Link>
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

      <SiteFooter />
    </div>
  )
}

