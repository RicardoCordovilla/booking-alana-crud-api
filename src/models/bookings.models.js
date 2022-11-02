const db = require("../utils/database")
const { DataTypes } = require("sequelize")
const Users = require("./users.models")


const Bookings = db.define('bookings', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    zoneName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    completename: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    adults: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:1
    },
    kids: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    category: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:4
    },
    pay: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    notes: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'N/A'
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_id',
        references: {
            key: 'id',
            model: Users
        }
    }

}, { timestamps: true })

module.exports = Bookings