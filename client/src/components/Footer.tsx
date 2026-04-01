import { Link } from 'wouter'
import { Mail, Shield, Instagram, Twitter, Linkedin, ExternalLink } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#0B0D10] border-t border-[#8B6B3E]/10 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-8">
              <div className="w-8 h-8 border border-[#8B6B3E] flex items-center justify-center">
                <span className="text-[#8B6B3E] font-serif text-xl">S</span>
              </div>
              <span className="text-[#EAE7DF] font-serif text-xl tracking-widest uppercase">
                Sovereign
              </span>
            </Link>
            <p className="text-[#EAE7DF]/40 font-light leading-relaxed text-sm mb-8">
              A private order for strategic psychological mastery. We forge the operator, 
              transmuting inner chaos into sovereign execution.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-[#EAE7DF]/40 hover:text-[#8B6B3E] transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="text-[#EAE7DF]/40 hover:text-[#8B6B3E] transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="text-[#EAE7DF]/40 hover:text-[#8B6B3E] transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#8B6B3E] uppercase tracking-[0.3em] text-[10px] font-bold mb-8">Doctrine</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-[#EAE7DF]/60 hover:text-[#8B6B3E] transition-colors text-sm font-light">
                  Philosophy
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-[#EAE7DF]/60 hover:text-[#8B6B3E] transition-colors text-sm font-light">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/audios" className="text-[#EAE7DF]/60 hover:text-[#8B6B3E] transition-colors text-sm font-light">
                  Audios
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[#EAE7DF]/60 hover:text-[#8B6B3E] transition-colors text-sm font-light">
                  Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Partner Intelligence */}
          <div>
            <h4 className="text-[#8B6B3E] uppercase tracking-[0.3em] text-[10px] font-bold mb-8">Partner Intelligence</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://finverse.world" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#EAE7DF]/60 hover:text-[#8B6B3E] transition-colors text-sm font-light group"
                >
                  FinVerse <ExternalLink className="h-3 w-3 opacity-50 group-hover:opacity-100" />
                </a>
                <p className="text-[#EAE7DF]/30 text-xs mt-1 font-light">Technical Framework</p>
              </li>
              <li className="mt-6">
                <div className="flex items-center space-x-3 text-[#EAE7DF]/60 text-sm font-light">
                  <Mail className="h-4 w-4 text-[#8B6B3E]/40" />
                  <span>council@sovereigntrader.com</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[#8B6B3E] uppercase tracking-[0.3em] text-[10px] font-bold mb-8">The Journal</h4>
            <p className="text-[#EAE7DF]/40 text-xs font-light mb-6 leading-relaxed">
              Receive weekly strategic insights on psychological mastery.
            </p>
            <div className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent border-b border-[#8B6B3E]/20 py-2 text-sm text-[#EAE7DF] placeholder-[#EAE7DF]/20 focus:outline-none focus:border-[#8B6B3E] transition-colors"
              />
              <button className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#8B6B3E] hover:text-[#EAE7DF] transition-colors text-left">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-[#8B6B3E]/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#EAE7DF]/20 text-[10px] uppercase tracking-widest">
            &copy; {new Date().getFullYear()} The Sovereign Trader Institute. All Rights Reserved.
          </p>
          <div className="flex space-x-8">
            <Link href="/privacy" className="text-[#EAE7DF]/20 hover:text-[#8B6B3E] transition-colors text-[10px] uppercase tracking-widest">
              Privacy
            </Link>
            <Link href="/terms" className="text-[#EAE7DF]/20 hover:text-[#8B6B3E] transition-colors text-[10px] uppercase tracking-widest">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
