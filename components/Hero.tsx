'use client'

import { Button } from "@/components/ui/button"
import { Frame } from "lucide-react"

export function Hero() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center">
          <Frame className="mx-auto h-12 w-12 text-blue-600" />
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            SafePlate Technologies
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            Allergen Testing Revolutionized
          </p>
          
        </div>
      </div>
    </div>
  )
}