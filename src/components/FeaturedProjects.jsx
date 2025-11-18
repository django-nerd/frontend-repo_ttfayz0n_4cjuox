import { Link } from 'react-router-dom'

const projects = [
  {
    title: 'MG-Creations',
    status: 'Active',
    description:
      'Custom Minecraft server development service offering professional server setups, custom plugins, and Discord integration for gaming communities.',
    category: 'Minecraft Discord Server Development',
  },
  {
    title: 'Xemas PVP',
    status: 'Active',
    description:
      'Competitive Minecraft PvP modpack for version 1.21.1 featuring optimized combat mechanics, custom textures, and enhanced performance.',
    category: 'Minecraft PvP Modpack',
  },
  ...Array.from({ length: 4 }).map(() => ({
    title: 'Coming soon!',
    status: 'Coming Soon',
    description: 'Something big is coming...',
    category: 'Coming Soon',
  })),
]

export default function FeaturedProjects() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Featured Projects</h2>
          <p className="mt-2 text-blue-200/90">Check out my latest work and ongoing projects</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.flat().slice(0, 6).map((p, i) => (
            <div
              key={i}
              className="group rounded-xl border border-white/10 bg-slate-800/40 p-5 hover:bg-slate-800/60 transition shadow"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-white">{p.title}</h3>
                <span className="text-xs rounded-full px-2 py-1 bg-blue-500/20 text-blue-200 border border-blue-400/30">
                  {p.status}
                </span>
              </div>
              <p className="mt-3 text-sm text-blue-200/90">{p.description}</p>
              <p className="mt-3 text-xs text-blue-300/70">{p.category}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link to="/projects" className="text-blue-300 hover:text-white">
            View all projects →
          </Link>
        </div>
      </div>
    </section>
  )
}
