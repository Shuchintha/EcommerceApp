import dotenv from 'dotenv'
import users from './data/user.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'
// import mongoose from 'mongoose'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)
    console.log(createdUsers)
    const adminUser = createdUsers[0]._id
    console.log('adminUser', adminUser)

    const sampleProducts = products.map(product => {
      return { ...product, user: adminUser }
    })
    console.log('sampleProducts:====  ', sampleProducts)

    await Product.insertMany(sampleProducts)
    console.log('hhhhshshhshshshhshshshshshsdsjkafhas')

    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
