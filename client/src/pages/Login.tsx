import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'wouter'
import { Lock, ArrowRight } from 'lucide-react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [location, setLocation] = useLocation()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock login logic
    if (email && password) {
      // In a real app, we would call an API here
      // For now, just redirect to dashboard
      setLocation('/dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-[#0B0D10] text-[#EAE7DF] flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B6B3E" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#8B6B3E" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path d="M0 500 L1000 500" stroke="url(#gold-grad)" strokeWidth="0.5" />
          <path d="M500 0 L500 1000" stroke="url(#gold-grad)" strokeWidth="0.5" />
          <circle cx="500" cy="500" r="300" fill="none" stroke="#8B6B3E" strokeWidth="0.2" strokeDasharray="10 10" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-md p-8 bg-[#161A20] border border-[#8B6B3E]/20"
      >
        <div className="text-center mb-12">
          <div className="w-12 h-12 border border-[#8B6B3E] flex items-center justify-center mx-auto mb-6">
            <span className="text-[#8B6B3E] font-serif text-2xl">S</span>
          </div>
          <h2 className="text-3xl font-serif mb-4">Member Access</h2>
          <p className="text-[#EAE7DF]/40 font-light text-sm">
            Enter the inner sanctum.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-[#8B6B3E] font-bold">Identity</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#0B0D10] border border-[#8B6B3E]/20 py-3 px-4 text-[#EAE7DF] focus:outline-none focus:border-[#8B6B3E] transition-colors font-light text-sm"
              placeholder="operator@sovereigntrader.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-[#8B6B3E] font-bold">Key</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#0B0D10] border border-[#8B6B3E]/20 py-3 px-4 text-[#EAE7DF] focus:outline-none focus:border-[#8B6B3E] transition-colors font-light text-sm"
              placeholder="••••••••"
            />
          </div>
          
          <button type="submit" className="sovereign-button w-full flex items-center justify-center gap-3 mt-8">
            <Lock className="h-3 w-3" /> Authenticate
          </button>
        </form>

        <div className="mt-8 text-center pt-8 border-t border-[#8B6B3E]/10">
          <Link href="/contact">
            <a className="text-[10px] uppercase tracking-widest text-[#EAE7DF]/40 hover:text-[#8B6B3E] transition-colors">
              Request Admission
            </a>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default Login
