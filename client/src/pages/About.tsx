import { motion } from 'framer-motion'
import { Link } from 'wouter'
import { Shield, Zap, Brain, Quote, CheckCircle } from 'lucide-react'

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

  const testimonials = [
    {
      quote: "I spent 3 years jumping from strategy to strategy. Sovereign Trader made me realize the strategy wasn't the problem. The operator was broken. Now, I execute without hesitation.",
      author: "M.K.",
      role: "Forex Trader",
      result: "Consistent Profitability"
    },
    {
      quote: "The subconscious reprogramming audios are unlike anything else. They rewired my response to losses. I no longer feel the need to 'revenge trade' after a stop out.",
      author: "J.R.",
      role: "Futures Scalper",
      result: "Zero Tilt"
    },
    {
      quote: "This isn't a course; it's an identity shift. I stopped thinking like a gambler and started operating like a casino. The detachment is real.",
      author: "S.L.",
      role: "Crypto Swing Trader",
      result: "Total Clarity"
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
                src="https://files.manuscdn.com/user_upload_by_module/session_file/99087322/ZjifnXSYRTppbAMW.png" 
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
                <Link href="/products">
                  <button className="sovereign-button">
                    View Programs
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Evidence of Results - Testimonials */}
      <section className="py-32 bg-[#161A20] border-t border-[#8B6B3E]/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <span className="text-[#8B6B3E] tracking-[0.3em] uppercase text-xs font-bold">Evidence</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6">The Operator's Outcome</h2>
            <p className="text-[#EAE7DF]/60 max-w-2xl mx-auto">
              Real transformation is measurable. It shows up in the P&L because it starts in the mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative p-8 border border-[#8B6B3E]/10 bg-[#0B0D10]"
              >
                <Quote className="h-8 w-8 text-[#8B6B3E]/20 absolute top-8 left-8" />
                <div className="relative z-10 pt-8">
                  <p className="text-[#EAE7DF]/80 italic font-light mb-8 leading-relaxed">
                    "{item.quote}"
                  </p>
                  <div className="flex items-center justify-between border-t border-[#8B6B3E]/10 pt-6">
                    <div>
                      <p className="text-[#EAE7DF] font-serif">{item.author}</p>
                      <p className="text-[#8B6B3E] text-xs uppercase tracking-wider">{item.role}</p>
                    </div>
                    <div className="flex items-center gap-2 text-[#8B6B3E]/60 text-xs uppercase tracking-wider">
                      <CheckCircle className="h-3 w-3" />
                      {item.result}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
