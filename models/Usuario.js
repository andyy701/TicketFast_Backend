import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Payment } from "./Payment.js";

export const Usuario = sequelize.define('Usuarios', {

    // Común para todos
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    correo:{
        type: DataTypes.STRING
    },
    contraseña:{
        type: DataTypes.STRING
    }

}, {
    //esto sirve para quitar las tablas de createdAt y updatedAt
    timestamps: true
});

//sequelize.getQueryInterface().removeColumn('Usuarios','sdada')
//sequelize.getQueryInterface().addColumn('Person', 'petName', { type: DataTypes.STRING });
// sequelize.getQueryInterface().changeColumn('Person', 'foo', {
//     type: DataTypes.FLOAT,
//     defaultValue: 3.14,
//     allowNull: false
//   });

//sequelize.getQueryInterface().addColumn('Usuarios', 'genero', { type: DataTypes.STRING });

Usuario.hasMany(Payment, {
    foreignKey: 'user_id',
    sourceKey: 'id'
})

Payment.belongsTo(Usuario, {
    foreignKey: 'user_id',
    targetId: 'id'
})
