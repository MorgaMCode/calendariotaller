import { Router } from "express";
import {ParticipantesPorEvento} from "../controllers/participantesPorEventos.Controller.js";

const router = Router()
const participantesPorEvento = new ParticipantesPorEvento;
const rout = '/api/participantesEventos';




router.get(`${rout}`,participantesPorEvento.fetchAll );
router.get(`${rout}/participanteEn/:id`,participantesPorEvento.getParticipantePorEvent );
router.post(`${rout}`,participantesPorEvento.createParticipantesPorEvento);
router.get(`${rout}/eventoCon/:id`,participantesPorEvento.getEventoCon );




export default router