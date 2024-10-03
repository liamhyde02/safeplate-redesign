import React from 'react'
import { Card, CardContent } from "@/components/ui/card"

export function Vision() {
  return (
    <section id="vision" className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="w-full overflow-hidden shadow-lg">
          <CardContent className="p-8 sm:p-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center sm:text-5xl">
              Our Vision
            </h2>
            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed text-center max-w-4xl mx-auto">
              At SafePlate Technologies, we&apos;re pioneering advanced diagnostic tools to revolutionize food safety. Our initial focus is on gluten detection, providing accurate and rapid results to ensure the safety of gluten-free products. But we&apos;re not stopping there. Our technology is designed to expand, with future developments targeting the detection of peanuts, heavy metals, and pathogens. By broadening our scope, we&apos;re committed to creating a comprehensive solution that addresses multiple food safety challenges, protecting consumers and enhancing industry standards.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}