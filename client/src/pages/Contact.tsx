import { motion } from 'framer-motion'
import { Mail, Shield, Send } from 'lucide-react'

const Contact = () => {
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
            <span className="text-[#8B6B3E] tracking-[0.5em] uppercase text-xs mb-8 block font-medium">Admission</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">
              Strategic <br />
              <span className="italic">Inquiry</span>
            </h1>
            <p className="text-xl text-[#EAE7DF]/60 max-w-3xl mx-auto font-light leading-relaxed">
              We are selective. Our programs require a high level of psychological commitment. 
              If you are ready to dismantle your current framework, initiate contact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 bg-[#161A20]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif mb-8">The Council Awaits.</h2>
              <p className="text-[#EAE7DF]/50 font-light leading-relaxed mb-12">
                For inquiries regarding The Sovereign's Circle or The Alchemist's Council, 
                please provide a brief overview of your trading experience and your primary 
                psychological bottlenecks.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 border border-[#8B6B3E]/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-4 w-4 text-[#8B6B3E]" />
                  </div>
                  <div>
                    <h4 className="text-[#8B6B3E] uppercase tracking-widest text-[10px] font-bold mb-1">Direct Channel</h4>
                    <p className="text-[#EAE7DF]/80 font-light">council@sovereigntrader.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 border border-[#8B6B3E]/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-4 w-4 text-[#8B6B3E]" />
                  </div>
                  <div>
                    <h4 className="text-[#8B6B3E] uppercase tracking-widest text-[10px] font-bold mb-1">Privacy Protocol</h4>
                    <p className="text-[#EAE7DF]/80 font-light">All inquiries are handled with absolute discretion.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="bg-[#0B0D10] border border-[#8B6B3E]/10 p-12"
            >
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#8B6B3E] font-bold">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b border-[#8B6B3E]/20 py-2 text-[#EAE7DF] focus:outline-none focus:border-[#8B6B3E] transition-colors font-light"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#8B6B3E] font-bold">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-transparent border-b border-[#8B6B3E]/20 py-2 text-[#EAE7DF] focus:outline-none focus:border-[#8B6B3E] transition-colors font-light"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#8B6B3E] font-bold">Program of Interest</label>
                  <select className="w-full bg-transparent border-b border-[#8B6B3E]/20 py-2 text-[#EAE7DF] focus:outline-none focus:border-[#8B6B3E] transition-colors font-light appearance-none">
                    <option className="bg-[#0B0D10]">The Sovereign's Circle</option>
                    <option className="bg-[#0B0D10]">The Alchemist's Council</option>
                    <option className="bg-[#0B0D10]">General Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#8B6B3E] font-bold">Your Context</label>
                  <textarea 
                    rows={4}
                    placeholder="Briefly describe your current psychological state in the market..."
                    className="w-full bg-transparent border-b border-[#8B6B3E]/20 py-2 text-[#EAE7DF] focus:outline-none focus:border-[#8B6B3E] transition-colors font-light resize-none"
                  ></textarea>
                </div>
                <button className="sovereign-button w-full flex items-center justify-center gap-3">
                  Submit Inquiry <Send className="h-3 w-3" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
