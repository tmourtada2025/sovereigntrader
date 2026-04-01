import { motion } from 'framer-motion'
import { Headphones, Lock, Play } from 'lucide-react'

const AudioLibrary = () => {
  const audios = [
    {
      title: "Nigredo: Fear Dissolution",
      duration: "24:15",
      description: "A protocol for dismantling acute fear responses during drawdown periods.",
      locked: true
    },
    {
      title: "Albedo: Discipline Purification",
      duration: "31:45",
      description: "Reinforcing the neural pathways of patience and execution adherence.",
      locked: true
    },
    {
      title: "Rubedo: Peak Performance",
      duration: "18:30",
      description: "Activation of the flow state for high-conviction execution.",
      locked: true
    },
    {
      title: "The Ouroboros: Daily Maintenance",
      duration: "12:00",
      description: "Morning alignment protocol to center the operator before the session.",
      locked: true
    }
  ]

  return (
    <div className="pt-16 bg-[#0B0D10] text-[#EAE7DF]">
      {/* Header */}
      <section className="py-32 border-b border-[#8B6B3E]/10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <span className="text-[#8B6B3E] tracking-[0.5em] uppercase text-xs mb-8 block font-medium">The Library</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">
              Alchemical <br />
              <span className="italic">Audios</span>
            </h1>
            <p className="text-xl text-[#EAE7DF]/60 max-w-3xl mx-auto font-light leading-relaxed">
              Subconscious reprogramming protocols. Access is restricted to initiated members.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Audio Grid */}
      <section className="py-32 bg-[#161A20]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {audios.map((audio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="sovereign-card group relative overflow-hidden"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 border border-[#8B6B3E]/20 flex items-center justify-center">
                    <Headphones className="h-5 w-5 text-[#8B6B3E]" />
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-[#8B6B3E]/60 font-bold">
                    {audio.duration}
                  </div>
                </div>
                
                <h3 className="text-2xl font-serif mb-4 group-hover:text-[#8B6B3E] transition-colors duration-500">
                  {audio.title}
                </h3>
                <p className="text-[#EAE7DF]/40 font-light leading-relaxed mb-8">
                  {audio.description}
                </p>

                <div className="flex items-center justify-between pt-8 border-t border-[#8B6B3E]/10">
                  <span className="text-[10px] uppercase tracking-widest text-[#5A1F1F] font-bold flex items-center gap-2">
                    <Lock className="h-3 w-3" /> Restricted
                  </span>
                  <button className="text-[#EAE7DF]/20 cursor-not-allowed uppercase tracking-widest text-[10px] font-bold">
                    Play Preview
                  </button>
                </div>

                {/* Locked Overlay */}
                <div className="absolute inset-0 bg-[#0B0D10]/80 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="sovereign-button flex items-center gap-3">
                    <Lock className="h-3 w-3" /> Member Access Only
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AudioLibrary
