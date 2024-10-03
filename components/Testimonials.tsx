'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: 'John Doe',
    role: 'Food Safety Manager',
    content: 'SafePlate has transformed our food safety processes. It\'s intuitive and comprehensive.',
    avatar: '/placeholder.svg?height=40&width=40',
  },
  {
    name: 'Jane Smith',
    role: 'Restaurant Owner',
    content: 'The real-time monitoring feature has been a game-changer for our business.',
    avatar: '/placeholder.svg?height=40&width=40',
  },
  {
    name: 'Mike Johnson',
    role: 'Quality Control Specialist',
    content: 'The reporting capabilities of SafePlate are unmatched. It\'s made compliance a breeze.',
    avatar: '/placeholder.svg?height=40&width=40',
  },
]

export function Testimonials() {
  return (
    <div className="bg-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Hear from the businesses that have transformed their food safety with SafePlate
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name}>
              <CardHeader>
                <div className="flex items-center">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <CardTitle>{testimonial.name}</CardTitle>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}