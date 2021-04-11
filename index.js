import express from 'express'
import userRoutes from './routes/users.js'

// Initialize environment variables
const host = process.env.HOST
const port = process.env.PORT

// Initialize express
const app = express()
app.use(express.json())

// Importing default route
app.get('/', (req, res) => {
  res.send('Hello from homepage')
})

// Importing user routes
app.use('/users', userRoutes)

// Initialize server
app.listen(port, () => {
  console.log(`Server running on: ${host}:${port}`)
})
