"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { format } from "date-fns"
import { CalendarIcon, CreditCard, Info, Lock, Users } from "lucide-react"

export function BookingForm({ step = "dates" }) {
  const router = useRouter()
  const [date, setDate] = useState(null)
  const [formData, setFormData] = useState({
    adults: 2,
    children: 0,
    specialRequirements: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    billingAddress: "",
    city: "",
    zipCode: "",
    country: "",
    agreeTerms: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Process booking
    router.push("/booking/confirmation")
  }

  if (step === "dates") {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Select Your Travel Dates</CardTitle>
            <CardDescription>
              Choose your preferred travel dates. We recommend being flexible with your dates for the best experience.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="start-date">Start Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Label htmlFor="flexible-dates">Are your dates flexible?</Label>
                <div className="ml-2 text-sm text-muted-foreground">(Recommended for better availability)</div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="flexible-dates" />
                <label
                  htmlFor="flexible-dates"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Yes, my dates are flexible (±3 days)
                </label>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="tour-duration">Tour Duration</Label>
              <Select defaultValue="10">
                <SelectTrigger id="tour-duration">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7">7 Days</SelectItem>
                  <SelectItem value="10">10 Days</SelectItem>
                  <SelectItem value="14">14 Days</SelectItem>
                  <SelectItem value="21">21 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto" onClick={() => document.getElementById("travelers-tab").click()}>
              Continue to Travelers
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  if (step === "travelers") {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Traveler Information</CardTitle>
            <CardDescription>Tell us about who will be joining this adventure.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="adults">Adults (18+)</Label>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setFormData({ ...formData, adults: Math.max(1, formData.adults - 1) })}
                  >
                    -
                  </Button>
                  <Input
                    id="adults"
                    name="adults"
                    type="number"
                    value={formData.adults}
                    onChange={handleChange}
                    min="1"
                    max="10"
                    className="mx-2 text-center"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setFormData({ ...formData, adults: Math.min(10, formData.adults + 1) })}
                  >
                    +
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="children">Children (0-17)</Label>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setFormData({ ...formData, children: Math.max(0, formData.children - 1) })}
                  >
                    -
                  </Button>
                  <Input
                    id="children"
                    name="children"
                    type="number"
                    value={formData.children}
                    onChange={handleChange}
                    min="0"
                    max="10"
                    className="mx-2 text-center"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setFormData({ ...formData, children: Math.min(10, formData.children + 1) })}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="specialRequirements">Special Requirements</Label>
              <Textarea
                id="specialRequirements"
                name="specialRequirements"
                value={formData.specialRequirements}
                onChange={handleChange}
                placeholder="Any dietary restrictions, accessibility needs, or other special requirements?"
                rows={4}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => document.getElementById("dates-tab").click()}>
              Back to Dates
            </Button>
            <Button onClick={() => document.getElementById("payment-tab").click()}>Continue to Payment</Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  if (step === "payment") {
    return (
      <div className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Payment Information</CardTitle>
              <CardDescription>Enter your payment details. All transactions are secure and encrypted.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <div className="relative">
                  <Input
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="1234 5678 9012 3456"
                    className="pl-10"
                  />
                  <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="cardName">Name on Card</Label>
                <Input
                  id="cardName"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleChange}
                  placeholder="John Smith"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <Input
                    id="expiryDate"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    placeholder="MM/YY"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <div className="relative">
                    <Input
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      placeholder="123"
                      className="pl-10"
                    />
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="billingAddress">Billing Address</Label>
                <Input
                  id="billingAddress"
                  name="billingAddress"
                  value={formData.billingAddress}
                  onChange={handleChange}
                  placeholder="123 Main St"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" name="city" value={formData.city} onChange={handleChange} placeholder="New York" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zipCode">Zip Code</Label>
                  <Input
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    placeholder="10001"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Select defaultValue="us">
                  <SelectTrigger id="country">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                    <SelectItem value="fr">France</SelectItem>
                    <SelectItem value="de">Germany</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2 pt-4">
                <Checkbox
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onCheckedChange={(checked) => setFormData({ ...formData, agreeTerms: checked })}
                />
                <label
                  htmlFor="agreeTerms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the{" "}
                  <a href="/terms" className="text-primary underline">
                    terms and conditions
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" className="text-primary underline">
                    privacy policy
                  </a>
                </label>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => document.getElementById("travelers-tab").click()}>
                Back to Travelers
              </Button>
              <Button type="submit" disabled={!formData.agreeTerms} onClick={handleSubmit}>
                Complete Booking
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
              <CardDescription>Review your booking details before completing your purchase.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-b pb-4">
                <h3 className="font-medium">Madagascar Wildlife Explorer</h3>
                <p className="text-sm text-muted-foreground">10 Days Tour</p>
                <div className="flex items-center mt-2">
                  <CalendarIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">{date ? format(date, "PPP") : "No date selected"}</span>
                </div>
                <div className="flex items-center mt-2">
                  <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">
                    {formData.adults} Adults, {formData.children} Children
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Tour Price (per person)</span>
                  <span>$2,499</span>
                </div>
                <div className="flex justify-between">
                  <span>Adults ({formData.adults})</span>
                  <span>${2499 * formData.adults}</span>
                </div>
                <div className="flex justify-between">
                  <span>Children ({formData.children})</span>
                  <span>${1999 * formData.children}</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes & Fees</span>
                  <span>${299}</span>
                </div>
                <div className="flex justify-between font-bold pt-4 border-t">
                  <span>Total</span>
                  <span>${2499 * formData.adults + 1999 * formData.children + 299}</span>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg mt-6">
                <div className="flex items-start">
                  <Info className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium">Booking Protection</p>
                    <p className="text-muted-foreground mt-1">
                      Your booking is protected by our flexible cancellation policy. Free cancellation up to 30 days
                      before departure.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return null
}

