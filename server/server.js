const { json } = require('body-parser')
const express = require('express')
const products = require('./data/products')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running')
})

app.get('/api/products/', (req, res) => {
  res.send(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find(prod => {
    return prod._id === req.params.id ? true : false
  })
  res.send(product)
})

app.listen(5000, console.log('Server running ...'))
