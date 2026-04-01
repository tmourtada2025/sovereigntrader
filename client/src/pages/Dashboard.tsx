import { motion } from 'framer-motion'
import { Link } from 'wouter'
import { User, Settings, LogOut, BarChart2, BookOpen, Shield, Brain, Play } from 'lucide-react'

const Dashboard = () => {
  const user = {
    name: "Operator",
    tier: "Sovereign Circle",
    progress: 65
  }

  const modules = [
    {
      title: "Psychological Audit",
      status: "In Progress",
      progress: 65,
      icon: Brain
    },
    {
      title: "Execution Protocols",
      status: "Locked",
      progress: 0,
      icon: Shield
    },
    {
      title: "Market Geometry",
      status: "Completed",
      progress: 100,
      icon: BarChart2
    }
  ]

  return (
    <div className="pt-16 bg-[#0B0D10] text-[#EAE7DF] min-h-screen">
      {/* Header */}
      <section className="py-12 border-b border-[#8B6B3E]/10">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div>
            <span className="text-[#8B6B3E] tracking-[0.5em] uppercase text-xs mb-2 block font-medium">Command Center</span>
            <h1 className="text-3xl font-serif">Welcome, {user.name}</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <p className="text-[#EAE7DF] font-serif text-sm">{user.tier}</p>
              <p className="text-[#8B6B3E] text-[10px] uppercase tracking-widest">Active Status</p>
            </div>
            <div className="w-10 h-10 border border-[#8B6B3E] flex items-center justify-center">
              <User className="h-5 w-5 text-[#8B6B3E]" />
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar / Stats */}
            <div className="lg:col-span-1 space-y-8">
              <div className="sovereign-card p-6">
                <h3 className="text-xl font-serif mb-6">Doctrine Progress</h3>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#8B6B3E] bg-[#8B6B3E]/10">
                        Overall Completion
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-[#8B6B3E]">
                        {user.progress}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-[#161A20]">
                    <div style={{ width: `${user.progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#8B6B3E]"></div>
                  </div>
                </div>
              </div>

              <div className="sovereign-card p-6">
                <h3 className="text-xl font-serif mb-6">Quick Actions</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/audios">
                      <a className="flex items-center gap-3 text-[#EAE7DF]/60 hover:text-[#8B6B3E] transition-colors text-sm">
                        <Play className="h-4 w-4" /> Resume Audio Protocol
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <a className="flex items-center gap-3 text-[#EAE7DF]/60 hover:text-[#8B6B3E] transition-colors text-sm">
                        <BookOpen className="h-4 w-4" /> Read Latest Journal
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/settings">
                      <a className="flex items-center gap-3 text-[#EAE7DF]/60 hover:text-[#8B6B3E] transition-colors text-sm">
                        <Settings className="h-4 w-4" /> Account Settings
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Main Content / Modules */}
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-2xl font-serif mb-6 border-b border-[#8B6B3E]/10 pb-4">Active Modules</h2>
              {modules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="sovereign-card p-6 flex items-center justify-between group hover:border-[#8B6B3E]/40 transition-all"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 flex items-center justify-center border ${module.status === 'Locked' ? 'border-[#161A20] text-[#161A20]' : 'border-[#8B6B3E]/20 text-[#8B6B3E]'}`}>
                      <module.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-serif mb-1 group-hover:text-[#8B6B3E] transition-colors">{module.title}</h4>
                      <p className="text-[#EAE7DF]/40 text-xs uppercase tracking-widest">{module.status}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-24 bg-[#161A20] h-1 rounded-full overflow-hidden">
                      <div className="bg-[#8B6B3E] h-full" style={{ width: `${module.progress}%` }}></div>
                    </div>
                    <button className={`text-[10px] uppercase tracking-widest font-bold ${module.status === 'Locked' ? 'text-[#161A20] cursor-not-allowed' : 'text-[#8B6B3E] hover:text-[#EAE7DF]'}`}>
                      {module.status === 'Locked' ? 'Locked' : 'Access'}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
