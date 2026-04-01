import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'wouter'
import { Play, X, Shield, Zap, Brain, CheckCircle, ArrowRight, BarChart2 } from 'lucide-react'

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

  const methodologySteps = [
    {
      step: "01",
      title: "Subconscious Reprogramming",
      description: "We use audio hypnosis to bypass the critical faculty and rewrite the deep-seated beliefs that sabotage your trading."
    },
    {
      step: "02",
      title: "Cognitive Reframing",
      description: "A 4-step audit process to dismantle limiting frameworks and replace them with probabilistic thinking."
    },
    {
      step: "03",
      title: "Performance Journaling",
      description: "Data-driven self-analysis. We track your emotional state alongside your P&L to identify behavioral leaks."
    },
    {
      step: "04",
      title: "Live Mentorship",
      description: "Direct feedback loops. We review your execution, not just your charts, to correct course in real-time."
    }
  ]

  const outcomes = [
    {
      title: "From FOMO to Execution",
      description: "Eliminate the urge to chase. Enter trades only when your system dictates.",
      stat: "100% Process"
    },
    {
      title: "The End of Revenge Trading",
      description: "Losses become data, not emotional triggers. You accept risk before you click.",
      stat: "Zero Tilt"
    },
    {
      title: "Sovereign Detachment",
      description: "Your identity is no longer tied to the outcome of the next trade.",
      stat: "Total Clarity"
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
              <Link href="/products">
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

      {/* Methodology Section - The "How" */}
      <section className="py-32 bg-[#0B0D10] border-b border-[#8B6B3E]/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <span className="text-[#8B6B3E] tracking-[0.3em] uppercase text-xs font-bold">The Process</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6">Operational Architecture</h2>
            <p className="text-[#EAE7DF]/60 max-w-2xl mx-auto">
              We don't just talk about psychology. We install a new operating system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {methodologySteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex gap-6 p-8 border border-[#8B6B3E]/10 hover:border-[#8B6B3E]/30 transition-colors bg-[#161A20]/50"
              >
                <span className="text-4xl font-serif text-[#8B6B3E]/20 font-bold">{item.step}</span>
                <div>
                  <h3 className="text-xl font-serif mb-3 text-[#EAE7DF]">{item.title}</h3>
                  <p className="text-[#EAE7DF]/60 font-light leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Evidence of Results - The "Outcome" */}
      <section className="py-32 bg-[#161A20]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-[#8B6B3E] tracking-[0.3em] uppercase text-xs font-bold">The Outcome</span>
              <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-8 leading-tight">
                The Operator's <br />
                <span className="italic text-[#8B6B3E]">Shift</span>
              </h2>
              <p className="text-[#EAE7DF]/60 mb-12 leading-relaxed font-light text-lg">
                When you dismantle the psychological framework that causes self-sabotage, the results are not just financial—they are existential.
              </p>
              
              <div className="space-y-8">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-[#8B6B3E] shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-serif text-[#EAE7DF] mb-1">{outcome.title}</h4>
                      <p className="text-[#EAE7DF]/50 text-sm font-light">{outcome.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#8B6B3E]/5 blur-3xl rounded-full"></div>
              <div className="relative z-10 border border-[#8B6B3E]/20 bg-[#0B0D10] p-12 text-center">
                <h3 className="text-2xl font-serif mb-2">The Standard</h3>
                <div className="w-12 h-px bg-[#8B6B3E] mx-auto my-6"></div>
                <p className="text-3xl font-light italic text-[#EAE7DF]/80 mb-8">
                  "I no longer feel the market. I simply execute the plan."
                </p>
                <p className="text-[#8B6B3E] text-sm tracking-widest uppercase">Sovereign Operator</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FinVerse Bridge - The "Partner" */}
      <section className="py-24 bg-[#0B0D10] border-t border-[#8B6B3E]/20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <BarChart2 className="h-12 w-12 text-[#8B6B3E] mx-auto mb-6 stroke-[1px]" />
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Technical Intelligence</h2>
          <p className="text-[#EAE7DF]/60 max-w-2xl mx-auto mb-10 font-light text-lg">
            Sovereign Trader forges the operator. <span className="text-[#EAE7DF]">FinVerse</span> provides the map.
            <br />
            We recommend FinVerse for traders seeking a robust, data-driven technical framework.
          </p>
          <a 
            href="https://finverse.world" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[#8B6B3E] hover:text-[#EAE7DF] transition-colors uppercase tracking-widest text-xs font-bold border border-[#8B6B3E] px-8 py-4 hover:bg-[#8B6B3E]/10"
          >
            Explore FinVerse <ArrowRight className="h-4 w-4" />
          </a>
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
