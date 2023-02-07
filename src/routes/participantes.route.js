import { Router } from "express";
import { ParticipantesControllers } from "../controllers/participantesController.js";


const router = Router()
const participantesController = new ParticipantesControllers
const rout = '/api/participantes';


router.get(`${rout}`,participantesController.fetchAll);
router.get(`${rout}/:id`,participantesController.getParticipante);
router.post(`${rout}`,participantesController.createParticipantes);




export default router
