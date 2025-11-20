import React, { useState, useEffect } from 'react'

export default function Filters({ data, onFilter }) {
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(20000)
  const [rating, setRating] = useState(0)
  const [styles, setStyles] = useState([])
  const [city, setCity] = useState('')
  const [sort, setSort] = useState('')

  useEffect(() => {
    onFilter({ minPrice, maxPrice, rating, styles, city, sort })
  }, [minPrice, maxPrice, rating, styles, city, sort])

  const allStyles = Array.from(new Set(data.flatMap(d => d.styles || [])))
  const cities = Array.from(new Set(data.map(d => d.location)))

  function toggleStyle(s) {
    setStyles(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s])
  }

  return (
    <aside className="p-4 bg-white rounded-lg shadow-md sticky top-4">
      <h4 className="font-bold text-lg mb-4 text-gray-800">Filters</h4>

      {/* Price Range Slider */}
      <div className="mb-6">
        <label className="text-sm font-semibold text-gray-700 mb-2 block">Price Range</label>
        <div className="space-y-3">
          <div>
            <label className="text-xs text-gray-600">Min: ₹{minPrice.toLocaleString()}</label>
            <input 
              type="range" 
              min="0" 
              max="20000" 
              step="1000"
              value={minPrice} 
              onChange={e => setMinPrice(Number(e.target.value))} 
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
          </div>
          <div>
            <label className="text-xs text-gray-600">Max: ₹{maxPrice.toLocaleString()}</label>
            <input 
              type="range" 
              min="0" 
              max="20000" 
              step="1000"
              value={maxPrice} 
              onChange={e => setMaxPrice(Number(e.target.value))} 
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
          </div>
        </div>
      </div>

      {/* Rating Filter */}
      <div className="mb-6">
        <label className="text-sm font-semibold text-gray-700 mb-2 block">Rating minimum</label>
        <select 
          value={rating} 
          onChange={e => setRating(Number(e.target.value))} 
          className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value={0}>Any</option>
          <option value={3}>⭐ 3+</option>
          <option value={4}>⭐ 4+</option>
          <option value={4.5}>⭐ 4.5+</option>
        </select>
      </div>

      {/* Styles Filter */}
      <div className="mb-6">
        <label className="text-sm font-semibold text-gray-700 mb-2 block">Styles</label>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {allStyles.map(s => (
            <label key={s} className="flex items-center text-sm cursor-pointer hover:bg-gray-50 p-1 rounded">
              <input 
                type="checkbox" 
                checked={styles.includes(s)} 
                onChange={() => toggleStyle(s)} 
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <span className="ml-2 text-gray-700">{s}</span>
            </label>
          ))}
        </div>
      </div>

      {/* City Filter */}
      <div className="mb-6">
        <label className="text-sm font-semibold text-gray-700 mb-2 block">City</label>
        <select 
          value={city} 
          onChange={e => setCity(e.target.value)} 
          className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Any</option>
          {cities.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {/* Sort Filter */}
      <div className="mb-4">
        <label className="text-sm font-semibold text-gray-700 mb-2 block">Sort</label>
        <select 
          value={sort} 
          onChange={e => setSort(e.target.value)} 
          className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Default</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="ratingDesc">Rating: High to Low</option>
          <option value="recent">Recently Added</option>
        </select>
      </div>
    </aside>
  )
}
