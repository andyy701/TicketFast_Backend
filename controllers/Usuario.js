import { Usuario } from "../models/Usuario.js";

export const createUsuario = async (req, res) => {
    try {
        const { correo, contraseña, nombre, apellido } = req.body;
        const newUsuario = await Usuario.create({
            correo: correo,
            contraseña: contraseña,
            nombre: nombre,
            apellido: apellido
        })
        res.json(newUsuario)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
export const getUsuarios = async (req, res) => {
    try {

        const usuarios = await Usuario.findAll();
        res.json(usuarios)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}
export const getUsuario = async (req, res) => {
    try {

        const usuario = await Usuario.findByPk(req.params.id)
        res.json(usuario)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
export const updateUsuario = async (req, res) => {

    try {
        const { id } = req.params;
        const { correo, contraseña, nombre, apellido } = req.body;

        //console.log(id);
        //console.log(req.body);
        //res.send('updating projects');
        const usuario = await Usuario.findByPk(id);
        usuario.correo = correo;
        usuario.contraseña = contraseña;
        usuario.nombre = nombre;
        usuario.apellido = apellido;
        //para guardar las modificaciones al objeto en la base de datos
        await usuario.save();
        res.json({ message: "Datos actualizados" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}
export const deleteUsuario = async (req, res) => {
    try {
        const { id } = req.params
        const usuario = await Usuario.destroy({
            where: {
                id: id
            }
        })
        res.json(usuario)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
export const iniciarSesionUsuario = async (req, res) => {
    try {
        const { correo, contraseña } = req.body
        const usuario = await Usuario.findOne({
            where: {
                correo: correo,
                contraseña: contraseña
            }
        })
        res.json(usuario)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}