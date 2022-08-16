import express from 'express'
import cors from 'cors'
import routes from './routes';
import dotenvsafe from 'dotenv-safe'

const http = require('http')

dotenvsafe.config({
    allowEmptyValues: true
})

const app = express()

app.use(cors())
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({extended: true, limit: '50mb'}))
app.use(routes)

const httpServer = http.createServer(app)
const portServer = process.env.PORT || 9092;
httpServer.listen(portServer, () =>{
    console.log(`http Server runing on port ${portServer}`)
})