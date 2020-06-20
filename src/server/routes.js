import { Router } from 'express'
import { getPoints, savePoint } from './pointContoller'
const api = Router()

api.get('/point', getPoints)
api.post('/point', savePoint)

export default api
