const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ActivityCategory = sequelize.define('ActivityCategory', {
    category_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'activity_categories',
    timestamps: false
});

module.exports = ActivityCategory;
