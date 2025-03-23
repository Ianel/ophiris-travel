import Link from "next/link";
import Image from "next/image";
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    MessageSquare,
    HelpCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative">
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <div className="relative h-[400px]">
                        <Image
                            src="/placeholder.svg?height=400&width=1200"
                            alt="Contact Ophiris Tours"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            Contact Us
                        </h1>
                        <p className="mt-4 max-w-2xl text-lg">
                            We're here to help you plan your perfect Madagascar
                            adventure
                        </p>
                    </div>
                </section>

                {/* Contact Information */}
                <section className="py-12">
                    <div className="container">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card>
                                <CardContent className="p-6 flex flex-col items-center text-center">
                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                        <Mail className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">
                                        Email Us
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        Our team typically responds within 24
                                        hours
                                    </p>
                                    <div className="space-y-1">
                                        <p className="font-medium">
                                            General Inquiries:
                                        </p>
                                        <p className="text-muted-foreground">
                                            info@ophiris.com
                                        </p>
                                    </div>
                                    <div className="space-y-1 mt-4">
                                        <p className="font-medium">
                                            Booking & Reservations:
                                        </p>
                                        <p className="text-muted-foreground">
                                            bookings@ophiris.com
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 flex flex-col items-center text-center">
                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                        <Phone className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">
                                        Call Us
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        Speak directly with our travel
                                        specialists
                                    </p>
                                    <div className="space-y-1">
                                        <p className="font-medium">
                                            Madagascar Office:
                                        </p>
                                        <p className="text-muted-foreground">
                                            +261 20 22 123 456
                                        </p>
                                    </div>
                                    <div className="space-y-1 mt-4">
                                        <p className="font-medium">
                                            International:
                                        </p>
                                        <p className="text-muted-foreground">
                                            +44 20 7123 4567
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 flex flex-col items-center text-center">
                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                        <Clock className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">
                                        Office Hours
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        We're available to assist you during
                                        these hours
                                    </p>
                                    <div className="space-y-1">
                                        <p className="font-medium">
                                            Monday - Friday:
                                        </p>
                                        <p className="text-muted-foreground">
                                            8:00 AM - 6:00 PM (GMT+3)
                                        </p>
                                    </div>
                                    <div className="space-y-1 mt-4">
                                        <p className="font-medium">Saturday:</p>
                                        <p className="text-muted-foreground">
                                            9:00 AM - 2:00 PM (GMT+3)
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Contact Form & Map */}
                <section className="py-12 bg-muted/50">
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

                                <Card>
                                    <CardContent className="p-6">
                                        <form className="space-y-6">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <label
                                                        htmlFor="first-name"
                                                        className="text-sm font-medium"
                                                    >
                                                        First Name
                                                    </label>
                                                    <Input
                                                        id="first-name"
                                                        placeholder="Your first name"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label
                                                        htmlFor="last-name"
                                                        className="text-sm font-medium"
                                                    >
                                                        Last Name
                                                    </label>
                                                    <Input
                                                        id="last-name"
                                                        placeholder="Your last name"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <label
                                                        htmlFor="email"
                                                        className="text-sm font-medium"
                                                    >
                                                        Email
                                                    </label>
                                                    <Input
                                                        id="email"
                                                        type="email"
                                                        placeholder="Your email address"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label
                                                        htmlFor="phone"
                                                        className="text-sm font-medium"
                                                    >
                                                        Phone
                                                    </label>
                                                    <Input
                                                        id="phone"
                                                        placeholder="Your phone number"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label
                                                    htmlFor="inquiry-type"
                                                    className="text-sm font-medium"
                                                >
                                                    Inquiry Type
                                                </label>
                                                <Select>
                                                    <SelectTrigger id="inquiry-type">
                                                        <SelectValue placeholder="Select inquiry type" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="general">
                                                            General Inquiry
                                                        </SelectItem>
                                                        <SelectItem value="booking">
                                                            Booking &
                                                            Reservations
                                                        </SelectItem>
                                                        <SelectItem value="custom">
                                                            Custom Tour Request
                                                        </SelectItem>
                                                        <SelectItem value="feedback">
                                                            Feedback
                                                        </SelectItem>
                                                        <SelectItem value="other">
                                                            Other
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="space-y-2">
                                                <label
                                                    htmlFor="tour-interest"
                                                    className="text-sm font-medium"
                                                >
                                                    Interested Tour (Optional)
                                                </label>
                                                <Select>
                                                    <SelectTrigger id="tour-interest">
                                                        <SelectValue placeholder="Select a tour (if applicable)" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="none">
                                                            Not specific to a
                                                            tour
                                                        </SelectItem>
                                                        <SelectItem value="baobabs">
                                                            Avenue of the
                                                            Baobabs Explorer
                                                        </SelectItem>
                                                        <SelectItem value="wildlife">
                                                            Rainforest Wildlife
                                                            Adventure
                                                        </SelectItem>
                                                        <SelectItem value="island">
                                                            Island Paradise
                                                            Getaway
                                                        </SelectItem>
                                                        <SelectItem value="cultural">
                                                            Cultural Immersion
                                                            Experience
                                                        </SelectItem>
                                                        <SelectItem value="photography">
                                                            Photography
                                                            Expedition
                                                        </SelectItem>
                                                        <SelectItem value="southern">
                                                            Southern Adventure
                                                            Circuit
                                                        </SelectItem>
                                                        <SelectItem value="custom">
                                                            Custom Tour
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="space-y-2">
                                                <label
                                                    htmlFor="message"
                                                    className="text-sm font-medium"
                                                >
                                                    Message
                                                </label>
                                                <Textarea
                                                    id="message"
                                                    placeholder="Tell us about your travel plans, questions, or special requirements"
                                                    className="min-h-[150px]"
                                                />
                                            </div>

                                            <Button
                                                type="submit"
                                                className="w-full"
                                            >
                                                <Send className="h-4 w-4 mr-2" />{" "}
                                                Send Message
                                            </Button>
                                        </form>
                                    </CardContent>
                                </Card>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                                    Visit Our Office
                                </h2>
                                <p className="text-muted-foreground mb-8">
                                    Our main office is located in the heart of
                                    Antananarivo, Madagascar's capital city. We
                                    also have a representative office in London
                                    for our international clients.
                                </p>

                                <div className="space-y-6">
                                    <Card>
                                        <CardContent className="p-6">
                                            <div className="flex items-start gap-4">
                                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                                                    <MapPin className="h-5 w-5 text-primary" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg mb-2">
                                                        Madagascar Headquarters
                                                    </h3>
                                                    <p className="text-muted-foreground mb-2">
                                                        123 Avenue de
                                                        l'Indépendance
                                                        <br />
                                                        Antananarivo 101
                                                        <br />
                                                        Madagascar
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        Located near the Queen's
                                                        Palace, our office is
                                                        easily accessible from
                                                        the city center.
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="p-6">
                                            <div className="flex items-start gap-4">
                                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                                                    <MapPin className="h-5 w-5 text-primary" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg mb-2">
                                                        London Representative
                                                        Office
                                                    </h3>
                                                    <p className="text-muted-foreground mb-2">
                                                        45 Kensington High
                                                        Street
                                                        <br />
                                                        London W8 5ED
                                                        <br />
                                                        United Kingdom
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        Our London office serves
                                                        clients in Europe and
                                                        provides initial
                                                        consultations for
                                                        UK-based travelers.
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <div className="relative h-[300px] rounded-lg overflow-hidden">
                                        <Image
                                            src="/placeholder.svg?height=300&width=600"
                                            alt="Office location map"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Button>View on Google Maps</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Live Chat & FAQ */}
                <section className="py-12">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <MessageSquare className="h-6 w-6 text-primary" />
                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                        Live Chat Support
                                    </h2>
                                </div>
                                <p className="text-muted-foreground mb-8">
                                    Need immediate assistance? Our live chat
                                    support is available during business hours
                                    to answer your questions in real-time.
                                </p>

                                <Card className="bg-muted/30 mb-8">
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                                                <MessageSquare className="h-6 w-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold">
                                                    Chat with a Travel
                                                    Specialist
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    Available Monday-Friday,
                                                    8AM-6PM (GMT+3)
                                                </p>
                                            </div>
                                        </div>
                                        <Button className="w-full">
                                            Start Live Chat
                                        </Button>
                                    </CardContent>
                                </Card>

                                <div className="flex items-center gap-3 mb-6">
                                    <HelpCircle className="h-6 w-6 text-primary" />
                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                        Other Ways to Connect
                                    </h2>
                                </div>

                                <div className="space-y-4">
                                    <Card>
                                        <CardContent className="p-4">
                                            <div className="flex items-center gap-4">
                                                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
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
                                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h3 className="font-medium">
                                                        Facebook
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground">
                                                        Message us on Facebook
                                                        for quick responses
                                                    </p>
                                                </div>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="ml-auto"
                                                >
                                                    Connect
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="p-4">
                                            <div className="flex items-center gap-4">
                                                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
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
                                                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h3 className="font-medium">
                                                        Twitter
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground">
                                                        Tweet us your questions
                                                        anytime
                                                    </p>
                                                </div>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="ml-auto"
                                                >
                                                    Connect
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardContent className="p-4">
                                            <div className="flex items-center gap-4">
                                                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
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
                                                        <rect
                                                            width="20"
                                                            height="20"
                                                            x="2"
                                                            y="2"
                                                            rx="5"
                                                            ry="5"
                                                        />
                                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                        <line
                                                            x1="17.5"
                                                            x2="17.51"
                                                            y1="6.5"
                                                            y2="6.5"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h3 className="font-medium">
                                                        Instagram
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground">
                                                        DM us on Instagram for
                                                        travel inspiration
                                                    </p>
                                                </div>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="ml-auto"
                                                >
                                                    Connect
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <HelpCircle className="h-6 w-6 text-primary" />
                                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                        Frequently Asked Questions
                                    </h2>
                                </div>
                                <p className="text-muted-foreground mb-8">
                                    Find quick answers to common questions about
                                    our tours, booking process, and travel in
                                    Madagascar.
                                </p>

                                <Accordion
                                    type="single"
                                    collapsible
                                    className="w-full"
                                >
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>
                                            What is the best time to visit
                                            Madagascar?
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <p className="text-muted-foreground">
                                                The best time to visit
                                                Madagascar is during the dry
                                                season from April to November.
                                                This period offers pleasant
                                                temperatures and minimal
                                                rainfall, making it ideal for
                                                wildlife viewing and outdoor
                                                activities. The peak tourist
                                                season is from July to August,
                                                so book early if you plan to
                                                travel during these months.
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>
                                            Do I need a visa to visit
                                            Madagascar?
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <p className="text-muted-foreground">
                                                Yes, most visitors need a visa
                                                to enter Madagascar. Tourist
                                                visas can be obtained upon
                                                arrival at the international
                                                airport in Antananarivo for
                                                stays up to 90 days. You'll need
                                                a valid passport with at least 6
                                                months validity, a return
                                                ticket, and the visa fee
                                                (approximately €35). We can
                                                provide more detailed
                                                information based on your
                                                nationality.
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>
                                            What vaccinations do I need for
                                            Madagascar?
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <p className="text-muted-foreground">
                                                We recommend consulting with a
                                                travel health specialist or your
                                                doctor at least 4-6 weeks before
                                                your trip. Typically, travelers
                                                to Madagascar should be
                                                up-to-date on routine
                                                vaccinations. Hepatitis A,
                                                Typhoid, and Malaria prevention
                                                are commonly recommended. Yellow
                                                Fever vaccination is required if
                                                you're arriving from a country
                                                with risk of Yellow Fever
                                                transmission.
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-4">
                                        <AccordionTrigger>
                                            How do I book a tour with Ophiris?
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <p className="text-muted-foreground">
                                                Booking with us is easy! You can
                                                book directly through our
                                                website by selecting your
                                                desired tour and available
                                                dates. Alternatively, you can
                                                contact us via email or phone to
                                                make a reservation. We require a
                                                20% deposit to secure your
                                                booking, with the balance due 60
                                                days before your tour start
                                                date. We accept credit cards,
                                                bank transfers, and PayPal.
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-5">
                                        <AccordionTrigger>
                                            What is your cancellation policy?
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <p className="text-muted-foreground">
                                                Our standard cancellation policy
                                                is as follows: Cancellations
                                                made more than 60 days before
                                                the tour start date receive a
                                                full refund minus a $100
                                                administration fee.
                                                Cancellations 30-60 days before
                                                receive a 50% refund.
                                                Cancellations less than 30 days
                                                before the tour start date are
                                                non-refundable. We strongly
                                                recommend purchasing travel
                                                insurance to protect against
                                                unexpected cancellations.
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-6">
                                        <AccordionTrigger>
                                            Can you arrange custom tours?
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <p className="text-muted-foreground">
                                                We specialize in creating custom
                                                itineraries tailored to your
                                                interests, timeline, and budget.
                                                Whether you're interested in
                                                wildlife photography, cultural
                                                experiences, adventure
                                                activities, or a combination of
                                                everything, our team can design
                                                the perfect Madagascar
                                                experience for you. Contact us
                                                with your preferences, and we'll
                                                create a personalized proposal.
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>

                                <div className="mt-8 p-6 bg-muted/30 rounded-lg">
                                    <h3 className="font-bold text-lg mb-2">
                                        Still have questions?
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        If you couldn't find the answer to your
                                        question, please don't hesitate to
                                        contact us directly.
                                    </p>
                                    <Button>Contact Our Team</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Newsletter */}
                <section className="py-16 bg-primary text-primary-foreground">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                                    Stay Updated
                                </h2>
                                <p className="mb-6 text-primary-foreground/90">
                                    Subscribe to our newsletter for travel tips,
                                    exclusive offers, and updates on new tours
                                    and destinations in Madagascar.
                                </p>
                            </div>
                            <div>
                                <form className="flex flex-col sm:flex-row gap-4">
                                    <Input
                                        type="email"
                                        placeholder="Your email address"
                                        className="bg-primary-foreground text-foreground"
                                    />
                                    <Button variant="secondary">
                                        Subscribe
                                    </Button>
                                </form>
                                <p className="text-sm text-primary-foreground/80 mt-2">
                                    We respect your privacy and will never share
                                    your information. You can unsubscribe at any
                                    time.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
