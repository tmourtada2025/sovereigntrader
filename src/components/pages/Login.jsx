import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate, Link } from 'react-router-dom'
import { Crown, Eye, EyeOff, Mail, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '../../contexts/AuthContext'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      await login(formData.email, formData.password)
      navigate('/dashboard')
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  const demoLogin = () => {
    setFormData({
      email: 'demo@sovereign.com',
      password: 'sovereign123'
    })
  }

  return (
    <div className="pt-16 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-slate-900/50 p-8 rounded-lg border border-amber-400/20 backdrop-blur-sm"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <Crown className="h-12 w-12 text-amber-400 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back, Sovereign</h1>
            <p className="text-slate-300">Access your transformation library</p>
          </div>

          {/* Demo Credentials */}
          <div className="mb-6 p-4 bg-amber-400/10 border border-amber-400/30 rounded-lg">
            <p className="text-amber-400 text-sm font-semibold mb-2">Demo Credentials:</p>
            <p className="text-slate-300 text-sm">Email: demo@sovereign.com</p>
            <p className="text-slate-300 text-sm">Password: sovereign123</p>
            <Button
              onClick={demoLogin}
              variant="ghost"
              size="sm"
              className="mt-2 text-amber-400 hover:text-amber-300 p-0 h-auto"
            >
              Click to auto-fill
            </Button>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
            >
              <p className="text-red-400 text-sm">{error}</p>
            </motion.div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-amber-400 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-amber-400 focus:outline-none transition-colors"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-amber-400 bg-slate-800 border-slate-600 rounded focus:ring-amber-400 focus:ring-2"
                />
                <span className="ml-2 text-sm text-slate-300">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-amber-400 hover:text-amber-300">
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold py-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin mr-2"></div>
                  Signing In...
                </>
              ) : (
                'Sign In'
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-slate-600"></div>
            <span className="px-4 text-slate-400 text-sm">or</span>
            <div className="flex-1 border-t border-slate-600"></div>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-slate-300 text-sm">
              Don't have an account?{' '}
              <Link to="/products" className="text-amber-400 hover:text-amber-300 font-semibold">
                Explore Our Programs
              </Link>
            </p>
          </div>

          {/* Additional Info */}
          <div className="mt-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
            <h3 className="text-white font-semibold mb-2">Access Includes:</h3>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• Complete Alchemical Audio Library</li>
              <li>• Personal Dashboard & Progress Tracking</li>
              <li>• Exclusive Community Access</li>
              <li>• Weekly Transformation Insights</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Login
