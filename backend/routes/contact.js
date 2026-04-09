const router = require('express').Router()

// POST /api/contact
router.post('/', (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' })
  }

  // TODO: Integrate with email service or database
  console.log('📩 New contact message:', { name, email, message })

  res.status(200).json({ success: true, message: 'Message received!' })
})

module.exports = router
