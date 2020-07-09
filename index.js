const express = require('express')
const routes = require('./routes')
require('dotenv').config()


const app = express()
app.use(routes)
app.use(express.json())


app.listen(3000, () => console.log('🏁  Backend Iniciado  🏁'));
