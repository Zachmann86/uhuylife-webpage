import { Mail, Linkedin, Twitter, Instagram } from 'lucide-react'
import { useState } from 'react'

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <footer className="bg-uhuy-dark text-white">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-uhuy-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">U</span>
              </div>
              <span className="text-xl font-bold">Uhuy Life</span>
            </div>
            <p className="text-gray-400">
              Insurance that keeps up with your life.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-uhuy-green transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-uhuy-green transition-colors">Products</a></li>
              <li><a href="#claims" className="hover:text-uhuy-green transition-colors">Claims</a></li>
              <li><a href="#resources" className="hover:text-uhuy-green transition-colors">Resources</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#privacy" className="hover:text-uhuy-green transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-uhuy-green transition-colors">Terms of Service</a></li>
              <li><a href="#careers" className="hover:text-uhuy-green transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-uhuy-green transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Protected</h4>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-uhuy-green"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-uhuy-green hover:bg-emerald-400 transition-colors font-semibold rounded-r-lg"
                >
                  <Mail size={20} />
                </button>
              </div>
              {subscribed && (
                <p className="text-sm text-uhuy-green">Thanks for subscribing!</p>
              )}
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 mb-8"></div>

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-400 text-sm">
            © 2024 Uhuy Life Insurance. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            <a href="#linkedin" className="text-gray-400 hover:text-uhuy-green transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#twitter" className="text-gray-400 hover:text-uhuy-green transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#instagram" className="text-gray-400 hover:text-uhuy-green transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
