import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Crown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "contact@sovereigntrader.com",
      description: "We respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Schedule a Call",
      content: "+1 (555) 123-4567",
      description: "Available Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Our Location",
      content: "New York, NY",
      description: "Virtual consultations worldwide"
    }
  ]

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'programs', label: 'Program Information' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'partnership', label: 'Partnership Opportunities' },
    { value: 'media', label: 'Media & Press' }
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
            <Crown className="h-16 w-16 text-amber-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Connect With Us
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to begin your journey to trading sovereignty? We're here to guide you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 p-8 rounded-lg border border-amber-400/20 text-center group hover:border-amber-400/40 transition-all duration-300"
              >
                <info.icon className="h-12 w-12 text-amber-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                <p className="text-amber-400 font-semibold mb-2">{info.content}</p>
                <p className="text-slate-400 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Send Us a Message
            </h2>
            <p className="text-lg text-slate-300">
              Whether you have questions about our programs, need technical support, or want to explore partnership opportunities, we're here to help.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 p-8 rounded-lg border border-amber-400/20"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-300">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-amber-400 focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-amber-400 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-slate-300 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-amber-400 focus:outline-none transition-colors"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-amber-400 focus:outline-none transition-colors"
                    placeholder="Brief subject line"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-amber-400 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold px-8 py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Quick Answers
            </h2>
            <p className="text-lg text-slate-300">
              Common questions we receive from aspiring sovereign traders
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly can I expect to see results?",
                answer: "Most traders notice initial shifts in emotional discipline within 2-3 weeks of consistent practice. Deeper transformation typically manifests within 4-6 weeks of dedicated engagement with our programs."
              },
              {
                question: "Do you offer refunds?",
                answer: "Yes, we offer a 30-day money-back guarantee on all our programs. If you don't experience a profound shift in your trading psychology, we'll refund your investment completely."
              },
              {
                question: "Can I access the programs internationally?",
                answer: "Absolutely. Our programs are designed for global access, with virtual consultations available worldwide. All materials are delivered digitally for immediate access."
              },
              {
                question: "What's the difference between the programs?",
                answer: "The Alchemical Audios focus on daily subconscious reprogramming, The Sovereign's Circle is an 8-week group intensive, and The Alchemist's Council provides elite 1-on-1 mentorship. Each serves different stages of your transformation journey."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 rounded-lg p-6 border border-amber-400/20"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-slate-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
