require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')
const controller = require('./controller')

const SERVER_PORT = 5000;

const { CONNECTION_STRING } = process.env

app.use(express.json())


//Endpoints Here
app.get('/api/inventory', controller.getInventory)
app.post('/api/product', controller.createProduct)
app.delete(`/api/product/:id`, controller.deleteProduct)


massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false }
})
  .then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () =>
      console.log(`Warp Speed ${SERVER_PORT}`))
  }).catch(err => console.log(err));


