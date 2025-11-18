import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-24">
      <div className="absolute inset-0 overflow-hidden">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/70 to-slate-900 pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">Welcome to d6k9.site</h1>
          <p className="mt-4 text-lg sm:text-xl text-blue-100 max-w-xl">
            Developer | Creator | Minecraft Enthusiast
          </p>
          <p className="mt-4 text-blue-200/90 max-w-2xl">
            Crafting custom Minecraft servers, building web applications, and sharing development insights. Explore my projects, read my blog, or get in touch to collaborate.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/projects" className="inline-flex items-center rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-400 transition">
              View Projects
            </Link>
            <Link to="/blog" className="inline-flex items-center rounded-lg border border-white/20 px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 transition">
              Read Blog
            </Link>
            <Link to="/contact" className="inline-flex items-center rounded-lg border border-blue-500/40 px-4 py-2 text-blue-200 hover:text-white hover:bg-blue-500/20 transition">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
