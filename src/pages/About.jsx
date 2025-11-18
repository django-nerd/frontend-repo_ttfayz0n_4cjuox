import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-blue-100">
      <Navbar />

      <main className="pt-24">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-semibold text-white">About d6k9</h1>
            <p className="mt-2 text-blue-200/90">Developer & Creator</p>
          </div>

          <div className="mt-6 space-y-6 text-blue-200/90">
            <p>
              I'm a passionate developer with a focus on creating meaningful digital experiences. My journey in technology spans Minecraft server development, web applications, and open-source contributions. I believe in building tools and platforms that empower communities and make technology more accessible.
            </p>
            <p>
              Currently based in the digital realm, I spend my time crafting custom Minecraft servers, developing web applications, and sharing knowledge through blog posts and tutorials. My work is driven by curiosity, community feedback, and a commitment to quality.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-slate-800/40 p-5">
              <h3 className="text-lg font-medium text-white">Minecraft Server Development</h3>
              <p className="mt-2 text-sm">Specializing in custom Minecraft server configurations, plugin development, and Discord integrations. I've built and maintained servers for various gaming communities, focusing on performance optimization and player experience. My flagship project, MG-Creations, offers professional server development services to clients worldwide.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-800/40 p-5">
              <h3 className="text-lg font-medium text-white">Web Development</h3>
              <p className="mt-2 text-sm">Proficient in modern web technologies including Astro, React, TypeScript, and Tailwind CSS. I create responsive, performant websites and web applications with a focus on user experience and clean code. My projects range from personal portfolios to full-stack applications with database integration.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-800/40 p-5">
              <h3 className="text-lg font-medium text-white">Open Source & Community</h3>
              <p className="mt-2 text-sm">Active contributor to open-source projects and maintainer of several public repositories on GitHub. I believe in giving back to the community through code contributions, documentation, and knowledge sharing. I maintain three active Discord communities focused on development, Minecraft, and general tech.</p>
            </div>
          </div>

          <div className="mt-10 space-y-3 text-blue-200/90">
            <h3 className="text-xl font-semibold text-white">Notable Projects</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>MG-Creations:</strong> Professional Minecraft server development service offering custom setups, plugins, and ongoing maintenance for gaming communities.</li>
              <li><strong>Xemas PVP:</strong> Competitive Minecraft modpack optimized for PvP gameplay with custom textures and performance enhancements.</li>
              <li><strong>Portfolio Hosting:</strong> Free hosting platform enabling developers to showcase their work with reliable infrastructure and easy deployment.</li>
              <li><strong>Discord Communities:</strong> Managing three active servers with combined members focused on development collaboration, Minecraft content, and tech discussions.</li>
            </ul>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-slate-800/40 p-5">
              <h3 className="text-lg font-medium text-white">Community & Connections</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>YouTube: <a href="https://www.youtube.com/@stfulua" className="text-blue-300 hover:text-white" target="_blank" rel="noreferrer">@stfulua</a></li>
                <li>GitHub: <a href="https://github.com/stfulua" className="text-blue-300 hover:text-white" target="_blank" rel="noreferrer">@stfulua</a></li>
                <li>Discord: <a href="https://discord.gg/ar5DNzmNgH" className="text-blue-300 hover:text-white" target="_blank" rel="noreferrer">d6k9.me & d6k9.site server</a></li>
                <li>Ko-fi: <a href="https://ko-fi.com/d6k9" className="text-blue-300 hover:text-white" target="_blank" rel="noreferrer">Support my work</a></li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-800/40 p-5">
              <h3 className="text-lg font-medium text-white">Development Philosophy</h3>
              <ul className="mt-2 space-y-1 text-sm list-disc pl-6">
                <li><strong>Quality over Quantity:</strong> Every project deserves attention to detail and proper implementation.</li>
                <li><strong>Community First:</strong> Building tools that serve and empower communities, not just individuals.</li>
                <li><strong>Open Knowledge:</strong> Sharing what I learn through documentation, tutorials, and open-source code.</li>
                <li><strong>Continuous Learning:</strong> Technology evolves rapidly; staying curious and adaptable is essential.</li>
                <li><strong>Practical Solutions:</strong> Focus on solving real problems with maintainable, scalable code.</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href="/contact" className="inline-flex items-center rounded-lg bg-blue-500 px-5 py-2.5 text-white hover:bg-blue-400 transition">Get in Touch</a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
