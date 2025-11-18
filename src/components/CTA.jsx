import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-900/40 to-indigo-900/30 p-8 sm:p-10 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white">Ready to collaborate?</h3>
          <p className="mt-3 text-blue-200/90 max-w-2xl mx-auto">
            Whether you need a custom Minecraft server, web development assistance, or just want to chat about tech, I'm here to help.
          </p>
          <div className="mt-6">
            <Link to="/contact" className="inline-flex items-center rounded-lg bg-blue-500 px-5 py-2.5 text-white hover:bg-blue-400 transition">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
