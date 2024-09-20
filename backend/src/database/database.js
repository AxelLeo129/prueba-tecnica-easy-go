import Sequelize from 'sequelize';
import dotenv from 'dotenv'


// Carga las variables de entorno desde el archivo .env
dotenv.config();

/**
 * Inicializa una nueva instancia de Sequelize para la conexión a la base de datos.
 * 
 * Se utiliza el dialecto MySQL y las credenciales de conexión se cargan desde
 * las variables de entorno definidas en el archivo .env.
 *
 * @type {Sequelize} sequelize - Instancia de Sequelize para manejar la conexión a la base de datos.
 * @param {string} process.env.DB_NAME - Nombre de la base de datos.
 * @param {string} process.env.DB_USERNAME - Usuario de la base de datos.
 * @param {string} process.env.DB_PASSWORD - Contraseña del usuario de la base de datos.
 * @param {string} process.env.DB_HOST - Dirección del host de la base de datos (ej. localhost o una IP).
 * @param {string} dialect - Define el dialecto de la base de datos (en este caso, MySQL).
 */
export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});