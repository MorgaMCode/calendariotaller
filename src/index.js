import express from 'express'
import {pool} from './db.js'
import eventosRouter from './routes/eventos.route.js'
import participantesRouter from './routes/participantes.route.js'
import  participantesPorEventoRouter  from './routes/participantesPorEvento.route.js'

const app = express()

app.use(express.json())

app.use(eventosRouter)
app.use(participantesRouter)
app.use(participantesPorEventoRouter);



app.listen(3000)
console.log("servidor activo")