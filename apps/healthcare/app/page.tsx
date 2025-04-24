import Link from "next/link"
import { MapPin, Calendar, Video, MessageSquare, Clock, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { ClinicMap } from "@/components/clinic-map"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="rounded-full bg-sky-500 p-1">
                <div className="h-6 w-6 rounded-full bg-white"></div>
              </div>
              <span className="text-xl font-bold">OneHealth</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#how-it-works" className="text-sm font-medium hover:underline">
              How it works
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline">
              Pricing
            </Link>
            <Link href="#locations" className="text-sm font-medium hover:underline">
              Locations
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:underline">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white py-20 md:py-32">
          <div className="container relative z-10">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="flex flex-col justify-center space-y-6">
                <Badge className="w-fit bg-sky-100 text-sky-700 hover:bg-sky-100">
                  Healthcare reimagined
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Primary care that puts <span className="text-sky-600">you first</span>
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  24/7 virtual care, same-day appointments, and a network of clinics for in-person visits. All with a simple membership.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link href="/signup">
                    <Button size="lg" className="w-full sm:w-auto">
                      Become a member
                    </Button>
                  </Link>
                  <Link href="/book">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Book a visit
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-100/50 to-transparent rounded-2xl"></div>
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Doctor with patient"
                  className="relative z-10 rounded-2xl"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="how-it-works" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Healthcare that works for you
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                We've redesigned the healthcare experience from the ground up, putting you at the center of everything we do.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-none shadow-lg">
                <CardHeader className="pb-2">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-100">
                    <Video className="h-6 w-6 text-sky-600" />
                  </div>
                  <CardTitle>24/7 Virtual Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Connect with a provider anytime via video chat or messaging for urgent issues, prescriptions, and more.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader className="pb-2">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-100">
                    <Calendar className="h-6 w-6 text-sky-600" />
                  </div>
                  <CardTitle>Same-Day Appointments</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Book in-person visits at any of our modern clinics, often for the same day or next day.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader className="pb-2">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-100">
                    <MessageSquare className="h-6 w-6 text-sky-600" />
                  </div>
                  <CardTitle>Continuous Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Message your care team anytime with follow-up questions or concerns about your health.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Simple, transparent pricing
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Choose the plan that works best for you and your family. All plans include access to our network of clinics and 24/7 virtual care.
              </p>
            </div>

            <Tabs defaultValue="monthly" className="w-full max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Yearly (Save 20%)</TabsTrigger>
              </TabsList>
              <TabsContent value="monthly">
                <div className="grid gap-8 md:grid-cols-2">
                  <Card className="border-2 border-sky-100">
                    <CardHeader>
                      <CardTitle>Individual</CardTitle>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">$19</span>
                        <span className="text-gray-500 ml-2">/month</span>
                      </div>
                      <CardDescription className="mt-2">
                        Perfect for individuals seeking quality healthcare
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <div className="mr-2 h-4 w-4 rounded-full bg-sky-500"></div>
                          <span>Unlimited virtual care</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 h-4 w-4 rounded-full bg-sky-500"></div>
                          <span>Same-day appointments</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 h-4 w-4 rounded-full bg-sky-500"></div>
                          <span>Secure messaging with your care team</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 h-4 w-4 rounded-full bg-sky-500"></div>
                          <span>$15 copay for in-person visits</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/signup?plan=individual" className="w-full">
                        <Button className="w-full">Get started</Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card className="border-2 border-sky-600 relative">
                    <div className="absolute top-0 right-0 bg-sky-600 text-white px-3 py-1 text-xs font-medium rounded-bl-lg rounded-tr-lg">
                      Popular
                    </div>
                    <CardHeader>
                      <CardTitle>Family</CardTitle>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">$39</span>
                        <span className="text-gray-500 ml-2">/month</span>
                      </div>
                      <CardDescription className="mt-2">
                        For families up to 5 members
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <div className="mr-2 h-4 w-4 rounded-full bg-sky-500"></div>
                          <span>Everything in Individual plan</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 h-4 w-4 rounded-full bg-sky-500"></div>
                          <span>Up to 5 family members</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 h-4 w-4 rounded-full bg-sky-500"></div>
                          <span>Pediatric care included</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 h-4 w-4 rounded-full bg-sky-500"></div>
                          <span>$10 copay for in-person visits</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/signup?plan=family" className="w-full">
                        <Button className="w-full">Get started</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="yearly">
                <div className="grid gap-8 md:grid-cols-2">
                  <Card className="border-2 border-sky-100">
                    <CardHeader>
                      <CardTitle>Individual</CardTitle>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">$182</span>
                        <span className="text-gray-500 ml-2">/year</span>
                      </div>
                      <CardDescription className="mt-2">
                        Perfect for individuals seeking quality healthcare
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <div className="mr-2 h-4 w-4 rounded-full bg-sky-500"></div>
                          <span>Unlimited virtual care</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 h-4 w-4 rounded-full bg-sky-500"></div>
                          <span>Same-day appointments</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 h-4 w-4 rounded-full bg-sky-500"></div>
                          <span>Secure messaging with your care team</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 h-4 w-4 rounded-full bg-sky-500"></div>
                          <span>$15 copay for in-person visits</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/signup?plan=individual-yearly" className="w-full">
                        <Button className="w-full">Get started</Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card className="border-2 border-sky-600 relative">
                    <div className="absolute top-0 right-0 bg-sky-600 text-white px-3 py-1 text-xs font-medium rounded-bl-lg rounded-tr-lg">
                      Popular
                    </div>
                    <CardHeader>
                      <CardTitle>Family</CardTitle>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">$374</span>
                        <span className="text-gray-500 ml-2">/year</span>
                      </div>
                      <CardDescription className="mt-2">
                        For families up to 5 members
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <div className="mr-2 h-4 w-4 rounded-full bg-sky-500"></div>
                          <span>Everything in Individual plan</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 h-4 w-4 rounded-full bg-sky-500"></div>
                          <span>Up to 5 family members</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 h-4 w-4 rounded-full bg-sky-500"></div>
                          <span>Pediatric care included</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 h-4 w-4 rounded-full bg-sky-500"></div>
                          <span>$10 copay for in-person visits</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/signup?plan=family-yearly" className="w-full">
                        <Button className="w-full">Get started</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-12 text-center">
              <p className="text-gray-500 mb-4">Not ready for a membership?</p>
              <Link href="/pay-per-visit">
                <Button variant="outline">
                  Pay per visit options
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                What our members say
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Join thousands of members who have transformed their healthcare experience with OneHealth.
              </p>
            </div>

            <TestimonialCarousel />
          </div>
        </section>

        {/* Locations Section */}
        <section id="locations" className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Find a clinic near you
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                With over 50 locations nationwide, there's always a OneHealth clinic nearby.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4">Popular locations</h3>
                <ul className="space-y-4">
                  {["New York", "San Francisco", "Chicago", "Boston", "Los Angeles"].map((city) => (
                    <li key={city} className="flex items-center justify-between border-b pb-2">
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 text-sky-600 mr-2" />
                        <span>{city}</span>
                      </div>
                      <Badge variant="outline" className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>Open today</span>
                      </Badge>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link href="/locations">
                    <Button variant="outline" className="w-full">
                      View all locations
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="h-[400px] rounded-xl overflow-hidden shadow-md">
                <ClinicMap />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Frequently asked questions
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Find answers to common questions about our services, membership, and more.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How does membership work?</AccordionTrigger>
                  <AccordionContent>
                    Our membership gives you access to our network of clinics and 24/7 virtual care. You pay a monthly or annual fee, plus a small copay for in-person visits. There are no hidden fees or surprise bills.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Do you accept insurance?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we accept most major insurance plans. While our membership fee isn't typically covered by insurance, your in-person visits and lab work may be covered depending on your plan.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can I see the same doctor each time?</AccordionTrigger>
                  <AccordionContent>
                    We believe in continuity of care. You can choose a primary care provider and see them for all your visits, or you can see any available provider if you need a same-day appointment.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>What if I need to see a specialist?</AccordionTrigger>
                  <AccordionContent>
                    Our primary care providers can handle most health concerns. If you need specialized care, we'll refer you to trusted specialists in our network and coordinate your care.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>How do virtual visits work?</AccordionTrigger>
                  <AccordionContent>
                    Virtual visits take place through our secure app or website. You can connect with a provider via video chat or messaging. Many conditions can be diagnosed and treated virtually, and prescriptions can be sent directly to your pharmacy.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-500 mb-4">Still have questions?</p>
              <Link href="/contact">
                <Button variant="outline">
                  Contact our support team
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-sky-600 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Ready to transform your healthcare experience?
              </h2>
              <p className="text-sky-100 mb-8 text-lg">
                Join thousands of members who have made the switch to OneHealth. Get started today and experience healthcare that puts you first.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    Become a member
                  </Button>
                </Link>
                <Link href="/book">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-sky-600">
                    Book a visit
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-gray-50 py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-sky-500 p-1">
                  <div className="h-6 w-6 rounded-full bg-white"></div>
                </div>
                <span className="text-xl font-bold">OneHealth</span>
              </Link>
              <p className="text-gray-500 text-sm">
                Modern healthcare for modern life. 24/7 virtual care and in-person visits.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link href="/about" className="hover:text-gray-900">About us</Link></li>
                <li><Link href="/careers" className="hover:text-gray-900">Careers</Link></li>
                <li><Link href="/press" className="hover:text-gray-900">Press</Link></li>
                <li><Link href="/blog" className="hover:text-gray-900">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link href="/help" className="hover:text-gray-900">Help center</Link></li>
                <li><Link href="/privacy" className="hover:text-gray-900">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-gray-900">Terms</Link></li>
                <li><Link href="/contact" className="hover:text-gray-900">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Download our app</h3>
              <div className="flex flex-col gap-2">
                <Link href="#" className="inline-block">
                  <img 
                    src="/placeholder.svg?height=40&width=120" 
                    alt="Download on the App Store" 
                    className="h-10"
                  />
                </Link>
                <Link href="#" className="inline-block">
                  <img 
                    src="/placeholder.svg?height=40&width=120" 
                    alt="Get it on Google Play" 
                    className="h-10"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} OneHealth. All rights reserved.
              </p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <Link href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.227-.046.345-.087.615-.113.943-.026.328-.037.597-.037 1.18h.838c0-.981.011-1.849.043-2.62.048-.962.208-1.724.344-2.272.143-.582.324-.994.614-1.352.29-.358.71-.614 1.105-.805.475-.22.843-.33 1.234-.345 2.14-.002 2.476-.012 3.497-.059.975-.045 1.504-.207 1.857-.344.467-.182.8-.398 1.15-.748.35-.35.566.683.748-1.15.137-.353.3-.882.344-1.227.046-.345.087-.615.113-.943.026-.328.037-.597.037-1.18h-.838c0 .981-.011 1.849-.043 2.62-.048.962-.208 1.724-.344 2.272-.143.582-.324.994-.614 1.352-.29.358-.71.614-1.105.805-.475.22-.843.33-1.234.345-2.14.002-2.476.012-3.497.059z"/>
                    <path d="M16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4zm-4-2.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
