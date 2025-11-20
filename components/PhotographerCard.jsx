import Link from 'next/link'

export default function PhotographerCard({ p, loading }) {
  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow p-4 flex flex-col animate-pulse">
        <div className="h-40 w-full bg-gray-300 rounded-md"></div>
        <div className="mt-3 space-y-2">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-3 bg-gray-300 rounded w-1/2"></div>
          <div className="h-3 bg-gray-300 rounded w-1/3"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
      <div className="h-48 w-full bg-gradient-to-br from-indigo-100 to-purple-100 overflow-hidden">
        <img 
          src={p.profilePic || '/images/placeholder.svg'} 
          alt={p.name} 
          className="object-cover h-full w-full hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-bold text-lg text-gray-800">{p.name}</h3>
        <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
          📍 {p.location}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <p className="font-semibold text-indigo-600">₹{p.price.toLocaleString()}</p>
          <div className="flex items-center gap-1 text-sm bg-yellow-50 px-2 py-1 rounded-full">
            <span className="text-yellow-500">⭐</span>
            <span className="font-medium text-gray-700">{p.rating}</span>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.tags?.map(t => (
            <span key={t} className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full font-medium">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-4">
          <Link 
            href={`/photographer/${p.id}`} 
            className="block text-center w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors shadow-sm hover:shadow-md"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  )
}
