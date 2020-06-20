import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import path from 'path'

const port = process.env.PORT || 8888
const app = express()

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '../../dist')))
  app.get('/', (request, response) => {
    response.sendFile(path.resolve('index.html'))
  })
}

app.get('/api/', (request, response) => {
  response.send('Web full stack api')
})

app.listen(port)
