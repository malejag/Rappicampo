import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AuthContext = createContext(null)

const STORAGE_KEY = 'rappicampo_user'

const defaultUser = {
  name: 'Invitado RappiCampo',
  email: 'demo@rappicampo.com',
  role: 'cliente'
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        setUser(JSON.parse(saved))
      } catch {
        localStorage.removeItem(STORAGE_KEY)
      }
    }
  }, [])

  const login = ({ email, password, role }) => {
    const demoUser = {
      ...defaultUser,
      email: email || defaultUser.email,
      name: email ? email.split('@')[0] : defaultUser.name,
      role: role || 'cliente',
      token: `demo-token-${Date.now()}`
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(demoUser))
    setUser(demoUser)
    return demoUser
  }

  const register = ({ name, email, role }) => {
    const newUser = {
      name: name || 'Usuario RappiCampo',
      email: email || defaultUser.email,
      role: role || 'cliente',
      token: `demo-token-${Date.now()}`
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser))
    setUser(newUser)
    return newUser
  }

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY)
    setUser(null)
  }

  const value = useMemo(() => ({ user, isAuthenticated: Boolean(user), login, register, logout }), [user])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth debe usarse dentro de AuthProvider')
  return context
}
