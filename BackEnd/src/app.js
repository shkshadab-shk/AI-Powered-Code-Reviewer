const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')
const app = express()

// Configure CORS for your frontend domain
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:5174',
    'https://your-frontend-domain.vercel.app', // Replace with your actual frontend URL
    process.env.FRONTEND_URL // Add this to your Vercel env variables
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}))

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use('/ai', aiRoutes)

module.exports = app
