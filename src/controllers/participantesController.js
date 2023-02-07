
import {pool} from '../db.js'
import { participanteModel } from '../models/participante.modelo.js';


const participantesModel = new participanteModel

export class ParticipantesControllers {


    async fetchAll(req,res)   {
        try {
            const result = await participantesModel.fetchAll()
            res.json(result)          
        }catch (error) {
            res.status(500).json({msg: 'Error al obtener el evento'})  
        }
        
    }
    async getParticipante  (req,res) {
        try {
            const result = await participantesModel.getParticipante(req,res)
            res.json(result)         
        }catch (error) {
            res.status(500).json({msg: 'Error al obtener el evento'})  
        }
    }
    async  createParticipantes   (req,res){
        try {
            const result = await participantesModel.createParticipantes(req,res)
            res.status(200).json({
                message:'participante creado con exito'
            })         
        }catch (error) {
            res.status(500).json({msg: 'Error al obtener el evento'})  
        }
    }
}




