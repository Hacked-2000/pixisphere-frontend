import data from '../../../db.json'

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  // Serve the photographers array from db.json
  return res.status(200).json(data.photographers)
}
