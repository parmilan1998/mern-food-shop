const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()

// Set the PORT
const PORT = process.env.PORT || 5000

// Initialalize the express application
const app = express()

// Set the middleware
app.use(cors())
app.use(express.json())

// Connect the mogodb server
const { MongoClient, ServerApiVersion } = require('mongodb')
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@duocode.0e6n0av.mongodb.net/?retryWrites=true&w=majority`

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

async function run() {
  try {
    await client.connect()
    // Database and collection
    const menuCollection = client.db("md-kitchen-restaurant").collection("menu")
    const cartCollection = client.db("md-kitchen-restaurant").collection("cartItems")

    // All the menu items operations
    app.get("/menu", async(req,res)=>{
        const result = await menuCollection.find().toArray()
        res.send(result)
    })

    await client.db('admin').command({ ping: 1 })
    console.log('Mongodb connected successfully!.....')
  } finally {
    // await client.close()
  }
}
run().catch(console.dir)

app.get('/', (req, res) => {
  res.send('API is running!...')
})

app.listen(PORT, () => {
  console.log(`Server running successfully on port ${PORT}`)
})
