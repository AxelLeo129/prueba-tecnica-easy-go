import axios, { AxiosResponse } from 'axios';
import env from "react-dotenv";

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

export const post = async <T, U>(url: string, payload: U): Promise<T | null> => {
    try {
        const response: AxiosResponse<T> = await axios.post(env.API_URL + url, payload);
        return response.data;  // Retorna los datos de la respuesta
    } catch (error) {
        console.error('Error posting data:', error);
        return null;  // Manejo de errores
    }
};

export const put = async <T, U>(url: string, payload: U): Promise<T | null> => {
    try {
        const response: AxiosResponse<T> = await axios.put(env.API_URL + url, payload);
        return response.data;  // Retorna los datos de la respuesta
    } catch (error) {
        console.error('Error putting data:', error);
        return null;  // Manejo de errores
    }
};

export const delete0 = async <T>(url: string): Promise<T | null> => {
    try {
        const response: AxiosResponse<T> = await axios.delete(env.API_URL + url);
        return response.data;  // Retorna los datos de la respuesta
    } catch (error) {
        console.error('Error putting data:', error);
        return null;  // Manejo de errores
    }
};