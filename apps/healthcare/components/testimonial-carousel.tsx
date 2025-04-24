"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Member since 2022",
    content:
      "OneHealth has completely changed how I think about healthcare. The ability to message my doctor anytime and get quick virtual appointments has saved me so much time and stress.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Member since 2021",
    content:
      "As a busy parent, the family plan has been a lifesaver. My kids love that they can see the same doctor each time, and I love that I can book appointments for the whole family in one place.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Member since 2023",
    content:
      "The combination of in-person and virtual care is perfect. I can get quick answers through messaging for minor concerns, but still have the option to see someone in person when needed.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Member since 2022",
    content:
      "I was skeptical about the membership model at first, but it's been worth every penny. The care is personalized, the doctors actually listen, and there are no surprise bills.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "Aisha Patel",
    role: "Member since 2021",
    content:
      "As someone with a chronic condition, having a care team that knows my history and is easily accessible has made managing my health so much easier. I feel supported in a way I never did before.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleTestimonials, setVisibleTestimonials] = useState<number[]>([])
  const [itemsToShow, setItemsToShow] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1)
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2)
      } else {
        setItemsToShow(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const indices = []
    for (let i = 0; i < itemsToShow; i++) {
      indices.push((currentIndex + i) % testimonials.length)
    }
    setVisibleTestimonials(indices)
  }, [currentIndex, itemsToShow])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <div className="relative">
      <div className="flex overflow-hidden gap-4">
        {visibleTestimonials.map((index) => (
          <Card
            key={testimonials[index].id}
            className="flex-1 min-w-0 transition-all duration-300 border-none shadow-lg"
          >
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Avatar className="h-10 w-10 mr-4">
                  <AvatarImage src={testimonials[index].avatar || "/placeholder.svg"} alt={testimonials[index].name} />
                  <AvatarFallback>{testimonials[index].name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium">{testimonials[index].name}</h4>
                  <p className="text-sm text-gray-500">{testimonials[index].role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonials[index].content}"</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8 gap-2">
        <Button variant="outline" size="icon" onClick={handlePrev} className="rounded-full">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous testimonial</span>
        </Button>
        <Button variant="outline" size="icon" onClick={handleNext} className="rounded-full">
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>
    </div>
  )
}
