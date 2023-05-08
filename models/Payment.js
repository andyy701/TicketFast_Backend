import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";


export const Payment = sequelize.define('Payments', {

    // Común para todos
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    total: {
        type: DataTypes.INTEGER
    },
    ticket_quantity: {
        type: DataTypes.STRING
    }

}, {
    //esto sirve para quitar las tablas de createdAt y updatedAt
    timestamps: true
});

