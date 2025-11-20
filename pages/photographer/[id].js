import React, { useState } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { API_BASE } from '../../lib/api'

const fetcher = url => fetch(url).then(r => r.json())

export default function Profile() {
  const router = useRouter()
  const { id } = router.query
  const { data, error } = useSWR(id ? `${API_BASE}/photographers/${id}` : null, fetcher)
  const [showInquiry, setShowInquiry] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  if (!data) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading profile...</p>
      </div>
    </div>
  )
  
  if (error) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="p-6 text-red-600 bg-red-50 rounded-lg">Failed to load profile.</div>
    </div>
  )

  const p = data

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Inquiry sent to ${p.name}!\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`)
    setShowInquiry(false)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-4">
        <button 
          onClick={() => router.back()} 
          className="mb-4 text-sm text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
        >
          ← Back to listings
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            <div>
              <img 
                src={p.profilePic || '/images/placeholder.png'} 
                alt={p.name} 
                className="w-full rounded-lg shadow"
              />
            </div>
            <div className="md:col-span-2">
              <h1 className="text-3xl font-bold">{p.name}</h1>
              <p className="text-gray-600 mt-1">📍 {p.location}</p>
              <div className="mt-3 flex items-center gap-4">
                <span className="text-xl font-semibold text-indigo-600">₹{p.price.toLocaleString()}</span>
                <span className="text-yellow-600 flex items-center gap-1">⭐ {p.rating}</span>
              </div>
              
              <div className="mt-4">
                <h3 className="font-semibold text-lg mb-2">About</h3>
                <p className="text-gray-700">{p.bio}</p>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-lg mb-2">Styles & Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {(p.styles || []).map(s => (
                    <span key={s} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">{s}</span>
                  ))}
                  {(p.tags || []).map(t => (
                    <span key={t} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{t}</span>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => setShowInquiry(true)}
                className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
              >
                Send Inquiry
              </button>
            </div>
          </div>

          {/* Portfolio Section */}
          <div className="border-t p-6">
            <h3 className="font-semibold text-xl mb-4">Portfolio</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {(p.portfolio || []).map((img, idx) => (
                <div key={idx} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <img src={img} alt={`Portfolio ${idx + 1}`} className="w-full h-full object-cover"/>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews Section */}
          <div className="border-t p-6">
            <h3 className="font-semibold text-xl mb-4">Reviews</h3>
            <div className="space-y-4">
              {(p.reviews || []).map((review, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">{review.name}</span>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <div className="text-yellow-600 mb-2">{'⭐'.repeat(Math.floor(review.rating))}</div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Inquiry Modal */}
      {showInquiry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Send Inquiry to {p.name}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full border rounded-lg px-3 py-2 h-24"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              <div className="flex gap-3">
                <button 
                  type="submit"
                  className="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                >
                  Send
                </button>
                <button 
                  type="button"
                  onClick={() => setShowInquiry(false)}
                  className="flex-1 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
