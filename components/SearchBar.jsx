import React, { useState, useEffect } from 'react'

// Debounce hook
function useDebounce(value, delay = 400) {
  const [debounced, setDebounced] = useState(value)
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(t)
  }, [value, delay])
  return debounced
}

export default function SearchBar({ onSearch }) {
  const [q, setQ] = useState('')
  const debounced = useDebounce(q)

  useEffect(() => {
    onSearch(debounced)
  }, [debounced, onSearch])

  return (
    <div className="w-full mb-4">
      <div className="relative">
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Search by name, location or tag..."
          className="w-full rounded-lg border border-gray-300 pl-12 pr-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          🔍
        </div>
      </div>
    </div>
  )
}
