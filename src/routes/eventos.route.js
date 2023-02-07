import { Router } from "express";
import { EventoController } from "../controllers/eventosController.js";

const router = Router()
const eventoController =new EventoController
const rout = '/api/eventos';
    router.post(`${rout}`,eventoController.createEventos);

// todos
    router.get(`${rout}`, eventoController.geteventos);
    router.get(`${rout}/:id`, eventoController.getEvento);

// futuro desde hoy y futuros segun fecha
    router.get(`${rout}/futuros`,eventoController.getEventoFuture);
    router.get(`${rout}/futuros/now`, eventoController.getEventoFutureNow);

// pasado desde hoy y futuros segun fecha
    router.get(`${rout}/pasados`, eventoController.getEventoPast);
    router.get(`${rout}/pasados/now`, eventoController.getEventoPastNow);
    
// consultas con un rango de fecha entre ya sea inicio o psado
    router.get(`${rout}/between/FInit`, eventoController.getEventosBetweenfechaI);


export default router
