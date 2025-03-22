import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Upload } from "lucide-react"

export const metadata: Metadata = {
  title: "Write a Review | Ophiris Madagascar Tours",
  description:
    "Share your experience with Ophiris Madagascar Tours. Your feedback helps us improve and helps other travelers plan their perfect trip.",
}

export default function WriteReviewPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Share Your Madagascar Experience
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Your feedback helps us improve and helps other travelers plan their perfect trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Write Your Review</CardTitle>
              <CardDescription>Tell us about your experience with Ophiris Madagascar Tours</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="tour">Which tour did you take?</Label>
                <Select>
                  <SelectTrigger id="tour">
                    <SelectValue placeholder="Select a tour" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wildlife-explorer">Madagascar Wildlife Explorer</SelectItem>
                    <SelectItem value="baobab-beaches">Baobab & Beaches</SelectItem>
                    <SelectItem value="rainforest-lemurs">Rainforest & Lemurs</SelectItem>
                    <SelectItem value="madagascar-complete">Madagascar Complete</SelectItem>
                    <SelectItem value="southern-adventure">Southern Madagascar Adventure</SelectItem>
                    <SelectItem value="northern-highlights">Northern Highlights</SelectItem>
                    <SelectItem value="custom">Custom Tour</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Overall Rating</Label>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      className="text-primary hover:text-primary/80 focus:outline-none"
                    >
                      <Star className="h-8 w-8" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Review Title</Label>
                <Input id="title" placeholder="Summarize your experience in a few words" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="review">Your Review</Label>
                <Textarea
                  id="review"
                  placeholder="Tell us about your experience with Ophiris Madagascar Tours"
                  rows={6}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="highlights">Trip Highlights</Label>
                <Textarea id="highlights" placeholder="What were the best parts of your trip?" rows={3} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="suggestions">Suggestions for Improvement</Label>
                <Textarea id="suggestions" placeholder="How could we make your experience even better?" rows={3} />
              </div>

              <div className="space-y-2">
                <Label>Would you recommend this tour to others?</Label>
                <RadioGroup defaultValue="highly-recommend">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="highly-recommend" id="highly-recommend" />
                    <Label htmlFor="highly-recommend">Highly Recommend</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="recommend" id="recommend" />
                    <Label htmlFor="recommend">Recommend</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="neutral" id="neutral" />
                    <Label htmlFor="neutral">Neutral</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="not-recommend" id="not-recommend" />
                    <Label htmlFor="not-recommend">Would Not Recommend</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Upload Photos (Optional)</Label>
                <div className="border-2 border-dashed rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 mx-auto text-muted-foreground" />
                  <p className="mt-2 text-sm text-muted-foreground">
                    Drag and drop your photos here, or click to browse
                  </p>
                  <Button variant="outline" size="sm" className="mt-4">
                    Select Files
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" placeholder="How you want your name to appear" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Your email (will not be published)" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Submit Review</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  )
}

