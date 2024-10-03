import { Hero } from '@/components/Hero'
import {Footer} from '@/components/Footer'
import {AboutUs} from '@/components/AboutUs'
import { Highlights } from '@/components/Highlights'
import { Vision } from '@/components/Vision'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Highlights />
      <Vision />
      <AboutUs />
      <Footer />
    </main>
  )
}