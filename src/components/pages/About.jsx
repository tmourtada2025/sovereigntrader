import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Crown, Eye, Flame, ArrowRight, Shield, Zap, Brain } from 'lucide-react'
import { Button } from '@/components/ui/button'

const About = () => {
  const pillars = [
    {
      icon: Brain,
      title: "The Inner Market",
      description: "The market does not create your fear, greed, or impatience; it merely reveals what is already within you. We teach you to read yourself with the same skill you use to read a chart."
    },
    {
      icon: Zap,
      title: "Alchemical Transmutation",
      description: "Converting the lead of impulsive behavior into the gold of disciplined execution. We don't suppress emotion; we transmute it into strategic energy."
    },
    {
      icon: Shield,
      title: "Sovereign Execution",
      description: "Operating from a state of detachment. You are the system, not the signal. True sovereignty is the ability to act according to doctrine, regardless of internal or external noise."
    }
  ]

  return (
    <div className="pt-16 bg-[#0B0D10] text-[#EAE7DF]">
      {/* Philosophy Header */}
      <section className="py-32 border-b border-[#8B6B3E]/10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <span className="text-[#8B6B3E] tracking-[0.5em] uppercase text-xs mb-8 block font-medium">Our Philosophy</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">
              A Doctrine of <br />
              <span className="italic">Psychological Mastery</span>
            </h1>
            <p className="text-xl text-[#EAE7DF]/60 max-w-3xl mx-auto font-light leading-relaxed">
              The Sovereign Trader Institute was founded on a single realization: 
              The ultimate edge in the market is not a mathematical formula, but the 
              architecture of the operator's mind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Three Pillars */}
      <section className="py-32 bg-[#161A20]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="admission-card"
              >
                <pillar.icon className="h-6 w-6 text-[#8B6B3E] mb-8 stroke-[1px]" />
                <h3 className="text-2xl font-serif mb-6">{pillar.title}</h3>
                <p className="text-[#EAE7DF]/50 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Doctrine Section */}
      <section className="py-32 bg-[#0B0D10]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="macro-visual aspect-[4/5] bg-[#161A20] overflow-hidden"
            >
              <img 
                src="/macro_alchemy.png" 
                alt="Alchemical Process" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                Beyond Retail <br />
                <span className="text-[#8B6B3E]">Clichés.</span>
              </h2>
              <div className="space-y-8 text-[#EAE7DF]/60 font-light leading-relaxed text-lg">
                <p>
                  We do not use blue gradients, stock city skylines, or images of men in suits looking at monitors. 
                  Those visuals attract the retail gambler—the one seeking a quick signal or a shortcut.
                </p>
                <p>
                  Our aesthetic is architectural, brutalist, and disciplined. It reflects the gravity of the 
                  psychological work we perform. We operate at the structural level of the mind, not the signal 
                  level of the market.
                </p>
                <p>
                  This is a private order for those who understand that the greatest obstacle to their success 
                  is the one they see in the mirror every morning.
                </p>
              </div>
              <div className="mt-12">
                <Link to="/products">
                  <button className="sovereign-button">
                    View Programs
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
