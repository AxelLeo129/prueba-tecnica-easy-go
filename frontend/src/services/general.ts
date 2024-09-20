import axios, { AxiosResponse } from 'axios';
import env from "react-dotenv";


/**
 * Realiza una solicitud GET para obtener una lista de recursos con parámetros opcionales.
 * 
 * @template T - El tipo esperado de la respuesta.
 * @param {string} url - La URL relativa del endpoint al cual se realizará la solicitud.
 * @param {Record<string, unknown>} [params] - Un objeto que contiene los parámetros opcionales de la solicitud.
 * @returns {Promise<T | null>} - Retorna los datos obtenidos del servidor o `null` en caso de error.
 * 
 * @example
 * const data = await list<Task[]>('tasks', { status: 'active' });
 * console.log(data);
 */
export const list = async <T>(url: string, params?: Record<string, unknown>): Promise<T | null> => {
    try {
        // Hacer la solicitud con los parámetros opcionales
        const response: AxiosResponse<T> = await axios.get(env.API_URL + url, { params });
        return response.data;  // Retornar solo los datos de la respuesta
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;  // Manejo de errores
    }
};

/**
 * Realiza una solicitud GET para obtener un recurso específico.
 * 
 * @template T - El tipo esperado de la respuesta.
 * @param {string} url - La URL relativa del endpoint del recurso a obtener.
 * @returns {Promise<T | null>} - Retorna los datos obtenidos del servidor o `null` en caso de error.
 * 
 * @example
 * const task = await get<Task>('tasks/1');
 * console.log(task);
 */
export const get = async <T>(url: string): Promise<T | null> => {
    try {
        // Hacer la solicitud con los parámetros opcionales
        const response: AxiosResponse<T> = await axios.get(env.API_URL + url);
        return response.data;  // Retornar solo los datos de la respuesta
    } catch (error) {
        console.error('Error getting data:', error);
        return null;  // Manejo de errores
    }
};

/**
 * Realiza una solicitud POST para crear un nuevo recurso.
 * 
 * @template T - El tipo esperado de la respuesta.
 * @template U - El tipo del payload enviado en la solicitud.
 * @param {string} url - La URL relativa del endpoint al cual se enviará el recurso.
 * @param {U} payload - El objeto que se enviará en el cuerpo de la solicitud.
 * @returns {Promise<T | null>} - Retorna los datos obtenidos del servidor o `null` en caso de error.
 * 
 * @example
 * const newTask = await post<Task, TaskPayload>('tasks', { title: 'Nueva tarea', description: 'Descripción' });
 * console.log(newTask);
 */
export const post = async <T, U>(url: string, payload: U): Promise<T | null> => {
    try {
        const response: AxiosResponse<T> = await axios.post(env.API_URL + url, payload);
        return response.data;  // Retorna los datos de la respuesta
    } catch (error) {
        console.error('Error posting data:', error);
        return null;  // Manejo de errores
    }
};

/**
 * Realiza una solicitud PUT para actualizar un recurso existente.
 * 
 * @template T - El tipo esperado de la respuesta.
 * @template U - El tipo del payload enviado en la solicitud.
 * @param {string} url - La URL relativa del endpoint del recurso a actualizar.
 * @param {U} payload - El objeto que se enviará en el cuerpo de la solicitud para actualizar el recurso.
 * @returns {Promise<T | null>} - Retorna los datos obtenidos del servidor o `null` en caso de error.
 * 
 * @example
 * const updatedTask = await put<Task, TaskPayload>('tasks/1', { title: 'Tarea actualizada' });
 * console.log(updatedTask);
 */
export const put = async <T, U>(url: string, payload: U): Promise<T | null> => {
    try {
        const response: AxiosResponse<T> = await axios.put(env.API_URL + url, payload);
        return response.data;  // Retorna los datos de la respuesta
    } catch (error) {
        console.error('Error putting data:', error);
        return null;  // Manejo de errores
    }
};

/**
 * Realiza una solicitud DELETE para eliminar un recurso específico.
 * 
 * @template T - El tipo esperado de la respuesta.
 * @param {string} url - La URL relativa del endpoint del recurso a eliminar.
 * @returns {Promise<T | null>} - Retorna los datos obtenidos del servidor o `null` en caso de error.
 * 
 * @example
 * const deletedTask = await delete0<Task>('tasks/1');
 * console.log(deletedTask);
 */
export const delete0 = async <T>(url: string): Promise<T | null> => {
    try {
        const response: AxiosResponse<T> = await axios.delete(env.API_URL + url);
        return response.data;  // Retorna los datos de la respuesta
    } catch (error) {
        console.error('Error putting data:', error);
        return null;  // Manejo de errores
    }
};