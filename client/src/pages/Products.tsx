import { motion } from 'framer-motion'
import { Link } from 'wouter'
import { Headphones, Users, Crown, BarChart2, ArrowRight } from 'lucide-react'

const Products = () => {
  const programs = [
    {
      id: 'audios',
      title: "Alchemical Audios",
      subtitle: "Subconscious Reprogramming",
      description: "A series of targeted psychological protocols designed to bypass the critical faculty and install the foundational architecture of a sovereign operator.",
      features: [
        "Nigredo: Fear Dissolution Protocol",
        "Albedo: Discipline Purification",
        "Rubedo: Peak Performance State",
        "The Ouroboros: Daily Maintenance"
      ],
      icon: Headphones,
      admission: "Private Access",
      link: "/audios"
    },
    {
      id: 'circle',
      title: "The Sovereign's Circle",
      subtitle: "8-Week Group Intensive",
      description: "A high-containment environment for serious traders. We dismantle your current psychological framework and rebuild it from first principles.",
      features: [
        "Weekly Doctrine Sessions",
        "Archetypal Analysis",
        "Live Execution Audits",
        "The Inner Council Framework"
      ],
      icon: Users,
      admission: "By Application Only",
      link: "/contact"
    },
    {
      id: 'council',
      title: "The Alchemist's Council",
      subtitle: "Elite 1-on-1 Mentorship",
      description: "The highest level of psychological intervention. Direct, unfiltered access to the Trader Alchemist for structural transformation of your trading operation.",
      features: [
        "Bespoke Psychological Architecture",
        "Daily Strategic Alignment",
        "Crisis Management Protocol",
        "Lifetime Doctrine Access"
      ],
      icon: Crown,
      admission: "Strategic Selection",
      link: "/contact"
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
            <span className="text-[#8B6B3E] tracking-[0.5em] uppercase text-xs mb-8 block font-medium">The Programs</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">
              Strategic <br />
              <span className="italic">Interventions</span>
            </h1>
            <p className="text-xl text-[#EAE7DF]/60 max-w-3xl mx-auto font-light leading-relaxed">
              We do not sell courses. We provide psychological containment and structural 
              transformation for those who operate at the highest levels of risk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-32 bg-[#161A20]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="sovereign-card flex flex-col h-full"
              >
                <div className="mb-12">
                  <program.icon className="h-8 w-8 text-[#8B6B3E] mb-8 stroke-[1px]" />
                  <h3 className="text-3xl font-serif mb-2">{program.title}</h3>
                  <p className="text-[#8B6B3E] uppercase tracking-widest text-[10px] font-bold mb-6">{program.subtitle}</p>
                  <p className="text-[#EAE7DF]/50 font-light leading-relaxed mb-8">
                    {program.description}
                  </p>
                </div>

                <div className="space-y-4 mb-12 flex-grow">
                  {program.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-[#8B6B3E] mt-2.5"></div>
                      <span className="text-sm text-[#EAE7DF]/70 font-light">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-[#8B6B3E]/10">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[#8B6B3E] uppercase tracking-widest text-[10px] font-bold">Admission</span>
                    <span className="text-[#EAE7DF] font-serif italic">{program.admission}</span>
                  </div>
                  <Link href={program.link}>
                    <button className="sovereign-button w-full">
                      Inquire
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FinVerse Recommendation */}
      <section className="py-24 bg-[#0B0D10] border-t border-[#8B6B3E]/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="border border-[#8B6B3E]/20 p-12 bg-[#161A20]/50"
          >
            <BarChart2 className="h-10 w-10 text-[#8B6B3E] mx-auto mb-6 stroke-[1px]" />
            <h2 className="text-2xl font-serif mb-4">Technical Foundation</h2>
            <p className="text-[#EAE7DF]/60 font-light leading-relaxed mb-8">
              Psychological mastery requires a valid technical edge to express itself. 
              For traders seeking a robust, data-driven framework, we endorse <strong>FinVerse</strong>.
            </p>
            <a 
              href="https://finverse.world" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#8B6B3E] hover:text-[#EAE7DF] transition-colors uppercase tracking-widest text-xs font-bold"
            >
              Visit FinVerse <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Admission Note */}
      <section className="py-32 bg-[#0B0D10]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif mb-8 italic">"The market is a mirror. What do you see?"</h2>
            <p className="text-[#EAE7DF]/40 font-light leading-relaxed mb-12">
              Our programs are designed to repel the impulsive and attract the disciplined. 
              We do not offer refunds, we do not offer guarantees, and we do not offer shortcuts. 
              We offer transformation.
            </p>
            <div className="w-12 h-[1px] bg-[#8B6B3E] mx-auto"></div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Products
