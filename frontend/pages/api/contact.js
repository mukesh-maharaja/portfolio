export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  const { name, email, message } = req.body

  console.log('Contact received (Next API):', name, email, message)

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Missing fields' })
  }

  // In production: send email or store message
  return res.status(200).json({ ok: true })
}
