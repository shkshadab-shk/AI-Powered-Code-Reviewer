require('dotenv').config()
const app = require('./src/app')



// For local development only
// Use it in your fetch
fetch(`${API_URL}/ai/get-review`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(yourData)
})
// Export for Vercel
module.exports = app
