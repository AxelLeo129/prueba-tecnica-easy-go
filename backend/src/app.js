import express from 'express';
import tasksRoutes from './routes/tasks.routes.js';
import cors from 'cors';

const app = express();

/**
 * Inicializa una aplicación de Express.
 *
 * La aplicación se configura para usar JSON en las solicitudes, habilitar CORS y
 * manejar las rutas relacionadas con las tareas.
 * 
 * @type {Express}
 */

/**
 * Middleware para analizar el cuerpo de las solicitudes entrantes como JSON.
 *
 * @memberof module:app
 * @function
 */
app.use(express.json());

/**
 * Middleware para habilitar CORS (Cross-Origin Resource Sharing).
 * 
 * Permite que las solicitudes se realicen desde otros dominios.
 *
 * @memberof module:app
 * @function
 */
app.use(cors());

/**
 * Middleware que maneja las rutas relacionadas con las tareas.
 *
 * Las rutas se definen en el módulo `tasksRoutes`.
 * 
 * @memberof module:app
 * @function
 */
app.use(tasksRoutes);

export default app;