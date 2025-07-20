import { useState, useEffect } from 'react'
import { AuthProvider } from './contexts/AuthContext'
import { auth } from './firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import Login from './components/Login'
import CreditCardTracker from './components/CreditCardTracker'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">Loading...</div>
      </div>
    )
  }

  return (
    <AuthProvider>
      {user ? <CreditCardTracker /> : <Login />}
    </AuthProvider>
  )
}

export default App