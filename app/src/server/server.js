const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose   = require('mongoose')
const emoji = require('node-emoji')
const Todo = require('./models/todo')

mongoose.connect('mongodb://localhost:27017/todoapp');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = 8080

// This route is to gather all our todos from our database
app.get('/todos', (req, res) => {
  Todo.find({}, (err, todos) => {
    if(err) {
      res.send(err)
    }

    res.json(todos)
  })
})

// This route is to insert a new todo to our database
app.post('/create-todo', (req, res) => {
  let todo = new Todo()
  todo.name = req.body.name
  todo.createdAt = Date.now()

  todo.save(err => {
      if (err)
          res.send(err)

      res.json({msg: 'Todo added successfully to the database'})
  })
})

app.listen(port, () => console.log(emoji.emojify('I :heart: :coffee:!')))

// app.listen(port, function() {
//   return console.log(emoji.emojify('I :heart: :coffee:!'))
// })
