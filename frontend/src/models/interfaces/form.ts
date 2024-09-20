/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */

/**
 * @interface FormProps
 * Define las propiedades que se pasan a un componente de formulario para manejar el flujo de edición, alertas y recarga de datos.
 * 
 * @property {any} [data] - Los datos opcionales que se editan o se muestran en el formulario. Puede ser de cualquier tipo.
 * @property {Function} setEditData - Función para establecer los datos que se están editando.
 * @property {Function} onAlertChange - Función para cambiar las opciones o el estado de las alertas.
 * @property {Function} onClose - Función que se ejecuta cuando se cierra el formulario.
 * @property {Function} onReload - Función que se llama para recargar los datos después de realizar una acción en el formulario.
 */
export interface FormProps {
    data?: any;
    setEditData: Function;
    onAlertChange: Function;
    onClose: Function;
    onReload: Function;
}