import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('sovereignUser')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'demo@sovereign.com' && password === 'sovereign123') {
          const userData = {
            id: 1,
            email: email,
            name: 'Demo User',
            membership: 'Alchemical Audios',
            joinDate: new Date().toISOString()
          }
          setUser(userData)
          localStorage.setItem('sovereignUser', JSON.stringify(userData))
          resolve(userData)
        } else {
          reject(new Error('Invalid credentials'))
        }
      }, 1000)
    })
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('sovereignUser')
  }

  const value = {
    user,
    login,
    logout,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
