import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'wouter'
import { ArrowRight, Search, BookOpen } from 'lucide-react'

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Doctrine', count: 12 },
    { id: 'psychology', name: 'Psychology', count: 5 },
    { id: 'archetypes', name: 'Archetypes', count: 3 },
    { id: 'techniques', name: 'Techniques', count: 2 },
    { id: 'case-studies', name: 'Case Studies', count: 2 }
  ]

  const blogPosts = [
    {
      id: 1,
      title: "The Inner Council: Understanding Your Trading Archetypes",
      excerpt: "Discover the powerful archetypal forces that drive your trading decisions and learn how to transform them from saboteurs into allies.",
      author: "The Trader Alchemist",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "archetypes",
      tags: ["archetypes", "psychology", "self-awareness"],
      featured: true
    },
    {
      id: 2,
      title: "Breaking the Cycle: How to Overcome Self-Sabotage",
      excerpt: "Learn the psychological patterns that lead to self-destructive trading behavior and discover proven techniques to break free.",
      author: "The Trader Alchemist",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "psychology",
      tags: ["self-sabotage", "discipline", "emotional-control"],
      featured: false
    },
    {
      id: 3,
      title: "The Alchemical Process: Transmuting Fear into Confidence",
      excerpt: "Explore the ancient art of inner alchemy and how it applies to transforming your relationship with risk and uncertainty.",
      author: "The Trader Alchemist",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "techniques",
      tags: ["alchemy", "fear", "confidence", "transformation"],
      featured: false
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="pt-16 bg-[#0B0D10] text-[#EAE7DF]">
      {/* Header Section */}
      <section className="py-32 border-b border-[#8B6B3E]/10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <span className="text-[#8B6B3E] tracking-[0.5em] uppercase text-xs mb-8 block font-medium">The Journal</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">
              Strategic <br />
              <span className="italic">Insights</span>
            </h1>
            <p className="text-xl text-[#EAE7DF]/60 max-w-3xl mx-auto font-light leading-relaxed">
              Doctrine, techniques, and wisdom for those who seek trading sovereignty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-[#161A20] border-b border-[#8B6B3E]/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-0 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#8B6B3E]/40" />
              <input
                type="text"
                placeholder="Search Journal..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-8 pr-4 py-2 bg-transparent border-b border-[#8B6B3E]/20 text-[#EAE7DF] placeholder-[#EAE7DF]/20 focus:border-[#8B6B3E] focus:outline-none transition-colors text-sm"
              />
            </div>

            <div className="flex flex-wrap gap-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-colors ${
                    selectedCategory === category.id
                      ? 'text-[#8B6B3E]'
                      : 'text-[#EAE7DF]/40 hover:text-[#8B6B3E]'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="macro-visual aspect-video bg-[#161A20] mb-8 flex items-center justify-center">
                   <BookOpen className="h-8 w-8 text-[#8B6B3E]/20 stroke-[1px]" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-[10px] uppercase tracking-widest text-[#8B6B3E] font-bold">
                    <span>{categories.find(cat => cat.id === post.category)?.name}</span>
                    <span className="w-1 h-1 bg-[#8B6B3E]/20"></span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-serif group-hover:text-[#8B6B3E] transition-colors duration-500">
                    {post.title}
                  </h3>
                  <p className="text-[#EAE7DF]/40 font-light leading-relaxed text-sm">
                    {post.excerpt}
                  </p>
                  <div className="pt-4">
                    <button className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#8B6B3E] hover:text-[#EAE7DF] transition-colors flex items-center gap-2">
                      Read Doctrine <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
