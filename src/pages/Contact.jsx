import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-blue-100">
      <Navbar />

      <main className="pt-24">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-semibold text-white">Get in Touch</h1>
            <p className="mt-2 text-blue-200/90">Have a project in mind? Want to collaborate? Or just want to say hi? I'd love to hear from you. Feel free to reach out through any of the channels below.</p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-slate-800/40 p-5">
              <h3 className="text-lg font-medium text-white">Discord</h3>
              <p className="mt-2 text-sm text-blue-200/90">Join my Discord server for real-time chat and community discussions</p>
              <a href="https://discord.gg/ar5DNzmNgH" target="_blank" rel="noreferrer" className="mt-3 inline-flex text-blue-300 hover:text-white">Join Discord →</a>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-800/40 p-5">
              <h3 className="text-lg font-medium text-white">GitHub</h3>
              <p className="mt-2 text-sm text-blue-200/90">Check out my code, contribute to projects, or open an issue</p>
              <a href="https://github.com/stfulua" target="_blank" rel="noreferrer" className="mt-3 inline-flex text-blue-300 hover:text-white">Visit GitHub →</a>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-800/40 p-5">
              <h3 className="text-lg font-medium text-white">YouTube</h3>
              <p className="mt-2 text-sm text-blue-200/90">Watch tutorials, project demos, and development content</p>
              <a href="https://www.youtube.com/@stfulua" target="_blank" rel="noreferrer" className="mt-3 inline-flex text-blue-300 hover:text-white">Go to YouTube →</a>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-800/40 p-5">
              <h3 className="text-lg font-medium text-white">Ko-fi</h3>
              <p className="mt-2 text-sm text-blue-200/90">Support my work and help me create more content</p>
              <a href="https://ko-fi.com/d6k9" target="_blank" rel="noreferrer" className="mt-3 inline-flex text-blue-300 hover:text-white">Support on Ko-fi →</a>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-white">Discord Communities</h2>
            <div className="mt-4 grid gap-6 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-slate-800/40 p-5">
                <h3 className="text-lg font-medium text-white">d6k9 (Main Server)</h3>
                <p className="mt-2 text-sm text-blue-200/90">Main community for d6k9.site & d6k9.me and more to come</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-800/40 p-5">
                <h3 className="text-lg font-medium text-white">MG Creations</h3>
                <p className="mt-2 text-sm text-blue-200/90">Dedicated to Minecraft server development and modding</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-800/40 p-5">
                <h3 className="text-lg font-medium text-white">Personal Server</h3>
                <p className="mt-2 text-sm text-blue-200/90">My youtube channel community</p>
              </div>
            </div>

            <div className="mt-8 text-sm text-blue-300/80">
              <p><strong>Response Time:</strong> I typically respond within 24 hours. For urgent matters, Discord is usually the fastest way to reach me.</p>
              <p className="mt-1"><strong>Business Inquiries:</strong> For business inquiries, please provide as much detail as possible about your project.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
