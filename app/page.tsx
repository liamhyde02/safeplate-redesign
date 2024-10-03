import { Hero } from '@/components/Hero'
import {Features} from '@/components/Features'
import {Testimonials} from '@/components/Testimonials'
import {Footer} from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </main>
  )
}