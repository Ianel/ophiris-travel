import Link from "next/link";
import Image from "next/image";
import {
    ChevronRight,
    MapPin,
    Calendar,
    Users,
    Star,
    Filter,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function ToursPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative">
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <div className="relative h-[400px]">
                        <Image
                            src="/placeholder.svg?height=400&width=1200"
                            alt="Madagascar tours"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            Our Madagascar Tours
                        </h1>
                        <p className="mt-4 max-w-2xl text-lg">
                            Explore our handcrafted experiences showcasing the
                            best of Madagascar
                        </p>
                    </div>
                </section>

                {/* Filter Section */}
                <section className="py-8 border-b">
                    <div className="container">
                        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Filter className="h-5 w-5 text-muted-foreground" />
                                <h2 className="text-lg font-semibold">
                                    Filter Tours
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-auto">
                                <div>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Tour Type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">
                                                All Types
                                            </SelectItem>
                                            <SelectItem value="wildlife">
                                                Wildlife
                                            </SelectItem>
                                            <SelectItem value="beach">
                                                Beach
                                            </SelectItem>
                                            <SelectItem value="cultural">
                                                Cultural
                                            </SelectItem>
                                            <SelectItem value="adventure">
                                                Adventure
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Duration" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">
                                                Any Duration
                                            </SelectItem>
                                            <SelectItem value="1-3">
                                                1-3 Days
                                            </SelectItem>
                                            <SelectItem value="4-7">
                                                4-7 Days
                                            </SelectItem>
                                            <SelectItem value="8-14">
                                                8-14 Days
                                            </SelectItem>
                                            <SelectItem value="15+">
                                                15+ Days
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Price Range" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">
                                                Any Price
                                            </SelectItem>
                                            <SelectItem value="budget">
                                                Budget (Under $1000)
                                            </SelectItem>
                                            <SelectItem value="mid">
                                                Mid-range ($1000-$2000)
                                            </SelectItem>
                                            <SelectItem value="luxury">
                                                Luxury ($2000+)
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Input
                                        type="text"
                                        placeholder="Search tours..."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tours Grid */}
                <section className="py-12">
                    <div className="container">
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

                            {/* Tour Card 4 */}
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
                                        <span className="text-sm">
                                            Central Madagascar
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">
                                        Cultural Immersion Experience
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        Connect with local communities and learn
                                        about Madagascar's rich cultural
                                        heritage.
                                    </p>
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                                <span className="text-sm">
                                                    9 Days
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
                                                $1,499
                                            </span>
                                            <span className="text-muted-foreground">
                                                {" "}
                                                / person
                                            </span>
                                        </div>
                                        <Link href="/tours/cultural-immersion">
                                            <Button>View Details</Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Tour Card 5 */}
                            <Card className="overflow-hidden">
                                <div className="relative h-48">
                                    <Image
                                        src="/placeholder.svg?height=200&width=400"
                                        alt="Photography tour"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                                        <MapPin className="h-4 w-4" />
                                        <span className="text-sm">
                                            Various Locations
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">
                                        Photography Expedition
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        Capture Madagascar's stunning landscapes
                                        and unique wildlife with expert
                                        guidance.
                                    </p>
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                                <span className="text-sm">
                                                    12 Days
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Users className="h-4 w-4 text-muted-foreground" />
                                                <span className="text-sm">
                                                    Max 6
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
                                                $2,199
                                            </span>
                                            <span className="text-muted-foreground">
                                                {" "}
                                                / person
                                            </span>
                                        </div>
                                        <Link href="/tours/photography-expedition">
                                            <Button>View Details</Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Tour Card 6 */}
                            <Card className="overflow-hidden">
                                <div className="relative h-48">
                                    <Image
                                        src="/placeholder.svg?height=200&width=400"
                                        alt="Adventure tour"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                                        <MapPin className="h-4 w-4" />
                                        <span className="text-sm">
                                            Southern Madagascar
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">
                                        Southern Adventure Circuit
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        Explore the diverse landscapes of
                                        southern Madagascar from canyons to
                                        spiny forests.
                                    </p>
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                                <span className="text-sm">
                                                    14 Days
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
                                                $2,499
                                            </span>
                                            <span className="text-muted-foreground">
                                                {" "}
                                                / person
                                            </span>
                                        </div>
                                        <Link href="/tours/southern-adventure">
                                            <Button>View Details</Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center mt-12">
                            <nav className="flex items-center gap-1">
                                <Button variant="outline" size="icon" disabled>
                                    <ChevronRight className="h-4 w-4 rotate-180" />
                                    <span className="sr-only">
                                        Previous page
                                    </span>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="bg-primary text-primary-foreground"
                                >
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
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-16 bg-primary text-primary-foreground">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                                    Can't Find What You're Looking For?
                                </h2>
                                <p className="mb-6 text-primary-foreground/90">
                                    We specialize in creating custom tours
                                    tailored to your interests, timeline, and
                                    budget. Let us design your perfect
                                    Madagascar adventure.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/booking/custom">
                                        <Button variant="secondary" size="lg">
                                            Create Custom Tour
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
                                    alt="Custom Madagascar tour"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
