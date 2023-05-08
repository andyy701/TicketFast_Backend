import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const ANP = sequelize.define('ANPs',{

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    nombre:{
        type: DataTypes.STRING
    },
    descripcion:{
        type: DataTypes.TEXT
    },
    precio:{
        type: DataTypes.INTEGER
    },
    imagen:{
        type: DataTypes.STRING
    }
}, {
    //esto sirve para quitar las tablas de createdAt y updatedAt
    timestamps: true
})