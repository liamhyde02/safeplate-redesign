import { Hero } from '@/components/Hero'
import { Footer } from '@/components/Footer'
import { AboutUs } from '@/components/AboutUs'
import { Highlights } from '@/components/Highlights'
import { Vision } from '@/components/Vision'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section id="hero">
        <Hero />
      </section>
      <section id="features">
        <Highlights />
      </section>
      <section id="vision">
        <Vision />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </main>
  )
}