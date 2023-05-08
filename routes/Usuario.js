import { Router } from "express";
import { createUsuario,getUsuarios,getUsuario,deleteUsuario,updateUsuario, iniciarSesionUsuario } from "../controllers/Usuario.js";

const router=Router();
 
router.post('/usuarios',createUsuario)
router.get('/usuarios',getUsuarios)
router.get('/usuarios/:id',getUsuario)
router.put('/usuarios/:id',updateUsuario)
router.delete('/usuarios/:id',deleteUsuario)
router.post('/iniciarSesion',iniciarSesionUsuario)

export default router;