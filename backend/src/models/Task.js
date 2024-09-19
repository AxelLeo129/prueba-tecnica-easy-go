import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Task = sequelize.define('tasks', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.TEXT,
    },
    limit_date: {
        type: DataTypes.DATEONLY
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    updatedAt: false,
});