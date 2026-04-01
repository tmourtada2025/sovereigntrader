import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, Navigate } from 'react-router-dom'
import { 
  Crown, 
  Headphones, 
  Play, 
  Calendar, 
  TrendingUp, 
  Target, 
  Clock,
  Award,
  BarChart3,
  BookOpen
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '../../contexts/AuthContext'

const Dashboard = () => {
  const { user } = useAuth()
  const [currentStreak, setCurrentStreak] = useState(7)
  const [totalSessions, setTotalSessions] = useState(23)
  const [favoriteAudio, setFavoriteAudio] = useState("The Sovereign Mindset")

  if (!user) {
    return <Navigate to="/login" replace />
  }

  const recentAudios = [
    { title: "The Sovereign Mindset", duration: "10:00", completed: true, date: "Today" },
    { title: "Aries Archetype Balance", duration: "10:00", completed: true, date: "Yesterday" },
    { title: "Taurus Archetype Balance", duration: "10:00", completed: true, date: "2 days ago" },
    { title: "Leo Archetype Balance", duration: "10:00", completed: false, date: "3 days ago" }
  ]

  const upcomingGoals = [
    { title: "Complete 30-day streak", progress: 23, target: 30, type: "streak" },
    { title: "Listen to all archetype audios", progress: 8, target: 12, type: "collection" },
    { title: "Weekly reflection journal", progress: 2, target: 4, type: "journal" }
  ]

  const stats = [
    { label: "Current Streak", value: currentStreak, unit: "days", icon: TrendingUp, color: "text-green-400" },
    { label: "Total Sessions", value: totalSessions, unit: "sessions", icon: Headphones, color: "text-amber-400" },
    { label: "This Week", value: 5, unit: "sessions", icon: Calendar, color: "text-blue-400" },
    { label: "Avg. Session", value: 10, unit: "minutes", icon: Clock, color: "text-purple-400" }
  ]

  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-between"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Welcome back, {user.name}
              </h1>
              <p className="text-xl text-slate-300">
                Your journey to trading sovereignty continues
              </p>
              <div className="mt-4 flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-amber-400/20 px-3 py-1 rounded-full">
                  <Crown className="h-4 w-4 text-amber-400" />
                  <span className="text-amber-400 text-sm font-semibold">{user.membership}</span>
                </div>
                <div className="text-slate-400 text-sm">
                  Member since {new Date(user.joinDate).toLocaleDateString()}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <Crown className="h-24 w-24 text-amber-400 opacity-20" />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-slate-900/50 p-6 rounded-lg border border-amber-400/20">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.unit}</div>
                </div>
              </div>
              <div className="text-slate-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-slate-900/50 p-6 rounded-lg border border-amber-400/20">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Recent Sessions</h2>
                <Link to="/audios">
                  <Button variant="outline" size="sm" className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900">
                    View All Audios
                  </Button>
                </Link>
              </div>
              
              <div className="space-y-4">
                {recentAudios.map((audio, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-full ${audio.completed ? 'bg-green-500/20' : 'bg-slate-600/20'}`}>
                        {audio.completed ? (
                          <Award className="h-5 w-5 text-green-400" />
                        ) : (
                          <Play className="h-5 w-5 text-slate-400" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">{audio.title}</h3>
                        <p className="text-slate-400 text-sm">{audio.date} • {audio.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {audio.completed ? (
                        <span className="text-green-400 text-sm font-semibold">Completed</span>
                      ) : (
                        <Button size="sm" className="bg-amber-400 hover:bg-amber-500 text-slate-900">
                          <Play className="h-4 w-4 mr-1" />
                          Play
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Goals & Progress */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Current Goals */}
            <div className="bg-slate-900/50 p-6 rounded-lg border border-amber-400/20">
              <h2 className="text-xl font-bold text-white mb-4">Current Goals</h2>
              <div className="space-y-4">
                {upcomingGoals.map((goal, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-300 text-sm">{goal.title}</span>
                      <span className="text-amber-400 text-sm font-semibold">
                        {goal.progress}/{goal.target}
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-amber-400 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(goal.progress / goal.target) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-slate-900/50 p-6 rounded-lg border border-amber-400/20">
              <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Link to="/audios">
                  <Button className="w-full bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold justify-start">
                    <Headphones className="h-4 w-4 mr-2" />
                    Start Today's Session
                  </Button>
                </Link>
                <Button variant="outline" className="w-full border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 justify-start">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View Progress Report
                </Button>
                <Button variant="outline" className="w-full border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 justify-start">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Trading Journal
                </Button>
              </div>
            </div>

            {/* Streak Celebration */}
            {currentStreak >= 7 && (
              <div className="bg-gradient-to-r from-amber-400/20 to-yellow-600/20 p-6 rounded-lg border border-amber-400/30">
                <div className="text-center">
                  <Award className="h-12 w-12 text-amber-400 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">
                    🔥 {currentStreak} Day Streak!
                  </h3>
                  <p className="text-slate-300 text-sm">
                    You're building incredible momentum. Keep going, Sovereign!
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Insights Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8"
        >
          <div className="bg-slate-900/50 p-6 rounded-lg border border-amber-400/20">
            <h2 className="text-2xl font-bold text-white mb-4">Your Transformation Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-400 mb-2">Most Active Time</h3>
                <p className="text-slate-300">You typically listen to audios at 7:00 AM - perfect for setting your daily intention.</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-400 mb-2">Favorite Audio</h3>
                <p className="text-slate-300">"{favoriteAudio}" - You've completed this 8 times this month.</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-400 mb-2">Progress Trend</h3>
                <p className="text-slate-300">Your consistency has improved 40% compared to last month. Excellent work!</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-400 mb-2">Next Milestone</h3>
                <p className="text-slate-300">7 more sessions to reach your 30-day transformation milestone.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard
