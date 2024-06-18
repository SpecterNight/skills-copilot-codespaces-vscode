// Create web server for comments.
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

const comments = {}

app.get('/comments', (req, res) => {
  res.json(comments)
})

app.post('/comments', (req, res) => {
  const id = Date.now()
  comments[id] = req.body
  res.json(comments[id])
})

app.listen(3000, () => {
  console.log('Comments service started on port 3000')
})