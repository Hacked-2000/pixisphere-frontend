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
  }, [filtered, filter])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-2">Maternity Photographers in Bengaluru</h1>
        <p className="text-gray-600 mb-4">Find the perfect photographer for your special moments</p>

        <SearchBar onSearch={setQuery} />

        {smartSuggestion && (
          <div className="mb-4 p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
            <span className="text-sm text-indigo-700">💡 AI Suggestion: {smartSuggestion}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
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

                {filtered.length === 0 && (
                  <div className="p-8 text-center bg-white rounded-lg shadow">
                    <p className="text-gray-600">No photographers found matching your criteria.</p>
                    <p className="text-sm text-gray-500 mt-2">Try adjusting your filters or search query.</p>
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
