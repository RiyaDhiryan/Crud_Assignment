const express = require('express')
const app = express();
require('dotenv').config();
const connection = require('./config/db.js')
const cors = require('cors')

//db connection
connection()

//Express Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
//Routes
const UserRoutes = require('./Routes/userRoutes.js')
app.use('/',UserRoutes)



module.exports = app