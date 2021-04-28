import express from 'express'
import Product from '../models/productModel.js'
const productRoutes = express.Router()

productRoutes.get('/', async (req, res) => {
  const products = await Product.find((err, products) => {
    if (err) return console.error(err.message)
    return products
  })
  res.json(products)
})

productRoutes.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id, (err, product) => {
    if (err) return console.error('error' + err.message)
    return product
  })
  if (product) {
    res.json(product)
  } else {
    res.status(404).json({ message: 'Product not found.' })
  }
})

export default productRoutes
