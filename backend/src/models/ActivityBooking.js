const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ActivityBooking = sequelize.define('ActivityBooking', {
    booking_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    activity_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    session_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    tableName: 'activity_bookings',
    timestamps: false
});

module.exports = ActivityBooking;
