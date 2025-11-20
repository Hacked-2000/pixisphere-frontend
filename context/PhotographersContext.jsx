import React, { createContext, useState, useEffect } from 'react'
import { fetchPhotographers } from '../lib/api'

export const PhotographersContext = createContext()

export function PhotographersProvider({ children }) {
  const [photographers, setPhotographers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    fetchPhotographers()
      .then(data => { if (mounted) setPhotographers(data) })
      .catch(err => { if (mounted) setError(err.message) })
      .finally(() => { if (mounted) setLoading(false) })
    return () => (mounted = false)
  }, [])

  return (
    <PhotographersContext.Provider value={{ photographers, setPhotographers, loading, error }}>
      {children}
    </PhotographersContext.Provider>
  )
}
