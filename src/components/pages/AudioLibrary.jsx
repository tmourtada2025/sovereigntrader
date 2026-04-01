import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Headphones, Play, Lock, Crown, ArrowRight, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '../../contexts/AuthContext'

const AudioLibrary = () => {
  const { user } = useAuth()

  const audioCategories = [
    {
      title: "The Sovereign Mindset",
      description: "Core foundational audio for daily practice",
      duration: "10:00",
      type: "general",
      locked: !user
    },
    {
      title: "Aries Archetype Balance",
      description: "Transform impatience into focused action",
      duration: "10:00",
      type: "archetype",
      locked: !user
    },
    {
      title: "Taurus Archetype Balance",
      description: "Overcome fear of loss and embrace calculated risk",
      duration: "10:00",
      type: "archetype",
      locked: !user
    },
    {
      title: "Gemini Archetype Balance",
      description: "Channel scattered energy into strategic focus",
      duration: "10:00",
      type: "archetype",
      locked: !user
    },
    {
      title: "Cancer Archetype Balance",
      description: "Transform emotional reactivity into intuitive wisdom",
      duration: "10:00",
      type: "archetype",
      locked: !user
    },
    {
      title: "Leo Archetype Balance",
      description: "Balance ego-driven trades with humble discipline",
      duration: "10:00",
      type: "archetype",
      locked: !user
    },
    {
      title: "Virgo Archetype Balance",
      description: "Perfect analysis paralysis into decisive action",
      duration: "10:00",
      type: "archetype",
      locked: !user
    }
  ]

  const steps = [
    {
      number: "01",
      title: "Identify Your Archetype",
      description: "Through our assessment or program insights, understand your dominant archetypes and their shadow traits."
    },
    {
      number: "02",
      title: "Select Your Audio",
      description: "Choose the general 'Sovereign Mindset' audio or a specific archetype-balancing recording for the day."
    },
    {
      number: "03",
      title: "Listen & Transform",
      description: "Dedicate 10 minutes, ideally in the morning, to listen and allow your subconscious to absorb the empowering suggestions."
    }
  ]

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Headphones className="h-16 w-16 text-amber-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              The Alchemical Audios
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              Reprogram Your Subconscious. Master Your Inner Market.
            </p>
            <div className="mt-6 text-amber-400 font-semibold">
              Unlock Daily 10-Minute Hypnosis Recordings Designed to Transmute Psychological Traps into Sovereign Strengths
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Beyond Conscious Effort: The Power of Subconscious Reprogramming
            </h2>
            <p className="text-lg text-slate-300 max-w-4xl mx-auto">
              True transformation often begins beneath the surface. Our Alchemical Audios leverage the profound 
              power of self-hypnosis to bypass conscious resistance and instill new, empowering beliefs and 
              behaviors directly into your subconscious mind. Designed for daily, effortless integration, 
              these recordings are your secret weapon for cultivating unwavering discipline, objective 
              decision-making, and emotional resilience in the markets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Effortless Integration", description: "Just 10 minutes a day to rewire your trading psychology" },
              { title: "Deep-Seated Change", description: "Address the root causes of self-sabotage at a subconscious level" },
              { title: "Archetype-Specific Solutions", description: "Targeted audios to balance and empower each of your inner archetypes" },
              { title: "Consistent Performance", description: "Cultivate a mindset that supports flawless execution of your trading plan" }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 p-6 rounded-lg border border-amber-400/20 text-center"
              >
                <h3 className="text-lg font-semibold text-amber-400 mb-3">{benefit.title}</h3>
                <p className="text-slate-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Your Daily Ritual of Inner Alchemy
            </h2>
            <p className="text-lg text-slate-300">
              A simple, visually guided 3-step process to transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-amber-400 text-slate-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-slate-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audio Library Access */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Access Your Library of Inner Power
            </h2>
            {!user ? (
              <div className="bg-slate-900/50 p-8 rounded-lg border border-amber-400/20 max-w-2xl mx-auto">
                <Lock className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <p className="text-lg text-slate-300 mb-6">
                  The Alchemical Audios are an exclusive resource for members of The Sovereign Trader Institute. 
                  To access the full library, please purchase the standalone package or enroll in The Sovereign's Circle 
                  or The Alchemist's Council.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/products">
                    <Button className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold">
                      Purchase Alchemical Audios
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900">
                      Log In to Your Library
                    </Button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="bg-slate-900/50 p-6 rounded-lg border border-amber-400/20 max-w-2xl mx-auto mb-8">
                <Crown className="h-8 w-8 text-amber-400 mx-auto mb-3" />
                <p className="text-amber-400 font-semibold">
                  Welcome, Sovereign. Your transformation library awaits.
                </p>
              </div>
            )}
          </motion.div>

          {/* Audio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audioCategories.map((audio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-slate-900/50 p-6 rounded-lg border transition-all duration-300 ${
                  audio.locked 
                    ? 'border-slate-600 opacity-60' 
                    : 'border-amber-400/20 hover:border-amber-400/40'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-full ${audio.locked ? 'bg-slate-700' : 'bg-amber-400/20'}`}>
                    {audio.locked ? (
                      <Lock className="h-6 w-6 text-slate-400" />
                    ) : (
                      <Headphones className="h-6 w-6 text-amber-400" />
                    )}
                  </div>
                  <div className="flex items-center space-x-2 text-slate-400 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>{audio.duration}</span>
                  </div>
                </div>

                <h3 className={`text-lg font-semibold mb-2 ${audio.locked ? 'text-slate-400' : 'text-white'}`}>
                  {audio.title}
                </h3>
                <p className={`text-sm mb-4 ${audio.locked ? 'text-slate-500' : 'text-slate-300'}`}>
                  {audio.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    audio.type === 'general' 
                      ? 'bg-amber-400/20 text-amber-400' 
                      : 'bg-purple-400/20 text-purple-400'
                  }`}>
                    {audio.type === 'general' ? 'Foundation' : 'Archetype'}
                  </span>
                  
                  {audio.locked ? (
                    <Button size="sm" variant="ghost" disabled className="text-slate-500">
                      <Lock className="h-4 w-4 mr-2" />
                      Locked
                    </Button>
                  ) : (
                    <Button size="sm" className="bg-amber-400 hover:bg-amber-500 text-slate-900">
                      <Play className="h-4 w-4 mr-2" />
                      Play
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {user && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <div className="bg-slate-900/50 p-6 rounded-lg border border-amber-400/20 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-white mb-3">Your Daily Practice</h3>
                <p className="text-slate-300 mb-4">
                  For optimal results, listen to one audio each morning before your trading session. 
                  Consistency is the key to subconscious transformation.
                </p>
                <Button className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold">
                  Download Mobile App
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

export default AudioLibrary
