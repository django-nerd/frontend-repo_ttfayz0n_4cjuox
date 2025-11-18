import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const posts = [
  {
    title: 'Building Scalable Minecraft Servers: A Complete Guide',
    date: 'November 10, 2025',
    read: '8 min read',
    excerpt:
      'Learn the essential techniques for creating high-performance Minecraft servers that can handle hundreds of players while maintaining stability and responsiveness.',
  },
  {
    title: 'Modern Web Development: From Static Sites to Full-Stack Applications',
    date: 'November 8, 2025',
    read: '10 min read',
    excerpt:
      'Explore the evolution of web development, comparing static site generators like Astro with traditional full-stack frameworks and understanding when to use each approach.',
  },
  {
    title: 'Optimizing Deployment Workflows with Vercel and GitHub Actions',
    date: 'November 5, 2025',
    read: '9 min read',
    excerpt:
      'A comprehensive guide to automating your deployment pipeline using Vercel, GitHub Actions, and continuous integration best practices for modern web projects.',
  },
  {
    title: 'Security Best Practices for Web Applications in 2025',
    date: 'November 2, 2025',
    read: '11 min read',
    excerpt:
      'Protect your applications and users with these essential security practices, from authentication strategies to preventing common vulnerabilities and attacks.',
  },
  {
    title: 'My Development Journey: From Beginner to Building Production Apps',
    date: 'October 28, 2025',
    read: '7 min read',
    excerpt:
      'A personal reflection on my journey as a developer, the challenges I faced, lessons learned, and advice for aspiring developers starting their own path.',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-blue-100">
      <Navbar />

      <main className="pt-24">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-semibold text-white">Development Blog</h1>
            <p className="mt-2 text-blue-200/90">Insights on web development, Minecraft server optimization, deployment strategies, and my personal journey in tech.</p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {posts.map((p) => (
              <article key={p.title} className="rounded-xl border border-white/10 bg-slate-800/40 p-5">
                <h3 className="text-lg font-medium text-white">{p.title}</h3>
                <div className="mt-2 text-xs text-blue-300/80">{p.date} • {p.read}</div>
                <p className="mt-3 text-sm text-blue-200/90">{p.excerpt}</p>
                <a className="mt-3 inline-flex text-blue-300 hover:text-white" href="#">Read more →</a>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-white/10 bg-slate-800/40 p-5">
            <div className="text-sm text-blue-300/80">Topics: Web Development, Minecraft Servers, Deployment, Security, Performance, DevOps, Personal Growth</div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
