import app from './app.js';
import { sequelize } from './database/database.js';

/**
 * Función principal que inicializa la aplicación y establece la conexión con la base de datos.
 * 
 * Intenta sincronizar la base de datos usando Sequelize y luego inicia el servidor
 * escuchando en el puerto 3000. En caso de error, se registra en la consola.
 * 
 * @async
 * @function main
 * @returns {Promise<void>} Promesa que se resuelve una vez que la base de datos está sincronizada y el servidor está en ejecución.
 */
const main = async () => {
    try {
        await sequelize.sync();
        console.log("# Connection has been established successfully");
        app.listen(3000);
        console.log("# Listen in port 3000");
    } catch(error) {
        console.log("# Unable to connect to the database: ", error);
    }
}

// Llama a la función principal para ejecutar la aplicación
main();