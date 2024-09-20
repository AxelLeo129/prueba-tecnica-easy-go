import { Router } from "express";
import { getTasks, getTask, createTask, deleteTask, updateTask, changeDoneStatus } from '../controllers/tasks.controllers.js';

const router = Router();

/**
 * Define las rutas para las operaciones CRUD de las tareas.
 *
 * @type {Router}
 * 
 * Las rutas están asociadas con los controladores que manejan las operaciones
 * para obtener, crear, actualizar, eliminar y cambiar el estado de las tareas.
 */

/**
 * Ruta para obtener todas las tareas activas.
 * 
 * @name GET /tasks
 * @function
 * @memberof module:router~tasksRouter
 * @inner
 * @param {Function} getTasks - Controlador que maneja la obtención de todas las tareas.
 */
router.get('/tasks', getTasks);


/**
 * Ruta para crear una nueva tarea.
 * 
 * @name POST /tasks
 * @function
 * @memberof module:router~tasksRouter
 * @inner
 * @param {Function} createTask - Controlador que maneja la creación de una tarea.
 */
router.post('/tasks', createTask);

/**
 * Ruta para actualizar una tarea existente.
 * 
 * @name PUT /tasks/:id
 * @function
 * @memberof module:router~tasksRouter
 * @inner
 * @param {string} id - El ID de la tarea que se va a actualizar.
 * @param {Function} updateTask - Controlador que maneja la actualización de una tarea.
 */
router.put('/tasks/:id', updateTask);

/**
 * Ruta para eliminar (desactivar) una tarea.
 * 
 * @name DELETE /tasks/:id
 * @function
 * @memberof module:router~tasksRouter
 * @inner
 * @param {string} id - El ID de la tarea que se va a eliminar.
 * @param {Function} deleteTask - Controlador que maneja la eliminación de una tarea.
 */
router.delete('/tasks/:id', deleteTask);

/**
 * Ruta para obtener una tarea específica por su ID.
 * 
 * @name GET /tasks/:id
 * @function
 * @memberof module:router~tasksRouter
 * @inner
 * @param {string} id - El ID de la tarea que se va a obtener.
 * @param {Function} getTask - Controlador que maneja la obtención de una tarea específica.
 */
router.get('/tasks/:id', getTask);

/**
 * Ruta para cambiar el estado de completado (done) de una tarea.
 * 
 * @name PUT /tasks/change-status/:id
 * @function
 * @memberof module:router~tasksRouter
 * @inner
 * @param {string} id - El ID de la tarea cuyo estado se va a cambiar.
 * @param {Function} changeDoneStatus - Controlador que maneja el cambio de estado de la tarea.
 */
router.put('/tasks/change-status/:id', changeDoneStatus);

export default router;