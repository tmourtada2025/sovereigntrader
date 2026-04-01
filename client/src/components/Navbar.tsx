import { useState, useEffect } from 'react'
import { Link, useLocation } from 'wouter'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, User, LogOut } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [location] = useLocation()
  
  // Mock user state for now
  const user = null;
  const logout = () => {};

  const navItems = [
    { name: 'Doctrine', path: '/' },
    { name: 'Philosophy', path: '/about' },
    { name: 'Programs', path: '/products' },
    { name: 'Audios', path: '/audios' },
    { name: 'Journal', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#0B0D10]/90 backdrop-blur-md border-b border-[#8B6B3E]/10 py-4' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 border border-[#8B6B3E] flex items-center justify-center group-hover:bg-[#8B6B3E] transition-all duration-500">
              <span className="text-[#8B6B3E] group-hover:text-[#0B0D10] font-serif text-xl">S</span>
            </div>
            <span className="text-[#EAE7DF] font-serif text-xl tracking-widest uppercase hidden sm:block">
              Sovereign <span className="text-[#EAE7DF] font-light opacity-90">Trader</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.path}
                className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-colors duration-300 ${
                  location === item.path ? 'text-[#8B6B3E]' : 'text-[#EAE7DF]/60 hover:text-[#8B6B3E]'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {user ? (
              <div className="flex items-center space-x-6 pl-6 border-l border-[#8B6B3E]/20">
                <Link href="/dashboard" className="text-[#8B6B3E] hover:text-[#EAE7DF] transition-colors">
                  <User className="h-4 w-4" />
                </Link>
                <button onClick={logout} className="text-[#EAE7DF]/40 hover:text-[#5A1F1F] transition-colors">
                  <LogOut className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <Link href="/login" className="pl-6 border-l border-[#8B6B3E]/20">
                <button className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#8B6B3E] hover:text-[#EAE7DF] transition-colors">
                  Admission
                </button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#EAE7DF] hover:text-[#8B6B3E] transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0B0D10] border-b border-[#8B6B3E]/10 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-12 space-y-6">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-xs uppercase tracking-[0.4em] font-bold text-[#EAE7DF]/60 hover:text-[#8B6B3E] py-2"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-[#8B6B3E]/10">
                {user ? (
                  <div className="flex items-center space-x-8">
                    <Link 
                      href="/dashboard" 
                      onClick={() => setIsOpen(false)} 
                      className="text-[#8B6B3E] uppercase tracking-widest text-[10px] font-bold"
                    >
                      Dashboard
                    </Link>
                    <button onClick={() => { logout(); setIsOpen(false); }} className="text-[#5A1F1F] uppercase tracking-widest text-[10px] font-bold">
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link 
                    href="/login" 
                    onClick={() => setIsOpen(false)} 
                    className="text-[#8B6B3E] uppercase tracking-widest text-[10px] font-bold"
                  >
                    Admission
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
