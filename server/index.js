require('dotenv').config()
const express = require('express')
const {json} = require('body-parser')
const massive = require('massive')

const app = express()
app.use(json())

const SERVER_PORT = 4040
app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`))