import data from '../../../db.json'

export default function handler(req, res) {
  const { id } = req.query

  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  const pid = Number(id)
  const photographer = data.photographers.find(p => p.id === pid)
  if (!photographer) return res.status(404).json({ error: 'Photographer not found' })
  return res.status(200).json(photographer)
}
