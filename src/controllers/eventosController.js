

import {pool} from '../db.js'
import  {EventoModel} from '../models/eventos.modelo.js'


const eventosController= new EventoModel;

export class EventoController {

  async createEventos  (req,res){
    try {
   const result = await eventosController.createEvent(req,res);
       res.send({
    message:'evento creado'
  })
  } catch (error) {
     res.status(500).json({msg: 'Error al crear el evento'})  
    
}
   }


   async geteventos(req,res){
    try {
      const result = await eventosController.getAll(req,res);
       res.send(result);
    } catch (error) {
      return res.status(500).json({msg: 'Error al crear el evento'})  
    }
   };

   async getEvento(req,res){
      try {
        const result = await eventosController.getEvento(req.params.id);
         res.send(result);
      } catch (error) {
         
         res.status(500).json({msg: 'Error al crear el evento'})  
      }
   }
   async getEventoFuture  (req,res){
    try {
      const result = await eventosController.getEventoFuture(req,res);
       res.send(result);
    } catch (error) {
       res.status(500).json({msg: 'Error al crear el evento'})  
    }
    
   }

   async getEventoFutureNow (req,res) {
    try {
      const result = await eventosController.getEventoFutureNow(req,res);
       res.send(result);
    } catch (error) {
       res.status(500).json({msg: 'Error al crear el evento'})  
    }
   }

     async getEventoPast  (req,res) {
   
      try {
        const result = await eventosController.getEventoPast(req,res);
         res.send(result);
      } catch (error) {
         res.status(500).json({msg: 'Error al obtener el evento'})  
      }
   }
    async getEventoPastNow  (req,res){
      try {
        const result = await eventosController.getEventoPastNow(req,res);
         res.send(result);
      } catch (error) {
         res.status(500).json({msg: 'Error al obtener el evento'})  
      }
   }

    async getEventosBetweenfechaI  (req,res){
      try {
        const result = await eventosController.getEventosBetweenfechaI(req,res);
         res.send(result);
      } catch (error) {
         res.status(500).json({msg: 'Error al obtener el evento'})  
      }
   }
}
  
     







  
   

   
    
