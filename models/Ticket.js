import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { ANP } from "./ANP.js";
import { Payment } from "./Payment.js";


export const Ticket = sequelize.define('Tickets', {

    // Común para todos
    
    buying_date: {
        type: DataTypes.DATEONLY
    },
    ticket_date: {
        type: DataTypes.DATEONLY
    }

}, {
    //esto sirve para quitar las tablas de createdAt y updatedAt
    timestamps: true
});

Payment.belongsToMany(ANP, {
    as: "pay-anp",
    through: Ticket,
    foreignKey: 'payment_id',
    sourceKey: 'id'
})
ANP.belongsToMany(Payment, {
    as: "anp-pay",
    through: Ticket,
    foreignKey: 'anp_id',
    sourceKey: 'id'
})