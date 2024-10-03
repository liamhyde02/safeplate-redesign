'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, Zap, BarChart } from "lucide-react"

const features = [
  {
    name: 'Advanced Safety Protocols',
    description: 'Implement cutting-edge safety measures to ensure food quality.',
    icon: ShieldCheck,
  },
  {
    name: 'Real-time Monitoring',
    description: 'Track and analyze food safety data in real-time for immediate action.',
    icon: Zap,
  },
  {
    name: 'Comprehensive Reporting',
    description: 'Generate detailed reports for compliance and continuous improvement.',
    icon: BarChart,
  },
]

export function Features() {
  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Features
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discover how SafePlate can revolutionize your food safety processes
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.name}>
              <CardHeader>
                <feature.icon className="h-8 w-8 text-blue-600" />
                <CardTitle>{feature.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}