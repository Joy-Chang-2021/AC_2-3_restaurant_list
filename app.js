// setting route
const express = require('express')
const app = express()
const port = 3000

// setting handlebars
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultlayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))
const restaurant = require('./restaurant.json').results

// index page
app.get('/', (req, res) => {
  res.render('index', { restaurant: restaurant })
})

// shop page ( : params )
app.get('/restaurants/:id', (req, res) => {
  const info = restaurant.find(store => store.id.toString() === req.params.id)
  res.render('show', { restaurant: info })
})

// search ( ? query )
app.get('/search', (req, res) => {
  const filtered_list = restaurant.filter(store => {
    const string = store.name + store.category
    return string.toLowerCase().includes(req.query.keyword.toLowerCase())
  })
  if (filtered_list.length === 0) res.render('error', { keyword: req.query.keyword })
  else (res.render('index', { restaurant: filtered_list, keyword: req.query.keyword }))
})

// listen
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})