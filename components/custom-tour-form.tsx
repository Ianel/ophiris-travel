"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { format } from "date-fns"
import { CalendarIcon, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  travelDates: z.object({
    from: z.date({
      required_error: "A start date is required.",
    }),
    to: z.date({
      required_error: "An end date is required.",
    }),
  }),
  duration: z.string().min(1, {
    message: "Please select a duration.",
  }),
  travelers: z.string().min(1, {
    message: "Please select the number of travelers.",
  }),
  budget: z.array(z.number()).min(1),
  destinations: z.array(z.string()).min(1, {
    message: "Please select at least one destination.",
  }),
  activities: z.array(z.string()).min(1, {
    message: "Please select at least one activity.",
  }),
  accommodationPreference: z.string().min(1, {
    message: "Please select an accommodation preference.",
  }),
  specialRequirements: z.string().optional(),
})

const destinations = [
  { id: "antananarivo", label: "Antananarivo" },
  { id: "andasibe", label: "Andasibe-Mantadia National Park" },
  { id: "ranomafana", label: "Ranomafana National Park" },
  { id: "isalo", label: "Isalo National Park" },
  { id: "avenue-baobabs", label: "Avenue of the Baobabs" },
  { id: "nosy-be", label: "Nosy Be" },
  { id: "diego-suarez", label: "Diego Suarez (Antsiranana)" },
  { id: "tsingy", label: "Tsingy de Bemaraha" },
  { id: "fort-dauphin", label: "Fort Dauphin (Tolagnaro)" },
  { id: "anakao", label: "Anakao" },
]

const activities = [
  { id: "wildlife", label: "Wildlife Viewing" },
  { id: "hiking", label: "Hiking & Trekking" },
  { id: "beaches", label: "Beaches & Snorkeling" },
  { id: "cultural", label: "Cultural Experiences" },
  { id: "photography", label: "Photography" },
  { id: "birdwatching", label: "Birdwatching" },
  { id: "kayaking", label: "Kayaking & Canoeing" },
  { id: "diving", label: "Scuba Diving" },
  { id: "food", label: "Food & Culinary Experiences" },
  { id: "village", label: "Village Visits" },
]

export function CustomTourForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      duration: "",
      travelers: "",
      budget: [3000],
      destinations: [],
      activities: [],
      accommodationPreference: "",
      specialRequirements: "",
    },
  })

  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (data) => {
    console.log(data)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Thank You!</CardTitle>
          <CardDescription>Your custom tour request has been submitted successfully.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="rounded-full bg-primary/20 p-3">
              <Check className="h-8 w-8 text-primary" />
            </div>
          </div>
          <p className="text-center">
            Our travel experts will review your preferences and contact you within 24-48 hours to discuss your
            personalized Madagascar adventure.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="outline" onClick={() => setSubmitted(false)}>
            Submit Another Request
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Custom Tour Preferences</CardTitle>
        <CardDescription>Fill out the form below to start planning your dream Madagascar adventure.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-4">
              <FormField
                control={form.control}
                name="travelDates"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Travel Dates</FormLabel>
                    <div className="grid gap-2">
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {field.value?.from ? (
                                field.value.to ? (
                                  <>
                                    {format(field.value.from, "LLL dd, y")} - {format(field.value.to, "LLL dd, y")}
                                  </>
                                ) : (
                                  format(field.value.from, "LLL dd, y")
                                )
                              ) : (
                                <span>Select your travel dates</span>
                              )}
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            initialFocus
                            mode="range"
                            selected={field.value}
                            onSelect={field.onChange}
                            numberOfMonths={2}
                            disabled={(date) =>
                              date < new Date() || date > new Date(new Date().setFullYear(new Date().getFullYear() + 2))
                            }
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Duration</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="7-10">7-10 days</SelectItem>
                        <SelectItem value="11-14">11-14 days</SelectItem>
                        <SelectItem value="15-21">15-21 days</SelectItem>
                        <SelectItem value="22+">22+ days</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="travelers"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Travelers</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select number of travelers" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "11+"].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Budget per Person (USD)</FormLabel>
                  <FormControl>
                    <div className="space-y-4">
                      <Slider
                        defaultValue={field.value}
                        max={10000}
                        min={1000}
                        step={500}
                        onValueChange={field.onChange}
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>$1,000</span>
                        <span>${field.value[0].toLocaleString()}</span>
                        <span>$10,000+</span>
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="destinations"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Destinations</FormLabel>
                  <FormDescription>Select the places you'd like to visit in Madagascar</FormDescription>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                    {destinations.map((destination) => (
                      <FormField
                        key={destination.id}
                        control={form.control}
                        name="destinations"
                        render={({ field }) => {
                          return (
                            <FormItem key={destination.id} className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(destination.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, destination.id])
                                      : field.onChange(field.value?.filter((value) => value !== destination.id))
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">{destination.label}</FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="activities"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Activities</FormLabel>
                  <FormDescription>Select the activities you're interested in</FormDescription>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                    {activities.map((activity) => (
                      <FormField
                        key={activity.id}
                        control={form.control}
                        name="activities"
                        render={({ field }) => {
                          return (
                            <FormItem key={activity.id} className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(activity.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, activity.id])
                                      : field.onChange(field.value?.filter((value) => value !== activity.id))
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">{activity.label}</FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="accommodationPreference"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Accommodation Preference</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select accommodation preference" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="budget">Budget (2-3 star)</SelectItem>
                      <SelectItem value="mid-range">Mid-range (3-4 star)</SelectItem>
                      <SelectItem value="luxury">Luxury (4-5 star)</SelectItem>
                      <SelectItem value="mixed">Mixed (combination of options)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="specialRequirements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Special Requirements or Comments</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about any special requirements, interests, or questions you have"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Submit Request
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

