import { Task } from "./task";

/**
 * @interface ListProps
 * Define las propiedades que se pasan a un componente que muestra y manipula una lista de tareas.
 * 
 * @property {Task[]} data - El arreglo de tareas que se muestra en la lista.
 * @property {(tasks: Task[]) => void} setData - Función para actualizar el estado de las tareas en el componente.
 * @property {(id: string) => void} getData - Función que obtiene los detalles de una tarea específica usando su ID.
 * @property {(id: string) => void} deleteAction - Función que maneja la eliminación de una tarea por su ID.
 * @property {(id: string) => Promise<void>} changeStatus - Función asíncrona que cambia el estado (completado o no) de una tarea específica.
 */
export interface ListProps {
    data: Task[];
    setData: (tasks: Task[]) => void;
    getData: (id: string) => void;
    deleteAction: (id: string) => void;
    changeStatus: (id: string) => Promise<void>;
}