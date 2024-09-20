/* eslint-disable @typescript-eslint/no-wrapper-object-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { AlertColor, SnackbarCloseReason, TextFieldVariants } from "@mui/material";
import { ReactNode } from "react";

/* eslint-disable @typescript-eslint/no-unsafe-function-type */

/**
 * @interface LoadingCustomProps
 * Propiedades personalizadas para el componente de carga.
 * 
 * @property {boolean} isLoading - Indica si el componente está en estado de carga.
 */
export interface LoadingCustomProps {
    isLoading: boolean;
}

/**
 * @interface QuestionDialogCustomProps
 * Propiedades para un componente de diálogo de confirmación con múltiples acciones.
 * 
 * @property {boolean} open - Controla si el diálogo está abierto o cerrado.
 * @property {Function} setOpen - Función para cambiar el estado del diálogo (abrir/cerrar).
 * @property {any} title - El título del diálogo, que puede ser texto o un componente React.
 * @property {Function} [handleCancel] - Función opcional para manejar la cancelación del diálogo.
 * @property {any} [colorCancel] - Color opcional del botón de cancelar.
 * @property {any} colorSubmit - Color del botón de enviar o confirmar.
 * @property {Function} handleSubmit - Función para manejar el envío o confirmación del diálogo.
 * @property {string} [cancelTitle] - Texto opcional para el botón de cancelar.
 * @property {string} [submitTitle] - Texto opcional para el botón de confirmar o enviar.
 * @property {Function} [handleSecondary] - Función opcional para manejar una acción secundaria en el diálogo.
 * @property {any} [colorSecondary] - Color opcional del botón secundario.
 * @property {string} [secondaryTitle] - Título opcional para la acción secundaria.
 */
export interface QuestionDialogCustomProps {
    open: boolean;
    setOpen: Function;
    title: any;
    handleCancel?: Function;
    colorCancel?: any;
    colorSubmit: any;
    handleSubmit: Function;
    cancelTitle?: string;
    submitTitle?: string;
    handleSecondary?: Function;
    colorSecondary?: any;
    secondaryTitle?: string;
}

/**
 * @interface CustomTextFieldProps
 * Propiedades personalizadas para el campo de texto.
 * 
 * @property {string} name - Nombre del campo de texto.
 * @property {(value: any) => void} [onChange] - Función opcional para manejar los cambios en el valor del campo.
 */
export interface CustomTextFieldProps {
    name: string;
    onChange?: (value: any) => void;
};

/**
 * @interface ConfigTextField
 * Configuración personalizada para los campos de texto.
 * 
 * @property {boolean} [fullWidth] - Indica si el campo ocupa el ancho completo.
 * @property {TextFieldVariants} [variant] - Variante del campo de texto (outlined, filled, etc.).
 * @property {boolean} [error] - Indica si el campo tiene un error.
 * @property {string} [helperText] - Texto de ayuda o error mostrado debajo del campo.
 */
export interface ConfigTextField {
    fullWidth?: boolean;
    variant?: TextFieldVariants;
    error?: boolean;
    helperText?: string;
};

/**
 * @interface ConfigDatePicker
 * Configuración personalizada para el componente DatePicker.
 * 
 * @property {string} type - Tipo de campo, por ejemplo, 'date'.
 * @property {TextFieldVariants} variant - Variante del campo de texto.
 * @property {boolean} fullWidth - Indica si el campo debe ocupar el ancho completo.
 * @property {Object} InputLabelProps - Propiedades para el componente de etiqueta del DatePicker.
 * @property {boolean} [error] - Indica si el campo tiene un error.
 * @property {string} [helperText] - Texto de ayuda o error mostrado debajo del campo.
 */
export interface ConfigDatePicker {
    type: string;
    variant: TextFieldVariants;
    fullWidth: boolean;
    InputLabelProps: Object;
    error?: boolean;
    helperText?: string;
};

/**
 * @interface CustomButtonProps
 * Propiedades personalizadas para un botón.
 * 
 * @property {ReactNode} children - El contenido del botón (texto o componentes React).
 */
export interface CustomButtonProps {
    children: ReactNode;
};

/**
 * @interface FormDialogCustomProps
 * Propiedades para un componente de diálogo que contiene un formulario.
 * 
 * @property {boolean} open - Indica si el diálogo está abierto.
 * @property {() => void} handleClose - Función para cerrar el diálogo.
 * @property {JSX.Element} form - El formulario que se mostrará dentro del diálogo.
 */
export interface FormDialogCustomProps {
    open: boolean;
    handleClose: () => void;
    form: JSX.Element;
};

/**
 * @interface AlertOptions
 * Propiedades para mostrar una alerta (Snackbar) en la aplicación.
 * 
 * @property {boolean} open - Indica si la alerta está visible.
 * @property {number} autoHideDuration - Duración en milisegundos antes de que la alerta se cierre automáticamente.
 * @property {AlertColor} severity - Nivel de severidad de la alerta (error, warning, info, success).
 * @property {string} message - El mensaje que se mostrará en la alerta.
 * @property {(event: React.SyntheticEvent<any> | Event, reason: SnackbarCloseReason) => void} [onClose] - Función opcional que se ejecuta al cerrar la alerta.
 */
export interface AlertOptions {
    open: boolean;
    autoHideDuration: number;
    severity: AlertColor;
    message: string;
    onClose?: (event: React.SyntheticEvent<any> | Event, reason: SnackbarCloseReason) => void;
}