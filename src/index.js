import express from 'express'
import {pool} from './db.js'
import eventosrouter from './routes/eventos.route.js'
import participantesrouter from './routes/participantes.route.js'

const app = express()

app.use(express.json())

app.use(eventosrouter)
app.use(participantesrouter)



app.listen(3000)
console.log("servidor activo")