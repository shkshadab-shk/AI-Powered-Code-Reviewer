require('dotenv').config()
const app = require('./src/app')

const PORT = process.env.PORT || 3000

// Only listen in development (not on Vercel)
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
  })
}

// Export for Vercel serverless
module.exports = app
