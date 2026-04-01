import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Crown, Brain, Target, Users, Star, Play, X, BookOpen, Shield, Zap, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Home = () => {
  const [showVideoModal, setShowVideoModal] = useState(false)

  const pillars = [
    {
      title: "The Inner Market",
      description: "The market is a mirror. It does not create your fear; it reveals it. We master the reflection.",
      icon: Brain
    },
    {
      title: "Alchemical Transmutation",
      description: "Converting the lead of impulsive behavior into the gold of disciplined execution.",
      icon: Zap
    },
    {
      title: "Sovereign Execution",
      description: "Operating from a state of detachment. You are the system, not the signal.",
      icon: Shield
    }
  ]

  return (
    <div className="pt-16 bg-[#0B0D10] text-[#EAE7DF]">
      {/* Hero Section - Option C: Abstract Market Geometry */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-[#8B6B3E]/20">
        {/* Abstract Geometry Background */}
        <div className="absolute inset-0 z-0 opacity-20">
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
            <circle cx="500" cy="500" r="150" fill="none" stroke="#8B6B3E" strokeWidth="0.5" />
            <path d="M200 200 L800 800" stroke="#8B6B3E" strokeWidth="0.1" />
            <path d="M800 200 L200 800" stroke="#8B6B3E" strokeWidth="0.1" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <span className="text-[#8B6B3E] tracking-[0.5em] uppercase text-xs mb-8 block font-medium">Strategic Doctrine</span>
            <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-tight">
              Master the <br />
              <span className="italic">Inner Market</span>
            </h1>
            <p className="text-lg md:text-xl text-[#EAE7DF]/60 max-w-2xl mx-auto mb-12 font-light tracking-wide">
              We do not teach signals. We forge the operator. <br />
              Transformation requires containment.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/products">
                <button className="sovereign-button">
                  Private Admission
                </button>
              </Link>
              <button 
                onClick={() => setShowVideoModal(true)}
                className="text-[#8B6B3E] hover:text-[#EAE7DF] transition-colors uppercase tracking-widest text-xs font-bold flex items-center gap-2"
              >
                <Play className="h-4 w-4" />
                Watch Doctrine
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-32 bg-[#161A20] border-b border-[#8B6B3E]/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <pillar.icon className="h-8 w-8 text-[#8B6B3E] mx-auto mb-8 stroke-[1px]" />
                <h3 className="text-2xl font-serif mb-4">{pillar.title}</h3>
                <p className="text-[#EAE7DF]/50 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Shift Section */}
      <section className="py-32 bg-[#0B0D10]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                The Market is a Mirror, <br />
                <span className="text-[#8B6B3E]">Not a Casino.</span>
              </h2>
              <p className="text-[#EAE7DF]/60 mb-8 leading-relaxed font-light text-lg">
                Retail trading education focuses on the chart. We focus on the one looking at the chart. 
                Until you master the internal architecture of your own discipline, every strategy is a liability.
              </p>
              <div className="admission-card mb-8">
                <p className="text-[#8B6B3E] uppercase tracking-widest text-xs font-bold mb-2">Requirement</p>
                <p className="text-[#EAE7DF]/80 italic">Willingness to dismantle your current psychological framework.</p>
              </div>
              <Link to="/about">
                <button className="sovereign-button">
                  Our Philosophy
                </button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="macro-visual aspect-square bg-[#161A20] flex items-center justify-center overflow-hidden"
            >
              <img 
                src="/macro_sovereign.png" 
                alt="Sovereign Authority" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
            onClick={() => setShowVideoModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-[#0B0D10] border border-[#8B6B3E]/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute -top-12 right-0 text-[#EAE7DF] hover:text-[#8B6B3E] transition-colors uppercase tracking-widest text-xs font-bold flex items-center gap-2"
              >
                Close <X className="h-4 w-4" />
              </button>
              <video
                src="/intro_video.mp4"
                controls
                autoPlay
                className="w-full h-full object-cover grayscale"
              >
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Home
