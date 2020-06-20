import { Router } from 'express'

const api = Router()

api.get('/', (req, res) => {
  res.send('Web full stack api')
})
api.get('/point', () => {})
api.post('/point', () => {})

export default api
