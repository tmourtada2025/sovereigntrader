import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Products from './components/pages/Products'
import AudioLibrary from './components/pages/AudioLibrary'
import Blog from './components/pages/Blog'
import Contact from './components/pages/Contact'
import Login from './components/pages/Login'
import Dashboard from './components/pages/Dashboard'

// Context for user authentication
import { AuthProvider } from './contexts/AuthContext'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-3xl font-bold text-amber-400 mb-2"
          >
            The Sovereign Trader Institute
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-slate-300"
          >
            Forging the path to trading mastery...
          </motion.p>
        </motion.div>
      </div>
    )
  }

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/audios" element={<AudioLibrary />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
