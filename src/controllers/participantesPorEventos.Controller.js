import {pool} from '../db.js'
import {ParticipantesPorEventosModel} from '../models/participantesPorEventos.js';
import { EventoModel } from '../models/eventos.modelo.js';
import { participanteModel } from '../models/participante.modelo.js';

const participantesPorEventosModel = new ParticipantesPorEventosModel;

export class ParticipantesPorEvento{

    async  createParticipantesPorEvento(req,res) {
        try {
            const result = await participantesPorEventosModel.createParticipantesPorEvento(req,res);
        res.status(200).json({
            message: 'registro participante Por Evento Creado'
        });
        } catch (error) {
            res.status(500).json({msg: 'Error al crear un registro'})  
        }
    }
    async getParticipantePorEvent (req,res) {  

        try {
            const entoModel = new EventoModel

            const result = await participantesPorEventosModel.getParticipantePorEvent(req.params.id);
            const result2 = await entoModel.getEvento(req.params.id);
        res.status(200).json({
            evento:result2,
            participantes:result
        });
        } catch (error) {
            console.log(error)
            // res.status(500).json(error)
            
        }
    }
      async fetchAll (req,res) {
        try {
            const result = await participantesPorEventosModel.fetchAll();
        res.json(result);
        } catch (error) {
            res.status(500).json({msg: 'Error al obtener el registro'})  

        }
        
    }

    async getEventoCon (req,res){

        
        try {
            const getParticipante = new participanteModel
            const result = await participantesPorEventosModel.getEventoCon(req.params.id);
            const result2 = await getParticipante.getParticipante(req.params.id);
        res.status(200).json({
            participante:result2,
            eventos:result
        });
        } catch (error) {
            console.log(error)
            res.status(500).json({msg: 'Error al obtener el registro'})  
        }
    }
}



