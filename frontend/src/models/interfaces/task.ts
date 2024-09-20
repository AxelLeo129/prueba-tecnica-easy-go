/**
 * @interface Task
 * Representa una tarea con toda la información necesaria, incluyendo su estado y fechas.
 * 
 * @property {number} id - Identificador único de la tarea.
 * @property {string} title - Título descriptivo de la tarea.
 * @property {string} description - Descripción detallada de la tarea.
 * @property {string} limit_date - Fecha límite para la tarea, en formato 'YYYY-MM-DD'.
 * @property {boolean} active - Indica si la tarea está activa.
 * @property {boolean} done - Indica si la tarea ha sido completada.
 * @property {string} createdAt - Fecha de creación de la tarea, en formato ISO.
 */
export interface Task {
    id: number;
    title: string;
    description: string;
    limit_date: string;
    active: boolean;
    done: boolean;
    createdAt: string;
}

/**
 * @interface PostTask
 * Representa los datos necesarios para crear o actualizar una tarea.
 * 
 * @property {string} title - Título descriptivo de la tarea.
 * @property {string} description - Descripción detallada de la tarea.
 * @property {string} limitDate - Fecha límite para la tarea, en formato 'YYYY-MM-DD'.
 */
export interface PostTask {
    title: string;
    description: string;
    limitDate: string;
}