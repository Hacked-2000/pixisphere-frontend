export const API_BASE = process.env.NEXT_PUBLIC_API_BASE || '/api'

export async function fetchPhotographers() {
  const res = await fetch(`${API_BASE}/photographers`)
  if (!res.ok) throw new Error('Failed to fetch')
  return res.json()
}

export async function fetchPhotographerById(id) {
  const res = await fetch(`${API_BASE}/photographers/${id}`)
  if (!res.ok) throw new Error('Failed to fetch photographer')
  return res.json()
}
