import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-slate-900/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-white font-semibold">d6k9.site</h4>
            <p className="mt-2 text-blue-200/80">Personal portfolio showcasing development projects, blog posts, and creative work.</p>
          </div>
          <div>
            <h5 className="text-white font-medium">Quick Links</h5>
            <ul className="mt-3 space-y-2 text-blue-200/80">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-medium">Legal & Social</h5>
            <ul className="mt-3 space-y-2 text-blue-200/80">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="https://github.com/stfulua" target="_blank" className="hover:text-white" rel="noreferrer">GitHub</a></li>
              <li><a href="https://www.youtube.com/@stfulua" target="_blank" className="hover:text-white" rel="noreferrer">YouTube</a></li>
            </ul>
          </div>
          <div className="text-blue-200/80">
            <p>© 2025 d6k9.site. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
