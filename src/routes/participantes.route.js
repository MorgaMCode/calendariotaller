import { Router } from "express";
import { getParticipantes,postParticipantes } from "../controllers/participantesController.js";


const router = Router()


router.get("/participantes",getParticipantes);
router.post("/participantes",postParticipantes);




export default router
