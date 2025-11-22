import React, { useContext, useState, useMemo } from 'react'
import { PhotographersContext } from '../context/PhotographersContext'
import PhotographerCard from '../components/PhotographerCard'
import Filters from '../components/Filters'
import SearchBar from '../components/SearchBar'

export default function Home() {
  const { photographers, loading, error } = useContext(PhotographersContext)
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState({})
  const [visible, setVisible] = useState(6)

  function handleFilter(f) {
    setFilter(f)
  }

  function searchMatch(p, q) {
    if (!q) return true
    const qq = q.toLowerCase()
    return (
      p.name.toLowerCase().includes(qq) ||
      p.location.toLowerCase().includes(qq) ||
      (p.tags || []).some(t => t.toLowerCase().includes(qq))
    )
  }

  const filtered = useMemo(() => {
    let arr = photographers.slice()
    arr = arr.filter(p => searchMatch(p, query))
    if (filter.minPrice != null) arr = arr.filter(p => p.price >= (filter.minPrice || 0))
    if (filter.maxPrice != null) arr = arr.filter(p => p.price <= (filter.maxPrice || Infinity))
    if (filter.rating) arr = arr.filter(p => p.rating >= filter.rating)
    if (filter.styles && filter.styles.length) arr = arr.filter(p => filter.styles.some(s => (p.styles || []).includes(s)))
    if (filter.city) arr = arr.filter(p => p.location === filter.city)
    if (filter.sort === 'priceAsc') arr.sort((a,b) => a.price - b.price)
    if (filter.sort === 'ratingDesc') arr.sort((a,b) => b.rating - a.rating)
    if (filter.sort === 'recent') arr.sort((a,b) => b.id - a.id)
    return arr
  }, [photographers, query, filter])

  const smartSuggestion = useMemo(() => {
    if (filtered.length === 0) return null
    const topRated = filtered.filter(p => p.rating >= 4.5)
    if (topRated.length > 0 && filter.city) {
      const styles = filter.styles?.length ? filter.styles.join(', ') : 'outdoor'
      return `Top-rated ${styles} photographers in ${filter.city}`
    }
    return null
  }, [filtered, filter]);
  // Mobile filter modal state
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile modal - slides from bottom */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={() => setShowFilters(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl max-h-[85vh] flex flex-col animate-slide-up">
            <div className="flex-shrink-0 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between rounded-t-2xl">
              <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
              <button
                aria-label="Close filters"
                className="p-2 -mr-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setShowFilters(false)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 pb-8 pt-2">
              <Filters data={photographers} onFilter={handleFilter} />
            </div>
          </div>
        </div>
      )}
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-2">Maternity Photographers in Bengaluru</h1>
        <p className="text-gray-600 mb-4">Find the perfect photographer for your special moments</p>

        <SearchBar onSearch={setQuery} />

        {smartSuggestion && (
          <div className="mb-4 p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
            <span className="text-sm text-indigo-700">&#x1f;&#x1f; AI Suggestion: {smartSuggestion}</span>
          </div>
        )}

        {/* Mobile menu button for filters */}
        <div className="mb-4 lg:hidden">
          <button
            aria-label="Show filters"
            className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg bg-indigo-600 text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
            onClick={() => setShowFilters(true)}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filters & Sort
          </button>
        </div>

        {/* Filters sidebar for desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="hidden lg:block lg:col-span-1">
            <Filters data={photographers} onFilter={handleFilter} />
          </div>
          <div className="lg:col-span-3">
            {loading && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <PhotographerCard key={i} loading={true} />
                ))}
              </div>
            )}
            {error && <div className="p-6 text-red-600 bg-red-50 rounded-lg">{error}</div>}
            {!loading && !error && (
              <>
                <div className="mb-4 text-sm text-gray-600">
                  Showing {Math.min(visible, filtered.length)} of {filtered.length} photographers
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filtered.slice(0, visible).map(p => (
                    <PhotographerCard key={p.id} p={p} />
                  ))}
                </div>
                {visible < filtered.length && (
                  <div className="text-center mt-6">
                    <button 
                      onClick={() => setVisible(v => v + 6)} 
                      className="px-6 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
                    >
                      Load More
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
