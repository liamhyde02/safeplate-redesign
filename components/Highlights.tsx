import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Radar, FileText, LayoutDashboard } from 'lucide-react'

const items = [
  {
    icon: Radar,
    title: 'Comprehensive Allergen Detection',
    description: 'Scan for all top nine allergens simultaneously, saving you both time and money.',
  },
  {
    icon: FileText,
    title: 'Instant Results',
    description: 'Receive real-time results for immediate action in your factory.',
  },
  {
    icon: LayoutDashboard,
    title: 'User-Friendly Dashboard',
    description: 'Easily access and manage your test results with our intuitive dashboard.',
  },
]

export function Highlights() {
  return (
    <section id="highlights" className="bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-900 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:text-5xl">
              Qualitative Allergen Testing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              A detection platform for identifying biological and chemical food safety hazards and environmental contaminants.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {items.map((item) => (
                <Card key={item.title} className="bg-white dark:bg-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-600 dark:text-blue-400">
                      <item.icon className="h-6 w-6 mr-2" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="dark:text-gray-300">{item.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Card className="w-full overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src="/static/images/device1.jpg"
                    alt="SafePlate Device"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}