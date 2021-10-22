// setting route
const express = require('express')
const app = express()
const port = 3000

// setting handlebars
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultlayout: 'main' }))
app.set('view engine', 'handlebars')

// index page
app.get('/', (req, res) => {
  res.render('index')
})

// shop page
app.get('/:id', (req, res) => {
  res.render('show')
})

// listen
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})