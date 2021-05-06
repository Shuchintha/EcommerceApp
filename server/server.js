import express from 'express'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import orderRoutes from './routes/orderRoutes.js'

dotenv.config()
const app = express()
connectDB()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running')
})
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  5000,
  console.log(`Server running ... in ${process.env.NODE_ENV} at ${PORT}`)
)
