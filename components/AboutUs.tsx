import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

export function AboutUs() {
  return (
    <section id="about-us" className="bg-gradient-to-b from-blue-50 to-white dark:from-blue-900 dark:to-gray-900 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center sm:text-5xl">
          About Us
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Card className="w-full overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <div className="relative w-full" style={{ paddingTop: '133.33%' }}> {/* 3:4 aspect ratio */}
                <Image
                  src="/static/images/team.jpg"
                  alt="SafePlate Technologies Team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </div>
            </CardContent>
          </Card>
          <div className="flex flex-col justify-start items-start">
            <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl leading-relaxed">
              SafePlate Technologies was born at California Polytechnic State University by a group of passionate founders driven by a shared love for food and a deep commitment to safety. Our diverse expertise spans chemistry, food science, mechanical and electrical engineering, and business. United by our mission, we are dedicated to pioneering the next generation of food safety diagnostic tools, ensuring that every product meets the highest standards of quality and protection.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}