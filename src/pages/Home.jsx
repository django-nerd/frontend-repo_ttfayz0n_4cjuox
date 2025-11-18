import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeaturedProjects from '../components/FeaturedProjects'
import Stats from '../components/Stats'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-blue-100">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProjects />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
