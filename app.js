// setting route
const express = require('express')
const app = express()
const port = 3000

// index page
app.get('/', (req, res) => {
  res.send('index page')
})

// shop page

// listen
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})