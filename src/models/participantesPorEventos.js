import {pool} from '../db.js'

export class ParticipantesPorEventosModel {

    constructor(eventos_id,participante_id) {
        this.eventos_id=eventos_id;
        this.participante_id=participante_id;   
    }

    async fetchAll () {
       const [rows] = await pool.query('SELECT * FROM participantePorEvento')
       return rows
    }

    async createParticipantesPorEvento(req,res){
        const {eventos_id,participante_id} = req.body
        const [rows] = await pool.query('INSERT INTO participantePorEvento (eventos_id,participante_id) VALUES (?,?) ', [eventos_id,participante_id])
        console.log(rows)
        return rows
    }

    async getParticipantePorEvent (id){
       
        const [rows] = await pool.query('SELECT participantes.id,participantes.nameP FROM participantePorEvento INNER JOIN eventos ON participantePorEvento.eventos_id=eventos.id INNER JOIN participantes ON participantePorEvento.participante_id = participantes.id WHERE eventos_id=? ',[id])
        return rows
    }

    async getEventoCon (id){
        const [rows] = await pool.query('SELECT eventos.id,eventos.title,eventos.description FROM participantePorEvento INNER JOIN eventos ON participantePorEvento.eventos_id=eventos.id INNER JOIN participantes ON participantePorEvento.participante_id = participantes.id WHERE participante_id=? ',[id])
        return rows

    }
}