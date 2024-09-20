import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

/**
 * Modelo de la tabla 'tasks' en la base de datos.
 *
 * Define el modelo de datos de las tareas que se almacenan en la base de datos.
 *
 * @typedef {Object} Task
 * @property {number} id - Identificador único de la tarea, es la clave primaria y se incrementa automáticamente.
 * @property {string} title - Título de la tarea.
 * @property {string} description - Descripción detallada de la tarea.
 * @property {Date} limit_date - Fecha límite para completar la tarea (solo fecha, sin hora).
 * @property {boolean} active - Indica si la tarea está activa, por defecto es `true`.
 * @property {boolean} done - Indica si la tarea está completada, por defecto es `false`.
 * 
 * @param {Sequelize} sequelize - Instancia de Sequelize para definir el modelo.
 * @param {Object} options - Configuración del modelo.
 * @param {boolean} options.updatedAt - Deshabilita la columna 'updatedAt' para que no se gestione automáticamente.
 */
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
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    updatedAt: false,
});