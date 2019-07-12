require('dotenv').config()
const express = require('express')
const {json} = require('body-parser')
const massive = require('massive')
const ctrl = require('./controller')
const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()
app.use(json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
})

app.get('/api/todo', ctrl.getTodos)
app.post('/api/todo', ctrl.addTodo)
app.delete('/api/todo/:id', ctrl.deleteTodo)

const PORT = SERVER_PORT || 4050
app.listen(PORT, () => console.log(`Server running on port ${SERVER_PORT}`))