import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-uhuy-white border-b border-uhuy-border">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-uhuy-blue rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">U</span>
          </div>
          <span className="text-xl font-bold text-uhuy-dark">Uhuy Life</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-uhuy-dark hover:text-uhuy-blue transition-colors">Products</a>
          <a href="#about" className="text-uhuy-dark hover:text-uhuy-blue transition-colors">About Us</a>
          <a href="#claims" className="text-uhuy-dark hover:text-uhuy-blue transition-colors">Claims</a>
          <a href="#resources" className="text-uhuy-dark hover:text-uhuy-blue transition-colors">Resources</a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="btn-primary">Get a Quote</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-uhuy-white border-t border-uhuy-border">
          <div className="px-6 py-4 space-y-4">
            <a href="#products" className="block text-uhuy-dark hover:text-uhuy-blue transition-colors">Products</a>
            <a href="#about" className="block text-uhuy-dark hover:text-uhuy-blue transition-colors">About Us</a>
            <a href="#claims" className="block text-uhuy-dark hover:text-uhuy-blue transition-colors">Claims</a>
            <a href="#resources" className="block text-uhuy-dark hover:text-uhuy-blue transition-colors">Resources</a>
            <button className="btn-primary w-full">Get a Quote</button>
          </div>
        </div>
      )}
    </header>
  )
}
