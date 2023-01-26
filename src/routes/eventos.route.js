import { Router } from "express";
import { geteventos,createEventos } from "../controllers/eventosController.js";

const router = Router()


router.get("/eventos", geteventos);

router.post("/eventos",createEventos)


export default router
