import Link from "next/link";
import Image from "next/image";
import {
    ChevronRight,
    MapPin,
    Calendar,
    Users,
    Star,
    Mail,
    Phone,
    MapIcon,
    Instagram,
    Facebook,
    Twitter,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative">
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <div className="relative h-[600px]">
                        <Image
                            src="/placeholder.svg?height=600&width=1200"
                            alt="Madagascar landscape"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            Discover the Magic of Madagascar
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg">
                            Explore unique wildlife, pristine beaches, and
                            vibrant culture with our expert-guided tours
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <Link href="/tours">
                                <Button
                                    size="lg"
                                    className="bg-primary hover:bg-primary/90"
                                >
                                    Explore Tours
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="text-white border-white bg-white/10"
                                >
                                    Contact Us
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Featured Tours */}
                <section id="tours" className="py-16 bg-muted/50">
                    <div className="container">
                        <div className="flex flex-col items-center text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Our Featured Tours
                            </h2>
                            <p className="mt-4 max-w-2xl text-muted-foreground">
                                Handcrafted experiences to showcase the best of
                                Madagascar's diverse landscapes and culture
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Tour Card 1 */}
                            <Card className="overflow-hidden">
                                <div className="relative h-48">
                                    <Image
                                        src="/placeholder.svg?height=200&width=400"
                                        alt="Avenue of the Baobabs"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                                        Popular
                                    </div>
                                </div>
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                                        <MapPin className="h-4 w-4" />
                                        <span className="text-sm">
                                            Western Madagascar
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">
                                        Avenue of the Baobabs Explorer
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        Witness the majestic Baobab trees and
                                        explore the surrounding villages and
                                        wildlife.
                                    </p>
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                                <span className="text-sm">
                                                    7 Days
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Users className="h-4 w-4 text-muted-foreground" />
                                                <span className="text-sm">
                                                    Max 12
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <Star className="h-4 w-4 fill-primary text-primary" />
                                            <Star className="h-4 w-4 fill-primary text-primary" />
                                            <Star className="h-4 w-4 fill-primary text-primary" />
                                            <Star className="h-4 w-4 fill-primary text-primary" />
                                            <Star className="h-4 w-4 fill-primary text-primary" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-2xl font-bold">
                                                $1,299
                                            </span>
                                            <span className="text-muted-foreground">
                                                {" "}
                                                / person
                                            </span>
                                        </div>
                                        <Link href="/tours/baobabs-explorer">
                                            <Button>View Details</Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Tour Card 2 */}
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
                                        <span className="text-sm">
                                            Eastern Madagascar
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">
                                        Rainforest Wildlife Adventure
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        Trek through lush rainforests to spot
                                        lemurs, chameleons, and exotic birds.
                                    </p>
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                                <span className="text-sm">
                                                    10 Days
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Users className="h-4 w-4 text-muted-foreground" />
                                                <span className="text-sm">
                                                    Max 8
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <Star className="h-4 w-4 fill-primary text-primary" />
                                            <Star className="h-4 w-4 fill-primary text-primary" />
                                            <Star className="h-4 w-4 fill-primary text-primary" />
                                            <Star className="h-4 w-4 fill-primary text-primary" />
                                            <Star className="h-4 w-4 fill-primary text-primary" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-2xl font-bold">
                                                $1,599
                                            </span>
                                            <span className="text-muted-foreground">
                                                {" "}
                                                / person
                                            </span>
                                        </div>
                                        <Link href="/tours/rainforest-wildlife">
                                            <Button>View Details</Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Tour Card 3 */}
                            <Card className="overflow-hidden">
                                <div className="relative h-48">
                                    <Image
                                        src="/placeholder.svg?height=200&width=400"
                                        alt="Beach paradise"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                                        New
                                    </div>
                                </div>
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                                        <MapPin className="h-4 w-4" />
                                        <span className="text-sm">
                                            Northern Madagascar
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">
                                        Island Paradise Getaway
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        Relax on pristine beaches and snorkel in
                                        crystal-clear waters teeming with marine
                                        life.
                                    </p>
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                                <span className="text-sm">
                                                    8 Days
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Users className="h-4 w-4 text-muted-foreground" />
                                                <span className="text-sm">
                                                    Max 10
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <Star className="h-4 w-4 fill-primary text-primary" />
                                            <Star className="h-4 w-4 fill-primary text-primary" />
                                            <Star className="h-4 w-4 fill-primary text-primary" />
                                            <Star className="h-4 w-4 fill-primary text-primary" />
                                            <Star className="h-4 w-4 fill-primary text-primary" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-2xl font-bold">
                                                $1,899
                                            </span>
                                            <span className="text-muted-foreground">
                                                {" "}
                                                / person
                                            </span>
                                        </div>
                                        <Link href="/tours/island-paradise">
                                            <Button>View Details</Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="flex justify-center mt-12">
                            <Link href="/tours">
                                <Button variant="outline" className="gap-2">
                                    View All Tours{" "}
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-16">
                    <div className="container">
                        <div className="flex flex-col items-center text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Why Choose Ophiris
                            </h2>
                            <p className="mt-4 max-w-2xl text-muted-foreground">
                                We're dedicated to providing authentic,
                                sustainable, and unforgettable experiences in
                                Madagascar
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="flex flex-col items-center text-center">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
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
                                        className="h-6 w-6 text-primary"
                                    >
                                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold mb-2">
                                    Local Expertise
                                </h3>
                                <p className="text-muted-foreground">
                                    Our guides are native Malagasy with deep
                                    knowledge of the land, wildlife, and
                                    culture.
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
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
                                        className="h-6 w-6 text-primary"
                                    >
                                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                                        <path d="m7 10 2 2 6-6" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold mb-2">
                                    Sustainable Tourism
                                </h3>
                                <p className="text-muted-foreground">
                                    We're committed to conservation and
                                    supporting local communities through
                                    responsible travel.
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
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
                                        className="h-6 w-6 text-primary"
                                    >
                                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold mb-2">
                                    Personalized Service
                                </h3>
                                <p className="text-muted-foreground">
                                    Small group sizes ensure personalized
                                    attention and authentic experiences off the
                                    beaten path.
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
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
                                        className="h-6 w-6 text-primary"
                                    >
                                        <path d="M12 2v20" />
                                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold mb-2">
                                    Value for Money
                                </h3>
                                <p className="text-muted-foreground">
                                    Our tours offer exceptional experiences at
                                    fair prices with no hidden costs or
                                    surprises.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Us */}
                <section id="about" className="py-16 bg-muted/50">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="relative h-[400px] rounded-lg overflow-hidden">
                                <Image
                                    src="/placeholder.svg?height=400&width=600"
                                    alt="Our team in Madagascar"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                                    About Ophiris Tours
                                </h2>
                                <p className="text-muted-foreground mb-4">
                                    Founded in 2010, Ophiris Tours has been the
                                    premier provider of authentic Madagascar
                                    experiences for travelers seeking to explore
                                    this unique island nation.
                                </p>
                                <p className="text-muted-foreground mb-4">
                                    Our team consists of passionate local guides
                                    and international travel experts who share a
                                    deep love for Madagascar's incredible
                                    biodiversity and rich cultural heritage.
                                </p>
                                <p className="text-muted-foreground mb-6">
                                    We believe in sustainable tourism that
                                    benefits local communities while preserving
                                    Madagascar's fragile ecosystems for future
                                    generations to enjoy.
                                </p>
                                <Link href="/about">
                                    <Button className="gap-2">
                                        Learn More About Us{" "}
                                        <ChevronRight className="h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="py-16">
                    <div className="container">
                        <div className="flex flex-col items-center text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                What Our Travelers Say
                            </h2>
                            <p className="mt-4 max-w-2xl text-muted-foreground">
                                Hear from adventurers who have experienced the
                                magic of Madagascar with us
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card className="bg-muted/30">
                                <CardContent className="p-6">
                                    <div className="flex items-center mb-4">
                                        <Star className="h-5 w-5 fill-primary text-primary" />
                                        <Star className="h-5 w-5 fill-primary text-primary" />
                                        <Star className="h-5 w-5 fill-primary text-primary" />
                                        <Star className="h-5 w-5 fill-primary text-primary" />
                                        <Star className="h-5 w-5 fill-primary text-primary" />
                                    </div>
                                    <p className="italic mb-6">
                                        "Our tour with Ophiris was the highlight
                                        of our year. The guides were
                                        knowledgeable and passionate, and we saw
                                        lemurs and chameleons up close in their
                                        natural habitat. Truly unforgettable!"
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-full overflow-hidden relative">
                                            <Image
                                                src="/placeholder.svg?height=48&width=48"
                                                alt="Sarah J."
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">
                                                Sarah J.
                                            </h4>
                                            <p className="text-sm text-muted-foreground">
                                                Wildlife Adventure Tour, 2023
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="bg-muted/30">
                                <CardContent className="p-6">
                                    <div className="flex items-center mb-4">
                                        <Star className="h-5 w-5 fill-primary text-primary" />
                                        <Star className="h-5 w-5 fill-primary text-primary" />
                                        <Star className="h-5 w-5 fill-primary text-primary" />
                                        <Star className="h-5 w-5 fill-primary text-primary" />
                                        <Star className="h-5 w-5 fill-primary text-primary" />
                                    </div>
                                    <p className="italic mb-6">
                                        "The attention to detail was impressive.
                                        From comfortable accommodations to
                                        delicious local cuisine, everything was
                                        perfect. Our guide knew exactly where to
                                        find the rarest species!"
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-full overflow-hidden relative">
                                            <Image
                                                src="/placeholder.svg?height=48&width=48"
                                                alt="Michael T."
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">
                                                Michael T.
                                            </h4>
                                            <p className="text-sm text-muted-foreground">
                                                Baobab Explorer Tour, 2022
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="bg-muted/30">
                                <CardContent className="p-6">
                                    <div className="flex items-center mb-4">
                                        <Star className="h-5 w-5 fill-primary text-primary" />
                                        <Star className="h-5 w-5 fill-primary text-primary" />
                                        <Star className="h-5 w-5 fill-primary text-primary" />
                                        <Star className="h-5 w-5 fill-primary text-primary" />
                                        <Star className="h-5 w-5 fill-primary text-primary" />
                                    </div>
                                    <p className="italic mb-6">
                                        "As a solo traveler, I felt completely
                                        at ease with Ophiris. The small group
                                        size meant we could access places larger
                                        tours couldn't, and I made friends for
                                        life among my fellow travelers."
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-full overflow-hidden relative">
                                            <Image
                                                src="/placeholder.svg?height=48&width=48"
                                                alt="Elena R."
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">
                                                Elena R.
                                            </h4>
                                            <p className="text-sm text-muted-foreground">
                                                Island Paradise Tour, 2023
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="flex justify-center mt-8">
                            <Link href="/testimonials">
                                <Button variant="outline" className="gap-2">
                                    Read More Reviews{" "}
                                    <ChevronRight className="h-4 w-4" />
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
                                    Ready for Your Madagascar Adventure?
                                </h2>
                                <p className="mb-6 text-primary-foreground/90">
                                    Contact us today to start planning your
                                    dream trip to one of the world's most unique
                                    destinations.
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

                {/* Contact Form */}
                <section id="contact" className="py-16">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                                    Get in Touch
                                </h2>
                                <p className="text-muted-foreground mb-8">
                                    Have questions about our tours or need help
                                    planning your perfect Madagascar adventure?
                                    Our team is here to assist you every step of
                                    the way.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Mail className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium">
                                                Email Us
                                            </h3>
                                            <p className="text-muted-foreground">
                                                info@ophiris.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Phone className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium">
                                                Call Us
                                            </h3>
                                            <p className="text-muted-foreground">
                                                +261 20 22 123 456
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                            <MapIcon className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium">
                                                Visit Us
                                            </h3>
                                            <p className="text-muted-foreground">
                                                123 Avenue de l'Indépendance,
                                                Antananarivo, Madagascar
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <h3 className="font-medium mb-4">
                                        Follow Us
                                    </h3>
                                    <div className="flex gap-4">
                                        <Link
                                            href="#"
                                            className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80"
                                        >
                                            <Facebook className="h-5 w-5" />
                                        </Link>
                                        <Link
                                            href="#"
                                            className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80"
                                        >
                                            <Instagram className="h-5 w-5" />
                                        </Link>
                                        <Link
                                            href="#"
                                            className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80"
                                        >
                                            <Twitter className="h-5 w-5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-muted/30 p-8 rounded-lg">
                                <h3 className="text-xl font-bold mb-6">
                                    Send Us a Message
                                </h3>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label
                                                htmlFor="name"
                                                className="text-sm font-medium"
                                            >
                                                Name
                                            </label>
                                            <input
                                                id="name"
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label
                                                htmlFor="email"
                                                className="text-sm font-medium"
                                            >
                                                Email
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                placeholder="Your email"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="tour"
                                            className="text-sm font-medium"
                                        >
                                            Interested Tour
                                        </label>
                                        <select
                                            id="tour"
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            <option value="">
                                                Select a tour
                                            </option>
                                            <option value="baobab">
                                                Avenue of the Baobabs Explorer
                                            </option>
                                            <option value="wildlife">
                                                Rainforest Wildlife Adventure
                                            </option>
                                            <option value="island">
                                                Island Paradise Getaway
                                            </option>
                                            <option value="custom">
                                                Custom Tour
                                            </option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="message"
                                            className="text-sm font-medium"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="Tell us about your travel plans and questions"
                                        />
                                    </div>
                                    <Button type="submit" className="w-full">
                                        Send Message
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
