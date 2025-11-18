import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const allProjects = [
  {
    title: 'MG-Creations',
    status: 'Active',
    description:
      'Professional Minecraft server development service offering custom setups, plugins, and Discord integration for gaming communities.',
    tags: ['Minecraft', 'Discord', 'Server Development'],
    type: 'Minecraft',
  },
  {
    title: 'Xemas PVP',
    status: 'Beta',
    description:
      'Lightweight PvP-first Fabric modpack for Minecraft 1.21.1. Beta v1.0.100 with optimized combat, movement, and visibility.',
    tags: ['Minecraft', 'PvP', '1.21.1', 'Fabric'],
    type: 'Minecraft',
  },
  ...Array.from({ length: 4 }).map(() => ({
    title: 'Coming Soon',
    status: 'Planned',
    description: 'Upcoming project in development.',
    tags: ['Coming Soon'],
    type: 'Coming Soon',
  })),
]

const filters = ['All Projects', 'Minecraft', 'Coming Soon']

export default function ProjectsPage() {
  const [active, setActive] = React.useState('All Projects')

  const visible = allProjects.filter((p) =>
    active === 'All Projects' ? true : p.type === active
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-blue-100">
      <Navbar />

      <main className="pt-24">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-semibold text-white">My Projects</h1>
            <p className="mt-2 text-blue-200/90">A collection of Minecraft servers, web applications, and tools I've built and maintain.</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-4 py-2 text-sm border transition ${
                  active === f
                    ? 'bg-blue-500 text-white border-blue-500'
                    : 'border-white/20 text-blue-200/90 hover:bg-white/10'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p, i) => (
              <article key={i} className="rounded-xl border border-white/10 bg-slate-800/40 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-white">{p.title}</h3>
                  <span className="text-xs rounded-full px-2 py-1 bg-blue-500/20 text-blue-200 border border-blue-400/30">
                    {p.status}
                  </span>
                </div>
                <p className="mt-3 text-sm text-blue-200/90">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs rounded-full px-2 py-1 bg-slate-700/60 text-blue-200 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <section className="mt-12 rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-900/40 to-indigo-900/30 p-8 sm:p-10 text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white">Have a project idea?</h3>
            <p className="mt-3 text-blue-200/90 max-w-2xl mx-auto">
              I'm always interested in new challenges and collaborations. Whether you need help with a Minecraft server, web application, or custom development project, let's talk.
            </p>
            <div className="mt-6">
              <a href="/contact" className="inline-flex items-center rounded-lg bg-blue-500 px-5 py-2.5 text-white hover:bg-blue-400 transition">
                Get in Touch
              </a>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  )
}
