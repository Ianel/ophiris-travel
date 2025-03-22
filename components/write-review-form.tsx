"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Check, Star, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  tourName: z.string().min(1, {
    message: "Please select the tour you took.",
  }),
  travelDate: z.string().min(1, {
    message: "Please select when you traveled.",
  }),
  rating: z.string().min(1, {
    message: "Please provide a rating.",
  }),
  title: z.string().min(5, {
    message: "Review title must be at least 5 characters.",
  }),
  review: z.string().min(20, {
    message: "Review must be at least 20 characters.",
  }),
  highlights: z.string().optional(),
  improvements: z.string().optional(),
  recommendationLevel: z.string().min(1, {
    message: "Please select a recommendation level.",
  }),
  consentToPublish: z.boolean().refine((val) => val === true, {
    message: "You must consent to publish your review.",
  }),
})

export function WriteReviewForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      tourName: "",
      travelDate: "",
      rating: "",
      title: "",
      review: "",
      highlights: "",
      improvements: "",
      recommendationLevel: "",
      consentToPublish: false,
    },
  })

  const [submitted, setSubmitted] = useState(false)
  const [photoUploaded, setPhotoUploaded] = useState(false)

  const onSubmit = (data) => {
    console.log(data)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Thank You for Your Review!</CardTitle>
          <CardDescription>Your feedback has been submitted successfully.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="rounded-full bg-primary/20 p-3">
              <Check className="h-8 w-8 text-primary" />
            </div>
          </div>
          <p className="text-center">
            We appreciate you taking the time to share your experience with us. Your review will help other travelers
            plan their perfect Madagascar adventure.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="outline" onClick={() => setSubmitted(false)}>
            Write Another Review
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Write Your Review</CardTitle>
        <CardDescription>Share your experience with Ophiris Madagascar</CardDescription>
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
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
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
                    <FormDescription>Your email will not be published with your review.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-4">
              <FormField
                control={form.control}
                name="tourName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tour Name</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select the tour you took" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="wildlife-explorer">Madagascar Wildlife Explorer</SelectItem>
                        <SelectItem value="baobab-beaches">Baobab & Beaches</SelectItem>
                        <SelectItem value="rainforest-lemurs">Rainforest & Lemurs</SelectItem>
                        <SelectItem value="madagascar-complete">Madagascar Complete</SelectItem>
                        <SelectItem value="southern-adventure">Southern Madagascar Adventure</SelectItem>
                        <SelectItem value="northern-highlights">Northern Highlights</SelectItem>
                        <SelectItem value="custom-tour">Custom Tour</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="travelDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>When Did You Travel?</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select when you traveled" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="current-month">This month</SelectItem>
                        <SelectItem value="last-3-months">Within the last 3 months</SelectItem>
                        <SelectItem value="last-6-months">Within the last 6 months</SelectItem>
                        <SelectItem value="last-year">Within the last year</SelectItem>
                        <SelectItem value="more-than-year">More than a year ago</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Overall Rating</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <FormItem key={rating} className="flex flex-col items-center space-y-1">
                          <FormControl>
                            <RadioGroupItem value={rating.toString()} className="sr-only" id={`rating-${rating}`} />
                          </FormControl>
                          <label
                            htmlFor={`rating-${rating}`}
                            className={`cursor-pointer p-2 ${
                              field.value === rating.toString()
                                ? "text-primary"
                                : "text-muted-foreground hover:text-primary/70"
                            }`}
                          >
                            <Star
                              className="h-8 w-8"
                              fill={field.value >= rating.toString() ? "currentColor" : "none"}
                            />
                          </label>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Review Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Summarize your experience in a few words" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="review"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Review</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Share the details of your experience"
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-4">
              <FormField
                control={form.control}
                name="highlights"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Highlights of Your Trip</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="What were the best parts of your experience?"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="improvements"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Suggestions for Improvement</FormLabel>
                    <FormControl>
                      <Textarea placeholder="What could we have done better?" className="resize-none" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="recommendationLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Would You Recommend Ophiris to Others?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your recommendation level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="definitely">Definitely - I already have!</SelectItem>
                      <SelectItem value="likely">Very likely to recommend</SelectItem>
                      <SelectItem value="maybe">Maybe, with some caveats</SelectItem>
                      <SelectItem value="unlikely">Unlikely to recommend</SelectItem>
                      <SelectItem value="no">Would not recommend</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Upload Photos (Optional)</h3>
                <div className="border-2 border-dashed rounded-md p-6 text-center">
                  {photoUploaded ? (
                    <div className="space-y-2">
                      <div className="flex items-center justify-center">
                        <Check className="h-8 w-8 text-primary" />
                      </div>
                      <p className="text-sm">1 photo uploaded successfully</p>
                      <Button type="button" variant="outline" size="sm" onClick={() => setPhotoUploaded(false)}>
                        Upload another
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex items-center justify-center">
                        <Upload className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Drag and drop your photos here, or click to browse
                      </p>
                      <Button type="button" variant="outline" size="sm" onClick={() => setPhotoUploaded(true)}>
                        Browse files
                      </Button>
                    </div>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  You can upload up to 5 photos. Maximum file size: 5MB per photo.
                </p>
              </div>

              <FormField
                control={form.control}
                name="consentToPublish"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I consent to Ophiris publishing my review and photos on their website and marketing materials.
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full">
              Submit Review
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

