import { Router } from "express";
import { createANP, getANPs, uploadImagen } from "../controllers/ANP.js";

const router=Router();
 
router.post('/anps',uploadImagen(),createANP)
router.get('/anps',getANPs)

export default router;