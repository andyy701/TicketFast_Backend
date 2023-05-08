import { ANP } from "../models/ANP.js";
import multer from "multer";
import path from "path";

export const createANP = async (req, res) => {
    try {
        const { nombre, descripcion, precio } = req.body;
        const { path } = req.file
        const newANP = await ANP.create({
            nombre: nombre,
            descripcion: descripcion,
            precio: precio,
            imagen: path
        })
        res.json(newANP)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
export const getANPs = async (req, res) => {
    try {
        
        const newANP = await ANP.findAll()
        res.json(newANP)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
export const uploadImagen = () => {
    const storage = multer.diskStorage({
        destination: './Images',
        filename: function (_req, file, cb) {
            var extension = file.originalname.slice(file.originalname.lastIndexOf('.'))
            cb(null, Date.now() + extension)
        }
    })

    const upload = multer({ storage: storage }).single('imagen')

    return upload
}



